// chem.js

// ============ УРАВНИВАНИЕ РЕАКЦИЙ ============
const ELEMENTS = [
  'Ac','Ag','Al','Am','Ar','As','At','Au','B','Ba','Be','Bh','Bi','Bk','Br',
  'C','Ca','Cd','Ce','Cf','Cl','Cm','Cn','Co','Cr','Cs','Cu','Db','Ds','Dy',
  'Er','Es','Eu','F','Fe','Fl','Fm','Fr','Ga','Gd','Ge','H','He','Hf','Hg',
  'Ho','Hs','I','In','Ir','K','Kr','La','Li','Lr','Lu','Lv','Mc','Md','Mg',
  'Mn','Mo','Mt','N','Na','Nb','Nd','Ne','Nh','Ni','No','Np','O','Og','Os',
  'P','Pa','Pb','Pd','Pm','Po','Pr','Pt','Pu','Ra','Rb','Re','Rf','Rg','Rh',
  'Rn','Ru','S','Sb','Sc','Se','Sg','Si','Sm','Sn','Sr','Ta','Tb','Tc','Te',
  'Th','Ti','Tl','Tm','Ts','U','V','W','Xe','Y','Yb','Zn','Zr'
];

function parseFormula(formula) {
  const result = {};
  let i = 0;
  const s = formula.replace(/\s/g, '');
  while (i < s.length) {
    let el = '';
    for (const e of ELEMENTS) {
      if (s.startsWith(e, i) && e.length > el.length) el = e;
    }
    if (!el) {
      if (s[i] === '(') {
        let depth = 1, j = i + 1;
        while (j < s.length && depth > 0) {
          if (s[j] === '(') depth++;
          if (s[j] === ')') depth--;
          j++;
        }
        const inner = parseFormula(s.slice(i + 1, j - 1));
        i = j;
        let num = '';
        while (i < s.length && /\d/.test(s[i])) num += s[i++];
        const mult = num ? parseInt(num) : 1;
        for (const k in inner) result[k] = (result[k] || 0) + inner[k] * mult;
        continue;
      }
      i++;
      continue;
    }
    i += el.length;
    let num = '';
    while (i < s.length && /\d/.test(s[i])) num += s[i++];
    const count = num ? parseInt(num) : 1;
    result[el] = (result[el] || 0) + count;
  }
  return result;
}

function parseSide(side) {
  const parts = side.split('+').map(s => s.trim()).filter(Boolean);
  return parts.map(part => {
    const m = part.match(/^(\d+)?(.*)$/);
    return {
      coef: m[1] ? parseInt(m[1]) : 1,
      formula: m[2].trim(),
      atoms: parseFormula(m[2].trim())
    };
  });
}

function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }

export function balanceEquation(equation) {
  try {
    const normalized = equation.replace(/→|->|=>/g, '=').replace(/\s+/g, ' ').trim();
    const [leftRaw, rightRaw] = normalized.split('=');
    if (!leftRaw || !rightRaw) return { error: 'Используй формат: H2 + O2 = H2O' };
    const left = parseSide(leftRaw);
    const right = parseSide(rightRaw);

    const allElements = new Set();
    [...left, ...right].forEach(s => Object.keys(s.atoms).forEach(e => allElements.add(e)));
    const elements = [...allElements];
    if (elements.length === 0) return { error: 'Не найдено элементов.' };

    const n = left.length + right.length;
    const matrix = elements.map(el => {
      const row = new Array(n).fill(0);
      left.forEach((s, i) => { row[i] = s.atoms[el] || 0; });
      right.forEach((s, i) => { row[left.length + i] = -(s.atoms[el] || 0); });
      return row;
    });

    const solution = solveHomogeneous(matrix, n);
    if (!solution) return { error: 'Не удалось уравнять. Проверь формулы.' };

    const multiplied = solution.map(v => Math.round(v * 1000));
    let g = multiplied[0];
    for (let i = 1; i < multiplied.length; i++) g = gcd(g, multiplied[i]);
    const coefs = multiplied.map(v => v / g);
    const abs = coefs.every(v => v > 0) ? coefs : coefs.map(v => Math.abs(v));

    const leftStr = left.map((s, i) => (abs[i] === 1 ? '' : abs[i]) + s.formula).join(' + ');
    const rightStr = right.map((s, i) => (abs[left.length + i] === 1 ? '' : abs[left.length + i]) + s.formula).join(' + ');

    return { balanced: `${leftStr} = ${rightStr}`, success: true };
  } catch (err) {
    return { error: err.message };
  }
}

