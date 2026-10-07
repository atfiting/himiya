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

  var ai = document.getElementById('analyzerInput');
  if (ai) ai.addEventListener('keydown', function(e){ if(e.key === 'Enter') runAnalyzer(); });

  var ci = document.getElementById('crystalInput');
  if (ci) ci.addEventListener('keydown', function(e){ if(e.key === 'Enter') runCrystalAssistant(); });

  attachBalanceChips();
  var bi = document.getElementById('balanceInput');
  if (bi){
    bi.addEventListener('input', updateBalancePreview);
    bi.addEventListener('keydown', function(e){ if(e.key === 'Enter') runBalancer(); });
  }
});

/* ==================== БАЗА ВЕЩЕСТВ (300+) ==================== */
var SUBSTANCES = [
  /* --- Простые вещества: металлы --- */
  {formula:"Li",name:"Литий",composition:{Li:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Be",name:"Бериллий",composition:{Be:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Na",name:"Натрий",composition:{Na:1},aliases:[],note:"Металлическая решётка. Щелочной металл."},
  {formula:"Mg",name:"Магний",composition:{Mg:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Al",name:"Алюминий",composition:{Al:1},aliases:[],note:"Металлическая решётка."},
  {formula:"K",name:"Калий",composition:{K:1},aliases:[],note:"Металлическая решётка. Щелочной металл."},
  {formula:"Ca",name:"Кальций",composition:{Ca:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Sc",name:"Скандий",composition:{Sc:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Ti",name:"Титан",composition:{Ti:1},aliases:[],note:"Металлическая решётка."},
  {formula:"V",name:"Ванадий",composition:{V:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Cr",name:"Хром",composition:{Cr:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Mn",name:"Марганец",composition:{Mn:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Fe",name:"Железо",composition:{Fe:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Co",name:"Кобальт",composition:{Co:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Ni",name:"Никель",composition:{Ni:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Cu",name:"Медь",composition:{Cu:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Zn",name:"Цинк",composition:{Zn:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Ga",name:"Галлий",composition:{Ga:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Rb",name:"Рубидий",composition:{Rb:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Sr",name:"Стронций",composition:{Sr:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Ag",name:"Серебро",composition:{Ag:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Cd",name:"Кадмий",composition:{Cd:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Sn",name:"Олово",composition:{Sn:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Cs",name:"Цезий",composition:{Cs:1},aliases:[],note:"Металлическая решётка. Щелочной металл."},
  {formula:"Ba",name:"Барий",composition:{Ba:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Pt",name:"Платина",composition:{Pt:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Au",name:"Золото",composition:{Au:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Hg",name:"Ртуть",composition:{Hg:1},aliases:[],note:"Металлическая решётка. Жидкая при н.у."},
  {formula:"Pb",name:"Свинец",composition:{Pb:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Bi",name:"Висмут",composition:{Bi:1},aliases:[],note:"Металлическая решётка."},

  /* --- Простые вещества: неметаллы --- */
  {formula:"H2",name:"Водород",composition:{H:2},aliases:[],note:"Молекулярная решётка."},
  {formula:"O2",name:"Кислород",composition:{O:2},aliases:[],note:"Молекулярная решётка."},
  {formula:"O3",name:"Озон",composition:{O:3},aliases:[],note:"Молекулярная решётка."},
  {formula:"N2",name:"Азот",composition:{N:2},aliases:[],note:"Молекулярная решётка."},
  {formula:"F2",name:"Фтор",composition:{F:2},aliases:[],note:"Молекулярная решётка."},
  {formula:"Cl2",name:"Хлор",composition:{Cl:2},aliases:[],note:"Молекулярная решётка."},
  {formula:"Br2",name:"Бром",composition:{Br:2},aliases:[],note:"Молекулярная решётка."},
  {formula:"I2",name:"Йод",composition:{I:2},aliases:["иод"],note:"Молекулярная решётка."},
  {formula:"S",name:"Сера",composition:{S:1},aliases:[],note:"Молекулярная решётка."},
  {formula:"P",name:"Фосфор",composition:{P:1},aliases:[],note:"Атомная решётка."},
  {formula:"C",name:"Углерод",composition:{C:1},aliases:["алмаз","графит"],note:"Атомная решётка."},
  {formula:"Si",name:"Кремний",composition:{Si:1},aliases:[],note:"Атомная решётка."},
  {formula:"B",name:"Бор",composition:{B:1},aliases:[],note:"Атомная решётка."},
  {formula:"He",name:"Гелий",composition:{He:1},aliases:[],note:"Благородный газ."},
  {formula:"Ne",name:"Неон",composition:{Ne:1},aliases:[],note:"Благородный газ."},
  {formula:"Ar",name:"Аргон",composition:{Ar:1},aliases:[],note:"Благородный газ."},

  /* --- Оксиды --- */
  {formula:"H2O",name:"Вода",composition:{H:2,O:1},aliases:["оксид водорода","лёд"],note:"Молекулярная решётка."},
  {formula:"H2O2",name:"Пероксид водорода",composition:{H:2,O:2},aliases:["перекись водорода"],note:"Молекулярная решётка."},
  {formula:"Li2O",name:"Оксид лития",composition:{Li:2,O:1},aliases:[],note:"Ионная решётка."},
  {formula:"Na2O",name:"Оксид натрия",composition:{Na:2,O:1},aliases:[],note:"Ионная решётка."},
  {formula:"Na2O2",name:"Пероксид натрия",composition:{Na:2,O:2},aliases:[],note:"Ионная решётка."},
  {formula:"K2O",name:"Оксид калия",composition:{K:2,O:1},aliases:[],note:"Ионная решётка."},
  {formula:"MgO",name:"Оксид магния",composition:{Mg:1,O:1},aliases:["жжёная магнезия"],note:"Ионная решётка."},
  {formula:"CaO",name:"Оксид кальция",composition:{Ca:1,O:1},aliases:["негашеная известь","известь"],note:"Ионная решётка."},
  {formula:"BaO",name:"Оксид бария",composition:{Ba:1,O:1},aliases:[],note:"Ионная решётка."},
  {formula:"Al2O3",name:"Оксид алюминия",composition:{Al:2,O:3},aliases:["корунд","глинозём"],note:"Амфотерный оксид."},
  {formula:"CuO",name:"Оксид меди(II)",composition:{Cu:1,O:1},aliases:[],note:"Ионная решётка."},
  {formula:"Cu2O",name:"Оксид меди(I)",composition:{Cu:2,O:1},aliases:[],note:"Ионная решётка."},
  {formula:"FeO",name:"Оксид железа(II)",composition:{Fe:1,O:1},aliases:[],note:"Ионная решётка."},
  {formula:"Fe2O3",name:"Оксид железа(III)",composition:{Fe:2,O:3},aliases:["гематит","красный железняк"],note:"Ионная решётка."},
  {formula:"Fe3O4",name:"Оксид железа(II,III)",composition:{Fe:3,O:4},aliases:["магнетит"],note:"Ионная решётка."},
  {formula:"ZnO",name:"Оксид цинка",composition:{Zn:1,O:1},aliases:[],note:"Амфотерный оксид."},
  {formula:"MnO",name:"Оксид марганца(II)",composition:{Mn:1,O:1},aliases:[],note:"Ионная решётка."},
  {formula:"MnO2",name:"Оксид марганца(IV)",composition:{Mn:1,O:2},aliases:["пиролюзит"],note:"Ионная решётка."},
  {formula:"Mn2O7",name:"Оксид марганца(VII)",composition:{Mn:2,O:7},aliases:[],note:"Кислотный оксид."},
  {formula:"CrO",name:"Оксид хрома(II)",composition:{Cr:1,O:1},aliases:[],note:"Ионная решётка."},
  {formula:"Cr2O3",name:"Оксид хрома(III)",composition:{Cr:2,O:3},aliases:[],note:"Амфотерный оксид."},
  {formula:"CrO3",name:"Оксид хрома(VI)",composition:{Cr:1,O:3},aliases:[],note:"Кислотный оксид."},
  {formula:"CO",name:"Оксид углерода(II)",composition:{C:1,O:1},aliases:["угарный газ"],note:"Молекулярная решётка."},
  {formula:"CO2",name:"Оксид углерода(IV)",composition:{C:1,O:2},aliases:["углекислый газ"],note:"Молекулярная решётка."},
  {formula:"SiO2",name:"Оксид кремния(IV)",composition:{Si:1,O:2},aliases:["кварц","песок","кремнезём"],note:"Атомная решётка!"},
  {formula:"N2O",name:"Оксид азота(I)",composition:{N:2,O:1},aliases:["веселящий газ"],note:"Молекулярная решётка."},
  {formula:"NO",name:"Оксид азота(II)",composition:{N:1,O:1},aliases:[],note:"Молекулярная решётка."},
  {formula:"N2O3",name:"Оксид азота(III)",composition:{N:2,O:3},aliases:[],note:"Молекулярная решётка."},
  {formula:"NO2",name:"Оксид азота(IV)",composition:{N:1,O:2},aliases:["лисий хвост"],note:"Молекулярная решётка."},
  {formula:"N2O5",name:"Оксид азота(V)",composition:{N:2,O:5},aliases:[],note:"Кислотный оксид."},
  {formula:"P2O3",name:"Оксид фосфора(III)",composition:{P:2,O:3},aliases:[],note:"Кислотный оксид."},
  {formula:"P2O5",name:"Оксид фосфора(V)",composition:{P:2,O:5},aliases:["фосфорный ангидрид"],note:"Молекулярная решётка."},
  {formula:"SO2",name:"Оксид серы(IV)",composition:{S:1,O:2},aliases:["сернистый газ"],note:"Молекулярная решётка."},
  {formula:"SO3",name:"Оксид серы(VI)",composition:{S:1,O:3},aliases:["серный ангидрид"],note:"Молекулярная решётка."},
  {formula:"Cl2O",name:"Оксид хлора(I)",composition:{Cl:2,O:1},aliases:[],note:"Молекулярная решётка."},
  {formula:"Cl2O7",name:"Оксид хлора(VII)",composition:{Cl:2,O:7},aliases:[],note:"Кислотный оксид."},
  {formula:"Ag2O",name:"Оксид серебра(I)",composition:{Ag:2,O:1},aliases:[],note:"Ионная решётка."},
  {formula:"PbO",name:"Оксид свинца(II)",composition:{Pb:1,O:1},aliases:["глёт"],note:"Ионная решётка."},
  {formula:"PbO2",name:"Оксид свинца(IV)",composition:{Pb:1,O:2},aliases:[],note:"Ионная решётка."},

  /* --- Основания (гидроксиды) --- */
  {formula:"LiOH",name:"Гидроксид лития",composition:{Li:1,O:1,H:1},aliases:[],note:"Щёлочь."},
  {formula:"NaOH",name:"Гидроксид натрия",composition:{Na:1,O:1,H:1},aliases:["едкий натр","каустическая сода"],note:"Сильная щёлочь."},
  {formula:"KOH",name:"Гидроксид калия",composition:{K:1,O:1,H:1},aliases:["едкое кали"],note:"Сильная щёлочь."},
  {formula:"Ca(OH)2",name:"Гидроксид кальция",composition:{Ca:1,O:2,H:2},aliases:["гашеная известь","известковая вода"],note:"Малорастворимая щёлочь."},
  {formula:"Ba(OH)2",name:"Гидроксид бария",composition:{Ba:1,O:2,H:2},aliases:[],note:"Сильная щёлочь."},
  {formula:"Mg(OH)2",name:"Гидроксид магния",composition:{Mg:1,O:2,H:2},aliases:[],note:"Нерастворимое основание."},
  {formula:"Cu(OH)2",name:"Гидроксид меди(II)",composition:{Cu:1,O:2,H:2},aliases:[],note:"Нерастворимое основание."},
  {formula:"Fe(OH)2",name:"Гидроксид железа(II)",composition:{Fe:1,O:2,H:2},aliases:[],note:"Нерастворимое основание."},
  {formula:"Fe(OH)3",name:"Гидроксид железа(III)",composition:{Fe:1,O:3,H:3},aliases:[],note:"Нерастворимое основание."},
  {formula:"Al(OH)3",name:"Гидроксид алюминия",composition:{Al:1,O:3,H:3},aliases:[],note:"Амфотерный гидроксид."},
  {formula:"Zn(OH)2",name:"Гидроксид цинка",composition:{Zn:1,O:2,H:2},aliases:[],note:"Амфотерный гидроксид."},
  {formula:"Cr(OH)3",name:"Гидроксид хрома(III)",composition:{Cr:1,O:3,H:3},aliases:[],note:"Амфотерный гидроксид."},
  {formula:"NH4OH",name:"Гидроксид аммония",composition:{N:1,H:5,O:1},aliases:["нашатырный спирт","аммиачная вода"],note:"Слабое основание."},

  /* --- Кислоты --- */
  {formula:"HF",name:"Плавиковая кислота",composition:{H:1,F:1},aliases:["фтороводородная"],note:"Слабая кислота."},
  {formula:"HCl",name:"Соляная кислота",composition:{H:1,Cl:1},aliases:["хлороводородная"],note:"Сильная кислота."},
  {formula:"HBr",name:"Бромоводородная кислота",composition:{H:1,Br:1},aliases:[],note:"Сильная кислота."},
  {formula:"HI",name:"Иодоводородная кислота",composition:{H:1,I:1},aliases:[],note:"Сильная кислота."},
  {formula:"H2S",name:"Сероводородная кислота",composition:{H:2,S:1},aliases:["сероводород"],note:"Слабая кислота."},
  {formula:"H2SO3",name:"Сернистая кислота",composition:{H:2,S:1,O:3},aliases:[],note:"Слабая кислота."},
  {formula:"H2SO4",name:"Серная кислота",composition:{H:2,S:1,O:4},aliases:[],note:"Сильная кислота."},
  {formula:"H2SO5",name:"Пероксомоносерная кислота",composition:{H:2,S:1,O:5},aliases:["кислота Каро"],note:"Сильный окислитель."},
  {formula:"HNO2",name:"Азотистая кислота",composition:{H:1,N:1,O:2},aliases:[],note:"Слабая кислота."},
  {formula:"HNO3",name:"Азотная кислота",composition:{H:1,N:1,O:3},aliases:[],note:"Сильная кислота. Окислитель."},
  {formula:"H2CO3",name:"Угольная кислота",composition:{H:2,C:1,O:3},aliases:[],note:"Слабая неустойчивая кислота."},
  {formula:"H2SiO3",name:"Кремниевая кислота",composition:{H:2,Si:1,O:3},aliases:[],note:"Слабая кислота."},
  {formula:"H3PO4",name:"Фосфорная кислота",composition:{H:3,P:1,O:4},aliases:["ортофосфорная"],note:"Средней силы."},
  {formula:"H3PO3",name:"Фосфористая кислота",composition:{H:3,P:1,O:3},aliases:[],note:"Средней силы."},
  {formula:"HClO",name:"Хлорноватистая кислота",composition:{H:1,Cl:1,O:1},aliases:[],note:"Слабая кислота."},
  {formula:"HClO3",name:"Хлорноватая кислота",composition:{H:1,Cl:1,O:3},aliases:[],note:"Сильная кислота."},
  {formula:"HClO4",name:"Хлорная кислота",composition:{H:1,Cl:1,O:4},aliases:[],note:"Очень сильная кислота."},
  {formula:"CH3COOH",name:"Уксусная кислота",composition:{C:2,H:4,O:2},aliases:["уксус","этановая"],note:"Слабая органическая кислота."},
  {formula:"HCOOH",name:"Муравьиная кислота",composition:{C:1,H:2,O:2},aliases:["метановая"],note:"Слабая органическая кислота."},
  {formula:"H2C2O4",name:"Щавелевая кислота",composition:{C:2,H:2,O:4},aliases:["этандиовая"],note:"Двухосновная органическая."},
  {formula:"H2CrO4",name:"Хромовая кислота",composition:{H:2,Cr:1,O:4},aliases:[],note:"Сильная кислота."},
  {formula:"H2Cr2O7",name:"Дихромовая кислота",composition:{H:2,Cr:2,O:7},aliases:[],note:"Сильная кислота."},
  {formula:"HMnO4",name:"Марганцовая кислота",composition:{H:1,Mn:1,O:4},aliases:[],note:"Сильная кислота."},

  /* --- Соли: хлориды --- */
  {formula:"NaCl",name:"Хлорид натрия",composition:{Na:1,Cl:1},aliases:["поваренная соль","соль","галит"],note:"Ионная решётка."},
  {formula:"KCl",name:"Хлорид калия",composition:{K:1,Cl:1},aliases:["сильвин"],note:"Ионная решётка."},
  {formula:"LiCl",name:"Хлорид лития",composition:{Li:1,Cl:1},aliases:[],note:"Ионная решётка."},
  {formula:"CaCl2",name:"Хлорид кальция",composition:{Ca:1,Cl:2},aliases:[],note:"Ионная решётка."},
  {formula:"BaCl2",name:"Хлорид бария",composition:{Ba:1,Cl:2},aliases:[],note:"Ионная решётка."},
  {formula:"MgCl2",name:"Хлорид магния",composition:{Mg:1,Cl:2},aliases:[],note:"Ионная решётка."},
  {formula:"AlCl3",name:"Хлорид алюминия",composition:{Al:1,Cl:3},aliases:[],note:"Ионная решётка."},
  {formula:"FeCl2",name:"Хлорид железа(II)",composition:{Fe:1,Cl:2},aliases:[],note:"Ионная решётка."},
  {formula:"FeCl3",name:"Хлорид железа(III)",composition:{Fe:1,Cl:3},aliases:[],note:"Ионная решётка."},
  {formula:"CuCl",name:"Хлорид меди(I)",composition:{Cu:1,Cl:1},aliases:[],note:"Ионная решётка."},
  {formula:"CuCl2",name:"Хлорид меди(II)",composition:{Cu:1,Cl:2},aliases:[],note:"Ионная решётка."},
  {formula:"ZnCl2",name:"Хлорид цинка",composition:{Zn:1,Cl:2},aliases:[],note:"Ионная решётка."},
  {formula:"AgCl",name:"Хлорид серебра",composition:{Ag:1,Cl:1},aliases:[],note:"Нерастворим. Белый осадок."},
  {formula:"NH4Cl",name:"Хлорид аммония",composition:{N:1,H:4,Cl:1},aliases:["нашатырь"],note:"Ионная решётка."},

  /* --- Соли: бромиды, иодиды, фториды --- */
  {formula:"NaBr",name:"Бромид натрия",composition:{Na:1,Br:1},aliases:[],note:"Ионная решётка."},
  {formula:"KBr",name:"Бромид калия",composition:{K:1,Br:1},aliases:[],note:"Ионная решётка."},
  {formula:"AgBr",name:"Бромид серебра",composition:{Ag:1,Br:1},aliases:[],note:"Нерастворим. Кремовый осадок."},
  {formula:"NaI",name:"Иодид натрия",composition:{Na:1,I:1},aliases:[],note:"Ионная решётка."},
  {formula:"KI",name:"Иодид калия",composition:{K:1,I:1},aliases:[],note:"Ионная решётка."},
  {formula:"AgI",name:"Иодид серебра",composition:{Ag:1,I:1},aliases:[],note:"Нерастворим. Жёлтый осадок."},
  {formula:"NaF",name:"Фторид натрия",composition:{Na:1,F:1},aliases:[],note:"Ионная решётка."},
  {formula:"CaF2",name:"Фторид кальция",composition:{Ca:1,F:2},aliases:["флюорит","плавиковый шпат"],note:"Ионная решётка."},

  /* --- Соли: сульфаты --- */
  {formula:"Na2SO4",name:"Сульфат натрия",composition:{Na:2,S:1,O:4},aliases:["глауберова соль"],note:"Ионная решётка."},
  {formula:"K2SO4",name:"Сульфат калия",composition:{K:2,S:1,O:4},aliases:[],note:"Ионная решётка."},
  {formula:"MgSO4",name:"Сульфат магния",composition:{Mg:1,S:1,O:4},aliases:["английская соль"],note:"Ионная решётка."},
  {formula:"CaSO4",name:"Сульфат кальция",composition:{Ca:1,S:1,O:4},aliases:["гипс","ангидрит"],note:"Ионная решётка."},
  {formula:"BaSO4",name:"Сульфат бария",composition:{Ba:1,S:1,O:4},aliases:["барит","тяжёлый шпат"],note:"Нерастворим. Белый осадок."},
  {formula:"CuSO4",name:"Сульфат меди(II)",composition:{Cu:1,S:1,O:4},aliases:["медный купорос"],note:"Ионная решётка. Голубой."},
  {formula:"FeSO4",name:"Сульфат железа(II)",composition:{Fe:1,S:1,O:4},aliases:["железный купорос"],note:"Ионная решётка."},
  {formula:"Fe2(SO4)3",name:"Сульфат железа(III)",composition:{Fe:2,S:3,O:12},aliases:[],note:"Ионная решётка."},
  {formula:"Al2(SO4)3",name:"Сульфат алюминия",composition:{Al:2,S:3,O:12},aliases:[],note:"Ионная решётка."},
  {formula:"ZnSO4",name:"Сульфат цинка",composition:{Zn:1,S:1,O:4},aliases:[],note:"Ионная решётка."},
  {formula:"PbSO4",name:"Сульфат свинца(II)",composition:{Pb:1,S:1,O:4},aliases:[],note:"Нерастворим."},

  /* --- Соли: нитраты --- */
  {formula:"NaNO3",name:"Нитрат натрия",composition:{Na:1,N:1,O:3},aliases:["натриевая селитра"],note:"Ионная решётка."},
  {formula:"KNO3",name:"Нитрат калия",composition:{K:1,N:1,O:3},aliases:["калиевая селитра","селитра"],note:"Ионная решётка."},
  {formula:"AgNO3",name:"Нитрат серебра",composition:{Ag:1,N:1,O:3},aliases:["ляпис"],note:"Ионная решётка."},
  {formula:"NH4NO3",name:"Нитрат аммония",composition:{N:2,H:4,O:3},aliases:["аммиачная селитра"],note:"Ионная решётка."},
  {formula:"Ca(NO3)2",name:"Нитрат кальция",composition:{Ca:1,N:2,O:6},aliases:["кальциевая селитра"],note:"Ионная решётка."},
  {formula:"Cu(NO3)2",name:"Нитрат меди(II)",composition:{Cu:1,N:2,O:6},aliases:[],note:"Ионная решётка."},
  {formula:"Fe(NO3)3",name:"Нитрат железа(III)",composition:{Fe:1,N:3,O:9},aliases:[],note:"Ионная решётка."},

  /* --- Соли: карбонаты --- */
  {formula:"Na2CO3",name:"Карбонат натрия",composition:{Na:2,C:1,O:3},aliases:["сода","кальцинированная сода"],note:"Ионная решётка."},
  {formula:"NaHCO3",name:"Гидрокарбонат натрия",composition:{Na:1,H:1,C:1,O:3},aliases:["пищевая сода"],note:"Ионная решётка."},
  {formula:"K2CO3",name:"Карбонат калия",composition:{K:2,C:1,O:3},aliases:["поташ"],note:"Ионная решётка."},
  {formula:"CaCO3",name:"Карбонат кальция",composition:{Ca:1,C:1,O:3},aliases:["мел","известняк","мрамор","кальцит"],note:"Ионная решётка."},
  {formula:"BaCO3",name:"Карбонат бария",composition:{Ba:1,C:1,O:3},aliases:["витерит"],note:"Нерастворим."},
  {formula:"MgCO3",name:"Карбонат магния",composition:{Mg:1,C:1,O:3},aliases:["магнезит"],note:"Нерастворим."},
  {formula:"CuCO3",name:"Карбонат меди(II)",composition:{Cu:1,C:1,O:3},aliases:["малахит"],note:"Нерастворим."},

  /* --- Соли: фосфаты, сульфиды --- */
  {formula:"Ca3(PO4)2",name:"Фосфат кальция",composition:{Ca:3,P:2,O:8},aliases:["фосфорит"],note:"Ионная решётка."},
  {formula:"Na3PO4",name:"Фосфат натрия",composition:{Na:3,P:1,O:4},aliases:[],note:"Ионная решётка."},
  {formula:"K3PO4",name:"Фосфат калия",composition:{K:3,P:1,O:4},aliases:[],note:"Ионная решётка."},
  {formula:"Na2S",name:"Сульфид натрия",composition:{Na:2,S:1},aliases:[],note:"Ионная решётка."},
  {formula:"K2S",name:"Сульфид калия",composition:{K:2,S:1},aliases:[],note:"Ионная решётка."},
  {formula:"FeS",name:"Сульфид железа(II)",composition:{Fe:1,S:1},aliases:[],note:"Ионная решётка."},
  {formula:"FeS2",name:"Пирит (дисульфид железа)",composition:{Fe:1,S:2},aliases:["серный колчедан"],note:"Ионная решётка."},
  {formula:"ZnS",name:"Сульфид цинка",composition:{Zn:1,S:1},aliases:["сфалерит"],note:"Ионная решётка."},
  {formula:"CuS",name:"Сульфид меди(II)",composition:{Cu:1,S:1},aliases:["ковеллин"],note:"Ионная решётка."},
  {formula:"PbS",name:"Сульфид свинца(II)",composition:{Pb:1,S:1},aliases:["галенит","свинцовый блеск"],note:"Ионная решётка."},
  {formula:"HgS",name:"Сульфид ртути(II)",composition:{Hg:1,S:1},aliases:["киноварь"],note:"Ионная решётка."},
  {formula:"Ag2S",name:"Сульфид серебра",composition:{Ag:2,S:1},aliases:["аргентит"],note:"Ионная решётка."},

  /* --- Соли: силикаты, ацетаты, прочее --- */
  {formula:"Na2SiO3",name:"Силикат натрия",composition:{Na:2,Si:1,O:3},aliases:["жидкое стекло"],note:"Ионная решётка."},
  {formula:"K2SiO3",name:"Силикат калия",composition:{K:2,Si:1,O:3},aliases:[],note:"Ионная решётка."},
  {formula:"CH3COONa",name:"Ацетат натрия",composition:{C:2,H:3,O:2,Na:1},aliases:[],note:"Ионная решётка."},
  {formula:"CH3COOK",name:"Ацетат калия",composition:{C:2,H:3,O:2,K:1},aliases:[],note:"Ионная решётка."},
  {formula:"KMnO4",name:"Перманганат калия",composition:{K:1,Mn:1,O:4},aliases:["марганцовка"],note:"Ионная решётка. Окислитель."},
  {formula:"K2MnO4",name:"Манганат калия",composition:{K:2,Mn:1,O:4},aliases:[],note:"Ионная решётка."},
  {formula:"KClO3",name:"Хлорат калия",composition:{K:1,Cl:1,O:3},aliases:["бертолетова соль"],note:"Ионная решётка."},
  {formula:"KClO4",name:"Перхлорат калия",composition:{K:1,Cl:1,O:4},aliases:[],note:"Ионная решётка."},
  {formula:"K2CrO4",name:"Хромат калия",composition:{K:2,Cr:1,O:4},aliases:[],note:"Ионная решётка."},
  {formula:"K2Cr2O7",name:"Дихромат калия",composition:{K:2,Cr:2,O:7},aliases:["хромпик"],note:"Ионная решётка. Окислитель."},
  {formula:"Na2Cr2O7",name:"Дихромат натрия",composition:{Na:2,Cr:2,O:7},aliases:[],note:"Ионная решётка."},
  {formula:"K4[Fe(CN)6]",name:"Жёлтая кровяная соль",composition:{K:4,Fe:1,C:6,N:6},aliases:["гексацианоферрат(II) калия"],note:"Комплексная соль."},
  {formula:"K3[Fe(CN)6]",name:"Красная кровяная соль",composition:{K:3,Fe:1,C:6,N:6},aliases:["гексацианоферрат(III) калия"],note:"Комплексная соль."},
  {formula:"CaC2",name:"Карбид кальция",composition:{Ca:1,C:2},aliases:[],note:"Ионная решётка."},
  {formula:"Al4C3",name:"Карбид алюминия",composition:{Al:4,C:3},aliases:[],note:"Ионная решётка."},
  {formula:"SiC",name:"Карбид кремния",composition:{Si:1,C:1},aliases:["карборунд"],note:"Атомная решётка."},
  {formula:"BN",name:"Нитрид бора",composition:{B:1,N:1},aliases:["эльбор"],note:"Атомная решётка."},
  {formula:"TiN",name:"Нитрид титана",composition:{Ti:1,N:1},aliases:[],note:"Металлическая решётка."},

  /* --- Органические --- */
  {formula:"CH4",name:"Метан",composition:{C:1,H:4},aliases:["природный газ","болотный газ"],note:"Молекулярная решётка."},
  {formula:"C2H6",name:"Этан",composition:{C:2,H:6},aliases:[],note:"Молекулярная решётка."},
  {formula:"C3H8",name:"Пропан",composition:{C:3,H:8},aliases:[],note:"Молекулярная решётка."},
  {formula:"C4H10",name:"Бутан",composition:{C:4,H:10},aliases:[],note:"Молекулярная решётка."},
  {formula:"C5H12",name:"Пентан",composition:{C:5,H:12},aliases:[],note:"Молекулярная решётка."},
  {formula:"C2H4",name:"Этилен",composition:{C:2,H:4},aliases:["этен"],note:"Молекулярная решётка."},
  {formula:"C3H6",name:"Пропилен",composition:{C:3,H:6},aliases:["пропен"],note:"Молекулярная решётка."},
  {formula:"C2H2",name:"Ацетилен",composition:{C:2,H:2},aliases:["этин"],note:"Молекулярная решётка."},
  {formula:"C6H6",name:"Бензол",composition:{C:6,H:6},aliases:[],note:"Молекулярная решётка."},
  {formula:"CH3OH",name:"Метанол",composition:{C:1,H:4,O:1},aliases:["метиловый спирт"],note:"Молекулярная решётка."},
  {formula:"C2H5OH",name:"Этанол",composition:{C:2,H:6,O:1},aliases:["спирт","этиловый спирт"],note:"Молекулярная решётка."},
  {formula:"C3H7OH",name:"Пропанол",composition:{C:3,H:8,O:1},aliases:["пропиловый спирт"],note:"Молекулярная решётка."},
  {formula:"C3H8O3",name:"Глицерин",composition:{C:3,H:8,O:3},aliases:[],note:"Молекулярная решётка."},
  {formula:"C2H4(OH)2",name:"Этиленгликоль",composition:{C:2,H:6,O:2},aliases:[],note:"Молекулярная решётка."},
  {formula:"CH3CHO",name:"Уксусный альдегид",composition:{C:2,H:4,O:1},aliases:["ацетальдегид","этаналь"],note:"Молекулярная решётка."},
  {formula:"HCHO",name:"Формальдегид",composition:{C:1,H:2,O:1},aliases:["формалин","метаналь"],note:"Молекулярная решётка."},
  {formula:"C3H6O",name:"Ацетон",composition:{C:3,H:6,O:1},aliases:["диметилкетон","пропанон"],note:"Молекулярная решётка."},
  {formula:"C6H12O6",name:"Глюкоза",composition:{C:6,H:12,O:6},aliases:["виноградный сахар"],note:"Молекулярная решётка."},
  {formula:"C12H22O11",name:"Сахароза",composition:{C:12,H:22,O:11},aliases:["сахар"],note:"Молекулярная решётка."},
  {formula:"C6H5OH",name:"Фенол",composition:{C:6,H:6,O:1},aliases:["карболовая кислота"],note:"Молекулярная решётка."},
  {formula:"C17H35COOH",name:"Стеариновая кислота",composition:{C:18,H:36,O:2},aliases:[],note:"Молекулярная решётка."},
  {formula:"C6H14",name:"Гексан",composition:{C:6,H:14},aliases:[],note:"Молекулярная решётка."},
  {formula:"C8H18",name:"Октан",composition:{C:8,H:18},aliases:[],note:"Молекулярная решётка."},
  {formula:"C6H12O6_фруктоза",name:"Фруктоза",composition:{C:6,H:12,O:6},aliases:["фруктовый сахар"],note:"Молекулярная решётка."},
  {formula:"CH3COOCH3",name:"Метилацетат",composition:{C:3,H:6,O:2},aliases:[],note:"Молекулярная решётка."},
  {formula:"NH2CH2COOH",name:"Глицин",composition:{C:2,H:5,N:1,O:2},aliases:["аминоуксусная кислота"],note:"Молекулярная решётка."}
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
    var s=SUBSTANCES[i],k=normalize(s.name);
    if(!NAME_INDEX[k]) NAME_INDEX[k]=s;
    if(s.aliases) for(var j=0;j<s.aliases.length;j++){
      var k2=normalize(s.aliases[j]);
      if(!NAME_INDEX[k2]) NAME_INDEX[k2]=s;
    }
  }
  return NAME_INDEX;
}

function buildFormulaIndex(){
  if(FORMULA_INDEX) return FORMULA_INDEX;
  FORMULA_INDEX={};
  for(var i=0;i<SUBSTANCES.length;i++){
    var k=cleanFormula(SUBSTANCES[i].formula);
    if(!FORMULA_INDEX[k]) FORMULA_INDEX[k]=SUBSTANCES[i];
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
var METALS=['Li','Be','Na','Mg','Al','K','Ca','Sc','Ti','V','Cr','Mn','Fe','Co','Ni','Cu','Zn','Ga','Rb','Sr','Y','Zr','Nb','Mo','Ru','Rh','Pd','Ag','Cd','In','Sn','Cs','Ba','La','Ce','W','Pt','Au','Hg','Tl','Pb','Bi'];
function isMetal(el){return METALS.indexOf(el)!==-1;}

function determineBond(composition,formula){
  var f=cleanFormula(formula);
  var elements=Object.keys(composition);
  var metals=elements.filter(isMetal);
  var nonmetals=elements.filter(function(e){return !isMetal(e);});
  if(f==='SiO2'||f==='SiC'||f==='BN') return {bond:'Ковалентная полярная',lattice:'Атомная',note:'Атомная решётка (исключение).'};
  if(f==='C') return {bond:'Ковалентная неполярная',lattice:'Атомная',note:'Алмаз/графит — атомная решётка.'};
  if(f.indexOf('NH4')===0) return {bond:'Ионная',lattice:'Ионная',note:'Связи N–H ковалентные, но решётка ионная.'};
  if(metals.length>0&&nonmetals.length>0) return {bond:'Ионная',lattice:'Ионная',note:'Металл + неметалл.'};
  if(metals.length>0) return {bond:'Металлическая',lattice:'Металлическая',note:'Простое вещество-металл.'};
  if(nonmetals.length===1) return {bond:'Ковалентная неполярная',lattice:'Молекулярная',note:'Одинаковые неметаллы.'};
  return {bond:'Ковалентная полярная',lattice:'Молекулярная',note:'Разные неметаллы.'};
}

/* ==================== НАЗВАНИЯ И ЦВЕТА АТОМОВ ==================== */
var ATOM_NAMES={H:'Водород',He:'Гелий',Li:'Литий',Be:'Бериллий',B:'Бор',C:'Углерод',N:'Азот',O:'Кислород',F:'Фтор',Ne:'Неон',Na:'Натрий',Mg:'Магний',Al:'Алюминий',Si:'Кремний',P:'Фосфор',S:'Сера',Cl:'Хлор',Ar:'Аргон',K:'Калий',Ca:'Кальций',Sc:'Скандий',Ti:'Титан',V:'Ванадий',Cr:'Хром',Mn:'Марганец',Fe:'Железо',Co:'Кобальт',Ni:'Никель',Cu:'Медь',Zn:'Цинк',Ga:'Галлий',Ge:'Германий',As:'Мышьяк',Se:'Селен',Br:'Бром',Kr:'Криптон',Rb:'Рубидий',Sr:'Стронций',Y:'Иттрий',Zr:'Цирконий',Nb:'Ниобий',Mo:'Молибден',Ru:'Рутений',Rh:'Родий',Pd:'Палладий',Ag:'Серебро',Cd:'Кадмий',In:'Индий',Sn:'Олово',Sb:'Сурьма',Te:'Теллур',I:'Йод',Xe:'Ксенон',Cs:'Цезий',Ba:'Барий',La:'Лантан',Ce:'Церий',W:'Вольфрам',Pt:'Платина',Au:'Золото',Hg:'Ртуть',Tl:'Таллий',Pb:'Свинец',Bi:'Висмут',Po:'Полоний',At:'Астат',Rn:'Радон'};

var ATOM_COLORS={
  H:'#94a3b8', He:'#c7d2fe', Li:'#a78bfa', Be:'#6ee7b7', B:'#fbbf24',
  C:'#334155', N:'#3b82f6', O:'#ef4444', F:'#22d3ee', Ne:'#67e8f9',
  Na:'#a78bfa', Mg:'#84cc16', Al:'#94a3b8', Si:'#d4a373', P:'#f97316',
  S:'#eab308', Cl:'#22c55e', Ar:'#a5b4fc', K:'#8b5cf6', Ca:'#a3e635',
  Sc:'#facc15', Ti:'#a1a1aa', V:'#7c3aed', Cr:'#0891b2', Mn:'#a855f7',
  Fe:'#b45309', Co:'#2563eb', Ni:'#15803d', Cu:'#ea580c', Zn:'#71717a',
  Ga:'#84cc16', Ge:'#94a3b8', As:'#f97316', Se:'#eab308', Br:'#92400e',
  Rb:'#8b5cf6', Sr:'#a3e635', Ag:'#9ca3af', Sn:'#6b7280', Sb:'#a855f7',
  Te:'#eab308', I:'#7c3aed', Cs:'#f59e0b', Ba:'#65a30d', W:'#334155',
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
    box.innerHTML='<div class="card"><div class="not-found">Не нашёл вещество: «'+q+'». Попробуй другое название или формулу.</div></div>';
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
    '</div>';
}

/* ==================== УРАВНИВАНИЕ ==================== */
function gcd(a,b){ a=Math.abs(a); b=Math.abs(b); while(b){ var t=b; b=a%b; a=t; } return a; }

function balanceEquation(equation){
  try{
    var eq = equation.replace(/[→➔➜➝]|->|=>/g,'=').replace(/\s+/g,' ').trim();
    if(eq.indexOf('=')===-1) return {error:'Нужен знак «=» между частями'};
    var sides = eq.split('=');
    if(sides.length !== 2) return {error:'Должно быть ровно одно «=»'};
    var leftRaw = sides[0].trim(), rightRaw = sides[1].trim();
    if(!leftRaw || !rightRaw) return {error:'Одна из частей пустая'};

    var leftParts = leftRaw.split('+').map(function(s){return s.trim();}).filter(Boolean);
    var rightParts = rightRaw.split('+').map(function(s){return s.trim();}).filter(Boolean);
    if(leftParts.length===0 || rightParts.length===0) return {error:'Не удалось разбить вещества'};

    function parsePart(p){
      var m = p.match(/^(\d*)\s*(.+)$/);
      var coef = m[1] ? parseInt(m[1]) : 1;
      var formula = m[2].trim();
      return { coef: coef, formula: formula, atoms: parseFormula(formula) };
    }
    var leftParsed = leftParts.map(parsePart);
    var rightParsed = rightParts.map(parsePart);
    for(var i=0;i<leftParsed.length;i++) if(Object.keys(leftParsed[i].atoms).length===0) return {error:'Не разобрал: '+leftParsed[i].formula};
    for(var j=0;j<rightParsed.length;j++) if(Object.keys(rightParsed[j].atoms).length===0) return {error:'Не разобрал: '+rightParsed[j].formula};

    var elSet = {};
    leftParsed.concat(rightParsed).forEach(function(p){ for(var e in p.atoms) elSet[e]=1; });
    var elements = Object.keys(elSet);
    if(elements.length===0) return {error:'Не нашёл элементов'};

    var n = leftParsed.length + rightParsed.length;
    var mat = [];
    for(var e=0;e<elements.length;e++){
      var row = new Array(n).fill(0);
      for(var li=0; li<leftParsed.length; li++) row[li] = leftParsed[li].atoms[elements[e]] || 0;
      for(var ri=0; ri<rightParsed.length; ri++) row[leftParsed.length + ri] = -(rightParsed[ri].atoms[elements[e]] || 0);
      mat.push(row);
    }

    var solution = nullSpace(mat, n);
    if(!solution) return {error:'Не удалось уравнять. Проверь формулы'};

    var maxAbs = 0;
    for(var k=0;k<solution.length;k++) maxAbs = Math.max(maxAbs, Math.abs(solution[k]));
    if(maxAbs < 1e-9) return {error:'Нулевое решение'};
    var ints = solution.map(function(v){ return Math.round(v / maxAbs * 1000000); });
    var g = ints[0];
    for(var q=1;q<ints.length;q++) g = gcd(g, ints[q]);
    if(g===0) return {error:'Не привёл к целым'};
    var finalCoefs = ints.map(function(v){ return Math.abs(v/g); });

    function buildSide(parsed, startIdx){
      return parsed.map(function(p, i){
        var c = finalCoefs[startIdx + i];
        return (c===1 ? '' : c) + p.formula;
      }).join(' + ');
    }
    return {
      success: true,
      left: buildSide(leftParsed, 0),
      right: buildSide(rightParsed, leftParsed.length),
      coefs: finalCoefs
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
    for(var r=pivotRow; r<rows; r++) if(Math.abs(A[r][col]) > 1e-9){ sel = r; break; }
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

/* ==================== УРАВНИВАТЕЛЬ 2.0 ==================== */
function formatFormulaHtml(str){
  if(!str) return '';
  return str.replace(/([A-Za-z\)\]])(\d+)/g, '$1<sub>$2</sub>');
}

function formatSideHtml(side){
  if(!side) return '';
  var parts = side.split('+');
  return parts.map(function(part){
    var p = part.trim();
    if(!p) return '';
    var m = p.match(/^(\d+)(.*)$/);
    var coefHtml = '';
    var formula = p;
    if(m){
      coefHtml = '<span class="coef">' + m[1] + '</span>';
      formula = m[2];
    }
    return coefHtml + formatFormulaHtml(formula);
  }).join(' <span style="color:#f59e0b;font-weight:700">+</span> ');
}

function updateBalancePreview(){
  var input = document.getElementById('balanceInput');
  var preview = document.getElementById('balancePreview');
  if(!input || !preview) return;

  var raw = input.value.trim();
  if(!raw){
    preview.innerHTML = '<span class="bal-preview-hint">Здесь появится уравнение с индексами</span>';
    return;
  }

  var norm = raw.replace(/[→➔➜➝]|->|=>/g, '=');
  var parts = norm.split('=');
  if(parts.length === 2){
    preview.innerHTML = formatSideHtml(parts[0]) +
      ' <span class="bal-arrow">→</span> ' +
      formatSideHtml(parts[1]);
  } else {
    preview.innerHTML = formatSideHtml(norm);
  }
}

function attachBalanceChips(){
  document.querySelectorAll('.bal-chip').forEach(function(btn){
    btn.addEventListener('click', function(){
      var input = document.getElementById('balanceInput');
      if(!input) return;

      if(btn.dataset.clear){
        input.value = '';
        input.focus();
        updateBalancePreview();
        return;
      }

      var insert = btn.dataset.insert || '';
      var start = input.selectionStart || 0;
      var end = input.selectionEnd || 0;
      var val = input.value;
      input.value = val.substring(0, start) + insert + val.substring(end);

      var newPos = start + insert.length;
      input.setSelectionRange(newPos, newPos);
      input.focus();
      updateBalancePreview();
    });
  });
}

function runBalancer(){
  var input = document.getElementById('balanceInput');
  var text = input.value.trim();
  var box = document.getElementById('balanceResult');
  if(!text){
    box.innerHTML = '<div class="card"><div class="not-found">Введи уравнение</div></div>';
    return;
  }

  var r = balanceEquation(text);
  if(r.error){
    box.innerHTML = '<div class="card"><div class="not-found">'+r.error+'</div></div>';
    return;
  }

  var leftHtml = formatSideHtml(r.left);
  var rightHtml = formatSideHtml(r.right);

  var eq = text.replace(/[→➔➜➝]|->|=>/g,'=').replace(/\s+/g,' ').trim();
  var sides = eq.split('=');
  var L = sides[0].split('+').map(function(s){return s.trim();}).filter(Boolean);
  var R = sides[1].split('+').map(function(s){return s.trim();}).filter(Boolean);
  var reactionType = '';
  if(L.length === 1 && R.length > 1) reactionType = 'Разложение';
  else if(L.length > 1 && R.length === 1) reactionType = 'Соединение';
  else if(L.length === 2 && R.length === 2) reactionType = 'Обмен / Замещение';

  function isSimple(formula){
    var clean = formula.replace(/^\d+/, '').replace(/[()]/g,'');
    var els = [];
    var arr = clean.match(/[A-Z][a-z]?/g) || [];
    for(var i=0;i<arr.length;i++) if(els.indexOf(arr[i])===-1) els.push(arr[i]);
    return els.length === 1;
  }
  var hasSimpleLeft = L.some(isSimple);
  var hasSimpleRight = R.some(isSimple);
  var isRedox = hasSimpleLeft || hasSimpleRight;

  box.innerHTML =
    '<div class="card">'+
      '<div class="card-title"><span class="num">⚖️</span> Уравненное уравнение</div>'+
      '<div class="eq-output">' + leftHtml + ' <span class="arrow">→</span> ' + rightHtml + '</div>'+

      '<div style="text-align:center;margin-top:14px">'+
        (reactionType ? '<span class="bal-badge blue">Тип: '+reactionType+'</span>' : '')+
        (isRedox ? '<span class="bal-badge orange">ОВР</span>' : '<span class="bal-badge green">Не ОВР</span>')+
        '<span class="bal-badge">Коэффициенты: '+r.coefs.join(' : ')+'</span>'+
      '</div>'+

      '<div class="bal-steps">'+
        '<div class="step-title">Как это получилось</div>'+
        '<div><span class="step-num">1</span>Разбираем уравнение на вещества в левой и правой частях.</div>'+
        '<div><span class="step-num">2</span>Считаем атомы каждого элемента слева и справа.</div>'+
        '<div><span class="step-num">3</span>Составляем систему уравнений (закон сохранения массы).</div>'+
        '<div><span class="step-num">4</span>Решаем методом Гаусса и находим наименьшие целые коэффициенты.</div>'+
        '<div><span class="step-num">5</span>Проверяем: число атомов каждого элемента слева равно числу справа.</div>'+
      '</div>'+
    '</div>';
}

function quickBalance(eq){
  document.getElementById('balanceInput').value = eq;
  updateBalancePreview();
  runBalancer();
}

/* ==================== РЕШЁТКИ (20+) ==================== */
var _latticeScene=null,_latticeCamera=null,_latticeRenderer=null,_latticeControls=null,_latticeAnimId=null,_latticeMeshes=[];
var LATTICE_SCALE = 2.5;

var LATTICE_DB = {
  'NaCl':{
    name:'Хлорид натрия (NaCl)',
    type:'Ионная', system:'Кубическая гранецентрированная',
    desc:'Ионная решётка. Каждый ион Na⁺ окружён 6 ионами Cl⁻ (октаэдрическое окружение). Координационное число = 6.',
    showBonds: false,
    ions:[
      {el:'Na',charge:'+',color:0xa78bfa,radius:0.20,pos:'fcc'},
      {el:'Cl',charge:'-',color:0x22c55e,radius:0.32,pos:'octa'}
    ]
  },
  'CsCl':{
    name:'Хлорид цезия (CsCl)',
    type:'Ионная', system:'Кубическая примитивная',
    desc:'Ионная решётка. Cs⁺ в центре куба, 8 Cl⁻ по вершинам. Координационное число = 8.',
    showBonds: false,
    ions:[
      {el:'Cs',charge:'+',color:0xf59e0b,radius:0.32,pos:[[0.5,0.5,0.5]]},
      {el:'Cl',charge:'-',color:0x22c55e,radius:0.28,pos:'corners'}
    ]
  },
  'diamond':{
    name:'Алмаз (C)',
    type:'Атомная', system:'Кубическая алмазная',
    desc:'Каждый атом C связан с 4 другими ковалентными связями по тетраэдру. Самое твёрдое природное вещество.',
    showBonds: true, bondPairs:[['C','C']], bondDist:0.45,
    ions:[{el:'C',charge:'',color:0x334155,radius:0.13,pos:'diamond'}]
  },
  'graphite':{
    name:'Графит (C)',
    type:'Атомная (слоистая)', system:'Гексагональная слоистая',
    desc:'Слоистая структура. Внутри слоя — прочные ковалентные связи, между слоями — слабые силы. Мягкий, проводит ток.',
    showBonds: true, bondPairs:[['C','C']], bondDist:0.5,
    ions:[{el:'C',charge:'',color:0x475569,radius:0.10,pos:'graphite'}]
  },
  'Cu':{
    name:'Медь (Cu)',
    type:'Металлическая', system:'Кубическая гранецентрированная',
    desc:'Металлическая решётка. Атомы в узлах ГЦК, валентные электроны обобществлены. Ковкая, пластичная, проводник.',
    showBonds: false,
    ions:[{el:'Cu',charge:'',color:0xea580c,radius:0.24,pos:'fcc'}]
  },
  'Fe':{
    name:'Железо (Fe)',
    type:'Металлическая', system:'Кубическая объёмноцентрированная',
    desc:'Металлическая решётка. Атомы в вершинах куба и один в центре (ОЦК). Прочное, магнитное.',
    showBonds: false,
    ions:[{el:'Fe',charge:'',color:0x71717a,radius:0.26,pos:'bcc'}]
  },
  'Al':{
    name:'Алюминий (Al)',
    type:'Металлическая', system:'Кубическая гранецентрированная',
    desc:'Металлическая решётка. Лёгкий, пластичный, покрыт оксидной плёнкой.',
    showBonds: false,
    ions:[{el:'Al',charge:'',color:0x94a3b8,radius:0.24,pos:'fcc'}]
  },
  'Mg':{
    name:'Магний (Mg)',
    type:'Металлическая', system:'Гексагональная',
    desc:'Металлическая решётка. Лёгкий, горит ярким пламенем.',
    showBonds: false,
    ions:[{el:'Mg',charge:'',color:0x84cc16,radius:0.24,pos:'fcc'}]
  },
  'Zn':{
    name:'Цинк (Zn)',
    type:'Металлическая', system:'Гексагональная',
    desc:'Металлическая решётка. Используется для защиты железа от коррозии.',
    showBonds: false,
    ions:[{el:'Zn',charge:'',color:0x71717a,radius:0.24,pos:'fcc'}]
  },
  'Ag':{
    name:'Серебро (Ag)',
    type:'Металлическая', system:'Кубическая гранецентрированная',
    desc:'Металлическая решётка. Лучший проводник тока и тепла.',
    showBonds: false,
    ions:[{el:'Ag',charge:'',color:0x9ca3af,radius:0.25,pos:'fcc'}]
  },
  'Au':{
    name:'Золото (Au)',
    type:'Металлическая', system:'Кубическая гранецентрированная',
    desc:'Металлическая решётка. Инертный, мягкий, ковкий благородный металл.',
    showBonds: false,
    ions:[{el:'Au',charge:'',color:0xfbbf24,radius:0.25,pos:'fcc'}]
  },
  'SiO2':{
    name:'Оксид кремния (SiO2)',
    type:'Атомная', system:'Тетраэдрическая',
    desc:'Атомная решётка. Каждый атом Si связан с 4 атомами O в тетраэдр. Кварц, песок, горный хрусталь.',
    showBonds: true, bondPairs:[['Si','O']], bondDist:0.55,
    ions:[
      {el:'Si',charge:'',color:0xd4a373,radius:0.16,pos:'silica-si'},
      {el:'O', charge:'',color:0xef4444,radius:0.11,pos:'silica-o'}
    ]
  },
  'SiC':{
    name:'Карбид кремния (SiC)',
    type:'Атомная', system:'Тетраэдрическая',
    desc:'Атомная решётка. Карборунд — очень твёрдый, используется как абразив.',
    showBonds: true, bondPairs:[['Si','C']], bondDist:0.5,
    ions:[
      {el:'Si',charge:'',color:0xd4a373,radius:0.16,pos:'silica-si'},
      {el:'C', charge:'',color:0x334155,radius:0.13,pos:'silica-o'}
    ]
  },
  'TiO2':{
    name:'Оксид титана (TiO2)',
    type:'Ионная', system:'Тетрагональная',
    desc:'Ионная решётка. Диоксид титана — белый пигмент, фотокатализатор.',
    showBonds: false,
    ions:[
      {el:'Ti',charge:'4+',color:0xa1a1aa,radius:0.22,pos:'fcc'},
      {el:'O', charge:'2-',color:0xef4444,radius:0.18,pos:'octa'}
    ]
  },
  'CaF2':{
    name:'Фторид кальция (CaF2)',
    type:'Ионная', system:'Кубическая',
    desc:'Ионная решётка. Флюорит. Каждый Ca²⁺ окружён 8 F⁻.',
    showBonds: false,
    ions:[
      {el:'Ca',charge:'2+',color:0xa3e635,radius:0.24,pos:'fcc'},
      {el:'F', charge:'-', color:0x22d3ee,radius:0.18,pos:'octa'}
    ]
  },
  'ZnS':{
    name:'Сульфид цинка (ZnS)',
    type:'Ионная', system:'Кубическая (сфалерит)',
    desc:'Ионная решётка. Минерал сфалерит. Используется как люминофор.',
    showBonds: false,
    ions:[
      {el:'Zn',charge:'2+',color:0x71717a,radius:0.22,pos:'fcc'},
      {el:'S', charge:'2-',color:0xeab308,radius:0.24,pos:'octa'}
    ]
  },
  'CaCO3':{
    name:'Карбонат кальция (CaCO3)',
    type:'Ионная', system:'Тригональная',
    desc:'Ионная решётка. Мел, мрамор, известняк, кальцит.',
    showBonds: false,
    ions:[
      {el:'Ca',charge:'2+',color:0xa3e635,radius:0.25,pos:'corners'},
      {el:'C', charge:'',  color:0x334155,radius:0.15,pos:[[0.5,0.5,0.5]]},
      {el:'O', charge:'',  color:0xef4444,radius:0.12,pos:'octa'}
    ]
  },
  'K2O':{
    name:'Оксид калия (K2O)',
    type:'Ионная', system:'Кубическая (антифлюорит)',
    desc:'Ионная решётка. Основный оксид, реагирует с водой с образованием щёлочи.',
    showBonds: false,
    ions:[
      {el:'K', charge:'+',color:0x8b5cf6,radius:0.28,pos:'octa'},
      {el:'O', charge:'2-',color:0xef4444,radius:0.24,pos:'fcc'}
    ]
  },
  'CO2':{
    name:'Углекислый газ (CO2)',
    type:'Молекулярная', system:'Кубическая молекулярная',
    desc:'Молекулярная решётка. Слабые межмолекулярные силы, легко плавится и испаряется.',
    showBonds: false,
    ions:[{el:'CO₂',charge:'',color:0x64748b,radius:0.20,pos:'simple'}]
  },
  'I2':{
    name:'Йод (I2)',
    type:'Молекулярная', system:'Ромбическая',
    desc:'Молекулярная решётка. Тёмно-фиолетовые кристаллы, легко сублимируется.',
    showBonds: false,
    ions:[{el:'I₂',charge:'',color:0x7c3aed,radius:0.22,pos:'simple'}]
  }
};

function posFCC(){
  var p=[];
  for(var x=0;x<=1;x++)for(var y=0;y<=1;y++)for(var z=0;z<=1;z++)p.push([x,y,z]);
  p.push([0.5,0.5,0],[0.5,0.5,1],[0.5,0,0.5],[0.5,1,0.5],[0,0.5,0.5],[1,0.5,0.5]);
  return p;
}
function posOcta(){
  return [[0.5,0,0],[0.5,1,0],[0.5,0,1],[0.5,1,1],
          [0,0.5,0],[1,0.5,0],[0,0.5,1],[1,0.5,1],
          [0,0,0.5],[1,0,0.5],[0,1,0.5],[1,1,0.5],
          [0.5,0.5,0.5]];
}
function posCorners(){
  var p=[];for(var x=0;x<=1;x++)for(var y=0;y<=1;y++)for(var z=0;z<=1;z++)p.push([x,y,z]);
  return p;
}
function posBCC(){var p=posCorners();p.push([0.5,0.5,0.5]);return p;}
function posDiamond(){
  var p = posFCC();
  p.push([0.25,0.25,0.25]);
  p.push([0.75,0.75,0.25]);
  p.push([0.75,0.25,0.75]);
  p.push([0.25,0.75,0.75]);
  return p;
}
function posGraphite(){
  var p=[],a=0.5;
  for(var i=0;i<3;i++){
    for(var j=0;j<3;j++){
      var x = i*a + (j%2)*(a/2);
      var y = j*a*0.866;
      p.push([x,y,0]);
    }
  }
  for(var i2=0;i2<3;i2++){
    for(var j2=0;j2<3;j2++){
      var x2 = i2*a + (j2%2)*(a/2) + a/2;
      var y2 = j2*a*0.866;
      p.push([x2,y2,0.8]);
    }
  }
  return p;
}
function posSimple(){
  var p=[];
  for(var x=0;x<2;x++)for(var y=0;y<2;y++)for(var z=0;z<2;z++)p.push([x,y,z]);
  return p;
}
function posSilicaSi(){return [[0.15,0.15,0.15],[0.85,0.85,0.15],[0.85,0.15,0.85],[0.15,0.85,0.85]];}
function posSilicaO(){
  return [
    [0.5,0.5,0.15],[0.5,0.15,0.5],[0.15,0.5,0.5],
    [0.85,0.5,0.5],[0.5,0.85,0.5],[0.5,0.5,0.85]
  ];
}

function getLatticePositions(name){
  switch(name){
    case 'fcc': return posFCC();
    case 'octa': return posOcta();
    case 'corners': return posCorners();
    case 'bcc': return posBCC();
    case 'diamond': return posDiamond();
    case 'graphite': return posGraphite();
    case 'simple': return posSimple();
    case 'silica-si': return posSilicaSi();
    case 'silica-o': return posSilicaO();
  }
  return [];
}

function findLattice(query){
  var q = query.trim().toLowerCase();
  if(LATTICE_DB[query]) return LATTICE_DB[query];
  for(var key in LATTICE_DB){
    if(key.toLowerCase() === q) return LATTICE_DB[key];
    if(LATTICE_DB[key].name.toLowerCase().indexOf(q) !== -1) return LATTICE_DB[key];
  }
  if(q.indexOf('nacl')!==-1 || q.indexOf('поварен')!==-1 || q === 'соль') return LATTICE_DB['NaCl'];
  if(q.indexOf('cscl')!==-1) return LATTICE_DB['CsCl'];
  if(q.indexOf('алмаз')!==-1 || q.indexOf('diamond')!==-1) return LATTICE_DB['diamond'];
  if(q.indexOf('графит')!==-1) return LATTICE_DB['graphite'];
  if(q.indexOf('медь')!==-1 || q === 'cu') return LATTICE_DB['Cu'];
  if(q.indexOf('желез')!==-1 || q === 'fe') return LATTICE_DB['Fe'];
  if(q.indexOf('алюмин')!==-1 || q === 'al') return LATTICE_DB['Al'];
  if(q.indexOf('магни')!==-1 || q === 'mg') return LATTICE_DB['Mg'];
  if(q.indexOf('цинк')!==-1 || q === 'zn') return LATTICE_DB['Zn'];
  if(q.indexOf('серебр')!==-1 || q === 'ag') return LATTICE_DB['Ag'];
  if(q.indexOf('золот')!==-1 || q === 'au') return LATTICE_DB['Au'];
  if(q.indexOf('кварц')!==-1 || q.indexOf('кремнез')!==-1 || q === 'sio2') return LATTICE_DB['SiO2'];
  if(q.indexOf('карборунд')!==-1 || q === 'sic') return LATTICE_DB['SiC'];
  if(q === 'tio2' || q.indexOf('титан')!==-1) return LATTICE_DB['TiO2'];
  if(q === 'caf2' || q.indexOf('флюорит')!==-1) return LATTICE_DB['CaF2'];
  if(q === 'zns' || q.indexOf('сфалерит')!==-1) return LATTICE_DB['ZnS'];
  if(q === 'caco3' || q.indexOf('мел')!==-1 || q.indexOf('мрамор')!==-1 || q.indexOf('известняк')!==-1) return LATTICE_DB['CaCO3'];
  if(q === 'k2o') return LATTICE_DB['K2O'];
  if(q === 'co2' || q.indexOf('углекисл')!==-1) return LATTICE_DB['CO2'];
  if(q === 'i2' || q.indexOf('йод')!==-1 || q.indexOf('иод')!==-1) return LATTICE_DB['I2'];
  return null;
}

function buildLattice(containerId, substance){
  var data = findLattice(substance);
  if(!data) return {error:'Не нашёл решётку для «'+substance+'». Доступно: NaCl, CsCl, алмаз, графит, Cu, Fe, Al, Mg, Zn, Ag, Au, SiO2, SiC, TiO2, CaF2, ZnS, CaCO3, K2O, CO2, I2'};
  var container = document.getElementById(containerId);
  if(!container) return {error:'Не найден контейнер '+containerId};

  destroyLattice();
  container.innerHTML = '';

  var THREE = window.THREE;
  if(!THREE) return {error:'Three.js не загружен'};

  var w = container.clientWidth || 600;
  var h = container.clientHeight || 460;

  _latticeScene = new THREE.Scene();
  _latticeScene.background = new THREE.Color(0xf8fafc);

  _latticeCamera = new THREE.PerspectiveCamera(50, w/h, 0.1, 1000);

  _latticeRenderer = new THREE.WebGLRenderer({antialias:true});
  _latticeRenderer.setSize(w, h);
  _latticeRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(_latticeRenderer.domElement);

  _latticeControls = new THREE.OrbitControls(_latticeCamera, _latticeRenderer.domElement);
  _latticeControls.enableDamping = true;
  _latticeControls.dampingFactor = 0.08;
  _latticeControls.autoRotate = true;
  _latticeControls.autoRotateSpeed = 1.5;

  _latticeScene.add(new THREE.AmbientLight(0xffffff, 0.85));
  var d1 = new THREE.DirectionalLight(0xffffff, 1.0);
  d1.position.set(5,10,7);
  _latticeScene.add(d1);
  var d2 = new THREE.PointLight(0x06b6d4, 0.4);
  d2.position.set(-5,-3,-5);
  _latticeScene.add(d2);

  var atomsAll = [];
  data.ions.forEach(function(ion){
    var positions = Array.isArray(ion.pos) ? ion.pos : getLatticePositions(ion.pos);
    positions.forEach(function(p){
      atomsAll.push({ el: ion.el, color: ion.color, radius: ion.radius, x: p[0], y: p[1], z: p[2] });
    });
  });

  var minP=[Infinity,Infinity,Infinity], maxP=[-Infinity,-Infinity,-Infinity];
  atomsAll.forEach(function(a){
    if(a.x<minP[0])minP[0]=a.x; if(a.x>maxP[0])maxP[0]=a.x;
    if(a.y<minP[1])minP[1]=a.y; if(a.y>maxP[1])maxP[1]=a.y;
    if(a.z<minP[2])minP[2]=a.z; if(a.z>maxP[2])maxP[2]=a.z;
  });
  var cx=(minP[0]+maxP[0])/2, cy=(minP[1]+maxP[1])/2, cz=(minP[2]+maxP[2])/2;

  atomsAll.forEach(function(a){
    var pos = new THREE.Vector3((a.x-cx)*LATTICE_SCALE, (a.y-cy)*LATTICE_SCALE, (a.z-cz)*LATTICE_SCALE);
    var geo = new THREE.SphereGeometry(a.radius*LATTICE_SCALE, 32, 32);
    var mat = new THREE.MeshStandardMaterial({
      color: a.color, roughness: 0.4, metalness: 0.15,
      emissive: a.color, emissiveIntensity: 0.06
    });
    var sphere = new THREE.Mesh(geo, mat);
    sphere.position.copy(pos);
    _latticeScene.add(sphere);
    _latticeMeshes.push(sphere);
    a._pos = pos;
  });

  if(data.showBonds){
    var bondDist = (data.bondDist || 0.45) * LATTICE_SCALE;
    var pairs = data.bondPairs || [['C','C']];
    function isBondPair(el1, el2){
      for(var i=0;i<pairs.length;i++){
        var p = pairs[i];
        if((p[0]===el1 && p[1]===el2) || (p[0]===el2 && p[1]===el1)) return true;
      }
      return false;
    }

    var stickColor = 0x475569;
    var stickRadius = 0.10 * LATTICE_SCALE;

    for(var i=0;i<atomsAll.length;i++){
      for(var j=i+1;j<atomsAll.length;j++){
        if(!isBondPair(atomsAll[i].el, atomsAll[j].el)) continue;
        var p1 = atomsAll[i]._pos;
        var p2 = atomsAll[j]._pos;
        var dist = p1.distanceTo(p2);
        if(dist < bondDist && dist > 0.05){
          var mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
          var dir = new THREE.Vector3().subVectors(p2, p1);
          var length = dir.length();

          var cylGeo = new THREE.CylinderGeometry(stickRadius, stickRadius, length, 12);
          var cylMat = new THREE.MeshStandardMaterial({
            color: stickColor, roughness: 0.5, metalness: 0.2
          });
          var cyl = new THREE.Mesh(cylGeo, cylMat);
          cyl.position.copy(mid);

          var up = new THREE.Vector3(0, 1, 0);
          var dirNorm = dir.clone().normalize();
          var axis = new THREE.Vector3().crossVectors(up, dirNorm);
          var angle = Math.acos(Math.max(-1, Math.min(1, up.dot(dirNorm))));
          if(axis.length() > 0.001){
            axis.normalize();
            cyl.quaternion.setFromAxisAngle(axis, angle);
          }

          _latticeScene.add(cyl);
          _latticeMeshes.push(cyl);
        }
      }
    }
  }

  var bw = (maxP[0]-minP[0])*LATTICE_SCALE;
  var bh = (maxP[1]-minP[1])*LATTICE_SCALE;
  var bd = (maxP[2]-minP[2])*LATTICE_SCALE;
  if(bw > 0 && bh > 0 && bd > 0){
    var boxGeo = new THREE.BoxGeometry(bw, bh, bd);
    var edges = new THREE.EdgesGeometry(boxGeo);
    var boxLine = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color:0x94a3b8, transparent:true, opacity:0.3}));
    _latticeScene.add(boxLine);
    _latticeMeshes.push(boxLine);
  }

  var maxSize = Math.max(bw, bh, bd) || 5;
  _latticeCamera.position.set(maxSize*1.6, maxSize*1.3, maxSize*2.0);
  _latticeControls.target.set(0,0,0);
  _latticeControls.update();

  function animate(){
    _latticeAnimId = requestAnimationFrame(animate);
    if(_latticeControls) _latticeControls.update();
    if(_latticeRenderer && _latticeScene && _latticeCamera) _latticeRenderer.render(_latticeScene, _latticeCamera);
  }
  animate();
  return {success:true, data:data};
}

function destroyLattice(){
  if(_latticeAnimId){ cancelAnimationFrame(_latticeAnimId); _latticeAnimId = null; }
  _latticeMeshes.forEach(function(m){
    if(m.geometry) m.geometry.dispose();
    if(m.material) m.material.dispose();
  });
  _latticeMeshes = [];
  if(_latticeRenderer){ _latticeRenderer.dispose(); _latticeRenderer = null; }
  _latticeScene = null; _latticeCamera = null; _latticeControls = null;
}

/* ==================== ПОМОЩНИК КРИСТАЛЛЫ ==================== */
function runCrystalAssistant(){
  var input = document.getElementById('crystalInput');
  var text = input.value.trim();
  if(!text) return;

  var resultBox = document.getElementById('crystalResult');
  var cardEl = document.getElementById('crystalCanvasCard');
  var titleEl = document.getElementById('crystalCanvasTitle');
  var legendEl = document.getElementById('crystalLegend');

  legendEl.innerHTML = '';
  destroyLattice();

  var res = buildLattice('crystalCanvas', text);
  if(res.error){
    cardEl.style.display = 'none';
    resultBox.innerHTML = '<div class="card"><div class="not-found">'+res.error+'</div></div>';
    return;
  }

  cardEl.style.display = 'block';
  titleEl.innerHTML = '<span class="num">💎</span> ' + res.data.name;

  resultBox.innerHTML = '<div class="card"><div class="definition">'+
    '<span class="term">'+res.data.name+'</span>'+
    res.data.desc +
    '<br><b>Тип:</b> '+res.data.type+' · <b>Сингония:</b> '+res.data.system+
    '</div></div>';

  res.data.ions.forEach(function(ion){
    var color = '#' + ion.color.toString(16).padStart(6,'0');
    legendEl.innerHTML += '<div class="legend-item"><span class="legend-dot" style="background:'+color+'"></span><span>'+ion.el+ion.charge+'</span></div>';
  });

  setTimeout(function(){ buildLattice('crystalCanvas', text); }, 80);
}

function quickCrystal(name){
  document.getElementById('crystalInput').value = name;
  runCrystalAssistant();
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
      '<div class="note">Попроси дополнить сайт.</div>';
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
