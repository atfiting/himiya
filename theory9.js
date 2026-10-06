// theory9.js — теория 9 класса (Габриелян, 2025)

var PAGES_9 = {

  /* ============ ГЛАВА 1 ============ */

  'ch9-1-1': {
    title: '§ 1. Классификация неорганических соединений',
    sub: 'Глава 1. Обобщение знаний. Химические реакции',
    html: `
      <div class="paragraph">Все неорганические вещества делятся на простые и сложные. Сложные — на 4 основных класса.</div>

      <div class="card">
        <div class="card-title"><span class="num">📋</span> Основные классы</div>
        <div class="table-wrap"><table>
          <tr><th>Класс</th><th>Определение</th><th>Примеры</th></tr>
          <tr><td>Оксиды</td><td>Два элемента, один — O(−2)</td><td>Na₂O, CO₂, Al₂O₃</td></tr>
          <tr><td>Основания</td><td>Металл + OH-группы</td><td>NaOH, Cu(OH)₂</td></tr>
          <tr><td>Кислоты</td><td>H + кислотный остаток</td><td>HCl, H₂SO₄</td></tr>
          <tr><td>Соли</td><td>Металл + кислотный остаток</td><td>NaCl, K₂SO₄</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Оксиды</div>
        <ul class="theory-list">
          <li><b>Основные</b> — Na₂O, CaO, FeO (металлы I–II вал.).</li>
          <li><b>Кислотные</b> — CO₂, SO₃, P₂O₅ (неметаллы).</li>
          <li><b>Амфотерные</b> — Al₂O₃, ZnO, BeO.</li>
          <li><b>Несолеобразующие</b> — CO, N₂O, NO.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Основания</div>
        <ul class="theory-list">
          <li><b>Растворимые (щёлочи)</b> — NaOH, KOH, Ca(OH)₂.</li>
          <li><b>Нерастворимые</b> — Cu(OH)₂, Fe(OH)₃.</li>
          <li><b>Амфотерные</b> — Al(OH)₃, Zn(OH)₂.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Кислоты</div>
        <ul class="theory-list">
          <li>По числу H: одно-, двух-, трёхосновные.</li>
          <li>По наличию O: кислородсодержащие и бескислородные.</li>
          <li>По силе: сильные (HCl, H₂SO₄, HNO₃) и слабые (H₂CO₃, H₂S).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Соли</div>
        <ul class="theory-list">
          <li><b>Средние</b> — NaCl, K₂SO₄.</li>
          <li><b>Кислые</b> — NaHCO₃, KHSO₄.</li>
          <li><b>Основные</b> — Cu(OH)Cl.</li>
          <li><b>Двойные</b> — KAl(SO₄)₂.</li>
        </ul>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-1-2': {
    title: '§ 2. Классификация химических реакций',
    sub: 'Глава 1. Обобщение знаний. Химические реакции',
    html: `
      <div class="card">
        <div class="card-title"><span class="num">1️⃣</span> По числу и составу веществ</div>
        <ul class="theory-list">
          <li><b>Соединения</b>: A + B → AB. Пример: 2H₂ + O₂ → 2H₂O.</li>
          <li><b>Разложения</b>: AB → A + B. Пример: CaCO₃ → CaO + CO₂.</li>
          <li><b>Замещения</b>: A + BC → AC + B. Пример: Fe + CuSO₄ → FeSO₄ + Cu.</li>
          <li><b>Обмена</b>: AB + CD → AD + CB. Пример: NaOH + HCl → NaCl + H₂O.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">2️⃣</span> По тепловому эффекту</div>
        <ul class="theory-list">
          <li><b>Экзотермические</b> — с выделением теплоты (+Q). Горение.</li>
          <li><b>Эндотермические</b> — с поглощением теплоты (−Q). Разложение.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">3️⃣</span> По обратимости</div>
        <ul class="theory-list">
          <li><b>Обратимые</b> — идут в обоих направлениях (⇄).</li>
          <li><b>Необратимые</b> — идут до конца (→).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">4️⃣</span> По изменению степеней окисления</div>
        <ul class="theory-list">
          <li><b>ОВР</b> — с изменением степеней окисления.</li>
          <li><b>Не ОВР</b> — без изменения.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">5️⃣</span> По фазовому составу</div>
        <ul class="theory-list">
          <li><b>Гомогенные</b> — все вещества в одной фазе.</li>
          <li><b>Гетерогенные</b> — вещества в разных фазах.</li>
        </ul>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-1-3': {
    title: '§ 3. Скорость реакций. Катализ',
    sub: 'Глава 1. Обобщение знаний. Химические реакции',
    html: `
      <div class="definition"><span class="term">Скорость химической реакции</span> — изменение концентрации реагирующего вещества за единицу времени.</div>

      <div class="card">
        <div class="card-title"><span class="num">📐</span> Формула</div>
        <div class="formula-box">v = Δc / Δt (моль/(л·с))</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚡</span> Факторы, влияющие на скорость</div>
        <ul class="theory-list">
          <li><b>Природа веществ</b> — активные реагируют быстрее.</li>
          <li><b>Концентрация</b> — чем выше, тем быстрее (закон действующих масс).</li>
          <li><b>Температура</b> — при повышении на 10 °C скорость растёт в 2–4 раза (правило Вант-Гоффа).</li>
          <li><b>Площадь поверхности</b> — чем мельче, тем быстрее.</li>
          <li><b>Катализатор</b> — ускоряет реакцию.</li>
          <li><b>Давление</b> — для газов при повышении ускоряет.</li>
        </ul>
      </div>

      <div class="definition"><span class="term">Катализатор</span> — вещество, ускоряющее реакцию, но не расходующееся в ней.</div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Катализ</div>
        <ul class="theory-list">
          <li><b>Гомогенный</b> — катализатор в одной фазе с реагентами.</li>
          <li><b>Гетерогенный</b> — в разных фазах.</li>
          <li><b>Ингибиторы</b> — замедляют реакцию.</li>
          <li><b>Ферменты</b> — биологические катализаторы.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚖️</span> Обратимые реакции. Химическое равновесие</div>
        <p class="paragraph">Состояние, при котором скорости прямой и обратной реакций равны. Можно сместить, изменяя концентрацию, температуру, давление (принцип Ле Шателье).</p>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  /* ============ ГЛАВА 2 ============ */

  'ch9-2-1': {
    title: '§ 1. Электролитическая диссоциация',
    sub: 'Глава 2. Химические реакции в растворах',
    html: `
      <div class="definition"><span class="term">Электролитическая диссоциация (ЭД)</span> — распад электролита на ионы при растворении в воде или расплавлении.</div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Электролиты и неэлектролиты</div>
        <ul class="theory-list">
          <li><b>Электролиты</b> — проводят ток в растворе/расплаве: соли, кислоты, основания.</li>
          <li><b>Неэлектролиты</b> — не проводят: сахар, спирт, глюкоза, большинство органических веществ.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚛️</span> Почему распадаются</div>
        <p class="paragraph">Молекулы воды — диполи. Они окружают ионы кристалла и «вытягивают» их из решётки. В растворе образуются гидратированные ионы.</p>
        <div class="formula-box">NaCl → Na⁺ + Cl⁻</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📐</span> Степень диссоциации</div>
        <div class="formula-box">α = (число распавшихся молекул) / (общее число) · 100%</div>
        <ul class="theory-list">
          <li><b>Сильные электролиты</b>: α > 30% — HCl, H₂SO₄, HNO₃, NaOH, все соли.</li>
          <li><b>Средние</b>: 3% < α < 30% — H₃PO₄, HF.</li>
          <li><b>Слабые</b>: α < 3% — H₂CO₃, H₂S, NH₃·H₂O, органические кислоты.</li>
        </ul>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-2-2': {
    title: '§ 2. Положения теории электролитической диссоциации',
    sub: 'Глава 2. Химические реакции в растворах',
    html: `
      <div class="card">
        <div class="card-title"><span class="num">📚</span> Основные положения (С. Аррениус)</div>
        <ol class="theory-list num">
          <li>Электролиты при растворении в воде распадаются на ионы.</li>
          <li>Ионы — это заряженные частицы, отличающиеся от атомов.</li>
          <li>Положительные ионы — <b>катионы</b> (H⁺, Na⁺, Ca²⁺, Al³⁺).</li>
          <li>Отрицательные ионы — <b>анионы</b> (Cl⁻, OH⁻, SO₄²⁻, PO₄³⁻).</li>
          <li>При растворении в воде ионы гидратируются.</li>
          <li>Растворы электролитов проводят электрический ток.</li>
          <li>Химические свойства растворов — это свойства ионов.</li>
        </ol>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚡</span> Схемы диссоциации</div>
        <p class="paragraph"><b>Кислоты</b> → H⁺ + кислотный остаток:</p>
        <div class="formula-box">HCl → H⁺ + Cl⁻</div>
        <div class="formula-box">H₂SO₄ → 2H⁺ + SO₄²⁻</div>
        <p class="paragraph"><b>Основания</b> → катион металла + OH⁻:</p>
        <div class="formula-box">NaOH → Na⁺ + OH⁻</div>
        <p class="paragraph"><b>Соли</b> → катион металла + анион кислотного остатка:</p>
        <div class="formula-box">Na₂SO₄ → 2Na⁺ + SO₄²⁻</div>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-2-3': {
    title: '§ 3. Свойства кислот как электролитов',
    sub: 'Глава 2. Химические реакции в растворах',
    html: `
      <p class="paragraph">Все кислоты в водном растворе диссоциируют, давая катионы водорода H⁺. Общие свойства кислот обусловлены именно H⁺.</p>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства</div>
        <ul class="theory-list">
          <li><b>Изменяют цвет индикаторов:</b> лакмус — красный, метилоранж — розовый.</li>
          <li><b>+ металл</b> (до H): Zn + 2HCl → ZnCl₂ + H₂↑</li>
          <li><b>+ основный оксид:</b> CuO + H₂SO₄ → CuSO₄ + H₂O</li>
          <li><b>+ основание (нейтрализация):</b> NaOH + HCl → NaCl + H₂O</li>
          <li><b>+ соль</b> (если газ/осадок): CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> В ионном виде</div>
        <div class="formula-box">H⁺ + OH⁻ → H₂O <span class="eq">(нейтрализация)</span></div>
        <div class="formula-box">2H⁺ + CO₃²⁻ → H₂O + CO₂↑</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📋</span> Важнейшие кислоты</div>
        <ul class="theory-list">
          <li>HCl — соляная, сильная, летучая.</li>
          <li>H₂SO₄ — серная, сильная, тяжёлая.</li>
          <li>HNO₃ — азотная, сильная, окислитель.</li>
          <li>H₃PO₄ — фосфорная, средней силы.</li>
          <li>H₂CO₃ — угольная, слабая, разлагается.</li>
        </ul>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-2-4': {
    title: '§ 4. Свойства оснований как электролитов',
    sub: 'Глава 2. Химические реакции в растворах',
    html: `
      <p class="paragraph">Основания в растворе диссоциируют, давая гидроксид-ионы OH⁻. Общие свойства обусловлены OH⁻.</p>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства щелочей</div>
        <ul class="theory-list">
          <li><b>Индикаторы:</b> лакмус — синий, фенолфталеин — малиновый, метилоранж — жёлтый.</li>
          <li><b>+ кислота:</b> NaOH + HCl → NaCl + H₂O</li>
          <li><b>+ кислотный оксид:</b> 2NaOH + CO₂ → Na₂CO₃ + H₂O</li>
          <li><b>+ соль:</b> 2NaOH + CuSO₄ → Cu(OH)₂↓ + Na₂SO₄</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> В ионном виде</div>
        <div class="formula-box">Cu²⁺ + 2OH⁻ → Cu(OH)₂↓</div>
        <div class="formula-box">Fe³⁺ + 3OH⁻ → Fe(OH)₃↓</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Нерастворимые основания</div>
        <p class="paragraph">Не диссоциируют, но реагируют с кислотами:</p>
        <div class="formula-box">Cu(OH)₂ + 2HCl → CuCl₂ + 2H₂O</div>
        <p class="paragraph">При нагревании разлагаются:</p>
        <div class="formula-box">Cu(OH)₂ → CuO + H₂O</div>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-2-5': {
    title: '§ 5. Свойства солей как электролитов',
    sub: 'Глава 2. Химические реакции в растворах',
    html: `
      <p class="paragraph">Соли диссоциируют на катионы металлов (или NH₄⁺) и анионы кислотных остатков.</p>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства</div>
        <ul class="theory-list">
          <li><b>+ металл</b> (более активный): Fe + CuSO₄ → FeSO₄ + Cu</li>
          <li><b>+ кислота</b> (если газ/осадок): CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑</li>
          <li><b>+ щёлочь:</b> CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄</li>
          <li><b>+ другая соль:</b> AgNO₃ + NaCl → AgCl↓ + NaNO₃</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Качественные реакции</div>
        <div class="table-wrap"><table>
          <tr><th>Ион</th><th>Реагент</th><th>Признак</th></tr>
          <tr><td>Cl⁻</td><td>AgNO₃</td><td>Белый осадок AgCl</td></tr>
          <tr><td>Br⁻</td><td>AgNO₃</td><td>Кремовый осадок AgBr</td></tr>
          <tr><td>I⁻</td><td>AgNO₃</td><td>Жёлтый осадок AgI</td></tr>
          <tr><td>SO₄²⁻</td><td>BaCl₂</td><td>Белый осадок BaSO₄</td></tr>
          <tr><td>CO₃²⁻</td><td>H⁺</td><td>Газ CO₂ (мутит известковую воду)</td></tr>
          <tr><td>PO₄³⁻</td><td>AgNO₃</td><td>Жёлтый осадок Ag₃PO₄</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌊</span> Гидролиз солей</div>
        <p class="paragraph">Соли, образованные слабым основанием или слабой кислотой, реагируют с водой — <b>гидролиз</b>.</p>
        <ul class="theory-list">
          <li><b>Слабое основание + сильная кислота:</b> кислая среда. NH₄Cl + H₂O ⇄ NH₄OH + HCl.</li>
          <li><b>Сильное основание + слабая кислота:</b> щелочная среда. Na₂CO₃ + H₂O ⇄ NaOH + NaHCO₃.</li>
          <li><b>Слабое + слабое:</b> полный гидролиз.</li>
          <li><b>Сильное + сильное:</b> не гидролизуется (NaCl).</li>
        </ul>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-2-6': {
    title: '§ 6. Гидролиз солей',
    sub: 'Глава 2. Химические реакции в растворах',
    html: `
      <div class="definition"><span class="term">Гидролиз солей</span> — взаимодействие ионов соли с водой, приводящее к изменению pH среды.</div>

      <div class="card">
        <div class="card-title"><span class="num">1️⃣</span> Соль сильного основания и сильной кислоты</div>
        <p class="paragraph">Не гидролизуется. Среда нейтральная.</p>
        <div class="formula-box">NaCl → Na⁺ + Cl⁻ (pH = 7)</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">2️⃣</span> Соль слабого основания и сильной кислоты</div>
        <p class="paragraph">Гидролизуется по катиону. Среда кислая.</p>
        <div class="formula-box">NH₄Cl + H₂O ⇄ NH₄OH + HCl</div>
        <div class="formula-box">NH₄⁺ + H₂O ⇄ NH₄OH + H⁺</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">3️⃣</span> Соль сильного основания и слабой кислоты</div>
        <p class="paragraph">Гидролизуется по аниону. Среда щелочная.</p>
        <div class="formula-box">Na₂CO₃ + H₂O ⇄ NaHCO₃ + NaOH</div>
        <div class="formula-box">CO₃²⁻ + H₂O ⇄ HCO₃⁻ + OH⁻</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">4️⃣</span> Соль слабого основания и слабой кислоты</div>
        <p class="paragraph">Полный гидролиз. Среда зависит от соотношения силы кислоты и основания.</p>
        <div class="formula-box">CH₃COONH₄ + H₂O ⇄ CH₃COOH + NH₄OH</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌡️</span> Условия усиления гидролиза</div>
        <ul class="theory-list">
          <li>Разбавление раствора.</li>
          <li>Нагревание.</li>
          <li>Связывание продуктов гидролиза.</li>
        </ul>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  /* ============ ГЛАВА 3 ============ */

  'ch9-3-1': {
    title: '§ 1. Общая характеристика неметаллов',
    sub: 'Глава 3. Неметаллы и их соединения',
    html: `
      <div class="paragraph">Неметаллы расположены в правой верхней части таблицы. Они принимают электроны, окислители.</div>

      <div class="card">
        <div class="card-title"><span class="num">📋</span> Положение в таблице</div>
        <ul class="theory-list">
          <li>Внешние уровни содержат 4–7 электронов (у B 3, у H 1).</li>
          <li>Все неметаллы — p-элементы, кроме H и He (s).</li>
          <li>Проявляют окислительные свойства, реже — восстановительные.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚛️</span> Строение молекул</div>
        <ul class="theory-list">
          <li><b>Двухатомные</b>: H₂, O₂, N₂, F₂, Cl₂, Br₂, I₂.</li>
          <li><b>Одноатомные</b>: благородные газы He, Ne, Ar.</li>
          <li><b>Многоатомные</b>: P₄, S₈.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">💎</span> Физические свойства</div>
        <ul class="theory-list">
          <li>Могут быть газами (O₂, N₂, Cl₂), жидкостями (Br₂), твёрдыми (S, P, I₂).</li>
          <li>Плохо проводят ток (кроме графита).</li>
          <li>Хрупкие.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства</div>
        <ul class="theory-list">
          <li><b>+ металлы:</b> 2Na + Cl₂ → 2NaCl</li>
          <li><b>+ водород:</b> H₂ + Cl₂ → 2HCl</li>
          <li><b>+ кислород:</b> S + O₂ → SO₂</li>
          <li><b>+ вода (некоторые):</b> Cl₂ + H₂O ⇄ HCl + HClO</li>
        </ul>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-3-2': {
    title: '§ 2. Галогены (VIIA)',
    sub: 'Глава 3. Неметаллы и их соединения',
    html: `
      <div class="paragraph">Галогены — элементы VII-A группы: F, Cl, Br, I, At. На внешнем уровне 7 электронов, до завершения не хватает одного — легко принимают его.</div>

      <div class="card">
        <div class="card-title"><span class="num">📋</span> Свойства</div>
        <div class="table-wrap"><table>
          <tr><th>Элемент</th><th>Простое вещество</th><th>Цвет</th><th>Агрегатное состояние</th></tr>
          <tr><td>F</td><td>F₂</td><td>Бледно-жёлтый</td><td>Газ</td></tr>
          <tr><td>Cl</td><td>Cl₂</td><td>Жёлто-зелёный</td><td>Газ</td></tr>
          <tr><td>Br</td><td>Br₂</td><td>Бурый</td><td>Жидкость</td></tr>
          <tr><td>I</td><td>I₂</td><td>Тёмно-фиолетовый</td><td>Твёрдый</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚡</span> Окислительная активность</div>
        <div class="formula-box">F₂ > Cl₂ > Br₂ > I₂</div>
        <p class="paragraph">Каждый галоген вытесняет менее активный из его солей:</p>
        <div class="formula-box">Cl₂ + 2NaBr → 2NaCl + Br₂</div>
        <div class="formula-box">Br₂ + 2KI → 2KBr + I₂</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства</div>
        <ul class="theory-list">
          <li><b>+ металлы:</b> 2Fe + 3Cl₂ → 2FeCl₃</li>
          <li><b>+ водород:</b> H₂ + Cl₂ → 2HCl (на свету — со взрывом)</li>
          <li><b>+ вода:</b> Cl₂ + H₂O ⇄ HCl + HClO</li>
          <li><b>+ щёлочи:</b> Cl₂ + 2NaOH → NaCl + NaClO + H₂O</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Применение</div>
        <ul class="theory-list">
          <li>Cl₂ — обеззараживание воды, отбеливание.</li>
          <li>I₂ — медицина (спиртовой раствор).</li>
          <li>F₂ — производство фторопластов.</li>
        </ul>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-3-3': {
    title: '§ 3. Соединения галогенов',
    sub: 'Глава 3. Неметаллы и их соединения',
    html: `
      <div class="card">
        <div class="card-title"><span class="num">1️⃣</span> Галогеноводороды</div>
        <p class="paragraph">HHal — бесцветные газы с резким запахом, хорошо растворимы в воде. Растворы — кислоты.</p>
        <div class="formula-box">HCl (соляная), HBr, HI, HF (плавиковая)</div>
        <p class="paragraph">Сила кислот растёт: HF < HCl < HBr < HI (для HF — слабая из-за прочной связи).</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">2️⃣</span> Соляная кислота HCl</div>
        <ul class="theory-list">
          <li>Сильная кислота.</li>
          <li>Реагирует с металлами, оксидами, основаниями, солями.</li>
          <li>В промышленности получают синтезом: H₂ + Cl₂ → 2HCl.</li>
          <li>Применяется для травления металлов, в медицине (желудочный сок).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">3️⃣</span> Соли галогеноводородных кислот</div>
        <ul class="theory-list">
          <li><b>Хлориды</b>: NaCl, KCl, CaCl₂.</li>
          <li><b>Бромиды</b>: NaBr, KBr.</li>
          <li><b>Иодиды</b>: KI, NaI.</li>
          <li><b>Фториды</b>: NaF, CaF₂.</li>
        </ul>
        <p class="paragraph">Качественная реакция на галогенид-ионы — с AgNO₃ (образуются осадки разного цвета).</p>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-3-4': {
    title: '§ 4. Свойства соляной кислоты',
    sub: 'Глава 3. Неметаллы и их соединения',
    html: `
      <div class="definition"><span class="term">Соляная кислота</span> — раствор HCl в воде. Сильная одноосновная кислота.</div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства</div>
        <ul class="theory-list">
          <li><b>+ активные металлы:</b> Zn + 2HCl → ZnCl₂ + H₂↑</li>
          <li><b>+ оксиды металлов:</b> CuO + 2HCl → CuCl₂ + H₂O</li>
          <li><b>+ основания:</b> NaOH + HCl → NaCl + H₂O</li>
          <li><b>+ соли:</b> CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑</li>
          <li><b>+ AgNO₃:</b> AgNO₃ + HCl → AgCl↓ + HNO₃</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Качественная реакция на Cl⁻</div>
        <div class="formula-box">Ag⁺ + Cl⁻ → AgCl↓ (белый творожистый осадок)</div>
        <p class="paragraph">Осадок нерастворим в азотной кислоте.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Применение</div>
        <ul class="theory-list">
          <li>Травление металлов перед пайкой.</li>
          <li>Получение хлоридов.</li>
          <li>В медицине — как составная часть желудочного сока.</li>
        </ul>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-3-5': {
    title: '§ 5. Халькогены (VIA)',
    sub: 'Глава 3. Неметаллы и их соединения',
    html: `
      <div class="paragraph">Халькогены — элементы VI-A группы: O, S, Se, Te, Po. На внешнем уровне 6 электронов, до завершения не хватает двух — принимают 2e⁻.</div>

      <div class="card">
        <div class="card-title"><span class="num">📋</span> Свойства элементов</div>
        <ul class="theory-list">
          <li>O₂ — газ, окислитель, необходим для дыхания.</li>
          <li>S — жёлтое твёрдое вещество, хрупкое, не проводит ток.</li>
          <li>Se — тёмно-серый, полупроводник.</li>
          <li>Te — серебристо-серый металлоид.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства серы</div>
        <ul class="theory-list">
          <li><b>+ металлы:</b> Fe + S → FeS</li>
          <li><b>+ кислород:</b> S + O₂ → SO₂</li>
          <li><b>+ водород:</b> H₂ + S → H₂S</li>
          <li><b>+ ртуть (при комнатной температуре):</b> Hg + S → HgS</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Применение серы</div>
        <ul class="theory-list">
          <li>Серная кислота (главный продукт).</li>
          <li>Вулканизация каучука.</li>
          <li>Сера в медицине (мази).</li>
          <li>Сельское хозяйство (фунгициды).</li>
        </ul>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-3-6': {
    title: '§ 6. Сера, сероводород, сульфиды',
    sub: 'Глава 3. Неметаллы и их соединения',
    html: `
      <div class="card">
        <div class="card-title"><span class="num">🟡</span> Сера</div>
        <p class="paragraph">Твёрдое жёлтое вещество, в воде нерастворима. В природе — самородная, сульфиды, сульфаты.</p>
        <ul class="theory-list">
          <li>Степени окисления: −2, 0, +4, +6.</li>
          <li>Окислитель и восстановитель.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">💨</span> Сероводород H₂S</div>
        <p class="paragraph">Бесцветный газ с запахом тухлых яиц, ядовит. Хорошо растворим в воде. Раствор — слабая кислота.</p>
        <div class="formula-box">H₂S → 2H⁺ + S²⁻</div>
        <p class="paragraph">Химические свойства:</p>
        <ul class="theory-list">
          <li><b>+ щёлочи:</b> H₂S + 2NaOH → Na₂S + 2H₂O</li>
          <li><b>+ соли:</b> H₂S + CuSO₄ → CuS↓ + H₂SO₄</li>
          <li><b>+ O₂ (недостаток):</b> 2H₂S + O₂ → 2S + 2H₂O</li>
          <li><b>+ O₂ (избыток):</b> 2H₂S + 3O₂ → 2SO₂ + 2H₂O</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Сульфиды</div>
        <p class="paragraph">Соли сероводородной кислоты. Большинство нерастворимы.</p>
        <div class="formula-box">FeS + 2HCl → FeCl₂ + H₂S↑</div>
        <p class="paragraph">Качественная реакция на сульфид-ион S²⁻ — осадки чёрного цвета с ионами Pb²⁺, Cu²⁺, Hg²⁺.</p>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-3-7': {
    title: '§ 7. Кислородные соединения серы',
    sub: 'Глава 3. Неметаллы и их соединения',
    html: `
      <div class="card">
        <div class="card-title"><span class="num">1️⃣</span> Оксид серы(IV) SO₂</div>
        <p class="paragraph">Бесцветный газ с резким запахом, ядовит. Кислотный оксид.</p>
        <ul class="theory-list">
          <li><b>+ вода:</b> SO₂ + H₂O ⇄ H₂SO₃</li>
          <li><b>+ щёлочь:</b> SO₂ + 2NaOH → Na₂SO₃ + H₂O</li>
          <li><b>Окисление:</b> 2SO₂ + O₂ ⇄ 2SO₃ (кат. V₂O₅)</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">2️⃣</span> Сернистая кислота H₂SO₃</div>
        <p class="paragraph">Слабая, неустойчивая, разлагается на SO₂ и H₂O. Соли — сульфиты.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">3️⃣</span> Оксид серы(VI) SO₃</div>
        <p class="paragraph">Бесцветная летучая жидкость, кислотный оксид.</p>
        <div class="formula-box">SO₃ + H₂O → H₂SO₄</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">4️⃣</span> Серная кислота H₂SO₄</div>
        <p class="paragraph">Тяжёлая маслянистая жидкость, t пл. 10 °C. Сильная кислота, сильный окислитель (особенно концентрированная).</p>
        <ul class="theory-list">
          <li><b>Разбавленная:</b> реагирует с металлами до H с выделением H₂.</li>
          <li><b>Концентрированная:</b> реагирует почти со всеми металлами (кроме Au, Pt), но не выделяет H₂. Продукты: SO₂, S, H₂S.</li>
        </ul>
        <div class="formula-box">Cu + 2H₂SO₄(конц) → CuSO₄ + SO₂↑ + 2H₂O</div>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-3-8': {
    title: '§ 8. Свойства серной кислоты',
    sub: 'Глава 3. Неметаллы и их соединения',
    html: `
      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Свойства разбавленной H₂SO₄</div>
        <ul class="theory-list">
          <li>Изменяет цвет индикаторов (лакмус — красный).</li>
          <li><b>+ металлы (до H):</b> Zn + H₂SO₄ → ZnSO₄ + H₂↑</li>
          <li><b>+ оксиды:</b> CuO + H₂SO₄ → CuSO₄ + H₂O</li>
          <li><b>+ основания:</b> 2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O</li>
          <li><b>+ соли:</b> BaCl₂ + H₂SO₄ → BaSO₄↓ + 2HCl</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔥</span> Свойства концентрированной H₂SO₄</div>
        <ul class="theory-list">
          <li><b>Сильный окислитель.</b></li>
          <li>Реагирует с Cu, Ag, Hg с выделением SO₂.</li>
          <li>С Fe, Al, Cr — пассивация (не реагирует на холоде).</li>
          <li>Обугливает органические вещества (отбирает воду).</li>
          <li>При смешивании с водой выделяется много тепла — кислоту льют в воду, а не наоборот!</li>
        </ul>
        <div class="formula-box">C₁₂H₂₂O₁₁ → 12C + 11H₂O (обугливание сахара)</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Качественная реакция на SO₄²⁻</div>
        <div class="formula-box">Ba²⁺ + SO₄²⁻ → BaSO₄↓ (белый осадок)</div>
        <p class="paragraph">Осадок нерастворим в кислотах.</p>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-3-9': {
    title: '§ 9. Азот (VA)',
    sub: 'Глава 3. Неметаллы и их соединения',
    html: `
      <div class="paragraph">Азот N — элемент V-A группы. На внешнем уровне 5 электронов. В молекуле N₂ — прочная тройная связь, поэтому азот малоактивен.</div>

      <div class="card">
        <div class="card-title"><span class="num">📋</span> Свойства</div>
        <ul class="theory-list">
          <li>Газ без цвета, вкуса и запаха.</li>
          <li>Немного легче воздуха.</li>
          <li>Плохо растворим в воде.</li>
          <li>78% воздуха по объёму.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства</div>
        <ul class="theory-list">
          <li><b>+ H₂ (кат., высокие t и p):</b> N₂ + 3H₂ ⇄ 2NH₃</li>
          <li><b>+ O₂ (в разряде):</b> N₂ + O₂ → 2NO</li>
          <li><b>+ металлы (при нагревании):</b> 3Mg + N₂ → Mg₃N₂</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔢</span> Степени окисления</div>
        <p class="paragraph">От −3 (в NH₃) до +5 (в HNO₃): −3, −2, −1, 0, +1, +2, +3, +4, +5.</p>
        <div class="table-wrap"><table>
          <tr><th>Формула</th><th>С. о. N</th></tr>
          <tr><td>NH₃</td><td>−3</td></tr>
          <tr><td>N₂O</td><td>+1</td></tr>
          <tr><td>NO</td><td>+2</td></tr>
          <tr><td>N₂O₃ / HNO₂</td><td>+3</td></tr>
          <tr><td>NO₂</td><td>+4</td></tr>
          <tr><td>N₂O₅ / HNO₃</td><td>+5</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Применение</div>
        <ul class="theory-list">
          <li>Получение аммиака (главное).</li>
          <li>Инертная среда в химии.</li>
          <li>Хранение продуктов (жидкий азот).</li>
        </ul>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-3-10': {
    title: '§ 10. Аммиак. Соли аммония',
    sub: 'Глава 3. Неметаллы и их соединения',
    html: `
      <div class="card">
        <div class="card-title"><span class="num">💨</span> Аммиак NH₃</div>
        <p class="paragraph">Бесцветный газ с резким запахом. Хорошо растворим в воде. Раствор — слабое основание.</p>
        <ul class="theory-list">
          <li>Молекула имеет форму пирамиды.</li>
          <li>Азот — донор электронной пары, N−H связи ковалентные полярные.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства</div>
        <ul class="theory-list">
          <li><b>+ вода:</b> NH₃ + H₂O ⇄ NH₄OH (гидроксид аммония)</li>
          <li><b>+ кислоты:</b> NH₃ + HCl → NH₄Cl (дым без цвета)</li>
          <li><b>+ O₂ (кат.):</b> 4NH₃ + 5O₂ → 4NO + 6H₂O</li>
          <li><b>+ O₂ (горение):</b> 4NH₃ + 3O₂ → 2N₂ + 6H₂O</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Соли аммония</div>
        <p class="paragraph">Содержат катион NH₄⁺: NH₄Cl, (NH₄)₂SO₄, NH₄NO₃.</p>
        <ul class="theory-list">
          <li>Растворимы в воде.</li>
          <li><b>+ щёлочь (нагревание):</b> NH₄Cl + NaOH → NaCl + NH₃↑ + H₂O</li>
          <li>При нагревании разлагаются: NH₄Cl → NH₃ + HCl</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Применение</div>
        <ul class="theory-list">
          <li>NH₄NO₃, (NH₄)₂SO₄ — азотные удобрения.</li>
          <li>NH₄Cl — электролиты, паяние.</li>
          <li>Аммиак — холодильные установки.</li>
        </ul>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-3-11': {
    title: '§ 11. Получение аммиака',
    sub: 'Глава 3. Неметаллы и их соединения',
    html: `
      <div class="card">
        <div class="card-title"><span class="num">🔬</span> В лаборатории</div>
        <p class="paragraph">Нагревание смеси соли аммония со щёлочью:</p>
        <div class="formula-box">2NH₄Cl + Ca(OH)₂ → CaCl₂ + 2NH₃↑ + 2H₂O</div>
        <p class="paragraph">Аммиак собирают в перевёрнутую пробирку (он легче воздуха).</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🏭</span> В промышленности</div>
        <p class="paragraph">Синтез из азота и водорода (процесс Габера):</p>
        <div class="formula-box">N₂ + 3H₂ ⇄ 2NH₃ + Q</div>
        <ul class="theory-list">
          <li>Катализатор — пористое железо с добавками.</li>
          <li>Температура ~500 °C.</li>
          <li>Давление 200–350 атм.</li>
          <li>Реакция экзотермическая, обратимая.</li>
        </ul>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-3-12': {
    title: '§ 12. Кислородные соединения азота',
    sub: 'Глава 3. Неметаллы и их соединения',
    html: `
      <div class="card">
        <div class="card-title"><span class="num">1️⃣</span> Оксиды азота</div>
        <div class="table-wrap"><table>
          <tr><th>Формула</th><th>Название</th><th>Характер</th></tr>
          <tr><td>N₂O</td><td>Оксид азота(I)</td><td>Несолеобразующий</td></tr>
          <tr><td>NO</td><td>Оксид азота(II)</td><td>Несолеобразующий</td></tr>
          <tr><td>N₂O₃</td><td>Оксид азота(III)</td><td>Кислотный (HNO₂)</td></tr>
          <tr><td>NO₂</td><td>Оксид азота(IV)</td><td>Смешанный</td></tr>
          <tr><td>N₂O₅</td><td>Оксид азота(V)</td><td>Кислотный (HNO₃)</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">2️⃣</span> Азотная кислота HNO₃</div>
        <p class="paragraph">Бесцветная жидкость с резким запахом, «дымит» на воздухе. Сильная кислота, сильный окислитель.</p>
        <ul class="theory-list">
          <li>С металлами реагирует всегда (кроме Au, Pt), но H₂ не выделяется.</li>
          <li>С концентрированной HNO₃ выделяется NO₂ (бурый газ).</li>
          <li>С разбавленной HNO₃ — NO (бесцветный газ).</li>
          <li>С Fe, Al, Cr — пассивация на холоде.</li>
        </ul>
        <div class="formula-box">Cu + 4HNO₃(конц) → Cu(NO₃)₂ + 2NO₂↑ + 2H₂O</div>
        <div class="formula-box">3Cu + 8HNO₃(разб) → 3Cu(NO₃)₂ + 2NO↑ + 4H₂O</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">3️⃣</span> Соли азотной кислоты</div>
        <p class="paragraph">Нитраты. Все растворимы в воде. При нагревании разлагаются:</p>
        <div class="formula-box">2KNO₃ → 2KNO₂ + O₂↑</div>
        <div class="formula-box">2Cu(NO₃)₂ → 2CuO + 4NO₂ + O₂</div>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-3-13': {
    title: '§ 13. Фосфор и его соединения',
    sub: 'Глава 3. Неметаллы и их соединения',
    html: `
      <div class="card">
        <div class="card-title"><span class="num">🟠</span> Фосфор P</div>
        <p class="paragraph">Элемент V-A группы. Имеет несколько аллотропных модификаций:</p>
        <ul class="theory-list">
          <li><b>Белый фосфор</b> — мягкий, восковидный, ядовитый, светится в темноте.</li>
          <li><b>Красный фосфор</b> — порошок, неядовитый, используется в спичках.</li>
          <li><b>Чёрный фосфор</b> — похож на графит, полупроводник.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства</div>
        <ul class="theory-list">
          <li><b>+ O₂:</b> 4P + 5O₂ → 2P₂O₅</li>
          <li><b>+ Cl₂:</b> 2P + 3Cl₂ → 2PCl₃</li>
          <li><b>+ металлы:</b> 3Ca + 2P → Ca₃P₂</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Соединения фосфора</div>
        <ul class="theory-list">
          <li><b>P₂O₅</b> — кислотный оксид. С водой даёт H₃PO₄.</li>
          <li><b>H₃PO₄</b> — фосфорная кислота, средней силы, трёхосновная.</li>
          <li><b>Соли:</b> средние (фосфаты) и кислые (гидрофосфаты, дигидрофосфаты).</li>
        </ul>
        <div class="formula-box">P₂O₅ + 3H₂O → 2H₃PO₄</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Применение</div>
        <ul class="theory-list">
          <li>Удобрения: суперфосфат, преципитат.</li>
          <li>Спички.</li>
          <li>Производство фосфорной кислоты.</li>
        </ul>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-3-14': {
    title: '§ 14. Углерод (IVA)',
    sub: 'Глава 3. Неметаллы и их соединения',
    html: `
      <div class="card">
        <div class="card-title"><span class="num">💎</span> Аллотропные модификации</div>
        <ul class="theory-list">
          <li><b>Алмаз</b> — атомная решётка, самая твёрдая, не проводит ток.</li>
          <li><b>Графит</b> — слоистая решётка, мягкий, проводит ток, смазка.</li>
          <li><b>Карбин, фуллерены, графен</b> — искусственные формы.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства углерода</div>
        <ul class="theory-list">
          <li><b>+ O₂ (избыток):</b> C + O₂ → CO₂</li>
          <li><b>+ O₂ (недостаток):</b> 2C + O₂ → 2CO</li>
          <li><b>+ металлы:</b> Ca + 2C → CaC₂</li>
          <li><b>+ H₂:</b> C + 2H₂ → CH₄ (кат.)</li>
          <li><b>Восстановитель:</b> C + CuO → Cu + CO</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Применение</div>
        <ul class="theory-list">
          <li>Алмаз — ювелирное дело, резцы, буры.</li>
          <li>Графит — электроды, карандаши, смазка.</li>
          <li>Кокс — металлургия (восстановитель).</li>
          <li>Адсорбция — активированный уголь.</li>
        </ul>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-3-15': {
    title: '§ 15. Кислородные соединения углерода',
    sub: 'Глава 3. Неметаллы и их соединения',
    html: `
      <div class="card">
        <div class="card-title"><span class="num">1️⃣</span> Оксид углерода(II) CO</div>
        <p class="paragraph">Угарный газ, без цвета и запаха, очень ядовит. Несолеобразующий оксид.</p>
        <ul class="theory-list">
          <li>Восстановитель: CO + CuO → Cu + CO₂</li>
          <li>Горит: 2CO + O₂ → 2CO₂</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">2️⃣</span> Оксид углерода(IV) CO₂</div>
        <p class="paragraph">Углекислый газ, без цвета, тяжелее воздуха, малорастворим в воде.</p>
        <ul class="theory-list">
          <li><b>+ вода:</b> CO₂ + H₂O ⇄ H₂CO₃</li>
          <li><b>+ щёлочь:</b> CO₂ + 2NaOH → Na₂CO₃ + H₂O</li>
          <li><b>+ Ca(OH)₂:</b> CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O (помутнение известковой воды)</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">3️⃣</span> Угольная кислота H₂CO₃</div>
        <p class="paragraph">Слабая, неустойчивая, существует только в растворе. Соли — карбонаты и гидрокарбонаты.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Качественная реакция на CO₃²⁻</div>
        <div class="formula-box">CO₃²⁻ + 2H⁺ → H₂O + CO₂↑</div>
        <p class="paragraph">Газ CO₂ мутит известковую воду:</p>
        <div class="formula-box">CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O</div>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-3-16': {
    title: '§ 16. Получение CO₂. Карбонат-ион',
    sub: 'Глава 3. Неметаллы и их соединения',
    html: `
      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Получение CO₂</div>
        <p class="paragraph">В лаборатории — действием кислоты на мрамор:</p>
        <div class="formula-box">CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑</div>
        <p class="paragraph">В промышленности — обжиг известняка:</p>
        <div class="formula-box">CaCO₃ → CaO + CO₂↑ (при 1000 °C)</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Карбонаты</div>
        <ul class="theory-list">
          <li><b>Na₂CO₃</b> — сода, кальцинированная сода.</li>
          <li><b>NaHCO₃</b> — пищевая сода.</li>
          <li><b>K₂CO₃</b> — поташ.</li>
          <li><b>CaCO₃</b> — мел, мрамор, известняк.</li>
        </ul>
        <p class="paragraph">Все карбонаты (кроме Na⁺, K⁺, NH₄⁺) нерастворимы. Гидрокарбонаты растворимы все.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Превращения карбонатов</div>
        <div class="formula-box">Na₂CO₃ + CO₂ + H₂O → 2NaHCO₃</div>
        <div class="formula-box">2NaHCO₃ → Na₂CO₃ + H₂O + CO₂ (при нагревании)</div>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-3-17': {
    title: '§ 17. Углеводороды',
    sub: 'Глава 3. Неметаллы и их соединения',
    html: `
      <div class="definition"><span class="term">Углеводороды</span> — органические соединения, состоящие только из углерода и водорода.</div>

      <div class="card">
        <div class="card-title"><span class="num">1️⃣</span> Предельные (алканы)</div>
        <p class="paragraph">Общая формула CnH2n+2. Все связи одинарные. Насыщенные.</p>
        <ul class="theory-list">
          <li>CH₄ — метан.</li>
          <li>C₂H₆ — этан.</li>
          <li>C₃H₈ — пропан.</li>
          <li>C₄H₁₀ — бутан.</li>
        </ul>
        <div class="formula-box">CH₄ + 2O₂ → CO₂ + 2H₂O</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">2️⃣</span> Непредельные</div>
        <p class="paragraph"><b>Алкены</b> CnH2n — одна двойная связь:</p>
        <ul class="theory-list">
          <li>C₂H₄ — этилен.</li>
          <li>C₃H₆ — пропилен.</li>
        </ul>
        <p class="paragraph"><b>Алкины</b> CnH2n−2 — одна тройная связь:</p>
        <ul class="theory-list">
          <li>C₂H₂ — ацетилен.</li>
        </ul>
        <p class="paragraph"><b>Арены</b> — ароматические:</p>
        <ul class="theory-list">
          <li>C₆H₆ — бензол.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Реакции непредельных</div>
        <div class="formula-box">CH₂=CH₂ + Br₂ → CH₂Br−CH₂Br (обесцвечивание бромной воды)</div>
        <div class="formula-box">CH₂=CH₂ + H₂ → CH₃−CH₃</div>
        <div class="formula-box">CH₂=CH₂ + H₂O → CH₃−CH₂OH</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Применение</div>
        <ul class="theory-list">
          <li>Метан — топливо, сырьё для синтеза.</li>
          <li>Этилен — производство полиэтилена.</li>
          <li>Ацетилен — сварка металлов.</li>
          <li>Бензол — производство красителей, лекарств.</li>
        </ul>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-3-18': {
    title: '§ 18. Кислородсодержащие органические соединения',
    sub: 'Глава 3. Неметаллы и их соединения',
    html: `
      <div class="card">
        <div class="card-title"><span class="num">1️⃣</span> Спирты</div>
        <p class="paragraph">Содержат группу −OH. Общая формула R−OH.</p>
        <ul class="theory-list">
          <li>CH₃OH — метанол (ядовит).</li>
          <li>C₂H₅OH — этанол (спирт).</li>
          <li>C₃H₇OH — пропанол.</li>
          <li>Глицерин — трёхатомный спирт.</li>
        </ul>
        <div class="formula-box">2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂↑</div>
        <div class="formula-box">C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O (горение)</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">2️⃣</span> Альдегиды</div>
        <p class="paragraph">Содержат группу −CHO.</p>
        <ul class="theory-list">
          <li>HCHO — формальдегид (формалин).</li>
          <li>CH₃CHO — уксусный альдегид.</li>
        </ul>
        <p class="paragraph">Качественная реакция — «серебряное зеркало» с Ag₂O.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">3️⃣</span> Карбоновые кислоты</div>
        <p class="paragraph">Содержат группу −COOH.</p>
        <ul class="theory-list">
          <li>HCOOH — муравьиная.</li>
          <li>CH₃COOH — уксусная.</li>
          <li>C₁₇H₃₅COOH — стеариновая (в жирах).</li>
        </ul>
        <div class="formula-box">CH₃COOH + NaOH → CH₃COONa + H₂O</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">4️⃣</span> Жиры и углеводы</div>
        <ul class="theory-list">
          <li><b>Жиры</b> — сложные эфиры глицерина и высших карбоновых кислот.</li>
          <li><b>Углеводы</b>: глюкоза C₆H₁₂O₆, сахароза C₁₂H₂₂O₁₁, крахмал, целлюлоза.</li>
        </ul>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-3-19': {
    title: '§ 19. Кремний и его соединения',
    sub: 'Глава 3. Неметаллы и их соединения',
    html: `
      <div class="card">
        <div class="card-title"><span class="num">⚛️</span> Кремний Si</div>
        <p class="paragraph">Второй по распространённости элемент в земной коре (после O). Тёмно-серое кристаллическое вещество, полупроводник.</p>
        <ul class="theory-list">
          <li>Атомная кристаллическая решётка.</li>
          <li>Тугоплавкий, твёрдый, но хрупкий.</li>
          <li>Используется в электронике.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства</div>
        <ul class="theory-list">
          <li><b>+ O₂:</b> Si + O₂ → SiO₂</li>
          <li><b>+ щёлочи:</b> Si + 2NaOH + H₂O → Na₂SiO₃ + 2H₂↑</li>
          <li><b>+ HF:</b> Si + 4HF → SiF₄ + 2H₂↑</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Соединения кремния</div>
        <ul class="theory-list">
          <li><b>SiO₂</b> — оксид кремния(IV), кварц, песок. Атомная решётка.</li>
          <li><b>H₂SiO₃</b> — кремниевая кислота, слабая, нерастворимая.</li>
          <li><b>Силикаты</b> — соли кремниевой кислоты: Na₂SiO₃ (жидкое стекло).</li>
        </ul>
        <div class="formula-box">SiO₂ + 2NaOH → Na₂SiO₃ + H₂O</div>
        <div class="formula-box">Na₂SiO₃ + 2HCl → H₂SiO₃↓ + 2NaCl</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Применение</div>
        <ul class="theory-list">
          <li>Стекло, керамика, фарфор.</li>
          <li>Полупроводники, солнечные батареи.</li>
          <li>Строительные материалы.</li>
        </ul>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-3-20': {
    title: '§ 20. Получение неметаллов',
    sub: 'Глава 3. Неметаллы и их соединения',
    html: `
      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Способы получения</div>
        <ul class="theory-list">
          <li><b>Из воздуха</b> — перегонка жидкого воздуха (N₂, O₂, благородные газы).</li>
          <li><b>Из природных соединений</b> — восстановление (Si, P).</li>
          <li><b>Электролиз</b> — Cl₂, F₂ из растворов/расплавов солей.</li>
          <li><b>Окисление</b> — галогены из их солей.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🏭</span> Примеры</div>
        <div class="formula-box">2NaCl(расплав) → 2Na + Cl₂ (электролиз)</div>
        <div class="formula-box">SiO₂ + 2C → Si + 2CO (получение Si)</div>
        <div class="formula-box">Ca₃(PO₄)₂ + 3SiO₂ + 5C → 3CaSiO₃ + 2P + 5CO (получение P)</div>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-3-21': {
    title: '§ 21. Важнейшие соединения неметаллов',
    sub: 'Глава 3. Неметаллы и их соединения',
    html: `
      <div class="card">
        <div class="card-title"><span class="num">📋</span> Важнейшие кислоты</div>
        <div class="table-wrap"><table>
          <tr><th>Кислота</th><th>Формула</th><th>Соли</th><th>Применение</th></tr>
          <tr><td>Соляная</td><td>HCl</td><td>Хлориды</td><td>Металлообработка</td></tr>
          <tr><td>Серная</td><td>H₂SO₄</td><td>Сульфаты</td><td>Производство удобрений</td></tr>
          <tr><td>Азотная</td><td>HNO₃</td><td>Нитраты</td><td>Удобрения, взрывчатка</td></tr>
          <tr><td>Фосфорная</td><td>H₃PO₄</td><td>Фосфаты</td><td>Удобрения</td></tr>
          <tr><td>Угольная</td><td>H₂CO₃</td><td>Карбонаты</td><td>Газировка</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Важнейшие оксиды</div>
        <ul class="theory-list">
          <li>CO₂ — углекислый газ, фотосинтез.</li>
          <li>SO₂ — сернистый газ, консервант.</li>
          <li>SO₃ — производство H₂SO₄.</li>
          <li>NO₂ — «лисий хвост», бурый газ.</li>
          <li>P₂O₅ — получение H₃PO₄.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌱</span> Значение</div>
        <p class="paragraph">Неметаллы и их соединения — основа жизни: вода, углеводы, белки, нуклеиновые кислоты. Применяются в промышленности, медицине, сельском хозяйстве.</p>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  /* ============ ГЛАВА 4 ============ */

  'ch9-4-1': {
    title: '§ 1. Общая характеристика металлов',
    sub: 'Глава 4. Металлы',
    html: `
      <div class="paragraph">Металлы расположены в левой нижней части таблицы. На внешнем уровне 1–3 электрона, легко их отдают — восстановители.</div>

      <div class="card">
        <div class="card-title"><span class="num">📋</span> Положение в таблице</div>
        <ul class="theory-list">
          <li>Все элементы I-A, II-A групп (кроме H, He).</li>
          <li>Многие элементы побочных подгрупп (Fe, Cu, Zn, Cr).</li>
          <li>В периоде металлические свойства ослабевают слева направо.</li>
          <li>В группе усиливаются сверху вниз.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">💎</span> Физические свойства</div>
        <ul class="theory-list">
          <li><b>Металлический блеск</b> — Ag, Au, Al.</li>
          <li><b>Электропроводность</b> — лучшие Ag, Cu, Al.</li>
          <li><b>Теплопроводность</b> — Ag, Cu.</li>
          <li><b>Ковкость и пластичность</b> — Au, Ag, Cu.</li>
          <li><b>Плотность</b> — лёгкие (Li, Al) и тяжёлые (Pb, Hg).</li>
          <li><b>Температура плавления</b> — низкая (Hg −39 °C, Cs 28 °C) и высокая (W 3410 °C).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства</div>
        <ul class="theory-list">
          <li><b>+ O₂:</b> 2Ca + O₂ → 2CaO</li>
          <li><b>+ галогены:</b> 2Na + Cl₂ → 2NaCl</li>
          <li><b>+ H₂O:</b> 2Na + 2H₂O → 2NaOH + H₂↑</li>
          <li><b>+ кислоты:</b> Zn + 2HCl → ZnCl₂ + H₂↑</li>
          <li><b>+ соли:</b> Fe + CuSO₄ → FeSO₄ + Cu</li>
        </ul>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-4-2': {
    title: '§ 2. Химические свойства металлов',
    sub: 'Глава 4. Металлы',
    html: `
      <div class="card">
        <div class="card-title"><span class="num">📊</span> Ряд активности металлов</div>
        <div class="formula-box">Li → K → Ba → Ca → Na → Mg → Al → Mn → Zn → Cr → Fe → Ni → Sn → Pb → (H) → Cu → Hg → Ag → Pt → Au</div>
        <p class="paragraph">Каждый металл вытесняет из растворов солей те металлы, которые стоят правее него.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">1️⃣</span> С кислородом</div>
        <ul class="theory-list">
          <li><b>Активные</b> (Li→Al) — при обычных условиях, образуют оксиды.</li>
          <li><b>Средней активности</b> (Mn→Pb) — при нагревании.</li>
          <li><b>Малоактивные</b> (Cu→Au) — только при сильном нагревании или не реагируют.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">2️⃣</span> С водой</div>
        <ul class="theory-list">
          <li><b>Очень активные</b> (Na, K, Ca) — при обычных условиях: 2Na + 2H₂O → 2NaOH + H₂↑</li>
          <li><b>Средней активности</b> (Mg, Fe, Zn) — при нагревании с парами воды: 3Fe + 4H₂O → Fe₃O₄ + 4H₂</li>
          <li><b>Малоактивные</b> (Cu, Ag) — не реагируют.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">3️⃣</span> С кислотами</div>
        <p class="paragraph">Металлы левее H реагируют с разбавленными кислотами:</p>
        <div class="formula-box">Zn + 2HCl → ZnCl₂ + H₂↑</div>
        <p class="paragraph">С HNO₃ (конц.) и H₂SO₄ (конц.) реагируют почти все металлы, но не выделяют H₂.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">4️⃣</span> С солями</div>
        <div class="formula-box">Fe + CuSO₄ → FeSO₄ + Cu</div>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-4-3': {
    title: '§ 3. Щелочные металлы (IA)',
    sub: 'Глава 4. Металлы',
    html: `
      <div class="paragraph">Щелочные металлы — Li, Na, K, Rb, Cs, Fr. На внешнем уровне 1 электрон, легко отдают его. Сильные восстановители.</div>

      <div class="card">
        <div class="card-title"><span class="num">⚛️</span> Строение</div>
        <ul class="theory-list">
          <li>1 электрон на внешнем уровне.</li>
          <li>Большой радиус, слабо удерживают электрон.</li>
          <li>Степень окисления всегда +1.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">💎</span> Физические свойства</div>
        <ul class="theory-list">
          <li>Серебристо-белые, мягкие, режутся ножом.</li>
          <li>Легкоплавкие.</li>
          <li>Малая плотность (Li плавает в воде).</li>
          <li>Хранят под слоем керосина.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства</div>
        <ul class="theory-list">
          <li><b>+ O₂:</b> 4Na + O₂ → 2Na₂O; 2Na + O₂ → Na₂O₂ (пероксид)</li>
          <li><b>+ Cl₂:</b> 2Na + Cl₂ → 2NaCl</li>
          <li><b>+ H₂O:</b> 2Na + 2H₂O → 2NaOH + H₂↑</li>
          <li><b>+ H₂:</b> 2Na + H₂ → 2NaH (гидрид)</li>
          <li><b>+ спирты:</b> 2Na + 2C₂H₅OH → 2C₂H₅ONa + H₂↑</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Применение</div>
        <ul class="theory-list">
          <li>Na, K — теплоносители в ядерных реакторах.</li>
          <li>Na — получение органических соединений.</li>
          <li>Соли: NaCl, Na₂CO₃, KNO₃.</li>
        </ul>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-4-4': {
    title: '§ 4. Щёлочноземельные металлы (IIA)',
    sub: 'Глава 4. Металлы',
    html: `
      <div class="paragraph">Щёлочноземельные металлы — Ca, Sr, Ba, Ra. На внешнем уровне 2 электрона. Степень окисления +2.</div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства</div>
        <ul class="theory-list">
          <li><b>+ O₂:</b> 2Ca + O₂ → 2CaO</li>
          <li><b>+ H₂O:</b> Ca + 2H₂O → Ca(OH)₂ + H₂↑</li>
          <li><b>+ HCl:</b> Ca + 2HCl → CaCl₂ + H₂↑</li>
          <li><b>+ H₂:</b> Ca + H₂ → CaH₂</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Оксиды и гидроксиды</div>
        <ul class="theory-list">
          <li><b>CaO</b> — негашеная известь. + H₂O → Ca(OH)₂ (гашеная известь).</li>
          <li><b>Ca(OH)₂</b> — малорастворим, известковая вода.</li>
          <li><b>Ba(OH)₂</b> — растворим, сильная щёлочь.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Жёсткость воды</div>
        <p class="paragraph">Обусловлена ионами Ca²⁺ и Mg²⁺. Бывает:</p>
        <ul class="theory-list">
          <li><b>Временная (карбонатная)</b> — устраняется кипячением: Ca(HCO₃)₂ → CaCO₃↓ + H₂O + CO₂↑</li>
          <li><b>Постоянная</b> — не устраняется кипячением.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Применение</div>
        <ul class="theory-list">
          <li>Ca — восстановитель металлов.</li>
          <li>CaCO₃ — стройматериалы.</li>
          <li>CaSO₄·2H₂O — гипс.</li>
        </ul>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-4-5': {
    title: '§ 5. Жёсткость воды',
    sub: 'Глава 4. Металлы',
    html: `
      <div class="definition"><span class="term">Жёсткость воды</span> — совокупность свойств воды, обусловленная содержанием ионов Ca²⁺ и Mg²⁺.</div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Виды жёсткости</div>
        <ul class="theory-list">
          <li><b>Временная (карбонатная)</b> — из-за Ca(HCO₃)₂ и Mg(HCO₃)₂. Устраняется кипячением.</li>
          <li><b>Постоянная (некарбонатная)</b> — из-за CaSO₄, MgSO₄, CaCl₂. Не устраняется кипячением.</li>
          <li><b>Общая</b> = временная + постоянная.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Способы устранения</div>
        <ul class="theory-list">
          <li><b>Кипячение</b> — устраняет временную: Ca(HCO₃)₂ → CaCO₃↓ + H₂O + CO₂↑</li>
          <li><b>Добавление соды:</b> CaSO₄ + Na₂CO₃ → CaCO₃↓ + Na₂SO₄</li>
          <li><b>Известкование:</b> Ca(HCO₃)₂ + Ca(OH)₂ → 2CaCO₃↓ + 2H₂O</li>
          <li><b>Ионообменные смолы (Na⁺/H⁺)</b> — современный способ.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚠️</span> Влияние жёсткости</div>
        <ul class="theory-list">
          <li>Образование накипи в чайниках, котлах.</li>
          <li>Перерасход мыла.</li>
          <li>Плохое пенообразование.</li>
        </ul>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-4-6': {
    title: '§ 6. Алюминий и его соединения',
    sub: 'Глава 4. Металлы',
    html: `
      <div class="card">
        <div class="card-title"><span class="num">⚛️</span> Алюминий Al</div>
        <p class="paragraph">Элемент III-A группы, порядковый номер 13. Серебристо-белый металл, лёгкий, пластичный. Самый распространённый металл в земной коре.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">💎</span> Особенности</div>
        <ul class="theory-list">
          <li>Покрыт прочной оксидной плёнкой Al₂O₃ (защита от коррозии).</li>
          <li>Амфотерный металл — реагирует и с кислотами, и со щелочами.</li>
          <li>Хорошо проводит ток и тепло.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства</div>
        <ul class="theory-list">
          <li><b>+ O₂:</b> 4Al + 3O₂ → 2Al₂O₃</li>
          <li><b>+ HCl:</b> 2Al + 6HCl → 2AlCl₃ + 3H₂↑</li>
          <li><b>+ NaOH:</b> 2Al + 2NaOH + 6H₂O → 2Na[Al(OH)₄] + 3H₂↑</li>
          <li><b>+ CuO (алюминотермия):</b> 2Al + 3CuO → Al₂O₃ + 3Cu</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Соединения алюминия</div>
        <ul class="theory-list">
          <li><b>Al₂O₃</b> — амфотерный оксид (корунд, рубин, сапфир).</li>
          <li><b>Al(OH)₃</b> — амфотерный гидроксид. Реагирует с кислотами и щелочами.</li>
        </ul>
        <div class="formula-box">Al(OH)₃ + 3HCl → AlCl₃ + 3H₂O</div>
        <div class="formula-box">Al(OH)₃ + NaOH → Na[Al(OH)₄]</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Применение</div>
        <ul class="theory-list">
          <li>Авиастроение, электроника.</li>
          <li>Посуда, фольга.</li>
          <li>Алюминотермия для получения металлов.</li>
          <li>Ювелирные камни (корунд, рубин).</li>
        </ul>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-4-7': {
    title: '§ 7. Железо и его соединения',
    sub: 'Глава 4. Металлы',
    html: `
      <div class="card">
        <div class="card-title"><span class="num">⚛️</span> Железо Fe</div>
        <p class="paragraph">Элемент VIII-B группы, порядковый номер 26. Серебристо-белый металл с сероватым оттенком. Обладает магнитными свойствами.</p>
        <ul class="theory-list">
          <li>Второй по распространённости металл после Al.</li>
          <li>Степени окисления +2 и +3 (реже +6).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства</div>
        <ul class="theory-list">
          <li><b>+ O₂:</b> 3Fe + 2O₂ → Fe₃O₄ (ржавление — Fe₂O₃·nH₂O)</li>
          <li><b>+ Cl₂:</b> 2Fe + 3Cl₂ → 2FeCl₃</li>
          <li><b>+ HCl (разб.):</b> Fe + 2HCl → FeCl₂ + H₂↑</li>
          <li><b>+ H₂SO₄ (конц., холод):</b> пассивация</li>
          <li><b>+ CuSO₄:</b> Fe + CuSO₄ → FeSO₄ + Cu</li>
          <li><b>+ S:</b> Fe + S → FeS</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Соединения железа</div>
        <ul class="theory-list">
          <li><b>FeO, Fe₂O₃, Fe₃O₄</b> — оксиды.</li>
          <li><b>Fe(OH)₂</b> — серо-зелёный, быстро окисляется на воздухе.</li>
          <li><b>Fe(OH)₃</b> — красно-бурый.</li>
          <li><b>FeCl₂, FeCl₃, FeSO₄</b> — соли.</li>
        </ul>
        <p class="paragraph">Качественные реакции:</p>
        <div class="formula-box">Fe²⁺ + 2OH⁻ → Fe(OH)₂↓ (серо-зелёный)</div>
        <div class="formula-box">Fe³⁺ + 3OH⁻ → Fe(OH)₃↓ (бурый)</div>
        <div class="formula-box">Fe³⁺ + 3SCN⁻ → Fe(SCN)₃ (кроваво-красный)</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🏭</span> Применение</div>
        <ul class="theory-list">
          <li>Металлургия (сталь, чугун).</li>
          <li>Строительство.</li>
          <li>Магниты.</li>
        </ul>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-4-8': {
    title: '§ 8. Коррозия металлов',
    sub: 'Глава 4. Металлы',
    html: `
      <div class="definition"><span class="term">Коррозия</span> — самопроизвольное разрушение металлов и сплавов под действием окружающей среды.</div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Виды коррозии</div>
        <ul class="theory-list">
          <li><b>Химическая</b> — в газах или неэлектролитах (при высокой t°).</li>
          <li><b>Электрохимическая</b> — в электролитах (во влажном воздухе, в морской воде). Сопровождается образованием гальванических пар.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Механизм электрохимической коррозии</div>
        <ul class="theory-list">
          <li>Образуется гальванопара (анод — более активный металл, катод — менее активный).</li>
          <li>На аноде: Me⁰ − ne⁻ → Meⁿ⁺ (окисление).</li>
          <li>На катоде: O₂ + 2H₂O + 4e⁻ → 4OH⁻ (в нейтральной среде).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🛡️</span> Способы защиты</div>
        <ul class="theory-list">
          <li><b>Покрытия:</b> краска, лак, эмаль, металл (Cr, Ni, Zn).</li>
          <li><b>Легирование:</b> добавление Cr, Ni (нержавеющая сталь).</li>
          <li><b>Протекторная защита:</b> присоединение более активного металла.</li>
          <li><b>Электрохимическая:</b> катодная защита.</li>
          <li><b>Ингибиторы</b> — замедляют коррозию.</li>
          <li><b>Удаление агрессивной среды</b> — сушка, снижение влажности.</li>
        </ul>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-4-9': {
    title: '§ 9. Металлы в природе. Металлургия',
    sub: 'Глава 4. Металлы',
    html: `
      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Металлы в природе</div>
        <ul class="theory-list">
          <li><b>В самородном виде</b> — Au, Pt, Ag, Hg, Cu.</li>
          <li><b>В виде оксидов</b> — Fe₂O₃, Fe₃O₄, Al₂O₃, MnO₂.</li>
          <li><b>В виде сульфидов</b> — PbS, ZnS, CuFeS₂, FeS₂.</li>
          <li><b>В виде солей</b> — CaCO₃, Ca₃(PO₄)₂, NaCl, CaSO₄·2H₂O.</li>
        </ul>
      </div>

      <div class="definition"><span class="term">Металлургия</span> — наука о промышленных способах получения металлов из руд.</div>

      <div class="card">
        <div class="card-title"><span class="num">1️⃣</span> Пирометаллургия</div>
        <p class="paragraph">Получение металлов из руд при высокой температуре с помощью восстановителей (C, CO, H₂, Al, Mg).</p>
        <div class="formula-box">Fe₂O₃ + 3CO → 2Fe + 3CO₂</div>
        <div class="formula-box">2Al + Cr₂O₃ → Al₂O₃ + 2Cr (алюминотермия)</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">2️⃣</span> Гидрометаллургия</div>
        <p class="paragraph">Перевод руды в раствор, затем восстановление металла:</p>
        <div class="formula-box">CuO + H₂SO₄ → CuSO₄ + H₂O</div>
        <div class="formula-box">CuSO₄ + Fe → FeSO₄ + Cu</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">3️⃣</span> Электрометаллургия</div>
        <p class="paragraph">Получение металлов с помощью электрического тока:</p>
        <div class="formula-box">2NaCl(расплав) → 2Na + Cl₂ (электролиз)</div>
        <div class="formula-box">2Al₂O₃(расплав) → 4Al + 3O₂ (электролиз)</div>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  /* ============ ГЛАВА 5 ============ */

  'ch9-5-1': {
    title: '§ 1. Химический состав планеты Земля',
    sub: 'Глава 5. Химия и окружающая среда',
    html: `
      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Химические элементы в земной коре</div>
        <div class="table-wrap"><table>
          <tr><th>Элемент</th><th>Массовая доля</th></tr>
          <tr><td>O — кислород</td><td>~49%</td></tr>
          <tr><td>Si — кремний</td><td>~26%</td></tr>
          <tr><td>Al — алюминий</td><td>~7,5%</td></tr>
          <tr><td>Fe — железо</td><td>~4,7%</td></tr>
          <tr><td>Ca — кальций</td><td>~3,4%</td></tr>
          <tr><td>Na, K, Mg, H, Ti</td><td>остальное</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌊</span> Гидросфера</div>
        <p class="paragraph">Воды на Земле ~1,4 млрд км³. Из них только 3% — пресная вода. Основные ионы в морской воде: Na⁺, Mg²⁺, Cl⁻, SO₄²⁻.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">💨</span> Атмосфера</div>
        <p class="paragraph">Состав воздуха: N₂ 78%, O₂ 21%, Ar 0,94%, CO₂ 0,03%.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🧬</span> Живые организмы</div>
        <p class="paragraph">Основные элементы жизни — C, H, O, N, P, S. Их называют <b>органогены</b>.</p>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-5-2': {
    title: '§ 2. Охрана окружающей среды',
    sub: 'Глава 5. Химия и окружающая среда',
    html: `
      <div class="card">
        <div class="card-title"><span class="num">⚠️</span> Источники загрязнения</div>
        <ul class="theory-list">
          <li><b>Промышленность:</b> выбросы SO₂, NO₂, CO, тяжёлые металлы.</li>
          <li><b>Транспорт:</b> выхлопные газы (CO, NO₂, сажа).</li>
          <li><b>Сельское хозяйство:</b> удобрения, пестициды.</li>
          <li><b>Быт:</b> отходы, пластик, моющие средства.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">☠️</span> Экологические проблемы</div>
        <ul class="theory-list">
          <li><b>Кислотные дожди</b> — из-за SO₂ и NO₂.</li>
          <li><b>Парниковый эффект</b> — из-за CO₂, метана.</li>
          <li><b>Озоновые дыры</b> — из-за фреонов.</li>
          <li><b>Загрязнение водоёмов</b> — сточными водами.</li>
          <li><b>Накопление твёрдых отходов</b> — пластик.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🛡️</span> Способы защиты</div>
        <ul class="theory-list">
          <li><b>Очистные сооружения</b> — фильтры, отстойники.</li>
          <li><b>Безотходные технологии</b> — использование отходов.</li>
          <li><b>Переработка отходов</b> — recycling.</li>
          <li><b>Альтернативная энергетика</b> — солнце, ветер, вода.</li>
          <li><b>Зелёные насаждения</b> — поглощают CO₂.</li>
          <li><b>Экологическое воспитание</b>.</li>
        </ul>
      </div>

      <div class="note">Химия помогает решать экологические проблемы: создание катализаторов, очистных систем, биоразлагаемых материалов.</div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  /* ============ ГЛАВА 6 ============ */

  'ch9-6-1': {
    title: '§ 1. Вещества',
    sub: 'Глава 6. Обобщение знаний. Подготовка к ОГЭ',
    html: `
      <div class="card">
        <div class="card-title"><span class="num">📚</span> Классификация веществ</div>
        <ul class="theory-list">
          <li><b>Простые</b> — металлы, неметаллы, благородные газы.</li>
          <li><b>Сложные</b> — оксиды, основания, кислоты, соли.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚛️</span> Строение вещества</div>
        <ul class="theory-list">
          <li><b>Атом</b> — ядро + электроны.</li>
          <li><b>Молекула</b> — группа атомов, связанных ковалентно.</li>
          <li><b>Ион</b> — заряженная частица.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔗</span> Типы химической связи</div>
        <ul class="theory-list">
          <li><b>Ионная</b> — металл + неметалл.</li>
          <li><b>Ковалентная неполярная</b> — одинаковые неметаллы.</li>
          <li><b>Ковалентная полярная</b> — разные неметаллы.</li>
          <li><b>Металлическая</b> — в металлах.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">💎</span> Кристаллические решётки</div>
        <ul class="theory-list">
          <li><b>Ионная</b> — NaCl, CaO.</li>
          <li><b>Атомная</b> — алмаз, SiO₂, SiC.</li>
          <li><b>Молекулярная</b> — H₂O, CO₂, I₂.</li>
          <li><b>Металлическая</b> — Cu, Fe, Al.</li>
        </ul>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-6-2': {
    title: '§ 2. Химические реакции',
    sub: 'Глава 6. Обобщение знаний. Подготовка к ОГЭ',
    html: `
      <div class="card">
        <div class="card-title"><span class="num">📋</span> Типы реакций</div>
        <ul class="theory-list">
          <li><b>Соединения:</b> A + B → AB</li>
          <li><b>Разложения:</b> AB → A + B</li>
          <li><b>Замещения:</b> A + BC → AC + B</li>
          <li><b>Обмена:</b> AB + CD → AD + CB</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚡</span> ОВР</div>
        <ul class="theory-list">
          <li><b>Окисление</b> — отдача e⁻, с. о. ↑.</li>
          <li><b>Восстановление</b> — принятие e⁻, с. о. ↓.</li>
          <li><b>Восстановитель</b> — отдаёт e⁻, окисляется.</li>
          <li><b>Окислитель</b> — принимает e⁻, восстанавливается.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📐</span> Ионные уравнения</div>
        <p class="paragraph">Полное ионное и сокращённое ионное уравнения:</p>
        <div class="formula-box">Ag⁺ + NO₃⁻ + Na⁺ + Cl⁻ → AgCl↓ + Na⁺ + NO₃⁻</div>
        <div class="formula-box">Ag⁺ + Cl⁻ → AgCl↓</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌊</span> Гидролиз</div>
        <ul class="theory-list">
          <li>По катиону — кислая среда (NH₄Cl).</li>
          <li>По аниону — щелочная среда (Na₂CO₃).</li>
          <li>По катиону и аниону — полный (CH₃COONH₄).</li>
        </ul>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-6-3': {
    title: '§ 3. Основы неорганической химии',
    sub: 'Глава 6. Обобщение знаний. Подготовка к ОГЭ',
    html: `
      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Свойства классов соединений</div>
        <div class="table-wrap"><table>
          <tr><th>Класс</th><th>С чем реагирует</th></tr>
          <tr><td>Оксиды основные</td><td>Кислоты, кислотные оксиды, вода</td></tr>
          <tr><td>Оксиды кислотные</td><td>Основания, основные оксиды, вода</td></tr>
          <tr><td>Основания</td><td>Кислоты, кислотные оксиды, соли</td></tr>
          <tr><td>Кислоты</td><td>Металлы (до H), оксиды, основания, соли</td></tr>
          <tr><td>Соли</td><td>Металлы (более активные), кислоты, щёлочи, соли</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔗</span> Генетическая связь</div>
        <div class="formula-box">Металл → Основный оксид → Основание → Соль</div>
        <div class="formula-box">Неметалл → Кислотный оксид → Кислота → Соль</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Качественные реакции</div>
        <div class="table-wrap"><table>
          <tr><th>Ион</th><th>Реактив</th><th>Признак</th></tr>
          <tr><td>H⁺</td><td>Лакмус</td><td>Красный</td></tr>
          <tr><td>OH⁻</td><td>Фенолфталеин</td><td>Малиновый</td></tr>
          <tr><td>Cl⁻</td><td>AgNO₃</td><td>Белый осадок</td></tr>
          <tr><td>SO₄²⁻</td><td>BaCl₂</td><td>Белый осадок</td></tr>
          <tr><td>CO₃²⁻</td><td>H⁺</td><td>Газ CO₂</td></tr>
          <tr><td>NH₄⁺</td><td>OH⁻ (нагрев)</td><td>Запах NH₃</td></tr>
          <tr><td>Fe³⁺</td><td>KSCN</td><td>Красный цвет</td></tr>
        </table></div>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-6-4': {
    title: '§ 4. Качественные реакции',
    sub: 'Глава 6. Обобщение знаний. Подготовка к ОГЭ',
    html: `
      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Качественные реакции на катионы</div>
        <div class="table-wrap"><table>
          <tr><th>Катион</th><th>Реактив</th><th>Признак</th></tr>
          <tr><td>H⁺</td><td>Лакмус, метилоранж</td><td>Красный / розовый</td></tr>
          <tr><td>Na⁺, K⁺</td><td>Пламя</td><td>Жёлтое / фиолетовое</td></tr>
          <tr><td>Ca²⁺</td><td>Пламя</td><td>Кирпично-красное</td></tr>
          <tr><td>Ba²⁺</td><td>Пламя</td><td>Жёлто-зелёное</td></tr>
          <tr><td>Cu²⁺</td><td>Раствор аммиака</td><td>Ярко-синий</td></tr>
          <tr><td>Fe²⁺</td><td>K₃[Fe(CN)₆]</td><td>Синий осадок</td></tr>
          <tr><td>Fe³⁺</td><td>KSCN</td><td>Кроваво-красный</td></tr>
          <tr><td>Ag⁺</td><td>Cl⁻</td><td>Белый осадок AgCl</td></tr>
          <tr><td>NH₄⁺</td><td>NaOH (нагрев)</td><td>Запах аммиака</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Качественные реакции на анионы</div>
        <div class="table-wrap"><table>
          <tr><th>Анион</th><th>Реактив</th><th>Признак</th></tr>
          <tr><td>OH⁻</td><td>Фенолфталеин</td><td>Малиновый</td></tr>
          <tr><td>Cl⁻</td><td>AgNO₃</td><td>Белый осадок</td></tr>
          <tr><td>Br⁻</td><td>AgNO₃</td><td>Кремовый осадок</td></tr>
          <tr><td>I⁻</td><td>AgNO₃</td><td>Жёлтый осадок</td></tr>
          <tr><td>SO₄²⁻</td><td>BaCl₂</td><td>Белый осадок</td></tr>
          <tr><td>CO₃²⁻</td><td>HCl</td><td>Газ CO₂</td></tr>
          <tr><td>PO₄³⁻</td><td>AgNO₃</td><td>Жёлтый осадок</td></tr>
          <tr><td>SiO₃²⁻</td><td>HCl</td><td>Студенистый осадок H₂SiO₃</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Качественные реакции на газы</div>
        <ul class="theory-list">
          <li><b>CO₂</b> — мутит известковую воду.</li>
          <li><b>O₂</b> — тлеющая лучинка вспыхивает.</li>
          <li><b>H₂</b> — хлопок при поджигании.</li>
          <li><b>NH₃</b> — синий лакмус краснеет, резкий запах.</li>
          <li><b>SO₂</b> — обесцвечивает раствор KMnO₄.</li>
        </ul>
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  }

};