function solveHomogeneous(matrix, nVars) {
  const m = matrix.length;
  const aug = matrix.map(row => [...row.map(v => v), 0]);
  let pivotRow = 0;
  const pivotCols = [];
  for (let col = 0; col < nVars && pivotRow < m; col++) {
    let sel = -1;
    for (let r = pivotRow; r < m; r++) {
      if (Math.abs(aug[r][col]) > 1e-9) { sel = r; break; }
    }
    if (sel === -1) continue;
    [aug[pivotRow], aug[sel]] = [aug[sel], aug[pivotRow]];
    const div = aug[pivotRow][col];
    for (let c = col; c < nVars; c++) aug[pivotRow][c] /= div;
    for (let r = 0; r < m; r++) {
      if (r === pivotRow) continue;
      const factor = aug[r][col];
      if (Math.abs(factor) < 1e-9) continue;
      for (let c = col; c < nVars; c++) aug[r][c] -= factor * aug[pivotRow][c];
    }
    pivotCols.push(col);
    pivotRow++;
  }
  const freeCols = [];
  for (let c = 0; c < nVars; c++) if (!pivotCols.includes(c)) freeCols.push(c);
  if (freeCols.length === 0) return null;
  const solution = new Array(nVars).fill(0);
  solution[freeCols[0]] = 1;
  for (let i = pivotCols.length - 1; i >= 0; i--) {
    const col = pivotCols[i];
    let sum = 0;
    for (const fc of freeCols) sum += aug[i][fc] * solution[fc];
    solution[col] = -sum;
  }
  const signs = solution.map(v => Math.sign(v)).filter(s => s !== 0);
  return signs.every(s => s === signs[0]) ? solution : null;
}

// ============ ТИП РЕАКЦИИ ============
export function classifyReaction(equation) {
  const eq = equation.replace(/→|->|=>/g, '=').replace(/\s+/g, ' ').trim();
  const [leftRaw, rightRaw] = eq.split('=');
  if (!leftRaw || !rightRaw) return { error: 'Используй формат: A + B = C' };
  const left = leftRaw.split('+').map(s => s.trim()).filter(Boolean);
  const right = rightRaw.split('+').map(s => s.trim()).filter(Boolean);
  const L = left.length, R = right.length;
  let type = '', explanation = '';
  if (L > 1 && R === 1) {
    type = 'Реакция соединения';
    explanation = `Из ${L} веществ образуется 1. Схема: A + B → AB.`;
  } else if (L === 1 && R > 1) {
    type = 'Реакция разложения';
    explanation = `Из 1 вещества образуется ${R}. Схема: AB → A + B.`;
  } else if (L === 2 && R === 2) {
    const hasSimpleLeft = left.some(isSimple);
    const hasSimpleRight = right.some(isSimple);
    if (hasSimpleLeft && hasSimpleRight) {
      type = 'Реакция замещения';
      explanation = `Простое вещество замещает атом в сложном. Схема: A + BC → AC + B.`;
    } else {
      type = 'Реакция обмена';
      explanation = `Сложные вещества обмениваются частями. Схема: AB + CD → AD + CB.`;
    }
  } else {
    type = 'Неопределённый тип';
    explanation = 'Проверь уравнение.';
  }
  return { type, explanation, success: true };
}

function isSimple(formula) {
  const clean = formula.replace(/^\d+/, '').trim();
  const elements = clean.match(/[A-Z][a-z]?/g) || [];
  return [...new Set(elements)].length === 1;
}

// ============ ТИП СВЯЗИ ============
const EN = {
  H: 2.20, Li: 0.98, Be: 1.57, B: 2.04, C: 2.55, N: 3.04, O: 3.44, F: 3.98,
  Na: 0.93, Mg: 1.31, Al: 1.61, Si: 1.90, P: 2.19, S: 2.58, Cl: 3.16,
  K: 0.82, Ca: 1.00, Fe: 1.83, Cu: 1.90, Zn: 1.65, Br: 2.96, I: 2.66,
  Ag: 1.93, Ba: 0.89, Pb: 2.33, Sn: 1.96, Mn: 1.55, Cr: 1.66, Ni: 1.91,
  Co: 1.88, Hg: 2.00, Au: 2.54, Pt: 2.28
};
const METALS = ['Li','Be','Na','Mg','Al','K','Ca','Sc','Ti','V','Cr','Mn','Fe','Co','Ni','Cu','Zn','Ga','Rb','Sr','Ag','Sn','Cs','Ba','Pt','Au','Hg','Pb','Bi'];

