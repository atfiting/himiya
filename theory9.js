// theory9.js — теория 9 класса (Габриелян, 2025)

var PAGES_9 = {

  /* ============ ГЛАВА 1 (РАСШИРЕННАЯ) ============ */

  'ch9-1-1': {
    title: '§ 1. Классификация неорганических соединений',
    sub: 'Глава 1. Обобщение знаний. Химические реакции',
    html: `
      <div class="paragraph">Все вещества делятся на <b>простые</b> и <b>сложные</b>. Сложные неорганические вещества делятся на четыре основных класса.</div>

      <div class="card">
        <div class="card-title"><span class="num">📋</span> Простые вещества</div>
        <ul class="theory-list">
          <li><b>Металлы</b> — Na, K, Ca, Mg, Al, Fe, Cu, Zn, Ag, Au. Обладают металлическим блеском, проводят ток, ковкие.</li>
          <li><b>Неметаллы</b> — H₂, O₂, N₂, Cl₂, S, P, C, Si. Не проводят ток (кроме графита), хрупкие.</li>
          <li><b>Благородные газы</b> — He, Ne, Ar, Kr, Xe, Rn. Одноатомные, малоактивные.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📋</span> Сложные вещества</div>
        <div class="table-wrap"><table>
          <tr><th>Класс</th><th>Определение</th><th>Общая формула</th><th>Примеры</th></tr>
          <tr><td>Оксиды</td><td>Два элемента, один — O(−2)</td><td>Э<sub>x</sub>O<sub>y</sub></td><td>Na₂O, CO₂, Al₂O₃</td></tr>
          <tr><td>Основания</td><td>Металл + OH-группы</td><td>Me(OH)<sub>n</sub></td><td>NaOH, Cu(OH)₂</td></tr>
          <tr><td>Кислоты</td><td>H + кислотный остаток</td><td>H<sub>n</sub>Кисл.</td><td>HCl, H₂SO₄</td></tr>
          <tr><td>Соли</td><td>Металл + кислотный остаток</td><td>Me<sub>n</sub>Кисл.<sub>m</sub></td><td>NaCl, K₂SO₄</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Классификация оксидов</div>
        <ul class="theory-list">
          <li><b>Основные</b> — оксиды металлов I–II вал. (кроме Be, Zn): Na₂O, CaO, CuO, FeO.</li>
          <li><b>Кислотные</b> — оксиды неметаллов и металлов V–VII вал.: CO₂, SO₃, P₂O₅, Mn₂O₇.</li>
          <li><b>Амфотерные</b> — Al₂O₃, ZnO, BeO, Cr₂O₃, Fe₂O₃.</li>
          <li><b>Несолеобразующие</b> — CO, N₂O, NO, H₂O.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Классификация оснований</div>
        <ul class="theory-list">
          <li><b>Растворимые (щёлочи)</b> — NaOH, KOH, LiOH, Ca(OH)₂, Ba(OH)₂.</li>
          <li><b>Нерастворимые</b> — Cu(OH)₂, Fe(OH)₃, Mg(OH)₂.</li>
          <li><b>Амфотерные</b> — Al(OH)₃, Zn(OH)₂, Be(OH)₂.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Классификация кислот</div>
        <p class="paragraph"><b>По числу атомов H:</b></p>
        <ul class="theory-list">
          <li>Одноосновные: HCl, HNO₃.</li>
          <li>Двухосновные: H₂SO₄, H₂S.</li>
          <li>Трёхосновные: H₃PO₄.</li>
        </ul>
        <p class="paragraph"><b>По наличию O:</b></p>
        <ul class="theory-list">
          <li>Кислородсодержащие: H₂SO₄, HNO₃, H₂CO₃.</li>
          <li>Бескислородные: HCl, HBr, H₂S.</li>
        </ul>
        <p class="paragraph"><b>По силе:</b></p>
        <ul class="theory-list">
          <li>Сильные: HCl, HBr, HI, H₂SO₄, HNO₃.</li>
          <li>Средние: H₃PO₄, HF, H₂SO₃.</li>
          <li>Слабые: H₂CO₃, H₂S, H₂SiO₃, CH₃COOH.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Классификация солей</div>
        <ul class="theory-list">
          <li><b>Средние (нормальные)</b> — NaCl, K₂SO₄, CaCO₃.</li>
          <li><b>Кислые</b> — NaHCO₃, KHSO₄, Ca(H₂PO₄)₂.</li>
          <li><b>Основные</b> — Cu(OH)Cl, Al(OH)Cl₂.</li>
          <li><b>Двойные</b> — KAl(SO₄)₂, NaKCO₃.</li>
          <li><b>Комплексные</b> — Na₃[Al(OH)₆], K₄[Fe(CN)₆].</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔗</span> Генетическая связь</div>
        <div class="formula-box">Металл → Основный оксид → Основание → Соль</div>
        <div class="formula-box">Неметалл → Кислотный оксид → Кислота → Соль</div>
        <p class="paragraph">Пример: Ca → CaO → Ca(OH)₂ → CaCl₂</p>
        <p class="paragraph">Пример: S → SO₂ → H₂SO₃ → Na₂SO₃</p>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. К какому классу относится каждое вещество: SO₂, Cu(OH)₂, H₃PO₄, K₂CO₃, Al₂O₃, CaO?<br>
        <b>Решение:</b> SO₂ — кислотный оксид; Cu(OH)₂ — нерастворимое основание; H₃PO₄ — трёхосновная кислота; K₂CO₃ — средняя соль; Al₂O₃ — амфотерный оксид; CaO — основный оксид.<br><br>
        2. Осуществите превращение: Cu → CuO → CuCl₂ → Cu(OH)₂ → CuO.<br>
        <b>Решение:</b><br>
        2Cu + O₂ → 2CuO<br>
        CuO + 2HCl → CuCl₂ + H₂O<br>
        CuCl₂ + 2NaOH → Cu(OH)₂↓ + 2NaCl<br>
        Cu(OH)₂ → CuO + H₂O (при нагревании).<br><br>
        3. Приведите по 2 примера: основных оксидов, кислотных оксидов, щелочей, бескислородных кислот.<br>
        <b>Решение:</b> основные — Na₂O, CaO; кислотные — CO₂, SO₃; щёлочи — NaOH, KOH; бескислородные — HCl, H₂S.
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-1-2': {
    title: '§ 2. Классификация химических реакций',
    sub: 'Глава 1. Обобщение знаний. Химические реакции',
    html: `
      <div class="paragraph">Химические реакции классифицируют по нескольким признакам: по числу и составу веществ, по тепловому эффекту, по обратимости, по изменению степеней окисления, по фазовому составу.</div>

      <div class="card">
        <div class="card-title"><span class="num">1️⃣</span> По числу и составу веществ</div>
        <p class="paragraph"><b>Реакции соединения:</b></p>
        <div class="formula-box">A + B → AB</div>
        <div class="formula-box">2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</div>
        <div class="formula-box">CaO + CO<sub>2</sub> → CaCO<sub>3</sub></div>
        <p class="paragraph"><b>Реакции разложения:</b></p>
        <div class="formula-box">AB → A + B</div>
        <div class="formula-box">CaCO<sub>3</sub> → CaO + CO<sub>2</sub>↑</div>
        <div class="formula-box">2KMnO<sub>4</sub> → K<sub>2</sub>MnO<sub>4</sub> + MnO<sub>2</sub> + O<sub>2</sub>↑</div>
        <p class="paragraph"><b>Реакции замещения:</b></p>
        <div class="formula-box">A + BC → AC + B</div>
        <div class="formula-box">Fe + CuSO<sub>4</sub> → FeSO<sub>4</sub> + Cu</div>
        <div class="formula-box">Zn + 2HCl → ZnCl<sub>2</sub> + H<sub>2</sub>↑</div>
        <p class="paragraph"><b>Реакции обмена:</b></p>
        <div class="formula-box">AB + CD → AD + CB</div>
        <div class="formula-box">NaOH + HCl → NaCl + H<sub>2</sub>O</div>
        <div class="formula-box">AgNO<sub>3</sub> + NaCl → AgCl↓ + NaNO<sub>3</sub></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">2️⃣</span> По тепловому эффекту</div>
        <ul class="theory-list">
          <li><b>Экзотермические</b> — с выделением теплоты (+Q): горение, соединение.<br>
          Пример: C + O₂ → CO₂ + Q.</li>
          <li><b>Эндотермические</b> — с поглощением теплоты (−Q): разложение.<br>
          Пример: CaCO₃ → CaO + CO₂ − Q.</li>
        </ul>
        <p class="paragraph">Тепловой эффект реакции записывают в термохимическом уравнении:</p>
        <div class="formula-box">2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O + 572 кДж</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">3️⃣</span> По обратимости</div>
        <ul class="theory-list">
          <li><b>Обратимые</b> — идут одновременно в прямом и обратном направлениях (обозначаются ⇄):
            <div class="formula-box">N<sub>2</sub> + 3H<sub>2</sub> ⇄ 2NH<sub>3</sub></div>
            <div class="formula-box">H<sub>2</sub> + I<sub>2</sub> ⇄ 2HI</div>
          </li>
          <li><b>Необратимые</b> — идут до полного расходования одного из реагирующих веществ (обозначаются →):<br>
          Например, выпадение осадка, выделение газа, образование воды.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">4️⃣</span> По изменению степеней окисления</div>
        <ul class="theory-list">
          <li><b>ОВР</b> — с изменением степеней окисления: Fe + S → FeS.</li>
          <li><b>Не ОВР</b> — без изменения: NaOH + HCl → NaCl + H₂O.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">5️⃣</span> По фазовому составу</div>
        <ul class="theory-list">
          <li><b>Гомогенные</b> — все вещества в одной фазе (газ или раствор): H₂ + Cl₂ → 2HCl.</li>
          <li><b>Гетерогенные</b> — вещества в разных фазах: Zn(тв) + 2HCl(р-р) → ZnCl₂(р-р) + H₂(г).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">6️⃣</span> По использованию катализатора</div>
        <ul class="theory-list">
          <li><b>Каталитические</b> — с катализатором: N₂ + 3H₂ → 2NH₃ (Fe).</li>
          <li><b>Некаталитические</b> — без катализатора: NaOH + HCl → NaCl + H₂O.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Сводная таблица</div>
        <div class="table-wrap"><table>
          <tr><th>Признак</th><th>Типы</th></tr>
          <tr><td>Число и состав веществ</td><td>Соединения, разложения, замещения, обмена</td></tr>
          <tr><td>Тепловой эффект</td><td>Экзо-, эндотермические</td></tr>
          <tr><td>Обратимость</td><td>Обратимые, необратимые</td></tr>
          <tr><td>Изменение с. о.</td><td>ОВР, не ОВР</td></tr>
          <tr><td>Фазовый состав</td><td>Гомогенные, гетерогенные</td></tr>
          <tr><td>Катализатор</td><td>Каталитические, некаталитические</td></tr>
        </table></div>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Определите тип реакции по всем признакам: 2H₂O → 2H₂↑ + O₂↑ − Q.<br>
        <b>Решение:</b> разложения; эндотермическая; необратимая; ОВР; гомогенная; некаталитическая.<br><br>
        2. Классифицируйте реакцию: N₂ + 3H₂ ⇄ 2NH₃ + Q.<br>
        <b>Решение:</b> соединения; экзотермическая; обратимая; ОВР; гомогенная; каталитическая (Fe).<br><br>
        3. Определите тип реакции: Zn + 2HCl → ZnCl₂ + H₂↑.<br>
        <b>Решение:</b> замещения; экзотермическая; необратимая; ОВР; гетерогенная.
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
        <div class="card-title"><span class="num">📐</span> Формулы</div>
        <div class="formula-box">v = Δc / Δt <span class="eq">(моль/(л·с))</span></div>
        <p class="paragraph">где Δc — изменение концентрации (моль/л), Δt — промежуток времени (с).</p>
        <p class="paragraph">Скорость всегда положительна: берётся модуль изменения концентрации.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚡</span> Факторы, влияющие на скорость</div>
        <p class="paragraph"><b>1. Природа реагирующих веществ</b> — активные вещества реагируют быстрее. Например, Na с водой — бурно, Fe — медленно.</p>

        <p class="paragraph"><b>2. Концентрация</b> — чем выше концентрация, тем чаще столкновения молекул, тем быстрее реакция. <b>Закон действующих масс:</b></p>
        <div class="formula-box">v = k · [A]<sup>a</sup> · [B]<sup>b</sup></div>
        <p class="paragraph">где k — константа скорости, [A] и [B] — концентрации, a и b — коэффициенты.</p>

        <p class="paragraph"><b>3. Температура</b> — при повышении на каждые 10 °C скорость растёт в 2–4 раза (<b>правило Вант-Гоффа</b>):</p>
        <div class="formula-box">v<sub>2</sub> / v<sub>1</sub> = γ<sup>ΔT/10</sup></div>
        <p class="paragraph">где γ — температурный коэффициент (обычно 2–4).</p>

        <p class="paragraph"><b>4. Площадь поверхности</b> — для гетерогенных реакций: чем мельче вещество, тем больше площадь, тем быстрее реакция. Порошок реагирует быстрее куска.</p>

        <p class="paragraph"><b>5. Давление</b> — для газов: при повышении давления концентрация газа растёт, скорость увеличивается.</p>

        <p class="paragraph"><b>6. Катализатор</b> — ускоряет реакцию.</p>
      </div>

      <div class="definition"><span class="term">Катализатор</span> — вещество, ускоряющее химическую реакцию, но не расходующееся в ней.</div>

      <div class="definition"><span class="term">Ингибитор</span> — вещество, замедляющее химическую реакцию.</div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Виды катализа</div>
        <ul class="theory-list">
          <li><b>Гомогенный</b> — катализатор в одной фазе с реагентами: 2SO₂ + O₂ → 2SO₃ (кат. NO₂).</li>
          <li><b>Гетерогенный</b> — катализатор в другой фазе: N₂ + 3H₂ → 2NH₃ (кат. Fe).</li>
          <li><b>Ферментативный</b> — биологические катализаторы (ферменты).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🧬</span> Ферменты</div>
        <p class="paragraph">Ферменты — биологические катализаторы, ускоряющие реакции в живых организмах.</p>
        <ul class="theory-list">
          <li>Работают при мягких условиях (37 °C, нормальное давление).</li>
          <li>Обладают высокой селективностью — каждый фермент ускоряет только одну реакцию.</li>
          <li>Примеры: амилаза (расщепление крахмала), каталаза (разложение H₂O₂), липаза (расщепление жиров).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚖️</span> Обратимые реакции. Химическое равновесие</div>
        <div class="definition"><span class="term">Химическое равновесие</span> — состояние, при котором скорости прямой и обратной реакций равны.</div>
        <p class="paragraph">Равновесие можно смещать, изменяя условия. <b>Принцип Ле Шателье:</b> если на систему в равновесии оказать внешнее воздействие, равновесие сместится так, чтобы ослабить это воздействие.</p>
        <ul class="theory-list">
          <li><b>Повышение температуры</b> смещает равновесие в сторону эндотермической реакции.</li>
          <li><b>Повышение давления</b> смещает в сторону реакции с меньшим числом молекул газа.</li>
          <li><b>Повышение концентрации реагента</b> смещает в сторону продуктов.</li>
          <li><b>Удаление продукта</b> смещает в сторону прямой реакции.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🧮</span> Примеры решения задач</div>
        <p class="paragraph"><b>Пример 1.</b> Как изменится скорость реакции при повышении температуры на 30 °C, если γ = 3?</p>
        <p class="paragraph"><b>Решение:</b> v₂/v₁ = 3^(30/10) = 3³ = <b>27 раз</b>.</p>

        <p class="paragraph"><b>Пример 2.</b> Во сколько раз увеличится скорость реакции при увеличении концентрации одного из реагентов в 3 раза?</p>
        <p class="paragraph"><b>Решение:</b> Если A + B → C, то v = k·[A]·[B]. При [A]·3 скорость увеличится в 3 раза.</p>

        <p class="paragraph"><b>Пример 3.</b> Как изменится скорость реакции 2NO + O₂ → 2NO₂ при увеличении концентрации NO в 2 раза?</p>
        <p class="paragraph"><b>Решение:</b> v = k·[NO]²·[O₂]. При [NO]·2 → v возрастёт в 2² = 4 раза.</p>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Как изменится скорость при повышении температуры на 40 °C, если γ = 2?<br>
        <b>Решение:</b> v₂/v₁ = 2⁴ = 16 раз.<br><br>
        2. Во сколько раз увеличится скорость при увеличении концентрации вещества в 4 раза, если порядок реакции = 2?<br>
        <b>Решение:</b> v возрастёт в 4² = 16 раз.<br><br>
        3. Почему порошок цинка реагирует с кислотой быстрее, чем гранулы?<br>
        <b>Решение:</b> У порошка больше площадь поверхности — больше столкновений с кислотой.
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

   /* ============ ГЛАВА 2 (РАСШИРЕННАЯ) ============ */

  'ch9-2-1': {
    title: '§ 1. Электролитическая диссоциация',
    sub: 'Глава 2. Химические реакции в растворах',
    html: `
      <div class="definition"><span class="term">Электролитическая диссоциация (ЭД)</span> — распад электролита на ионы при растворении в воде или расплавлении.</div>

      <div class="card">
        <div class="card-title"><span class="num">📜</span> История открытия</div>
        <ul class="theory-list">
          <li><b>1834</b> — Майкл Фарадей ввёл термины «электролит», «ион», «катод», «анод».</li>
          <li><b>1857</b> — Рудольф Клаузиус предположил, что в растворах есть свободные ионы.</li>
          <li><b>1887</b> — Сванте Аррениус создал теорию электролитической диссоциации (Нобелевская премия 1903 г.).</li>
          <li><b>Начало XX в.</b> — В. А. Кистяковский и И. А. Каблуков дополнили теорию (гидратация ионов).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Электролиты и неэлектролиты</div>
        <div class="definition"><span class="term">Электролиты</span> — вещества, растворы или расплавы которых проводят электрический ток.</div>
        <p class="paragraph">Это соли, кислоты, основания — вещества с ионной или ковалентной полярной связью.</p>
        <div class="definition"><span class="term">Неэлектролиты</span> — вещества, растворы которых не проводят электрический ток.</div>
        <p class="paragraph">Это органические вещества (сахар, спирт, глюкоза), дистиллированная вода, газы (O₂, N₂).</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚛️</span> Почему молекулы распадаются на ионы</div>
        <p class="paragraph">Молекулы воды — <b>диполи</b>: с одной стороны они заряжены положительно, с другой — отрицательно. Когда вещество попадает в воду, диполи воды «окружают» ионы и «вытягивают» их из кристаллической решётки.</p>
        <p class="paragraph">В растворе образуются <b>гидратированные ионы</b> — ионы, окружённые молекулами воды.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📐</span> Степень диссоциации α</div>
        <div class="formula-box">α = (число распавшихся молекул) / (общее число молекул) · 100%</div>
        <p class="paragraph">Значения α:</p>
        <ul class="theory-list">
          <li><b>α = 0</b> — неэлектролит.</li>
          <li><b>0 &lt; α &lt; 1</b> — слабый или средний электролит.</li>
          <li><b>α = 1 (100%)</b> — сильный электролит (в разбавленных растворах).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Классификация электролитов</div>
        <div class="table-wrap"><table>
          <tr><th>Сила</th><th>α</th><th>Примеры</th></tr>
          <tr><td>Сильные</td><td>&gt; 30%</td><td>HCl, HBr, HI, H₂SO₄, HNO₃, HClO₄, NaOH, KOH, Ca(OH)₂, Ba(OH)₂, все растворимые соли</td></tr>
          <tr><td>Средние</td><td>3–30%</td><td>H₃PO₄, HF, H₂SO₃, HNO₂</td></tr>
          <tr><td>Слабые</td><td>&lt; 3%</td><td>H₂CO₃, H₂S, H₂SiO₃, CH₃COOH, H₂O, NH₃·H₂O, Cu(OH)₂, Fe(OH)₃</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚡</span> Схемы диссоциации</div>
        <p class="paragraph"><b>Кислоты</b> → H⁺ + кислотный остаток:</p>
        <div class="formula-box">HCl → H<sup>+</sup> + Cl<sup>-</sup></div>
        <div class="formula-box">H<sub>2</sub>SO<sub>4</sub> → 2H<sup>+</sup> + SO<sub>4</sub><sup>2-</sup></div>
        <div class="formula-box">H<sub>3</sub>PO<sub>4</sub> ⇄ 3H<sup>+</sup> + PO<sub>4</sub><sup>3-</sup> <span class="eq">(ступенчато)</span></div>
        <p class="paragraph"><b>Основания</b> → катион металла + OH⁻:</p>
        <div class="formula-box">NaOH → Na<sup>+</sup> + OH<sup>-</sup></div>
        <div class="formula-box">Ca(OH)<sub>2</sub> → Ca<sup>2+</sup> + 2OH<sup>-</sup></div>
        <p class="paragraph"><b>Соли</b> → катион металла + анион кислотного остатка:</p>
        <div class="formula-box">NaCl → Na<sup>+</sup> + Cl<sup>-</sup></div>
        <div class="formula-box">Na<sub>2</sub>SO<sub>4</sub> → 2Na<sup>+</sup> + SO<sub>4</sub><sup>2-</sup></div>
        <div class="formula-box">Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> → 2Al<sup>3+</sup> + 3SO<sub>4</sub><sup>2-</sup></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Механизм диссоциации</div>
        <ul class="theory-list">
          <li><b>Ионные соединения</b> (NaCl) — кристалл уже состоит из ионов, вода «вытаскивает» их из решётки.</li>
          <li><b>Полярные молекулы</b> (HCl) — молекула сначала поляризуется под действием диполей воды, потом распадается на ионы.</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Какие из веществ — электролиты: NaCl, сахар, H₂SO₄, спирт, KOH?<br>
        <b>Решение:</b> электролиты — NaCl, H₂SO₄, KOH.<br><br>
        2. Напишите уравнение диссоциации AlCl₃.<br>
        <b>Решение:</b> AlCl₃ → Al³⁺ + 3Cl⁻.<br><br>
        3. Классифицируйте электролиты по силе: HCl, H₂CO₃, H₃PO₄, NaOH, HF.<br>
        <b>Решение:</b> сильные — HCl, NaOH; средние — H₃PO₄, HF; слабые — H₂CO₃.<br><br>
        4. Чем отличается сильный электролит от слабого?<br>
        <b>Решение:</b> У сильного α больше 30%, у слабого — меньше 3%.
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-2-2': {
    title: '§ 2. Положения теории электролитической диссоциации',
    sub: 'Глава 2. Химические реакции в растворах',
    html: `
      <div class="card">
        <div class="card-title"><span class="num">📚</span> Основные положения теории (С. Аррениус, дополнено И. А. Каблуковым)</div>
        <ol class="theory-list num">
          <li>Электролиты при растворении в воде распадаются на ионы — положительные и отрицательные.</li>
          <li>Ионы — это заряженные частицы, отличающиеся от атомов и молекул по строению и свойствам.</li>
          <li>Положительные ионы называются <b>катионами</b>, отрицательные — <b>анионами</b>.</li>
          <li>При растворении в воде ионы гидратируются (окружаются молекулами воды).</li>
          <li>Диссоциация — обратимый процесс: наряду с распадом идёт <b>ассоциация</b> (объединение ионов).</li>
          <li>Растворы электролитов проводят электрический ток.</li>
          <li>Химические свойства растворов электролитов — это свойства ионов.</li>
        </ol>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Катионы и анионы</div>
        <div class="table-wrap"><table>
          <tr><th>Катионы</th><th>Анионы</th></tr>
          <tr><td>H⁺, Na⁺, K⁺, Li⁺</td><td>Cl⁻, Br⁻, I⁻, F⁻</td></tr>
          <tr><td>Mg²⁺, Ca²⁺, Ba²⁺, Zn²⁺</td><td>OH⁻, NO₃⁻, NO₂⁻</td></tr>
          <tr><td>Al³⁺, Fe³⁺, Cr³⁺</td><td>SO₄²⁻, SO₃²⁻, CO₃²⁻, SiO₃²⁻</td></tr>
          <tr><td>NH₄⁺</td><td>PO₄³⁻, HCO₃⁻, HSO₄⁻</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚡</span> Схемы диссоциации</div>
        <p class="paragraph"><b>Кислоты</b> (диссоциируют на H⁺ и кислотный остаток):</p>
        <div class="formula-box">HCl → H<sup>+</sup> + Cl<sup>-</sup></div>
        <div class="formula-box">HNO<sub>3</sub> → H<sup>+</sup> + NO<sub>3</sub><sup>-</sup></div>
        <div class="formula-box">H<sub>2</sub>SO<sub>4</sub> → 2H<sup>+</sup> + SO<sub>4</sub><sup>2-</sup></div>
        <div class="formula-box">H<sub>3</sub>PO<sub>4</sub> ⇄ H<sup>+</sup> + H<sub>2</sub>PO<sub>4</sub><sup>-</sup> ⇄ 2H<sup>+</sup> + HPO<sub>4</sub><sup>2-</sup> ⇄ 3H<sup>+</sup> + PO<sub>4</sub><sup>3-</sup></div>

        <p class="paragraph"><b>Основания</b> (диссоциируют на катион металла и OH⁻):</p>
        <div class="formula-box">NaOH → Na<sup>+</sup> + OH<sup>-</sup></div>
        <div class="formula-box">Ba(OH)<sub>2</sub> → Ba<sup>2+</sup> + 2OH<sup>-</sup></div>
        <div class="formula-box">Al(OH)<sub>3</sub> ⇄ Al<sup>3+</sup> + 3OH<sup>-</sup> <span class="eq">(слабое основание)</span></div>

        <p class="paragraph"><b>Соли</b> (диссоциируют на катион металла и анион кислотного остатка):</p>
        <div class="formula-box">KNO<sub>3</sub> → K<sup>+</sup> + NO<sub>3</sub><sup>-</sup></div>
        <div class="formula-box">Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> → 2Fe<sup>3+</sup> + 3SO<sub>4</sub><sup>2-</sup></div>
        <div class="formula-box">NaHCO<sub>3</sub> → Na<sup>+</sup> + HCO<sub>3</sub><sup>-</sup></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Гидратация ионов</div>
        <p class="paragraph">В водном растворе ионы не свободны — они окружены молекулами воды. Например, H⁺ в воде существует как H₃O⁺ (ион гидроксония).</p>
        <div class="formula-box">H<sup>+</sup> + H<sub>2</sub>O → H<sub>3</sub>O<sup>+</sup></div>
        <p class="paragraph">Именно поэтому в уравнениях диссоциации иногда пишут H₃O⁺ вместо H⁺ (для краткости обычно оставляют H⁺).</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔄</span> Обратимость диссоциации</div>
        <p class="paragraph">Диссоциация слабых электролитов — обратимый процесс. В растворе одновременно есть ионы и нераспавшиеся молекулы:</p>
        <div class="formula-box">CH<sub>3</sub>COOH ⇄ CH<sub>3</sub>COO<sup>-</sup> + H<sup>+</sup></div>
        <p class="paragraph">Сильные электролиты в разбавленных растворах диссоциируют практически полностью:</p>
        <div class="formula-box">NaCl → Na<sup>+</sup> + Cl<sup>-</sup></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Значение теории</div>
        <ul class="theory-list">
          <li>Объясняет, почему растворы электролитов проводят ток.</li>
          <li>Объясняет общие свойства кислот, оснований, солей.</li>
          <li>Позволяет писать ионные уравнения реакций.</li>
          <li>Объясняет явления гидролиза, буферных растворов, осмоса.</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Напишите уравнение диссоциации K₃PO₄.<br>
        <b>Решение:</b> K₃PO₄ → 3K⁺ + PO₄³⁻.<br><br>
        2. Какие ионы образуются при диссоциации H₂SO₄?<br>
        <b>Решение:</b> 2H⁺ и SO₄²⁻.<br><br>
        3. Какие из ионов — катионы: Na⁺, Cl⁻, SO₄²⁻, Ca²⁺, NO₃⁻?<br>
        <b>Решение:</b> Na⁺, Ca²⁺.<br><br>
        4. Почему раствор сахара не проводит ток?<br>
        <b>Решение:</b> Сахар — неэлектролит, в воде не распадается на ионы.
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-2-3': {
    title: '§ 3. Свойства кислот как электролитов',
    sub: 'Глава 2. Химические реакции в растворах',
    html: `
      <p class="paragraph">Все кислоты в водном растворе диссоциируют, давая катионы водорода H⁺ (точнее, H₃O⁺). Общие свойства кислот обусловлены именно H⁺.</p>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Что такое кислота с точки зрения ТЭД</div>
        <div class="definition"><span class="term">Кислота (по Аррениусу)</span> — электролит, диссоциирующий с образованием только катионов H⁺ в качестве положительных ионов.</div>
        <div class="formula-box">HCl → H<sup>+</sup> + Cl<sup>-</sup></div>
        <div class="formula-box">HNO<sub>3</sub> → H<sup>+</sup> + NO<sub>3</sub><sup>-</sup></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🎨</span> Действие на индикаторы</div>
        <div class="table-wrap"><table>
          <tr><th>Индикатор</th><th>Цвет в кислоте</th></tr>
          <tr><td>Лакмус</td><td>Красный</td></tr>
          <tr><td>Метилоранж</td><td>Розовый</td></tr>
          <tr><td>Фенолфталеин</td><td>Бесцветный</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства</div>
        <p class="paragraph"><b>1. + металл (до H в ряду активности):</b></p>
        <div class="formula-box">Zn + 2HCl → ZnCl<sub>2</sub> + H<sub>2</sub>↑</div>
        <div class="formula-box">Fe + H<sub>2</sub>SO<sub>4</sub> → FeSO<sub>4</sub> + H<sub>2</sub>↑</div>

        <p class="paragraph"><b>2. + основный оксид:</b></p>
        <div class="formula-box">CuO + H<sub>2</sub>SO<sub>4</sub> → CuSO<sub>4</sub> + H<sub>2</sub>O</div>

        <p class="paragraph"><b>3. + основание (нейтрализация):</b></p>
        <div class="formula-box">NaOH + HCl → NaCl + H<sub>2</sub>O</div>
        <div class="formula-box">Ca(OH)<sub>2</sub> + 2HNO<sub>3</sub> → Ca(NO<sub>3</sub>)<sub>2</sub> + 2H<sub>2</sub>O</div>

        <p class="paragraph"><b>4. + соль</b> (если образуется газ или осадок):</p>
        <div class="formula-box">CaCO<sub>3</sub> + 2HCl → CaCl<sub>2</sub> + H<sub>2</sub>O + CO<sub>2</sub>↑</div>
        <div class="formula-box">AgNO<sub>3</sub> + HCl → AgCl↓ + HNO<sub>3</sub></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> В ионном виде</div>
        <p class="paragraph">Реакции кислот в растворах — это реакции ионов H⁺ с другими ионами.</p>
        <div class="formula-box">H<sup>+</sup> + OH<sup>-</sup> → H<sub>2</sub>O <span class="eq">(нейтрализация)</span></div>
        <div class="formula-box">2H<sup>+</sup> + CO<sub>3</sub><sup>2-</sup> → H<sub>2</sub>O + CO<sub>2</sub>↑</div>
        <div class="formula-box">2H<sup>+</sup> + S<sup>2-</sup> → H<sub>2</sub>S↑</div>
        <div class="formula-box">H<sup>+</sup> + Ag<sup>+</sup> + Cl<sup>-</sup> → AgCl↓ + H<sup>+</sup> <span class="eq">(сокращённо: Ag⁺ + Cl⁻ → AgCl↓)</span></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Важнейшие кислоты</div>
        <div class="table-wrap"><table>
          <tr><th>Кислота</th><th>Формула</th><th>Сила</th><th>Соли</th></tr>
          <tr><td>Соляная</td><td>HCl</td><td>Сильная</td><td>Хлориды</td></tr>
          <tr><td>Серная</td><td>H₂SO₄</td><td>Сильная</td><td>Сульфаты</td></tr>
          <tr><td>Азотная</td><td>HNO₃</td><td>Сильная</td><td>Нитраты</td></tr>
          <tr><td>Фосфорная</td><td>H₃PO₄</td><td>Средней силы</td><td>Фосфаты</td></tr>
          <tr><td>Угольная</td><td>H₂CO₃</td><td>Слабая</td><td>Карбонаты</td></tr>
          <tr><td>Сероводородная</td><td>H₂S</td><td>Слабая</td><td>Сульфиды</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Ряд активности металлов</div>
        <div class="formula-box">Li → K → Ba → Ca → Na → Mg → Al → Mn → Zn → Cr → Fe → Ni → Sn → Pb → <b>(H)</b> → Cu → Hg → Ag → Pt → Au</div>
        <p class="paragraph">Металлы левее водорода вытесняют его из разбавленных кислот. Правее — не реагируют.</p>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Напишите реакцию соляной кислоты с магнием.<br>
        <b>Решение:</b> Mg + 2HCl → MgCl₂ + H₂↑.<br><br>
        2. Напишите реакцию нейтрализации H₂SO₄ и KOH в молекулярном и ионном виде.<br>
        <b>Решение:</b> H₂SO₄ + 2KOH → K₂SO₄ + 2H₂O; 2H⁺ + 2OH⁻ → 2H₂O.<br><br>
        3. Почему медь не реагирует с соляной кислотой?<br>
        <b>Решение:</b> Cu правее H в ряду активности.<br><br>
        4. Напишите реакцию HCl с CaCO₃.<br>
        <b>Решение:</b> CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑.
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-2-4': {
    title: '§ 4. Свойства оснований как электролитов',
    sub: 'Глава 2. Химические реакции в растворах',
    html: `
      <p class="paragraph">Основания в растворе диссоциируют, давая гидроксид-ионы OH⁻. Общие свойства оснований (особенно щелочей) обусловлены именно OH⁻.</p>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Что такое основание с точки зрения ТЭД</div>
        <div class="definition"><span class="term">Основание (по Аррениусу)</span> — электролит, диссоциирующий с образованием только анионов OH⁻ в качестве отрицательных ионов.</div>
        <div class="formula-box">NaOH → Na<sup>+</sup> + OH<sup>-</sup></div>
        <div class="formula-box">Ba(OH)<sub>2</sub> → Ba<sup>2+</sup> + 2OH<sup>-</sup></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🎨</span> Действие на индикаторы</div>
        <div class="table-wrap"><table>
          <tr><th>Индикатор</th><th>Цвет в щёлочи</th></tr>
          <tr><td>Лакмус</td><td>Синий</td></tr>
          <tr><td>Метилоранж</td><td>Жёлтый</td></tr>
          <tr><td>Фенолфталеин</td><td>Малиновый</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства щелочей</div>
        <p class="paragraph"><b>1. + кислота (нейтрализация):</b></p>
        <div class="formula-box">NaOH + HCl → NaCl + H<sub>2</sub>O</div>
        <div class="formula-box">KOH + HNO<sub>3</sub> → KNO<sub>3</sub> + H<sub>2</sub>O</div>

        <p class="paragraph"><b>2. + кислотный оксид:</b></p>
        <div class="formula-box">2NaOH + CO<sub>2</sub> → Na<sub>2</sub>CO<sub>3</sub> + H<sub>2</sub>O</div>
        <div class="formula-box">2KOH + SO<sub>3</sub> → K<sub>2</sub>SO<sub>4</sub> + H<sub>2</sub>O</div>

        <p class="paragraph"><b>3. + соль</b> (если образуется осадок):</p>
        <div class="formula-box">2NaOH + CuSO<sub>4</sub> → Cu(OH)<sub>2</sub>↓ + Na<sub>2</sub>SO<sub>4</sub></div>
        <div class="formula-box">3KOH + FeCl<sub>3</sub> → Fe(OH)<sub>3</sub>↓ + 3KCl</div>

        <p class="paragraph"><b>4. + амфотерный оксид или гидроксид:</b></p>
        <div class="formula-box">2NaOH + Al<sub>2</sub>O<sub>3</sub> → 2NaAlO<sub>2</sub> + H<sub>2</sub>O</div>
        <div class="formula-box">NaOH + Al(OH)<sub>3</sub> → Na[Al(OH)<sub>4</sub>]</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> В ионном виде</div>
        <div class="formula-box">Cu<sup>2+</sup> + 2OH<sup>-</sup> → Cu(OH)<sub>2</sub>↓ <span class="eq">(голубой осадок)</span></div>
        <div class="formula-box">Fe<sup>3+</sup> + 3OH<sup>-</sup> → Fe(OH)<sub>3</sub>↓ <span class="eq">(бурый осадок)</span></div>
        <div class="formula-box">Fe<sup>2+</sup> + 2OH<sup>-</sup> → Fe(OH)<sub>2</sub>↓ <span class="eq">(серо-зелёный осадок)</span></div>
        <div class="formula-box">Al<sup>3+</sup> + 3OH<sup>-</sup> → Al(OH)<sub>3</sub>↓ <span class="eq">(белый студенистый осадок)</span></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Нерастворимые основания</div>
        <p class="paragraph">Не диссоциируют на ионы, но реагируют с кислотами:</p>
        <div class="formula-box">Cu(OH)<sub>2</sub> + 2HCl → CuCl<sub>2</sub> + 2H<sub>2</sub>O</div>
        <div class="formula-box">Fe(OH)<sub>3</sub> + 3HNO<sub>3</sub> → Fe(NO<sub>3</sub>)<sub>3</sub> + 3H<sub>2</sub>O</div>
        <p class="paragraph">При нагревании разлагаются:</p>
        <div class="formula-box">Cu(OH)<sub>2</sub> → CuO + H<sub>2</sub>O</div>
        <div class="formula-box">2Fe(OH)<sub>3</sub> → Fe<sub>2</sub>O<sub>3</sub> + 3H<sub>2</sub>O</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Важнейшие основания</div>
        <div class="table-wrap"><table>
          <tr><th>Формула</th><th>Название</th><th>Растворимость</th><th>Применение</th></tr>
          <tr><td>NaOH</td><td>Гидроксид натрия</td><td>Щёлочь</td><td>Мыло, бумага</td></tr>
          <tr><td>KOH</td><td>Гидроксид калия</td><td>Щёлочь</td><td>Электролиты</td></tr>
          <tr><td>Ca(OH)₂</td><td>Гидроксид кальция</td><td>Малорастворим</td><td>Строительство</td></tr>
          <tr><td>Ba(OH)₂</td><td>Гидроксид бария</td><td>Щёлочь</td><td>Реактив</td></tr>
          <tr><td>Cu(OH)₂</td><td>Гидроксид меди(II)</td><td>Нерастворим</td><td>Реактив</td></tr>
          <tr><td>Fe(OH)₃</td><td>Гидроксид железа(III)</td><td>Нерастворим</td><td>Реактив</td></tr>
        </table></div>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Напишите реакцию NaOH с CO₂.<br>
        <b>Решение:</b> 2NaOH + CO₂ → Na₂CO₃ + H₂O.<br><br>
        2. Напишите реакцию CuSO₄ + NaOH в молекулярном и ионном виде.<br>
        <b>Решение:</b> CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄; Cu²⁺ + 2OH⁻ → Cu(OH)₂↓.<br><br>
        3. Что происходит при нагревании Fe(OH)₃?<br>
        <b>Решение:</b> 2Fe(OH)₃ → Fe₂O₃ + 3H₂O.<br><br>
        4. Классифицируйте по растворимости: LiOH, Cu(OH)₂, Ba(OH)₂, Mg(OH)₂.<br>
        <b>Решение:</b> растворимые — LiOH, Ba(OH)₂; нерастворимые — Cu(OH)₂, Mg(OH)₂.
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-2-5': {
    title: '§ 5. Свойства солей как электролитов',
    sub: 'Глава 2. Химические реакции в растворах',
    html: `
      <p class="paragraph">Соли в растворах диссоциируют на катионы металлов (или NH₄⁺) и анионы кислотных остатков. Химические свойства солей — это свойства их ионов.</p>

      <div class="card">
        <div class="card-title"><span class="num">⚡</span> Схемы диссоциации</div>
        <div class="formula-box">NaCl → Na<sup>+</sup> + Cl<sup>-</sup></div>
        <div class="formula-box">Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> → 2Al<sup>3+</sup> + 3SO<sub>4</sub><sup>2-</sup></div>
        <div class="formula-box">NaHCO<sub>3</sub> → Na<sup>+</sup> + HCO<sub>3</sub><sup>-</sup></div>
        <div class="formula-box">KAl(SO<sub>4</sub>)<sub>2</sub> → K<sup>+</sup> + Al<sup>3+</sup> + 2SO<sub>4</sub><sup>2-</sup></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства</div>
        <p class="paragraph"><b>1. + металл</b> (более активный):</p>
        <div class="formula-box">Fe + CuSO<sub>4</sub> → FeSO<sub>4</sub> + Cu</div>
        <div class="formula-box">Zn + Pb(NO<sub>3</sub>)<sub>2</sub> → Zn(NO<sub>3</sub>)<sub>2</sub> + Pb</div>

        <p class="paragraph"><b>2. + кислота</b> (если газ или осадок):</p>
        <div class="formula-box">CaCO<sub>3</sub> + 2HCl → CaCl<sub>2</sub> + H<sub>2</sub>O + CO<sub>2</sub>↑</div>
        <div class="formula-box">BaCl<sub>2</sub> + H<sub>2</sub>SO<sub>4</sub> → BaSO<sub>4</sub>↓ + 2HCl</div>

        <p class="paragraph"><b>3. + щёлочь</b> (если образуется осадок или газ):</p>
        <div class="formula-box">CuSO<sub>4</sub> + 2NaOH → Cu(OH)<sub>2</sub>↓ + Na<sub>2</sub>SO<sub>4</sub></div>
        <div class="formula-box">NH<sub>4</sub>Cl + NaOH → NaCl + NH<sub>3</sub>↑ + H<sub>2</sub>O</div>

        <p class="paragraph"><b>4. + другая соль</b> (если образуется осадок):</p>
        <div class="formula-box">AgNO<sub>3</sub> + NaCl → AgCl↓ + NaNO<sub>3</sub></div>
        <div class="formula-box">BaCl<sub>2</sub> + Na<sub>2</sub>SO<sub>4</sub> → BaSO<sub>4</sub>↓ + 2NaCl</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Качественные реакции на ионы</div>
        <div class="table-wrap"><table>
          <tr><th>Ион</th><th>Реагент</th><th>Признак</th></tr>
          <tr><td>Cl⁻</td><td>AgNO₃</td><td>Белый осадок AgCl</td></tr>
          <tr><td>Br⁻</td><td>AgNO₃</td><td>Кремовый осадок AgBr</td></tr>
          <tr><td>I⁻</td><td>AgNO₃</td><td>Жёлтый осадок AgI</td></tr>
          <tr><td>SO₄²⁻</td><td>BaCl₂</td><td>Белый осадок BaSO₄</td></tr>
          <tr><td>CO₃²⁻</td><td>HCl</td><td>Газ CO₂ (мутит известковую воду)</td></tr>
          <tr><td>PO₄³⁻</td><td>AgNO₃</td><td>Жёлтый осадок Ag₃PO₄</td></tr>
          <tr><td>S²⁻</td><td>Pb(NO₃)₂</td><td>Чёрный осадок PbS</td></tr>
          <tr><td>SiO₃²⁻</td><td>HCl</td><td>Студенистый осадок H₂SiO₃</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> В ионном виде</div>
        <div class="formula-box">Ag<sup>+</sup> + Cl<sup>-</sup> → AgCl↓</div>
        <div class="formula-box">Ba<sup>2+</sup> + SO<sub>4</sub><sup>2-</sup> → BaSO<sub>4</sub>↓</div>
        <div class="formula-box">Cu<sup>2+</sup> + 2OH<sup>-</sup> → Cu(OH)<sub>2</sub>↓</div>
        <div class="formula-box">CO<sub>3</sub><sup>2-</sup> + 2H<sup>+</sup> → H<sub>2</sub>O + CO<sub>2</sub>↑</div>
        <div class="formula-box">NH<sub>4</sub><sup>+</sup> + OH<sup>-</sup> → NH<sub>3</sub>↑ + H<sub>2</sub>O</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Условия протекания реакций обмена в растворах</div>
        <p class="paragraph">Реакция идёт до конца, если образуется:</p>
        <ul class="theory-list">
          <li><b>Осадок</b> — нерастворимое вещество (AgCl, BaSO₄, Cu(OH)₂).</li>
          <li><b>Газ</b> — CO₂, SO₂, NH₃, H₂S.</li>
          <li><b>Вода</b> — образуется при нейтрализации.</li>
          <li><b>Слабый электролит</b> — CH₃COOH, H₂CO₃.</li>
        </ul>
        <div class="note">Если все вещества растворимы и не образуется ни осадка, ни газа, ни воды — реакция не идёт.</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Применение солей</div>
        <div class="table-wrap"><table>
          <tr><th>Соль</th><th>Применение</th></tr>
          <tr><td>NaCl</td><td>Пища, консервант, сырьё для химии</td></tr>
          <tr><td>Na₂CO₃</td><td>Стекло, мыло, стирка</td></tr>
          <tr><td>NaHCO₃</td><td>Пищевая сода, огнетушители</td></tr>
          <tr><td>KNO₃</td><td>Удобрения, чёрный порох</td></tr>
          <tr><td>AgNO₃</td><td>Ляпис, реактив</td></tr>
          <tr><td>CaCO₃</td><td>Стройматериал, стекло</td></tr>
        </table></div>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Напишите молекулярное и ионное уравнение AgNO₃ + NaCl.<br>
        <b>Решение:</b> AgNO₃ + NaCl → AgCl↓ + NaNO₃; Ag⁺ + Cl⁻ → AgCl↓.<br><br>
        2. С какими солями реагирует BaCl₂: Na₂SO₄, KNO₃, AgNO₃?<br>
        <b>Решение:</b> с Na₂SO₄ (BaSO₄↓) и AgNO₃ (AgCl↓).<br><br>
        3. Какая качественная реакция на ион CO₃²⁻?<br>
        <b>Решение:</b> добавление кислоты → выделяется CO₂, который мутит известковую воду.<br><br>
        4. Как определить в растворе Cl⁻?<br>
        <b>Решение:</b> добавить AgNO₃ → белый осадок AgCl.
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-2-6': {
    title: '§ 6. Гидролиз солей',
    sub: 'Глава 2. Химические реакции в растворах',
    html: `
      <div class="definition"><span class="term">Гидролиз солей</span> — взаимодействие ионов соли с ионами воды, приводящее к изменению pH среды.</div>

      <div class="card">
        <div class="card-title"><span class="num">📚</span> Почему идёт гидролиз</div>
        <p class="paragraph">Вода — слабый электролит, диссоциирует на H⁺ и OH⁻. Ионы соли связывают один из этих ионов, нарушая равновесие воды. Среда сдвигается в кислую или щелочную сторону.</p>
        <div class="formula-box">H<sub>2</sub>O ⇄ H<sup>+</sup> + OH<sup>-</sup></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">1️⃣</span> Соль сильного основания и сильной кислоты</div>
        <p class="paragraph"><b>Не гидролизуется.</b> Среда нейтральная (pH = 7).</p>
        <p class="paragraph">Примеры: NaCl, KNO₃, BaCl₂, Na₂SO₄.</p>
        <div class="formula-box">NaCl → Na<sup>+</sup> + Cl<sup>-</sup> — ни Na⁺, ни Cl⁻ не связывают ионы воды</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">2️⃣</span> Соль слабого основания и сильной кислоты</div>
        <p class="paragraph"><b>Гидролиз по катиону.</b> Среда кислая (pH &lt; 7).</p>
        <p class="paragraph">Примеры: NH₄Cl, CuCl₂, ZnCl₂, FeCl₃, AlCl₃.</p>
        <div class="formula-box">NH<sub>4</sub>Cl + H<sub>2</sub>O ⇄ NH<sub>4</sub>OH + HCl</div>
        <div class="formula-box">NH<sub>4</sub><sup>+</sup> + H<sub>2</sub>O ⇄ NH<sub>4</sub>OH + H<sup>+</sup></div>
        <p class="paragraph">Катион слабого основания связывает OH⁻, в растворе остаётся H⁺ → среда кислая.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">3️⃣</span> Соль сильного основания и слабой кислоты</div>
        <p class="paragraph"><b>Гидролиз по аниону.</b> Среда щелочная (pH &gt; 7).</p>
        <p class="paragraph">Примеры: Na₂CO₃, K₂S, Na₂SO₃, CH₃COONa, Na₃PO₄.</p>
        <div class="formula-box">Na<sub>2</sub>CO<sub>3</sub> + H<sub>2</sub>O ⇄ NaHCO<sub>3</sub> + NaOH</div>
        <div class="formula-box">CO<sub>3</sub><sup>2-</sup> + H<sub>2</sub>O ⇄ HCO<sub>3</sub><sup>-</sup> + OH<sup>-</sup></div>
        <p class="paragraph">Анион слабой кислоты связывает H⁺, в растворе остаётся OH⁻ → среда щелочная.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">4️⃣</span> Соль слабого основания и слабой кислоты</div>
        <p class="paragraph"><b>Полный гидролиз.</b> Среда зависит от силы кислоты и основания.</p>
        <p class="paragraph">Примеры: CH₃COONH₄, (NH₄)₂CO₃, Al₂S₃.</p>
        <div class="formula-box">CH<sub>3</sub>COONH<sub>4</sub> + H<sub>2</sub>O ⇄ CH<sub>3</sub>COOH + NH<sub>4</sub>OH</div>
        <p class="paragraph">Если основание и кислота одинаковой силы — pH = 7. Если кислота сильнее — среда кислая, если основание сильнее — щелочная.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Сводная таблица</div>
        <div class="table-wrap"><table>
          <tr><th>Тип соли</th><th>Гидролиз</th><th>pH</th><th>Примеры</th></tr>
          <tr><td>Сильное + сильное</td><td>Не идёт</td><td>7</td><td>NaCl, KNO₃</td></tr>
          <tr><td>Слабое + сильное</td><td>По катиону</td><td>&lt; 7</td><td>NH₄Cl, CuCl₂</td></tr>
          <tr><td>Сильное + слабое</td><td>По аниону</td><td>&gt; 7</td><td>Na₂CO₃, CH₃COONa</td></tr>
          <tr><td>Слабое + слабое</td><td>Полный</td><td>≈ 7</td><td>CH₃COONH₄</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌡️</span> Условия усиления гидролиза</div>
        <ul class="theory-list">
          <li><b>Разбавление раствора</b> — больше воды, больше гидролиз.</li>
          <li><b>Нагревание</b> — гидролиз эндотермический, при нагревании усиливается.</li>
          <li><b>Связывание продуктов</b> — например, добавление кислоты (для гидролиза по аниону) или щёлочи (для гидролиза по катиону).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Значение гидролиза</div>
        <ul class="theory-list">
          <li>В природе — формирование почвы, выветривание горных пород.</li>
          <li>В технике — очистка воды, получение лекарств.</li>
          <li>В быту — стирка мылом (гидролиз в щелочной среде), изготовление теста.</li>
          <li>В организме — переваривание пищи, работа ферментов.</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Определите среду раствора CuSO₄.<br>
        <b>Решение:</b> CuSO₄ — соль слабого основания Cu(OH)₂ и сильной кислоты H₂SO₄. Гидролиз по катиону. Среда кислая, pH &lt; 7.<br><br>
        2. Какая среда у раствора Na₂S?<br>
        <b>Решение:</b> Na₂S — соль сильного основания NaOH и слабой кислоты H₂S. Гидролиз по аниону. Среда щелочная, pH &gt; 7.<br><br>
        3. Какие из солей гидролизуются: KCl, FeCl₃, NaNO₃, K₂CO₃?<br>
        <b>Решение:</b> FeCl₃ (по катиону), K₂CO₃ (по аниону). KCl и NaNO₃ — нет.<br><br>
        4. Почему раствор Na₂CO₃ мылкий на ощупь?<br>
        <b>Решение:</b> Из-за гидролиза по аниону в растворе есть OH⁻ — среда щелочная.
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

   /* ============ ГЛАВА 3 (РАСШИРЕННАЯ) ============ */

  'ch9-3-1': {
    title: '§ 1. Общая характеристика неметаллов',
    sub: 'Глава 3. Неметаллы и их соединения',
    html: `
      <div class="paragraph">Неметаллы расположены в правой верхней части таблицы Менделеева. Они принимают электроны, проявляют окислительные свойства.</div>

      <div class="card">
        <div class="card-title"><span class="num">📋</span> Положение в таблице</div>
        <ul class="theory-list">
          <li>Внешние уровни содержат 4–7 электронов (у B — 3, у H — 1).</li>
          <li>Все неметаллы — p-элементы, кроме H и He (s-элементы).</li>
          <li>В периоде неметаллические свойства усиливаются слева направо.</li>
          <li>В группе A — ослабевают сверху вниз.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Сравнение с металлами</div>
        <div class="table-wrap"><table>
          <tr><th>Свойство</th><th>Металлы</th><th>Неметаллы</th></tr>
          <tr><td>Электроны на внешнем уровне</td><td>1–3</td><td>4–7</td></tr>
          <tr><td>Способность к e⁻</td><td>Отдают</td><td>Принимают</td></tr>
          <tr><td>Роль в ОВР</td><td>Восстановители</td><td>Окислители (иногда восстановители)</td></tr>
          <tr><td>Электропроводность</td><td>Проводят</td><td>Не проводят (кроме графита)</td></tr>
          <tr><td>Блеск</td><td>Металлический</td><td>Матовый, разный</td></tr>
          <tr><td>Ковкость</td><td>Ковкие</td><td>Хрупкие</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚛️</span> Строение молекул</div>
        <ul class="theory-list">
          <li><b>Двухатомные</b>: H₂, O₂, N₂, F₂, Cl₂, Br₂, I₂.</li>
          <li><b>Одноатомные</b>: благородные газы He, Ne, Ar.</li>
          <li><b>Многоатомные</b>: P₄, S₈, O₃.</li>
          <li><b>Кристаллы</b>: C (алмаз), Si, B — атомные решётки.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">💎</span> Физические свойства</div>
        <ul class="theory-list">
          <li>Агрегатное состояние: газы (O₂, N₂, Cl₂), жидкости (Br₂), твёрдые (S, P, I₂, C, Si).</li>
          <li>Плохо проводят ток (кроме графита).</li>
          <li>Хрупкие при обычных условиях.</li>
          <li>Разные температуры плавления: от −219 °C (N₂) до 3550 °C (алмаз).</li>
          <li>Не имеют металлического блеска (кроме I₂, Si).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства</div>
        <p class="paragraph"><b>Реакции с металлами:</b></p>
        <div class="formula-box">2Na + Cl<sub>2</sub> → 2NaCl</div>
        <div class="formula-box">2Ca + O<sub>2</sub> → 2CaO</div>
        <p class="paragraph"><b>Реакции с водородом:</b></p>
        <div class="formula-box">H<sub>2</sub> + Cl<sub>2</sub> → 2HCl</div>
        <div class="formula-box">N<sub>2</sub> + 3H<sub>2</sub> ⇄ 2NH<sub>3</sub></div>
        <p class="paragraph"><b>Реакции с кислородом:</b></p>
        <div class="formula-box">S + O<sub>2</sub> → SO<sub>2</sub></div>
        <div class="formula-box">4P + 5O<sub>2</sub> → 2P<sub>2</sub>O<sub>5</sub></div>
        <p class="paragraph"><b>Окислители</b> (принимают e⁻): F₂, Cl₂, O₂, Br₂.</p>
        <p class="paragraph"><b>Восстановители</b> (отдают e⁻) при реакции с более сильными окислителями: H₂, C, S, N₂.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Распространение в природе</div>
        <ul class="theory-list">
          <li><b>Кислород</b> — самый распространённый элемент в земной коре (~49%).</li>
          <li><b>Кремний</b> — второй (~26%).</li>
          <li><b>Азот и кислород</b> — основные компоненты воздуха.</li>
          <li><b>Углерод</b> — основа органической жизни.</li>
          <li><b>Водород</b> — входит в состав воды и всех органических веществ.</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Какие из элементов — неметаллы: Na, Cl, O, Fe, N, S, Cu, C?<br>
        <b>Решение:</b> Cl, O, N, S, C.<br><br>
        2. Почему неметаллы — окислители?<br>
        <b>Решение:</b> У них на внешнем уровне 4–7 электронов, они стремятся принять недостающие.<br><br>
        3. Какое простое вещество — неметалл — проводит ток?<br>
        <b>Решение:</b> Графит (аллотропная модификация углерода).
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
        <div class="card-title"><span class="num">📋</span> Общая характеристика</div>
        <div class="table-wrap"><table>
          <tr><th>Элемент</th><th>Простое вещество</th><th>Цвет</th><th>Агрегатное состояние</th><th>t° кип.</th></tr>
          <tr><td>F</td><td>F₂</td><td>Бледно-жёлтый</td><td>Газ</td><td>−188 °C</td></tr>
          <tr><td>Cl</td><td>Cl₂</td><td>Жёлто-зелёный</td><td>Газ</td><td>−34 °C</td></tr>
          <tr><td>Br</td><td>Br₂</td><td>Бурый</td><td>Жидкость</td><td>+59 °C</td></tr>
          <tr><td>I</td><td>I₂</td><td>Тёмно-фиолетовый</td><td>Твёрдый</td><td>+184 °C (субл.)</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚡</span> Окислительная активность</div>
        <div class="formula-box">F₂ > Cl₂ > Br₂ > I₂</div>
        <p class="paragraph">Каждый галоген вытесняет менее активный из его солей:</p>
        <div class="formula-box">Cl<sub>2</sub> + 2NaBr → 2NaCl + Br<sub>2</sub></div>
        <div class="formula-box">Br<sub>2</sub> + 2KI → 2KBr + I<sub>2</sub></div>
        <div class="formula-box">Cl<sub>2</sub> + 2KI → 2KCl + I<sub>2</sub></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства</div>
        <p class="paragraph"><b>С металлами:</b></p>
        <div class="formula-box">2Na + Cl<sub>2</sub> → 2NaCl</div>
        <div class="formula-box">2Fe + 3Cl<sub>2</sub> → 2FeCl<sub>3</sub></div>
        <div class="formula-box">Cu + Cl<sub>2</sub> → CuCl<sub>2</sub></div>
        <p class="paragraph"><b>С водородом:</b></p>
        <div class="formula-box">H<sub>2</sub> + Cl<sub>2</sub> → 2HCl (на свету — со взрывом)</div>
        <div class="formula-box">H<sub>2</sub> + F<sub>2</sub> → 2HF (взрыв при обычных условиях)</div>
        <p class="paragraph"><b>С водой:</b></p>
        <div class="formula-box">Cl<sub>2</sub> + H<sub>2</sub>O ⇄ HCl + HClO</div>
        <p class="paragraph"><b>Со щелочами:</b></p>
        <div class="formula-box">Cl<sub>2</sub> + 2NaOH → NaCl + NaClO + H<sub>2</sub>O</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Применение галогенов</div>
        <ul class="theory-list">
          <li><b>Cl₂</b> — обеззараживание воды, отбеливание тканей и бумаги, производство HCl и пластмасс.</li>
          <li><b>F₂</b> — производство фторопластов (тефлон), фреонов.</li>
          <li><b>Br₂</b> — лекарства, фотоматериалы.</li>
          <li><b>I₂</b> — медицина (спиртовой раствор), аналитическая химия.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚠️</span> Токсичность</div>
        <p class="paragraph">F₂, Cl₂, Br₂ — ядовитые газы с резким запахом. Cl₂ — удушающий газ, использовался как боевое отравляющее вещество в Первую мировую войну. I₂ — твёрдый, менее опасен, но пары ядовиты.</p>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Какой галоген самый активный?<br>
        <b>Решение:</b> Фтор F₂.<br><br>
        2. Напишите реакцию вытеснения брома хлором из NaBr.<br>
        <b>Решение:</b> Cl₂ + 2NaBr → 2NaCl + Br₂.<br><br>
        3. Какой цвет у Cl₂, Br₂, I₂?<br>
        <b>Решение:</b> Cl₂ — жёлто-зелёный, Br₂ — бурый, I₂ — тёмно-фиолетовый.<br><br>
        4. Почему галогены — окислители?<br>
        <b>Решение:</b> На внешнем уровне 7 электронов, легко принимают 1 e⁻.
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-3-3': {
    title: '§ 3. Соединения галогенов',
    sub: 'Глава 3. Неметаллы и их соединения',
    html: `
      <div class="card">
        <div class="card-title"><span class="num">1️⃣</span> Галогеноводороды HHal</div>
        <p class="paragraph">Бесцветные газы с резким запахом, хорошо растворимы в воде. Их водные растворы — кислоты.</p>
        <div class="formula-box">HF, HCl, HBr, HI</div>
        <p class="paragraph"><b>Сила кислот растёт:</b></p>
        <div class="formula-box">HF &lt; HCl &lt; HBr &lt; HI</div>
        <p class="paragraph">HF — слабая (прочная связь H−F), остальные — сильные.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">2️⃣</span> Соляная кислота HCl</div>
        <ul class="theory-list">
          <li>Сильная одноосновная кислота.</li>
          <li>Диссоциирует полностью: HCl → H⁺ + Cl⁻.</li>
          <li>В промышленности получают синтезом: H₂ + Cl₂ → 2HCl.</li>
          <li>Применяется для травления металлов, в медицине (входит в состав желудочного сока).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">3️⃣</span> Соли галогеноводородных кислот</div>
        <div class="table-wrap"><table>
          <tr><th>Кислота</th><th>Соли</th><th>Примеры</th></tr>
          <tr><td>HF</td><td>Фториды</td><td>NaF, CaF₂</td></tr>
          <tr><td>HCl</td><td>Хлориды</td><td>NaCl, KCl, CaCl₂</td></tr>
          <tr><td>HBr</td><td>Бромиды</td><td>NaBr, KBr</td></tr>
          <tr><td>HI</td><td>Иодиды</td><td>KI, NaI</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Качественные реакции</div>
        <p class="paragraph">С AgNO₃ — образуются осадки разного цвета:</p>
        <div class="formula-box">AgNO<sub>3</sub> + NaCl → AgCl↓ (белый) + NaNO<sub>3</sub></div>
        <div class="formula-box">AgNO<sub>3</sub> + NaBr → AgBr↓ (кремовый) + NaNO<sub>3</sub></div>
        <div class="formula-box">AgNO<sub>3</sub> + KI → AgI↓ (жёлтый) + KNO<sub>3</sub></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">4️⃣</span> Кислородсодержащие кислоты хлора</div>
        <div class="table-wrap"><table>
          <tr><th>Формула</th><th>Название</th><th>Соли</th></tr>
          <tr><td>HClO</td><td>Хлорноватистая</td><td>Гипохлориты (NaClO)</td></tr>
          <tr><td>HClO₂</td><td>Хлористая</td><td>Хлориты</td></tr>
          <tr><td>HClO₃</td><td>Хлорноватая</td><td>Хлораты (KClO₃)</td></tr>
          <tr><td>HClO₄</td><td>Хлорная</td><td>Перхлораты</td></tr>
        </table></div>
        <p class="paragraph">Сила кислот растёт: HClO &lt; HClO₂ &lt; HClO₃ &lt; HClO₄.</p>
        <div class="note">NaClO — «белизна», KClO₃ — бертолетова соль (в спичках, пиротехнике).</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Применение соединений галогенов</div>
        <ul class="theory-list">
          <li>NaCl — поваренная соль, пища, промышленность.</li>
          <li>AgCl, AgBr — фотоматериалы.</li>
          <li>NaClO — отбеливатель, дезинфекция.</li>
          <li>CaF₂ — флюорит, оптика, металлургия.</li>
          <li>KI — медицина (при радиации), реактив.</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Как отличить хлорид от иодида?<br>
        <b>Решение:</b> Добавить AgNO₃: AgCl — белый, AgI — жёлтый.<br><br>
        2. Напишите реакцию HBr с NaOH.<br>
        <b>Решение:</b> HBr + NaOH → NaBr + H₂O.<br><br>
        3. Какая кислота сильнее: HCl или HI?<br>
        <b>Решение:</b> HI — сильнее, чем HCl.<br><br>
        4. Какую соль используют как пищевую?<br>
        <b>Решение:</b> NaCl.
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
        <div class="card-title"><span class="num">📋</span> Общая характеристика</div>
        <ul class="theory-list">
          <li>Бесцветная жидкость с резким запахом.</li>
          <li>Концентрированная «дымит» на воздухе.</li>
          <li>Хорошо растворяется в воде (до 38%).</li>
          <li>Диссоциирует полностью: HCl → H⁺ + Cl⁻.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства</div>
        <ul class="theory-list">
          <li><b>Индикаторы:</b> лакмус — красный, метилоранж — розовый.</li>
          <li><b>+ активные металлы:</b> Zn + 2HCl → ZnCl₂ + H₂↑</li>
          <li><b>+ оксиды металлов:</b> CuO + 2HCl → CuCl₂ + H₂O</li>
          <li><b>+ основания:</b> NaOH + HCl → NaCl + H₂O</li>
          <li><b>+ соли:</b> CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑</li>
          <li><b>+ AgNO₃:</b> AgNO₃ + HCl → AgCl↓ + HNO₃</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Качественная реакция на Cl⁻</div>
        <div class="formula-box">Ag<sup>+</sup> + Cl<sup>-</sup> → AgCl↓ (белый творожистый осадок)</div>
        <p class="paragraph">Осадок AgCl нерастворим в азотной кислоте HNO₃ (в отличие от Ag₂CO₃, Ag₂SO₄).</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Применение</div>
        <ul class="theory-list">
          <li>Травление металлов перед пайкой и гальванизацией.</li>
          <li>Получение хлоридов, лекарств.</li>
          <li>В медицине — как составная часть желудочного сока.</li>
          <li>В лабораториях — реактив.</li>
          <li>В нефтедобыче — для обработки скважин.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📜</span> Интересный факт</div>
        <p class="paragraph">Соляная кислота входит в состав желудочного сока человека. Её концентрация ~0,5%, pH желудка 1,5–2. Она помогает переваривать белки и убивает бактерии.</p>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Напишите реакцию HCl с магнием.<br>
        <b>Решение:</b> Mg + 2HCl → MgCl₂ + H₂↑.<br><br>
        2. Как определить Cl⁻ в растворе?<br>
        <b>Решение:</b> Добавить AgNO₃ → белый осадок AgCl.<br><br>
        3. Напишите реакцию нейтрализации HCl и KOH.<br>
        <b>Решение:</b> HCl + KOH → KCl + H₂O.<br><br>
        4. Почему медь не реагирует с HCl?<br>
        <b>Решение:</b> Cu стоит правее H в ряду активности.
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
        <div class="card-title"><span class="num">📊</span> Свойства элементов</div>
        <div class="table-wrap"><table>
          <tr><th>Элемент</th><th>Простое вещество</th><th>Свойства</th></tr>
          <tr><td>O</td><td>O₂ — газ</td><td>Окислитель, необходим для дыхания</td></tr>
          <tr><td>S</td><td>S₈ — жёлтое твёрдое</td><td>Хрупкое, не проводит ток</td></tr>
          <tr><td>Se</td><td>Se — серое твёрдое</td><td>Полупроводник</td></tr>
          <tr><td>Te</td><td>Te — серебристо-серое</td><td>Полупроводник</td></tr>
          <tr><td>Po</td><td>Po — мягкий металл</td><td>Радиоактивный</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚡</span> Окислительная активность</div>
        <p class="paragraph">Сверху вниз по группе окислительные свойства ослабевают:</p>
        <div class="formula-box">O<sub>2</sub> > S > Se > Te</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства серы</div>
        <ul class="theory-list">
          <li><b>+ металлы:</b> Fe + S → FeS</li>
          <li><b>+ кислород:</b> S + O₂ → SO₂</li>
          <li><b>+ водород:</b> H₂ + S → H₂S</li>
          <li><b>+ ртуть (при обычных условиях):</b> Hg + S → HgS</li>
          <li><b>+ щёлочи (при нагревании):</b> 3S + 6KOH → 2K₂S + K₂SO₃ + 3H₂O</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Применение</div>
        <ul class="theory-list">
          <li>Сера — производство H₂SO₄, вулканизация каучука, мази, спички.</li>
          <li>Se — фотоэлементы, стекло (обесцвечивание).</li>
          <li>Te — сплавы, полупроводники.</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Назовите 5 халькогенов.<br>
        <b>Решение:</b> O, S, Se, Te, Po.<br><br>
        2. Напишите реакцию серы с железом.<br>
        <b>Решение:</b> Fe + S → FeS.<br><br>
        3. Как сера реагирует с ртутью?<br>
        <b>Решение:</b> Hg + S → HgS (чёрный сульфид).
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
        <p class="paragraph">Твёрдое жёлтое вещество, нерастворима в воде, растворяется в сероуглероде CS₂.</p>
        <ul class="theory-list">
          <li>В природе — самородная, сульфиды (FeS₂, ZnS, PbS), сульфаты (CaSO₄·2H₂O).</li>
          <li>Степени окисления: −2, 0, +4, +6.</li>
          <li>Окислитель (при реакции с металлами) и восстановитель (с кислородом).</li>
          <li>Аллотропные модификации: ромбическая, моноклинная, пластическая.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">💨</span> Сероводород H₂S</div>
        <p class="paragraph">Бесцветный газ с запахом тухлых яиц, ядовит. Хорошо растворим в воде. Раствор — слабая кислота.</p>
        <div class="formula-box">H<sub>2</sub>S ⇄ H<sup>+</sup> + HS<sup>-</sup> ⇄ 2H<sup>+</sup> + S<sup>2-</sup></div>
        <p class="paragraph"><b>Свойства:</b></p>
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
        <div class="table-wrap"><table>
          <tr><th>Сульфид</th><th>Цвет</th><th>Растворимость</th></tr>
          <tr><td>Na₂S, K₂S</td><td>Белые</td><td>Растворимы</td></tr>
          <tr><td>FeS</td><td>Чёрный</td><td>Нерастворим</td></tr>
          <tr><td>CuS</td><td>Чёрный</td><td>Нерастворим</td></tr>
          <tr><td>PbS</td><td>Чёрный</td><td>Нерастворим</td></tr>
          <tr><td>ZnS</td><td>Белый</td><td>Нерастворим</td></tr>
          <tr><td>HgS</td><td>Красный/чёрный</td><td>Нерастворим</td></tr>
        </table></div>
        <p class="paragraph"><b>Получение:</b></p>
        <div class="formula-box">FeS + 2HCl → FeCl<sub>2</sub> + H<sub>2</sub>S↑</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Качественная реакция на S²⁻</div>
        <p class="paragraph">Ионы тяжёлых металлов дают чёрные осадки:</p>
        <div class="formula-box">Pb<sup>2+</sup> + S<sup>2-</sup> → PbS↓ (чёрный)</div>
        <div class="formula-box">Cu<sup>2+</sup> + S<sup>2-</sup> → CuS↓ (чёрный)</div>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Напишите реакцию H₂S с NaOH (избыток).<br>
        <b>Решение:</b> H₂S + 2NaOH → Na₂S + 2H₂O.<br><br>
        2. Как получить H₂S в лаборатории?<br>
        <b>Решение:</b> FeS + 2HCl → FeCl₂ + H₂S↑.<br><br>
        3. Какая качественная реакция на S²⁻?<br>
        <b>Решение:</b> С Pb(NO₃)₂ → чёрный осадок PbS.<br><br>
        4. Почему H₂S опасен?<br>
        <b>Решение:</b> Он ядовит, парализует дыхание.
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
          <li><b>Восстановление:</b> SO₂ + 2H₂S → 3S + 2H₂O</li>
        </ul>
        <p class="paragraph">Применение: консервант (E220), отбеливание, получение H₂SO₄.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">2️⃣</span> Сернистая кислота H₂SO₃</div>
        <p class="paragraph">Слабая, неустойчивая, существует только в растворе. Разлагается на SO₂ и H₂O. Соли — сульфиты и гидросульфиты.</p>
        <div class="formula-box">H<sub>2</sub>SO<sub>3</sub> ⇄ H<sup>+</sup> + HSO<sub>3</sub><sup>-</sup> ⇄ 2H<sup>+</sup> + SO<sub>3</sub><sup>2-</sup></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">3️⃣</span> Оксид серы(VI) SO₃</div>
        <p class="paragraph">Бесцветная летучая жидкость (t° пл. 17 °C), кислотный оксид.</p>
        <div class="formula-box">SO<sub>3</sub> + H<sub>2</sub>O → H<sub>2</sub>SO<sub>4</sub></div>
        <div class="formula-box">SO<sub>3</sub> + 2NaOH → Na<sub>2</sub>SO<sub>4</sub> + H<sub>2</sub>O</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">4️⃣</span> Серная кислота H₂SO₄</div>
        <p class="paragraph">Тяжёлая маслянистая жидкость, t° пл. 10 °C, t° кип. 337 °C. Сильная кислота, сильный окислитель (особенно концентрированная).</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Применение</div>
        <ul class="theory-list">
          <li>SO₂ — консервант, отбеливатель.</li>
          <li>H₂SO₄ — удобрения, нефтепереработка, металлургия, аккумуляторы.</li>
          <li>H₂SO₄ — самая производимая кислота в мире.</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Напишите реакцию SO₂ + H₂O.<br>
        <b>Решение:</b> SO₂ + H₂O ⇄ H₂SO₃.<br><br>
        2. Как окислить SO₂ до SO₃?<br>
        <b>Решение:</b> 2SO₂ + O₂ ⇄ 2SO₃ (кат. V₂O₅, температура).<br><br>
        3. Какие соли у H₂SO₃?<br>
        <b>Решение:</b> Сульфиты (Na₂SO₃) и гидросульфиты (NaHSO₃).
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
        <p class="paragraph">Диссоциирует: H₂SO₄ → 2H⁺ + SO₄²⁻.</p>
        <ul class="theory-list">
          <li><b>Индикаторы:</b> лакмус — красный, метилоранж — розовый.</li>
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
          <li>С Fe, Al, Cr — <b>пассивация</b> на холоде (образуется защитная оксидная плёнка).</li>
          <li>Обугливает органические вещества (отбирает воду).</li>
          <li>При смешивании с водой выделяется много тепла — кислоту льют в воду, а не наоборот!</li>
        </ul>
        <div class="formula-box">C<sub>12</sub>H<sub>22</sub>O<sub>11</sub> → 12C + 11H<sub>2</sub>O (обугливание сахара)</div>
        <div class="formula-box">Cu + 2H<sub>2</sub>SO<sub>4</sub>(конц) → CuSO<sub>4</sub> + SO<sub>2</sub>↑ + 2H<sub>2</sub>O</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚠️</span> Техника безопасности</div>
        <ul class="theory-list">
          <li>При разбавлении лить кислоту в воду (тонкой струйкой), помешивая.</li>
          <li>Никогда не лить воду в кислоту — возможен выброс.</li>
          <li>Работать в перчатках и очках.</li>
          <li>При попадании на кожу — сразу смыть большим количеством воды, затем обработать 2% раствором соды.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Качественная реакция на SO₄²⁻</div>
        <div class="formula-box">Ba<sup>2+</sup> + SO<sub>4</sub><sup>2-</sup> → BaSO<sub>4</sub>↓ (белый осадок)</div>
        <p class="paragraph">Осадок нерастворим в азотной и соляной кислотах (в отличие от BaCO₃, BaSO₃).</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Применение H₂SO₄</div>
        <ul class="theory-list">
          <li>Производство удобрений (суперфосфат).</li>
          <li>Нефтепереработка (очистка бензина).</li>
          <li>Металлургия (травление металлов).</li>
          <li>Производство красителей, лекарств, взрывчатки.</li>
          <li>Аккумуляторы (автомобильные).</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Напишите реакцию разбавленной H₂SO₄ с цинком.<br>
        <b>Решение:</b> Zn + H₂SO₄ → ZnSO₄ + H₂↑.<br><br>
        2. Что происходит при взаимодействии концентрированной H₂SO₄ с медью?<br>
        <b>Решение:</b> Cu + 2H₂SO₄(конц) → CuSO₄ + SO₂↑ + 2H₂O.<br><br>
        3. Как разбавлять серную кислоту?<br>
        <b>Решение:</b> Лить кислоту в воду, а не наоборот.<br><br>
        4. Какая реакция на SO₄²⁻?<br>
        <b>Решение:</b> BaCl₂ → белый осадок BaSO₄.
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-3-9': {
    title: '§ 9. Азот (VA)',
    sub: 'Глава 3. Неметаллы и их соединения',
    html: `
      <div class="paragraph">Азот N — элемент V-A группы. На внешнем уровне 5 электронов. В молекуле N₂ — прочная тройная связь (N≡N), поэтому азот малоактивен.</div>

      <div class="card">
        <div class="card-title"><span class="num">💎</span> Физические свойства</div>
        <ul class="theory-list">
          <li>Газ без цвета, вкуса и запаха.</li>
          <li>Немного легче воздуха (плотность 1,25 г/л).</li>
          <li>Плохо растворим в воде.</li>
          <li>78% воздуха по объёму.</li>
          <li>t° кип. −196 °C (жидкий азот).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства</div>
        <ul class="theory-list">
          <li><b>+ H₂ (кат., высокие t° и p):</b> N₂ + 3H₂ ⇄ 2NH₃ (процесс Габера)</li>
          <li><b>+ O₂ (в разряде):</b> N₂ + O₂ → 2NO</li>
          <li><b>+ металлы (при нагревании):</b> 3Mg + N₂ → Mg₃N₂</li>
          <li><b>+ Li (при обычных условиях):</b> 6Li + N₂ → 2Li₃N</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔢</span> Степени окисления азота</div>
        <p class="paragraph">От −3 (в NH₃) до +5 (в HNO₃).</p>
        <div class="table-wrap"><table>
          <tr><th>Формула</th><th>С. о. N</th><th>Пример</th></tr>
          <tr><td>NH₃</td><td>−3</td><td>Аммиак</td></tr>
          <tr><td>N₂H₄</td><td>−2</td><td>Гидразин</td></tr>
          <tr><td>NH₂OH</td><td>−1</td><td>Гидроксиламин</td></tr>
          <tr><td>N₂</td><td>0</td><td>Простое вещество</td></tr>
          <tr><td>N₂O</td><td>+1</td><td>Оксид азота(I)</td></tr>
          <tr><td>NO</td><td>+2</td><td>Оксид азота(II)</td></tr>
          <tr><td>N₂O₃ / HNO₂</td><td>+3</td><td>Оксид и азотистая кислота</td></tr>
          <tr><td>NO₂</td><td>+4</td><td>Оксид азота(IV)</td></tr>
          <tr><td>N₂O₅ / HNO₃</td><td>+5</td><td>Оксид и азотная кислота</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Применение</div>
        <ul class="theory-list">
          <li>Синтез аммиака (главное использование).</li>
          <li>Инертная среда в химии и металлургии.</li>
          <li>Жидкий азот для замораживания (медицина, продукты).</li>
          <li>Наполнение ламп накаливания.</li>
          <li>Азотные удобрения.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌱</span> Круговорот азота в природе</div>
        <p class="paragraph">Азот из воздуха усваивается бактериями-азотфиксаторами (в почве), они превращают его в соединения. Растения поглощают их, животные поедают растения. При разложении остатков азот возвращается в почву.</p>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Почему азот малоактивен?<br>
        <b>Решение:</b> В молекуле N₂ очень прочная тройная связь (946 кДж/моль).<br><br>
        2. Напишите реакцию N₂ с H₂.<br>
        <b>Решение:</b> N₂ + 3H₂ ⇄ 2NH₃ (кат. Fe, 500 °C, 300 атм).<br><br>
        3. Какие степени окисления у азота в HNO₃, NO₂, NH₃?<br>
        <b>Решение:</b> +5, +4, −3.<br><br>
        4. Какой газ составляет 78% воздуха?<br>
        <b>Решение:</b> Азот N₂.
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
        <p class="paragraph">Бесцветный газ с резким запахом. Хорошо растворим в воде (1 объём воды растворяет 700 объёмов аммиака). Раствор — слабое основание.</p>
        <ul class="theory-list">
          <li>Молекула имеет форму пирамиды.</li>
          <li>Азот — донор электронной пары, N−H связи ковалентные полярные.</li>
          <li>Легче воздуха (плотность 0,77 г/л).</li>
          <li>t° кип. −33 °C (легко сжижается).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства</div>
        <ul class="theory-list">
          <li><b>+ вода:</b> NH₃ + H₂O ⇄ NH₄OH (гидроксид аммония)</li>
          <li><b>+ кислоты:</b> NH₃ + HCl → NH₄Cl (белый дым)</li>
          <li><b>+ O₂ без катализатора (горение):</b> 4NH₃ + 3O₂ → 2N₂ + 6H₂O</li>
          <li><b>+ O₂ с катализатором:</b> 4NH₃ + 5O₂ → 4NO + 6H₂O</li>
          <li><b>+ металлы:</b> 2NH₃ + 2Na → 2NaNH₂ + H₂ (при нагревании)</li>
        </ul>
        <p class="paragraph">Аммиак проявляет восстановительные свойства.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Соли аммония</div>
        <p class="paragraph">Содержат катион NH₄⁺: NH₄Cl, (NH₄)₂SO₄, NH₄NO₃, (NH₄)₂CO₃.</p>
        <ul class="theory-list">
          <li>Белые кристаллические вещества.</li>
          <li>Хорошо растворимы в воде.</li>
          <li><b>+ щёлочь (при нагревании):</b> NH₄Cl + NaOH → NaCl + NH₃↑ + H₂O</li>
          <li>При нагревании разлагаются: NH₄Cl → NH₃ + HCl</li>
          <li>Гидролизуются по катиону (среда кислая).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Качественная реакция на NH₄⁺</div>
        <p class="paragraph">Добавить щёлочь и нагреть → выделяется аммиак с резким запахом (посинение влажной лакмусовой бумажки).</p>
        <div class="formula-box">NH<sub>4</sub><sup>+</sup> + OH<sup>-</sup> → NH<sub>3</sub>↑ + H<sub>2</sub>O</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Применение</div>
        <ul class="theory-list">
          <li>NH₄NO₃, (NH₄)₂SO₄ — азотные удобрения.</li>
          <li>NH₄Cl — электролиты, паяние, медицина.</li>
          <li>Аммиак — холодильные установки, производство HNO₃.</li>
          <li>Нашатырный спирт (раствор NH₃) — медицина.</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Напишите реакцию NH₃ с HCl.<br>
        <b>Решение:</b> NH₃ + HCl → NH₄Cl (белый дым).<br><br>
        2. Как отличить соль аммония от других солей?<br>
        <b>Решение:</b> Добавить щёлочь и нагреть → запах аммиака.<br><br>
        3. Почему раствор аммиака имеет щелочную среду?<br>
        <b>Решение:</b> Образуется NH₄OH — слабое основание.<br><br>
        4. Напишите реакцию каталитического окисления NH₃.<br>
        <b>Решение:</b> 4NH₃ + 5O₂ → 4NO + 6H₂O (кат. Pt).
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
        <p class="paragraph">Нагревание соли аммония со щёлочью:</p>
        <div class="formula-box">2NH<sub>4</sub>Cl + Ca(OH)<sub>2</sub> → CaCl<sub>2</sub> + 2NH<sub>3</sub>↑ + 2H<sub>2</sub>O</div>
        <div class="formula-box">NH<sub>4</sub>Cl + NaOH → NaCl + NH<sub>3</sub>↑ + H<sub>2</sub>O</div>
        <p class="paragraph">Аммиак собирают в перевёрнутую пробирку (он легче воздуха). Для осушки используют твёрдый NaOH или CaO.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🏭</span> В промышленности</div>
        <p class="paragraph">Синтез из азота и водорода — <b>процесс Габера</b> (1908):</p>
        <div class="formula-box">N<sub>2</sub> + 3H<sub>2</sub> ⇄ 2NH<sub>3</sub> + Q</div>
        <ul class="theory-list">
          <li><b>Катализатор:</b> пористое железо с добавками K₂O, Al₂O₃, CaO.</li>
          <li><b>Температура:</b> ~500 °C.</li>
          <li><b>Давление:</b> 200–350 атм.</li>
          <li>Реакция экзотермическая, обратимая.</li>
          <li>Для смещения равновесия вправо: повышают давление, отводят NH₃.</li>
        </ul>
        <div class="note">Фриц Габер получил Нобелевскую премию по химии в 1918 г. за синтез аммиака. Карл Бош разработал промышленный способ — они вместе создали «процесс Габера–Боша».</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚙️</span> Условия оптимального синтеза</div>
        <div class="table-wrap"><table>
          <tr><th>Фактор</th><th>Влияние</th><th>Оптимум</th></tr>
          <tr><td>Давление</td><td>Смещает вправо</td><td>Высокое (200–350 атм)</td></tr>
          <tr><td>Температура</td><td>Смещает влево, но ускоряет реакцию</td><td>~500 °C</td></tr>
          <tr><td>Катализатор</td><td>Ускоряет</td><td>Fe с добавками</td></tr>
          <tr><td>Концентрация</td><td>Отвод NH₃</td><td>Постоянный отвод</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Значение</div>
        <p class="paragraph">Синтез аммиака — одно из важнейших открытий XX века. Из аммиака получают азотные удобрения, что позволило накормить миллиарды людей. Также аммиак используется для производства HNO₃, взрывчатки, лекарств.</p>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Как получить аммиак в лаборатории?<br>
        <b>Решение:</b> NH₄Cl + NaOH (при нагревании) → NH₃↑.<br><br>
        2. Почему аммиак собирают в перевёрнутую пробирку?<br>
        <b>Решение:</b> Он легче воздуха.<br><br>
        3. Какие условия в процессе Габера?<br>
        <b>Решение:</b> 500 °C, 200–350 атм, катализатор Fe.<br><br>
        4. Куда сместится равновесие при повышении давления?<br>
        <b>Решение:</b> В сторону уменьшения числа молекул газа — вправо, к NH₃.
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
          <tr><th>Формула</th><th>Название</th><th>Характер</th><th>Свойства</th></tr>
          <tr><td>N₂O</td><td>Оксид азота(I)</td><td>Несолеобразующий</td><td>«Веселящий газ», наркоз</td></tr>
          <tr><td>NO</td><td>Оксид азота(II)</td><td>Несолеобразующий</td><td>Бесцветный, легко окисляется</td></tr>
          <tr><td>N₂O₃</td><td>Оксид азота(III)</td><td>Кислотный</td><td>Соответствует HNO₂</td></tr>
          <tr><td>NO₂</td><td>Оксид азота(IV)</td><td>Смешанный</td><td>Бурый газ, «лисий хвост»</td></tr>
          <tr><td>N₂O₅</td><td>Оксид азота(V)</td><td>Кислотный</td><td>Соответствует HNO₃</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">2️⃣</span> Азотная кислота HNO₃</div>
        <p class="paragraph">Бесцветная жидкость с резким запахом, «дымит» на воздухе, t° кип. 83 °C. Сильная одноосновная кислота, сильный окислитель.</p>
        <p class="paragraph"><b>Особенности:</b></p>
        <ul class="theory-list">
          <li>С металлами реагирует всегда (кроме Au, Pt), но H₂ никогда не выделяется.</li>
          <li>Продукты восстановления зависят от концентрации и активности металла: NO₂, NO, N₂O, N₂, NH₄NO₃.</li>
          <li>С Fe, Al, Cr — пассивация на холоде.</li>
          <li>Смесь HNO₃ и HCl (1:3) — «царская водка», растворяет даже золото.</li>
        </ul>
        <div class="formula-box">Cu + 4HNO<sub>3</sub>(конц) → Cu(NO<sub>3</sub>)<sub>2</sub> + 2NO<sub>2</sub>↑ + 2H<sub>2</sub>O</div>
        <div class="formula-box">3Cu + 8HNO<sub>3</sub>(разб) → 3Cu(NO<sub>3</sub>)<sub>2</sub> + 2NO↑ + 4H<sub>2</sub>O</div>
        <div class="formula-box">4Zn + 10HNO<sub>3</sub>(оч. разб) → 4Zn(NO<sub>3</sub>)<sub>2</sub> + NH<sub>4</sub>NO<sub>3</sub> + 3H<sub>2</sub>O</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">3️⃣</span> Соли азотной кислоты — нитраты</div>
        <ul class="theory-list">
          <li>Все растворимы в воде.</li>
          <li>При нагревании разлагаются:
            <div class="formula-box">2KNO<sub>3</sub> → 2KNO<sub>2</sub> + O<sub>2</sub>↑</div>
            <div class="formula-box">2Cu(NO<sub>3</sub>)<sub>2</sub> → 2CuO + 4NO<sub>2</sub> + O<sub>2</sub></div>
            <div class="formula-box">2AgNO<sub>3</sub> → 2Ag + 2NO<sub>2</sub> + O<sub>2</sub></div>
          </li>
          <li>Применяются как удобрения (селитры), взрывчатые вещества.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Применение</div>
        <ul class="theory-list">
          <li>HNO₃ — производство удобрений, взрывчатки, красителей.</li>
          <li>Нитраты — удобрения, консерванты.</li>
          <li>NO — медицина (расширение сосудов).</li>
          <li>N₂O — наркоз, «веселящий газ».</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Напишите реакцию концентрированной HNO₃ с Cu.<br>
        <b>Решение:</b> Cu + 4HNO₃(конц) → Cu(NO₃)₂ + 2NO₂↑ + 2H₂O.<br><br>
        2. Почему нитраты при нагревании разлагаются по-разному?<br>
        <b>Решение:</b> Чем активнее металл, тем ниже температура разложения и стабильнее нитрат.<br><br>
        3. Что такое «царская водка»?<br>
        <b>Решение:</b> Смесь HNO₃ и HCl (1:3), растворяет Au, Pt.
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
        <p class="paragraph">Элемент V-A группы. Имеет несколько аллотропных модификаций.</p>
        <div class="table-wrap"><table>
          <tr><th>Модификация</th><th>Свойства</th><th>Применение</th></tr>
          <tr><td>Белый фосфор</td><td>Мягкий, восковидный, ядовитый, светится в темноте</td><td>Получение красного фосфора</td></tr>
          <tr><td>Красный фосфор</td><td>Порошок, неядовитый, не светится</td><td>Спички, реактив</td></tr>
          <tr><td>Чёрный фосфор</td><td>Похож на графит, полупроводник</td><td>Полупроводники</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства</div>
        <ul class="theory-list">
          <li><b>+ O₂:</b> 4P + 5O₂ → 2P₂O₅ (белый дым)</li>
          <li><b>+ Cl₂:</b> 2P + 3Cl₂ → 2PCl₃; 2P + 5Cl₂ → 2PCl₅</li>
          <li><b>+ металлы:</b> 3Ca + 2P → Ca₃P₂</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Соединения фосфора</div>
        <p class="paragraph"><b>Оксид фосфора(V) P₂O₅</b> — белый порошок, сильный водоотнимающий агент:</p>
        <div class="formula-box">P<sub>2</sub>O<sub>5</sub> + 3H<sub>2</sub>O → 2H<sub>3</sub>PO<sub>4</sub></div>

        <p class="paragraph"><b>Фосфорная кислота H₃PO₄</b> — бесцветные кристаллы, средней силы, трёхосновная:</p>
        <div class="formula-box">H<sub>3</sub>PO<sub>4</sub> ⇄ H<sup>+</sup> + H<sub>2</sub>PO<sub>4</sub><sup>-</sup></div>
        <p class="paragraph">Соли: средние (фосфаты) и кислые (гидрофосфаты, дигидрофосфаты).</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Применение</div>
        <ul class="theory-list">
          <li>Удобрения: суперфосфат, преципитат.</li>
          <li>Спички (красный фосфор).</li>
          <li>Производство H₃PO₄.</li>
          <li>Пищевая промышленность (E338).</li>
          <li>Металлургия (раскисление).</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Какая модификация фосфора ядовита?<br>
        <b>Решение:</b> Белый фосфор.<br><br>
        2. Напишите реакцию горения фосфора.<br>
        <b>Решение:</b> 4P + 5O₂ → 2P₂O₅.<br><br>
        3. Как получить H₃PO₄?<br>
        <b>Решение:</b> P₂O₅ + 3H₂O → 2H₃PO₄.<br><br>
        4. Какие соли бывают у H₃PO₄?<br>
        <b>Решение:</b> Средние (Na₃PO₄), кислые (Na₂HPO₄, NaH₂PO₄).
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
        <div class="table-wrap"><table>
          <tr><th>Модификация</th><th>Решётка</th><th>Свойства</th></tr>
          <tr><td>Алмаз</td><td>Атомная (тетраэдрическая)</td><td>Самое твёрдое вещество, диэлектрик</td></tr>
          <tr><td>Графит</td><td>Слоистая</td><td>Мягкий, проводит ток, смазка</td></tr>
          <tr><td>Карбин</td><td>Цепочки</td><td>Полупроводник</td></tr>
          <tr><td>Фуллерен</td><td>Сферическая</td><td>Уникальные свойства</td></tr>
          <tr><td>Графен</td><td>Один слой графита</td><td>Проводник, очень прочный</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства углерода</div>
        <ul class="theory-list">
          <li><b>+ O₂ (избыток):</b> C + O₂ → CO₂</li>
          <li><b>+ O₂ (недостаток):</b> 2C + O₂ → 2CO</li>
          <li><b>+ металлы:</b> Ca + 2C → CaC₂</li>
          <li><b>+ H₂ (при кат.):</b> C + 2H₂ → CH₄</li>
          <li><b>Восстановитель:</b> C + CuO → Cu + CO↑; C + 2CuO → 2Cu + CO₂</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">💧</span> Адсорбция</div>
        <p class="paragraph">Активированный уголь способен поглощать (адсорбировать) газы, красители, яды благодаря пористой структуре. Применяется в противогазах, фильтрах для очистки воды, в медицине.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Применение</div>
        <ul class="theory-list">
          <li>Алмаз — ювелирное дело, резцы, буры.</li>
          <li>Графит — электроды, карандаши, смазка, ядерные реакторы.</li>
          <li>Кокс — металлургия (восстановитель).</li>
          <li>Активированный уголь — адсорбция.</li>
          <li>Сажа — резина, краски.</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Чем алмаз отличается от графита?<br>
        <b>Решение:</b> Строением кристаллической решётки. Алмаз — тетраэдрическая, графит — слоистая.<br><br>
        2. Напишите реакцию горения угля в недостатке кислорода.<br>
        <b>Решение:</b> 2C + O₂ → 2CO.<br><br>
        3. Где применяют активированный уголь?<br>
        <b>Решение:</b> В противогазах, фильтрах, медицине (адсорбция).
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
          <li><b>Восстановитель:</b> CO + CuO → Cu + CO₂</li>
          <li><b>Горит:</b> 2CO + O₂ → 2CO₂ (синее пламя)</li>
          <li>Образуется при неполном сгорании топлива.</li>
          <li>Связывается с гемоглобином крови в 200–300 раз прочнее O₂.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">2️⃣</span> Оксид углерода(IV) CO₂</div>
        <p class="paragraph">Углекислый газ, без цвета, с кисловатым вкусом и запахом, тяжелее воздуха, малорастворим в воде.</p>
        <ul class="theory-list">
          <li><b>+ вода:</b> CO₂ + H₂O ⇄ H₂CO₃</li>
          <li><b>+ щёлочь:</b> CO₂ + 2NaOH → Na₂CO₃ + H₂O</li>
          <li><b>+ Ca(OH)₂:</b> CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O (мутнеет известковая вода)</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">3️⃣</span> Угольная кислота H₂CO₃</div>
        <p class="paragraph">Слабая, неустойчивая, существует только в растворе. Соли — карбонаты и гидрокарбонаты.</p>
        <div class="formula-box">H<sub>2</sub>CO<sub>3</sub> ⇄ H<sup>+</sup> + HCO<sub>3</sub><sup>-</sup> ⇄ 2H<sup>+</sup> + CO<sub>3</sub><sup>2-</sup></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Качественная реакция на CO₃²⁻</div>
        <div class="formula-box">CO<sub>3</sub><sup>2-</sup> + 2H<sup>+</sup> → H<sub>2</sub>O + CO<sub>2</sub>↑</div>
        <p class="paragraph">Газ CO₂ мутит известковую воду:</p>
        <div class="formula-box">CO<sub>2</sub> + Ca(OH)<sub>2</sub> → CaCO<sub>3</sub>↓ + H<sub>2</sub>O</div>
        <p class="paragraph">При дальнейшем пропускании CO₂ осадок растворяется:</p>
        <div class="formula-box">CaCO<sub>3</sub> + CO<sub>2</sub> + H<sub>2</sub>O → Ca(HCO<sub>3</sub>)<sub>2</sub></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Применение</div>
        <ul class="theory-list">
          <li>CO₂ — газировка, огнетушители, «сухой лёд», сварка.</li>
          <li>CO — металлургия (восстановитель).</li>
          <li>Карбонаты — стекло, сода, стройматериалы.</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Почему CO опасен?<br>
        <b>Решение:</b> Связывается с гемоглобином, блокирует перенос кислорода.<br><br>
        2. Напишите реакцию CO₂ с известковой водой.<br>
        <b>Решение:</b> CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O.<br><br>
        3. Как отличить карбонат от других солей?<br>
        <b>Решение:</b> Добавить кислоту → выделяется CO₂.<br><br>
        4. Что произойдёт при избытке CO₂ через известковую воду?<br>
        <b>Решение:</b> Осадок растворится: CaCO₃ + CO₂ + H₂O → Ca(HCO₃)₂.
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
        <p class="paragraph"><b>В лаборатории</b> — действием кислоты на мрамор:</p>
        <div class="formula-box">CaCO<sub>3</sub> + 2HCl → CaCl<sub>2</sub> + H<sub>2</sub>O + CO<sub>2</sub>↑</div>
        <p class="paragraph"><b>В промышленности</b> — обжиг известняка:</p>
        <div class="formula-box">CaCO<sub>3</sub> → CaO + CO<sub>2</sub>↑ (при 1000 °C)</div>
        <p class="paragraph"><b>Побочный продукт</b> — при брожении, дыхании, горении.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Карбонаты и гидрокарбонаты</div>
        <div class="table-wrap"><table>
          <tr><th>Соль</th><th>Формула</th><th>Растворимость</th><th>Применение</th></tr>
          <tr><td>Карбонат натрия</td><td>Na₂CO₃</td><td>Растворим</td><td>Стекло, мыло</td></tr>
          <tr><td>Гидрокарбонат натрия</td><td>NaHCO₃</td><td>Растворим</td><td>Пищевая сода</td></tr>
          <tr><td>Карбонат калия</td><td>K₂CO₃</td><td>Растворим</td><td>Поташ, удобрения</td></tr>
          <tr><td>Карбонат кальция</td><td>CaCO₃</td><td>Нерастворим</td><td>Мел, мрамор, известь</td></tr>
          <tr><td>Карбонат бария</td><td>BaCO₃</td><td>Нерастворим</td><td>Реактив</td></tr>
        </table></div>
        <p class="paragraph">Все карбонаты (кроме Na⁺, K⁺, NH₄⁺) нерастворимы. Гидрокарбонаты растворимы все.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Превращения карбонатов</div>
        <div class="formula-box">Na<sub>2</sub>CO<sub>3</sub> + CO<sub>2</sub> + H<sub>2</sub>O → 2NaHCO<sub>3</sub></div>
        <div class="formula-box">2NaHCO<sub>3</sub> → Na<sub>2</sub>CO<sub>3</sub> + H<sub>2</sub>O + CO<sub>2</sub> (при нагревании)</div>
        <div class="formula-box">Ca(HCO<sub>3</sub>)<sub>2</sub> → CaCO<sub>3</sub>↓ + H<sub>2</sub>O + CO<sub>2</sub> (при кипячении)</div>
        <p class="paragraph">Последняя реакция — причина накипи в чайниках.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Применение карбонатов</div>
        <ul class="theory-list">
          <li>Na₂CO₃ — производство стекла, мыла, стирка.</li>
          <li>NaHCO₃ — пищевая сода, огнетушители, медицина.</li>
          <li>CaCO₃ — строительство, скульптура, бумага.</li>
          <li>K₂CO₃ — удобрения, стекло (оптическое).</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Как получить CO₂ в лаборатории?<br>
        <b>Решение:</b> CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑.<br><br>
        2. Почему в чайнике образуется накипь?<br>
        <b>Решение:</b> При кипячении Ca(HCO₃)₂ разлагается: CaCO₃ выпадает в осадок.<br><br>
        3. Как превратить Na₂CO₃ в NaHCO₃?<br>
        <b>Решение:</b> Пропустить CO₂: Na₂CO₃ + CO₂ + H₂O → 2NaHCO₃.<br><br>
        4. Какую соль используют в огнетушителях?<br>
        <b>Решение:</b> NaHCO₃ (при нагревании выделяет CO₂).
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
        <p class="paragraph">Общая формула C<sub>n</sub>H<sub>2n+2</sub>. Все связи одинарные. Насыщенные.</p>
        <div class="table-wrap"><table>
          <tr><th>Формула</th><th>Название</th><th>t° кип.</th><th>Применение</th></tr>
          <tr><td>CH₄</td><td>Метан</td><td>−162 °C</td><td>Газ, топливо</td></tr>
          <tr><td>C₂H₆</td><td>Этан</td><td>−89 °C</td><td>Топливо</td></tr>
          <tr><td>C₃H₈</td><td>Пропан</td><td>−42 °C</td><td>Сжиженный газ</td></tr>
          <tr><td>C₄H₁₀</td><td>Бутан</td><td>−1 °C</td><td>Зажигалки</td></tr>
        </table></div>
        <p class="paragraph"><b>Химические свойства:</b></p>
        <div class="formula-box">CH<sub>4</sub> + 2O<sub>2</sub> → CO<sub>2</sub> + 2H<sub>2</sub>O (горение)</div>
        <div class="formula-box">CH<sub>4</sub> + Cl<sub>2</sub> → CH<sub>3</sub>Cl + HCl (замещение, на свету)</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">2️⃣</span> Непредельные — алкены</div>
        <p class="paragraph">Общая формула C<sub>n</sub>H<sub>2n</sub>. Одна двойная связь.</p>
        <ul class="theory-list">
          <li>C₂H₄ — этилен.</li>
          <li>C₃H₆ — пропилен.</li>
          <li>C₄H₈ — бутилен.</li>
        </ul>
        <div class="formula-box">CH<sub>2</sub>=CH<sub>2</sub> + Br<sub>2</sub> → CH<sub>2</sub>Br−CH<sub>2</sub>Br (обесцвечивание бромной воды)</div>
        <div class="formula-box">CH<sub>2</sub>=CH<sub>2</sub> + H<sub>2</sub> → CH<sub>3</sub>−CH<sub>3</sub> (кат. Ni)</div>
        <div class="formula-box">nCH<sub>2</sub>=CH<sub>2</sub> → (−CH<sub>2</sub>−CH<sub>2</sub>−)<sub>n</sub> (полиэтилен)</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">3️⃣</span> Алкины</div>
        <p class="paragraph">Общая формула C<sub>n</sub>H<sub>2n−2</sub>. Одна тройная связь.</p>
        <ul class="theory-list">
          <li>C₂H₂ — ацетилен.</li>
          <li>C₃H₄ — пропин.</li>
        </ul>
        <div class="formula-box">2C<sub>2</sub>H<sub>2</sub> + 5O<sub>2</sub> → 4CO<sub>2</sub> + 2H<sub>2</sub>O (горение, 3000 °C)</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">4️⃣</span> Арены</div>
        <p class="paragraph">Ароматические углеводороды, содержат бензольное кольцо.</p>
        <ul class="theory-list">
          <li>C₆H₆ — бензол.</li>
          <li>C₇H₈ — толуол.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Применение</div>
        <ul class="theory-list">
          <li>Метан — топливо, сырьё для синтеза (NH₃, CH₃OH).</li>
          <li>Этилен — производство полиэтилена.</li>
          <li>Ацетилен — сварка металлов (высокая t° пламени).</li>
          <li>Бензол — красители, лекарства, пластмассы.</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Напишите формулу этана, этилена, ацетилена.<br>
        <b>Решение:</b> C₂H₆, C₂H₄, C₂H₂.<br><br>
        2. Какая реакция доказывает непредельность этилена?<br>
        <b>Решение:</b> Обесцвечивание бромной воды.<br><br>
        3. Как получают полиэтилен?<br>
        <b>Решение:</b> Полимеризацией этилена: nCH₂=CH₂ → (−CH₂−CH₂−)ₙ.<br><br>
        4. Чем отличается предельный углеводород от непредельного?<br>
        <b>Решение:</b> У предельных только одинарные связи, у непредельных есть двойные или тройные.
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
        <p class="paragraph">Содержат функциональную группу −OH. Общая формула R−OH.</p>
        <div class="table-wrap"><table>
          <tr><th>Формула</th><th>Название</th><th>Применение</th></tr>
          <tr><td>CH₃OH</td><td>Метанол</td><td>Топливо, растворитель (ядовит)</td></tr>
          <tr><td>C₂H₅OH</td><td>Этанол</td><td>Спирт, медицина, топливо</td></tr>
          <tr><td>C₃H₇OH</td><td>Пропанол</td><td>Растворитель</td></tr>
          <tr><td>C₃H₅(OH)₃</td><td>Глицерин</td><td>Косметика, медицина</td></tr>
        </table></div>
        <p class="paragraph"><b>Химические свойства:</b></p>
        <div class="formula-box">2C<sub>2</sub>H<sub>5</sub>OH + 2Na → 2C<sub>2</sub>H<sub>5</sub>ONa + H<sub>2</sub>↑</div>
        <div class="formula-box">C<sub>2</sub>H<sub>5</sub>OH + 3O<sub>2</sub> → 2CO<sub>2</sub> + 3H<sub>2</sub>O (горение)</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">2️⃣</span> Альдегиды</div>
        <p class="paragraph">Содержат группу −CHO.</p>
        <ul class="theory-list">
          <li>HCHO — формальдегид (формалин).</li>
          <li>CH₃CHO — уксусный альдегид.</li>
        </ul>
        <p class="paragraph">Качественная реакция — «серебряное зеркало» с Ag₂O (аммиачный раствор).</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">3️⃣</span> Карбоновые кислоты</div>
        <p class="paragraph">Содержат группу −COOH.</p>
        <ul class="theory-list">
          <li>HCOOH — муравьиная.</li>
          <li>CH₃COOH — уксусная (столовый уксус).</li>
          <li>C₁₇H₃₅COOH — стеариновая (в жирах).</li>
        </ul>
        <p class="paragraph"><b>Химические свойства:</b></p>
        <div class="formula-box">CH<sub>3</sub>COOH + NaOH → CH<sub>3</sub>COONa + H<sub>2</sub>O</div>
        <div class="formula-box">2CH<sub>3</sub>COOH + Na<sub>2</sub>CO<sub>3</sub> → 2CH<sub>3</sub>COONa + H<sub>2</sub>O + CO<sub>2</sub>↑</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">4️⃣</span> Жиры</div>
        <p class="paragraph">Сложные эфиры глицерина и высших карбоновых кислот. При гидролизе дают глицерин и кислоты. При щелочном гидролизе (омылении) образуется мыло.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">5️⃣</span> Углеводы</div>
        <ul class="theory-list">
          <li><b>Моносахариды:</b> глюкоза C₆H₁₂O₆, фруктоза.</li>
          <li><b>Дисахариды:</b> сахароза C₁₂H₂₂O₁₁, лактоза, мальтоза.</li>
          <li><b>Полисахариды:</b> крахмал, целлюлоза (C₆H₁₀O₅)ₙ.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Применение</div>
        <ul class="theory-list">
          <li>Спирты — растворители, топливо, медицина.</li>
          <li>Альдегиды — производство пластмасс, антисептики.</li>
          <li>Карбоновые кислоты — консерванты, реактивы.</li>
          <li>Жиры — пища, косметика, мыло.</li>
          <li>Углеводы — пища, бумага, текстиль.</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Какая группа у спиртов?<br>
        <b>Решение:</b> −OH.<br><br>
        2. Напишите реакцию горения этанола.<br>
        <b>Решение:</b> C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O.<br><br>
        3. Что образуется при щелочном гидролизе жиров?<br>
        <b>Решение:</b> Мыло (соли карбоновых кислот) и глицерин.<br><br>
        4. Какой сахар — моносахарид: сахароза или глюкоза?<br>
        <b>Решение:</b> Глюкоза.
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
          <li>Тугоплавкий (t° пл. 1415 °C), твёрдый, но хрупкий.</li>
          <li>Используется в электронике (микросхемы, процессоры).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства</div>
        <ul class="theory-list">
          <li><b>+ O₂:</b> Si + O₂ → SiO₂</li>
          <li><b>+ щёлочи:</b> Si + 2NaOH + H₂O → Na₂SiO₃ + 2H₂↑</li>
          <li><b>+ HF:</b> Si + 4HF → SiF₄↑ + 2H₂↑</li>
          <li><b>+ металлы:</b> 2Mg + Si → Mg₂Si</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Соединения кремния</div>
        <p class="paragraph"><b>Оксид кремния(IV) SiO₂</b> — кварц, песок. Атомная решётка, тугоплавкий.</p>
        <div class="formula-box">SiO<sub>2</sub> + 2NaOH → Na<sub>2</sub>SiO<sub>3</sub> + H<sub>2</sub>O</div>
        <div class="formula-box">SiO<sub>2</sub> + Na<sub>2</sub>CO<sub>3</sub> → Na<sub>2</sub>SiO<sub>3</sub> + CO<sub>2</sub>↑</div>

        <p class="paragraph"><b>Кремниевая кислота H₂SiO₃</b> — слабая, нерастворимая:</p>
        <div class="formula-box">Na<sub>2</sub>SiO<sub>3</sub> + 2HCl → H<sub>2</sub>SiO<sub>3</sub>↓ + 2NaCl</div>

        <p class="paragraph"><b>Силикаты</b> — соли кремниевой кислоты. Na₂SiO₃ — жидкое стекло.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Применение</div>
        <ul class="theory-list">
          <li>Стекло, керамика, фарфор.</li>
          <li>Полупроводники, солнечные батареи.</li>
          <li>Строительные материалы (кирпич, бетон).</li>
          <li>Жидкое стекло — клей, огнезащита.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🧪</span> Стекло — что это?</div>
        <p class="paragraph">Стекло — сплав оксидов: SiO₂ (основа), Na₂O, CaO. Обычное оконное стекло: Na₂O·CaO·6SiO₂.</p>
        <div class="formula-box">Na<sub>2</sub>CO<sub>3</sub> + CaCO<sub>3</sub> + 6SiO<sub>2</sub> → Na<sub>2</sub>O·CaO·6SiO<sub>2</sub> + 2CO<sub>2</sub>↑</div>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Напишите реакцию SiO₂ с NaOH.<br>
        <b>Решение:</b> SiO₂ + 2NaOH → Na₂SiO₃ + H₂O.<br><br>
        2. Как получить H₂SiO₃?<br>
        <b>Решение:</b> Na₂SiO₃ + 2HCl → H₂SiO₃↓ + 2NaCl.<br><br>
        3. Почему SiO₂ тугоплавкий?<br>
        <b>Решение:</b> У него атомная кристаллическая решётка.<br><br>
        4. Что такое жидкое стекло?<br>
        <b>Решение:</b> Раствор силиката натрия Na₂SiO₃.
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
        <p class="paragraph"><b>Получение хлора:</b></p>
        <div class="formula-box">2NaCl(расплав) → 2Na + Cl<sub>2</sub> (электролиз)</div>
        <div class="formula-box">MnO<sub>2</sub> + 4HCl → MnCl<sub>2</sub> + Cl<sub>2</sub>↑ + 2H<sub>2</sub>O</div>

        <p class="paragraph"><b>Получение кремния:</b></p>
        <div class="formula-box">SiO<sub>2</sub> + 2C → Si + 2CO↑</div>

        <p class="paragraph"><b>Получение фосфора:</b></p>
        <div class="formula-box">Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> + 3SiO<sub>2</sub> + 5C → 3CaSiO<sub>3</sub> + 2P + 5CO</div>

        <p class="paragraph"><b>Получение кислорода и азота:</b> перегонка жидкого воздуха.</p>
        <p class="paragraph"><b>Получение водорода:</b> электролиз воды, конверсия метана.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Разделение жидкого воздуха</div>
        <p class="paragraph">Сначала испаряется азот (t° кип. −196 °C), затем аргон (−186 °C), затем кислород (−183 °C). Так получают чистые N₂ и O₂.</p>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Как получают хлор в лаборатории?<br>
        <b>Решение:</b> MnO₂ + 4HCl → MnCl₂ + Cl₂↑ + 2H₂O.<br><br>
        2. Как разделяют воздух?<br>
        <b>Решение:</b> Перегонкой жидкого воздуха.<br><br>
        3. Напишите реакцию получения Si.<br>
        <b>Решение:</b> SiO₂ + 2C → Si + 2CO↑.
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
          <tr><td>Серная</td><td>H₂SO₄</td><td>Сульфаты</td><td>Удобрения, химия</td></tr>
          <tr><td>Азотная</td><td>HNO₃</td><td>Нитраты</td><td>Удобрения, взрывчатка</td></tr>
          <tr><td>Фосфорная</td><td>H₃PO₄</td><td>Фосфаты</td><td>Удобрения, пища</td></tr>
          <tr><td>Угольная</td><td>H₂CO₃</td><td>Карбонаты</td><td>Газировка</td></tr>
          <tr><td>Кремниевая</td><td>H₂SiO₃</td><td>Силикаты</td><td>Стекло, керамика</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Важнейшие оксиды</div>
        <ul class="theory-list">
          <li>CO₂ — углекислый газ (фотосинтез, газировка).</li>
          <li>CO — угарный газ (восстановитель в металлургии).</li>
          <li>SO₂ — сернистый газ (консервант, отбеливатель).</li>
          <li>SO₃ — серный ангидрид (производство H₂SO₄).</li>
          <li>NO₂ — «лисий хвост», бурый газ.</li>
          <li>N₂O₅ — азотный ангидрид (производство HNO₃).</li>
          <li>P₂O₅ — фосфорный ангидрид (производство H₃PO₄).</li>
          <li>SiO₂ — кварц, песок, стекло.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌱</span> Значение неметаллов</div>
        <p class="paragraph">Неметаллы и их соединения — основа жизни на Земле:</p>
        <ul class="theory-list">
          <li>Кислород — дыхание.</li>
          <li>Углерод — все органические вещества.</li>
          <li>Азот — белки, нуклеиновые кислоты.</li>
          <li>Фосфор — ДНК, АТФ, кости.</li>
          <li>Сера — белки (цистеин, метионин).</li>
          <li>Кремний — скелет диатомовых водорослей.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🏭</span> Применение в промышленности</div>
        <ul class="theory-list">
          <li>Производство удобрений (H₂SO₄, HNO₃, H₃PO₄).</li>
          <li>Металлургия (C, CO, H₂ как восстановители).</li>
          <li>Химический синтез (NH₃, HCl, HNO₃).</li>
          <li>Электроника (Si, Ge).</li>
          <li>Строительство (SiO₂, CaCO₃).</li>
          <li>Медицина (I₂, O₂, N₂O).</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Проверь себя</div>
        1. Назови 5 важнейших кислот и их соли.<br>
        2. Какие оксиды неметаллов — кислотные?<br>
        3. Какие элементы — органогены?<br>
        4. Какие неметаллы применяются в электронике?<br>
        5. Какие неметаллы используются в удобрениях?
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

   /* ============ ГЛАВА 4 (РАСШИРЕННАЯ) ============ */

  'ch9-4-1': {
    title: '§ 1. Общая характеристика металлов',
    sub: 'Глава 4. Металлы',
    html: `
      <div class="paragraph">Металлы расположены в левой нижней части таблицы Менделеева. На внешнем уровне 1–3 электрона, легко их отдают — восстановители.</div>

      <div class="card">
        <div class="card-title"><span class="num">📋</span> Положение в таблице</div>
        <ul class="theory-list">
          <li>Все элементы I-A, II-A групп (кроме H, He).</li>
          <li>Многие элементы побочных подгрупп (Fe, Cu, Zn, Cr, Mn).</li>
          <li>В периоде металлические свойства ослабевают слева направо.</li>
          <li>В группе A — усиливаются сверху вниз.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚛️</span> Строение атомов металлов</div>
        <ul class="theory-list">
          <li>1–3 электрона на внешнем уровне.</li>
          <li>Большой радиус атома.</li>
          <li>Слабо удерживают валентные электроны.</li>
          <li>Типичные степени окисления: +1, +2, +3.</li>
          <li>Образуют металлическую связь.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">💎</span> Физические свойства</div>
        <ul class="theory-list">
          <li><b>Металлический блеск</b> — Ag, Au, Al, Cu.</li>
          <li><b>Электропроводность</b> — лучшие: Ag, Cu, Au, Al.</li>
          <li><b>Теплопроводность</b> — лучшие: Ag, Cu.</li>
          <li><b>Ковкость и пластичность</b> — Au, Ag, Cu.</li>
          <li><b>Плотность:</b> лёгкие (Li, Al — до 5 г/см³) и тяжёлые (Pb, Hg — больше 5 г/см³).</li>
          <li><b>Температура плавления:</b> низкая (Hg −39 °C, Cs +28 °C) и высокая (W 3410 °C).</li>
          <li><b>Твёрдость:</b> мягкие (Na, K) и твёрдые (Cr, W).</li>
          <li><b>Магнитные свойства:</b> Fe, Co, Ni — ферромагнетики.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Распространение в природе</div>
        <ul class="theory-list">
          <li><b>Al</b> — самый распространённый металл в земной коре (~7,5%).</li>
          <li><b>Fe</b> — второй (~4,7%).</li>
          <li><b>Ca, Na, K, Mg</b> — также распространены.</li>
          <li>В самородном виде: Au, Pt, Ag, Hg, Cu.</li>
          <li>В виде оксидов, сульфидов, солей — большинство металлов.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства (обзор)</div>
        <ul class="theory-list">
          <li><b>+ O₂:</b> 2Ca + O₂ → 2CaO</li>
          <li><b>+ галогены:</b> 2Na + Cl₂ → 2NaCl</li>
          <li><b>+ H₂O:</b> 2Na + 2H₂O → 2NaOH + H₂↑</li>
          <li><b>+ кислоты:</b> Zn + 2HCl → ZnCl₂ + H₂↑</li>
          <li><b>+ соли:</b> Fe + CuSO₄ → FeSO₄ + Cu</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Ряд активности металлов (Бекетова)</div>
        <div class="formula-box">Li → K → Ba → Ca → Na → Mg → Al → Mn → Zn → Cr → Fe → Ni → Sn → Pb → <b>(H)</b> → Cu → Hg → Ag → Pt → Au</div>
        <p class="paragraph">Закономерности:</p>
        <ul class="theory-list">
          <li>Металлы левее H вытесняют его из разбавленных кислот.</li>
          <li>Каждый металл вытесняет правее стоящий из растворов солей.</li>
          <li>Чем левее металл, тем сильнее его восстановительные свойства.</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Какие из элементов — металлы: Na, Cl, O, Fe, N, Cu, Al, S?<br>
        <b>Решение:</b> Na, Fe, Cu, Al.<br><br>
        2. Какой металл самый распространённый в земной коре?<br>
        <b>Решение:</b> Алюминий Al (~7,5%).<br><br>
        3. Какие металлы реагируют с разбавленными кислотами?<br>
        <b>Решение:</b> Те, что стоят левее H в ряду активности (до Cu).
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-4-2': {
    title: '§ 2. Химические свойства металлов',
    sub: 'Глава 4. Металлы',
    html: `
      <p class="paragraph">Все металлы — восстановители. Они отдают электроны и повышают степень окисления.</p>
      <div class="formula-box">Me⁰ − ne⁻ → Me<sup>n+</sup></div>

      <div class="card">
        <div class="card-title"><span class="num">1️⃣</span> С кислородом</div>
        <ul class="theory-list">
          <li><b>Активные</b> (Li → Al) — при обычных условиях: 4Li + O₂ → 2Li₂O</li>
          <li><b>Средней активности</b> (Mn → Pb) — при нагревании: 2Cu + O₂ → 2CuO</li>
          <li><b>Малоактивные</b> (Cu → Au) — при сильном нагревании или не реагируют: 2Ag + O₂ не идёт.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">2️⃣</span> С водой</div>
        <ul class="theory-list">
          <li><b>Очень активные</b> (Na, K, Ca) — при обычных условиях:
            <div class="formula-box">2Na + 2H<sub>2</sub>O → 2NaOH + H<sub>2</sub>↑</div>
            <div class="formula-box">Ca + 2H<sub>2</sub>O → Ca(OH)<sub>2</sub> + H<sub>2</sub>↑</div>
          </li>
          <li><b>Средней активности</b> (Mg, Fe, Zn) — при нагревании с парами воды:
            <div class="formula-box">3Fe + 4H<sub>2</sub>O → Fe<sub>3</sub>O<sub>4</sub> + 4H<sub>2</sub></div>
            <div class="formula-box">Mg + H<sub>2</sub>O → MgO + H<sub>2</sub></div>
          </li>
          <li><b>Малоактивные</b> (Cu, Ag, Au) — не реагируют.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">3️⃣</span> С кислотами</div>
        <p class="paragraph"><b>С разбавленными кислотами</b> (HCl, H₂SO₄ разб.) — металлы до H:</p>
        <div class="formula-box">Zn + 2HCl → ZnCl<sub>2</sub> + H<sub>2</sub>↑</div>
        <div class="formula-box">Fe + H<sub>2</sub>SO<sub>4</sub> → FeSO<sub>4</sub> + H<sub>2</sub>↑</div>
        <p class="paragraph"><b>С концентрированной H₂SO₄</b> — почти все металлы, но без H₂:</p>
        <div class="formula-box">Cu + 2H<sub>2</sub>SO<sub>4</sub>(конц) → CuSO<sub>4</sub> + SO<sub>2</sub>↑ + 2H<sub>2</sub>O</div>
        <p class="paragraph"><b>С HNO₃</b> — всегда, кроме Au и Pt:</p>
        <div class="formula-box">Cu + 4HNO<sub>3</sub>(конц) → Cu(NO<sub>3</sub>)<sub>2</sub> + 2NO<sub>2</sub>↑ + 2H<sub>2</sub>O</div>
        <div class="formula-box">3Cu + 8HNO<sub>3</sub>(разб) → 3Cu(NO<sub>3</sub>)<sub>2</sub> + 2NO↑ + 4H<sub>2</sub>O</div>
        <p class="paragraph"><b>С «царской водкой»</b> (HNO₃ + HCl, 1:3) — даже Au и Pt:</p>
        <div class="formula-box">Au + HNO<sub>3</sub> + 4HCl → H[AuCl<sub>4</sub>] + NO↑ + 2H<sub>2</sub>O</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">4️⃣</span> С солями</div>
        <p class="paragraph">Более активный металл вытесняет менее активный из раствора соли:</p>
        <div class="formula-box">Fe + CuSO<sub>4</sub> → FeSO<sub>4</sub> + Cu</div>
        <div class="formula-box">Cu + 2AgNO<sub>3</sub> → Cu(NO<sub>3</sub>)<sub>2</sub> + 2Ag</div>
        <div class="formula-box">Zn + Pb(NO<sub>3</sub>)<sub>2</sub> → Zn(NO<sub>3</sub>)<sub>2</sub> + Pb</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">5️⃣</span> С неметаллами</div>
        <div class="formula-box">2Na + Cl<sub>2</sub> → 2NaCl</div>
        <div class="formula-box">Fe + S → FeS</div>
        <div class="formula-box">3Mg + N<sub>2</sub> → Mg<sub>3</sub>N<sub>2</sub></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Сводная таблица</div>
        <div class="table-wrap"><table>
          <tr><th>Реагент</th><th>Условие</th><th>Пример</th></tr>
          <tr><td>O₂</td><td>Зависит от активности</td><td>2Ca + O₂ → 2CaO</td></tr>
          <tr><td>H₂O</td><td>Активные — сразу, средние — при нагреве</td><td>2Na + 2H₂O → 2NaOH + H₂↑</td></tr>
          <tr><td>HCl (разб.)</td><td>Металлы до H</td><td>Zn + 2HCl → ZnCl₂ + H₂↑</td></tr>
          <tr><td>H₂SO₄ (конц.)</td><td>Почти все</td><td>Cu + 2H₂SO₄ → CuSO₄ + SO₂↑ + 2H₂O</td></tr>
          <tr><td>HNO₃</td><td>Все, кроме Au, Pt</td><td>Cu + 4HNO₃ → Cu(NO₃)₂ + 2NO₂↑ + 2H₂O</td></tr>
          <tr><td>Соль</td><td>Более активный металл</td><td>Fe + CuSO₄ → FeSO₄ + Cu</td></tr>
        </table></div>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Напишите реакцию Na с водой.<br>
        <b>Решение:</b> 2Na + 2H₂O → 2NaOH + H₂↑.<br><br>
        2. Почему медь реагирует с HNO₃, но не с HCl?<br>
        <b>Решение:</b> HCl — не окислитель для меди (Cu правее H). HNO₃ — сильный окислитель.<br><br>
        3. Напишите реакцию Fe + CuSO₄.<br>
        <b>Решение:</b> Fe + CuSO₄ → FeSO₄ + Cu.<br><br>
        4. Что такое «царская водка»?<br>
        <b>Решение:</b> Смесь HNO₃ и HCl (1:3), растворяет Au и Pt.
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
          <li>Образуют соединения с ионной связью.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">💎</span> Физические свойства</div>
        <ul class="theory-list">
          <li>Серебристо-белые, мягкие, режутся ножом.</li>
          <li>Легкоплавкие (Cs плавится при +28 °C).</li>
          <li>Малая плотность (Li, Na, K плавают в воде).</li>
          <li>Хранят под слоем керосина (реагируют с воздухом и влагой).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства</div>
        <p class="paragraph"><b>+ O₂:</b></p>
        <div class="formula-box">4Li + O<sub>2</sub> → 2Li<sub>2</sub>O (оксид)</div>
        <div class="formula-box">2Na + O<sub>2</sub> → Na<sub>2</sub>O<sub>2</sub> (пероксид)</div>
        <div class="formula-box">K + O<sub>2</sub> → KO<sub>2</sub> (супероксид)</div>

        <p class="paragraph"><b>+ Cl₂:</b></p>
        <div class="formula-box">2Na + Cl<sub>2</sub> → 2NaCl</div>

        <p class="paragraph"><b>+ H₂O:</b></p>
        <div class="formula-box">2Na + 2H<sub>2</sub>O → 2NaOH + H<sub>2</sub>↑</div>
        <div class="formula-box">2K + 2H<sub>2</sub>O → 2KOH + H<sub>2</sub>↑ (бурно, с воспламенением)</div>

        <p class="paragraph"><b>+ H₂ (при нагревании):</b></p>
        <div class="formula-box">2Na + H<sub>2</sub> → 2NaH (гидрид)</div>

        <p class="paragraph"><b>+ спирты:</b></p>
        <div class="formula-box">2Na + 2C<sub>2</sub>H<sub>5</sub>OH → 2C<sub>2</sub>H<sub>5</sub>ONa + H<sub>2</sub>↑</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Применение</div>
        <ul class="theory-list">
          <li>Na, K — теплоносители в ядерных реакторах.</li>
          <li>Na — восстановитель в органическом синтезе, лампы.</li>
          <li>NaCl, Na₂CO₃, NaOH — важнейшие соединения.</li>
          <li>K — удобрения (KCl, K₂SO₄, KNO₃).</li>
          <li>Rb, Cs — фотоэлементы, атомные часы.</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Почему щелочные металлы хранят под керосином?<br>
        <b>Решение:</b> Они реагируют с влагой и кислородом воздуха.<br><br>
        2. Напишите реакцию K с водой.<br>
        <b>Решение:</b> 2K + 2H₂O → 2KOH + H₂↑.<br><br>
        3. Что образуется при горении Na в кислороде?<br>
        <b>Решение:</b> Na₂O₂ — пероксид натрия.<br><br>
        4. Как меняется активность щелочных металлов в группе?<br>
        <b>Решение:</b> Усиливается сверху вниз: Li < Na < K < Rb < Cs.
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
        <div class="card-title"><span class="num">📋</span> Общая характеристика</div>
        <ul class="theory-list">
          <li>На внешнем уровне 2 электрона.</li>
          <li>Активные восстановители (уступают щелочным).</li>
          <li>Серебристо-белые, твёрже щелочных.</li>
          <li>Be, Mg тоже II-A, но Be — амфотерный, Mg — типичный металл.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства</div>
        <p class="paragraph"><b>+ O₂:</b></p>
        <div class="formula-box">2Ca + O<sub>2</sub> → 2CaO</div>
        <div class="formula-box">2Mg + O<sub>2</sub> → 2MgO (яркое пламя)</div>

        <p class="paragraph"><b>+ H₂O:</b></p>
        <div class="formula-box">Ca + 2H<sub>2</sub>O → Ca(OH)<sub>2</sub> + H<sub>2</sub>↑</div>
        <div class="formula-box">Mg + H<sub>2</sub>O → MgO + H<sub>2</sub> (при нагревании)</div>

        <p class="paragraph"><b>+ кислоты:</b></p>
        <div class="formula-box">Ca + 2HCl → CaCl<sub>2</sub> + H<sub>2</sub>↑</div>

        <p class="paragraph"><b>+ H₂:</b></p>
        <div class="formula-box">Ca + H<sub>2</sub> → CaH<sub>2</sub> (гидрид)</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Оксиды и гидроксиды</div>
        <ul class="theory-list">
          <li><b>CaO</b> — негашеная известь. + H₂O → Ca(OH)₂ + Q (гашёная известь).</li>
          <li><b>Ca(OH)₂</b> — малорастворим, известковая вода. Применяется в строительстве.</li>
          <li><b>Ba(OH)₂</b> — растворим, сильная щёлочь.</li>
          <li><b>MgO</b> — тугоплавкий, огнеупорный материал.</li>
          <li><b>Mg(OH)₂</b> — нерастворимый, применяется в медицине (магнезия).</li>
        </ul>
        <div class="formula-box">CaO + H<sub>2</sub>O → Ca(OH)<sub>2</sub> + Q</div>
        <div class="formula-box">Ca(OH)<sub>2</sub> + CO<sub>2</sub> → CaCO<sub>3</sub>↓ + H<sub>2</sub>O</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Жёсткость воды</div>
        <p class="paragraph">Обусловлена ионами Ca²⁺ и Mg²⁺. Бывает:</p>
        <ul class="theory-list">
          <li><b>Временная (карбонатная)</b> — устраняется кипячением: Ca(HCO₃)₂ → CaCO₃↓ + H₂O + CO₂↑</li>
          <li><b>Постоянная</b> — не устраняется кипячением (CaSO₄, MgSO₄).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Применение</div>
        <ul class="theory-list">
          <li>Ca — восстановитель металлов, получение редких металлов.</li>
          <li>CaCO₃ — стройматериал, стекло, скульптура.</li>
          <li>CaSO₄·2H₂O — гипс.</li>
          <li>Mg — сплавы (лёгкие, прочные), пиротехника.</li>
          <li>MgO — огнеупоры.</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Напишите реакцию Ca с водой.<br>
        <b>Решение:</b> Ca + 2H₂O → Ca(OH)₂ + H₂↑.<br><br>
        2. Почему CaO называют негашёной известью?<br>
        <b>Решение:</b> Потому что при взаимодействии с водой она «гасится», выделяя тепло: CaO + H₂O → Ca(OH)₂ + Q.<br><br>
        3. Как устранить временную жёсткость воды?<br>
        <b>Решение:</b> Кипячением: Ca(HCO₃)₂ → CaCO₃↓ + H₂O + CO₂↑.<br><br>
        4. Где применяют Mg?<br>
        <b>Решение:</b> В сплавах (лёгкие), пиротехнике, восстановлении металлов.
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
          <li><b>Постоянная (некарбонатная)</b> — из-за CaSO₄, MgSO₄, CaCl₂, MgCl₂. Не устраняется кипячением.</li>
          <li><b>Общая</b> = временная + постоянная.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Способы устранения</div>
        <p class="paragraph"><b>1. Кипячение</b> — устраняет временную:</p>
        <div class="formula-box">Ca(HCO<sub>3</sub>)<sub>2</sub> → CaCO<sub>3</sub>↓ + H<sub>2</sub>O + CO<sub>2</sub>↑</div>

        <p class="paragraph"><b>2. Добавление соды</b> — устраняет постоянную:</p>
        <div class="formula-box">CaSO<sub>4</sub> + Na<sub>2</sub>CO<sub>3</sub> → CaCO<sub>3</sub>↓ + Na<sub>2</sub>SO<sub>4</sub></div>
        <div class="formula-box">CaCl<sub>2</sub> + Na<sub>2</sub>CO<sub>3</sub> → CaCO<sub>3</sub>↓ + 2NaCl</div>

        <p class="paragraph"><b>3. Известкование</b> — устраняет временную:</p>
        <div class="formula-box">Ca(HCO<sub>3</sub>)<sub>2</sub> + Ca(OH)<sub>2</sub> → 2CaCO<sub>3</sub>↓ + 2H<sub>2</sub>O</div>

        <p class="paragraph"><b>4. Ионообменные смолы</b> — современный способ:</p>
        <div class="formula-box">2R-Na + Ca<sup>2+</sup> → R<sub>2</sub>Ca + 2Na<sup>+</sup></div>

        <p class="paragraph"><b>5. Дистилляция</b> — полное удаление солей.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚠️</span> Влияние жёсткости</div>
        <p class="paragraph"><b>Отрицательное:</b></p>
        <ul class="theory-list">
          <li>Образование накипи в чайниках, котлах, трубах.</li>
          <li>Перерасход мыла (мыло плохо пенится).</li>
          <li>Ухудшение вкуса еды.</li>
          <li>Повышенный расход топлива для нагрева.</li>
        </ul>
        <p class="paragraph"><b>Положительное:</b></p>
        <ul class="theory-list">
          <li>Кальций необходим для костей и зубов.</li>
          <li>Мягкая вода усиливает коррозию труб.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Типы воды по жёсткости</div>
        <div class="table-wrap"><table>
          <tr><th>Жёсткость</th><th>Ca²⁺ и Mg²⁺ (ммоль/л)</th></tr>
          <tr><td>Мягкая</td><td>&lt; 2</td></tr>
          <tr><td>Средней жёсткости</td><td>2–4</td></tr>
          <tr><td>Жёсткая</td><td>4–6</td></tr>
          <tr><td>Очень жёсткая</td><td>&gt; 6</td></tr>
        </table></div>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Какие ионы определяют жёсткость воды?<br>
        <b>Решение:</b> Ca²⁺ и Mg²⁺.<br><br>
        2. Как устранить временную жёсткость?<br>
        <b>Решение:</b> Кипячением или добавлением Ca(OH)₂.<br><br>
        3. Почему в жёсткой воде мыло плохо пенится?<br>
        <b>Решение:</b> Ионы Ca²⁺ и Mg²⁺ образуют с мылом нерастворимые осадки.<br><br>
        4. Что такое накипь?<br>
        <b>Решение:</b> Осадок CaCO₃ и MgCO₃, образующийся при кипячении жёсткой воды.
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
        <ul class="theory-list">
          <li>Степень окисления +3.</li>
          <li>Атомная кристаллическая решётка (ГЦК).</li>
          <li>Плотность 2,7 г/см³.</li>
          <li>t° пл. 660 °C.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">💎</span> Особенности</div>
        <ul class="theory-list">
          <li>Покрыт прочной оксидной плёнкой Al₂O₃ (защита от коррозии).</li>
          <li>Амфотерный металл — реагирует и с кислотами, и со щелочами.</li>
          <li>Хорошо проводит ток и тепло.</li>
          <li>Не магнитный.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства</div>
        <p class="paragraph"><b>+ O₂ (при нагревании):</b></p>
        <div class="formula-box">4Al + 3O<sub>2</sub> → 2Al<sub>2</sub>O<sub>3</sub></div>

        <p class="paragraph"><b>+ HCl:</b></p>
        <div class="formula-box">2Al + 6HCl → 2AlCl<sub>3</sub> + 3H<sub>2</sub>↑</div>

        <p class="paragraph"><b>+ NaOH (со щёлочью!):</b></p>
        <div class="formula-box">2Al + 2NaOH + 6H<sub>2</sub>O → 2Na[Al(OH)<sub>4</sub>] + 3H<sub>2</sub>↑</div>

        <p class="paragraph"><b>+ CuO (алюминотермия):</b></p>
        <div class="formula-box">2Al + 3CuO → Al<sub>2</sub>O<sub>3</sub> + 3Cu</div>

        <p class="paragraph"><b>+ Fe₂O₃ (термит):</b></p>
        <div class="formula-box">2Al + Fe<sub>2</sub>O<sub>3</sub> → Al<sub>2</sub>O<sub>3</sub> + 2Fe (3000 °C)</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Соединения алюминия</div>
        <p class="paragraph"><b>Al₂O₃</b> — амфотерный оксид:</p>
        <div class="formula-box">Al<sub>2</sub>O<sub>3</sub> + 6HCl → 2AlCl<sub>3</sub> + 3H<sub>2</sub>O</div>
        <div class="formula-box">Al<sub>2</sub>O<sub>3</sub> + 2NaOH → 2NaAlO<sub>2</sub> + H<sub>2</sub>O</div>
        <p class="paragraph">Природные формы Al₂O₃: корунд, рубин (с Cr), сапфир (с Ti, Fe).</p>

        <p class="paragraph"><b>Al(OH)₃</b> — амфотерный гидроксид:</p>
        <div class="formula-box">Al(OH)<sub>3</sub> + 3HCl → AlCl<sub>3</sub> + 3H<sub>2</sub>O</div>
        <div class="formula-box">Al(OH)<sub>3</sub> + NaOH → Na[Al(OH)<sub>4</sub>]</div>
        <p class="paragraph">При нагревании разлагается:</p>
        <div class="formula-box">2Al(OH)<sub>3</sub> → Al<sub>2</sub>O<sub>3</sub> + 3H<sub>2</sub>O</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Применение</div>
        <ul class="theory-list">
          <li>Авиастроение, машиностроение (сплавы — дюраль, силумин).</li>
          <li>Электроника (провода, кабели).</li>
          <li>Посуда, фольга.</li>
          <li>Алюминотермия для получения металлов (Cr, Mn, Fe).</li>
          <li>Ювелирные камни (рубин, сапфир).</li>
          <li>Строительство (окна, фасады).</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Почему алюминий не корродирует на воздухе?<br>
        <b>Решение:</b> Покрыт прочной оксидной плёнкой Al₂O₃.<br><br>
        2. Напишите реакцию Al с NaOH.<br>
        <b>Решение:</b> 2Al + 2NaOH + 6H₂O → 2Na[Al(OH)₄] + 3H₂↑.<br><br>
        3. Что такое алюминотермия?<br>
        <b>Решение:</b> Восстановление металлов из оксидов алюминием: 2Al + Fe₂O₃ → Al₂O₃ + 2Fe.<br><br>
        4. Какие свойства у Al(OH)₃?<br>
        <b>Решение:</b> Амфотерные — реагирует и с кислотами, и со щелочами.
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
          <li>Второй по распространённости металл (после Al).</li>
          <li>Степени окисления +2 и +3 (реже +6).</li>
          <li>t° пл. 1539 °C.</li>
          <li>Ферромагнетик (притягивается магнитом).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства</div>
        <p class="paragraph"><b>+ O₂ (на воздухе — ржавление):</b></p>
        <div class="formula-box">3Fe + 2O<sub>2</sub> → Fe<sub>3</sub>O<sub>4</sub> (при нагревании)</div>
        <div class="formula-box">4Fe + 3O<sub>2</sub> + 6H<sub>2</sub>O → 4Fe(OH)<sub>3</sub> (ржавчина)</div>

        <p class="paragraph"><b>+ Cl₂ (при нагревании):</b></p>
        <div class="formula-box">2Fe + 3Cl<sub>2</sub> → 2FeCl<sub>3</sub> (с.о. +3)</div>

        <p class="paragraph"><b>+ HCl (разб.) и H₂SO₄ (разб.):</b></p>
        <div class="formula-box">Fe + 2HCl → FeCl<sub>2</sub> + H<sub>2</sub>↑ (с.о. +2)</div>

        <p class="paragraph"><b>+ H₂SO₄ (конц., холод):</b> пассивация.</p>

        <p class="paragraph"><b>+ CuSO₄:</b></p>
        <div class="formula-box">Fe + CuSO<sub>4</sub> → FeSO<sub>4</sub> + Cu</div>

        <p class="paragraph"><b>+ S (при нагревании):</b></p>
        <div class="formula-box">Fe + S → FeS</div>

        <p class="paragraph"><b>+ H₂O (пары, при нагревании):</b></p>
        <div class="formula-box">3Fe + 4H<sub>2</sub>O → Fe<sub>3</sub>O<sub>4</sub> + 4H<sub>2</sub></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Соединения железа</div>
        <p class="paragraph"><b>Оксиды:</b></p>
        <ul class="theory-list">
          <li><b>FeO</b> — чёрный, основный.</li>
          <li><b>Fe₂O₃</b> — красно-бурый, амфотерный.</li>
          <li><b>Fe₃O₄</b> — смешанный (FeO·Fe₂O₃), чёрный, магнитный.</li>
        </ul>

        <p class="paragraph"><b>Гидроксиды:</b></p>
        <ul class="theory-list">
          <li><b>Fe(OH)₂</b> — серо-зелёный, быстро окисляется на воздухе: 4Fe(OH)₂ + O₂ + 2H₂O → 4Fe(OH)₃.</li>
          <li><b>Fe(OH)₃</b> — красно-бурый.</li>
        </ul>

        <p class="paragraph"><b>Соли:</b></p>
        <ul class="theory-list">
          <li>FeCl₂, FeSO₄ — соли железа(II), светло-зелёные.</li>
          <li>FeCl₃, Fe₂(SO₄)₃ — соли железа(III), жёлто-бурые.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Качественные реакции</div>
        <div class="formula-box">Fe<sup>2+</sup> + 2OH<sup>-</sup> → Fe(OH)<sub>2</sub>↓ (серо-зелёный)</div>
        <div class="formula-box">Fe<sup>3+</sup> + 3OH<sup>-</sup> → Fe(OH)<sub>3</sub>↓ (бурый)</div>
        <div class="formula-box">Fe<sup>3+</sup> + 3SCN<sup>-</sup> → Fe(SCN)<sub>3</sub> (кроваво-красный)</div>
        <div class="formula-box">Fe<sup>3+</sup> + 3K<sub>4</sub>[Fe(CN)<sub>6</sub>] → KFe[Fe(CN)<sub>6</sub>]↓ (синий, «берлинская лазурь»)</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🏭</span> Сплавы железа</div>
        <ul class="theory-list">
          <li><b>Сталь</b> — Fe + C (0,1–2%). Прочная, ковкая.</li>
          <li><b>Чугун</b> — Fe + C (2–4%). Хрупкий, но твёрдый.</li>
          <li><b>Нержавеющая сталь</b> — Fe + Cr + Ni.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Применение</div>
        <ul class="theory-list">
          <li>Металлургия (сталь, чугун).</li>
          <li>Строительство (арматура, балки).</li>
          <li>Транспорт (автомобили, поезда).</li>
          <li>Магниты, электротехника.</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Напишите реакцию Fe с HCl.<br>
        <b>Решение:</b> Fe + 2HCl → FeCl₂ + H₂↑ (с. о. +2).<br><br>
        2. Почему ржавеет железо?<br>
        <b>Решение:</b> Из-за кислорода и влаги: 4Fe + 3O₂ + 6H₂O → 4Fe(OH)₃.<br><br>
        3. Как отличить Fe²⁺ от Fe³⁺?<br>
        <b>Решение:</b> По цвету гидроксида: Fe(OH)₂ — серо-зелёный, Fe(OH)₃ — бурый. Или по реакции с KSCN — кроваво-красный цвет только у Fe³⁺.<br><br>
        4. Что такое чугун и сталь?<br>
        <b>Решение:</b> Сплавы Fe с C. В стали — до 2% C, в чугуне — 2–4%.
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
          <li><b>Химическая</b> — в газах или неэлектролитах (при высокой t°). Без электрического тока.</li>
          <li><b>Электрохимическая</b> — в электролитах (во влажном воздухе, в морской воде). Сопровождается образованием гальванических пар.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Механизм электрохимической коррозии</div>
        <p class="paragraph">Образуется гальванопара (анод — более активный металл, катод — менее активный):</p>
        <ul class="theory-list">
          <li>На аноде: Me⁰ − ne⁻ → Meⁿ⁺ (окисление).</li>
          <li>На катоде: O₂ + 2H₂O + 4e⁻ → 4OH⁻ (в нейтральной среде).</li>
        </ul>
        <p class="paragraph">Пример: ржавление железа во влажном воздухе. На поверхности Fe образуются микрогальванопары с примесями (C, Cu). Fe — анод, окисляется. На C выделяется O₂.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🛡️</span> Способы защиты</div>
        <p class="paragraph"><b>1. Покрытия:</b></p>
        <ul class="theory-list">
          <li>Неметаллические: краска, лак, эмаль, смазка.</li>
          <li>Металлические: Cr, Ni, Zn, Sn.</li>
        </ul>

        <p class="paragraph"><b>2. Легирование</b> — добавление в сталь Cr, Ni (нержавеющая сталь).</p>

        <p class="paragraph"><b>3. Протекторная защита</b> — присоединение более активного металла (Zn, Mg):</p>
        <div class="formula-box">Zn − 2e<sup>-</sup> → Zn<sup>2+</sup> (разрушается, а не Fe)</div>

        <p class="paragraph"><b>4. Электрохимическая (катодная)</b> — защищаемый металл делают катодом.</p>

        <p class="paragraph"><b>5. Ингибиторы</b> — вещества, замедляющие коррозию (NaNO₂, K₂Cr₂O₇).</p>

        <p class="paragraph"><b>6. Удаление агрессивной среды</b> — сушка, снижение влажности.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Потери от коррозии</div>
        <p class="paragraph">Ежегодно в мире от коррозии теряется до 10% всего производимого металла. Мировые потери оцениваются в сотни миллиардов долларов.</p>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Какой вид коррозии — ржавление железа во влажном воздухе?<br>
        <b>Решение:</b> Электрохимическая.<br><br>
        2. Что такое протекторная защита?<br>
        <b>Решение:</b> Присоединение более активного металла (например, Zn) к защищаемому.<br><br>
        3. Почему нержавеющая сталь не ржавеет?<br>
        <b>Решение:</b> В её составе Cr, Ni, которые образуют защитную оксидную плёнку.<br><br>
        4. Как защитить металл от коррозии?<br>
        <b>Решение:</b> Покрытие, легирование, протектор, ингибиторы, сушка среды.
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
          <li><b>В самородном виде</b> — Au, Pt, Ag, Hg, Cu (малоактивные металлы).</li>
          <li><b>В виде оксидов</b> — Fe₂O₃, Fe₃O₄, Al₂O₃, MnO₂, SnO₂.</li>
          <li><b>В виде сульфидов</b> — PbS, ZnS, CuFeS₂, FeS₂, HgS.</li>
          <li><b>В виде солей</b> — CaCO₃, Ca₃(PO₄)₂, NaCl, CaSO₄·2H₂O, KCl·NaCl.</li>
        </ul>
        <p class="paragraph">Природные соединения металлов, из которых экономически выгодно извлекать металл, называются <b>рудами</b>.</p>
      </div>

      <div class="definition"><span class="term">Металлургия</span> — наука о промышленных способах получения металлов из руд.</div>

      <div class="card">
        <div class="card-title"><span class="num">1️⃣</span> Пирометаллургия</div>
        <p class="paragraph">Получение металлов из руд при высокой температуре с помощью восстановителей (C, CO, H₂, Al, Mg).</p>
        <div class="formula-box">Fe<sub>2</sub>O<sub>3</sub> + 3CO → 2Fe + 3CO<sub>2</sub> (доменный процесс)</div>
        <div class="formula-box">2Al + Cr<sub>2</sub>O<sub>3</sub> → Al<sub>2</sub>O<sub>3</sub> + 2Cr (алюминотермия)</div>
        <div class="formula-box">CuO + H<sub>2</sub> → Cu + H<sub>2</sub>O</div>
        <div class="formula-box">ZnO + C → Zn + CO</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">2️⃣</span> Гидрометаллургия</div>
        <p class="paragraph">Перевод руды в раствор, затем восстановление металла:</p>
        <div class="formula-box">CuO + H<sub>2</sub>SO<sub>4</sub> → CuSO<sub>4</sub> + H<sub>2</sub>O (перевод в раствор)</div>
        <div class="formula-box">CuSO<sub>4</sub> + Fe → FeSO<sub>4</sub> + Cu (вытеснение)</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">3️⃣</span> Электрометаллургия</div>
        <p class="paragraph">Получение металлов с помощью электрического тока:</p>
        <div class="formula-box">2NaCl(расплав) → 2Na + Cl<sub>2</sub> (электролиз)</div>
        <div class="formula-box">2Al<sub>2</sub>O<sub>3</sub>(расплав) → 4Al + 3O<sub>2</sub> (электролиз)</div>
        <div class="formula-box">CuSO<sub>4</sub>(р-р) → Cu + H<sub>2</sub>SO<sub>4</sub> + O<sub>2</sub> (электролиз)</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🏭</span> Доменный процесс</div>
        <p class="paragraph">Получение чугуна из железной руды:</p>
        <ol class="theory-list num">
          <li>Подготовка руды (обогащение, обжиг).</li>
          <li>Загрузка в домну: руда + кокс + известняк.</li>
          <li>Горение кокса: C + O₂ → CO₂.</li>
          <li>Образование восстановителя: CO₂ + C → 2CO.</li>
          <li>Восстановление железа: Fe₂O₃ + 3CO → 2Fe + 3CO₂.</li>
          <li>Удаление примесей: CaCO₃ → CaO + CO₂; CaO + SiO₂ → CaSiO₃ (шлак).</li>
        </ol>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Значение металлургии</div>
        <ul class="theory-list">
          <li>Основа машиностроения, строительства, транспорта.</li>
          <li>Производство стали и чугуна — миллиарды тонн в год.</li>
          <li>Получение редких и цветных металлов (Ti, Mo, W).</li>
          <li>Переработка металлолома.</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Что такое руда?<br>
        <b>Решение:</b> Природное соединение металла, из которого выгодно извлекать металл.<br><br>
        2. Напишите реакцию восстановления Fe₂O₃ углеродом.<br>
        <b>Решение:</b> Fe₂O₃ + 3C → 2Fe + 3CO.<br><br>
        3. Что такое алюминотермия?<br>
        <b>Решение:</b> Восстановление металлов алюминием: 2Al + Fe₂O₃ → Al₂O₃ + 2Fe.<br><br>
        4. Как получают натрий?<br>
        <b>Решение:</b> Электролизом расплава NaCl: 2NaCl → 2Na + Cl₂.
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

    /* ============ ГЛАВА 5 (РАСШИРЕННАЯ) ============ */

  'ch9-5-1': {
    title: '§ 1. Химический состав планеты Земля',
    sub: 'Глава 5. Химия и окружающая среда',
    html: `
      <div class="paragraph">Земля состоит из нескольких оболочек: литосферы (земная кора), гидросферы (водная), атмосферы (воздушная) и биосферы (живая природа). В каждой оболочке свой химический состав.</div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Земная кора (литосфера)</div>
        <p class="paragraph">Основные элементы земной коры:</p>
        <div class="table-wrap"><table>
          <tr><th>Элемент</th><th>Символ</th><th>Массовая доля</th></tr>
          <tr><td>Кислород</td><td>O</td><td>~49,1%</td></tr>
          <tr><td>Кремний</td><td>Si</td><td>~26,0%</td></tr>
          <tr><td>Алюминий</td><td>Al</td><td>~7,5%</td></tr>
          <tr><td>Железо</td><td>Fe</td><td>~4,7%</td></tr>
          <tr><td>Кальций</td><td>Ca</td><td>~3,4%</td></tr>
          <tr><td>Натрий</td><td>Na</td><td>~2,6%</td></tr>
          <tr><td>Калий</td><td>K</td><td>~2,4%</td></tr>
          <tr><td>Магний</td><td>Mg</td><td>~1,9%</td></tr>
          <tr><td>Водород</td><td>H</td><td>~1,0%</td></tr>
          <tr><td>Титан</td><td>Ti</td><td>~0,6%</td></tr>
        </table></div>
        <p class="paragraph">Все остальные элементы вместе — менее 0,5%.</p>
        <div class="note">Первые 8 элементов называют <b>породообразующими</b>: O, Si, Al, Fe, Ca, Na, K, Mg. Они образуют минералы и горные породы.</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⛰️</span> Важнейшие минералы</div>
        <div class="table-wrap"><table>
          <tr><th>Минерал</th><th>Формула</th><th>Что это</th></tr>
          <tr><td>Кварц</td><td>SiO₂</td><td>Песок, горный хрусталь</td></tr>
          <tr><td>Полевой шпат</td><td>K[AlSi₃O₈]</td><td>Гранит, глина</td></tr>
          <tr><td>Слюда</td><td>KAl₂[AlSi₃O₁₀](OH)₂</td><td>Пластинчатый минерал</td></tr>
          <tr><td>Кальцит</td><td>CaCO₃</td><td>Мел, мрамор, известняк</td></tr>
          <tr><td>Гипс</td><td>CaSO₄·2H₂O</td><td>Стройматериал</td></tr>
          <tr><td>Магнетит</td><td>Fe₃O₄</td><td>Железная руда</td></tr>
          <tr><td>Гематит</td><td>Fe₂O₃</td><td>Красный железняк</td></tr>
          <tr><td>Пирит</td><td>FeS₂</td><td>«Золото дураков»</td></tr>
          <tr><td>Галит</td><td>NaCl</td><td>Каменная соль</td></tr>
          <tr><td>Сильвин</td><td>KCl</td><td>Калийная соль</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌊</span> Гидросфера</div>
        <p class="paragraph">Воды на Земле ~1,4 млрд км³. Из них:</p>
        <ul class="theory-list">
          <li>Мировой океан — 96,5% (солёная вода).</li>
          <li>Ледники и снега — 1,7%.</li>
          <li>Подземные воды — 1,7%.</li>
          <li>Реки, озёра, болота — 0,01%.</li>
          <li>Пресная вода — всего 3% от общего запаса.</li>
        </ul>
        <p class="paragraph">Химический состав морской воды (в среднем):</p>
        <div class="table-wrap"><table>
          <tr><th>Ион</th><th>Массовая доля</th></tr>
          <tr><td>Cl⁻</td><td>55,0%</td></tr>
          <tr><td>Na⁺</td><td>30,6%</td></tr>
          <tr><td>SO₄²⁻</td><td>7,7%</td></tr>
          <tr><td>Mg²⁺</td><td>3,7%</td></tr>
          <tr><td>Ca²⁺</td><td>1,2%</td></tr>
          <tr><td>K⁺</td><td>1,1%</td></tr>
        </table></div>
        <p class="paragraph">Средняя солёность морской воды — 35 г солей на 1 л (3,5%).</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">💨</span> Атмосфера</div>
        <p class="paragraph">Состав воздуха по объёму:</p>
        <div class="table-wrap"><table>
          <tr><th>Газ</th><th>Формула</th><th>Объёмная доля</th></tr>
          <tr><td>Азот</td><td>N₂</td><td>78,08%</td></tr>
          <tr><td>Кислород</td><td>O₂</td><td>20,95%</td></tr>
          <tr><td>Аргон</td><td>Ar</td><td>0,93%</td></tr>
          <tr><td>Углекислый газ</td><td>CO₂</td><td>0,03–0,04%</td></tr>
          <tr><td>Прочие</td><td>Ne, He, Kr, Xe, H₂, CH₄</td><td>следы</td></tr>
        </table></div>
        <p class="paragraph">Атмосфера делится на слои:</p>
        <ul class="theory-list">
          <li><b>Тропосфера</b> (0–12 км) — 80% массы воздуха, погода.</li>
          <li><b>Стратосфера</b> (12–50 км) — озоновый слой.</li>
          <li><b>Мезосфера</b> (50–85 км) — самые холодные слои.</li>
          <li><b>Термосфера</b> (85–600 км) — ионизированные газы.</li>
          <li><b>Экзосфера</b> (> 600 км) — переход в космос.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🧬</span> Живые организмы (биосфера)</div>
        <p class="paragraph">Основные элементы жизни — <b>органогены</b>:</p>
        <div class="table-wrap"><table>
          <tr><th>Элемент</th><th>Символ</th><th>Роль</th></tr>
          <tr><td>Углерод</td><td>C</td><td>Основа всех органических веществ</td></tr>
          <tr><td>Водород</td><td>H</td><td>Входит в воду, все орг. соединения</td></tr>
          <tr><td>Кислород</td><td>O</td><td>Входит в воду, белки, жиры, углеводы</td></tr>
          <tr><td>Азот</td><td>N</td><td>Белки, нуклеиновые кислоты</td></tr>
          <tr><td>Фосфор</td><td>P</td><td>ДНК, АТФ, кости, зубы</td></tr>
          <tr><td>Сера</td><td>S</td><td>Аминокислоты (цистеин, метионин)</td></tr>
        </table></div>
        <p class="paragraph">Из этих 6 элементов построено почти всё живое — до 99% массы организма.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Из чего состоит человек</div>
        <div class="table-wrap"><table>
          <tr><th>Элемент</th><th>Массовая доля</th></tr>
          <tr><td>O</td><td>~65%</td></tr>
          <tr><td>C</td><td>~18%</td></tr>
          <tr><td>H</td><td>~10%</td></tr>
          <tr><td>N</td><td>~3%</td></tr>
          <tr><td>Ca</td><td>~1,5%</td></tr>
          <tr><td>P</td><td>~1,0%</td></tr>
          <tr><td>K, S, Na, Cl, Mg</td><td>остальное</td></tr>
        </table></div>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Какие элементы преобладают в земной коре?<br>
        <b>Решение:</b> O (~49%) и Si (~26%).<br><br>
        2. Какой элемент самый распространённый в живых организмах?<br>
        <b>Решение:</b> Кислород O (~65%).<br><br>
        3. Какие ионы преобладают в морской воде?<br>
        <b>Решение:</b> Cl⁻ и Na⁺.<br><br>
        4. Что такое органогены?<br>
        <b>Решение:</b> Элементы, из которых построены живые организмы: C, H, O, N, P, S.
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-5-2': {
    title: '§ 2. Охрана окружающей среды',
    sub: 'Глава 5. Химия и окружающая среда',
    html: `
      <div class="paragraph">Хозяйственная деятельность человека приводит к загрязнению всех оболочек Земли: атмосферы, гидросферы, литосферы. Химия и помогает решать эти проблемы, и создаёт их.</div>

      <div class="card">
        <div class="card-title"><span class="num">⚠️</span> Источники загрязнения</div>
        <p class="paragraph"><b>1. Промышленность:</b></p>
        <ul class="theory-list">
          <li>Выбросы SO₂, NO₂, CO, пыли, тяжёлых металлов.</li>
          <li>Сточные воды с кислотами, щелочами, органическими веществами.</li>
          <li>Твёрдые отходы, шлаки, шламы.</li>
        </ul>
        <p class="paragraph"><b>2. Транспорт:</b></p>
        <ul class="theory-list">
          <li>Выхлопные газы: CO, NO₂, сажа, углеводороды.</li>
          <li>Утечки топлива и масел.</li>
          <li>Шумовое загрязнение.</li>
        </ul>
        <p class="paragraph"><b>3. Сельское хозяйство:</b></p>
        <ul class="theory-list">
          <li>Избыток минеральных удобрений (нитраты, фосфаты).</li>
          <li>Пестициды, гербициды.</li>
          <li>Отходы животноводства.</li>
        </ul>
        <p class="paragraph"><b>4. Быт:</b></p>
        <ul class="theory-list">
          <li>Твёрдые бытовые отходы (пластик, стекло, бумага).</li>
          <li>Моющие средства.</li>
          <li>Лекарства, батарейки.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">☠️</span> Глобальные экологические проблемы</div>
        <p class="paragraph"><b>1. Парниковый эффект</b> — повышение температуры из-за роста концентрации CO₂, CH₄, N₂O.</p>
        <ul class="theory-list">
          <li>Источники: сжигание топлива, промышленность, транспорт.</li>
          <li>Последствия: таяние ледников, повышение уровня океана, климатические изменения.</li>
        </ul>

        <p class="paragraph"><b>2. Кислотные дожди</b> — выпадение осадков с pH &lt; 5,6.</p>
        <div class="formula-box">SO<sub>2</sub> + H<sub>2</sub>O → H<sub>2</sub>SO<sub>3</sub></div>
        <div class="formula-box">2SO<sub>2</sub> + O<sub>2</sub> + 2H<sub>2</sub>O → 2H<sub>2</sub>SO<sub>4</sub></div>
        <div class="formula-box">3NO<sub>2</sub> + H<sub>2</sub>O → 2HNO<sub>3</sub> + NO</div>
        <ul class="theory-list">
          <li>Разрушают здания, памятники, металл.</li>
          <li>Губят леса, рыб в озёрах.</li>
          <li>Ухудшают почву.</li>
        </ul>

        <p class="paragraph"><b>3. Озоновые дыры</b> — уменьшение озонового слоя из-за фреонов (CFC).</p>
        <ul class="theory-list">
          <li>Озоновый слой защищает от УФ-излучения.</li>
          <li>Разрушают фреоны: Cl + O₃ → ClO + O₂.</li>
          <li>В 1987 г. подписан Монреальский протокол о запрете фреонов.</li>
        </ul>

        <p class="paragraph"><b>4. Загрязнение водоёмов</b> — сброс сточных вод, нефтяные разливы, эвтрофикация.</p>

        <p class="paragraph"><b>5. Накопление твёрдых отходов</b> — особенно пластика.</p>
        <ul class="theory-list">
          <li>Пластик разлагается 400–500 лет.</li>
          <li>Микропластик попадает в воду и пищу.</li>
        </ul>

        <p class="paragraph"><b>6. Загрязнение почвы</b> — пестициды, тяжёлые металлы (Pb, Cd, Hg, As).</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🛡️</span> Способы защиты</div>
        <p class="paragraph"><b>1. Очистные сооружения:</b></p>
        <ul class="theory-list">
          <li>Механическая очистка — отстойники, фильтры.</li>
          <li>Химическая очистка — нейтрализация, осаждение.</li>
          <li>Биологическая очистка — с помощью микроорганизмов.</li>
          <li>Фильтры для газов — улавливание SO₂, NO₂, пыли.</li>
        </ul>

        <p class="paragraph"><b>2. Безотходные технологии:</b></p>
        <ul class="theory-list">
          <li>Замкнутый цикл производства.</li>
          <li>Переработка отходов одного производства в сырьё другого.</li>
          <li>Использование вторичного сырья.</li>
        </ul>

        <p class="paragraph"><b>3. Переработка отходов (recycling):</b></p>
        <ul class="theory-list">
          <li>Сортировка мусора (макулатура, стекло, металл, пластик).</li>
          <li>Компостирование органики.</li>
          <li>Сжигание с получением энергии (с фильтрацией).</li>
        </ul>

        <p class="paragraph"><b>4. Альтернативная энергетика:</b></p>
        <ul class="theory-list">
          <li>Солнечная, ветровая, гидро-, геотермальная.</li>
          <li>Не выделяют CO₂.</li>
        </ul>

        <p class="paragraph"><b>5. Зелёные насаждения:</b></p>
        <ul class="theory-list">
          <li>Поглощают CO₂ и выделяют O₂ (фотосинтез).</li>
          <li>Очищают воздух от пыли и газов.</li>
          <li>Сохраняют почву от эрозии.</li>
        </ul>

        <p class="paragraph"><b>6. Охрана редких видов, заповедники.</b></p>

        <p class="paragraph"><b>7. Международные соглашения:</b> Киотский протокол (1997), Парижское соглашение (2015), Монреальский протокол (1987).</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌱</span> Химия помогает экологии</div>
        <ul class="theory-list">
          <li>Создание катализаторов для нейтрализации выхлопных газов.</li>
          <li>Производство биоразлагаемых полимеров.</li>
          <li>Разработка новых источников энергии (водородная энергетика).</li>
          <li>Химические методы очистки воды (озонирование, УФ-обеззараживание).</li>
          <li>Получение экологически чистых удобрений.</li>
          <li>Разработка систем рециклинга.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🇷🇺</span> Охрана природы в России</div>
        <ul class="theory-list">
          <li>Заповедники (Баргузинский, Большой Арктический, Астраханский).</li>
          <li>Национальные парки (Лосиный Остров, Сочинский, Прибайкальский).</li>
          <li>Красная книга РФ.</li>
          <li>ФЗ «Об охране окружающей среды».</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Какие газы вызывают кислотные дожди?<br>
        <b>Решение:</b> SO₂, SO₃, NO₂, NO.<br><br>
        2. Напишите реакцию образования серной кислоты в атмосфере.<br>
        <b>Решение:</b> 2SO₂ + O₂ + 2H₂O → 2H₂SO₄.<br><br>
        3. Какие газы вызывают парниковый эффект?<br>
        <b>Решение:</b> CO₂, CH₄, N₂O, пары воды.<br><br>
        4. Что такое безотходные технологии?<br>
        <b>Решение:</b> Производства, при которых отходы одного процесса служат сырьём для другого.<br><br>
        5. Что делает химия для охраны природы?<br>
        <b>Решение:</b> Создаёт катализаторы, биоразлагаемые полимеры, современные системы очистки, альтернативные источники энергии.
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

    /* ============ ГЛАВА 6 (РАСШИРЕННАЯ) ============ */

  'ch9-6-1': {
    title: '§ 1. Вещества',
    sub: 'Глава 6. Обобщение знаний. Подготовка к ОГЭ',
    html: `
      <div class="paragraph">В этом параграфе мы обобщаем всё, что знаем о веществах: их состав, строение, свойства и классификацию.</div>

      <div class="card">
        <div class="card-title"><span class="num">📚</span> Классификация веществ</div>
        <p class="paragraph"><b>Простые вещества</b> — состоят из атомов одного элемента:</p>
        <ul class="theory-list">
          <li><b>Металлы:</b> Na, K, Ca, Mg, Al, Fe, Cu, Zn, Ag, Au, Hg, Pb.</li>
          <li><b>Неметаллы:</b> H₂, O₂, N₂, Cl₂, F₂, Br₂, I₂, S, P, C, Si.</li>
          <li><b>Благородные газы:</b> He, Ne, Ar, Kr, Xe, Rn.</li>
        </ul>
        <p class="paragraph"><b>Сложные вещества</b>:</p>
        <div class="table-wrap"><table>
          <tr><th>Класс</th><th>Определение</th><th>Примеры</th></tr>
          <tr><td>Оксиды</td><td>Два элемента, один — O(−2)</td><td>Na₂O, CO₂, Al₂O₃, SO₃</td></tr>
          <tr><td>Основания</td><td>Металл + OH-группы</td><td>NaOH, Cu(OH)₂, Al(OH)₃</td></tr>
          <tr><td>Кислоты</td><td>H + кислотный остаток</td><td>HCl, H₂SO₄, H₃PO₄</td></tr>
          <tr><td>Соли</td><td>Металл + кислотный остаток</td><td>NaCl, K₂SO₄, CaCO₃</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚛️</span> Строение атома (кратко)</div>
        <ul class="theory-list">
          <li><b>Протоны</b> — в ядре, заряд +1, число = порядковый номер.</li>
          <li><b>Нейтроны</b> — в ядре, заряд 0, число = Ar − число протонов.</li>
          <li><b>Электроны</b> — вокруг ядра, заряд −1, число = число протонов.</li>
          <li>Число электронных уровней = номер периода.</li>
          <li>Число электронов на внешнем уровне = номер группы (для A).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔗</span> Типы химической связи</div>
        <div class="table-wrap"><table>
          <tr><th>Тип</th><th>Между кем</th><th>Механизм</th><th>Примеры</th></tr>
          <tr><td>Ионная</td><td>Металл + неметалл</td><td>Переход e⁻</td><td>NaCl, CaO, KBr</td></tr>
          <tr><td>Ковалентная неполярная</td><td>Одинаковые неметаллы</td><td>Общая пара</td><td>H₂, O₂, N₂, Cl₂</td></tr>
          <tr><td>Ковалентная полярная</td><td>Разные неметаллы</td><td>Общая пара, смещена</td><td>HCl, H₂O, NH₃</td></tr>
          <tr><td>Металлическая</td><td>Металлы</td><td>Общие e⁻ у всех ионов</td><td>Cu, Fe, Al</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">💎</span> Кристаллические решётки</div>
        <div class="table-wrap"><table>
          <tr><th>Тип</th><th>Частицы в узлах</th><th>Свойства</th><th>Примеры</th></tr>
          <tr><td>Ионная</td><td>Ионы</td><td>Твёрдые, тугоплавкие, растворимы</td><td>NaCl, CaO</td></tr>
          <tr><td>Атомная</td><td>Атомы</td><td>Очень твёрдые, тугоплавкие</td><td>Алмаз, SiO₂, SiC</td></tr>
          <tr><td>Молекулярная</td><td>Молекулы</td><td>Легкоплавкие, летучие</td><td>H₂O, CO₂, I₂</td></tr>
          <tr><td>Металлическая</td><td>Ионы + e⁻</td><td>Ковкие, проводят ток</td><td>Cu, Fe, Al</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔢</span> Степени окисления (ключевые правила)</div>
        <ul class="theory-list">
          <li>В простых веществах — 0.</li>
          <li>Сумма в молекуле = 0, в ионе = заряду иона.</li>
          <li>H обычно +1 (в гидридах −1).</li>
          <li>O обычно −2 (в H₂O₂ −1, в OF₂ +2).</li>
          <li>F всегда −1.</li>
          <li>Металлы I-A: +1, II-A: +2, Al: +3.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Ряд активности металлов</div>
        <div class="formula-box">Li → K → Ba → Ca → Na → Mg → Al → Mn → Zn → Cr → Fe → Ni → Sn → Pb → <b>(H)</b> → Cu → Hg → Ag → Pt → Au</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📐</span> Основные формулы</div>
        <div class="formula-box">n = m / M</div>
        <div class="formula-box">n = V / 22,4 (для газов при н.у.)</div>
        <div class="formula-box">N = n · 6,02·10<sup>23</sup></div>
        <div class="formula-box">ω(эл.) = Ar·n / Mr · 100%</div>
        <div class="formula-box">ω(в-ва) = m(в-ва) / m(р-ра) · 100%</div>
      </div>

      <div class="task-box">
        <div class="lbl">Типовые задания ОГЭ</div>
        1. Определите класс каждого вещества: K₂O, H₂SiO₃, Al(OH)₃, FeCl₃, Zn, O₂.<br>
        <b>Решение:</b> K₂O — основный оксид; H₂SiO₃ — кислота; Al(OH)₃ — амфотерный гидроксид; FeCl₃ — соль; Zn — металл; O₂ — неметалл.<br><br>
        2. Определите тип связи в Na₂S, H₂, HCl, Fe.<br>
        <b>Решение:</b> Na₂S — ионная; H₂ — ковалентная неполярная; HCl — ковалентная полярная; Fe — металлическая.<br><br>
        3. Найдите Mr(H₃PO₄) и ω(P).<br>
        <b>Решение:</b> Mr = 3·1 + 31 + 4·16 = 98. ω(P) = 31/98 = 31,6%.
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-6-2': {
    title: '§ 2. Химические реакции',
    sub: 'Глава 6. Обобщение знаний. Подготовка к ОГЭ',
    html: `
      <div class="paragraph">Обобщаем всё о химических реакциях: типы, закономерности, окислительно-восстановительные процессы, ионные уравнения, гидролиз.</div>

      <div class="card">
        <div class="card-title"><span class="num">1️⃣</span> Классификация по числу и составу веществ</div>
        <div class="table-wrap"><table>
          <tr><th>Тип</th><th>Схема</th><th>Пример</th></tr>
          <tr><td>Соединения</td><td>A + B → AB</td><td>CaO + CO₂ → CaCO₃</td></tr>
          <tr><td>Разложения</td><td>AB → A + B</td><td>CaCO₃ → CaO + CO₂↑</td></tr>
          <tr><td>Замещения</td><td>A + BC → AC + B</td><td>Fe + CuSO₄ → FeSO₄ + Cu</td></tr>
          <tr><td>Обмена</td><td>AB + CD → AD + CB</td><td>NaOH + HCl → NaCl + H₂O</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">2️⃣</span> Классификация по другим признакам</div>
        <ul class="theory-list">
          <li><b>По тепловому эффекту:</b> экзотермические (+Q) и эндотермические (−Q).</li>
          <li><b>По обратимости:</b> обратимые (⇄) и необратимые (→).</li>
          <li><b>По изменению с. о.:</b> ОВР и не ОВР.</li>
          <li><b>По фазовому составу:</b> гомогенные и гетерогенные.</li>
          <li><b>По катализатору:</b> каталитические и некаталитические.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔺</span> Окислительно-восстановительные реакции</div>
        <p class="paragraph"><b>Окисление</b> — отдача e⁻, с. о. ↑. Вещество — <b>восстановитель</b>.</p>
        <p class="paragraph"><b>Восстановление</b> — принятие e⁻, с. о. ↓. Вещество — <b>окислитель</b>.</p>

        <p class="paragraph"><b>Метод электронного баланса:</b></p>
        <ol class="theory-list num">
          <li>Расставить с. о. всех элементов.</li>
          <li>Найти элементы, у которых с. о. изменилась.</li>
          <li>Составить схемы окисления и восстановления.</li>
          <li>Уравнять число отданных и принятых e⁻.</li>
          <li>Расставить коэффициенты.</li>
        </ol>

        <div class="example-box">
          <div class="lbl">Пример</div>
          <b>2H₂S + 3O₂ → 2SO₂ + 2H₂O</b><br>
          S⁻² − 6e⁻ → S⁺⁴ | × 2 (окисление)<br>
          O₂⁰ + 4e⁻ → 2O⁻² | × 3 (восстановление)
        </div>

        <p class="paragraph"><b>Типичные окислители:</b> O₂, Cl₂, F₂, HNO₃, H₂SO₄(конц), KMnO₄, K₂Cr₂O₇.</p>
        <p class="paragraph"><b>Типичные восстановители:</b> H₂, C, CO, металлы, H₂S, NH₃.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌊</span> Реакции ионного обмена</div>
        <p class="paragraph">Идут до конца, если образуется:</p>
        <ul class="theory-list">
          <li><b>Осадок</b> — нерастворимое вещество.</li>
          <li><b>Газ</b> — CO₂, SO₂, NH₃, H₂S.</li>
          <li><b>Вода</b> — при нейтрализации.</li>
          <li><b>Слабый электролит</b> — CH₃COOH, H₂CO₃.</li>
        </ul>
        <p class="paragraph"><b>Пример — три формы уравнения:</b></p>
        <div class="formula-box">AgNO<sub>3</sub> + NaCl → AgCl↓ + NaNO<sub>3</sub> (молекулярное)</div>
        <div class="formula-box">Ag<sup>+</sup> + NO<sub>3</sub><sup>-</sup> + Na<sup>+</sup> + Cl<sup>-</sup> → AgCl↓ + Na<sup>+</sup> + NO<sub>3</sub><sup>-</sup> (полное ионное)</div>
        <div class="formula-box">Ag<sup>+</sup> + Cl<sup>-</sup> → AgCl↓ (сокращённое ионное)</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Гидролиз солей</div>
        <div class="table-wrap"><table>
          <tr><th>Тип соли</th><th>Гидролиз</th><th>pH</th><th>Пример</th></tr>
          <tr><td>Сильное + сильное</td><td>Нет</td><td>7</td><td>NaCl</td></tr>
          <tr><td>Слабое + сильное</td><td>По катиону</td><td>&lt; 7</td><td>NH₄Cl</td></tr>
          <tr><td>Сильное + слабое</td><td>По аниону</td><td>&gt; 7</td><td>Na₂CO₃</td></tr>
          <tr><td>Слабое + слабое</td><td>Полный</td><td>≈ 7</td><td>CH₃COONH₄</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚡</span> Скорость реакции и равновесие</div>
        <p class="paragraph"><b>Факторы скорости:</b> природа веществ, концентрация, температура, площадь поверхности, катализатор, давление.</p>
        <div class="formula-box">v = k · [A] · [B] (закон действующих масс)</div>
        <div class="formula-box">v<sub>2</sub>/v<sub>1</sub> = γ<sup>ΔT/10</sup> (правило Вант-Гоффа)</div>
        <p class="paragraph"><b>Принцип Ле Шателье:</b> при внешнем воздействии равновесие смещается так, чтобы ослабить это воздействие.</p>
        <ul class="theory-list">
          <li>↑ температуры → в сторону эндотермической.</li>
          <li>↑ давления → в сторону меньшего числа молекул газа.</li>
          <li>↑ концентрации реагента → в сторону продуктов.</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Типовые задания ОГЭ</div>
        1. Расставьте коэффициенты методом электронного баланса: Cu + HNO₃(разб) → Cu(NO₃)₂ + NO + H₂O.<br>
        <b>Решение:</b> Cu⁰ − 2e⁻ → Cu²⁺ | ×3; N⁺⁵ + 3e⁻ → N⁺² | ×2.<br>3Cu + 8HNO₃ → 3Cu(NO₃)₂ + 2NO↑ + 4H₂O.<br><br>
        2. Напишите ионное уравнение: BaCl₂ + Na₂SO₄.<br>
        <b>Решение:</b> Ba²⁺ + SO₄²⁻ → BaSO₄↓.<br><br>
        3. Определите среду раствора Na₂S.<br>
        <b>Решение:</b> Соль сильного основания и слабой кислоты. Гидролиз по аниону, среда щелочная (pH > 7).
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-6-3': {
    title: '§ 3. Основы неорганической химии',
    sub: 'Глава 6. Обобщение знаний. Подготовка к ОГЭ',
    html: `
      <div class="paragraph">Обобщаем свойства всех классов неорганических соединений и связи между ними.</div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Оксиды: свойства</div>
        <p class="paragraph"><b>Основные</b> реагируют с:</p>
        <ul class="theory-list">
          <li>кислотами: CuO + 2HCl → CuCl₂ + H₂O</li>
          <li>кислотными оксидами: CaO + CO₂ → CaCO₃</li>
          <li>водой (только щелочных и щёлочноземельных металлов): CaO + H₂O → Ca(OH)₂</li>
        </ul>
        <p class="paragraph"><b>Кислотные</b> реагируют с:</p>
        <ul class="theory-list">
          <li>основаниями: CO₂ + 2NaOH → Na₂CO₃ + H₂O</li>
          <li>основными оксидами: CO₂ + CaO → CaCO₃</li>
          <li>водой: CO₂ + H₂O → H₂CO₃</li>
        </ul>
        <p class="paragraph"><b>Амфотерные</b> реагируют и с кислотами, и со щелочами:</p>
        <div class="formula-box">Al<sub>2</sub>O<sub>3</sub> + 6HCl → 2AlCl<sub>3</sub> + 3H<sub>2</sub>O</div>
        <div class="formula-box">Al<sub>2</sub>O<sub>3</sub> + 2NaOH → 2NaAlO<sub>2</sub> + H<sub>2</sub>O</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Основания: свойства</div>
        <ul class="theory-list">
          <li>+ кислота → соль + H₂O: NaOH + HCl → NaCl + H₂O</li>
          <li>+ кислотный оксид → соль + H₂O: 2NaOH + CO₂ → Na₂CO₃ + H₂O</li>
          <li>+ соль → новая соль + новое основание: 2NaOH + CuSO₄ → Cu(OH)₂↓ + Na₂SO₄</li>
          <li>Нерастворимые при нагревании разлагаются: Cu(OH)₂ → CuO + H₂O</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Кислоты: свойства</div>
        <ul class="theory-list">
          <li>+ металл (до H) → соль + H₂: Zn + 2HCl → ZnCl₂ + H₂↑</li>
          <li>+ основный оксид → соль + H₂O: CuO + H₂SO₄ → CuSO₄ + H₂O</li>
          <li>+ основание → соль + H₂O: NaOH + HCl → NaCl + H₂O</li>
          <li>+ соль → новая соль + новая кислота: AgNO₃ + HCl → AgCl↓ + HNO₃</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Соли: свойства</div>
        <ul class="theory-list">
          <li>+ металл (более активный): Fe + CuSO₄ → FeSO₄ + Cu</li>
          <li>+ кислота (если газ/осадок): CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑</li>
          <li>+ щёлочь: CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄</li>
          <li>+ другая соль: AgNO₃ + NaCl → AgCl↓ + NaNO₃</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔗</span> Генетическая связь</div>
        <div class="formula-box">Металл → Основный оксид → Основание → Соль</div>
        <div class="formula-box">Неметалл → Кислотный оксид → Кислота → Соль</div>
        <p class="paragraph"><b>Пример:</b> Ba → BaO → Ba(OH)₂ → BaCl₂</p>
        <ul class="theory-list">
          <li>2Ba + O₂ → 2BaO</li>
          <li>BaO + H₂O → Ba(OH)₂</li>
          <li>Ba(OH)₂ + 2HCl → BaCl₂ + 2H₂O</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Таблица растворимости — что нужно помнить</div>
        <ul class="theory-list">
          <li><b>Все растворимы:</b> соли Na⁺, K⁺, NH₄⁺; все нитраты; все гидрокарбонаты.</li>
          <li><b>Нерастворимы:</b> AgCl, AgBr, AgI, BaSO₄, CaCO₃, CuS, PbS, Al(OH)₃, Cu(OH)₂, Fe(OH)₃.</li>
          <li><b>Малорастворимы:</b> CaSO₄, MgCO₃, Li₂CO₃, Ca(OH)₂.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Получение основных классов</div>
        <div class="table-wrap"><table>
          <tr><th>Класс</th><th>Способы получения</th></tr>
          <tr><td>Оксиды</td><td>Окисление простых веществ, разложение оснований, солей, кислот</td></tr>
          <tr><td>Основания</td><td>Металл + вода, оксид + вода, соль + щёлочь</td></tr>
          <tr><td>Кислоты</td><td>Оксид + вода, H₂ + неметалл, соль + кислота</td></tr>
          <tr><td>Соли</td><td>Металл + кислота, оксид + кислота/щёлочь, основание + кислота, соль + соль</td></tr>
        </table></div>
      </div>

      <div class="task-box">
        <div class="lbl">Типовые задания ОГЭ</div>
        1. Осуществите цепочку: Cu → CuO → CuCl₂ → Cu(OH)₂ → CuO.<br>
        <b>Решение:</b><br>
        2Cu + O₂ → 2CuO<br>
        CuO + 2HCl → CuCl₂ + H₂O<br>
        CuCl₂ + 2NaOH → Cu(OH)₂↓ + 2NaCl<br>
        Cu(OH)₂ → CuO + H₂O.<br><br>
        2. С какими веществами реагирует HCl: Zn, Cu, CuO, NaOH, AgNO₃?<br>
        <b>Решение:</b> Zn (H₂↑), CuO (CuCl₂ + H₂O), NaOH (NaCl + H₂O), AgNO₃ (AgCl↓). Cu — не реагирует.<br><br>
        3. Напишите реакцию между Al(OH)₃ и NaOH.<br>
        <b>Решение:</b> Al(OH)₃ + NaOH → Na[Al(OH)₄] (амфотерный).
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch9-6-4': {
    title: '§ 4. Качественные реакции',
    sub: 'Глава 6. Обобщение знаний. Подготовка к ОГЭ',
    html: `
      <div class="paragraph">Качественные реакции позволяют обнаружить конкретные ионы или вещества по внешним признакам: цвет, осадок, газ, запах.</div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Качественные реакции на катионы</div>
        <div class="table-wrap"><table>
          <tr><th>Катион</th><th>Реактив</th><th>Признак</th></tr>
          <tr><td>H⁺</td><td>Лакмус, метилоранж</td><td>Красный / розовый</td></tr>
          <tr><td>Li⁺</td><td>Пламя</td><td>Карминово-красное</td></tr>
          <tr><td>Na⁺</td><td>Пламя</td><td>Жёлтое</td></tr>
          <tr><td>K⁺</td><td>Пламя</td><td>Фиолетовое</td></tr>
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
          <tr><td>SO₃²⁻</td><td>HCl</td><td>Газ SO₂ с резким запахом</td></tr>
          <tr><td>CO₃²⁻</td><td>HCl</td><td>Газ CO₂ (мутит известковую воду)</td></tr>
          <tr><td>PO₄³⁻</td><td>AgNO₃</td><td>Жёлтый осадок</td></tr>
          <tr><td>S²⁻</td><td>Pb(NO₃)₂</td><td>Чёрный осадок PbS</td></tr>
          <tr><td>SiO₃²⁻</td><td>HCl</td><td>Студенистый осадок H₂SiO₃</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Качественные реакции на газы</div>
        <div class="table-wrap"><table>
          <tr><th>Газ</th><th>Как обнаружить</th><th>Признак</th></tr>
          <tr><td>O₂</td><td>Тлеющая лучинка</td><td>Вспыхивает</td></tr>
          <tr><td>H₂</td><td>Поджигание</td><td>Хлопок, «лающий» звук</td></tr>
          <tr><td>CO₂</td><td>Известковая вода</td><td>Помутнение</td></tr>
          <tr><td>CO</td><td>Поджигание</td><td>Синее пламя</td></tr>
          <tr><td>SO₂</td><td>Раствор KMnO₄</td><td>Обесцвечивание</td></tr>
          <tr><td>NH₃</td><td>Влажный лакмус</td><td>Синеет, резкий запах</td></tr>
          <tr><td>Cl₂</td><td>Влажный KI-крахмал</td><td>Синеет</td></tr>
          <tr><td>HCl</td><td>Влажный лакмус, AgNO₃</td><td>Краснеет, белый осадок</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Цвета осадков — шпаргалка</div>
        <div class="table-wrap"><table>
          <tr><th>Осадок</th><th>Цвет</th></tr>
          <tr><td>AgCl</td><td>Белый</td></tr>
          <tr><td>AgBr</td><td>Кремовый</td></tr>
          <tr><td>AgI</td><td>Жёлтый</td></tr>
          <tr><td>BaSO₄</td><td>Белый</td></tr>
          <tr><td>CaCO₃</td><td>Белый</td></tr>
          <tr><td>Cu(OH)₂</td><td>Голубой</td></tr>
          <tr><td>Fe(OH)₂</td><td>Серо-зелёный</td></tr>
          <tr><td>Fe(OH)₃</td><td>Красно-бурый</td></tr>
          <tr><td>Al(OH)₃</td><td>Белый студенистый</td></tr>
          <tr><td>PbS, CuS, FeS</td><td>Чёрный</td></tr>
          <tr><td>PbI₂</td><td>Ярко-жёлтый</td></tr>
          <tr><td>Ag₃PO₄</td><td>Жёлтый</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Цвета растворов</div>
        <div class="table-wrap"><table>
          <tr><th>Ион</th><th>Цвет раствора</th></tr>
          <tr><td>Cu²⁺</td><td>Голубой</td></tr>
          <tr><td>Fe²⁺</td><td>Светло-зелёный</td></tr>
          <tr><td>Fe³⁺</td><td>Жёлто-бурый</td></tr>
          <tr><td>MnO₄⁻</td><td>Фиолетовый</td></tr>
          <tr><td>Cr₂O₇²⁻</td><td>Оранжевый</td></tr>
          <tr><td>Cr³⁺</td><td>Зелёный</td></tr>
          <tr><td>Ni²⁺</td><td>Зелёный</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🎨</span> Индикаторы</div>
        <div class="table-wrap"><table>
          <tr><th>Индикатор</th><th>В кислоте</th><th>В нейтральной</th><th>В щёлочи</th></tr>
          <tr><td>Лакмус</td><td>Красный</td><td>Фиолетовый</td><td>Синий</td></tr>
          <tr><td>Метилоранж</td><td>Розовый</td><td>Оранжевый</td><td>Жёлтый</td></tr>
          <tr><td>Фенолфталеин</td><td>Бесцветный</td><td>Бесцветный</td><td>Малиновый</td></tr>
          <tr><td>Универсальный</td><td>Красный</td><td>Жёлто-зелёный</td><td>Синий</td></tr>
        </table></div>
      </div>

      <div class="task-box">
        <div class="lbl">Типовые задания ОГЭ</div>
        1. Как отличить растворы NaCl, NaBr, NaI?<br>
        <b>Решение:</b> Добавить AgNO₃. AgCl — белый, AgBr — кремовый, AgI — жёлтый.<br><br>
        2. Как отличить растворы Na₂SO₄ и Na₂CO₃?<br>
        <b>Решение:</b> Добавить HCl: в Na₂CO₃ выделяется газ CO₂.<br><br>
        3. Как обнаружить ион Fe³⁺?<br>
        <b>Решение:</b> Добавить KSCN — появляется кроваво-красная окраска.<br><br>
        4. Как обнаружить ион NH₄⁺?<br>
        <b>Решение:</b> Добавить NaOH и нагреть — появляется запах аммиака.<br><br>
        5. В какой пробирке — CuSO₄, FeSO₄, FeCl₃?<br>
        <b>Решение:</b> По цвету: CuSO₄ — голубой, FeSO₄ — светло-зелёный, FeCl₃ — жёлто-бурый.
      </div>

      <a href="https://rutube.ru/plst/1281771/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  }
};
