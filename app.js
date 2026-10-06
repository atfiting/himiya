/* ==================== НАВИГАЦИЯ ==================== */
function showPage(page){
  document.querySelectorAll('.nav-btn').forEach(function(b){ b.classList.toggle('active', b.getAttribute('data-page') === page); });
  document.querySelectorAll('.page').forEach(function(p){ p.classList.remove('active'); });
  var el = document.getElementById('page-' + page);
  if (el) el.classList.add('active');
  window.scrollTo({top:0, behavior:'smooth'});
}

document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.nav-btn').forEach(function(btn){
    btn.addEventListener('click', function(){ showPage(this.getAttribute('data-page')); });
  });

  renderContents('contents8List', CHAPTERS8);
  renderContents('contents9List', CHAPTERS9);

  var inp = document.getElementById('analyzerInput');
  if (inp) {
    inp.addEventListener('keydown', function(e){
      if(e.key === 'Enter') runAnalyzer();
    });
  }
});

/* ==================== БАЗА ВЕЩЕСТВ ==================== */
var SUBSTANCES = [
  {formula:"NaCl",name:"Хлорид натрия",composition:{Na:1,Cl:1},aliases:["поваренная соль","соль","галит"],note:"Ионная решётка."},
  {formula:"KCl",name:"Хлорид калия",composition:{K:1,Cl:1},aliases:["сильвин"],note:"Ионная решётка."},
  {formula:"CaCl2",name:"Хлорид кальция",composition:{Ca:1,Cl:2},aliases:[],note:"Ионная решётка."},
  {formula:"BaCl2",name:"Хлорид бария",composition:{Ba:1,Cl:2},aliases:[],note:"Ионная решётка."},
  {formula:"AlCl3",name:"Хлорид алюминия",composition:{Al:1,Cl:3},aliases:[],note:"Ионная решётка."},
  {formula:"FeCl3",name:"Хлорид железа(III)",composition:{Fe:1,Cl:3},aliases:[],note:"Ионная решётка."},
  {formula:"FeCl2",name:"Хлорид железа(II)",composition:{Fe:1,Cl:2},aliases:[],note:"Ионная решётка."},
  {formula:"CuCl2",name:"Хлорид меди(II)",composition:{Cu:1,Cl:2},aliases:[],note:"Ионная решётка."},
  {formula:"ZnCl2",name:"Хлорид цинка",composition:{Zn:1,Cl:2},aliases:[],note:"Ионная решётка."},
  {formula:"AgCl",name:"Хлорид серебра",composition:{Ag:1,Cl:1},aliases:[],note:"Нерастворим."},
  {formula:"NH4Cl",name:"Хлорид аммония",composition:{N:1,H:4,Cl:1},aliases:["нашатырь"],note:"Ионная решётка."},
  {formula:"NaBr",name:"Бромид натрия",composition:{Na:1,Br:1},aliases:[],note:"Ионная решётка."},
  {formula:"KBr",name:"Бромид калия",composition:{K:1,Br:1},aliases:[],note:"Ионная решётка."},
  {formula:"KI",name:"Иодид калия",composition:{K:1,I:1},aliases:[],note:"Ионная решётка."},
  {formula:"NaF",name:"Фторид натрия",composition:{Na:1,F:1},aliases:[],note:"Ионная решётка."},
  {formula:"Na2SO4",name:"Сульфат натрия",composition:{Na:2,S:1,O:4},aliases:[],note:"Ионная решётка."},
  {formula:"K2SO4",name:"Сульфат калия",composition:{K:2,S:1,O:4},aliases:[],note:"Ионная решётка."},
  {formula:"MgSO4",name:"Сульфат магния",composition:{Mg:1,S:1,O:4},aliases:["английская соль"],note:"Ионная решётка."},
  {formula:"CaSO4",name:"Сульфат кальция",composition:{Ca:1,S:1,O:4},aliases:[],note:"Ионная решётка."},
  {formula:"BaSO4",name:"Сульфат бария",composition:{Ba:1,S:1,O:4},aliases:["барит"],note:"Нерастворим."},
  {formula:"CuSO4",name:"Сульфат меди(II)",composition:{Cu:1,S:1,O:4},aliases:[],note:"Ионная решётка."},
  {formula:"FeSO4",name:"Сульфат железа(II)",composition:{Fe:1,S:1,O:4},aliases:[],note:"Ионная решётка."},
  {formula:"Al2(SO4)3",name:"Сульфат алюминия",composition:{Al:2,S:3,O:12},aliases:[],note:"Ионная решётка."},
  {formula:"NaNO3",name:"Нитрат натрия",composition:{Na:1,N:1,O:3},aliases:["натриевая селитра"],note:"Ионная решётка."},
  {formula:"KNO3",name:"Нитрат калия",composition:{K:1,N:1,O:3},aliases:["калиевая селитра"],note:"Ионная решётка."},
  {formula:"AgNO3",name:"Нитрат серебра",composition:{Ag:1,N:1,O:3},aliases:["ляпис"],note:"Ионная решётка."},
  {formula:"NH4NO3",name:"Нитрат аммония",composition:{N:2,H:4,O:3},aliases:["аммиачная селитра"],note:"Ионная решётка."},
  {formula:"Na2CO3",name:"Карбонат натрия",composition:{Na:2,C:1,O:3},aliases:["сода","кальцинированная сода"],note:"Ионная решётка."},
  {formula:"K2CO3",name:"Карбонат калия",composition:{K:2,C:1,O:3},aliases:["поташ"],note:"Ионная решётка."},
  {formula:"CaCO3",name:"Карбонат кальция",composition:{Ca:1,C:1,O:3},aliases:["мел","известняк","мрамор"],note:"Ионная решётка."},
  {formula:"NaHCO3",name:"Гидрокарбонат натрия",composition:{Na:1,H:1,C:1,O:3},aliases:["пищевая сода"],note:"Ионная решётка."},
  {formula:"Ca3(PO4)2",name:"Фосфат кальция",composition:{Ca:3,P:2,O:8},aliases:["фосфорит"],note:"Ионная решётка."},
  {formula:"Na2S",name:"Сульфид натрия",composition:{Na:2,S:1},aliases:[],note:"Ионная решётка."},
  {formula:"FeS",name:"Сульфид железа(II)",composition:{Fe:1,S:1},aliases:[],note:"Ионная решётка."},
  {formula:"FeS2",name:"Пирит",composition:{Fe:1,S:2},aliases:["дисульфид железа"],note:"Ионная решётка."},
  {formula:"ZnS",name:"Сульфид цинка",composition:{Zn:1,S:1},aliases:[],note:"Ионная решётка."},
  {formula:"CuS",name:"Сульфид меди(II)",composition:{Cu:1,S:1},aliases:[],note:"Ионная решётка."},
  {formula:"KMnO4",name:"Перманганат калия",composition:{K:1,Mn:1,O:4},aliases:["марганцовка"],note:"Ионная решётка."},
  {formula:"KClO3",name:"Хлорат калия",composition:{K:1,Cl:1,O:3},aliases:["бертолетова соль"],note:"Ионная решётка."},
  {formula:"Na2SiO3",name:"Силикат натрия",composition:{Na:2,Si:1,O:3},aliases:["жидкое стекло"],note:"Ионная решётка."},
  {formula:"CH3COONa",name:"Ацетат натрия",composition:{C:2,H:3,O:2,Na:1},aliases:[],note:"Ионная решётка."},
  {formula:"NaOH",name:"Гидроксид натрия",composition:{Na:1,O:1,H:1},aliases:["едкий натр","каустическая сода"],note:"Щёлочь."},
  {formula:"KOH",name:"Гидроксид калия",composition:{K:1,O:1,H:1},aliases:["едкое кали"],note:"Щёлочь."},
  {formula:"LiOH",name:"Гидроксид лития",composition:{Li:1,O:1,H:1},aliases:[],note:"Щёлочь."},
  {formula:"Ca(OH)2",name:"Гидроксид кальция",composition:{Ca:1,O:2,H:2},aliases:["гашеная известь"],note:"Щёлочь."},
  {formula:"Ba(OH)2",name:"Гидроксид бария",composition:{Ba:1,O:2,H:2},aliases:[],note:"Щёлочь."},
  {formula:"Cu(OH)2",name:"Гидроксид меди(II)",composition:{Cu:1,O:2,H:2},aliases:[],note:"Нерастворим."},
  {formula:"Fe(OH)3",name:"Гидроксид железа(III)",composition:{Fe:1,O:3,H:3},aliases:[],note:"Нерастворим."},
  {formula:"Fe(OH)2",name:"Гидроксид железа(II)",composition:{Fe:1,O:2,H:2},aliases:[],note:"Нерастворим."},
  {formula:"Al(OH)3",name:"Гидроксид алюминия",composition:{Al:1,O:3,H:3},aliases:[],note:"Амфотерный."},
  {formula:"Zn(OH)2",name:"Гидроксид цинка",composition:{Zn:1,O:2,H:2},aliases:[],note:"Амфотерный."},
  {formula:"Mg(OH)2",name:"Гидроксид магния",composition:{Mg:1,O:2,H:2},aliases:[],note:"Нерастворим."},
  {formula:"Na2O",name:"Оксид натрия",composition:{Na:2,O:1},aliases:[],note:"Ионная решётка."},
  {formula:"K2O",name:"Оксид калия",composition:{K:2,O:1},aliases:[],note:"Ионная решётка."},
  {formula:"CaO",name:"Оксид кальция",composition:{Ca:1,O:1},aliases:["негашеная известь"],note:"Ионная решётка."},
  {formula:"MgO",name:"Оксид магния",composition:{Mg:1,O:1},aliases:["жжёная магнезия"],note:"Ионная решётка."},
  {formula:"BaO",name:"Оксид бария",composition:{Ba:1,O:1},aliases:[],note:"Ионная решётка."},
  {formula:"Al2O3",name:"Оксид алюминия",composition:{Al:2,O:3},aliases:["корунд","глинозём"],note:"Амфотерный."},
  {formula:"CuO",name:"Оксид меди(II)",composition:{Cu:1,O:1},aliases:[],note:"Ионная решётка."},
  {formula:"Fe2O3",name:"Оксид железа(III)",composition:{Fe:2,O:3},aliases:["гематит"],note:"Ионная решётка."},
  {formula:"FeO",name:"Оксид железа(II)",composition:{Fe:1,O:1},aliases:[],note:"Ионная решётка."},
  {formula:"ZnO",name:"Оксид цинка",composition:{Zn:1,O:1},aliases:[],note:"Амфотерный."},
  {formula:"MnO2",name:"Оксид марганца(IV)",composition:{Mn:1,O:2},aliases:["пиролюзит"],note:"Ионная решётка."},
  {formula:"CO",name:"Оксид углерода(II)",composition:{C:1,O:1},aliases:["угарный газ"],note:"Молекулярная."},
  {formula:"CO2",name:"Оксид углерода(IV)",composition:{C:1,O:2},aliases:["углекислый газ"],note:"Молекулярная."},
  {formula:"SO2",name:"Оксид серы(IV)",composition:{S:1,O:2},aliases:["сернистый газ"],note:"Молекулярная."},
  {formula:"SO3",name:"Оксид серы(VI)",composition:{S:1,O:3},aliases:["серный ангидрид"],note:"Молекулярная."},
  {formula:"N2O",name:"Оксид азота(I)",composition:{N:2,O:1},aliases:["веселящий газ"],note:"Молекулярная."},
  {formula:"NO",name:"Оксид азота(II)",composition:{N:1,O:1},aliases:[],note:"Молекулярная."},
  {formula:"NO2",name:"Оксид азота(IV)",composition:{N:1,O:2},aliases:["лисий хвост"],note:"Молекулярная."},
  {formula:"P2O5",name:"Оксид фосфора(V)",composition:{P:2,O:5},aliases:["фосфорный ангидрид"],note:"Молекулярная."},
  {formula:"SiO2",name:"Оксид кремния(IV)",composition:{Si:1,O:2},aliases:["кварц","песок","кремнезём"],note:"Атомная решётка!"},
  {formula:"H2O",name:"Вода",composition:{H:2,O:1},aliases:["оксид водорода","лёд"],note:"Молекулярная."},
  {formula:"H2O2",name:"Пероксид водорода",composition:{H:2,O:2},aliases:["перекись водорода"],note:"Молекулярная."},
  {formula:"HCl",name:"Соляная кислота",composition:{H:1,Cl:1},aliases:["хлороводород"],note:"Сильная кислота."},
  {formula:"HBr",name:"Бромоводородная кислота",composition:{H:1,Br:1},aliases:[],note:"Сильная кислота."},
  {formula:"HI",name:"Иодоводородная кислота",composition:{H:1,I:1},aliases:[],note:"Сильная кислота."},
  {formula:"HF",name:"Плавиковая кислота",composition:{H:1,F:1},aliases:["фтороводород"],note:"Слабая кислота."},
  {formula:"H2SO4",name:"Серная кислота",composition:{H:2,S:1,O:4},aliases:[],note:"Сильная кислота."},
  {formula:"H2SO3",name:"Сернистая кислота",composition:{H:2,S:1,O:3},aliases:[],note:"Слабая кислота."},
  {formula:"H2S",name:"Сероводородная кислота",composition:{H:2,S:1},aliases:["сероводород"],note:"Слабая кислота."},
  {formula:"HNO3",name:"Азотная кислота",composition:{H:1,N:1,O:3},aliases:[],note:"Сильная кислота."},
  {formula:"HNO2",name:"Азотистая кислота",composition:{H:1,N:1,O:2},aliases:[],note:"Слабая кислота."},
  {formula:"H3PO4",name:"Фосфорная кислота",composition:{H:3,P:1,O:4},aliases:[],note:"Средней силы."},
  {formula:"H2CO3",name:"Угольная кислота",composition:{H:2,C:1,O:3},aliases:[],note:"Слабая кислота."},
  {formula:"H2SiO3",name:"Кремниевая кислота",composition:{H:2,Si:1,O:3},aliases:[],note:"Слабая кислота."},
  {formula:"CH3COOH",name:"Уксусная кислота",composition:{C:2,H:4,O:2},aliases:["уксус"],note:"Слабая кислота."},
  {formula:"Na",name:"Натрий",composition:{Na:1},aliases:[],note:"Металлическая решётка."},
  {formula:"K",name:"Калий",composition:{K:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Li",name:"Литий",composition:{Li:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Mg",name:"Магний",composition:{Mg:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Ca",name:"Кальций",composition:{Ca:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Ba",name:"Барий",composition:{Ba:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Al",name:"Алюминий",composition:{Al:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Fe",name:"Железо",composition:{Fe:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Cu",name:"Медь",composition:{Cu:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Zn",name:"Цинк",composition:{Zn:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Ag",name:"Серебро",composition:{Ag:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Au",name:"Золото",composition:{Au:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Hg",name:"Ртуть",composition:{Hg:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Pb",name:"Свинец",composition:{Pb:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Sn",name:"Олово",composition:{Sn:1},aliases:[],note:"Металлическая решётка."},
  {formula:"H2",name:"Водород",composition:{H:2},aliases:[],note:"Молекулярная."},
  {formula:"O2",name:"Кислород",composition:{O:2},aliases:[],note:"Молекулярная."},
  {formula:"O3",name:"Озон",composition:{O:3},aliases:[],note:"Молекулярная."},
  {formula:"N2",name:"Азот",composition:{N:2},aliases:[],note:"Молекулярная."},
  {formula:"Cl2",name:"Хлор",composition:{Cl:2},aliases:[],note:"Молекулярная."},
  {formula:"F2",name:"Фтор",composition:{F:2},aliases:[],note:"Молекулярная."},
  {formula:"Br2",name:"Бром",composition:{Br:2},aliases:[],note:"Молекулярная."},
  {formula:"I2",name:"Йод",composition:{I:2},aliases:["иод"],note:"Молекулярная."},
  {formula:"S",name:"Сера",composition:{S:1},aliases:[],note:"Молекулярная."},
  {formula:"P",name:"Фосфор",composition:{P:1},aliases:[],note:"Атомная."},
  {formula:"C",name:"Углерод",composition:{C:1},aliases:["алмаз","графит"],note:"Атомная решётка."},
  {formula:"Si",name:"Кремний",composition:{Si:1},aliases:[],note:"Атомная решётка."},
  {formula:"NH3",name:"Аммиак",composition:{N:1,H:3},aliases:[],note:"Молекулярная."},
  {formula:"CH4",name:"Метан",composition:{C:1,H:4},aliases:["природный газ"],note:"Молекулярная."},
  {formula:"C2H6",name:"Этан",composition:{C:2,H:6},aliases:[],note:"Молекулярная."},
  {formula:"C3H8",name:"Пропан",composition:{C:3,H:8},aliases:[],note:"Молекулярная."},
  {formula:"C4H10",name:"Бутан",composition:{C:4,H:10},aliases:[],note:"Молекулярная."},
  {formula:"C2H4",name:"Этилен",composition:{C:2,H:4},aliases:[],note:"Молекулярная."},
  {formula:"C2H2",name:"Ацетилен",composition:{C:2,H:2},aliases:[],note:"Молекулярная."},
  {formula:"C6H6",name:"Бензол",composition:{C:6,H:6},aliases:[],note:"Молекулярная."},
  {formula:"C2H5OH",name:"Этанол",composition:{C:2,H:6,O:1},aliases:["спирт"],note:"Молекулярная."},
  {formula:"CH3OH",name:"Метанол",composition:{C:1,H:4,O:1},aliases:["метиловый спирт"],note:"Молекулярная."},
  {formula:"C3H8O3",name:"Глицерин",composition:{C:3,H:8,O:3},aliases:[],note:"Молекулярная."},
  {formula:"C3H6O",name:"Ацетон",composition:{C:3,H:6,O:1},aliases:[],note:"Молекулярная."},
  {formula:"C12H22O11",name:"Сахароза",composition:{C:12,H:22,O:11},aliases:["сахар"],note:"Молекулярная."},
  {formula:"C6H12O6",name:"Глюкоза",composition:{C:6,H:12,O:6},aliases:["виноградный сахар"],note:"Молекулярная."},
  {formula:"SiC",name:"Карбид кремния",composition:{Si:1,C:1},aliases:["карборунд"],note:"Атомная решётка."},
  {formula:"CaC2",name:"Карбид кальция",composition:{Ca:1,C:2},aliases:[],note:"Ионная решётка."},
  {formula:"PbS",name:"Сульфид свинца",composition:{Pb:1,S:1},aliases:["галенит"],note:"Ионная решётка."},
  {formula:"HgS",name:"Сульфид ртути",composition:{Hg:1,S:1},aliases:["киноварь"],note:"Ионная решётка."}
];

/* ==================== ПАРСЕР ФОРМУЛ ==================== */
function normalize(s){return s.toLowerCase().replace(/ё/g,'е').replace(/\s+/g,' ').replace(/[()]/g,'').trim();}
function cleanFormula(s){return s.replace(/\s+/g,'').replace(/[()]/g,'');}

function parseGroup(s){
  var result={},i=0;
  while(i<s.length){
    var ch=s[i];
    if(ch==='('){
      var depth=1,j=i+1;
      while(j<s.length&&depth>0){ if(s[j]==='(')depth++; else if(s[j]===')')depth--; if(depth===0)break; j++; }
      var inner=s.substring(i+1,j);
      var innerP=parseGroup(inner);
      i=j+1;
      var num='';
      while(i<s.length&&/\d/.test(s[i])){num+=s[i];i++;}
      var mul=num?parseInt(num):1;
      for(var el in innerP) result[el]=(result[el]||0)+innerP[el]*mul;
    } else if(/[A-Z]/.test(ch)){
      var el2=ch;i++;
      if(i<s.length&&/[a-z]/.test(s[i])){el2+=s[i];i++;}
      var num2='';
      while(i<s.length&&/\d/.test(s[i])){num2+=s[i];i++;}
      var cnt=num2?parseInt(num2):1;
      result[el2]=(result[el2]||0)+cnt;
    } else { i++; }
  }
  return result;
}

function parseFormula(formula){
  var f=formula.replace(/\s/g,'');
  var parts=f.split(/[·*]/);
  var total={};
  for(var p=0;p<parts.length;p++){
    var part=parts[p],m=part.match(/^(\d+)(.*)$/),mult=1,body=part;
    if(m){mult=parseInt(m[1]);body=m[2];}
    var parsed=parseGroup(body);
    for(var el in parsed) total[el]=(total[el]||0)+parsed[el]*mult;
  }
  return total;
}

/* ==================== ИНДЕКСЫ ==================== */
var NAME_INDEX=null,FORMULA_INDEX=null;

function buildNameIndex(){
  if(NAME_INDEX) return NAME_INDEX;
  NAME_INDEX={};
  for(var i=0;i<SUBSTANCES.length;i++){
    var s=SUBSTANCES[i],k=normalize(s.name); if(!NAME_INDEX[k])NAME_INDEX[k]=s;
    if(s.aliases) for(var j=0;j<s.aliases.length;j++){
      var k2=normalize(s.aliases[j]);
      if(!NAME_INDEX[k2])NAME_INDEX[k2]=s;
    }
  }
  return NAME_INDEX;
}

function buildFormulaIndex(){
  if(FORMULA_INDEX) return FORMULA_INDEX;
  FORMULA_INDEX={};
  for(var i=0;i<SUBSTANCES.length;i++){
    var k=cleanFormula(SUBSTANCES[i].formula);
    if(!FORMULA_INDEX[k])FORMULA_INDEX[k]=SUBSTANCES[i];
  }
  return FORMULA_INDEX;
}

function compositionsEqual(a,b){
  var ka=Object.keys(a),kb=Object.keys(b);
  if(ka.length!==kb.length) return false;
  for(var i=0;i<ka.length;i++) if(a[ka[i]]!==b[ka[i]]) return false;
  return true;
}

function findSubstance(query){
  var raw=query.trim(); if(!raw)return null;
  var lower=normalize(raw);
  var nidx=buildNameIndex(); if(nidx[lower])return nidx[lower];
  var fidx=buildFormulaIndex(); var fClean=cleanFormula(raw); if(fidx[fClean])return fidx[fClean];
  var comp=parseFormula(raw);
  if(Object.keys(comp).length>0){
    for(var k=0;k<SUBSTANCES.length;k++) if(compositionsEqual(SUBSTANCES[k].composition,comp))return SUBSTANCES[k];
    return {formula:raw.replace(/\s/g,''),name:null,composition:comp,aliases:[],note:null};
  }
  return null;
}

/* ==================== ТИП СВЯЗИ ==================== */
var METALS=['Li','Na','K','Rb','Cs','Be','Mg','Ca','Sr','Ba','Sc','Ti','V','Cr','Mn','Fe','Co','Ni','Cu','Zn','Y','Zr','Nb','Mo','Ru','Rh','Pd','Ag','Cd','Sn','W','Pt','Au','Hg','Al','Ga','In','Tl','Pb','Bi'];
function isMetal(el){return METALS.indexOf(el)!==-1;}

function determineBond(composition,formula){
  var f=cleanFormula(formula);
  var elements=Object.keys(composition);
  var metals=elements.filter(isMetal);
  var nonmetals=elements.filter(function(e){return !isMetal(e);});
  if(f==='SiO2'||f==='SiC') return {bond:'Ковалентная полярная',lattice:'Атомная',note:'Атомная решётка (исключение).'};
  if(f==='C') return {bond:'Ковалентная неполярная',lattice:'Атомная',note:'Алмаз/графит — атомная решётка.'};
  if(f.indexOf('NH4')===0) return {bond:'Ионная',lattice:'Ионная',note:'Связи N–H ковалентные, но решётка ионная.'};
  if(metals.length>0&&nonmetals.length>0) return {bond:'Ионная',lattice:'Ионная',note:'Металл + неметалл.'};
  if(metals.length>0) return {bond:'Металлическая',lattice:'Металлическая',note:'Простое вещество-металл.'};
  if(nonmetals.length===1) return {bond:'Ковалентная неполярная',lattice:'Молекулярная',note:'Одинаковые неметаллы.'};
  return {bond:'Ковалентная полярная',lattice:'Молекулярная',note:'Разные неметаллы.'};
}

/* ==================== НАЗВАНИЯ АТОМОВ И ЦВЕТА ==================== */
var ATOM_NAMES={H:'Водород',He:'Гелий',Li:'Литий',Be:'Бериллий',B:'Бор',C:'Углерод',N:'Азот',O:'Кислород',F:'Фтор',Ne:'Неон',Na:'Натрий',Mg:'Магний',Al:'Алюминий',Si:'Кремний',P:'Фосфор',S:'Сера',Cl:'Хлор',Ar:'Аргон',K:'Калий',Ca:'Кальций',Sc:'Скандий',Ti:'Титан',V:'Ванадий',Cr:'Хром',Mn:'Марганец',Fe:'Железо',Co:'Кобальт',Ni:'Никель',Cu:'Медь',Zn:'Цинк',Ga:'Галлий',Ge:'Германий',As:'Мышьяк',Se:'Селен',Br:'Бром',Kr:'Криптон',Rb:'Рубидий',Sr:'Стронций',Ag:'Серебро',Sn:'Олово',Sb:'Сурьма',Te:'Теллур',I:'Йод',Xe:'Ксенон',Cs:'Цезий',Ba:'Барий',W:'Вольфрам',Pt:'Платина',Au:'Золото',Hg:'Ртуть',Pb:'Свинец',Bi:'Висмут'};

var ATOM_COLORS={
  H:'#e2e8f0', He:'#c7d2fe', Li:'#c4b5fd', Be:'#a7f3d0', B:'#fde68a',
  C:'#334155', N:'#3b82f6', O:'#ef4444', F:'#22d3ee', Ne:'#67e8f9',
  Na:'#f59e0b', Mg:'#84cc16', Al:'#94a3b8', Si:'#d4a373', P:'#f97316',
  S:'#eab308', Cl:'#22c55e', Ar:'#a5b4fc', K:'#8b5cf6', Ca:'#a3e635',
  Sc:'#facc15', Ti:'#a1a1aa', V:'#7c3aed', Cr:'#0891b2', Mn:'#a855f7',
  Fe:'#b45309', Co:'#2563eb', Ni:'#15803d', Cu:'#ea580c', Zn:'#71717a',
  Ga:'#84cc16', Ge:'#94a3b8', As:'#f97316', Se:'#eab308', Br:'#92400e',
  Rb:'#8b5cf6', Sr:'#a3e635', Ag:'#9ca3af', Sn:'#6b7280', Sb:'#a855f7',
  Te:'#eab308', I:'#7c3aed', Cs:'#8b5cf6', Ba:'#65a30d', W:'#334155',
  Pt:'#a1a1aa', Au:'#fbbf24', Hg:'#94a3b8', Pb:'#52525b', Bi:'#7c3aed',
  _default:'#94a3b8'
};
function getAtomColor(el){ return ATOM_COLORS[el] || ATOM_COLORS._default; }

/* ==================== АНАЛИЗАТОР ==================== */
function runAnalyzer(){
  var input=document.getElementById('analyzerInput');
  var q=input.value.trim();
  var box=document.getElementById('analyzerResult');
  if(!q){
    box.innerHTML='<div class="card"><div class="not-found">Введи формулу или название</div></div>';
    return;
  }
  var s=findSubstance(q);
  if(!s){
    box.innerHTML='<div class="card"><div class="not-found">Не нашёл вещество: «'+q+'»</div></div>';
    return;
  }

  var bond=determineBond(s.composition,s.formula);
  var els=Object.keys(s.composition);
  var cards='';
  els.forEach(function(el){
    var color = getAtomColor(el);
    cards += '<div class="atom-card" style="border-color:'+color+'">'+
      '<div class="atom-symbol" style="color:'+color+'">'+el+'</div>'+
      '<div class="atom-name">'+(ATOM_NAMES[el]||'')+'</div>'+
      '<div class="atom-count">×'+s.composition[el]+'</div>'+
    '</div>';
  });

  box.innerHTML =
    '<div class="card">'+
      '<div class="card-title"><span class="num">📋</span> '+(s.name||s.formula)+'</div>'+
      '<div class="result-grid">'+
        '<div class="result-item"><div class="lbl">Формула</div><div class="val">'+s.formula+'</div></div>'+
        '<div class="result-item"><div class="lbl">Тип связи</div><div class="val">'+bond.bond+'</div></div>'+
        '<div class="result-item"><div class="lbl">Решётка</div><div class="val">'+bond.lattice+'</div></div>'+
        '<div class="result-item"><div class="lbl">Атомов</div><div class="val neutral">'+els.length+' видов</div></div>'+
      '</div>'+
      '<div class="note">'+bond.note+(s.note?' '+s.note:'')+'</div>'+
      '<div class="card-title" style="margin-top:16px"><span class="num">⚛️</span> Состав</div>'+
      '<div class="composition">'+cards+'</div>'+
      '<div class="card-title" style="margin-top:20px"><span class="num">🧊</span> 3D-модель молекулы</div>'+
      '<canvas id="molecule3D"></canvas>'+
      '<div class="legend" id="moleculeLegend"></div>'+
    '</div>';

  renderMolecule(s.composition);
}

/* ==================== 3D МОЛЕКУЛА ==================== */
var _molScene=null,_molCamera=null,_molRenderer=null,_molControls=null,_molAnimId=null;

function destroyMolecule(){
  if(_molAnimId){ cancelAnimationFrame(_molAnimId); _molAnimId=null; }
  if(_molRenderer){ _molRenderer.dispose(); _molRenderer=null; }
  _molScene=null; _molCamera=null; _molControls=null;
}

function renderMolecule(composition){
  destroyMolecule();
  var canvas = document.getElementById('molecule3D');
  if(!canvas) return;
  var THREE = window.THREE;
  if(!THREE){
    canvas.parentNode.insertAdjacentHTML('beforeend','<div class="not-found">Three.js не загружен</div>');
    return;
  }

  var w = canvas.parentNode.clientWidth || 500;
  var h = 420;

  _molRenderer = new THREE.WebGLRenderer({canvas:canvas, antialias:true, alpha:true});
  _molRenderer.setSize(w, h);
  _molRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  _molScene = new THREE.Scene();
  _molCamera = new THREE.PerspectiveCamera(50, w/h, 0.1, 1000);
  _molCamera.position.set(0, 0, 7);

  _molControls = new THREE.OrbitControls(_molCamera, _molRenderer.domElement);
  _molControls.enableDamping = true;
  _molControls.dampingFactor = 0.08;
  _molControls.autoRotate = true;
  _molControls.autoRotateSpeed = 2;

  _molScene.add(new THREE.AmbientLight(0xffffff, 0.8));
  var d1 = new THREE.DirectionalLight(0xffffff, 1);
  d1.position.set(5, 10, 7);
  _molScene.add(d1);
  var d2 = new THREE.PointLight(0x06b6d4, 0.6);
  d2.position.set(-5, -3, -5);
  _molScene.add(d2);

  // Собираем все атомы как плоский список
  var atoms = [];
  var els = Object.keys(composition);
  els.forEach(function(el){
    for(var i=0;i<composition[el];i++) atoms.push(el);
  });

  // Позиционируем атомы: если есть центральный — в центре, остальные вокруг
  // Простая схема: если один атом — центр; иначе по кругу
  var positions = [];
  var n = atoms.length;
  if(n===1){
    positions.push([0,0,0]);
  } else if(n===2){
    positions.push([-1,0,0]); positions.push([1,0,0]);
  } else {
    // Выбираем самый «тяжёлый» элемент (обычно центральный)
    var centerIdx = 0;
    var maxZ = 0;
    for(var i=0;i<n;i++){
      var el = atoms[i];
      // Ищем: углерод/азот/сера/фосфор обычно в центре
      if(['C','N','S','P','Si','Cl'].indexOf(el)!==-1 && maxZ < 10){ centerIdx = i; maxZ = 10; }
    }
    // Остальные — по кругу в 3D-спирали
    var r = 1.8;
    var rest = n - 1;
    for(var i=0;i<n;i++){
      if(i===centerIdx){
        positions.push([0,0,0]);
      } else {
        var idx = i < centerIdx ? i : i - 1;
        var angle = (idx / rest) * Math.PI * 2;
        var y = (idx % 2 === 0 ? 0.6 : -0.6);
        positions.push([r*Math.cos(angle), y, r*Math.sin(angle)]);
      }
    }
  }

  var spheres = [];
  // Радиусы атомов
  var RADII = {H:0.35, C:0.55, N:0.5, O:0.5, F:0.4, Cl:0.6, Br:0.65, I:0.7, S:0.65, P:0.65, Si:0.65};
  function getRadius(el){ return RADII[el] || 0.55; }

  for(var i=0;i<n;i++){
    var el = atoms[i];
    var radius = getRadius(el);
    var geo = new THREE.SphereGeometry(radius, 32, 32);
    var mat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(getAtomColor(el)),
      roughness: 0.4,
      metalness: 0.1,
      emissive: new THREE.Color(getAtomColor(el)),
      emissiveIntensity: 0.1
    });
    var sphere = new THREE.Mesh(geo, mat);
    sphere.position.set(positions[i][0], positions[i][1], positions[i][2]);
    _molScene.add(sphere);
    spheres.push(sphere);
  }

  // Связи между атомами (если 2+ атомов)
  if(n > 1){
    // Соединяем все пары ближайших друг к другу
    var lineMat = new THREE.LineBasicMaterial({color: 0x64748b, transparent:true, opacity:0.7});
    for(var i=0;i<n;i++){
      for(var j=i+1;j<n;j++){
        var dx = positions[i][0]-positions[j][0];
        var dy = positions[i][1]-positions[j][1];
        var dz = positions[i][2]-positions[j][2];
        var dist = Math.sqrt(dx*dx+dy*dy+dz*dz);
        if(dist < 3.0){
          var g = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(positions[i][0], positions[i][1], positions[i][2]),
            new THREE.Vector3(positions[j][0], positions[j][1], positions[j][2])
          ]);
          var line = new THREE.Line(g, lineMat);
          _molScene.add(line);
        }
      }
    }
  }

  // Легенда
  var legend = document.getElementById('moleculeLegend');
  if(legend){
    legend.innerHTML = '';
    els.forEach(function(el){
      var color = getAtomColor(el);
      legend.innerHTML += '<div class="legend-item"><span class="legend-dot" style="background:'+color+'"></span><span>'+el+' — '+(ATOM_NAMES[el]||'')+'</span></div>';
    });
  }

  function animate(){
    _molAnimId = requestAnimationFrame(animate);
    if(_molControls) _molControls.update();
    if(_molRenderer && _molScene && _molCamera) _molRenderer.render(_molScene, _molCamera);
  }
  animate();
}

/* ==================== ОГЛАВЛЕНИЯ ==================== */
var CHAPTERS8 = [
  {num:1, title:'Первоначальные химические понятия', paragraphs:[
    {id:'ch8-1-1', num:'1', title:'Предмет химии. Роль химии в жизни человека'},
    {id:'ch8-1-2', num:'2', title:'Методы изучения химии'},
    {id:'ch8-1-3', num:'3', title:'Агрегатные состояния веществ'},
    {id:'ch8-1-4', num:'4', title:'Физические явления — основа разделения смесей'},
    {id:'ch8-1-5', num:'5', title:'Атомно-молекулярное учение. Химические элементы'},
    {id:'ch8-1-6', num:'6', title:'Знаки химических элементов'},
    {id:'ch8-1-7', num:'7', title:'Периодическая таблица'},
    {id:'ch8-1-8', num:'8', title:'Химические формулы'},
    {id:'ch8-1-9', num:'9', title:'Валентность'},
    {id:'ch8-1-10', num:'10', title:'Химические реакции'},
    {id:'ch8-1-11', num:'11', title:'Химические уравнения'},
    {id:'ch8-1-12', num:'12', title:'Типы химических реакций'}]},
  {num:2, title:'Кислород. Водород. Вода. Растворы', paragraphs:[
    {id:'ch8-2-1', num:'1', title:'Воздух и его состав'},
    {id:'ch8-2-2', num:'2', title:'Кислород'},
    {id:'ch8-2-3', num:'3', title:'Оксиды'},
    {id:'ch8-2-4', num:'4', title:'Водород'},
    {id:'ch8-2-5', num:'5', title:'Кислоты'},
    {id:'ch8-2-6', num:'6', title:'Соли'},
    {id:'ch8-2-7', num:'7', title:'Количество вещества. Молярная масса'},
    {id:'ch8-2-8', num:'8', title:'Молярный объём газов'},
    {id:'ch8-2-9', num:'9', title:'Расчёты по химическим уравнениям'},
    {id:'ch8-2-10', num:'10', title:'Вода. Основания'},
    {id:'ch8-2-11', num:'11', title:'Растворы. Массовая доля'}]},
  {num:3, title:'Классы неорганических соединений', paragraphs:[
    {id:'ch8-3-1', num:'1', title:'Оксиды: классификация и свойства'},
    {id:'ch8-3-2', num:'2', title:'Основания: классификация и свойства'},
    {id:'ch8-3-3', num:'3', title:'Кислоты: классификация и свойства'},
    {id:'ch8-3-4', num:'4', title:'Соли: классификация и свойства'},
    {id:'ch8-3-5', num:'5', title:'Генетическая связь'}]},
  {num:4, title:'Периодический закон и строение атома', paragraphs:[
    {id:'ch8-4-1', num:'1', title:'Естественные семейства. Амфотерность'},
    {id:'ch8-4-2', num:'2', title:'Открытие периодического закона'},
    {id:'ch8-4-3', num:'3', title:'Строение атома'},
    {id:'ch8-4-4', num:'4', title:'Строение электронных оболочек'},
    {id:'ch8-4-5', num:'5', title:'Характеристика элемента'}]},
  {num:5, title:'Химическая связь. ОВР', paragraphs:[
    {id:'ch8-5-1', num:'1', title:'Ионная связь'},
    {id:'ch8-5-2', num:'2', title:'Ковалентная связь'},
    {id:'ch8-5-3', num:'3', title:'Неполярная и полярная связь'},
    {id:'ch8-5-4', num:'4', title:'Металлическая связь'},
    {id:'ch8-5-5', num:'5', title:'Степень окисления'},
    {id:'ch8-5-6', num:'6', title:'Окислительно-восстановительные реакции'}]}
];

var CHAPTERS9 = [
  {num:1, title:'Обобщение знаний. Химические реакции', paragraphs:[
    {id:'ch9-1-1', num:'1', title:'Классификация неорганических соединений'},
    {id:'ch9-1-2', num:'2', title:'Классификация химических реакций'},
    {id:'ch9-1-3', num:'3', title:'Скорость реакций. Катализ'}]},
  {num:2, title:'Химические реакции в растворах', paragraphs:[
    {id:'ch9-2-1', num:'1', title:'Электролитическая диссоциация'},
    {id:'ch9-2-2', num:'2', title:'Положения теории ЭД'},
    {id:'ch9-2-3', num:'3', title:'Свойства кислот как электролитов'},
    {id:'ch9-2-4', num:'4', title:'Свойства оснований как электролитов'},
    {id:'ch9-2-5', num:'5', title:'Свойства солей как электролитов'},
    {id:'ch9-2-6', num:'6', title:'Гидролиз солей'}]},
  {num:3, title:'Неметаллы и их соединения', paragraphs:[
    {id:'ch9-3-1', num:'1', title:'Общая характеристика неметаллов'},
    {id:'ch9-3-2', num:'2', title:'Галогены'},
    {id:'ch9-3-3', num:'3', title:'Соединения галогенов'},
    {id:'ch9-3-4', num:'4', title:'Свойства соляной кислоты'},
    {id:'ch9-3-5', num:'5', title:'Халькогены'},
    {id:'ch9-3-6', num:'6', title:'Сера, сероводород, сульфиды'},
    {id:'ch9-3-7', num:'7', title:'Кислородные соединения серы'},
    {id:'ch9-3-8', num:'8', title:'Свойства серной кислоты'},
    {id:'ch9-3-9', num:'9', title:'Азот'},
    {id:'ch9-3-10', num:'10', title:'Аммиак. Соли аммония'},
    {id:'ch9-3-11', num:'11', title:'Получение аммиака'},
    {id:'ch9-3-12', num:'12', title:'Кислородные соединения азота'},
    {id:'ch9-3-13', num:'13', title:'Фосфор и его соединения'},
    {id:'ch9-3-14', num:'14', title:'Углерод'},
    {id:'ch9-3-15', num:'15', title:'Кислородные соединения углерода'},
    {id:'ch9-3-16', num:'16', title:'Получение CO2'},
    {id:'ch9-3-17', num:'17', title:'Углеводороды'},
    {id:'ch9-3-18', num:'18', title:'Кислородсодержащие органические'},
    {id:'ch9-3-19', num:'19', title:'Кремний и его соединения'},
    {id:'ch9-3-20', num:'20', title:'Получение неметаллов'},
    {id:'ch9-3-21', num:'21', title:'Важнейшие соединения неметаллов'}]},
  {num:4, title:'Металлы', paragraphs:[
    {id:'ch9-4-1', num:'1', title:'Общая характеристика металлов'},
    {id:'ch9-4-2', num:'2', title:'Химические свойства металлов'},
    {id:'ch9-4-3', num:'3', title:'Щелочные металлы'},
    {id:'ch9-4-4', num:'4', title:'Щёлочноземельные металлы'},
    {id:'ch9-4-5', num:'5', title:'Жёсткость воды'},
    {id:'ch9-4-6', num:'6', title:'Алюминий и его соединения'},
    {id:'ch9-4-7', num:'7', title:'Железо и его соединения'},
    {id:'ch9-4-8', num:'8', title:'Коррозия металлов'},
    {id:'ch9-4-9', num:'9', title:'Металлы в природе. Металлургия'}]},
  {num:5, title:'Химия и окружающая среда', paragraphs:[
    {id:'ch9-5-1', num:'1', title:'Химический состав планеты Земля'},
    {id:'ch9-5-2', num:'2', title:'Охрана окружающей среды'}]},
  {num:6, title:'Обобщение знаний. Подготовка к ОГЭ', paragraphs:[
    {id:'ch9-6-1', num:'1', title:'Вещества'},
    {id:'ch9-6-2', num:'2', title:'Химические реакции'},
    {id:'ch9-6-3', num:'3', title:'Основы неорганической химии'},
    {id:'ch9-6-4', num:'4', title:'Качественные реакции'}]}
];

function renderContents(containerId, chapters){
  var html = '';
  chapters.forEach(function(ch){
    html += '<div class="chapter-block"><h2><span>Глава ' + ch.num + '.</span> ' + ch.title + '</h2><div class="grid-paragraphs">';
    ch.paragraphs.forEach(function(p){
      html += '<button class="para-btn" onclick="openPage(\'' + p.id + '\')"><span class="num">§' + p.num + '</span>' + p.title + '</button>';
    });
    html += '</div></div>';
  });
  document.getElementById(containerId).innerHTML = html;
}

/* ==================== ПРОСМОТР ПАРАГРАФА ==================== */
var lastContentsPage = 'contents8';
function backFromViewer(){ showPage(lastContentsPage); }

function openPage(id){
  var allPages = {};
  if (typeof PAGES_8 !== 'undefined') for(var k in PAGES_8) allPages[k] = PAGES_8[k];
  if (typeof PAGES_9 !== 'undefined') for(var k2 in PAGES_9) allPages[k2] = PAGES_9[k2];

  var page = allPages[id];
  if(!page){
    document.getElementById('viewerContainer').innerHTML =
      '<div class="para-title">Параграф</div>' +
      '<div class="para-sub">Теория для этого параграфа ещё не добавлена</div>' +
      '<div class="note">Обратитесь к учителю или попросите дополнить сайт.</div>';
    lastContentsPage = (id.indexOf('ch8-') === 0) ? 'contents8' : 'contents9';
    showPage('viewer');
    return;
  }
  document.getElementById('viewerContainer').innerHTML =
    '<div class="para-title">' + page.title + '</div>' +
    (page.sub ? '<div class="para-sub">' + page.sub + '</div>' : '') + page.html;
  lastContentsPage = (id.indexOf('ch8-') === 0) ? 'contents8' : 'contents9';
  showPage('viewer');
}