export function determineBondType(formula) {
  const clean = formula.replace(/\s/g, '');
  const elements = [...new Set(clean.match(/[A-Z][a-z]?/g) || [])];
  if (elements.length === 0) return { error: 'Не распознал элементы.' };

  if (elements.length === 1) {
    const el = elements[0];
    if (METALS.includes(el)) {
      return { type: 'Металлическая', explanation: `${el} — металл. Валентные электроны общие, образуют «электронное облако».`, success: true };
    }
    return { type: 'Ковалентная неполярная', explanation: `${el} — неметалл. Атомы одинаковые, Δχ = 0.`, success: true };
  }

  const vals = elements.map(el => EN[el]);
  if (vals.some(v => !v)) return { error: 'Нет данных об электроотрицательности.' };

  const delta = Math.abs(Math.max(...vals) - Math.min(...vals));
  let type, explanation;
  if (delta > 1.7) {
    type = 'Ионная';
    explanation = `Δχ = ${delta.toFixed(2)} > 1.7. Металл + неметалл, электрон переходит полностью.`;
  } else if (delta >= 0.5) {
    type = 'Ковалентная полярная';
    explanation = `Δχ = ${delta.toFixed(2)} (0.5–1.7). Разные неметаллы, пара смещена к более электроотрицательному.`;
  } else {
    type = 'Ковалентная неполярная';
    explanation = `Δχ = ${delta.toFixed(2)} < 0.5. Одинаковые или близкие неметаллы.`;
  }
  return { type, explanation, delta: parseFloat(delta.toFixed(2)), success: true };
}

// ============ КРИСТАЛЛИЧЕСКИЕ РЕШЁТКИ ============
function genFCC() {
  const p = [];
  for (let x=0;x<=1;x++) for (let y=0;y<=1;y++) for (let z=0;z<=1;z++) p.push([x,y,z]);
  p.push([0.5,0.5,0],[0.5,0.5,1],[0.5,0,0.5],[0.5,1,0.5],[0,0.5,0.5],[1,0.5,0.5]);
  return p;
}
function genOcta() {
  return [[0.5,0,0],[0.5,1,0],[0.5,0,1],[0.5,1,1],[0,0.5,0],[1,0.5,0],[0,0.5,1],[1,0.5,1],[0,0,0.5],[1,0,0.5],[0,1,0.5],[1,1,0.5],[0.5,0.5,0.5]];
}
function genCorners() {
  const p = [];
  for (let x=0;x<=1;x++) for (let y=0;y<=1;y++) for (let z=0;z<=1;z++) p.push([x,y,z]);
  return p;
}
function genBCC() {
  const p = genCorners();
  p.push([0.5,0.5,0.5]);
  return p;
}
function genDiamond() {
  const p = genFCC();
  const off = [0.25,0.25,0.25];
  genFCC().forEach(q => p.push([q[0]+off[0], q[1]+off[1], q[2]+off[2]]));
  return p;
}
function genGraphite() {
  const p = [], a = 0.6;
  for (let i=0;i<3;i++) for (let j=0;j<3;j++) {
    const x = i*a + (j%2)*(a/2);
    const y = j*a*0.866;
    p.push([x,y,0],[x+a/2, y+a*0.288, 0]);
  }
  for (let i=0;i<3;i++) for (let j=0;j<3;j++) {
    const x = i*a + (j%2)*(a/2) + a/2;
    const y = j*a*0.866;
    p.push([x,y,0.8]);
  }
  return p;
}

const LATTICES = {
  NaCl: {
    name: 'Хлорид натрия (NaCl)', type: 'Ионная',
    description: 'Ионная решётка. Каждый Na⁺ окружён 6 Cl⁻, координационное число 6.',
    ions: [
      { element: 'Na', charge: '+', color: 0x9b59b6, radius: 0.25, positions: genFCC() },
      { element: 'Cl', charge: '-', color: 0x27ae60, radius: 0.4, positions: genOcta() }
    ]
  },
  CsCl: {
    name: 'Хлорид цезия (CsCl)', type: 'Ионная',
    description: 'Cs⁺ в центре куба, 8 Cl⁻ по вершинам. Координационное число 8.',
    ions: [
      { element: 'Cs', charge: '+', color: 0xe67e22, radius: 0.35, positions: [[0.5,0.5,0.5]] },
      { element: 'Cl', charge: '-', color: 0x27ae60, radius: 0.4, positions: genCorners() }
    ]
  },
  diamond: {
    name: 'Алмаз (C)', type: 'Атомная (ковалентная неполярная)',
    description: 'Каждый атом C связан с 4 другими. Очень прочная, высокая t° плавления.',
    ions: [{ element: 'C', charge: '', color: 0x2c3e50, radius: 0.2, positions: genDiamond() }]
  },
  graphite: {
    name: 'Графит (C)', type: 'Атомная (слоистая)',
    description: 'Слои гексагональной сетки. Между слоями — слабые силы. Мягкий, проводит ток.',
    ions: [{ element: 'C', charge: '', color: 0x34495e, radius: 0.18, positions: genGraphite() }]
  },
  Cu: {
    name: 'Медь (Cu)', type: 'Металлическая',
    description: 'Атомы в узлах ГЦК, электроны общие. Ковкая, проводит ток.',
    ions: [{ element: 'Cu', charge: '', color: 0xb87333, radius: 0.3, positions: genFCC() }]
  },
  Fe: {
    name: 'Железо (Fe)', type: 'Металлическая',
    description: 'ОЦК-решётка: атомы в вершинах и в центре куба. Прочное, магнитное.',
    ions: [{ element: 'Fe', charge: '', color: 0x7f8c8d, radius: 0.3, positions: genBCC() }]
  }
};

