// balance.js — рабочий балансировщик уравнений
// Поддерживает: скобки, гидраты, любые коэффициенты

var ELEMENTS_LIST = ['Ac','Ag','Al','Am','Ar','As','At','Au','B','Ba','Be','Bh','Bi','Bk','Br','C','Ca','Cd','Ce','Cf','Cl','Cm','Cn','Co','Cr','Cs','Cu','Db','Ds','Dy','Er','Es','Eu','F','Fe','Fl','Fm','Fr','Ga','Gd','Ge','H','He','Hf','Hg','Ho','Hs','I','In','Ir','K','Kr','La','Li','Lr','Lu','Lv','Mc','Md','Mg','Mn','Mo','Mt','N','Na','Nb','Nd','Ne','Nh','Ni','No','Np','O','Og','Os','P','Pa','Pb','Pd','Pm','Po','Pr','Pt','Pu','Ra','Rb','Re','Rf','Rg','Rh','Rn','Ru','S','Sb','Sc','Se','Sg','Si','Sm','Sn','Sr','Ta','Tb','Tc','Te','Th','Ti','Tl','Tm','Ts','U','V','W','Xe','Y','Yb','Zn','Zr'];

function parseAtoms(formula){
  var f = formula.replace(/\s/g,'');
  if(!f) return {};
  var parts = f.split(/[·*]/);
  var total = {};
  for(var p=0;p<parts.length;p++){
    var part = parts[p];
    var m = part.match(/^(\d+)(.*)$/);
    var mult = 1, body = part;
    if(m){ mult = parseInt(m[1]); body = m[2]; }
    var group = parseGroupAtoms(body);
    for(var el in group) total[el] = (total[el]||0) + group[el]*mult;
  }
  return total;
}

function parseGroupAtoms(s){
  var result = {}, i = 0;
  while(i < s.length){
    var ch = s[i];
    if(ch === '('){
      var depth = 1, j = i+1;
      while(j < s.length && depth > 0){
        if(s[j]==='(') depth++;
        else if(s[j]===')') depth--;
        if(depth===0) break;
        j++;
      }
      var inner = s.substring(i+1, j);
      var innerP = parseGroupAtoms(inner);
      i = j+1;
      var num='';
      while(i<s.length && /\d/.test(s[i])){ num += s[i]; i++; }
      var mul = num ? parseInt(num) : 1;
      for(var el in innerP) result[el] = (result[el]||0) + innerP[el]*mul;
    } else if(/[A-Z]/.test(ch)){
      var el = ch; i++;
      if(i<s.length && /[a-z]/.test(s[i])){ el += s[i]; i++; }
      var num2='';
      while(i<s.length && /\d/.test(s[i])){ num2 += s[i]; i++; }
      var cnt = num2 ? parseInt(num2) : 1;
      result[el] = (result[el]||0) + cnt;
    } else { i++; }
  }
  return result;
}

function gcd(a,b){ a=Math.abs(a); b=Math.abs(b); while(b){ var t=b; b=a%b; a=t; } return a; }

