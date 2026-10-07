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

/* ==================== БАЗА ВЕЩЕСТВ (400+) ==================== */
var SUBSTANCES = [
  /* Металлы */
  {formula:"Li",name:"Литий",composition:{Li:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Na",name:"Натрий",composition:{Na:1},aliases:[],note:"Металлическая решётка. Щелочной металл."},
  {formula:"K",name:"Калий",composition:{K:1},aliases:[],note:"Металлическая решётка. Щелочной металл."},
  {formula:"Rb",name:"Рубидий",composition:{Rb:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Cs",name:"Цезий",composition:{Cs:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Be",name:"Бериллий",composition:{Be:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Mg",name:"Магний",composition:{Mg:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Ca",name:"Кальций",composition:{Ca:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Sr",name:"Стронций",composition:{Sr:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Ba",name:"Барий",composition:{Ba:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Al",name:"Алюминий",composition:{Al:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Ti",name:"Титан",composition:{Ti:1},aliases:[],note:"Металлическая решётка."},
  {formula:"V",name:"Ванадий",composition:{V:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Cr",name:"Хром",composition:{Cr:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Mn",name:"Марганец",composition:{Mn:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Fe",name:"Железо",composition:{Fe:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Co",name:"Кобальт",composition:{Co:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Ni",name:"Никель",composition:{Ni:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Cu",name:"Медь",composition:{Cu:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Zn",name:"Цинк",composition:{Zn:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Ag",name:"Серебро",composition:{Ag:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Sn",name:"Олово",composition:{Sn:1},aliases:[],note:"Металлическая решётка."},
  {formula:"W",name:"Вольфрам",composition:{W:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Pt",name:"Платина",composition:{Pt:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Au",name:"Золото",composition:{Au:1},aliases:[],note:"Металлическая решётка."},
  {formula:"Hg",name:"Ртуть",composition:{Hg:1},aliases:[],note:"Металлическая решётка. Жидкая."},
  {formula:"Pb",name:"Свинец",composition:{Pb:1},aliases:[],note:"Металлическая решётка."},

  /* Неметаллы */
  {formula:"H2",name:"Водород",composition:{H:2},aliases:[],note:"Молекулярная решётка."},
  {formula:"O2",name:"Кислород",composition:{O:2},aliases:[],note:"Молекулярная решётка."},
  {formula:"O3",name:"Озон",composition:{O:3},aliases:[],note:"Молекулярная решётка."},
  {formula:"N2",name:"Азот",composition:{N:2},aliases:[],note:"Молекулярная решётка."},
  {formula:"F2",name:"Фтор",composition:{F:2},aliases:[],note:"Молекулярная решётка."},
  {formula:"Cl2",name:"Хлор",composition:{Cl:2},aliases:[],note:"Молекулярная решётка."},
  {formula:"Br2",name:"Бром",composition:{Br:2},aliases:[],note:"Молекулярная решётка."},
  {formula:"I2",name:"Йод",composition:{I:2},aliases:["иод"],note:"Молекулярная решётка."},
  {formula:"S",name:"Сера",composition:{S:1},aliases:["серный цвет"],note:"Молекулярная решётка."},
  {formula:"P",name:"Фосфор",composition:{P:1},aliases:[],note:"Атомная решётка."},
  {formula:"C",name:"Углерод",composition:{C:1},aliases:["алмаз","графит","бриллиант"],note:"Атомная решётка."},
  {formula:"Si",name:"Кремний",composition:{Si:1},aliases:[],note:"Атомная решётка."},
  {formula:"B",name:"Бор",composition:{B:1},aliases:[],note:"Атомная решётка."},
  {formula:"He",name:"Гелий",composition:{He:1},aliases:[],note:"Благородный газ."},
  {formula:"Ne",name:"Неон",composition:{Ne:1},aliases:[],note:"Благородный газ."},
  {formula:"Ar",name:"Аргон",composition:{Ar:1},aliases:[],note:"Благородный газ."},

  /* Вода и оксиды */
  {formula:"H2O",name:"Вода",composition:{H:2,O:1},aliases:["лёд","пар","оксид водорода"],note:"Молекулярная решётка."},
  {formula:"H2O2",name:"Пероксид водорода",composition:{H:2,O:2},aliases:["перекись водорода"],note:"Молекулярная решётка."},
  {formula:"Li2O",name:"Оксид лития",composition:{Li:2,O:1},aliases:[],note:"Ионная решётка."},
  {formula:"Na2O",name:"Оксид натрия",composition:{Na:2,O:1},aliases:[],note:"Ионная решётка."},
  {formula:"K2O",name:"Оксид калия",composition:{K:2,O:1},aliases:[],note:"Ионная решётка."},
  {formula:"MgO",name:"Оксид магния",composition:{Mg:1,O:1},aliases:["жжёная магнезия"],note:"Ионная решётка."},
  {formula:"CaO",name:"Оксид кальция",composition:{Ca:1,O:1},aliases:["негашеная известь","известь"],note:"Ионная решётка."},
  {formula:"BaO",name:"Оксид бария",composition:{Ba:1,O:1},aliases:[],note:"Ионная решётка."},
  {formula:"Al2O3",name:"Оксид алюминия",composition:{Al:2,O:3},aliases:["корунд","глинозём","рубин","сапфир"],note:"Амфотерный оксид."},
  {formula:"CuO",name:"Оксид меди(II)",composition:{Cu:1,O:1},aliases:[],note:"Ионная решётка."},
  {formula:"Cu2O",name:"Оксид меди(I)",composition:{Cu:2,O:1},aliases:["куприт"],note:"Ионная решётка."},
  {formula:"FeO",name:"Оксид железа(II)",composition:{Fe:1,O:1},aliases:[],note:"Ионная решётка."},
  {formula:"Fe2O3",name:"Оксид железа(III)",composition:{Fe:2,O:3},aliases:["гематит","ржавчина"],note:"Ионная решётка."},
  {formula:"Fe3O4",name:"Оксид железа(II,III)",composition:{Fe:3,O:4},aliases:["магнетит"],note:"Смешанный оксид."},
  {formula:"ZnO",name:"Оксид цинка",composition:{Zn:1,O:1},aliases:["цинковые белила"],note:"Амфотерный оксид."},
  {formula:"MnO2",name:"Оксид марганца(IV)",composition:{Mn:1,O:2},aliases:["пиролюзит"],note:"Ионная решётка."},
  {formula:"Cr2O3",name:"Оксид хрома(III)",composition:{Cr:2,O:3},aliases:[],note:"Амфотерный оксид."},
  {formula:"CrO3",name:"Оксид хрома(VI)",composition:{Cr:1,O:3},aliases:[],note:"Кислотный оксид."},
  {formula:"TiO2",name:"Оксид титана(IV)",composition:{Ti:1,O:2},aliases:["рутил"],note:"Ионная решётка."},
  {formula:"CO",name:"Оксид углерода(II)",composition:{C:1,O:1},aliases:["угарный газ"],note:"Молекулярная решётка."},
  {formula:"CO2",name:"Оксид углерода(IV)",composition:{C:1,O:2},aliases:["углекислый газ","сухой лёд"],note:"Молекулярная решётка."},
  {formula:"SiO2",name:"Оксид кремния(IV)",composition:{Si:1,O:2},aliases:["кварц","песок","кремнезём"],note:"Атомная решётка!"},
  {formula:"N2O",name:"Оксид азота(I)",composition:{N:2,O:1},aliases:["веселящий газ"],note:"Молекулярная решётка."},
  {formula:"NO",name:"Оксид азота(II)",composition:{N:1,O:1},aliases:[],note:"Молекулярная решётка."},
  {formula:"NO2",name:"Оксид азота(IV)",composition:{N:1,O:2},aliases:["лисий хвост"],note:"Молекулярная решётка."},
  {formula:"N2O5",name:"Оксид азота(V)",composition:{N:2,O:5},aliases:[],note:"Кислотный оксид."},
  {formula:"P2O5",name:"Оксид фосфора(V)",composition:{P:2,O:5},aliases:["фосфорный ангидрид"],note:"Молекулярная решётка."},
  {formula:"SO2",name:"Оксид серы(IV)",composition:{S:1,O:2},aliases:["сернистый газ"],note:"Молекулярная решётка."},
  {formula:"SO3",name:"Оксид серы(VI)",composition:{S:1,O:3},aliases:["серный ангидрид"],note:"Молекулярная решётка."},
  {formula:"PbO",name:"Оксид свинца(II)",composition:{Pb:1,O:1},aliases:["глёт"],note:"Ионная решётка."},
  {formula:"PbO2",name:"Оксид свинца(IV)",composition:{Pb:1,O:2},aliases:[],note:"Ионная решётка."},
  {formula:"Ag2O",name:"Оксид серебра",composition:{Ag:2,O:1},aliases:[],note:"Ионная решётка."},

  /* Основания */
  {formula:"LiOH",name:"Гидроксид лития",composition:{Li:1,O:1,H:1},aliases:[],note:"Щёлочь."},
  {formula:"NaOH",name:"Гидроксид натрия",composition:{Na:1,O:1,H:1},aliases:["едкий натр","каустическая сода"],note:"Сильная щёлочь."},
  {formula:"KOH",name:"Гидроксид калия",composition:{K:1,O:1,H:1},aliases:["едкое кали"],note:"Сильная щёлочь."},
  {formula:"Ca(OH)2",name:"Гидроксид кальция",composition:{Ca:1,O:2,H:2},aliases:["гашеная известь","известковая вода"],note:"Щёлочь."},
  {formula:"Ba(OH)2",name:"Гидроксид бария",composition:{Ba:1,O:2,H:2},aliases:[],note:"Щёлочь."},
  {formula:"Mg(OH)2",name:"Гидроксид магния",composition:{Mg:1,O:2,H:2},aliases:[],note:"Нерастворимое основание."},
  {formula:"Cu(OH)2",name:"Гидроксид меди(II)",composition:{Cu:1,O:2,H:2},aliases:[],note:"Нерастворимое основание."},
  {formula:"Fe(OH)2",name:"Гидроксид железа(II)",composition:{Fe:1,O:2,H:2},aliases:[],note:"Нерастворимое основание."},
  {formula:"Fe(OH)3",name:"Гидроксид железа(III)",composition:{Fe:1,O:3,H:3},aliases:[],note:"Нерастворимое основание."},
  {formula:"Al(OH)3",name:"Гидроксид алюминия",composition:{Al:1,O:3,H:3},aliases:[],note:"Амфотерный гидроксид."},
  {formula:"Zn(OH)2",name:"Гидроксид цинка",composition:{Zn:1,O:2,H:2},aliases:[],note:"Амфотерный гидроксид."},
  {formula:"NH4OH",name:"Гидроксид аммония",composition:{N:1,H:5,O:1},aliases:["нашатырный спирт"],note:"Слабое основание."},

  /* Кислоты */
  {formula:"HF",name:"Плавиковая кислота",composition:{H:1,F:1},aliases:["фтороводородная"],note:"Слабая кислота."},
  {formula:"HCl",name:"Соляная кислота",composition:{H:1,Cl:1},aliases:["хлороводородная"],note:"Сильная кислота."},
  {formula:"HBr",name:"Бромоводородная кислота",composition:{H:1,Br:1},aliases:[],note:"Сильная кислота."},
  {formula:"HI",name:"Иодоводородная кислота",composition:{H:1,I:1},aliases:[],note:"Сильная кислота."},
  {formula:"H2S",name:"Сероводородная кислота",composition:{H:2,S:1},aliases:["сероводород"],note:"Слабая кислота."},
  {formula:"H2SO3",name:"Сернистая кислота",composition:{H:2,S:1,O:3},aliases:[],note:"Слабая кислота."},
  {formula:"H2SO4",name:"Серная кислота",composition:{H:2,S:1,O:4},aliases:["купоросное масло"],note:"Сильная кислота."},
  {formula:"HNO2",name:"Азотистая кислота",composition:{H:1,N:1,O:2},aliases:[],note:"Слабая кислота."},
  {formula:"HNO3",name:"Азотная кислота",composition:{H:1,N:1,O:3},aliases:[],note:"Сильная кислота."},
  {formula:"H2CO3",name:"Угольная кислота",composition:{H:2,C:1,O:3},aliases:[],note:"Слабая неустойчивая."},
  {formula:"H2SiO3",name:"Кремниевая кислота",composition:{H:2,Si:1,O:3},aliases:[],note:"Слабая кислота."},
  {formula:"H3PO4",name:"Фосфорная кислота",composition:{H:3,P:1,O:4},aliases:["ортофосфорная"],note:"Средней силы."},
  {formula:"HClO",name:"Хлорноватистая кислота",composition:{H:1,Cl:1,O:1},aliases:[],note:"Слабая кислота."},
  {formula:"HClO4",name:"Хлорная кислота",composition:{H:1,Cl:1,O:4},aliases:[],note:"Сильная кислота."},
  {formula:"CH3COOH",name:"Уксусная кислота",composition:{C:2,H:4,O:2},aliases:["уксус","этановая"],note:"Слабая органическая."},
  {formula:"HCOOH",name:"Муравьиная кислота",composition:{C:1,H:2,O:2},aliases:["метановая"],note:"Слабая органическая."},
  {formula:"H2C2O4",name:"Щавелевая кислота",composition:{C:2,H:2,O:4},aliases:["этандиовая"],note:"Двухосновная."},
  {formula:"H2CrO4",name:"Хромовая кислота",composition:{H:2,Cr:1,O:4},aliases:[],note:"Сильная кислота."},
  {formula:"HMnO4",name:"Марганцовая кислота",composition:{H:1,Mn:1,O:4},aliases:[],note:"Сильная кислота."},
  {formula:"H3BO3",name:"Борная кислота",composition:{H:3,B:1,O:3},aliases:[],note:"Слабая кислота."},

  /* Хлориды */
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
  {formula:"NaBr",name:"Бромид натрия",composition:{Na:1,Br:1},aliases:[],note:"Ионная решётка."},
  {formula:"KBr",name:"Бромид калия",composition:{K:1,Br:1},aliases:[],note:"Ионная решётка."},
  {formula:"AgBr",name:"Бромид серебра",composition:{Ag:1,Br:1},aliases:[],note:"Нерастворим. Кремовый."},
  {formula:"NaI",name:"Иодид натрия",composition:{Na:1,I:1},aliases:[],note:"Ионная решётка."},
  {formula:"KI",name:"Иодид калия",composition:{K:1,I:1},aliases:[],note:"Ионная решётка."},
  {formula:"AgI",name:"Иодид серебра",composition:{Ag:1,I:1},aliases:[],note:"Нерастворим. Жёлтый."},
  {formula:"NaF",name:"Фторид натрия",composition:{Na:1,F:1},aliases:[],note:"Ионная решётка."},
  {formula:"CaF2",name:"Фторид кальция",composition:{Ca:1,F:2},aliases:["флюорит"],note:"Ионная решётка."},

  /* Сульфаты */
  {formula:"Na2SO4",name:"Сульфат натрия",composition:{Na:2,S:1,O:4},aliases:["глауберова соль"],note:"Ионная решётка."},
  {formula:"K2SO4",name:"Сульфат калия",composition:{K:2,S:1,O:4},aliases:[],note:"Ионная решётка."},
  {formula:"MgSO4",name:"Сульфат магния",composition:{Mg:1,S:1,O:4},aliases:["английская соль"],note:"Ионная решётка."},
  {formula:"CaSO4",name:"Сульфат кальция",composition:{Ca:1,S:1,O:4},aliases:["гипс","алебастр"],note:"Ионная решётка."},
  {formula:"BaSO4",name:"Сульфат бария",composition:{Ba:1,S:1,O:4},aliases:["барит"],note:"Нерастворим. Белый осадок."},
  {formula:"CuSO4",name:"Сульфат меди(II)",composition:{Cu:1,S:1,O:4},aliases:["медный купорос"],note:"Ионная решётка."},
  {formula:"FeSO4",name:"Сульфат железа(II)",composition:{Fe:1,S:1,O:4},aliases:["железный купорос"],note:"Ионная решётка."},
  {formula:"Al2(SO4)3",name:"Сульфат алюминия",composition:{Al:2,S:3,O:12},aliases:[],note:"Ионная решётка."},
  {formula:"ZnSO4",name:"Сульфат цинка",composition:{Zn:1,S:1,O:4},aliases:["цинковый купорос"],note:"Ионная решётка."},
  {formula:"PbSO4",name:"Сульфат свинца",composition:{Pb:1,S:1,O:4},aliases:[],note:"Нерастворим."},

  /* Нитраты */
  {formula:"NaNO3",name:"Нитрат натрия",composition:{Na:1,N:1,O:3},aliases:["натриевая селитра"],note:"Ионная решётка."},
  {formula:"KNO3",name:"Нитрат калия",composition:{K:1,N:1,O:3},aliases:["калиевая селитра","селитра"],note:"Ионная решётка."},
  {formula:"AgNO3",name:"Нитрат серебра",composition:{Ag:1,N:1,O:3},aliases:["ляпис"],note:"Ионная решётка."},
  {formula:"NH4NO3",name:"Нитрат аммония",composition:{N:2,H:4,O:3},aliases:["аммиачная селитра"],note:"Ионная решётка."},
  {formula:"Ca(NO3)2",name:"Нитрат кальция",composition:{Ca:1,N:2,O:6},aliases:["норвежская селитра"],note:"Ионная решётка."},
  {formula:"Cu(NO3)2",name:"Нитрат меди(II)",composition:{Cu:1,N:2,O:6},aliases:[],note:"Ионная решётка."},
  {formula:"Fe(NO3)3",name:"Нитрат железа(III)",composition:{Fe:1,N:3,O:9},aliases:[],note:"Ионная решётка."},

  /* Карбонаты */
  {formula:"Na2CO3",name:"Карбонат натрия",composition:{Na:2,C:1,O:3},aliases:["сода","кальцинированная сода"],note:"Ионная решётка."},
  {formula:"NaHCO3",name:"Гидрокарбонат натрия",composition:{Na:1,H:1,C:1,O:3},aliases:["пищевая сода"],note:"Ионная решётка."},
  {formula:"K2CO3",name:"Карбонат калия",composition:{K:2,C:1,O:3},aliases:["поташ"],note:"Ионная решётка."},
  {formula:"CaCO3",name:"Карбонат кальция",composition:{Ca:1,C:1,O:3},aliases:["мел","известняк","мрамор"],note:"Ионная решётка."},
  {formula:"BaCO3",name:"Карбонат бария",composition:{Ba:1,C:1,O:3},aliases:["витерит"],note:"Нерастворим."},
  {formula:"MgCO3",name:"Карбонат магния",composition:{Mg:1,C:1,O:3},aliases:["магнезит"],note:"Нерастворим."},

  /* Сульфиды, фосфаты */
  {formula:"Na2S",name:"Сульфид натрия",composition:{Na:2,S:1},aliases:[],note:"Ионная решётка."},
  {formula:"K2S",name:"Сульфид калия",composition:{K:2,S:1},aliases:[],note:"Ионная решётка."},
  {formula:"FeS",name:"Сульфид железа(II)",composition:{Fe:1,S:1},aliases:[],note:"Ионная решётка."},
  {formula:"FeS2",name:"Пирит",composition:{Fe:1,S:2},aliases:["серный колчедан"],note:"Ионная решётка."},
  {formula:"ZnS",name:"Сульфид цинка",composition:{Zn:1,S:1},aliases:["сфалерит"],note:"Ионная решётка."},
  {formula:"CuS",name:"Сульфид меди(II)",composition:{Cu:1,S:1},aliases:["ковеллин"],note:"Ионная решётка."},
  {formula:"PbS",name:"Сульфид свинца",composition:{Pb:1,S:1},aliases:["галенит"],note:"Ионная решётка."},
  {formula:"HgS",name:"Сульфид ртути",composition:{Hg:1,S:1},aliases:["киноварь"],note:"Ионная решётка."},
  {formula:"Ca3(PO4)2",name:"Фосфат кальция",composition:{Ca:3,P:2,O:8},aliases:["фосфорит"],note:"Ионная решётка."},
  {formula:"Na3PO4",name:"Фосфат натрия",composition:{Na:3,P:1,O:4},aliases:[],note:"Ионная решётка."},
  {formula:"K3PO4",name:"Фосфат калия",composition:{K:3,P:1,O:4},aliases:[],note:"Ионная решётка."},

  /* Прочие соли */
  {formula:"Na2SiO3",name:"Силикат натрия",composition:{Na:2,Si:1,O:3},aliases:["жидкое стекло"],note:"Ионная решётка."},
  {formula:"CH3COONa",name:"Ацетат натрия",composition:{C:2,H:3,O:2,Na:1},aliases:[],note:"Ионная решётка."},
  {formula:"KMnO4",name:"Перманганат калия",composition:{K:1,Mn:1,O:4},aliases:["марганцовка"],note:"Ионная решётка."},
  {formula:"K2MnO4",name:"Манганат калия",composition:{K:2,Mn:1,O:4},aliases:[],note:"Ионная решётка."},
  {formula:"KClO3",name:"Хлорат калия",composition:{K:1,Cl:1,O:3},aliases:["бертолетова соль"],note:"Ионная решётка."},
  {formula:"KClO4",name:"Перхлорат калия",composition:{K:1,Cl:1,O:4},aliases:[],note:"Ионная решётка."},
  {formula:"K2CrO4",name:"Хромат калия",composition:{K:2,Cr:1,O:4},aliases:[],note:"Ионная решётка."},
  {formula:"K2Cr2O7",name:"Дихромат калия",composition:{K:2,Cr:2,O:7},aliases:["хромпик"],note:"Ионная решётка."},
  {formula:"Na2Cr2O7",name:"Дихромат натрия",composition:{Na:2,Cr:2,O:7},aliases:[],note:"Ионная решётка."},
  {formula:"K4[Fe(CN)6]",name:"Жёлтая кровяная соль",composition:{K:4,Fe:1,C:6,N:6},aliases:[],note:"Комплексная соль."},
  {formula:"K3[Fe(CN)6]",name:"Красная кровяная соль",composition:{K:3,Fe:1,C:6,N:6},aliases:[],note:"Комплексная соль."},
  {formula:"CaC2",name:"Карбид кальция",composition:{Ca:1,C:2},aliases:[],note:"Ионная решётка."},
  {formula:"Al4C3",name:"Карбид алюминия",composition:{Al:4,C:3},aliases:[],note:"Ионная решётка."},
  {formula:"SiC",name:"Карбид кремния",composition:{Si:1,C:1},aliases:["карборунд"],note:"Атомная решётка."},
  {formula:"BN",name:"Нитрид бора",composition:{B:1,N:1},aliases:["эльбор"],note:"Атомная решётка."},
  {formula:"TiN",name:"Нитрид титана",composition:{Ti:1,N:1},aliases:[],note:"Металлическая решётка."},

  /* Органические */
  {formula:"CH4",name:"Метан",composition:{C:1,H:4},aliases:["природный газ","болотный газ"],note:"Молекулярная решётка."},
  {formula:"C2H6",name:"Этан",composition:{C:2,H:6},aliases:[],note:"Молекулярная решётка."},
  {formula:"C3H8",name:"Пропан",composition:{C:3,H:8},aliases:[],note:"Молекулярная решётка."},
  {formula:"C4H10",name:"Бутан",composition:{C:4,H:10},aliases:[],note:"Молекулярная решётка."},
  {formula:"C5H12",name:"Пентан",composition:{C:5,H:12},aliases:[],note:"Молекулярная решётка."},
  {formula:"C6H14",name:"Гексан",composition:{C:6,H:14},aliases:[],note:"Молекулярная решётка."},
  {formula:"C8H18",name:"Октан",composition:{C:8,H:18},aliases:[],note:"Молекулярная решётка."},
  {formula:"C2H4",name:"Этилен",composition:{C:2,H:4},aliases:["этен"],note:"Молекулярная решётка."},
  {formula:"C3H6",name:"Пропилен",composition:{C:3,H:6},aliases:["пропен"],note:"Молекулярная решётка."},
  {formula:"C2H2",name:"Ацетилен",composition:{C:2,H:2},aliases:["этин"],note:"Молекулярная решётка."},
  {formula:"C6H6",name:"Бензол",composition:{C:6,H:6},aliases:[],note:"Молекулярная решётка."},
  {formula:"C7H8",name:"Толуол",composition:{C:7,H:8},aliases:["метилбензол"],note:"Молекулярная решётка."},
  {formula:"CH3OH",name:"Метанол",composition:{C:1,H:4,O:1},aliases:["метиловый спирт","древесный спирт"],note:"Молекулярная решётка."},
  {formula:"C2H5OH",name:"Этанол",composition:{C:2,H:6,O:1},aliases:["спирт","этиловый спирт"],note:"Молекулярная решётка."},
  {formula:"C3H7OH",name:"Пропанол",composition:{C:3,H:8,O:1},aliases:["пропиловый спирт"],note:"Молекулярная решётка."},
  {formula:"C3H8O3",name:"Глицерин",composition:{C:3,H:8,O:3},aliases:[],note:"Молекулярная решётка."},
  {formula:"CH3CHO",name:"Уксусный альдегид",composition:{C:2,H:4,O:1},aliases:["ацетальдегид"],note:"Молекулярная решётка."},
  {formula:"HCHO",name:"Формальдегид",composition:{C:1,H:2,O:1},aliases:["формалин"],note:"Молекулярная решётка."},
  {formula:"C3H6O",name:"Ацетон",composition:{C:3,H:6,O:1},aliases:["пропанон"],note:"Молекулярная решётка."},
  {formula:"C6H12O6",name:"Глюкоза",composition:{C:6,H:12,O:6},aliases:["виноградный сахар"],note:"Молекулярная решётка."},
  {formula:"C12H22O11",name:"Сахароза",composition:{C:12,H:22,O:11},aliases:["сахар","рафинад"],note:"Молекулярная решётка."},
  {formula:"C6H5OH",name:"Фенол",composition:{C:6,H:6,O:1},aliases:["карболовая кислота"],note:"Молекулярная решётка."},
  {formula:"CH3COOCH3",name:"Метилацетат",composition:{C:3,H:6,O:2},aliases:[],note:"Молекулярная решётка."},
  {formula:"NH2CH2COOH",name:"Глицин",composition:{C:2,H:5,N:1,O:2},aliases:["аминоуксусная кислота"],note:"Молекулярная решётка."},
  {formula:"C6H5NH2",name:"Анилин",composition:{C:6,H:7,N:1},aliases:["аминобензол"],note:"Молекулярная решётка."}
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
var ATOM_NAMES={H:'Водород',He:'Гелий',Li:'Литий',Be:'Бериллий',B:'Бор',C:'Углерод',N:'Азот',O:'Кислород',F:'Фтор',Ne:'Неон',Na:'Натрий',Mg:'Магний',Al:'Алюминий',Si:'Кремний',P:'Фосфор',S:'Сера',Cl:'Хлор',Ar:'Аргон',K:'Калий',Ca:'Кальций',Sc:'Скандий',Ti:'Титан',V:'Ванадий',Cr:'Хром',Mn:'Марганец',Fe:'Железо',Co:'Кобальт',Ni:'Никель',Cu:'Медь',Zn:'Цинк',Ga:'Галлий',Ge:'Германий',As:'Мышьяк',Se:'Селен',Br:'Бром',Rb:'Рубидий',Sr:'Стронций',Ag:'Серебро',Sn:'Олово',Sb:'Сурьма',Te:'Теллур',I:'Йод',Cs:'Цезий',Ba:'Барий',W:'Вольфрам',Pt:'Платина',Au:'Золото',Hg:'Ртуть',Pb:'Свинец',Bi:'Висмут'};

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

/* ==================== РЕШЁТКИ ==================== */
var _latticeScene=null,_latticeCamera=null,_latticeRenderer=null,_latticeControls=null,_latticeAnimId=null,_latticeMeshes=[];
var LATTICE_SCALE = 2.5;

function posFCC(){
  var p=[];
  for(var x=0;x<=1;x++)for(var y=0;y<=1;y++)for(var z=0;z<=1;z++)p.push([x,y,z]);
  p.push([0.5,0.5,0],[0.5,0.5,1],[0.5,0,0.5],[0.5,1,0.5],[0,0.5,0.5],[1,0.5,0.5]);
  return p;
}
function posCorners(){var p=[];for(var x=0;x<=1;x++)for(var y=0;y<=1;y++)for(var z=0;z<=1;z++)p.push([x,y,z]);return p;}
function posBCC(){var p=posCorners();p.push([0.5,0.5,0.5]);return p;}
function posOcta(){
  return [[0.5,0,0],[0.5,1,0],[0.5,0,1],[0.5,1,1],
          [0,0.5,0],[1,0.5,0],[0,0.5,1],[1,0.5,1],
          [0,0,0.5],[1,0,0.5],[0,1,0.5],[1,1,0.5],
          [0.5,0.5,0.5]];
}
function posHCP(){
  var p=[],a=1;
  for(var i=0;i<3;i++)for(var j=0;j<3;j++){
    var x=i*a+(j%2)*(a/2),y=j*a*0.866;
    p.push([x,y,0]);
  }
  for(var i2=0;i2<3;i2++)for(var j2=0;j2<3;j2++){
    var x2=i2*a+(j2%2)*(a/2)+a/2,y2=j2*a*0.866+a*0.289;
    p.push([x2,y2,0.816]);
  }
  return p;
}
function posSimple(){
  var p=[];
  for(var x=0;x<2;x++)for(var y=0;y<2;y++)for(var z=0;z<2;z++)p.push([x,y,z]);
  return p;
}
function posDiamond(){
  var p=posFCC();
  p.push([0.25,0.25,0.25],[0.75,0.75,0.25],[0.75,0.25,0.75],[0.25,0.75,0.75]);
  return p;
}
function posGraphite(){
  var p=[],a=0.5;
  for(var i=0;i<3;i++)for(var j=0;j<3;j++){
    var x=i*a+(j%2)*(a/2),y=j*a*0.866;
    p.push([x,y,0]);
  }
  for(var i2=0;i2<3;i2++)for(var j2=0;j2<3;j2++){
    var x2=i2*a+(j2%2)*(a/2)+a/2,y2=j2*a*0.866;
    p.push([x2,y2,0.8]);
  }
  return p;
}
function posRhombohedral(){
  var p=[];
  for(var i=0;i<3;i++)for(var j=0;j<3;j++){
    var x=i*0.7+(j%2)*0.35, y=j*0.6;
    p.push([x,y,0],[x+0.35,y+0.3,0.5],[x+0.15,y+0.15,1.0]);
  }
  return p;
}
function posChain(){
  var p=[];
  for(var i=0;i<4;i++){
    p.push([i*0.4, 0, 0]);
    p.push([i*0.4+0.2, 0.35, 0.2]);
  }
  for(var i2=0;i2<4;i2++){
    p.push([i2*0.4+0.2, 1, 0]);
    p.push([i2*0.4+0.4, 1.35, 0.2]);
  }
  return p;
}
function posIce(){
  var p=[],a=0.55;
  for(var i=0;i<3;i++)for(var j=0;j<3;j++){
    var x=i*a+(j%2)*(a/2),y=j*a*0.866;
    p.push([x,y,0]);
    p.push([x+a/4, y+a*0.144, 0.35]);
  }
  return p;
}
function posSugar(){
  var p=[];
  for(var x=0;x<3;x++)for(var y=0;y<3;y++)for(var z=0;z<2;z++){
    p.push([x*0.8-0.8, y*0.8-0.8, z*0.8]);
  }
  return p;
}
function posP4(){ return [[0,0,0.7],[0.7,0,0],[0.35,0.6,0],[0.35,0.2,0.4]]; }
function posC60(){
  var p=[],n=20;
  for(var i=0;i<n;i++){
    var phi=Math.acos(1 - 2*(i+0.5)/n);
    var theta=Math.PI*(1+Math.sqrt(5))*(i+0.5);
    p.push([Math.sin(phi)*Math.cos(theta), Math.sin(phi)*Math.sin(theta), Math.cos(phi)]);
  }
  return p;
}
function posSilicaSi(){return [[0.15,0.15,0.15],[0.85,0.85,0.15],[0.85,0.15,0.85],[0.15,0.85,0.85]];}
function posSilicaO(){
  return [[0.5,0.5,0.15],[0.5,0.15,0.5],[0.15,0.5,0.5],
          [0.85,0.5,0.5],[0.5,0.85,0.5],[0.5,0.5,0.85]];
}
function posTetraT(){ return [[0.25,0.25,0.25],[0.75,0.75,0.25],[0.75,0.25,0.75],[0.25,0.75,0.75]]; }

function makeMetal(name, el, color, type){
  var system = type === 'bcc' ? 'Кубическая объёмноцентрированная' :
               (type === 'hcp' ? 'Гексагональная плотноупакованная' :
               (type === 'rhombohedral' ? 'Ромбоэдрическая' :
               (type === 'chain' ? 'Цепочечная' : 'Кубическая гранецентрированная')));
  return {
    name: name, type: 'Металлическая', system: system,
    desc: 'Металлическая решётка. Атомы в узлах, валентные электроны обобществлены. Проводит ток и тепло, ковкий.',
    showBonds: false,
    ions: [{el: el, charge:'', color: color, radius: 0.24, pos: type}]
  };
}
function makeIonic(name, catEl, catColor, catCharge, anEl, anColor, anCharge, isCsCl){
  if(isCsCl){
    return {name:name, type:'Ионная', system:'Кубическая примитивная',
      desc:'Ионная решётка. Катион в центре куба, анионы по вершинам. Координационное число 8.',
      showBonds: false,
      ions:[
        {el:catEl, charge:catCharge, color:catColor, radius:0.30, pos:[[0.5,0.5,0.5]]},
        {el:anEl, charge:anCharge, color:anColor, radius:0.26, pos:'corners'}
      ]};
  }
  return {name:name, type:'Ионная', system:'Кубическая гранецентрированная',
    desc:'Ионная решётка. Каждый катион окружён 6 анионами. Координационное число 6.',
    showBonds: false,
    ions:[
      {el:catEl, charge:catCharge, color:catColor, radius:0.20, pos:'fcc'},
      {el:anEl, charge:anCharge, color:anColor, radius:0.30, pos:'octa'}
    ]};
}
function makeSphalerite(name, catEl, catColor, catCharge, anEl, anColor, anCharge){
  return {name:name, type:'Ионная', system:'Кубическая (сфалерит)',
    desc:'Решётка типа сфалерита. Каждый катион в тетраэдрическом окружении из 4 анионов.',
    showBonds: false,
    ions:[
      {el:catEl, charge:catCharge, color:catColor, radius:0.20, pos:'fcc'},
      {el:anEl, charge:anCharge, color:anColor, radius:0.20, pos:'tetra-t'}
    ]};
}
function makeFluorite(name, catEl, catColor, catCharge, anEl, anColor, anCharge){
  return {name:name, type:'Ионная', system:'Кубическая (флюорит)',
    desc:'Решётка типа флюорита. Катион окружён 8 анионами.',
    showBonds: false,
    ions:[
      {el:catEl, charge:catCharge, color:catColor, radius:0.22, pos:'fcc'},
      {el:anEl, charge:anCharge, color:anColor, radius:0.16, pos:'tetra-t'}
    ]};
}
function makeRutile(name, catEl, catColor, catCharge, anEl, anColor, anCharge){
  return {name:name, type:'Ионная', system:'Тетрагональная (рутил)',
    desc:'Решётка типа рутила. Катион в октаэдрическом окружении из 6 анионов.',
    showBonds: false,
    ions:[
      {el:catEl, charge:catCharge, color:catColor, radius:0.20, pos:'bcc'},
      {el:anEl, charge:anCharge, color:anColor, radius:0.15, pos:'octa'}
    ]};
}
function makeAtomic(name, el, color, posName, desc){
  return {name:name, type:'Атомная', system:'Атомная решётка', desc:desc,
    showBonds: true, bondPairs:[[el,el]], bondDist:0.5,
    ions:[{el:el, charge:'', color:color, radius:0.14, pos:posName}]};
}
function makeMolecular(name, el, color, posName, radius, desc){
  return {name:name, type:'Молекулярная', system:'Молекулярная решётка', desc:desc,
    showBonds: false,
    ions:[{el:el, charge:'', color:color, radius:radius||0.20, pos:posName}]};
}
function makeHydroxide(name, meEl, meColor, meCharge){
  return {name:name, type:'Ионная', system:'Ромбическая',
    desc:'Ионная решётка. Сильная щёлочь.',
    showBonds: false,
    ions:[
      {el:meEl, charge:meCharge, color:meColor, radius:0.24, pos:'fcc'},
      {el:'O', charge:'', color:0xef4444, radius:0.16, pos:[[0.5,0.5,0.5]]},
      {el:'H', charge:'', color:0x94a3b8, radius:0.10, pos:'octa'}
    ]};
}
function makeCarbonate(name, meEl, meColor, meCharge){
  return {name:name, type:'Ионная', system:'Тригональная',
    desc:'Ионная решётка. Карбонат. Плоский ион CO3²⁻.',
    showBonds: false,
    ions:[
      {el:meEl, charge:meCharge, color:meColor, radius:0.26, pos:'corners'},
      {el:'C', charge:'', color:0x334155, radius:0.14, pos:[[0.5,0.5,0.5]]},
      {el:'O', charge:'', color:0xef4444, radius:0.12, pos:'octa'}
    ]};
}
function makeSulfate(name, meEl, meColor, meCharge){
  return {name:name, type:'Ионная', system:'Ромбическая',
    desc:'Ионная решётка. Сульфат. Тетраэдрический ион SO4²⁻.',
    showBonds: false,
    ions:[
      {el:meEl, charge:meCharge, color:meColor, radius:0.28, pos:'corners'},
      {el:'S', charge:'', color:0xeab308, radius:0.18, pos:[[0.5,0.5,0.5]]},
      {el:'O', charge:'', color:0xef4444, radius:0.12, pos:'octa'}
    ]};
}
function makeNitrate(name, meEl, meColor, meCharge){
  return {name:name, type:'Ионная', system:'Тригональная',
    desc:'Ионная решётка. Нитрат. Плоский ион NO3⁻.',
    showBonds: false,
    ions:[
      {el:meEl, charge:meCharge, color:meColor, radius:0.24, pos:'fcc'},
      {el:'N', charge:'', color:0x3b82f6, radius:0.14, pos:[[0.5,0.5,0.5]]},
      {el:'O', charge:'', color:0xef4444, radius:0.11, pos:'octa'}
    ]};
}
function makeComplex(name, meEl, meColor, meCharge, centEl, centColor){
  return {name:name, type:'Ионная', system:'Ромбическая',
    desc:'Ионная решётка с комплексным анионом.',
    showBonds: false,
    ions:[
      {el:meEl, charge:meCharge, color:meColor, radius:0.22, pos:'fcc'},
      {el:centEl, charge:'', color:centColor, radius:0.18, pos:[[0.5,0.5,0.5]]},
      {el:'O', charge:'', color:0xef4444, radius:0.12, pos:'octa'}
    ]};
}

var LATTICE_DB = {};
function reg(key, obj){ LATTICE_DB[key] = obj; }

/* Металлы ГЦК */
[['Cu','Медь',0xea580c],['Ag','Серебро',0x9ca3af],['Au','Золото',0xfbbf24],
 ['Al','Алюминий',0x94a3b8],['Ni','Никель',0x15803d],['Pt','Платина',0xa1a1aa],
 ['Pb','Свинец',0x52525b],['Pd','Палладий',0x9ca3af],['Rh','Родий',0xa1a1aa],
 ['Ir','Иридий',0xa1a1aa],['Ca','Кальций',0xa3e635],['Sr','Стронций',0xa3e635]
].forEach(function(m){ reg(m[0], makeMetal(m[1]+' ('+m[0]+')', m[0], m[2], 'fcc')); });

/* Металлы ОЦК */
[['Li','Литий',0xa78bfa],['Na','Натрий',0xa78bfa],['K','Калий',0x8b5cf6],
 ['Rb','Рубидий',0x8b5cf6],['Cs','Цезий',0xf59e0b],['Ba','Барий',0x65a30d],
 ['Cr','Хром',0x0891b2],['W','Вольфрам',0x334155],['Mo','Молибден',0x71717a],
 ['V','Ванадий',0x7c3aed],['Nb','Ниобий',0x71717a],['Ta','Тантал',0x71717a],
 ['Fe','Железо',0x71717a]
].forEach(function(m){ reg(m[0], makeMetal(m[1]+' ('+m[0]+')', m[0], m[2], 'bcc')); });

/* Металлы ГПУ */
[['Be','Бериллий',0x6ee7b7],['Mg','Магний',0x84cc16],['Zn','Цинк',0x71717a],
 ['Cd','Кадмий',0x71717a],['Ti','Титан',0xa1a1aa],['Co','Кобальт',0x2563eb],
 ['Ru','Рутений',0x71717a],['Sc','Скандий',0xfacc15],['Y','Иттрий',0xfacc15],
 ['La','Лантан',0xa1a1aa],['Zr','Цирконий',0xa1a1aa],['Hf','Гафний',0x71717a],
 ['Tl','Таллий',0x71717a]
].forEach(function(m){ reg(m[0], makeMetal(m[1]+' ('+m[0]+')', m[0], m[2], 'hcp')); });

/* Атомные */
reg('diamond', {name:'Алмаз (C)', type:'Атомная', system:'Кубическая алмазная',
  desc:'Каждый атом C связан с 4 другими ковалентными связями по тетраэдру. Самое твёрдое природное вещество.',
  showBonds:true, bondPairs:[['C','C']], bondDist:0.45,
  ions:[{el:'C',charge:'',color:0x334155,radius:0.13,pos:'diamond'}]});
reg('алмаз', LATTICE_DB['diamond']);
reg('бриллиант', LATTICE_DB['diamond']);

reg('graphite', {name:'Графит (C)', type:'Атомная (слоистая)', system:'Гексагональная слоистая',
  desc:'Слоистая структура. Внутри слоя — ковалентные связи, между слоями — слабые. Мягкий, проводит ток.',
  showBonds:true, bondPairs:[['C','C']], bondDist:0.5,
  ions:[{el:'C',charge:'',color:0x475569,radius:0.10,pos:'graphite'}]});
reg('графит', LATTICE_DB['graphite']);
reg('карандаш', LATTICE_DB['graphite']);

reg('Si', makeAtomic('Кремний (Si)', 'Si', 0xd4a373, 'diamond', 'Атомная решётка. Полупроводник. Основа электроники.'));
reg('Ge', makeAtomic('Германий (Ge)', 'Ge', 0x94a3b8, 'diamond', 'Атомная решётка. Полупроводник.'));

reg('B', {name:'Бор (B)', type:'Атомная', system:'Ромбоэдрическая',
  desc:'Икосаэдрические кластеры B12. Твёрдый, тугоплавкий.',
  showBonds:true, bondPairs:[['B','B']], bondDist:0.45,
  ions:[{el:'B',charge:'',color:0xfbbf24,radius:0.13,pos:'rhombohedral'}]});

reg('P', {name:'Белый фосфор (P4)', type:'Молекулярная', system:'Кубическая',
  desc:'Молекулы P4 тетраэдрической формы. Ядовит, светится в темноте.',
  showBonds:false,
  ions:[{el:'P',charge:'',color:0xf97316,radius:0.20,pos:'p4'}]});

reg('As', {name:'Мышьяк (As)', type:'Атомная (слоистая)', system:'Ромбоэдрическая',
  desc:'Слоистая атомная решётка, похожа на графит. Ядовит.',
  showBonds:true, bondPairs:[['As','As']], bondDist:0.45,
  ions:[{el:'As',charge:'',color:0xf97316,radius:0.14,pos:'rhombohedral'}]});
reg('Sb', {name:'Сурьма (Sb)', type:'Атомная (слоистая)', system:'Ромбоэдрическая',
  desc:'Полуметалл. Используется в сплавах.',
  showBonds:true, bondPairs:[['Sb','Sb']], bondDist:0.45,
  ions:[{el:'Sb',charge:'',color:0xa855f7,radius:0.15,pos:'rhombohedral'}]});
reg('Bi', {name:'Висмут (Bi)', type:'Атомная (слоистая)', system:'Ромбоэдрическая',
  desc:'Тяжёлый хрупкий металл с радужной поверхностью.',
  showBonds:true, bondPairs:[['Bi','Bi']], bondDist:0.45,
  ions:[{el:'Bi',charge:'',color:0x7c3aed,radius:0.16,pos:'rhombohedral'}]});
reg('Se', {name:'Селен (Se)', type:'Атомная (цепочечная)', system:'Моноклинная',
  desc:'Спиральные цепочки атомов. Полупроводник.',
  showBonds:true, bondPairs:[['Se','Se']], bondDist:0.45,
  ions:[{el:'Se',charge:'',color:0xeab308,radius:0.14,pos:'chain'}]});
reg('Te', {name:'Теллур (Te)', type:'Атомная (цепочечная)', system:'Гексагональная',
  desc:'Цепочки атомов. Полуметалл.',
  showBonds:true, bondPairs:[['Te','Te']], bondDist:0.45,
  ions:[{el:'Te',charge:'',color:0xeab308,radius:0.15,pos:'chain'}]});

/* SiO2 и родственные */
reg('SiO2', {name:'Оксид кремния (SiO2)', type:'Атомная', system:'Тетраэдрическая',
  desc:'Атомная решётка. Каждый Si связан с 4 атомами O в тетраэдр. Кварц, песок, горный хрусталь.',
  showBonds:true, bondPairs:[['Si','O']], bondDist:0.55,
  ions:[
    {el:'Si',charge:'',color:0xd4a373,radius:0.16,pos:'silica-si'},
    {el:'O', charge:'',color:0xef4444,radius:0.11,pos:'silica-o'}
  ]});
reg('песок', LATTICE_DB['SiO2']);
reg('кварц', LATTICE_DB['SiO2']);

reg('SiC', {name:'Карбид кремния (SiC)', type:'Атомная', system:'Тетраэдрическая',
  desc:'Карборунд. Очень твёрдый. Абразив и полупроводник.',
  showBonds:true, bondPairs:[['Si','C']], bondDist:0.5,
  ions:[
    {el:'Si',charge:'',color:0xd4a373,radius:0.16,pos:'silica-si'},
    {el:'C', charge:'',color:0x334155,radius:0.13,pos:'silica-o'}
  ]});
reg('карборунд', LATTICE_DB['SiC']);

/* Молекулярные */
reg('CO2', makeMolecular('Сухой лёд (CO2)', 'CO₂', 0x64748b, 'simple', 0.20, 'Молекулярная решётка. Сухой лёд сублимируется при −78 °C.'));
reg('сухой лед', LATTICE_DB['CO2']);
reg('углекислый газ', LATTICE_DB['CO2']);
reg('I2', makeMolecular('Йод (I2)', 'I₂', 0x7c3aed, 'simple', 0.22, 'Молекулярная решётка. Тёмно-фиолетовые кристаллы.'));
reg('йод', LATTICE_DB['I2']);
reg('иод', LATTICE_DB['I2']);
reg('Br2', makeMolecular('Бром (Br2)', 'Br₂', 0x92400e, 'simple', 0.20, 'Молекулярная решётка. Бурая жидкость.'));
reg('Cl2', makeMolecular('Хлор (Cl2)', 'Cl₂', 0x22c55e, 'simple', 0.20, 'Молекулярная решётка при низких температурах.'));
reg('F2', makeMolecular('Фтор (F2)', 'F₂', 0x22d3ee, 'simple', 0.18, 'Молекулярная решётка при низких температурах.'));
reg('O2', makeMolecular('Твёрдый кислород (O2)', 'O₂', 0xef4444, 'simple', 0.18, 'Синие кристаллы при −219 °C.'));
reg('N2', makeMolecular('Твёрдый азот (N2)', 'N₂', 0x3b82f6, 'simple', 0.18, 'Кристаллы при −210 °C.'));
reg('H2', makeMolecular('Твёрдый водород (H2)', 'H₂', 0x94a3b8, 'simple', 0.14, 'Кристаллы при −259 °C.'));
reg('CH4', makeMolecular('Метан (CH4)', 'CH₄', 0x64748b, 'simple', 0.20, 'Тетраэдрические молекулы. Природный газ.'));
reg('NH3', makeMolecular('Аммиак (NH3)', 'NH₃', 0x3b82f6, 'simple', 0.20, 'Водородные связи между молекулами.'));
reg('HCl', makeMolecular('Хлороводород (HCl)', 'HCl', 0x22c55e, 'simple', 0.18, 'Молекулярная решётка при низких температурах.'));
reg('HF', makeMolecular('Фтороводород (HF)', 'HF', 0x22d3ee, 'simple', 0.18, 'Молекулярная решётка с водородными связями.'));
reg('SO2', makeMolecular('Оксид серы(IV) (SO2)', 'SO₂', 0xeab308, 'simple', 0.20, 'Молекулярная решётка.'));
reg('H2S', makeMolecular('Сероводород (H2S)', 'H₂S', 0xeab308, 'simple', 0.20, 'Молекулярная решётка.'));
reg('C6H6', makeMolecular('Бензол (C6H6)', 'C₆H₆', 0xf8fafc, 'simple', 0.22, 'Плоские молекулы. Ароматическое соединение.'));
reg('бензол', LATTICE_DB['C6H6']);

/* Лёд */
reg('лёд', makeMolecular('Лёд (H2O)', 'H₂O', 0x3b82f6, 'ice', 0.18, 'Молекулярная решётка. Водородные связи. Ажурная структура — лёд плавает.'));
reg('H2O', LATTICE_DB['лёд']);
reg('ice', LATTICE_DB['лёд']);
reg('вода', LATTICE_DB['лёд']);

/* Сахар и органика */
reg('сахар', makeMolecular('Сахароза / Сахар (C12H22O11)', 'C₁₂H₂₂O₁₁', 0xf8fafc, 'sugar', 0.20, 'Молекулярная решётка. Дисахарид. Растворим в воде.'));
reg('сахароза', LATTICE_DB['сахар']);
reg('C12H22O11', LATTICE_DB['сахар']);
reg('рафинад', LATTICE_DB['сахар']);
reg('глюкоза', makeMolecular('Глюкоза (C6H12O6)', 'C₆H₁₂O₆', 0xf1f5f9, 'sugar', 0.18, 'Молекулярная решётка. Моносахарид.'));
reg('C6H12O6', LATTICE_DB['глюкоза']);
reg('мочевина', makeMolecular('Мочевина / Карбамид (CH4N2O)', 'CH₄N₂O', 0xf8fafc, 'sugar', 0.18, 'Молекулярная решётка. Азотное удобрение.'));
reg('карбамид', LATTICE_DB['мочевина']);
reg('лимонная кислота', makeMolecular('Лимонная кислота (C6H8O7)', 'C₆H₈O₇', 0xf8fafc, 'sugar', 0.19, 'Молекулярная решётка. Пищевая добавка E330.'));
reg('аспирин', makeMolecular('Аспирин (C9H8O4)', 'C₉H₈O₄', 0xf8fafc, 'sugar', 0.19, 'Молекулярная решётка. Лекарство.'));
reg('кофеин', makeMolecular('Кофеин (C8H10N4O2)', 'C₈H₁₀N₄O₂', 0xf8fafc, 'sugar', 0.19, 'Молекулярная решётка. Алкалоид.'));
reg('фуллерен', {name:'Фуллерен (C60)', type:'Молекулярная', system:'Кубическая',
  desc:'Молекулярная решётка из молекул C60 (сферы). Открыт в 1985 г.',
  showBonds:false,
  ions:[{el:'C₆₀',charge:'',color:0x334155,radius:0.28,pos:'c60'}]});
reg('C60', LATTICE_DB['фуллерен']);

/* Ионные NaCl-типа */
[['NaCl','Хлорид натрия',0xa78bfa,'+','Cl',0x22c55e,'-'],
 ['KCl','Хлорид калия',0x8b5cf6,'+','Cl',0x22c55e,'-'],
 ['LiCl','Хлорид лития',0xa78bfa,'+','Cl',0x22c55e,'-'],
 ['RbCl','Хлорид рубидия',0x8b5cf6,'+','Cl',0x22c55e,'-'],
 ['NaBr','Бромид натрия',0xa78bfa,'+','Br',0x92400e,'-'],
 ['KBr','Бромид калия',0x8b5cf6,'+','Br',0x92400e,'-'],
 ['NaI','Иодид натрия',0xa78bfa,'+','I',0x7c3aed,'-'],
 ['KI','Иодид калия',0x8b5cf6,'+','I',0x7c3aed,'-'],
 ['NaF','Фторид натрия',0xa78bfa,'+','F',0x22d3ee,'-'],
 ['KF','Фторид калия',0x8b5cf6,'+','F',0x22d3ee,'-'],
 ['LiF','Фторид лития',0xa78bfa,'+','F',0x22d3ee,'-'],
 ['MgO','Оксид магния',0x84cc16,'2+','O',0xef4444,'2-'],
 ['CaO','Оксид кальция',0xa3e635,'2+','O',0xef4444,'2-'],
 ['BaO','Оксид бария',0x65a30d,'2+','O',0xef4444,'2-'],
 ['SrO','Оксид стронция',0xa3e635,'2+','O',0xef4444,'2-'],
 ['MnO','Оксид марганца(II)',0xa855f7,'2+','O',0xef4444,'2-'],
 ['FeO','Оксид железа(II)',0xb45309,'2+','O',0xef4444,'2-'],
 ['NiO','Оксид никеля(II)',0x15803d,'2+','O',0xef4444,'2-'],
 ['CoO','Оксид кобальта(II)',0x2563eb,'2+','O',0xef4444,'2-'],
 ['CuO','Оксид меди(II)',0xea580c,'2+','O',0xef4444,'2-'],
 ['AgCl','Хлорид серебра',0x9ca3af,'+','Cl',0x22c55e,'-'],
 ['AgBr','Бромид серебра',0x9ca3af,'+','Br',0x92400e,'-'],
 ['AgI','Иодид серебра',0x9ca3af,'+','I',0x7c3aed,'-'],
 ['PbS','Сульфид свинца(II)',0x52525b,'2+','S',0xeab308,'2-'],
 ['FeS','Сульфид железа(II)',0xb45309,'2+','S',0xeab308,'2-'],
 ['CaS','Сульфид кальция',0xa3e635,'2+','S',0xeab308,'2-'],
 ['Na2S','Сульфид натрия',0xa78bfa,'+','S',0xeab308,'2-'],
 ['K2S','Сульфид калия',0x8b5cf6,'+','S',0xeab308,'2-']
].forEach(function(x){ reg(x[0], makeIonic(x[1]+' ('+x[0]+')', x[2], x[3], x[4], x[5], x[6], x[7], false)); });

/* Ионные CsCl-типа */
[['CsCl','Хлорид цезия',0xf59e0b,'+','Cl',0x22c55e,'-'],
 ['CsBr','Бромид цезия',0xf59e0b,'+','Br',0x92400e,'-'],
 ['CsI','Иодид цезия',0xf59e0b,'+','I',0x7c3aed,'-'],
 ['CsF','Фторид цезия',0xf59e0b,'+','F',0x22d3ee,'-'],
 ['NH4Cl','Хлорид аммония',0x8b5cf6,'+','Cl',0x22c55e,'-'],
 ['NH4Br','Бромид аммония',0x8b5cf6,'+','Br',0x92400e,'-'],
 ['NH4I','Иодид аммония',0x8b5cf6,'+','I',0x7c3aed,'-']
].forEach(function(x){ reg(x[0], makeIonic(x[1]+' ('+x[0]+')', x[2], x[3], x[4], x[5], x[6], x[7], true)); });

/* Сфалерит */
[['ZnS','Сульфид цинка',0x71717a,'2+','S',0xeab308,'2-'],
 ['ZnSe','Селенид цинка',0x71717a,'2+','Se',0xeab308,'2-'],
 ['CdS','Сульфид кадмия',0x71717a,'2+','S',0xeab308,'2-'],
 ['HgS','Сульфид ртути',0x94a3b8,'2+','S',0xeab308,'2-'],
 ['CuCl','Хлорид меди(I)',0xea580c,'+','Cl',0x22c55e,'-'],
 ['CuBr','Бромид меди(I)',0xea580c,'+','Br',0x92400e,'-'],
 ['CuI','Иодид меди(I)',0xea580c,'+','I',0x7c3aed,'-'],
 ['BeO','Оксид бериллия',0x6ee7b7,'2+','O',0xef4444,'2-'],
 ['GaAs','Арсенид галлия',0x84cc16,'3+','As',0xf97316,'3-'],
 ['GaP','Фосфид галлия',0x84cc16,'3+','P',0xf97316,'3-']
].forEach(function(x){ reg(x[0], makeSphalerite(x[1]+' ('+x[0]+')', x[2], x[3], x[4], x[5], x[6], x[7])); });

/* Флюорит */
[['CaF2','Фторид кальция',0xa3e635,'2+','F',0x22d3ee,'-'],
 ['SrF2','Фторид стронция',0xa3e635,'2+','F',0x22d3ee,'-'],
 ['BaF2','Фторид бария',0x65a30d,'2+','F',0x22d3ee,'-'],
 ['CdF2','Фторид кадмия',0x71717a,'2+','F',0x22d3ee,'-'],
 ['PbF2','Фторид свинца(II)',0x52525b,'2+','F',0x22d3ee,'-'],
 ['UO2','Диоксид урана',0x334155,'4+','O',0xef4444,'2-'],
 ['ThO2','Диоксид тория',0x334155,'4+','O',0xef4444,'2-'],
 ['CeO2','Диоксид церия',0xa1a1aa,'4+','O',0xef4444,'2-'],
 ['ZrO2','Диоксид циркония',0xa1a1aa,'4+','O',0xef4444,'2-']
].forEach(function(x){ reg(x[0], makeFluorite(x[1]+' ('+x[0]+')', x[2], x[3], x[4], x[5], x[6], x[7])); });

/* Рутил */
[['TiO2','Оксид титана(IV)',0xa1a1aa,'4+','O',0xef4444,'2-'],
 ['SnO2','Оксид олова(IV)',0x6b7280,'4+','O',0xef4444,'2-'],
 ['MnO2','Оксид марганца(IV)',0xa855f7,'4+','O',0xef4444,'2-'],
 ['PbO2','Оксид свинца(IV)',0x52525b,'4+','O',0xef4444,'2-'],
 ['GeO2','Оксид германия(IV)',0x94a3b8,'4+','O',0xef4444,'2-'],
 ['MgF2','Фторид магния',0x84cc16,'2+','F',0x22d3ee,'-'],
 ['ZnF2','Фторид цинка',0x71717a,'2+','F',0x22d3ee,'-'],
 ['NiF2','Фторид никеля',0x15803d,'2+','F',0x22d3ee,'-']
].forEach(function(x){ reg(x[0], makeRutile(x[1]+' ('+x[0]+')', x[2], x[3], x[4], x[5], x[6], x[7])); });

/* Гидроксиды */
[['NaOH','Гидроксид натрия',0xa78bfa,'+'],
 ['KOH','Гидроксид калия',0x8b5cf6,'+'],
 ['LiOH','Гидроксид лития',0xa78bfa,'+'],
 ['RbOH','Гидроксид рубидия',0x8b5cf6,'+'],
 ['CsOH','Гидроксид цезия',0xf59e0b,'+'],
 ['Ca(OH)2','Гидроксид кальция',0xa3e635,'2+'],
 ['Sr(OH)2','Гидроксид стронция',0xa3e635,'2+'],
 ['Ba(OH)2','Гидроксид бария',0x65a30d,'2+'],
 ['Mg(OH)2','Гидроксид магния',0x84cc16,'2+'],
 ['Cu(OH)2','Гидроксид меди(II)',0xea580c,'2+'],
 ['Fe(OH)2','Гидроксид железа(II)',0xb45309,'2+'],
 ['Ni(OH)2','Гидроксид никеля(II)',0x15803d,'2+'],
 ['Co(OH)2','Гидроксид кобальта(II)',0x2563eb,'2+'],
 ['Mn(OH)2','Гидроксид марганца(II)',0xa855f7,'2+']
].forEach(function(x){ reg(x[0], makeHydroxide(x[1]+' ('+x[0]+')', x[2], x[3], x[4])); });

/* Карбонаты */
[['CaCO3','Карбонат кальция',0xa3e635,'2+'],
 ['MgCO3','Карбонат магния',0x84cc16,'2+'],
 ['BaCO3','Карбонат бария',0x65a30d,'2+'],
 ['SrCO3','Карбонат стронция',0xa3e635,'2+'],
 ['FeCO3','Карбонат железа(II)',0xb45309,'2+'],
 ['MnCO3','Карбонат марганца(II)',0xa855f7,'2+'],
 ['ZnCO3','Карбонат цинка',0x71717a,'2+'],
 ['CdCO3','Карбонат кадмия',0x71717a,'2+']
].forEach(function(x){ reg(x[0], makeCarbonate(x[1]+' ('+x[0]+')', x[2], x[3], x[4])); });
reg('мел', LATTICE_DB['CaCO3']);
reg('мрамор', LATTICE_DB['CaCO3']);
reg('известняк', LATTICE_DB['CaCO3']);

/* Сульфаты */
[['BaSO4','Сульфат бария',0x65a30d,'2+'],
 ['SrSO4','Сульфат стронция',0xa3e635,'2+'],
 ['PbSO4','Сульфат свинца(II)',0x52525b,'2+'],
 ['CaSO4','Сульфат кальция',0xa3e635,'2+']
].forEach(function(x){ reg(x[0], makeSulfate(x[1]+' ('+x[0]+')', x[2], x[3], x[4])); });
reg('гипс', LATTICE_DB['CaSO4']);
reg('барит', LATTICE_DB['BaSO4']);

/* Нитраты */
[['NaNO3','Нитрат натрия',0xa78bfa,'+'],
 ['KNO3','Нитрат калия',0x8b5cf6,'+'],
 ['AgNO3','Нитрат серебра',0x9ca3af,'+'],
 ['RbNO3','Нитрат рубидия',0x8b5cf6,'+'],
 ['CsNO3','Нитрат цезия',0xf59e0b,'+']
].forEach(function(x){ reg(x[0], makeNitrate(x[1]+' ('+x[0]+')', x[2], x[3], x[4])); });
reg('селитра', LATTICE_DB['KNO3']);

/* Комплексы */
reg('KMnO4', makeComplex('Перманганат калия (KMnO4)', 'K', 0x8b5cf6, '+', 'Mn', 0xa855f7));
reg('марганцовка', LATTICE_DB['KMnO4']);
reg('NaMnO4', makeComplex('Перманганат натрия (NaMnO4)', 'Na', 0xa78bfa, '+', 'Mn', 0xa855f7));
reg('K2CrO4', makeComplex('Хромат калия (K2CrO4)', 'K', 0x8b5cf6, '+', 'Cr', 0x0891b2));
reg('K2Cr2O7', makeComplex('Дихромат калия (K2Cr2O7)', 'K', 0x8b5cf6, '+', 'Cr', 0x0891b2));
reg('хромпик', LATTICE_DB['K2Cr2O7']);
reg('Na2Cr2O7', makeComplex('Дихромат натрия (Na2Cr2O7)', 'Na', 0xa78bfa, '+', 'Cr', 0x0891b2));

/* Карбиды, нитриды */
reg('CaC2', {name:'Карбид кальция (CaC2)', type:'Ионная', system:'Тетрагональная',
  desc:'Ионная решётка. При реакции с водой выделяет ацетилен.',
  showBonds:false,
  ions:[
    {el:'Ca',charge:'2+',color:0xa3e635,radius:0.26,pos:'bcc'},
    {el:'C', charge:'',  color:0x334155,radius:0.15,pos:'octa'}
  ]});
reg('Al4C3', {name:'Карбид алюминия (Al4C3)', type:'Ионная', system:'Тригональная',
  desc:'Ионная решётка. При гидролизе даёт метан.',
  showBonds:false,
  ions:[
    {el:'Al',charge:'3+',color:0x94a3b8,radius:0.20,pos:'fcc'},
    {el:'C', charge:'',  color:0x334155,radius:0.14,pos:'octa'}
  ]});
reg('TiC', {name:'Карбид титана (TiC)', type:'Атомная', system:'Кубическая',
  desc:'Очень твёрдый, тугоплавкий. Резцы, буры.',
  showBonds:true, bondPairs:[['Ti','C']], bondDist:0.5,
  ions:[
    {el:'Ti',charge:'',color:0xa1a1aa,radius:0.20,pos:'fcc'},
    {el:'C', charge:'',color:0x334155,radius:0.15,pos:'octa'}
  ]});
reg('WC', {name:'Карбид вольфрама (WC)', type:'Атомная', system:'Гексагональная',
  desc:'Сверхтвёрдый материал. Победит для бурения.',
  showBonds:true, bondPairs:[['W','C']], bondDist:0.5,
  ions:[
    {el:'W', charge:'',color:0x334155,radius:0.22,pos:'hcp'},
    {el:'C', charge:'',color:0x334155,radius:0.14,pos:'octa'}
  ]});
reg('TiN', {name:'Нитрид титана (TiN)', type:'Ионная', system:'Кубическая',
  desc:'Золотистый, очень твёрдый. Покрытие для инструментов.',
  showBonds:false,
  ions:[
    {el:'Ti',charge:'',color:0xa1a1aa,radius:0.20,pos:'fcc'},
    {el:'N', charge:'',color:0x3b82f6,radius:0.14,pos:'octa'}
  ]});
reg('BN', {name:'Нитрид бора (BN, эльбор)', type:'Атомная', system:'Кубическая',
  desc:'По твёрдости близок к алмазу. Абразив.',
  showBonds:true, bondPairs:[['B','N']], bondDist:0.45,
  ions:[
    {el:'B',charge:'',color:0xfbbf24,radius:0.14,pos:'silica-si'},
    {el:'N',charge:'',color:0x3b82f6,radius:0.14,pos:'silica-o'}
  ]});
reg('Si3N4', {name:'Нитрид кремния (Si3N4)', type:'Атомная', system:'Гексагональная',
  desc:'Прочная керамика для двигателей.',
  showBonds:true, bondPairs:[['Si','N']], bondDist:0.5,
  ions:[
    {el:'Si',charge:'',color:0xd4a373,radius:0.16,pos:'silica-si'},
    {el:'N', charge:'',color:0x3b82f6,radius:0.12,pos:'silica-o'}
  ]});

/* Оксиды прочие */
reg('Al2O3', {name:'Оксид алюминия (Al2O3, корунд)', type:'Ионная', system:'Тригональная',
  desc:'Корунд. Рубин и сапфир — драгоценные камни. Очень твёрдый.',
  showBonds:false,
  ions:[
    {el:'Al',charge:'3+',color:0x94a3b8,radius:0.20,pos:'fcc'},
    {el:'O', charge:'2-',color:0xef4444,radius:0.16,pos:'octa'}
  ]});
reg('корунд', LATTICE_DB['Al2O3']);
reg('рубин', LATTICE_DB['Al2O3']);
reg('сапфир', LATTICE_DB['Al2O3']);

reg('Fe2O3', {name:'Оксид железа(III) (Fe2O3)', type:'Ионная', system:'Тригональная',
  desc:'Красный железняк. Руда для железа.',
  showBonds:false,
  ions:[
    {el:'Fe',charge:'3+',color:0xb45309,radius:0.22,pos:'fcc'},
    {el:'O', charge:'2-',color:0xef4444,radius:0.16,pos:'octa'}
  ]});
reg('гематит', LATTICE_DB['Fe2O3']);
reg('ржавчина', LATTICE_DB['Fe2O3']);

reg('Fe3O4', {name:'Оксид железа(II,III) (Fe3O4, магнетит)', type:'Ионная', system:'Кубическая',
  desc:'Магнетит. Магнитный железняк.',
  showBonds:false,
  ions:[
    {el:'Fe',charge:'2+',color:0xb45309,radius:0.22,pos:'fcc'},
    {el:'Fe',charge:'3+',color:0x92400e,radius:0.20,pos:'octa'},
    {el:'O', charge:'2-',color:0xef4444,radius:0.14,pos:'octa'}
  ]});
reg('магнетит', LATTICE_DB['Fe3O4']);

reg('ZnO', {name:'Оксид цинка (ZnO)', type:'Ионная', system:'Гексагональная',
  desc:'Амфотерный оксид. Цинковые белила.',
  showBonds:false,
  ions:[
    {el:'Zn',charge:'2+',color:0x71717a,radius:0.22,pos:'hcp'},
    {el:'O', charge:'2-',color:0xef4444,radius:0.16,pos:'octa'}
  ]});

reg('CuSO4', {name:'Сульфат меди(II) (CuSO4)', type:'Ионная', system:'Ромбическая',
  desc:'Медный купорос. Синие кристаллы.',
  showBonds:false,
  ions:[
    {el:'Cu',charge:'2+',color:0xea580c,radius:0.22,pos:'fcc'},
    {el:'S', charge:'',   color:0xeab308,radius:0.16,pos:[[0.5,0.5,0.5]]},
    {el:'O', charge:'',   color:0xef4444,radius:0.11,pos:'octa'}
  ]});
reg('медный купорос', LATTICE_DB['CuSO4']);

reg('Na2CO3', {name:'Карбонат натрия (Na2CO3, сода)', type:'Ионная', system:'Моноклинная',
  desc:'Кальцинированная сода. Стекловарение, мыловарение.',
  showBonds:false,
  ions:[
    {el:'Na',charge:'+',color:0xa78bfa,radius:0.20,pos:'fcc'},
    {el:'C', charge:'',  color:0x334155,radius:0.16,pos:[[0.5,0.5,0.5]]},
    {el:'O', charge:'',  color:0xef4444,radius:0.13,pos:'octa'}
  ]});
reg('сода', LATTICE_DB['Na2CO3']);

reg('NaHCO3', {name:'Гидрокарбонат натрия (NaHCO3, пищевая сода)', type:'Ионная', system:'Моноклинная',
  desc:'Пищевая сода. Разлагается при нагревании с выделением CO2.',
  showBonds:false,
  ions:[
    {el:'Na',charge:'+',color:0xa78bfa,radius:0.22,pos:'fcc'},
    {el:'C', charge:'',  color:0x334155,radius:0.16,pos:[[0.5,0.5,0.5]]},
    {el:'O', charge:'',  color:0xef4444,radius:0.13,pos:'octa'}
  ]});
reg('пищевая сода', LATTICE_DB['NaHCO3']);

reg('Ca3(PO4)2', {name:'Фосфат кальция (Ca3(PO4)2)', type:'Ионная', system:'Моноклинная',
  desc:'Основной минерал костей и зубов.',
  showBonds:false,
  ions:[
    {el:'Ca',charge:'2+',color:0xa3e635,radius:0.22,pos:'fcc'},
    {el:'P', charge:'',  color:0xf97316,radius:0.16,pos:[[0.5,0.5,0.5]]},
    {el:'O', charge:'',  color:0xef4444,radius:0.11,pos:'octa'}
  ]});
reg('фосфорит', LATTICE_DB['Ca3(PO4)2']);

reg('P2O5', {name:'Оксид фосфора(V) (P2O5)', type:'Молекулярная', system:'Гексагональная',
  desc:'Фосфорный ангидрид. Сильное водоотнимающее средство.',
  showBonds:false,
  ions:[{el:'P₂O₅',charge:'',color:0xf97316,radius:0.20,pos:'simple'}]});

reg('SO3', {name:'Оксид серы(VI) (SO3)', type:'Молекулярная', system:'Тригональная',
  desc:'Серный ангидрид. С водой даёт серную кислоту.',
  showBonds:false,
  ions:[{el:'SO₃',charge:'',color:0xeab308,radius:0.20,pos:'simple'}]});

reg('N2O5', {name:'Оксид азота(V) (N2O5)', type:'Молекулярная', system:'Гексагональная',
  desc:'Азотный ангидрид. С водой даёт азотную кислоту.',
  showBonds:false,
  ions:[{el:'N₂O₅',charge:'',color:0x3b82f6,radius:0.20,pos:'simple'}]});

/* Инертные газы */
reg('He', makeMolecular('Твёрдый гелий (He)', 'He', 0xc7d2fe, 'simple', 0.10, 'Кристаллы при −272 °C.'));
reg('Ne', makeMolecular('Твёрдый неон (Ne)', 'Ne', 0x67e8f9, 'simple', 0.12, 'Кристаллы при −249 °C.'));
reg('Ar', makeMolecular('Твёрдый аргон (Ar)', 'Ar', 0xa5b4fc, 'simple', 0.14, 'Кристаллы при −189 °C.'));

/* ============ ПОИСК РЕШЁТКИ ============ */
function getLatticePositions(name){
  switch(name){
    case 'fcc': return posFCC();
    case 'bcc': return posBCC();
    case 'octa': return posOcta();
    case 'corners': return posCorners();
    case 'hcp': return posHCP();
    case 'simple': return posSimple();
    case 'diamond': return posDiamond();
    case 'graphite': return posGraphite();
    case 'rhombohedral': return posRhombohedral();
    case 'chain': return posChain();
    case 'ice': return posIce();
    case 'sugar': return posSugar();
    case 'p4': return posP4();
    case 'c60': return posC60();
    case 'silica-si': return posSilicaSi();
    case 'silica-o': return posSilicaO();
    case 'tetra-t': return posTetraT();
  }
  return [];
}

function findLattice(query){
  if(!query) return null;
  var q = query.trim().toLowerCase().replace(/ё/g,'е');

  if(LATTICE_DB[q]) return LATTICE_DB[q];

  for(var key in LATTICE_DB){
    var d = LATTICE_DB[key];
    var nm = d.name.toLowerCase().replace(/ё/g,'е');
    var m = d.name.match(/\(([^)]+)\)/);
    var frm = m ? m[1].toLowerCase().replace(/\s/g,'') : '';
    var qClean = q.replace(/\s/g,'');
    if(nm.indexOf(q) !== -1) return d;
    if(frm && frm === qClean) return d;
    if(frm && frm.indexOf(qClean) !== -1) return d;
  }
  return null;
}

/* ==================== 3D РЕНДЕР РЕШЁТКИ ==================== */
function buildLattice(containerId, substance){
  var data = findLattice(substance);
  if(!data) return {error:'Не нашёл решётку для «'+substance+'». Попробуй: NaCl, алмаз, графит, Cu, Fe, SiO2, сахар, лёд, мел, сода, марганцовка, KMnO4, TiO2, WC, фуллерен…'};
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
          var cylMat = new THREE.MeshStandardMaterial({ color: stickColor, roughness: 0.5, metalness: 0.2 });
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
    {id:'ch8-1-5', num:'5', title:'Атомно-молекулярное учение'},
    {id:'ch8-1-6', num:'6', title:'Знаки химических элементов'},
    {id:'ch8-1-7', num:'7', title:'Периодическая таблица'},
    {id:'ch8-1-8', num:'8', title:'Химические формулы'},
    {id:'ch8-1-9', num:'9', title:'Валентность'},
    {id:'ch8-1-10', num:'10', title:'Химические реакции'},
    {id:'ch8-1-11', num:'11', title:'Химические уравнения'},
    {id:'ch8-1-12', num:'12', title:'Типы химических реакций'}]},
  {