export function getCrystalData(substance) {
  const key = substance.trim();
  if (LATTICES[key]) return { ...LATTICES[key], key };
  const found = Object.entries(LATTICES).find(([k, v]) => v.name.toLowerCase().includes(key.toLowerCase()));
  if (found) return { ...found[1], key: found[0] };
  return { error: `Решётка "${substance}" не найдена. Доступные: NaCl, CsCl, diamond, graphite, Cu, Fe.` };
}

// ============ БАЗА ОБЪЯСНЕНИЙ ============
export const KNOWLEDGE = {
  'валентность': '**Валентность** — это число химических связей, которое образует атом.\n\nПример: в H₂O кислород двухвалентен (связан с двумя H), а водород одновалентен.\n\nВ формуле можно определять по индексам: у элемента с известной валентностью считаем, у другого — находим через НОК.',
  'ионная связь': '**Ионная связь** образуется между металлом и неметаллом.\n\nМеталл отдаёт электроны → становится положительным ионом (катион).\nНеметалл принимает электроны → становится отрицательным ионом (анион).\n\nПример: NaCl — Na⁺ и Cl⁻.',
  'ковалентная связь': '**Ковалентная связь** — общая электронная пара у двух неметаллов.\n\n• Неполярная — атомы одинаковые (O₂, N₂, Cl₂).\n• Полярная — атомы разные (H₂O, HCl, CO₂).\n\nЭлектронная пара смещается к более электроотрицательному атому.',
  'металлическая связь': '**Металлическая связь** — в металлах.\n\nАтомы отдают валентные электроны в общее «электронное облако». Оно удерживает положительные ионы в узлах решётки.\n\nПоэтому металлы: проводят ток, ковкие, пластичные, блестящие.',
  'кристаллическая решётка': '**Кристаллическая решётка** — упорядоченное расположение частиц в веществе.\n\n• **Ионная** — ионы (NaCl, CsCl). Твёрдые, тугоплавкие.\n• **Атомная** — атомы с ковалентной связью (алмаз, графит, SiO₂). Очень твёрдые.\n• **Металлическая** — атомы и общие электроны (Cu, Fe).\n• **Молекулярная** — молекулы (H₂O-лёд, CO₂, I₂). Легкоплавкие.',
  'реакция соединения': '**Реакция соединения** — из нескольких веществ образуется одно.\n\nСхема: A + B → AB\n\nПример: 2H₂ + O₂ → 2H₂O',
  'реакция разложения': '**Реакция разложения** — из одного вещества образуется несколько.\n\nСхема: AB → A + B\n\nПример: 2H₂O → 2H₂ + O₂ (электролиз)',
  'реакция замещения': '**Реакция замещения** — простое вещество замещает атом в сложном.\n\nСхема: A + BC → AC + B\n\nПример: Fe + CuSO₄ → FeSO₄ + Cu',
  'реакция обмена': '**Реакция обмена** — два сложных вещества обмениваются частями.\n\nСхема: AB + CD → AD + CB\n\nПример: NaOH + HCl → NaCl + H₂O',
  'окисление': '**Окисление** — отдача электронов (степень окисления повышается).\n\nПример: Fe⁰ → Fe²⁺ + 2ē',
  'восстановление': '**Восстановление** — принятие электронов (степень окисления понижается).\n\nПример: Cl₂⁰ + 2ē → 2Cl⁻',
  'моль': '**Моль** — количество вещества, содержащее 6,02·10²³ частиц (число Авогадро).\n\nn = m / M, где n — моли, m — масса (г), M — молярная масса (г/моль).',
  'электролитическая диссоциация': '**Электролитическая диссоциация** — распад электролита на ионы в растворе или расплаве.\n\nПример: NaCl → Na⁺ + Cl⁻\n\nКислоты → H⁺ + кислотный остаток.\nОснования → катион металла + OH⁻.\nСоли → катион металла + анион кислотного остатка.'
};