function balanceEquation(equation){
  try{
    var eq = equation.replace(/[→➔➜➝]|->|=>/g,'=').replace(/\s+/g,' ').trim();
    if(eq.indexOf('=')===-1) return {error:'Нужен знак «=» между частями уравнения'};
    var sides = eq.split('=');
    if(sides.length !== 2) return {error:'В уравнении должно быть ровно одно «=»'};
    var leftRaw = sides[0].trim(), rightRaw = sides[1].trim();
    if(!leftRaw || !rightRaw) return {error:'Одна из частей уравнения пустая'};

    var leftParts = leftRaw.split('+').map(function(s){return s.trim();}).filter(Boolean);
    var rightParts = rightRaw.split('+').map(function(s){return s.trim();}).filter(Boolean);
    if(leftParts.length===0 || rightParts.length===0) return {error:'Не удалось разбить на вещества'};

    function parsePart(p){
      var m = p.match(/^(\d*)\s*(.+)$/);
      var coef = m[1] ? parseInt(m[1]) : 1;
      var formula = m[2].trim();
      return { coef: coef, formula: formula, atoms: parseAtoms(formula) };
    }
    var leftParsed = leftParts.map(parsePart);
    var rightParsed = rightParts.map(parsePart);
    for(var i=0;i<leftParsed.length;i++) if(Object.keys(leftParsed[i].atoms).length===0) return {error:'Не разобрал формулу: '+leftParsed[i].formula};
    for(var j=0;j<rightParsed.length;j++) if(Object.keys(rightParsed[j].atoms).length===0) return {error:'Не разобрал формулу: '+rightParsed[j].formula};

    // Множество элементов
    var elSet = {};
    leftParsed.concat(rightParsed).forEach(function(p){ for(var e in p.atoms) elSet[e]=1; });
    var elements = Object.keys(elSet);
    if(elements.length===0) return {error:'Не нашёл химических элементов'};

    // Матрица: строки — элементы, столбцы — вещества (левые положительные, правые отрицательные)
    var n = leftParsed.length + rightParsed.length;
    var mat = [];
    for(var e=0;e<elements.length;e++){
      var row = new Array(n).fill(0);
      for(var li=0; li<leftParsed.length; li++) row[li] = leftParsed[li].atoms[elements[e]] || 0;
      for(var ri=0; ri<rightParsed.length; ri++) row[leftParsed.length + ri] = -(rightParsed[ri].atoms[elements[e]] || 0);
      mat.push(row);
    }

    // Ищем нулевое пространство методом Гаусса
    var solution = nullSpace(mat, n);
    if(!solution) return {error:'Уравнение невозможно уравнять (проверь формулы)'};

    // Приведение к целым числам
    var maxAbs = 0;
    for(var k=0;k<solution.length;k++) maxAbs = Math.max(maxAbs, Math.abs(solution[k]));
    if(maxAbs < 1e-9) return {error:'Нулевое решение'};
    var ints = solution.map(function(v){ return Math.round(v / maxAbs * 1000000); });
    var g = ints[0];
    for(var q=1;q<ints.length;q++) g = gcd(g, ints[q]);
    if(g===0) return {error:'Не удалось привести к целым'};
    var finalCoefs = ints.map(function(v){ return Math.abs(v/g); });

    // Собираем результат
    function buildSide(parsed, startIdx){
      return parsed.map(function(p, i){
        var c = finalCoefs[startIdx + i];
        return (c===1 ? '' : c) + p.formula;
      }).join(' + ');
    }
    var leftStr = buildSide(leftParsed, 0);
    var rightStr = buildSide(rightParsed, leftParsed.length);

    return {
      success: true,
      left: leftStr,
      right: rightStr,
      coefs: finalCoefs,
      elements: elements
    };
  }catch(err){
    return {error:'Ошибка: '+err.message};
  }
}

function nullSpace(matrix, nCols){
  var rows = matrix.length;
  if(rows===0 || nCols===0) return null;
  var A = matrix.map(function(r){return r.slice();});
  var pivotRow = 0;
  var pivots = [];
  for(var col=0; col<nCols && pivotRow<rows; col++){
    var sel = -1;
    for(var r=pivotRow; r<rows; r++){
      if(Math.abs(A[r][col]) > 1e-9){ sel = r; break; }
    }
    if(sel === -1) continue;
    var tmp = A[pivotRow]; A[pivotRow] = A[sel]; A[sel] = tmp;
    var div = A[pivotRow][col];
    for(var c=col; c<nCols; c++) A[pivotRow][c] /= div;
    for(var r2=0; r2<rows; r2++){
      if(r2===pivotRow) continue;
      var f = A[r2][col];
      if(Math.abs(f)<1e-9) continue;
      for(var c2=col; c2<nCols; c2++) A[r2][c2] -= f * A[pivotRow][c2];
    }
    pivots.push(col);
    pivotRow++;
  }
  var freeCols = [];
  for(var c3=0; c3<nCols; c3++) if(pivots.indexOf(c3)===-1) freeCols.push(c3);
  if(freeCols.length===0) return null;
  var x = new Array(nCols).fill(0);
  x[freeCols[0]] = 1;
  for(var pi=pivots.length-1; pi>=0; pi--){
    var pc = pivots[pi];
    var sum = 0;
    for(var fi=0; fi<freeCols.length; fi++) sum += A[pi][freeCols[fi]] * x[freeCols[fi]];
    x[pc] = -sum;
  }
  var signs = [];
  for(var z=0; z<x.length; z++) if(Math.abs(x[z])>1e-6) signs.push(Math.sign(x[z]));
  if(signs.length===0) return null;
  for(var s=1; s<signs.length; s++) if(signs[s] !== signs[0]) return null;
  return x;
}
