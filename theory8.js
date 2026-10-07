// theory8.js — теория 8 класса (Габриелян, 2025)

var PAGES_8 = {

  /* ============ ГЛАВА 1 (РАСШИРЕННАЯ) ============ */

  'ch8-1-1': {
    title: '§ 1. Предмет химии. Роль химии в жизни человека',
    sub: 'Глава 1. Первоначальные химические понятия',
    html: `
      <div class="definition"><span class="term">Химия</span> — наука о веществах, их составе, строении, свойствах, превращениях и явлениях, сопровождающих эти превращения.</div>

      <div class="card">
        <div class="card-title"><span class="num">📖</span> Разбор определения</div>
        <p class="paragraph">Слово «химия» происходит от греческого <i>chēmeia</i> — «искусство плавки металлов». Разберём определение по частям:</p>
        <ul class="theory-list">
          <li><b>Вещество</b> — то, из чего состоит физическое тело. Стекло — тело, стекло как материал — вещество.</li>
          <li><b>Состав</b> — из каких элементов состоит вещество. Вода H₂O состоит из водорода и кислорода.</li>
          <li><b>Строение</b> — как атомы расположены и связаны. Алмаз и графит — оба углерод, но разное строение.</li>
          <li><b>Свойства</b> — признаки вещества: цвет, запах, температура плавления, растворимость.</li>
          <li><b>Превращения</b> — превращения одних веществ в другие (химические реакции).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🏛️</span> Из истории химии</div>
        <ul class="theory-list">
          <li><b>Древний Египет</b> (IV–III тыс. до н. э.) — обработка металлов, изготовление стекла и красок.</li>
          <li><b>Алхимия</b> (IV–XVI вв.) — поиск философского камня, превращение металлов в золото. Не увенчалась успехом, но открыли много веществ и приборов.</li>
          <li><b>Роберт Бойль</b> (1661) — ввёл понятие «химический элемент», отделил химию от алхимии.</li>
          <li><b>М. В. Ломоносов</b> (1748) — открыл закон сохранения массы.</li>
          <li><b>Д. И. Менделеев</b> (1869) — открыл периодический закон.</li>
          <li><b>А. М. Бутлеров</b> (1861) — теория строения органических веществ.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚛️</span> Основные понятия</div>
        <div class="definition"><span class="term">Атом</span> — мельчайшая химически неделимая частица вещества. Состоит из ядра и электронов.</div>
        <div class="definition"><span class="term">Молекула</span> — мельчайшая частица вещества, обладающая всеми его химическими свойствами. Состоит из атомов.</div>
        <div class="definition"><span class="term">Химический элемент</span> — вид атомов с одинаковым зарядом ядра.</div>
        <div class="note">Разница: атом — «кирпичик», молекула — «постройка из кирпичиков». Элемент — «тип кирпичика».</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Роль химии в жизни человека</div>
        <p class="paragraph">Химия окружает нас повсюду. Без неё невозможно представить современный мир:</p>
        <ul class="theory-list">
          <li><b>Медицина</b> — лекарства (аспирин, антибиотики), вакцины, антисептики.</li>
          <li><b>Сельское хозяйство</b> — удобрения (нитраты, фосфаты, калийные), пестициды, гербициды.</li>
          <li><b>Промышленность</b> — металлы, пластмассы, топливо, краски, стекло, цемент.</li>
          <li><b>Быт</b> — мыло, стиральные порошки, шампуни, косметика, продукты питания.</li>
          <li><b>Энергетика</b> — нефть, газ, уголь, аккумуляторы, солнечные панели.</li>
          <li><b>Наука</b> — новые материалы, лекарства, космические технологии.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📋</span> Простые и сложные вещества</div>
        <ul class="theory-list">
          <li><b>Простое вещество</b> — из атомов одного элемента: O₂, H₂, N₂, Fe, S, Cu, Al, C.</li>
          <li><b>Сложное вещество</b> — из атомов разных элементов: H₂O, CO₂, NaCl, H₂SO₄.</li>
        </ul>
      </div>

      <div class="example-box">
        <div class="lbl">Примеры веществ вокруг нас</div>
        <b>H₂O</b> — вода · <b>O₂</b> — кислород · <b>CO₂</b> — углекислый газ · <b>NaCl</b> — поваренная соль · <b>C₆H₁₂O₆</b> — глюкоза · <b>Fe</b> — железо · <b>Cu</b> — медь · <b>SiO₂</b> — кварц (песок)
      </div>

      <div class="card">
        <div class="card-title"><span class="num">✏️</span> Задачи</div>
        <div class="task-box">
          <div class="lbl">Задача 1</div>
          Какие из перечисленных веществ — простые, а какие — сложные: O₂, H₂O, Fe, CO₂, NaCl, S?
          <br><b>Решение:</b> простые — O₂, Fe, S. Сложные — H₂O, CO₂, NaCl.
        </div>
        <div class="task-box">
          <div class="lbl">Задача 2</div>
          Приведи 3 примера физических тел, сделанных из железа и из стекла.
          <br><b>Решение:</b> из железа — гвоздь, ложка, ключ. Из стекла — окно, бутылка, очки.
        </div>
        <div class="task-box">
          <div class="lbl">Задача 3</div>
          Назови 5 бытовых предметов, сделанных с использованием химии.
          <br><b>Решение:</b> мыло, зубная паста, посуда, одежда (ткани), пластиковые бутылки.
        </div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚠️</span> Типичные ошибки</div>
        <ul class="theory-list">
          <li>Путают «тело» и «вещество». Стол — это тело, дерево — вещество.</li>
          <li>Путают «простое вещество» и «химический элемент». O₂ — простое вещество, а O — элемент.</li>
          <li>Считают, что воздух — простое вещество. Нет, это смесь газов.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">💡</span> Запомни</div>
        <ul class="theory-list">
          <li>Химия — наука о веществах и их превращениях.</li>
          <li>Основа всего — атом, молекула, химический элемент.</li>
          <li>Вещество ≠ тело. Тело — предмет, вещество — материал.</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Проверь себя</div>
        1. Что такое химия?<br>
        2. Чем отличается атом от молекулы?<br>
        3. Что такое химический элемент?<br>
        4. Приведи 3 примера простых и 3 примера сложных веществ.<br>
        5. Чем тело отличается от вещества?
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-1-2': {
    title: '§ 2. Методы изучения химии',
    sub: 'Глава 1. Первоначальные химические понятия',
    html: `
      <div class="paragraph">Химия — наука экспериментальная. Основные методы: наблюдение, эксперимент, моделирование, измерение, анализ, синтез.</div>

      <div class="card">
        <div class="card-title"><span class="num">👁️</span> Наблюдение</div>
        <div class="definition"><span class="term">Наблюдение</span> — целенаправленное восприятие предметов и явлений с помощью органов чувств.</div>
        <p class="paragraph">Бывает:</p>
        <ul class="theory-list">
          <li><b>Качественное</b> — отвечает на вопрос «что происходит?». Пример: при горении магния — яркое белое пламя.</li>
          <li><b>Количественное</b> — отвечает на вопрос «сколько?». Пример: объём газа 2 л.</li>
        </ul>
        <p class="paragraph">Что можно наблюдать: цвет, запах, выделение газа, осадок, изменение температуры, свечение.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Эксперимент</div>
        <div class="definition"><span class="term">Эксперимент (опыт)</span> — метод познания, при котором явление изучают в специально созданных условиях.</div>
        <p class="paragraph">Проведение эксперимента:</p>
        <ol class="theory-list num">
          <li>Формулировка цели.</li>
          <li>Выдвижение гипотезы.</li>
          <li>Проведение опыта.</li>
          <li>Запись наблюдений.</li>
          <li>Анализ результатов.</li>
          <li>Вывод — подтвердилась гипотеза или нет.</li>
        </ol>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🧩</span> Моделирование</div>
        <div class="definition"><span class="term">Моделирование</span> — метод познания, при котором изучают не сам объект, а его модель.</div>
        <p class="paragraph">Виды моделей:</p>
        <ul class="theory-list">
          <li><b>Материальные</b> — шаростержневые модели молекул, модель атома.</li>
          <li><b>Знаковые</b> — химические формулы, уравнения, схемы.</li>
          <li><b>Компьютерные</b> — 3D-модели молекул (как в нашем анализаторе).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📏</span> Измерение</div>
        <p class="paragraph">Определение числовых значений физических величин с помощью приборов:</p>
        <ul class="theory-list">
          <li>Масса — весы.</li>
          <li>Объём — мензурка, мерный цилиндр.</li>
          <li>Температура — термометр.</li>
          <li>Плотность — ареометр.</li>
          <li>Кислотность — pH-метр.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚠️</span> Правила безопасности в лаборатории</div>
        <ol class="theory-list num">
          <li>Работать в халате, при необходимости — в перчатках и защитных очках.</li>
          <li>Не пробовать вещества на вкус.</li>
          <li>Нюхать осторожно — направляя пары рукой к себе, а не наклоняясь.</li>
          <li>Не наклоняться над сосудом с кипящей жидкостью.</li>
          <li>Пробирку при нагревании держать отверстием от себя и соседа.</li>
          <li>При попадании кислоты или щёлочи на кожу — промыть большим количеством воды.</li>
          <li>Тушить огонь песком, одеялом или огнетушителем. Не водой, если горит масло.</li>
          <li>Нельзя уносить реактивы домой.</li>
          <li>Соблюдать тишину и порядок на рабочем месте.</li>
          <li>После работы вымыть руки и убрать рабочее место.</li>
        </ol>
      </div>

      <div class="example-box">
        <div class="lbl">Пример эксперимента</div>
        Взаимодействие соды с уксусом. В стакан с содой приливают уксус — появляются пузырьки. Это выделяется углекислый газ CO₂. Если поднести тлеющую лучинку — она гаснет (CO₂ не поддерживает горение).
      </div>

      <div class="task-box">
        <div class="lbl">Проверь себя</div>
        1. Назови основные методы изучения химии.<br>
        2. Чем наблюдение отличается от эксперимента?<br>
        3. Что такое модель? Какие виды моделей знаешь?<br>
        4. Назови 5 правил безопасности в лаборатории.
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-1-3': {
    title: '§ 3. Агрегатные состояния веществ',
    sub: 'Глава 1. Первоначальные химические понятия',
    html: `
      <div class="paragraph">Одно и то же вещество может находиться в разных состояниях — в зависимости от температуры и давления. Это <b>агрегатные состояния</b>.</div>

      <div class="card">
        <div class="card-title"><span class="num">❄️</span> Твёрдое состояние</div>
        <p class="paragraph">Сохраняет форму и объём. Частицы расположены упорядоченно, в узлах кристаллической решётки. Расстояния между частицами сравнимы с их размерами.</p>
        <p class="paragraph"><b>Примеры:</b> лёд, поваренная соль, железо, сера, сахар, мел.</p>
        <p class="paragraph"><b>Свойства:</b> обычно твёрдые, сохраняют форму, мало сжимаются.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">💧</span> Жидкое состояние</div>
        <p class="paragraph">Сохраняет объём, но не форму. Принимает форму сосуда. Частицы близко, но беспорядочно. Сжимаются слабо.</p>
        <p class="paragraph"><b>Примеры:</b> вода, спирт, ртуть, бензин, масло, молоко.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">💨</span> Газообразное состояние</div>
        <p class="paragraph">Не сохраняет ни форму, ни объём. Занимает весь предоставленный объём. Расстояния между частицами во много раз больше самих частиц. Легко сжимается.</p>
        <p class="paragraph"><b>Примеры:</b> O₂, CO₂, N₂, H₂, He, Ar, метан CH₄.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔄</span> Переходы между состояниями</div>
        <div class="table-wrap"><table>
          <tr><th>Переход</th><th>Название</th><th>Пример</th></tr>
          <tr><td>Твёрдое → жидкое</td><td>Плавление</td><td>Лёд → вода (0 °C)</td></tr>
          <tr><td>Жидкое → твёрдое</td><td>Кристаллизация (отвердевание)</td><td>Вода → лёд (0 °C)</td></tr>
          <tr><td>Жидкое → газ</td><td>Парообразование (испарение, кипение)</td><td>Вода → пар (100 °C)</td></tr>
          <tr><td>Газ → жидкое</td><td>Конденсация</td><td>Пар → роса</td></tr>
          <tr><td>Твёрдое → газ</td><td>Сублимация (возгонка)</td><td>Сухой лёд, йод</td></tr>
          <tr><td>Газ → твёрдое</td><td>Десублимация</td><td>Иней, снег</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌡️</span> Плазма — четвёртое состояние</div>
        <p class="paragraph">При очень высокой температуре вещество переходит в <b>плазму</b> — ионизированный газ. Пример: молния, пламя, Солнце, неоновые лампы.</p>
      </div>

      <div class="example-box">
        <div class="lbl">Пример</div>
        Вода при 0 °C замерзает (жидкое → твёрдое). При 100 °C кипит (жидкое → газообразное). В облаках пар конденсируется (газ → жидкое).
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Как называется переход: а) лёд тает; б) пар превращается в капли; в) йод испаряется при нагревании?<br>
        <b>Решение:</b> а) плавление; б) конденсация; в) сублимация.<br><br>
        2. Почему газы легко сжимаются, а жидкости — почти нет?<br>
        <b>Решение:</b> между молекулами газа большие расстояния, есть куда сжимать. У жидкостей молекулы уже плотно упакованы.
      </div>

      <div class="card">
        <div class="card-title"><span class="num">💡</span> Запомни</div>
        <ul class="theory-list">
          <li>3 состояния: твёрдое, жидкое, газообразное.</li>
          <li>Плавление ↔ кристаллизация.</li>
          <li>Парообразование ↔ конденсация.</li>
          <li>Сублимация — твёрдое сразу в газ.</li>
        </ul>
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-1-4': {
    title: '§ 4. Физические явления — основа разделения смесей',
    sub: 'Глава 1. Первоначальные химические понятия',
    html: `
      <div class="definition"><span class="term">Физические явления</span> — явления, при которых изменяются агрегатное состояние, форма или размеры тела, но состав вещества остаётся неизменным.</div>

      <div class="definition"><span class="term">Химические явления (химические реакции)</span> — явления, при которых одни вещества превращаются в другие, изменяется их состав.</div>

      <div class="card">
        <div class="card-title"><span class="num">📋</span> Примеры физических явлений</div>
        <ul class="theory-list">
          <li>Плавление льда, испарение воды.</li>
          <li>Растворение сахара в воде.</li>
          <li>Измельчение мела, дробление стекла.</li>
          <li>Притягивание железа магнитом.</li>
          <li>Распространение запаха духов.</li>
          <li>Свечение нити накаливания.</li>
          <li>Ковка металла, растяжение проволоки.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Чистые вещества и смеси</div>
        <div class="definition"><span class="term">Чистое вещество</span> — вещество, состоящее из частиц одного вида. Пример: дистиллированная вода, чистое железо, чистый кислород.</div>
        <div class="definition"><span class="term">Смесь</span> — сочетание нескольких веществ, которые сохраняют свои свойства.</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Виды смесей</div>
        <ul class="theory-list">
          <li><b>Однородные (гомогенные)</b> — частицы не различимы глазом: растворы (вода + соль, вода + сахар), воздух, сплавы.</li>
          <li><b>Неоднородные (гетерогенные)</b> — частицы видны: вода + песок, вода + масло, молоко, гранит, дым, туман.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔧</span> Способы разделения смесей</div>
        <div class="table-wrap"><table>
          <tr><th>Способ</th><th>Что разделяет</th><th>Пример</th></tr>
          <tr><td>Отстаивание</td><td>Жидкость + нерастворимое твёрдое</td><td>Вода + песок</td></tr>
          <tr><td>Фильтрование</td><td>Жидкость + нерастворимое твёрдое</td><td>Вода + мел</td></tr>
          <tr><td>Выпаривание</td><td>Растворённое вещество из раствора</td><td>Соль из солёной воды</td></tr>
          <tr><td>Дистилляция</td><td>Жидкости с разной t° кипения</td><td>Вода + спирт, получение дистиллята</td></tr>
          <tr><td>Магнит</td><td>Железо от других веществ</td><td>Железные опилки + сера</td></tr>
          <tr><td>Хроматография</td><td>Разные вещества в растворе</td><td>Чернила, пигменты</td></tr>
          <tr><td>Делительная воронка</td><td>Две несмешивающиеся жидкости</td><td>Вода + масло</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Как работает фильтрование</div>
        <p class="paragraph">Фильтр (бумага, ткань, песок) пропускает жидкость, а твёрдые частицы задерживает. Жидкость, прошедшую через фильтр, называют <b>фильтратом</b>.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌡️</span> Как работает дистилляция</div>
        <p class="paragraph">Смесь нагревают. Вещество с меньшей температурой кипения испаряется первым, пар охлаждается в холодильнике и конденсируется в отдельной колбе. Так можно разделить воду и спирт.</p>
      </div>

      <div class="example-box">
        <div class="lbl">Пример</div>
        Разделение смеси воды и речного песка: сначала <b>отстаиваем</b> — песок опускается на дно. Потом <b>фильтруем</b> — песок остаётся на фильтре, чистая вода проходит.
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Как разделить смесь воды и соли?<br>
        <b>Решение:</b> выпариванием — вода испарится, соль останется.<br><br>
        2. Как разделить смесь железных и древесных опилок?<br>
        <b>Решение:</b> магнитом — железо притянется, древесина останется.<br><br>
        3. Как разделить смесь воды и бензина?<br>
        <b>Решение:</b> делительной воронкой, так как они не смешиваются и бензин легче воды.
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-1-5': {
    title: '§ 5. Атомно-молекулярное учение. Химические элементы',
    sub: 'Глава 1. Первоначальные химические понятия',
    html: `
      <div class="card">
        <div class="card-title"><span class="num">📚</span> Основные положения атомно-молекулярного учения</div>
        <ol class="theory-list num">
          <li>Все вещества состоят из молекул, а молекулы — из атомов.</li>
          <li>Атомы одного вида одинаковы по свойствам, а разных видов — различны.</li>
          <li>При химических реакциях атомы не исчезают и не появляются, а только перегруппировываются.</li>
          <li>Молекулы находятся в непрерывном движении (тепловое движение).</li>
          <li>Между молекулами есть промежутки.</li>
          <li>Молекулы простого вещества состоят из одинаковых атомов; молекулы сложного — из разных.</li>
        </ol>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🏛️</span> Из истории</div>
        <ul class="theory-list">
          <li><b>Демокрит</b> (V в. до н. э.) — первый сказал, что всё состоит из атомов.</li>
          <li><b>М. В. Ломоносов</b> (1741) — сформулировал основы атомно-молекулярного учения.</li>
          <li><b>Джон Дальтон</b> (1803) — обосновал атомную теорию количественно.</li>
          <li><b>А. Авогадро</b> (1811) — ввёл понятие молекулы.</li>
        </ul>
      </div>

      <div class="definition"><span class="term">Химический элемент</span> — вид атомов с одинаковым зарядом ядра.</div>

      <div class="card">
        <div class="card-title"><span class="num">🌐</span> Простые и сложные вещества</div>
        <div class="definition"><span class="term">Простое вещество</span> — состоит из атомов одного химического элемента.</div>
        <p class="paragraph">Примеры: O₂, H₂, N₂, Cl₂, Fe, S, Cu, C, Al.</p>
        <div class="definition"><span class="term">Сложное вещество</span> — состоит из атомов разных химических элементов.</div>
        <p class="paragraph">Примеры: H₂O, CO₂, NaCl, H₂SO₄, CaCO₃.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚠️</span> Разница между «элементом» и «простым веществом»</div>
        <p class="paragraph"><b>Химический элемент</b> — вид атомов. Это «тип» атомов.</p>
        <p class="paragraph"><b>Простое вещество</b> — форма существования элемента в виде отдельных атомов или молекул.</p>
        <p class="paragraph">Пример: кислород — это элемент (O). А кислород как газ — простое вещество O₂. И в воде H₂O содержится элемент кислород, но воды — сложное вещество.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Формы существования элементов</div>
        <ul class="theory-list">
          <li><b>Свободные атомы</b> — в газах при высокой температуре: He, Ne, Ar.</li>
          <li><b>Двухатомные молекулы</b> — H₂, O₂, N₂, Cl₂, F₂, Br₂, I₂.</li>
          <li><b>Многоатомные</b> — P₄, S₈, O₃.</li>
          <li><b>Кристаллы</b> — металлы, углерод, кремний.</li>
        </ul>
      </div>

      <div class="example-box">
        <div class="lbl">Пример разбора</div>
        Вещество CO₂ — сложное. Состоит из элемента C (углерод) и элемента O (кислород). В молекуле 1 атом C и 2 атома O.
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Определи, простое или сложное: O₂, NaCl, H₂SO₄, Fe, N₂, KOH.<br>
        <b>Решение:</b> простые — O₂, Fe, N₂; сложные — NaCl, H₂SO₄, KOH.<br><br>
        2. Сколько элементов входит в состав CaCO₃?<br>
        <b>Решение:</b> три: кальций Ca, углерод C, кислород O.
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-1-6': {
    title: '§ 6. Знаки химических элементов',
    sub: 'Глава 1. Первоначальные химические понятия',
    html: `
      <div class="paragraph">Каждый химический элемент имеет свой символ — знак. Он состоит из одной или двух букв латинского названия элемента.</div>

      <div class="card">
        <div class="card-title"><span class="num">📖</span> Правила записи</div>
        <ul class="theory-list">
          <li>Первая буква знака — <b>прописная</b> (большая).</li>
          <li>Вторая (если есть) — <b>строчная</b> (маленькая).</li>
          <li>Знак читается по-латыни или как буквы: Fe — «феррум», Cu — «купрум».</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔤</span> Основные знаки</div>
        <div class="table-wrap"><table>
          <tr><th>Знак</th><th>Русское название</th><th>Латинское название</th><th>Читается</th></tr>
          <tr><td>H</td><td>Водород</td><td>Hydrogenium</td><td>аш</td></tr>
          <tr><td>He</td><td>Гелий</td><td>Helium</td><td>гелий</td></tr>
          <tr><td>Li</td><td>Литий</td><td>Lithium</td><td>литий</td></tr>
          <tr><td>C</td><td>Углерод</td><td>Carboneum</td><td>цэ</td></tr>
          <tr><td>N</td><td>Азот</td><td>Nitrogenium</td><td>эн</td></tr>
          <tr><td>O</td><td>Кислород</td><td>Oxygenium</td><td>о</td></tr>
          <tr><td>F</td><td>Фтор</td><td>Fluorum</td><td>фтор</td></tr>
          <tr><td>Na</td><td>Натрий</td><td>Natrium</td><td>натрий</td></tr>
          <tr><td>Mg</td><td>Магний</td><td>Magnesium</td><td>магний</td></tr>
          <tr><td>Al</td><td>Алюминий</td><td>Aluminium</td><td>алюминий</td></tr>
          <tr><td>Si</td><td>Кремний</td><td>Silicium</td><td>силициум</td></tr>
          <tr><td>P</td><td>Фосфор</td><td>Phosphorus</td><td>пэ</td></tr>
          <tr><td>S</td><td>Сера</td><td>Sulfur</td><td>эс</td></tr>
          <tr><td>Cl</td><td>Хлор</td><td>Chlorum</td><td>хлор</td></tr>
          <tr><td>K</td><td>Калий</td><td>Kalium</td><td>калий</td></tr>
          <tr><td>Ca</td><td>Кальций</td><td>Calcium</td><td>кальций</td></tr>
          <tr><td>Fe</td><td>Железо</td><td>Ferrum</td><td>феррум</td></tr>
          <tr><td>Cu</td><td>Медь</td><td>Cuprum</td><td>купрум</td></tr>
          <tr><td>Zn</td><td>Цинк</td><td>Zincum</td><td>цинк</td></tr>
          <tr><td>Ag</td><td>Серебро</td><td>Argentum</td><td>аргентум</td></tr>
          <tr><td>Sn</td><td>Олово</td><td>Stannum</td><td>станнум</td></tr>
          <tr><td>I</td><td>Йод</td><td>Iodum</td><td>иод</td></tr>
          <tr><td>Ba</td><td>Барий</td><td>Barium</td><td>барий</td></tr>
          <tr><td>Au</td><td>Золото</td><td>Aurum</td><td>аурум</td></tr>
          <tr><td>Hg</td><td>Ртуть</td><td>Hydrargyrum</td><td>гидраргирум</td></tr>
          <tr><td>Pb</td><td>Свинец</td><td>Plumbum</td><td>плюмбум</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">💡</span> Как запомнить</div>
        <ul class="theory-list">
          <li>Многие знаки совпадают с русскими названиями: H, C, N, O, S, P, F, I.</li>
          <li>У некоторых название латинское: Fe, Cu, Ag, Au, Hg, Pb, Sn, K, Na.</li>
          <li>Можно выучить 5 «золотых»: Au — аурум (золото), Ag — аргентум (серебро), Cu — купрум (медь), Fe — феррум (железо), Sn — станнум (олово).</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Проверь себя</div>
        1. Что означают знаки: Fe, Cu, Ag, Au, Hg, Pb?<br>
        2. Как правильно записать знак элемента?<br>
        3. Напиши знаки: натрий, кальций, алюминий, хлор, кислород.
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-1-7': {
    title: '§ 7. Периодическая таблица',
    sub: 'Глава 1. Первоначальные химические понятия',
    html: `
      <div class="definition"><span class="term">Периодическая система химических элементов</span> — графическое выражение периодического закона Д. И. Менделеева. Открыта в 1869 году.</div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Структура таблицы</div>
        <ul class="theory-list">
          <li><b>Периоды</b> — горизонтальные ряды. Всего 7 периодов.</li>
          <li><b>Группы</b> — вертикальные столбцы. Всего 8 групп.</li>
          <li>Каждая группа делится на <b>A (главную)</b> и <b>B (побочную)</b> подгруппы.</li>
          <li>Порядковый номер = заряд ядра = число протонов = число электронов.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔢</span> Периоды</div>
        <div class="table-wrap"><table>
          <tr><th>Период</th><th>Тип</th><th>Число элементов</th></tr>
          <tr><td>1-й</td><td>Малый</td><td>2 (H, He)</td></tr>
          <tr><td>2-й</td><td>Малый</td><td>8 (Li → Ne)</td></tr>
          <tr><td>3-й</td><td>Малый</td><td>8 (Na → Ar)</td></tr>
          <tr><td>4-й</td><td>Большой</td><td>18 (K → Kr)</td></tr>
          <tr><td>5-й</td><td>Большой</td><td>18 (Rb → Xe)</td></tr>
          <tr><td>6-й</td><td>Большой</td><td>32 (Cs → Rn)</td></tr>
          <tr><td>7-й</td><td>Большой</td><td>незавершённый</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Группы</div>
        <ul class="theory-list">
          <li>I-A: Li, Na, K, Rb, Cs, Fr — щелочные металлы.</li>
          <li>II-A: Be, Mg, Ca, Sr, Ba, Ra — щёлочноземельные металлы.</li>
          <li>III-A: B, Al, Ga, In, Tl.</li>
          <li>IV-A: C, Si, Ge, Sn, Pb.</li>
          <li>V-A: N, P, As, Sb, Bi.</li>
          <li>VI-A: O, S, Se, Te, Po — халькогены.</li>
          <li>VII-A: F, Cl, Br, I, At — галогены.</li>
          <li>VIII-A: He, Ne, Ar, Kr, Xe, Rn — благородные газы.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔢</span> Что можно узнать по таблице</div>
        <ul class="theory-list">
          <li>Заряд ядра и число электронов.</li>
          <li>Число энергетических уровней (по номеру периода).</li>
          <li>Число электронов на внешнем уровне (по номеру группы для A-подгрупп).</li>
          <li>Металл или неметалл.</li>
          <li>Формулу высшего оксида и гидроксида.</li>
        </ul>
      </div>

      <div class="example-box">
        <div class="lbl">Пример разбора</div>
        <b>Натрий Na</b>: порядковый номер 11 → заряд ядра +11, 11 электронов. 3-й период → 3 энергетических уровня. I-A группа → 1 электрон на внешнем уровне. Металл.
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Определи положение кислорода O в таблице.<br>
        <b>Решение:</b> № 8, 2-й период, VI-A группа. Неметалл.<br><br>
        2. Сколько электронов на внешнем уровне у хлора Cl?<br>
        <b>Решение:</b> Cl — VII-A группа → 7 электронов.
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-1-8': {
    title: '§ 8. Химические формулы',
    sub: 'Глава 1. Первоначальные химические понятия',
    html: `
      <div class="definition"><span class="term">Химическая формула</span> — условная запись состава вещества с помощью химических знаков и индексов.</div>

      <div class="card">
        <div class="card-title"><span class="num">🔢</span> Что показывает формула</div>
        <ul class="theory-list">
          <li><b>Индекс</b> — число атомов данного элемента. Например, H₂O — 2 H и 1 O.</li>
          <li><b>Коэффициент</b> (перед формулой) — число молекул: 3H₂O — три молекулы воды.</li>
          <li>Формула показывает и качественный состав (какие элементы), и количественный (сколько атомов каждого).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📐</span> Относительная атомная масса (Ar)</div>
        <p class="paragraph">Показывает, во сколько раз масса атома больше 1/12 массы атома углерода ¹²C. Значения Ar — в таблице Менделеева.</p>
        <p class="paragraph">Примеры: Ar(H) = 1, Ar(C) = 12, Ar(N) = 14, Ar(O) = 16, Ar(Na) = 23, Ar(Mg) = 24, Ar(Al) = 27, Ar(S) = 32, Ar(Cl) = 35,5, Ar(Ca) = 40, Ar(Fe) = 56, Ar(Cu) = 64, Ar(Zn) = 65.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚖️</span> Относительная молекулярная масса (Mr)</div>
        <p class="paragraph">Mr = сумма относительных атомных масс всех атомов в молекуле.</p>
        <div class="formula-box">Mr(H<sub>2</sub>O) = 2·1 + 16 = <span class="eq">18</span></div>
        <div class="formula-box">Mr(H<sub>2</sub>SO<sub>4</sub>) = 2 + 32 + 4·16 = <span class="eq">98</span></div>
        <div class="formula-box">Mr(Ca(OH)<sub>2</sub>) = 40 + 2·(16+1) = <span class="eq">74</span></div>
        <div class="formula-box">Mr(Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>) = 2·27 + 3·(32 + 4·16) = <span class="eq">342</span></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📏</span> Массовая доля элемента</div>
        <p class="paragraph">Показывает, какую часть от общей массы молекулы составляет данный элемент.</p>
        <div class="formula-box">ω(эл.) = (Ar · n) / Mr · 100%</div>
        <p class="paragraph">где n — число атомов этого элемента в молекуле.</p>
        <div class="formula-box">ω(H) в H<sub>2</sub>O = 2·1 / 18 · 100% = <span class="eq">11,1%</span></div>
        <div class="formula-box">ω(O) в H<sub>2</sub>O = 16 / 18 · 100% = <span class="eq">88,9%</span></div>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Найдите Mr(CO₂).<br>
        <b>Решение:</b> Mr(CO₂) = 12 + 2·16 = 44.<br><br>
        2. Найдите массовые доли C и O в CO₂.<br>
        <b>Решение:</b> ω(C) = 12/44 = 27,3%. ω(O) = 32/44 = 72,7%.<br><br>
        3. Найдите Mr(Fe₂O₃) и ω(Fe).<br>
        <b>Решение:</b> Mr = 2·56 + 3·16 = 160. ω(Fe) = 112/160 = 70%.<br><br>
        4. Найдите Mr(Al₂(SO₄)₃).<br>
        <b>Решение:</b> Mr = 2·27 + 3·(32+64) = 54 + 288 = 342.
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-1-9': {
    title: '§ 9. Валентность',
    sub: 'Глава 1. Первоначальные химические понятия',
    html: `
      <div class="definition"><span class="term">Валентность</span> — свойство атома химического элемента присоединять или замещать определённое число атомов другого элемента. Обозначается римскими цифрами I, II, III, IV, V, VI, VII, VIII.</div>

      <div class="card">
        <div class="card-title"><span class="num">📌</span> Постоянная валентность</div>
        <div class="table-wrap"><table>
          <tr><th>Валентность</th><th>Элементы</th></tr>
          <tr><td>I</td><td>H, Na, K, Li, F, Ag, Cl (в HCl)</td></tr>
          <tr><td>II</td><td>O, Mg, Ca, Ba, Zn, Be, Sr</td></tr>
          <tr><td>III</td><td>Al, B</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🎯</span> Переменная валентность</div>
        <div class="table-wrap"><table>
          <tr><th>Элемент</th><th>Валентности</th><th>Примеры</th></tr>
          <tr><td>Fe</td><td>II, III</td><td>FeO, Fe₂O₃</td></tr>
          <tr><td>Cu</td><td>I, II</td><td>Cu₂O, CuO</td></tr>
          <tr><td>S</td><td>II, IV, VI</td><td>H₂S, SO₂, SO₃</td></tr>
          <tr><td>N</td><td>I, II, III, IV, V</td><td>N₂O, NO, N₂O₃, NO₂, N₂O₅</td></tr>
          <tr><td>P</td><td>III, V</td><td>PH₃, P₂O₅</td></tr>
          <tr><td>Cl</td><td>I, III, V, VII</td><td>HCl, HClO₂, HClO₃, HClO₄</td></tr>
          <tr><td>Mn</td><td>II, IV, VI, VII</td><td>MnO, MnO₂, MnO₃, Mn₂O₇</td></tr>
          <tr><td>Cr</td><td>II, III, VI</td><td>CrO, Cr₂O₃, CrO₃</td></tr>
          <tr><td>C</td><td>II, IV</td><td>CO, CO₂</td></tr>
        </table></div>
        <p class="paragraph">Если валентность переменная, её указывают в скобках: Fe(II)O, Fe(III)₂O₃.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔍</span> Как определить валентность по формуле</div>
        <p class="paragraph">Через <b>наименьшее общее кратное (НОК)</b>:</p>
        <ol class="theory-list num">
          <li>Находят НОК валентностей.</li>
          <li>НОК делят на валентность известного элемента — получают индекс другого.</li>
          <li>НОК делят на индекс — получают валентность второго.</li>
        </ol>
        <div class="formula-box">Al<sub>2</sub>O<sub>3</sub> → O(II) → НОК(2,3)=6 → Al = 6:2 = <span class="eq">III</span></div>
        <div class="formula-box">Cu<sub>2</sub>O → O(II) → НОК(2,1)=2 → Cu = 2:1 = <span class="eq">I</span></div>
        <div class="formula-box">Fe<sub>2</sub>O<sub>3</sub> → O(II) → НОК(2,3)=6 → Fe = 6:2 = <span class="eq">III</span></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">✏️</span> Составление формулы по валентности</div>
        <ol class="theory-list num">
          <li>Записать символы элементов.</li>
          <li>Над ними написать валентности.</li>
          <li>Найти НОК.</li>
          <li>Разделить НОК на валентности — получить индексы.</li>
        </ol>
        <div class="formula-box">Оксид серы(VI): S<sup>VI</sup>O<sup>II</sup> → НОК=6 → S: 6:6=1, O: 6:2=3 → <span class="eq">SO₃</span></div>
        <div class="formula-box">Оксид фосфора(V): P<sup>V</sup>O<sup>II</sup> → НОК=10 → P:2, O:5 → <span class="eq">P₂O₅</span></div>
        <div class="formula-box">Оксид алюминия: Al<sup>III</sup>O<sup>II</sup> → НОК=6 → Al:2, O:3 → <span class="eq">Al₂O₃</span></div>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Определите валентность железа в Fe₂O₃.<br>
        <b>Решение:</b> O(II), НОК(2,3)=6, Fe = 6:2 = III.<br><br>
        2. Составьте формулу оксида фосфора(V).<br>
        <b>Решение:</b> P(V) O(II), НОК=10, P=2, O=5 → <b>P₂O₅</b>.<br><br>
        3. Определите валентность меди в Cu₂O.<br>
        <b>Решение:</b> O(II), НОК(2,1)=2, Cu = 2:1 = I.<br><br>
        4. Составьте формулу хлорида алюминия (Al и Cl).<br>
        <b>Решение:</b> Al(III), Cl(I), НОК=3, Al=1, Cl=3 → <b>AlCl₃</b>.<br><br>
        5. Составьте формулу оксида марганца(VII).<br>
        <b>Решение:</b> Mn(VII), O(II), НОК=14, Mn=2, O=7 → <b>Mn₂O₇</b>.
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚠️</span> Типичные ошибки</div>
        <ul class="theory-list">
          <li>Забывают, что H, Na, K, F всегда I.</li>
          <li>Путают валентность и степень окисления (с. о. может быть отрицательной).</li>
          <li>Не учитывают переменную валентность у Fe, Cu, S, N.</li>
        </ul>
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-1-10': {
    title: '§ 10. Химические реакции',
    sub: 'Глава 1. Первоначальные химические понятия',
    html: `
      <div class="definition"><span class="term">Химическая реакция</span> — процесс превращения одних веществ в другие, при котором изменяется состав и свойства исходных веществ.</div>

      <div class="card">
        <div class="card-title"><span class="num">🎨</span> Признаки химических реакций</div>
        <ul class="theory-list">
          <li><b>Изменение цвета</b> — потемнение серебра, посинение медной пластинки.</li>
          <li><b>Выделение газа</b> — пузырьки при реакции соды с уксусом.</li>
          <li><b>Выпадение или растворение осадка</b> — помутнение известковой воды.</li>
          <li><b>Выделение или поглощение теплоты и света</b> — горение.</li>
          <li><b>Появление запаха</b> — например, при гниении.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔥</span> Условия протекания реакций</div>
        <ul class="theory-list">
          <li>Соприкосновение веществ.</li>
          <li>Нагревание.</li>
          <li>Освещение.</li>
          <li>Пропускание электрического тока.</li>
          <li>Наличие катализатора.</li>
          <li>Измельчение и перемешивание.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚡</span> Отличие от физических явлений</div>
        <div class="table-wrap"><table>
          <tr><th>Признак</th><th>Физическое явление</th><th>Химическое явление</th></tr>
          <tr><td>Состав вещества</td><td>Не меняется</td><td>Меняется</td></tr>
          <tr><td>Новые вещества</td><td>Не образуются</td><td>Образуются</td></tr>
          <tr><td>Пример</td><td>Плавление льда</td><td>Горение магния</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Типы реакций по тепловому эффекту</div>
        <ul class="theory-list">
          <li><b>Экзотермические</b> — с выделением теплоты (+Q). Пример: горение.</li>
          <li><b>Эндотермические</b> — с поглощением теплоты (−Q). Пример: разложение CaCO₃.</li>
        </ul>
      </div>

      <div class="example-box">
        <div class="lbl">Примеры</div>
        <b>Горение магния:</b> 2Mg + O₂ → 2MgO. Яркое белое пламя, образование белого порошка.<br>
        <b>Реакция соды с уксусом:</b> NaHCO₃ + CH₃COOH → CH₃COONa + H₂O + CO₂↑. Выделение газа.
      </div>

      <div class="task-box">
        <div class="lbl">Проверь себя</div>
        1. Назови 5 признаков химических реакций.<br>
        2. Чем химическое явление отличается от физического?<br>
        3. Приведи по 3 примера физических и химических явлений.
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-1-11': {
    title: '§ 11. Химические уравнения',
    sub: 'Глава 1. Первоначальные химические понятия',
    html: `
      <div class="definition"><span class="term">Химическое уравнение</span> — условная запись химической реакции с помощью химических формул и коэффициентов.</div>

      <div class="card">
        <div class="card-title"><span class="num">⚖️</span> Закон сохранения массы</div>
        <p class="paragraph">Масса веществ, вступивших в реакцию, равна массе веществ, образовавшихся в результате реакции.</p>
        <p class="paragraph">Открыт М. В. Ломоносовым в 1748 году. Из него следует: в уравнении реакции число атомов каждого элемента слева должно быть равно числу атомов справа.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">✏️</span> Алгоритм составления уравнения</div>
        <ol class="theory-list num">
          <li>Записать формулы исходных веществ слева, продуктов — справа.</li>
          <li>Поставить между ними стрелку (→) или знак равенства (=).</li>
          <li>Подобрать коэффициенты так, чтобы число атомов каждого элемента было одинаковым.</li>
          <li>Проверить по каждому элементу.</li>
        </ol>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔢</span> Примеры</div>
        <div class="formula-box">H<sub>2</sub> + O<sub>2</sub> → H<sub>2</sub>O — <b>не уравнено</b></div>
        <div class="formula-box">2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O <span class="eq">✓</span></div>
        <p class="paragraph">Проверка: слева H = 4, O = 2. Справа H = 4, O = 2. Уравнение верно.</p>

        <div class="formula-box">Al + O<sub>2</sub> → Al<sub>2</sub>O<sub>3</sub> — не уравнено</div>
        <div class="formula-box">4Al + 3O<sub>2</sub> → 2Al<sub>2</sub>O<sub>3</sub> <span class="eq">✓</span></div>

        <div class="formula-box">Fe + O<sub>2</sub> → Fe<sub>2</sub>O<sub>3</sub> — не уравнено</div>
        <div class="formula-box">4Fe + 3O<sub>2</sub> → 2Fe<sub>2</sub>O<sub>3</sub> <span class="eq">✓</span></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Типы задач по уравнениям</div>
        <ul class="theory-list">
          <li>По массе одного вещества найти массу другого.</li>
          <li>По объёму газа найти массу продукта.</li>
          <li>По массе исходного вещества найти объём газа.</li>
          <li>Задачи на избыток и недостаток.</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Уравняйте: K + H₂O → KOH + H₂.<br>
        <b>Решение:</b> 2K + 2H₂O → 2KOH + H₂↑.<br><br>
        2. Уравняйте: Fe + HCl → FeCl₂ + H₂.<br>
        <b>Решение:</b> Fe + 2HCl → FeCl₂ + H₂↑.<br><br>
        3. Уравняйте: C₃H₈ + O₂ → CO₂ + H₂O.<br>
        <b>Решение:</b> C₃H₈ + 5O₂ → 3CO₂ + 4H₂O.
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-1-12': {
    title: '§ 12. Типы химических реакций',
    sub: 'Глава 1. Первоначальные химические понятия',
    html: `
      <div class="paragraph">Все химические реакции по числу и составу исходных и полученных веществ делятся на 4 типа.</div>

      <div class="card">
        <div class="card-title"><span class="num">1️⃣</span> Реакция соединения</div>
        <p class="paragraph">Из двух или нескольких веществ образуется одно новое сложное вещество.</p>
        <div class="formula-box">A + B → AB</div>
        <div class="formula-box">2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</div>
        <div class="formula-box">CaO + CO<sub>2</sub> → CaCO<sub>3</sub></div>
        <div class="formula-box">4P + 5O<sub>2</sub> → 2P<sub>2</sub>O<sub>5</sub></div>
        <div class="formula-box">2Na + Cl<sub>2</sub> → 2NaCl</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">2️⃣</span> Реакция разложения</div>
        <p class="paragraph">Из одного сложного вещества образуется несколько новых веществ.</p>
        <div class="formula-box">AB → A + B</div>
        <div class="formula-box">2H<sub>2</sub>O → 2H<sub>2</sub> + O<sub>2</sub></div>
        <div class="formula-box">CaCO<sub>3</sub> → CaO + CO<sub>2</sub></div>
        <div class="formula-box">2KMnO<sub>4</sub> → K<sub>2</sub>MnO<sub>4</sub> + MnO<sub>2</sub> + O<sub>2</sub></div>
        <div class="formula-box">Cu(OH)<sub>2</sub> → CuO + H<sub>2</sub>O</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">3️⃣</span> Реакция замещения</div>
        <p class="paragraph">Простое вещество замещает атом одного элемента в сложном веществе.</p>
        <div class="formula-box">A + BC → AC + B</div>
        <div class="formula-box">Fe + CuSO<sub>4</sub> → FeSO<sub>4</sub> + Cu</div>
        <div class="formula-box">Zn + 2HCl → ZnCl<sub>2</sub> + H<sub>2</sub>↑</div>
        <div class="formula-box">2Na + 2H<sub>2</sub>O → 2NaOH + H<sub>2</sub>↑</div>
        <div class="formula-box">CuO + H<sub>2</sub> → Cu + H<sub>2</sub>O</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">4️⃣</span> Реакция обмена</div>
        <p class="paragraph">Два сложных вещества обмениваются своими составными частями.</p>
        <div class="formula-box">AB + CD → AD + CB</div>
        <div class="formula-box">NaOH + HCl → NaCl + H<sub>2</sub>O</div>
        <div class="formula-box">AgNO<sub>3</sub> + NaCl → AgCl↓ + NaNO<sub>3</sub></div>
        <div class="formula-box">BaCl<sub>2</sub> + H<sub>2</sub>SO<sub>4</sub> → BaSO<sub>4</sub>↓ + 2HCl</div>
        <div class="formula-box">CuSO<sub>4</sub> + 2NaOH → Cu(OH)<sub>2</sub>↓ + Na<sub>2</sub>SO<sub>4</sub></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔍</span> Как определить тип реакции</div>
        <ol class="theory-list num">
          <li>Посчитать число веществ слева и справа.</li>
          <li>Если слева много, справа 1 → соединения.</li>
          <li>Если слева 1, справа много → разложения.</li>
          <li>Если слева 2, справа 2 и есть простое вещество → замещения.</li>
          <li>Если слева 2, справа 2 и оба сложные → обмена.</li>
        </ol>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Определите тип: 2H₂O → 2H₂ + O₂.<br>
        <b>Решение:</b> из одного — два → разложение.<br><br>
        2. Определите тип: Fe + S → FeS.<br>
        <b>Решение:</b> два → одно → соединение.<br><br>
        3. Определите тип: Fe + CuSO₄ → FeSO₄ + Cu.<br>
        <b>Решение:</b> простое + сложное → простое + сложное → замещение.<br><br>
        4. Определите тип: NaOH + HCl → NaCl + H₂O.<br>
        <b>Решение:</b> два сложных → два сложных → обмен.
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

   /* ============ ГЛАВА 2 (РАСШИРЕННАЯ) ============ */

  'ch8-2-1': {
    title: '§ 1. Воздух и его состав',
    sub: 'Глава 2. Кислород. Водород. Вода. Растворы',
    html: `
      <div class="paragraph">Воздух — это смесь газов. Он не имеет цвета, вкуса и запаха. Воздух — это не вещество, а смесь веществ.</div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Состав воздуха (по объёму)</div>
        <div class="table-wrap"><table>
          <tr><th>Газ</th><th>Формула</th><th>Объёмная доля</th></tr>
          <tr><td>Азот</td><td>N₂</td><td>78%</td></tr>
          <tr><td>Кислород</td><td>O₂</td><td>21%</td></tr>
          <tr><td>Аргон и другие благородные газы</td><td>Ar, Ne, He, Kr, Xe</td><td>0,94%</td></tr>
          <tr><td>Углекислый газ</td><td>CO₂</td><td>0,03%</td></tr>
          <tr><td>Прочие газы (пары воды, примеси)</td><td>H₂O, и др.</td><td>~0,03%</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📜</span> История открытия состава воздуха</div>
        <ul class="theory-list">
          <li><b>Джозеф Пристли</b> (1774) — получил «дефлогистированный воздух» (кислород).</li>
          <li><b>Антуан Лавуазье</b> (1777) — доказал, что воздух — смесь газов, а не вещество.</li>
          <li><b>Уильям Рамзай и Джон Рэлей</b> (1894–1898) — открыли аргон, гелий, неон, криптон, ксенон.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">💨</span> Значение воздуха</div>
        <ul class="theory-list">
          <li>Необходим для дыхания живых организмов.</li>
          <li>Необходим для горения топлива.</li>
          <li>Участвует в процессах окисления (ржавление железа).</li>
          <li>Переносит пыльцу, семена растений.</li>
          <li>Влияет на климат и погоду.</li>
          <li>Используется в промышленности для получения кислорода, азота, аргона.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Как получают газы из воздуха</div>
        <p class="paragraph">Жидкий воздух разделяют перегонкой. Сначала испаряется самый лёгкий газ — азот (t кип. −196 °C), затем аргон (−186 °C), затем кислород (−183 °C).</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚠️</span> Охрана воздуха</div>
        <p class="paragraph">Воздух загрязняется:</p>
        <ul class="theory-list">
          <li>Выбросами заводов (SO₂, NO₂, пыль).</li>
          <li>Выхлопными газами автомобилей (CO, NO₂, сажа).</li>
          <li>Продуктами горения топлива (CO₂, зола).</li>
        </ul>
        <p class="paragraph">Меры защиты:</p>
        <ul class="theory-list">
          <li>Очистные сооружения и фильтры.</li>
          <li>Переход на экологичное топливо.</li>
          <li>Электромобили, велосипеды, общественный транспорт.</li>
          <li>Зелёные насаждения.</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Какой газ преобладает в воздухе?<br>
        <b>Решение:</b> азот N₂ — 78%.<br><br>
        2. Какие газы входят в состав воздуха?<br>
        <b>Решение:</b> N₂, O₂, благородные газы, CO₂, пары воды.
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-2-2': {
    title: '§ 2. Кислород',
    sub: 'Глава 2. Кислород. Водород. Вода. Растворы',
    html: `
      <div class="definition"><span class="term">Кислород</span> — химический элемент O, газ без цвета, вкуса и запаха. Немного тяжелее воздуха. Относительная атомная масса — 16.</div>

      <div class="card">
        <div class="card-title"><span class="num">📜</span> История</div>
        <ul class="theory-list">
          <li><b>1771</b> — Карл Шееле получил кислород.</li>
          <li><b>1774</b> — Джозеф Пристли получил его независимо.</li>
          <li><b>1777</b> — Антуан Лавуазье дал название «oxygène» (от греч. «рождающий кислоту»).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">💎</span> Физические свойства</div>
        <ul class="theory-list">
          <li>Газ без цвета, вкуса, запаха.</li>
          <li>Немного тяжелее воздуха (плотность 1,43 г/л).</li>
          <li>При −183 °C — голубая жидкость.</li>
          <li>При −219 °C — синие кристаллы.</li>
          <li>Малорастворим в воде (но этого хватает рыбам).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Получение в лаборатории</div>
        <p class="paragraph"><b>1. Разложение перманганата калия (при нагревании):</b></p>
        <div class="formula-box">2KMnO<sub>4</sub> → K<sub>2</sub>MnO<sub>4</sub> + MnO<sub>2</sub> + O<sub>2</sub>↑</div>
        <p class="paragraph"><b>2. Разложение пероксида водорода (с катализатором MnO₂):</b></p>
        <div class="formula-box">2H<sub>2</sub>O<sub>2</sub> → 2H<sub>2</sub>O + O<sub>2</sub>↑</div>
        <p class="paragraph"><b>3. Разложение бертолетовой соли (при нагревании с MnO₂):</b></p>
        <div class="formula-box">2KClO<sub>3</sub> → 2KCl + 3O<sub>2</sub>↑</div>
        <p class="paragraph"><b>4. Электролиз воды:</b></p>
        <div class="formula-box">2H<sub>2</sub>O → 2H<sub>2</sub>↑ + O<sub>2</sub>↑</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🏭</span> Получение в промышленности</div>
        <p class="paragraph">Из жидкого воздуха методом перегонки. Сначала испаряется азот (t кип. −196 °C), кислород остаётся (t кип. −183 °C).</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔥</span> Химические свойства</div>
        <p class="paragraph">Кислород — сильный окислитель. Реагирует со многими веществами, часто с выделением теплоты и света (горение).</p>
        <p class="paragraph"><b>С металлами:</b></p>
        <div class="formula-box">2Mg + O<sub>2</sub> → 2MgO (белое пламя)</div>
        <div class="formula-box">3Fe + 2O<sub>2</sub> → Fe<sub>3</sub>O<sub>4</sub> (железная окалина)</div>
        <div class="formula-box">2Cu + O<sub>2</sub> → 2CuO (чёрный оксид)</div>
        <p class="paragraph"><b>С неметаллами:</b></p>
        <div class="formula-box">S + O<sub>2</sub> → SO<sub>2</sub> (синеватое пламя)</div>
        <div class="formula-box">4P + 5O<sub>2</sub> → 2P<sub>2</sub>O<sub>5</sub> (белый дым)</div>
        <div class="formula-box">C + O<sub>2</sub> → CO<sub>2</sub> (раскалённые угли)</div>
        <p class="paragraph"><b>Со сложными веществами:</b></p>
        <div class="formula-box">CH<sub>4</sub> + 2O<sub>2</sub> → CO<sub>2</sub> + 2H<sub>2</sub>O</div>
        <div class="formula-box">2H<sub>2</sub>S + 3O<sub>2</sub> → 2SO<sub>2</sub> + 2H<sub>2</sub>O</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Применение</div>
        <ul class="theory-list">
          <li>В медицине — для кислородных подушек.</li>
          <li>В металлургии — для выплавки стали.</li>
          <li>В авиации и космонавтике — как окислитель топлива.</li>
          <li>Для резки и сварки металлов (кислородно-ацетиленовое пламя).</li>
          <li>В подводных лодках, в аквалангах.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Круговорот кислорода в природе</div>
        <p class="paragraph">Растения выделяют O₂ при фотосинтезе: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. Животные и люди поглощают O₂ при дыхании. Баланс поддерживается.</p>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Какими способами можно получить кислород в лаборатории?<br>
        <b>Решение:</b> разложением KMnO₄, H₂O₂, KClO₃, электролизом воды.<br><br>
        2. Напишите реакцию горения фосфора в кислороде.<br>
        <b>Решение:</b> 4P + 5O₂ → 2P₂O₅.<br><br>
        3. Как доказать наличие кислорода в сосуде?<br>
        <b>Решение:</b> внести тлеющую лучинку — она вспыхнет.
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-2-3': {
    title: '§ 3. Оксиды',
    sub: 'Глава 2. Кислород. Водород. Вода. Растворы',
    html: `
      <div class="definition"><span class="term">Оксиды</span> — сложные вещества, состоящие из двух элементов, один из которых кислород (в степени окисления −2).</div>

      <div class="card">
        <div class="card-title"><span class="num">📋</span> Примеры оксидов</div>
        <div class="table-wrap"><table>
          <tr><th>Формула</th><th>Название</th><th>Тип</th></tr>
          <tr><td>Na₂O</td><td>Оксид натрия</td><td>Основный</td></tr>
          <tr><td>CaO</td><td>Оксид кальция</td><td>Основный</td></tr>
          <tr><td>CuO</td><td>Оксид меди(II)</td><td>Основный</td></tr>
          <tr><td>Fe₂O₃</td><td>Оксид железа(III)</td><td>Основный</td></tr>
          <tr><td>CO₂</td><td>Оксид углерода(IV)</td><td>Кислотный</td></tr>
          <tr><td>SO₃</td><td>Оксид серы(VI)</td><td>Кислотный</td></tr>
          <tr><td>P₂O₅</td><td>Оксид фосфора(V)</td><td>Кислотный</td></tr>
          <tr><td>Al₂O₃</td><td>Оксид алюминия</td><td>Амфотерный</td></tr>
          <tr><td>ZnO</td><td>Оксид цинка</td><td>Амфотерный</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Классификация</div>
        <ul class="theory-list">
          <li><b>Основные</b> — оксиды металлов I, II валентности (кроме Be, Zn): Na₂O, CaO, CuO, FeO.</li>
          <li><b>Кислотные</b> — оксиды неметаллов и металлов с валентностью V–VII: CO₂, SO₃, P₂O₅, Mn₂O₇, CrO₃.</li>
          <li><b>Амфотерные</b> — проявляют и основные, и кислотные свойства: Al₂O₃, ZnO, BeO, Cr₂O₃.</li>
          <li><b>Несолеобразующие</b> — не образуют солей: CO, N₂O, NO, H₂O.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌫️</span> Физические свойства</div>
        <ul class="theory-list">
          <li><b>Газообразные</b>: CO₂, SO₂, SO₃, NO₂, N₂O.</li>
          <li><b>Жидкие</b>: H₂O, N₂O₃.</li>
          <li><b>Твёрдые</b>: CaO, CuO, Fe₂O₃, Al₂O₃, SiO₂.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства основных оксидов</div>
        <ul class="theory-list">
          <li>+ H₂O → основание: CaO + H₂O → Ca(OH)₂</li>
          <li>+ кислота → соль + H₂O: CuO + 2HCl → CuCl₂ + H₂O</li>
          <li>+ кислотный оксид → соль: CaO + CO₂ → CaCO₃</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства кислотных оксидов</div>
        <ul class="theory-list">
          <li>+ H₂O → кислота: CO₂ + H₂O → H₂CO₃</li>
          <li>+ основание → соль + H₂O: CO₂ + 2NaOH → Na₂CO₃ + H₂O</li>
          <li>+ основной оксид → соль: CO₂ + CaO → CaCO₃</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства амфотерных оксидов</div>
        <p class="paragraph">Реагируют и с кислотами, и со щелочами:</p>
        <div class="formula-box">Al<sub>2</sub>O<sub>3</sub> + 6HCl → 2AlCl<sub>3</sub> + 3H<sub>2</sub>O</div>
        <div class="formula-box">Al<sub>2</sub>O<sub>3</sub> + 2NaOH → 2NaAlO<sub>2</sub> + H<sub>2</sub>O</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Получение оксидов</div>
        <ul class="theory-list">
          <li>Окисление простых веществ: 2Cu + O₂ → 2CuO</li>
          <li>Разложение оснований: Cu(OH)₂ → CuO + H₂O</li>
          <li>Разложение солей: CaCO₃ → CaO + CO₂</li>
          <li>Разложение кислот: H₂CO₃ → H₂O + CO₂</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Определите тип оксидов: SO₂, Na₂O, ZnO, CO.<br>
        <b>Решение:</b> SO₂ — кислотный, Na₂O — основный, ZnO — амфотерный, CO — несолеобразующий.<br><br>
        2. Напишите реакцию CaO с водой.<br>
        <b>Решение:</b> CaO + H₂O → Ca(OH)₂.<br><br>
        3. Напишите реакцию CO₂ с NaOH.<br>
        <b>Решение:</b> CO₂ + 2NaOH → Na₂CO₃ + H₂O.
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-2-4': {
    title: '§ 4. Водород',
    sub: 'Глава 2. Кислород. Водород. Вода. Растворы',
    html: `
      <div class="definition"><span class="term">Водород</span> — химический элемент H, самый лёгкий газ. Без цвета, вкуса и запаха. Относительная атомная масса — 1.</div>

      <div class="card">
        <div class="card-title"><span class="num">📜</span> История</div>
        <ul class="theory-list">
          <li><b>1766</b> — Генри Кавендиш получил «горючий воздух».</li>
          <li><b>1787</b> — Лавуазье дал название «hydrogène» — «рождающий воду».</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">💎</span> Физические свойства</div>
        <ul class="theory-list">
          <li>Самый лёгкий газ.</li>
          <li>Без цвета, вкуса, запаха.</li>
          <li>Плотность 0,09 г/л (в 14,5 раз легче воздуха).</li>
          <li>t кип. −253 °C, t пл. −259 °C.</li>
          <li>Малорастворим в воде.</li>
          <li>Хорошо растворяется в металлах (особенно в Pd, Pt).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Получение в лаборатории</div>
        <p class="paragraph">Металл + кислота:</p>
        <div class="formula-box">Zn + 2HCl → ZnCl<sub>2</sub> + H<sub>2</sub>↑</div>
        <div class="formula-box">Fe + H<sub>2</sub>SO<sub>4</sub> → FeSO<sub>4</sub> + H<sub>2</sub>↑</div>
        <div class="formula-box">2Al + 6HCl → 2AlCl<sub>3</sub> + 3H<sub>2</sub>↑</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🏭</span> Получение в промышленности</div>
        <ul class="theory-list">
          <li><b>Электролиз воды:</b> 2H₂O → 2H₂↑ + O₂↑</li>
          <li><b>Конверсия метана:</b> CH₄ + H₂O → CO + 3H₂ (при 1000 °C)</li>
          <li><b>Из природного газа:</b> 2CH₄ + O₂ → 2CO + 4H₂</li>
          <li><b>Коксование угля.</b></li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔥</span> Химические свойства</div>
        <p class="paragraph">Водород — восстановитель. Реагирует с:</p>
        <p class="paragraph"><b>1. Кислородом (с образованием воды):</b></p>
        <div class="formula-box">2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O (взрыв — «гремучий газ»)</div>
        <p class="paragraph"><b>2. Галогенами:</b></p>
        <div class="formula-box">H<sub>2</sub> + Cl<sub>2</sub> → 2HCl (на свету — со взрывом)</div>
        <p class="paragraph"><b>3. Серой:</b></p>
        <div class="formula-box">H<sub>2</sub> + S → H<sub>2</sub>S</div>
        <p class="paragraph"><b>4. Азотом (с катализатором):</b></p>
        <div class="formula-box">N<sub>2</sub> + 3H<sub>2</sub> ⇄ 2NH<sub>3</sub></div>
        <p class="paragraph"><b>5. Оксидами металлов (восстановление):</b></p>
        <div class="formula-box">CuO + H<sub>2</sub> → Cu + H<sub>2</sub>O</div>
        <div class="formula-box">Fe<sub>2</sub>O<sub>3</sub> + 3H<sub>2</sub> → 2Fe + 3H<sub>2</sub>O</div>
        <p class="paragraph"><b>6. Активными металлами (с образованием гидридов):</b></p>
        <div class="formula-box">2Na + H<sub>2</sub> → 2NaH</div>
        <div class="formula-box">Ca + H<sub>2</sub> → CaH<sub>2</sub></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚠️</span> Техника безопасности</div>
        <p class="paragraph">Смесь водорода с кислородом (или воздухом) взрывоопасна — «гремучий газ». Перед поджиганием водорода обязательно проверяют его на чистоту: собирают в пробирку и подносят к пламени. Чистый водород горит спокойно, с примесью воздуха — со свистом или взрывом.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🚀</span> Применение</div>
        <ul class="theory-list">
          <li>Как ракетное топливо.</li>
          <li>Для получения аммиака (синтез NH₃) и HCl.</li>
          <li>Для восстановления металлов из оксидов (металлургия).</li>
          <li>В топливных элементах (экологически чистое топливо).</li>
          <li>Для наполнения аэростатов и дирижаблей (устарело — из-за опасности).</li>
          <li>В пищевой промышленности — для гидрогенизации жиров (маргарин).</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Как получают водород в лаборатории?<br>
        <b>Решение:</b> действием кислоты на металл: Zn + 2HCl → ZnCl₂ + H₂↑.<br><br>
        2. Напишите реакцию водорода с оксидом меди(II).<br>
        <b>Решение:</b> CuO + H₂ → Cu + H₂O.<br><br>
        3. Почему водород нельзя поджигать сразу после получения?<br>
        <b>Решение:</b> он может содержать примесь воздуха — смесь взрывоопасна.
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-2-5': {
    title: '§ 5. Кислоты',
    sub: 'Глава 2. Кислород. Водород. Вода. Растворы',
    html: `
      <div class="definition"><span class="term">Кислоты</span> — сложные вещества, молекулы которых состоят из атомов водорода и кислотного остатка.</div>

      <div class="card">
        <div class="card-title"><span class="num">📋</span> Важнейшие кислоты</div>
        <div class="table-wrap"><table>
          <tr><th>Формула</th><th>Название</th><th>Кислотный остаток</th></tr>
          <tr><td>HCl</td><td>Соляная (хлороводородная)</td><td>Cl⁻ (хлорид)</td></tr>
          <tr><td>HBr</td><td>Бромоводородная</td><td>Br⁻ (бромид)</td></tr>
          <tr><td>HI</td><td>Иодоводородная</td><td>I⁻ (иодид)</td></tr>
          <tr><td>HF</td><td>Плавиковая (фтороводородная)</td><td>F⁻ (фторид)</td></tr>
          <tr><td>H₂S</td><td>Сероводородная</td><td>S²⁻ (сульфид)</td></tr>
          <tr><td>H₂SO₄</td><td>Серная</td><td>SO₄²⁻ (сульфат)</td></tr>
          <tr><td>H₂SO₃</td><td>Сернистая</td><td>SO₃²⁻ (сульфит)</td></tr>
          <tr><td>HNO₃</td><td>Азотная</td><td>NO₃⁻ (нитрат)</td></tr>
          <tr><td>H₂CO₃</td><td>Угольная</td><td>CO₃²⁻ (карбонат)</td></tr>
          <tr><td>H₃PO₄</td><td>Фосфорная</td><td>PO₄³⁻ (фосфат)</td></tr>
          <tr><td>H₂SiO₃</td><td>Кремниевая</td><td>SiO₃²⁻ (силикат)</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Классификация</div>
        <p class="paragraph"><b>По числу атомов водорода:</b></p>
        <ul class="theory-list">
          <li>Одноосновные: HCl, HNO₃, HF.</li>
          <li>Двухосновные: H₂SO₄, H₂S, H₂CO₃.</li>
          <li>Трёхосновные: H₃PO₄.</li>
        </ul>
        <p class="paragraph"><b>По наличию кислорода:</b></p>
        <ul class="theory-list">
          <li>Кислородсодержащие: H₂SO₄, HNO₃, H₂CO₃.</li>
          <li>Бескислородные: HCl, HBr, HI, H₂S.</li>
        </ul>
        <p class="paragraph"><b>По силе (по степени диссоциации):</b></p>
        <ul class="theory-list">
          <li>Сильные (α > 30%): HCl, HBr, HI, H₂SO₄, HNO₃.</li>
          <li>Средние: H₃PO₄, HF.</li>
          <li>Слабые (α < 3%): H₂CO₃, H₂S, H₂SiO₃, CH₃COOH.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌡️</span> Физические свойства</div>
        <ul class="theory-list">
          <li>HCl, HBr, HI, H₂S — газы.</li>
          <li>H₂SO₄ — тяжёлая маслянистая жидкость.</li>
          <li>HNO₃ — бесцветная жидкость («дымит» на воздухе).</li>
          <li>H₃PO₄, H₂SiO₃ — твёрдые.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства</div>
        <ul class="theory-list">
          <li><b>Индикаторы:</b> лакмус — красный, метилоранж — розовый, фенолфталеин — бесцветный.</li>
          <li><b>+ металл</b> (до H в ряду активности): Zn + 2HCl → ZnCl₂ + H₂↑</li>
          <li><b>+ основный оксид:</b> CuO + H₂SO₄ → CuSO₄ + H₂O</li>
          <li><b>+ основание (нейтрализация):</b> NaOH + HCl → NaCl + H₂O</li>
          <li><b>+ соль</b> (если газ или осадок): CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Ряд активности металлов</div>
        <div class="formula-box">Li → K → Ba → Ca → Na → Mg → Al → Zn → Fe → Ni → Sn → Pb → <b>(H)</b> → Cu → Hg → Ag → Au</div>
        <p class="paragraph">Металлы левее водорода вытесняют его из разбавленных кислот. Правее — не реагируют.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Получение</div>
        <ul class="theory-list">
          <li>Кислотный оксид + вода: SO₃ + H₂O → H₂SO₄</li>
          <li>H₂ + неметалл: H₂ + Cl₂ → 2HCl</li>
          <li>Соль + кислота: NaCl(тв) + H₂SO₄(конц) → NaHSO₄ + HCl↑</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Какая из кислот двухосновная: HCl, H₂SO₄, HNO₃?<br>
        <b>Решение:</b> H₂SO₄.<br><br>
        2. Напишите реакцию цинка с соляной кислотой.<br>
        <b>Решение:</b> Zn + 2HCl → ZnCl₂ + H₂↑.<br><br>
        3. Напишите реакцию нейтрализации между KOH и HNO₃.<br>
        <b>Решение:</b> KOH + HNO₃ → KNO₃ + H₂O.
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-2-6': {
    title: '§ 6. Соли',
    sub: 'Глава 2. Кислород. Водород. Вода. Растворы',
    html: `
      <div class="definition"><span class="term">Соли</span> — сложные вещества, состоящие из атомов металла и кислотного остатка.</div>

      <div class="card">
        <div class="card-title"><span class="num">📋</span> Примеры солей</div>
        <div class="table-wrap"><table>
          <tr><th>Формула</th><th>Название</th><th>Применение</th></tr>
          <tr><td>NaCl</td><td>Хлорид натрия</td><td>Пища, консервант</td></tr>
          <tr><td>K₂SO₄</td><td>Сульфат калия</td><td>Удобрение</td></tr>
          <tr><td>CaCO₃</td><td>Карбонат кальция</td><td>Мел, мрамор, известь</td></tr>
          <tr><td>Fe(NO₃)₃</td><td>Нитрат железа(III)</td><td>Протрава тканей</td></tr>
          <tr><td>NaHCO₃</td><td>Гидрокарбонат натрия</td><td>Пищевая сода</td></tr>
          <tr><td>CuSO₄·5H₂O</td><td>Медный купорос</td><td>Защита растений</td></tr>
          <tr><td>AgNO₃</td><td>Нитрат серебра</td><td>Ляпис, реактив</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Классификация</div>
        <ul class="theory-list">
          <li><b>Средние (нормальные)</b> — все H кислоты замещены металлом: NaCl, K₂SO₄, CaCO₃.</li>
          <li><b>Кислые</b> — не все H замещены: NaHCO₃, KHSO₄, Ca(H₂PO₄)₂.</li>
          <li><b>Основные</b> — не все OH⁻ основания замещены: Cu(OH)Cl, Al(OH)Cl₂.</li>
          <li><b>Двойные</b> — два разных металла: KAl(SO₄)₂, NaKCO₃.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">💎</span> Физические свойства</div>
        <ul class="theory-list">
          <li>Твёрдые кристаллические вещества.</li>
          <li>Разная растворимость: NaCl, KNO₃ — растворимы; CaSO₄, Ag₂SO₄ — малорастворимы; BaSO₄, AgCl — нерастворимы.</li>
          <li>Имеют высокие температуры плавления.</li>
          <li>Растворы и расплавы проводят ток.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства</div>
        <ul class="theory-list">
          <li><b>+ металл</b> (более активный): Fe + CuSO₄ → FeSO₄ + Cu</li>
          <li><b>+ кислота</b> (если газ/осадок): CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑</li>
          <li><b>+ щёлочь</b>: CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄</li>
          <li><b>+ другая соль</b>: AgNO₃ + NaCl → AgCl↓ + NaNO₃</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Получение солей</div>
        <ul class="theory-list">
          <li>Металл + кислота: Zn + 2HCl → ZnCl₂ + H₂↑</li>
          <li>Основный оксид + кислота: CuO + H₂SO₄ → CuSO₄ + H₂O</li>
          <li>Основание + кислота: NaOH + HCl → NaCl + H₂O</li>
          <li>Соль + соль: AgNO₃ + NaCl → AgCl↓ + NaNO₃</li>
          <li>Металл + неметалл: 2Na + Cl₂ → 2NaCl</li>
          <li>Кислотный оксид + основание: CO₂ + 2NaOH → Na₂CO₃ + H₂O</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Значение солей</div>
        <ul class="theory-list">
          <li>NaCl — поваренная соль, в пищу и в промышленности.</li>
          <li>CaCO₃ — мел, мрамор, известняк (строительство).</li>
          <li>NaHCO₃ — пищевая сода (выпечка, медицина).</li>
          <li>KNO₃, NH₄NO₃, суперфосфат — удобрения.</li>
          <li>AgNO₃ — ляпис (медицина), реактив.</li>
          <li>CuSO₄·5H₂O — защита растений от вредителей.</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Назовите соли: NaCl, K₂SO₄, CaCO₃, FeCl₃.<br>
        <b>Решение:</b> хлорид натрия, сульфат калия, карбонат кальция, хлорид железа(III).<br><br>
        2. Напишите реакцию AgNO₃ + NaCl.<br>
        <b>Решение:</b> AgNO₃ + NaCl → AgCl↓ + NaNO₃.<br><br>
        3. Какую соль называют пищевой содой?<br>
        <b>Решение:</b> NaHCO₃ — гидрокарбонат натрия.
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-2-7': {
    title: '§ 7. Количество вещества. Молярная масса',
    sub: 'Глава 2. Кислород. Водород. Вода. Растворы',
    html: `
      <div class="definition"><span class="term">Моль</span> — количество вещества, содержащее столько структурных единиц (атомов, молекул, ионов), сколько атомов содержится в 12 г углерода-12. Это число называется числом Авогадро.</div>

      <div class="card">
        <div class="card-title"><span class="num">🔢</span> Число Авогадро</div>
        <div class="formula-box">N<sub>A</sub> = 6,02 · 10<sup>23</sup> <span class="eq">моль⁻¹</span></div>
        <p class="paragraph">Обозначается NA или NА. Названо в честь итальянского учёного Амедео Авогадро.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📐</span> Основные формулы</div>
        <div class="formula-box">n = m / M <span class="eq">(количество вещества)</span></div>
        <div class="formula-box">n = N / N<sub>A</sub> <span class="eq">(через число частиц)</span></div>
        <div class="formula-box">m = n · M <span class="eq">(масса)</span></div>
        <div class="formula-box">M = Mr г/моль <span class="eq">(молярная масса)</span></div>
        <p class="paragraph">где n — количество вещества (моль), m — масса (г), M — молярная масса (г/моль), N — число частиц, NA = 6,02 · 10²³.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Молярные массы часто используемых веществ</div>
        <div class="table-wrap"><table>
          <tr><th>Формула</th><th>Mr</th><th>M (г/моль)</th></tr>
          <tr><td>H₂O</td><td>18</td><td>18</td></tr>
          <tr><td>CO₂</td><td>44</td><td>44</td></tr>
          <tr><td>O₂</td><td>32</td><td>32</td></tr>
          <tr><td>H₂</td><td>2</td><td>2</td></tr>
          <tr><td>NaCl</td><td>58,5</td><td>58,5</td></tr>
          <tr><td>H₂SO₄</td><td>98</td><td>98</td></tr>
          <tr><td>NaOH</td><td>40</td><td>40</td></tr>
          <tr><td>CaCO₃</td><td>100</td><td>100</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🧮</span> Примеры решения</div>
        <p class="paragraph"><b>Пример 1.</b> Сколько молей в 36 г воды?</p>
        <p class="paragraph"><b>Решение:</b> M(H₂O) = 18 г/моль. n = m/M = 36/18 = <b>2 моль</b>.</p>

        <p class="paragraph"><b>Пример 2.</b> Какова масса 3 моль CO₂?</p>
        <p class="paragraph"><b>Решение:</b> M(CO₂) = 44 г/моль. m = n·M = 3·44 = <b>132 г</b>.</p>

        <p class="paragraph"><b>Пример 3.</b> Сколько молекул в 1 моль воды?</p>
        <p class="paragraph"><b>Решение:</b> N = n·NA = 1·6,02·10²³ = <b>6,02·10²³ молекул</b>.</p>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Найдите массу 0,5 моль NaCl.<br>
        <b>Решение:</b> M(NaCl) = 58,5 г/моль. m = 0,5 · 58,5 = 29,25 г.<br><br>
        2. Сколько молей в 100 г CaCO₃?<br>
        <b>Решение:</b> M = 100 г/моль. n = 100/100 = 1 моль.<br><br>
        3. Найдите массу 2 моль H₂SO₄.<br>
        <b>Решение:</b> M = 98 г/моль. m = 2 · 98 = 196 г.<br><br>
        4. Сколько молекул в 0,1 моль CO₂?<br>
        <b>Решение:</b> N = 0,1 · 6,02·10²³ = 6,02·10²².
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-2-8': {
    title: '§ 8. Молярный объём газов',
    sub: 'Глава 2. Кислород. Водород. Вода. Растворы',
    html: `
      <div class="definition"><span class="term">Молярный объём</span> — объём одного моля газа при нормальных условиях.</div>

      <div class="card">
        <div class="card-title"><span class="num">📏</span> Нормальные условия (н. у.)</div>
        <ul class="theory-list">
          <li>Температура: 0 °C (273 К).</li>
          <li>Давление: 101,3 кПа (1 атм = 760 мм рт. ст.).</li>
        </ul>
        <div class="formula-box">V<sub>m</sub> = 22,4 л/моль</div>
        <p class="paragraph">Это <b>закон Авогадро</b>: в равных объёмах разных газов при одинаковых условиях содержится одинаковое число молекул.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📐</span> Формулы</div>
        <div class="formula-box">V = n · V<sub>m</sub> = n · 22,4</div>
        <div class="formula-box">n = V / 22,4</div>
        <div class="formula-box">ρ = M / 22,4 <span class="eq">(плотность газа)</span></div>
        <div class="formula-box">D = M<sub>1</sub> / M<sub>2</sub> <span class="eq">(относительная плотность)</span></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🧮</span> Примеры решения</div>
        <p class="paragraph"><b>Пример 1.</b> Какой объём занимают 2 моль O₂ при н. у.?</p>
        <p class="paragraph"><b>Решение:</b> V = 2 · 22,4 = <b>44,8 л</b>.</p>

        <p class="paragraph"><b>Пример 2.</b> Найдите объём 8 г O₂ при н. у.</p>
        <p class="paragraph"><b>Решение:</b> M(O₂) = 32 г/моль. n = 8/32 = 0,25 моль. V = 0,25·22,4 = <b>5,6 л</b>.</p>

        <p class="paragraph"><b>Пример 3.</b> Сколько молекул в 11,2 л CO₂ при н. у.?</p>
        <p class="paragraph"><b>Решение:</b> n = 11,2/22,4 = 0,5 моль. N = 0,5 · 6,02·10²³ = <b>3,01·10²³ молекул</b>.</p>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Какой объём занимают 3 моль H₂ при н. у.?<br>
        <b>Решение:</b> V = 3 · 22,4 = 67,2 л.<br><br>
        2. Какой объём занимают 4 г H₂ при н. у.?<br>
        <b>Решение:</b> M(H₂) = 2 г/моль. n = 2 моль. V = 2 · 22,4 = 44,8 л.<br><br>
        3. Найдите массу 44,8 л CO₂ при н. у.<br>
        <b>Решение:</b> n = 44,8/22,4 = 2 моль. m = 2 · 44 = 88 г.<br><br>
        4. Найдите плотность кислорода при н. у.<br>
        <b>Решение:</b> ρ = M/22,4 = 32/22,4 = 1,43 г/л.
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-2-9': {
    title: '§ 9. Расчёты по химическим уравнениям',
    sub: 'Глава 2. Кислород. Водород. Вода. Растворы',
    html: `
      <div class="card">
        <div class="card-title"><span class="num">📝</span> Алгоритм решения задач</div>
        <ol class="theory-list num">
          <li>Записать уравнение реакции.</li>
          <li>Расставить коэффициенты.</li>
          <li>Под формулами записать данные из условия и искомые величины.</li>
          <li>Над формулами — количества моль по уравнению.</li>
          <li>Составить пропорцию.</li>
          <li>Решить и записать ответ.</li>
        </ol>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📐</span> Формулы, которые нужны</div>
        <div class="formula-box">n = m / M</div>
        <div class="formula-box">n = V / 22,4</div>
        <div class="formula-box">m = n · M</div>
        <div class="formula-box">V = n · 22,4</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🧮</span> Примеры решения</div>
        <p class="paragraph"><b>Пример 1.</b> Сколько граммов воды образуется при сгорании 4 г водорода?</p>
        <p class="paragraph"><b>Решение:</b></p>
        <div class="formula-box">2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</div>
        <p class="paragraph">n(H₂) = 4/2 = 2 моль. По уравнению: 2 моль H₂ → 2 моль H₂O. m(H₂O) = 2 · 18 = 36 г. <b>Ответ: 36 г.</b></p>

        <p class="paragraph"><b>Пример 2.</b> Какой объём CO₂ (н. у.) выделится при разложении 50 г CaCO₃?</p>
        <p class="paragraph"><b>Решение:</b></p>
        <div class="formula-box">CaCO<sub>3</sub> → CaO + CO<sub>2</sub>↑</div>
        <p class="paragraph">n(CaCO₃) = 50/100 = 0,5 моль. n(CO₂) = 0,5 моль. V = 0,5 · 22,4 = 11,2 л. <b>Ответ: 11,2 л.</b></p>

        <p class="paragraph"><b>Пример 3.</b> Какая масса соли образуется при взаимодействии 8 г NaOH с HCl?</p>
        <p class="paragraph"><b>Решение:</b></p>
        <div class="formula-box">NaOH + HCl → NaCl + H<sub>2</sub>O</div>
        <p class="paragraph">n(NaOH) = 8/40 = 0,2 моль. n(NaCl) = 0,2 моль. m(NaCl) = 0,2 · 58,5 = 11,7 г. <b>Ответ: 11,7 г.</b></p>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи для тренировки</div>
        1. Какая масса оксида магния образуется при сгорании 6 г магния?<br>
        <b>Решение:</b> 2Mg + O₂ → 2MgO. n(Mg) = 6/24 = 0,25 моль. n(MgO) = 0,25 моль. m = 0,25·40 = 10 г.<br><br>
        2. Какой объём H₂ (н. у.) выделится при взаимодействии 13 г Zn с HCl?<br>
        <b>Решение:</b> Zn + 2HCl → ZnCl₂ + H₂. n(Zn) = 13/65 = 0,2 моль. n(H₂) = 0,2 моль. V = 0,2 · 22,4 = 4,48 л.<br><br>
        3. Сколько граммов воды нужно для получения 4 г H₂ при электролизе?<br>
        <b>Решение:</b> 2H₂O → 2H₂ + O₂. n(H₂) = 4/2 = 2 моль. n(H₂O) = 2 моль. m = 2 · 18 = 36 г.
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-2-10': {
    title: '§ 10. Вода. Основания',
    sub: 'Глава 2. Кислород. Водород. Вода. Растворы',
    html: `
      <div class="definition"><span class="term">Вода H₂O</span> — самое распространённое вещество на Земле. Универсальный растворитель.</div>

      <div class="card">
        <div class="card-title"><span class="num">💧</span> Физические свойства воды</div>
        <ul class="theory-list">
          <li>Без цвета, вкуса, запаха.</li>
          <li>t пл. = 0 °C, t кип. = 100 °C (при 1 атм).</li>
          <li>Плотность 1 г/см³ при 4 °C.</li>
          <li>Максимальная плотность при 4 °C — поэтому лёд плавает.</li>
          <li>Хороший растворитель — растворяет многие вещества.</li>
          <li>Плохой проводник тока (но растворы солей проводят).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Вода в природе</div>
        <ul class="theory-list">
          <li>Мировой океан — 96,5% всех вод.</li>
          <li>Ледники и снега — 1,7%.</li>
          <li>Подземные воды — 1,7%.</li>
          <li>Реки, озёра — 0,01%.</li>
          <li>Только 3% воды — пресная.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства воды</div>
        <ul class="theory-list">
          <li><b>С активными металлами:</b> 2Na + 2H₂O → 2NaOH + H₂↑</li>
          <li><b>С оксидами металлов:</b> CaO + H₂O → Ca(OH)₂</li>
          <li><b>С оксидами неметаллов:</b> CO₂ + H₂O → H₂CO₃</li>
          <li><b>Разложение:</b> 2H₂O → 2H₂↑ + O₂↑ (электролиз)</li>
        </ul>
      </div>

      <div class="definition"><span class="term">Основания</span> — сложные вещества, состоящие из атомов металла и гидроксогрупп OH.</div>

      <div class="card">
        <div class="card-title"><span class="num">📋</span> Примеры оснований</div>
        <div class="table-wrap"><table>
          <tr><th>Формула</th><th>Название</th><th>Растворимость</th></tr>
          <tr><td>NaOH</td><td>Гидроксид натрия</td><td>Растворим (щёлочь)</td></tr>
          <tr><td>KOH</td><td>Гидроксид калия</td><td>Растворим (щёлочь)</td></tr>
          <tr><td>LiOH</td><td>Гидроксид лития</td><td>Растворим (щёлочь)</td></tr>
          <tr><td>Ca(OH)₂</td><td>Гидроксид кальция</td><td>Малорастворим</td></tr>
          <tr><td>Ba(OH)₂</td><td>Гидроксид бария</td><td>Растворим</td></tr>
          <tr><td>Cu(OH)₂</td><td>Гидроксид меди(II)</td><td>Нерастворим</td></tr>
          <tr><td>Fe(OH)₃</td><td>Гидроксид железа(III)</td><td>Нерастворим</td></tr>
          <tr><td>Al(OH)₃</td><td>Гидроксид алюминия</td><td>Амфотерный</td></tr>
          <tr><td>Zn(OH)₂</td><td>Гидроксид цинка</td><td>Амфотерный</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства оснований</div>
        <ul class="theory-list">
          <li>+ кислота → соль + H₂O: NaOH + HCl → NaCl + H₂O (реакция нейтрализации).</li>
          <li>+ кислотный оксид → соль + H₂O: 2NaOH + CO₂ → Na₂CO₃ + H₂O.</li>
          <li>+ соль → новое основание + новая соль: 2NaOH + CuSO₄ → Cu(OH)₂↓ + Na₂SO₄.</li>
          <li>Нерастворимые основания при нагревании разлагаются: Cu(OH)₂ → CuO + H₂O.</li>
        </ul>
        <p class="paragraph">Щёлочи изменяют цвет индикаторов: лакмус — синий, фенолфталеин — малиновый, метилоранж — жёлтый.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Получение оснований</div>
        <ul class="theory-list">
          <li>Активный металл + вода: 2Na + 2H₂O → 2NaOH + H₂↑</li>
          <li>Основный оксид + вода: CaO + H₂O → Ca(OH)₂</li>
          <li>Соль + щёлочь: CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Какие из оснований — щёлочи: NaOH, Cu(OH)₂, KOH, Fe(OH)₃?<br>
        <b>Решение:</b> NaOH, KOH.<br><br>
        2. Напишите реакцию нейтрализации NaOH и H₂SO₄.<br>
        <b>Решение:</b> 2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O.<br><br>
        3. Что произойдёт при нагревании Cu(OH)₂?<br>
        <b>Решение:</b> Cu(OH)₂ → CuO + H₂O (образуется чёрный оксид меди).
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-2-11': {
    title: '§ 11. Растворы. Массовая доля растворённого вещества',
    sub: 'Глава 2. Кислород. Водород. Вода. Растворы',
    html: `
      <div class="definition"><span class="term">Раствор</span> — однородная система, состоящая из растворителя и растворённого вещества.</div>

      <div class="card">
        <div class="card-title"><span class="num">💧</span> Компоненты раствора</div>
        <ul class="theory-list">
          <li><b>Растворитель</b> — вещество, которого больше (обычно вода).</li>
          <li><b>Растворённое вещество</b> — вещество, которого меньше.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Виды растворов по насыщенности</div>
        <ul class="theory-list">
          <li><b>Ненасыщенный</b> — можно растворить ещё вещество.</li>
          <li><b>Насыщенный</b> — вещество больше не растворяется.</li>
          <li><b>Перенасыщенный</b> — содержит больше вещества, чем возможно (неустойчив, при встряхивании кристаллизуется).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Виды растворов по концентрации</div>
        <ul class="theory-list">
          <li><b>Разбавленный</b> — мало растворённого вещества.</li>
          <li><b>Концентрированный</b> — много растворённого вещества.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📐</span> Массовая доля растворённого вещества</div>
        <div class="formula-box">ω = m(в-ва) / m(раствора) · 100%</div>
        <p class="paragraph">где m(раствора) = m(в-ва) + m(растворителя).</p>
        <div class="formula-box">m(в-ва) = ω · m(раствора) / 100%</div>
        <div class="formula-box">m(раствора) = m(в-ва) / ω · 100%</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🧮</span> Примеры решения</div>
        <p class="paragraph"><b>Пример 1.</b> В 200 г воды растворили 20 г соли. Найдите массовую долю соли.</p>
        <p class="paragraph"><b>Решение:</b> m(раствора) = 200 + 20 = 220 г. ω = 20/220 · 100% = <b>9,1%</b>.</p>

        <p class="paragraph"><b>Пример 2.</b> Сколько соли нужно для 500 г раствора с ω = 10%?</p>
        <p class="paragraph"><b>Решение:</b> m(соли) = 500 · 0,10 = <b>50 г</b>. Воды = 500 − 50 = 450 г.</p>

        <p class="paragraph"><b>Пример 3.</b> К 200 г 10%-ного раствора добавили 50 г соли. Найдите новую ω.</p>
        <p class="paragraph"><b>Решение:</b> Изначально соли 200 · 0,10 = 20 г. Стало 20+50 = 70 г. Масса раствора 200+50 = 250 г. ω = 70/250 · 100% = <b>28%</b>.</p>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. В 300 г воды растворили 30 г сахара. Найдите ω.<br>
        <b>Решение:</b> m(раствора) = 330 г. ω = 30/330 · 100% = 9,1%.<br><br>
        2. Сколько граммов соли и воды нужно для 400 г 5%-ного раствора?<br>
        <b>Решение:</b> m(соли) = 20 г, m(воды) = 380 г.<br><br>
        3. К 100 г 20%-ного раствора добавили 100 г воды. Найдите новую ω.<br>
        <b>Решение:</b> Было соли 20 г. Стало раствора 200 г. ω = 20/200 · 100% = 10%.
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

   /* ============ ГЛАВА 3 (РАСШИРЕННАЯ) ============ */

  'ch8-3-1': {
    title: '§ 1. Оксиды: классификация и химические свойства',
    sub: 'Глава 3. Классы неорганических соединений',
    html: `
      <div class="definition"><span class="term">Оксиды</span> — сложные вещества, состоящие из двух элементов, один из которых кислород (степень окисления −2).</div>

      <div class="card">
        <div class="card-title"><span class="num">📋</span> Общая характеристика</div>
        <ul class="theory-list">
          <li>Общая формула — Э<sub>x</sub>O<sub>y</sub>.</li>
          <li>В состав входит только 2 элемента, один из них — кислород.</li>
          <li>Кислород всегда на втором месте.</li>
          <li>Степень окисления кислорода в оксидах — всегда −2 (кроме OF₂, где +2).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Классификация оксидов</div>
        <p class="paragraph"><b>1. По способности образовывать соли:</b></p>
        <ul class="theory-list">
          <li><b>Солеобразующие</b> — образуют соли: Na₂O, CaO, CO₂, Al₂O₃.</li>
          <li><b>Несолеобразующие</b> — не образуют солей: CO, N₂O, NO, H₂O.</li>
        </ul>
        <p class="paragraph"><b>2. Солеобразующие делятся на:</b></p>
        <ul class="theory-list">
          <li><b>Основные</b> — оксиды металлов I–II вал. (кроме Be, Zn): Na₂O, K₂O, CaO, MgO, CuO, FeO.</li>
          <li><b>Кислотные</b> — оксиды неметаллов и металлов V–VII вал.: CO₂, SO₂, SO₃, P₂O₅, N₂O₅, Mn₂O₇, CrO₃.</li>
          <li><b>Амфотерные</b> — проявляют и основные, и кислотные свойства: Al₂O₃, ZnO, BeO, Cr₂O₃, Fe₂O₃.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Важнейшие оксиды</div>
        <div class="table-wrap"><table>
          <tr><th>Формула</th><th>Название</th><th>Тип</th><th>Соответствующий гидроксид</th></tr>
          <tr><td>Na₂O</td><td>Оксид натрия</td><td>Основный</td><td>NaOH</td></tr>
          <tr><td>CaO</td><td>Оксид кальция</td><td>Основный</td><td>Ca(OH)₂</td></tr>
          <tr><td>CuO</td><td>Оксид меди(II)</td><td>Основный</td><td>Cu(OH)₂</td></tr>
          <tr><td>Fe₂O₃</td><td>Оксид железа(III)</td><td>Амфотерный</td><td>Fe(OH)₃</td></tr>
          <tr><td>CO₂</td><td>Оксид углерода(IV)</td><td>Кислотный</td><td>H₂CO₃</td></tr>
          <tr><td>SO₃</td><td>Оксид серы(VI)</td><td>Кислотный</td><td>H₂SO₄</td></tr>
          <tr><td>P₂O₅</td><td>Оксид фосфора(V)</td><td>Кислотный</td><td>H₃PO₄</td></tr>
          <tr><td>Al₂O₃</td><td>Оксид алюминия</td><td>Амфотерный</td><td>Al(OH)₃</td></tr>
          <tr><td>ZnO</td><td>Оксид цинка</td><td>Амфотерный</td><td>Zn(OH)₂</td></tr>
          <tr><td>SiO₂</td><td>Оксид кремния(IV)</td><td>Кислотный</td><td>H₂SiO₃</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства основных оксидов</div>
        <ul class="theory-list">
          <li><b>+ H₂O → основание:</b> CaO + H₂O → Ca(OH)₂</li>
          <li><b>+ кислота → соль + H₂O:</b> CuO + 2HCl → CuCl₂ + H₂O</li>
          <li><b>+ кислотный оксид → соль:</b> CaO + CO₂ → CaCO₃</li>
        </ul>
        <div class="formula-box">Na<sub>2</sub>O + 2HCl → 2NaCl + H<sub>2</sub>O</div>
        <div class="formula-box">BaO + SO<sub>3</sub> → BaSO<sub>4</sub></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства кислотных оксидов</div>
        <ul class="theory-list">
          <li><b>+ H₂O → кислота:</b> CO₂ + H₂O → H₂CO₃</li>
          <li><b>+ основание → соль + H₂O:</b> CO₂ + 2NaOH → Na₂CO₃ + H₂O</li>
          <li><b>+ основной оксид → соль:</b> CO₂ + CaO → CaCO₃</li>
        </ul>
        <div class="formula-box">SO<sub>3</sub> + H<sub>2</sub>O → H<sub>2</sub>SO<sub>4</sub></div>
        <div class="formula-box">P<sub>2</sub>O<sub>5</sub> + 6NaOH → 2Na<sub>3</sub>PO<sub>4</sub> + 3H<sub>2</sub>O</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства амфотерных оксидов</div>
        <p class="paragraph">Реагируют и с кислотами, и со щелочами:</p>
        <div class="formula-box">Al<sub>2</sub>O<sub>3</sub> + 6HCl → 2AlCl<sub>3</sub> + 3H<sub>2</sub>O</div>
        <div class="formula-box">Al<sub>2</sub>O<sub>3</sub> + 2NaOH → 2NaAlO<sub>2</sub> + H<sub>2</sub>O</div>
        <div class="formula-box">ZnO + 2HCl → ZnCl<sub>2</sub> + H<sub>2</sub>O</div>
        <div class="formula-box">ZnO + 2NaOH → Na<sub>2</sub>ZnO<sub>2</sub> + H<sub>2</sub>O</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Получение оксидов</div>
        <ul class="theory-list">
          <li><b>Окисление простых веществ:</b> 4P + 5O₂ → 2P₂O₅</li>
          <li><b>Окисление сложных веществ:</b> CH₄ + 2O₂ → CO₂ + 2H₂O</li>
          <li><b>Разложение оснований:</b> Cu(OH)₂ → CuO + H₂O</li>
          <li><b>Разложение солей:</b> CaCO₃ → CaO + CO₂</li>
          <li><b>Разложение кислот:</b> H₂CO₃ → H₂O + CO₂</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Определите тип: SO₂, K₂O, Al₂O₃, CO.<br>
        <b>Решение:</b> SO₂ — кислотный, K₂O — основный, Al₂O₃ — амфотерный, CO — несолеобразующий.<br><br>
        2. Напишите реакцию CaO с водой.<br>
        <b>Решение:</b> CaO + H₂O → Ca(OH)₂.<br><br>
        3. Напишите реакцию CO₂ с NaOH.<br>
        <b>Решение:</b> CO₂ + 2NaOH → Na₂CO₃ + H₂O.<br><br>
        4. С какими из веществ реагирует Al₂O₃: HCl, NaOH, H₂O?<br>
        <b>Решение:</b> и с HCl, и с NaOH (амфотерный). С водой — нет.
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-3-2': {
    title: '§ 2. Основания: классификация и химические свойства',
    sub: 'Глава 3. Классы неорганических соединений',
    html: `
      <div class="definition"><span class="term">Основания</span> — сложные вещества, состоящие из атомов металла и одной или нескольких гидроксогрупп OH.</div>

      <div class="card">
        <div class="card-title"><span class="num">📋</span> Общая характеристика</div>
        <ul class="theory-list">
          <li>Общая формула — Me(OH)<sub>n</sub>, где n — валентность металла.</li>
          <li>В состав входят металл и группа OH.</li>
          <li>Степень окисления OH⁻ = −1.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Классификация</div>
        <p class="paragraph"><b>1. По растворимости:</b></p>
        <ul class="theory-list">
          <li><b>Растворимые (щёлочи)</b> — NaOH, KOH, LiOH, Ca(OH)₂, Ba(OH)₂, Sr(OH)₂.</li>
          <li><b>Нерастворимые</b> — Cu(OH)₂, Fe(OH)₃, Mg(OH)₂, Fe(OH)₂.</li>
        </ul>
        <p class="paragraph"><b>2. По кислотно-основным свойствам:</b></p>
        <ul class="theory-list">
          <li><b>Основные</b> — большинство: NaOH, Ca(OH)₂, Cu(OH)₂.</li>
          <li><b>Амфотерные</b> — Al(OH)₃, Zn(OH)₂, Be(OH)₂, Cr(OH)₃.</li>
        </ul>
        <p class="paragraph"><b>3. По числу OH-групп:</b></p>
        <ul class="theory-list">
          <li>Однокислотные: NaOH, KOH.</li>
          <li>Двухкислотные: Ca(OH)₂, Ba(OH)₂.</li>
          <li>Трёхкислотные: Fe(OH)₃, Al(OH)₃.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Важнейшие основания</div>
        <div class="table-wrap"><table>
          <tr><th>Формула</th><th>Название</th><th>Растворимость</th><th>Применение</th></tr>
          <tr><td>NaOH</td><td>Гидроксид натрия (едкий натр)</td><td>Щёлочь</td><td>Производство мыла, бумаги</td></tr>
          <tr><td>KOH</td><td>Гидроксид калия (едкое кали)</td><td>Щёлочь</td><td>Электролиты, мыло</td></tr>
          <tr><td>Ca(OH)₂</td><td>Гидроксид кальция (гашёная известь)</td><td>Малорастворим</td><td>Строительство, известь</td></tr>
          <tr><td>Ba(OH)₂</td><td>Гидроксид бария</td><td>Щёлочь</td><td>Реактив</td></tr>
          <tr><td>Cu(OH)₂</td><td>Гидроксид меди(II)</td><td>Нерастворим</td><td>Реактив</td></tr>
          <tr><td>Fe(OH)₃</td><td>Гидроксид железа(III)</td><td>Нерастворим</td><td>Реактив</td></tr>
          <tr><td>Al(OH)₃</td><td>Гидроксид алюминия</td><td>Нерастворим, амфотерный</td><td>Медицина, реактив</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства щелочей</div>
        <ul class="theory-list">
          <li>Изменяют цвет индикаторов: лакмус — синий, фенолфталеин — малиновый, метилоранж — жёлтый.</li>
          <li><b>+ кислота (нейтрализация):</b> NaOH + HCl → NaCl + H₂O</li>
          <li><b>+ кислотный оксид:</b> 2NaOH + CO₂ → Na₂CO₃ + H₂O</li>
          <li><b>+ соль:</b> 2NaOH + CuSO₄ → Cu(OH)₂↓ + Na₂SO₄</li>
          <li><b>+ амфотерный оксид:</b> 2NaOH + Al₂O₃ → 2NaAlO₂ + H₂O</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства нерастворимых оснований</div>
        <ul class="theory-list">
          <li><b>+ кислота:</b> Cu(OH)₂ + 2HCl → CuCl₂ + 2H₂O</li>
          <li><b>Разложение при нагревании:</b> Cu(OH)₂ → CuO + H₂O</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Получение оснований</div>
        <ul class="theory-list">
          <li><b>Активный металл + вода:</b> 2Na + 2H₂O → 2NaOH + H₂↑</li>
          <li><b>Основный оксид + вода:</b> CaO + H₂O → Ca(OH)₂</li>
          <li><b>Соль + щёлочь:</b> CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄</li>
          <li><b>Электролиз растворов солей щелочных металлов:</b> 2NaCl + 2H₂O → 2NaOH + H₂↑ + Cl₂↑</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Применение</div>
        <ul class="theory-list">
          <li>NaOH — производство мыла, целлюлозы, красителей, очистка нефти.</li>
          <li>KOH — получение жидкого мыла, электролитов для щелочных аккумуляторов.</li>
          <li>Ca(OH)₂ — строительство (известковые растворы, побелка), нейтрализация кислых почв.</li>
          <li>Al(OH)₃ — медицина (антацид), производство стекла, керамики.</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Какие из оснований — щёлочи: Cu(OH)₂, NaOH, Fe(OH)₃, Ba(OH)₂?<br>
        <b>Решение:</b> NaOH, Ba(OH)₂.<br><br>
        2. Напишите реакцию нейтрализации NaOH и H₂SO₄.<br>
        <b>Решение:</b> 2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O.<br><br>
        3. Что произойдёт при нагревании Cu(OH)₂?<br>
        <b>Решение:</b> Cu(OH)₂ → CuO + H₂O, образуется чёрный осадок CuO.<br><br>
        4. Напишите реакцию FeCl₃ + NaOH.<br>
        <b>Решение:</b> FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl.
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-3-3': {
    title: '§ 3. Кислоты: классификация и химические свойства',
    sub: 'Глава 3. Классы неорганических соединений',
    html: `
      <div class="definition"><span class="term">Кислоты</span> — сложные вещества, состоящие из атомов водорода и кислотного остатка.</div>

      <div class="card">
        <div class="card-title"><span class="num">📋</span> Общая характеристика</div>
        <ul class="theory-list">
          <li>Общая формула — H<sub>n</sub>Кисл.ост.</li>
          <li>В водных растворах диссоциируют с образованием катионов H⁺.</li>
          <li>Все кислоты — электролиты.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Классификация</div>
        <p class="paragraph"><b>1. По числу атомов водорода:</b></p>
        <ul class="theory-list">
          <li>Одноосновные: HCl, HBr, HI, HNO₃, HF.</li>
          <li>Двухосновные: H₂SO₄, H₂S, H₂CO₃, H₂SiO₃.</li>
          <li>Трёхосновные: H₃PO₄.</li>
        </ul>
        <p class="paragraph"><b>2. По наличию кислорода:</b></p>
        <ul class="theory-list">
          <li>Кислородсодержащие: H₂SO₄, HNO₃, H₂CO₃, H₃PO₄.</li>
          <li>Бескислородные: HCl, HBr, HI, HF, H₂S.</li>
        </ul>
        <p class="paragraph"><b>3. По силе (степени диссоциации α):</b></p>
        <ul class="theory-list">
          <li>Сильные (α > 30%): HCl, HBr, HI, H₂SO₄, HNO₃, HClO₄.</li>
          <li>Средние (3% < α < 30%): H₃PO₄, HF, H₂SO₃.</li>
          <li>Слабые (α < 3%): H₂CO₃, H₂S, H₂SiO₃, CH₃COOH.</li>
        </ul>
        <p class="paragraph"><b>4. По летучести:</b></p>
        <ul class="theory-list">
          <li>Летучие: HCl, HNO₃, H₂S.</li>
          <li>Нелетучие: H₂SO₄, H₃PO₄.</li>
        </ul>
        <p class="paragraph"><b>5. По стабильности:</b></p>
        <ul class="theory-list">
          <li>Стабильные: HCl, H₂SO₄.</li>
          <li>Нестабильные (разлагаются): H₂CO₃, H₂SO₃.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Важнейшие кислоты</div>
        <div class="table-wrap"><table>
          <tr><th>Формула</th><th>Название</th><th>Кислотный остаток</th><th>Соли</th></tr>
          <tr><td>HCl</td><td>Соляная</td><td>Cl⁻</td><td>Хлориды</td></tr>
          <tr><td>HBr</td><td>Бромоводородная</td><td>Br⁻</td><td>Бромиды</td></tr>
          <tr><td>HI</td><td>Иодоводородная</td><td>I⁻</td><td>Иодиды</td></tr>
          <tr><td>HF</td><td>Плавиковая</td><td>F⁻</td><td>Фториды</td></tr>
          <tr><td>H₂S</td><td>Сероводородная</td><td>S²⁻</td><td>Сульфиды</td></tr>
          <tr><td>H₂SO₄</td><td>Серная</td><td>SO₄²⁻</td><td>Сульфаты</td></tr>
          <tr><td>H₂SO₃</td><td>Сернистая</td><td>SO₃²⁻</td><td>Сульфиты</td></tr>
          <tr><td>HNO₃</td><td>Азотная</td><td>NO₃⁻</td><td>Нитраты</td></tr>
          <tr><td>HNO₂</td><td>Азотистая</td><td>NO₂⁻</td><td>Нитриты</td></tr>
          <tr><td>H₂CO₃</td><td>Угольная</td><td>CO₃²⁻</td><td>Карбонаты</td></tr>
          <tr><td>H₃PO₄</td><td>Фосфорная</td><td>PO₄³⁻</td><td>Фосфаты</td></tr>
          <tr><td>H₂SiO₃</td><td>Кремниевая</td><td>SiO₃²⁻</td><td>Силикаты</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства</div>
        <ul class="theory-list">
          <li><b>Индикаторы:</b> лакмус — красный, метилоранж — розовый, фенолфталеин — бесцветный.</li>
          <li><b>+ металл (до H):</b> Zn + 2HCl → ZnCl₂ + H₂↑</li>
          <li><b>+ основный оксид:</b> CuO + H₂SO₄ → CuSO₄ + H₂O</li>
          <li><b>+ основание:</b> NaOH + HCl → NaCl + H₂O</li>
          <li><b>+ амфотерный оксид:</b> Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O</li>
          <li><b>+ соль</b> (если газ/осадок): CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑</li>
          <li><b>+ амфотерный гидроксид:</b> Al(OH)₃ + 3HCl → AlCl₃ + 3H₂O</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Ряд активности металлов</div>
        <div class="formula-box">Li → K → Ba → Ca → Na → Mg → Al → Mn → Zn → Cr → Fe → Ni → Sn → Pb → <b>(H)</b> → Cu → Hg → Ag → Pt → Au</div>
        <p class="paragraph">Металлы левее водорода вытесняют его из разбавленных кислот. Правее — не реагируют.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Получение</div>
        <ul class="theory-list">
          <li><b>Кислотный оксид + вода:</b> SO₃ + H₂O → H₂SO₄</li>
          <li><b>H₂ + неметалл:</b> H₂ + Cl₂ → 2HCl</li>
          <li><b>Соль + кислота:</b> NaCl(тв) + H₂SO₄(конц) → NaHSO₄ + HCl↑</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Какая из кислот двухосновная: HCl, H₂SO₄, HNO₃, H₃PO₄?<br>
        <b>Решение:</b> H₂SO₄.<br><br>
        2. Напишите реакцию Zn с HCl.<br>
        <b>Решение:</b> Zn + 2HCl → ZnCl₂ + H₂↑.<br><br>
        3. Напишите реакцию нейтрализации KOH + HNO₃.<br>
        <b>Решение:</b> KOH + HNO₃ → KNO₃ + H₂O.<br><br>
        4. С какими металлами реагирует соляная кислота: Zn, Cu, Fe, Ag?<br>
        <b>Решение:</b> Zn и Fe (левее H). Cu и Ag — нет.
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-3-4': {
    title: '§ 4. Соли: классификация и химические свойства',
    sub: 'Глава 3. Классы неорганических соединений',
    html: `
      <div class="definition"><span class="term">Соли</span> — сложные вещества, состоящие из атомов металла и кислотного остатка.</div>

      <div class="card">
        <div class="card-title"><span class="num">📋</span> Общая характеристика</div>
        <ul class="theory-list">
          <li>В состав входит металл (или NH₄⁺) и кислотный остаток.</li>
          <li>Соли — производные кислот, где H замещён металлом.</li>
          <li>Растворы и расплавы солей — электролиты.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Классификация солей</div>
        <ul class="theory-list">
          <li><b>Средние (нормальные)</b> — все H замещены: NaCl, K₂SO₄, CaCO₃, FeCl₃.</li>
          <li><b>Кислые (гидросоли)</b> — часть H замещена: NaHCO₃, KHSO₄, Ca(H₂PO₄)₂.</li>
          <li><b>Основные (гидроксосоли)</b> — часть OH⁻ не замещена: Cu(OH)Cl, Al(OH)Cl₂.</li>
          <li><b>Двойные</b> — два разных металла: KAl(SO₄)₂, NaKCO₃.</li>
          <li><b>Комплексные</b> — сложный ион: Na₃[Al(OH)₆], K₄[Fe(CN)₆].</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Растворимость солей</div>
        <div class="table-wrap"><table>
          <tr><th>Категория</th><th>Соли</th></tr>
          <tr><td>Растворимые</td><td>Все соли Na⁺, K⁺, NH₄⁺; все нитраты; все хлориды (кроме AgCl, PbCl₂); все сульфаты (кроме BaSO₄, PbSO₄, CaSO₄)</td></tr>
          <tr><td>Малорастворимые</td><td>CaSO₄, Li₂CO₃, MgCO₃</td></tr>
          <tr><td>Нерастворимые</td><td>AgCl, BaSO₄, CaCO₃, CuS, AgI, AgBr</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства</div>
        <ul class="theory-list">
          <li><b>+ металл</b> (более активный): Fe + CuSO₄ → FeSO₄ + Cu</li>
          <li><b>+ кислота</b> (если газ/осадок): CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑</li>
          <li><b>+ щёлочь:</b> CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄</li>
          <li><b>+ другая соль</b> (если осадок): AgNO₃ + NaCl → AgCl↓ + NaNO₃</li>
          <li><b>Разложение при нагревании:</b> 2KNO₃ → 2KNO₂ + O₂↑</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Получение солей</div>
        <ul class="theory-list">
          <li>Металл + кислота: Zn + 2HCl → ZnCl₂ + H₂↑</li>
          <li>Металл + неметалл: 2Na + Cl₂ → 2NaCl</li>
          <li>Основный оксид + кислота: CuO + H₂SO₄ → CuSO₄ + H₂O</li>
          <li>Кислотный оксид + основание: CO₂ + 2NaOH → Na₂CO₃ + H₂O</li>
          <li>Основание + кислота: NaOH + HCl → NaCl + H₂O</li>
          <li>Соль + соль: AgNO₃ + NaCl → AgCl↓ + NaNO₃</li>
          <li>Соль + кислота: BaCl₂ + H₂SO₄ → BaSO₄↓ + 2HCl</li>
          <li>Соль + щёлочь: CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Значение солей</div>
        <div class="table-wrap"><table>
          <tr><th>Соль</th><th>Название</th><th>Применение</th></tr>
          <tr><td>NaCl</td><td>Поваренная соль</td><td>Пища, консервант, сырьё для химии</td></tr>
          <tr><td>CaCO₃</td><td>Мел, мрамор, известняк</td><td>Стройматериал, стекло, скульптура</td></tr>
          <tr><td>NaHCO₃</td><td>Пищевая сода</td><td>Выпечка, медицина, огнетушители</td></tr>
          <tr><td>Na₂CO₃</td><td>Сода (кальцинированная)</td><td>Стекло, мыло, стирка</td></tr>
          <tr><td>KNO₃</td><td>Калийная селитра</td><td>Удобрения, чёрный порох</td></tr>
          <tr><td>NH₄NO₃</td><td>Аммиачная селитра</td><td>Удобрения, взрывчатка</td></tr>
          <tr><td>CuSO₄·5H₂O</td><td>Медный купорос</td><td>Защита растений</td></tr>
          <tr><td>AgNO₃</td><td>Ляпис</td><td>Медицина, реактив</td></tr>
          <tr><td>FeSO₄·7H₂O</td><td>Железный купорос</td><td>Защита растений, краски</td></tr>
        </table></div>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Назовите соли: NaCl, K₂SO₄, CaCO₃, FeCl₃, NaHCO₃.<br>
        <b>Решение:</b> хлорид натрия, сульфат калия, карбонат кальция, хлорид железа(III), гидрокарбонат натрия.<br><br>
        2. Напишите реакцию AgNO₃ + NaCl.<br>
        <b>Решение:</b> AgNO₃ + NaCl → AgCl↓ + NaNO₃.<br><br>
        3. Напишите реакцию CaCO₃ + HCl.<br>
        <b>Решение:</b> CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑.<br><br>
        4. Какую соль называют пищевой содой?<br>
        <b>Решение:</b> NaHCO₃ — гидрокарбонат натрия.
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-3-5': {
    title: '§ 5. Генетическая связь между классами неорганических соединений',
    sub: 'Глава 3. Классы неорганических соединений',
    html: `
      <div class="definition"><span class="term">Генетическая связь</span> — связь между классами соединений, показывающая возможность превращения одних веществ в другие.</div>

      <div class="card">
        <div class="card-title"><span class="num">🔗</span> Генетический ряд металлов</div>
        <div class="formula-box">Металл → Основный оксид → Основание → Соль</div>
        <p class="paragraph"><b>Пример для кальция:</b></p>
        <div class="formula-box">Ca → CaO → Ca(OH)<sub>2</sub> → CaCl<sub>2</sub></div>
        <ul class="theory-list">
          <li>2Ca + O₂ → 2CaO</li>
          <li>CaO + H₂O → Ca(OH)₂</li>
          <li>Ca(OH)₂ + 2HCl → CaCl₂ + 2H₂O</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔗</span> Генетический ряд неметаллов</div>
        <div class="formula-box">Неметалл → Кислотный оксид → Кислота → Соль</div>
        <p class="paragraph"><b>Пример для углерода:</b></p>
        <div class="formula-box">C → CO<sub>2</sub> → H<sub>2</sub>CO<sub>3</sub> → Na<sub>2</sub>CO<sub>3</sub></div>
        <ul class="theory-list">
          <li>C + O₂ → CO₂</li>
          <li>CO₂ + H₂O → H₂CO₃</li>
          <li>H₂CO₃ + 2NaOH → Na₂CO₃ + 2H₂O</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔄</span> Общая схема генетической связи</div>
        <div class="formula-box">Металл → Основный оксид → Основание → Соль</div>
        <div class="formula-box">Неметалл → Кислотный оксид → Кислота → Соль</div>
        <p class="paragraph">Соли могут превращаться друг в друга, реагируя с металлами, кислотами, щелочами, другими солями.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Полный генетический ряд меди</div>
        <div class="formula-box">Cu → CuO → CuSO<sub>4</sub> → Cu(OH)<sub>2</sub> → CuO</div>
        <ul class="theory-list">
          <li>2Cu + O₂ → 2CuO (чёрный порошок)</li>
          <li>CuO + H₂SO₄ → CuSO₄ + H₂O (синий раствор)</li>
          <li>CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄ (голубой осадок)</li>
          <li>Cu(OH)₂ → CuO + H₂O (при нагревании)</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Полный генетический ряд фосфора</div>
        <div class="formula-box">P → P<sub>2</sub>O<sub>5</sub> → H<sub>3</sub>PO<sub>4</sub> → Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub></div>
        <ul class="theory-list">
          <li>4P + 5O₂ → 2P₂O₅</li>
          <li>P₂O₅ + 3H₂O → 2H₃PO₄</li>
          <li>2H₃PO₄ + 3Ca(OH)₂ → Ca₃(PO₄)₂↓ + 6H₂O</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Основные типы превращений</div>
        <div class="table-wrap"><table>
          <tr><th>Превращение</th><th>Реакция</th><th>Пример</th></tr>
          <tr><td>Металл → оксид</td><td>Окисление</td><td>2Mg + O₂ → 2MgO</td></tr>
          <tr><td>Оксид → основание</td><td>+ H₂O</td><td>CaO + H₂O → Ca(OH)₂</td></tr>
          <tr><td>Оксид → кислота</td><td>+ H₂O</td><td>SO₃ + H₂O → H₂SO₄</td></tr>
          <tr><td>Основание → соль</td><td>+ кислота</td><td>NaOH + HCl → NaCl + H₂O</td></tr>
          <tr><td>Кислота → соль</td><td>+ основание</td><td>H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O</td></tr>
          <tr><td>Соль → основание</td><td>+ щёлочь</td><td>CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄</td></tr>
          <tr><td>Соль → оксид</td><td>Разложение</td><td>CaCO₃ → CaO + CO₂↑</td></tr>
          <tr><td>Основание → оксид</td><td>Разложение</td><td>Cu(OH)₂ → CuO + H₂O</td></tr>
        </table></div>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Осуществите превращение: Ba → BaO → Ba(OH)₂ → BaCl₂.<br>
        <b>Решение:</b><br>
        2Ba + O₂ → 2BaO<br>
        BaO + H₂O → Ba(OH)₂<br>
        Ba(OH)₂ + 2HCl → BaCl₂ + 2H₂O.<br><br>
        2. Осуществите превращение: S → SO₂ → H₂SO₃ → Na₂SO₃.<br>
        <b>Решение:</b><br>
        S + O₂ → SO₂<br>
        SO₂ + H₂O → H₂SO₃<br>
        H₂SO₃ + 2NaOH → Na₂SO₃ + 2H₂O.<br><br>
        3. Осуществите превращение: Cu → CuO → CuCl₂ → Cu(OH)₂ → CuO.<br>
        <b>Решение:</b><br>
        2Cu + O₂ → 2CuO<br>
        CuO + 2HCl → CuCl₂ + H₂O<br>
        CuCl₂ + 2NaOH → Cu(OH)₂↓ + 2NaCl<br>
        Cu(OH)₂ → CuO + H₂O (при нагревании).
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

   /* ============ ГЛАВА 4 (РАСШИРЕННАЯ) ============ */

  'ch8-4-1': {
    title: '§ 1. Естественные семейства химических элементов. Амфотерность',
    sub: 'Глава 4. Периодический закон и строение атома',
    html: `
      <div class="definition"><span class="term">Естественное семейство</span> — группа элементов со сходными свойствами, объединённая по определённому признаку (обычно по числу электронов на внешнем уровне).</div>

      <div class="card">
        <div class="card-title"><span class="num">1️⃣</span> Щелочные металлы (IA группа)</div>
        <p class="paragraph">Li, Na, K, Rb, Cs, Fr.</p>
        <ul class="theory-list">
          <li>На внешнем уровне 1 электрон.</li>
          <li>Серебристо-белые, мягкие (режутся ножом).</li>
          <li>Легкоплавкие, малой плотности.</li>
          <li>Очень активные восстановители.</li>
          <li>Реагируют с водой с выделением H₂ и образованием щёлочи.</li>
          <li>Хранят под слоем керосина.</li>
        </ul>
        <div class="formula-box">2Na + 2H<sub>2</sub>O → 2NaOH + H<sub>2</sub>↑</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">2️⃣</span> Щёлочноземельные металлы (IIA группа)</div>
        <p class="paragraph">Ca, Sr, Ba, Ra.</p>
        <ul class="theory-list">
          <li>На внешнем уровне 2 электрона.</li>
          <li>Активные восстановители, уступают щелочным.</li>
          <li>Реагируют с водой и разбавленными кислотами.</li>
          <li>Степень окисления +2.</li>
        </ul>
        <div class="formula-box">Ca + 2H<sub>2</sub>O → Ca(OH)<sub>2</sub> + H<sub>2</sub>↑</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">3️⃣</span> Галогены (VIIA группа)</div>
        <p class="paragraph">F, Cl, Br, I, At.</p>
        <ul class="theory-list">
          <li>На внешнем уровне 7 электронов.</li>
          <li>Сильные окислители — до завершения уровня не хватает 1 электрона.</li>
          <li>Активность падает от F к At.</li>
          <li>Образуют двухатомные молекулы F₂, Cl₂, Br₂, I₂.</li>
          <li>F₂ — бледно-жёлтый газ, Cl₂ — жёлто-зелёный, Br₂ — бурая жидкость, I₂ — фиолетовые кристаллы.</li>
        </ul>
        <div class="formula-box">Cl<sub>2</sub> + 2NaBr → 2NaCl + Br<sub>2</sub></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">4️⃣</span> Благородные (инертные) газы (VIIIA)</div>
        <p class="paragraph">He, Ne, Ar, Kr, Xe, Rn.</p>
        <ul class="theory-list">
          <li>Внешний уровень завершён (2 или 8 электронов).</li>
          <li>Химически малоактивны (особенно He, Ne).</li>
          <li>Одноатомные газы.</li>
          <li>Применение: He — шары, воздухоплавание; Ne — реклама; Ar — сварка.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">5️⃣</span> Халькогены (VIA группа)</div>
        <p class="paragraph">O, S, Se, Te, Po.</p>
        <ul class="theory-list">
          <li>На внешнем уровне 6 электронов.</li>
          <li>Принимают 2 электрона → степень окисления −2.</li>
          <li>O₂ — газ, S — жёлтое твёрдое вещество.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">6️⃣</span> Пниктогены (VA группа)</div>
        <p class="paragraph">N, P, As, Sb, Bi.</p>
        <ul class="theory-list">
          <li>На внешнем уровне 5 электронов.</li>
          <li>Могут отдавать или принимать электроны.</li>
          <li>Степени окисления: −3, +3, +5.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Амфотерность</div>
        <div class="definition"><span class="term">Амфотерность</span> — способность соединения проявлять и кислотные, и основные свойства.</div>
        <p class="paragraph"><b>Амфотерные оксиды:</b> Al₂O₃, ZnO, BeO, Cr₂O₃, Fe₂O₃, PbO.</p>
        <p class="paragraph"><b>Амфотерные гидроксиды:</b> Al(OH)₃, Zn(OH)₂, Be(OH)₂, Cr(OH)₃, Fe(OH)₃.</p>
        <p class="paragraph"><b>Пример — ZnO:</b></p>
        <div class="formula-box">ZnO + 2HCl → ZnCl<sub>2</sub> + H<sub>2</sub>O <span class="eq">(с кислотой)</span></div>
        <div class="formula-box">ZnO + 2NaOH → Na<sub>2</sub>ZnO<sub>2</sub> + H<sub>2</sub>O <span class="eq">(со щёлочью)</span></div>
        <p class="paragraph"><b>Пример — Al(OH)₃:</b></p>
        <div class="formula-box">Al(OH)<sub>3</sub> + 3HCl → AlCl<sub>3</sub> + 3H<sub>2</sub>O</div>
        <div class="formula-box">Al(OH)<sub>3</sub> + NaOH → Na[Al(OH)<sub>4</sub>]</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">💡</span> Как запомнить</div>
        <ul class="theory-list">
          <li><b>Щелочные:</b> Li Na K Rb Cs Fr — 1 электрон на внешнем уровне.</li>
          <li><b>Щёлочноземельные:</b> Ca Sr Ba Ra — 2 электрона.</li>
          <li><b>Галогены:</b> F Cl Br I At — 7 электронов.</li>
          <li><b>Благородные:</b> He Ne Ar Kr Xe Rn — 8 (завершённый уровень).</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Назовите 5 щелочных металлов.<br>
        <b>Решение:</b> Li, Na, K, Rb, Cs.<br><br>
        2. Какие свойства проявляет Al(OH)₃?<br>
        <b>Решение:</b> Амфотерные (реагирует и с кислотами, и со щелочами).<br><br>
        3. Почему галогены — сильные окислители?<br>
        <b>Решение:</b> До завершения внешнего уровня им не хватает 1 электрона, поэтому легко принимают его.
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-4-2': {
    title: '§ 2. Открытие Периодического закона Д. И. Менделеева',
    sub: 'Глава 4. Периодический закон и строение атома',
    html: `
      <div class="paragraph">Дмитрий Иванович Менделеев открыл Периодический закон <b>1 марта 1869 года</b> (по новому стилю — 17 февраля), работая над учебником «Основы химии».</div>

      <div class="definition"><span class="term">Периодический закон</span> (формулировка Менделеева): свойства химических элементов и образованных ими веществ находятся в периодической зависимости от их атомных масс.</div>

      <div class="card">
        <div class="card-title"><span class="num">📜</span> Как Менделеев пришёл к открытию</div>
        <ol class="theory-list num">
          <li>Выписал на карточки все 63 известных в то время элемента с их свойствами.</li>
          <li>Расположил карточки в порядке возрастания атомных масс.</li>
          <li>Заметил, что через определённые промежутки свойства элементов повторяются.</li>
          <li>Оставил пустые клетки для ещё не открытых элементов и предсказал их свойства.</li>
          <li>Исправил атомные массы некоторых элементов (Be, In, U).</li>
        </ol>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔮</span> Предсказания Менделеева</div>
        <p class="paragraph">Менделеев предсказал три неизвестных элемента и их свойства. Позже они были открыты:</p>
        <div class="table-wrap"><table>
          <tr><th>Предсказание</th><th>Открыт</th><th>Год</th><th>Название</th></tr>
          <tr><td>Экабор (Eb)</td><td>Скандий</td><td>1879</td><td>Sc</td></tr>
          <tr><td>Экаалюминий (Ea)</td><td>Галлий</td><td>1875</td><td>Ga</td></tr>
          <tr><td>Экакремний (Es)</td><td>Германий</td><td>1886</td><td>Ge</td></tr>
        </table></div>
        <p class="paragraph">Свойства этих элементов совпали с предсказаниями Менделеева — это и стало триумфом его закона.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Современная формулировка</div>
        <p class="paragraph">Свойства химических элементов и их соединений находятся в периодической зависимости от <b>заряда ядра атома</b>.</p>
        <p class="paragraph">Это объясняется тем, что заряд ядра определяет число электронов и их распределение по уровням, а значит — все химические свойства элемента.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Структура таблицы</div>
        <ul class="theory-list">
          <li><b>Периоды</b> — горизонтальные ряды (7 периодов: 3 малых и 4 больших).</li>
          <li><b>Группы</b> — вертикальные столбцы (8 групп, делятся на A и B).</li>
          <li><b>Порядковый номер</b> = заряд ядра = число протонов = число электронов.</li>
          <li><b>Номер периода</b> = число энергетических уровней.</li>
          <li><b>Номер группы (A)</b> = число электронов на внешнем уровне.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Значение закона</div>
        <ul class="theory-list">
          <li>Объединил все химические знания в стройную систему.</li>
          <li>Позволил предсказывать новые элементы и их свойства.</li>
          <li>Стал основой для изучения строения атома в XX веке.</li>
          <li>Помогает понимать закономерности изменения свойств элементов.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🎯</span> Периодичность свойств</div>
        <div class="table-wrap"><table>
          <tr><th>Направление</th><th>Металлические свойства</th><th>Неметаллические свойства</th><th>Радиус атома</th></tr>
          <tr><td>Слева направо (в периоде)</td><td>Ослабевают</td><td>Усиливаются</td><td>Уменьшается</td></tr>
          <tr><td>Сверху вниз (в группе A)</td><td>Усиливаются</td><td>Ослабевают</td><td>Увеличивается</td></tr>
        </table></div>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. В каком году был открыт Периодический закон?<br>
        <b>Решение:</b> 1869 год, Менделеевым.<br><br>
        2. Какие элементы предсказал Менделеев?<br>
        <b>Решение:</b> экабор (Sc), экаалюминий (Ga), экакремний (Ge).<br><br>
        3. Как изменяются металлические свойства в периоде слева направо?<br>
        <b>Решение:</b> ослабевают.
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-4-3': {
    title: '§ 3. Основные сведения о строении атома',
    sub: 'Глава 4. Периодический закон и строение атома',
    html: `
      <div class="definition"><span class="term">Атом</span> — электронейтральная частица, состоящая из положительно заряженного ядра и отрицательно заряженных электронов.</div>

      <div class="card">
        <div class="card-title"><span class="num">📜</span> История</div>
        <ul class="theory-list">
          <li><b>V в. до н. э.</b> — Демокрит: «всё состоит из атомов».</li>
          <li><b>1803</b> — Джон Дальтон: атом неделим.</li>
          <li><b>1897</b> — Дж. Томсон открыл электрон и предложил «модель пудинга».</li>
          <li><b>1911</b> — Э. Резерфорд: планетарная модель (ядро + электроны вокруг).</li>
          <li><b>1913</b> — Н. Бор: электроны движутся по орбитам (уровням).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚛️</span> Состав атома</div>
        <div class="table-wrap"><table>
          <tr><th>Частица</th><th>Обозначение</th><th>Заряд</th><th>Масса (а. е. м.)</th><th>Где находится</th></tr>
          <tr><td>Протон</td><td>p⁺</td><td>+1</td><td>1</td><td>В ядре</td></tr>
          <tr><td>Нейтрон</td><td>n⁰</td><td>0</td><td>1</td><td>В ядре</td></tr>
          <tr><td>Электрон</td><td>e⁻</td><td>−1</td><td>1/1837</td><td>Вокруг ядра</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔢</span> Важные правила</div>
        <ul class="theory-list">
          <li>Число протонов = порядковый номер элемента.</li>
          <li>Число электронов = число протонов (атом электронейтрален).</li>
          <li>Число нейтронов = Ar − число протонов.</li>
          <li>Заряд ядра = число протонов.</li>
          <li>Масса атома сосредоточена в ядре.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Примеры</div>
        <div class="table-wrap"><table>
          <tr><th>Элемент</th><th>№</th><th>Ar</th><th>p⁺</th><th>n⁰</th><th>e⁻</th></tr>
          <tr><td>H</td><td>1</td><td>1</td><td>1</td><td>0</td><td>1</td></tr>
          <tr><td>He</td><td>2</td><td>4</td><td>2</td><td>2</td><td>2</td></tr>
          <tr><td>C</td><td>6</td><td>12</td><td>6</td><td>6</td><td>6</td></tr>
          <tr><td>O</td><td>8</td><td>16</td><td>8</td><td>8</td><td>8</td></tr>
          <tr><td>Na</td><td>11</td><td>23</td><td>11</td><td>12</td><td>11</td></tr>
          <tr><td>Cl</td><td>17</td><td>35,5</td><td>17</td><td>18</td><td>17</td></tr>
          <tr><td>Fe</td><td>26</td><td>56</td><td>26</td><td>30</td><td>26</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📚</span> Изотопы</div>
        <div class="definition"><span class="term">Изотопы</span> — разновидности атомов одного элемента с одинаковым числом протонов, но разным числом нейтронов.</div>
        <p class="paragraph">Пример — водород:</p>
        <ul class="theory-list">
          <li><b>Протий</b> ¹H — 1p, 0n (обычный водород).</li>
          <li><b>Дейтерий</b> ²H (D) — 1p, 1n (тяжёлый водород).</li>
          <li><b>Тритий</b> ³H (T) — 1p, 2n (радиоактивный).</li>
        </ul>
        <p class="paragraph">Изотопы одного элемента имеют одинаковые химические свойства, но разные физические (плотность, t° кипения).</p>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Сколько протонов, нейтронов, электронов у атома кислорода?<br>
        <b>Решение:</b> p⁺ = 8, e⁻ = 8, n⁰ = 16 − 8 = 8.<br><br>
        2. Сколько нейтронов у ²³Na?<br>
        <b>Решение:</b> n⁰ = 23 − 11 = 12.<br><br>
        3. Чем отличаются изотопы ¹²C и ¹⁴C?<br>
        <b>Решение:</b> Числом нейтронов: 6 и 8.
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-4-4': {
    title: '§ 4. Строение электронных оболочек атомов',
    sub: 'Глава 4. Периодический закон и строение атома',
    html: `
      <div class="definition"><span class="term">Электронная оболочка</span> — совокупность всех электронов в атоме. Электроны распределены по энергетическим уровням.</div>

      <div class="card">
        <div class="card-title"><span class="num">🔢</span> Формула максимального числа электронов</div>
        <div class="formula-box">N = 2n<sup>2</sup>, где n — номер уровня</div>
        <ul class="theory-list">
          <li>1-й уровень: 2·1² = <b>2</b> электрона (максимум).</li>
          <li>2-й уровень: 2·2² = <b>8</b> электронов.</li>
          <li>3-й уровень: 2·3² = <b>18</b> электронов.</li>
          <li>4-й уровень: 2·4² = <b>32</b> электрона.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📐</span> Правила заполнения</div>
        <ul class="theory-list">
          <li>Уровни заполняются по порядку (сначала 1-й, потом 2-й, затем 3-й…).</li>
          <li>На внешнем уровне не может быть больше 8 электронов.</li>
          <li>Число электронов на внешнем уровне = номер группы (для A-подгрупп).</li>
          <li>Число энергетических уровней = номер периода.</li>
          <li>Атом стремится завершить внешний уровень (отдать или принять электроны).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Электронные конфигурации</div>
        <p class="paragraph">Записываются с помощью s- и p-орбиталей. s — 2 электрона максимум, p — 6, d — 10, f — 14.</p>
        <div class="table-wrap"><table>
          <tr><th>Элемент</th><th>№</th><th>Распределение по уровням</th><th>Конфигурация</th></tr>
          <tr><td>H</td><td>1</td><td>1</td><td>1s¹</td></tr>
          <tr><td>He</td><td>2</td><td>2</td><td>1s²</td></tr>
          <tr><td>Li</td><td>3</td><td>2, 1</td><td>1s² 2s¹</td></tr>
          <tr><td>Be</td><td>4</td><td>2, 2</td><td>1s² 2s²</td></tr>
          <tr><td>B</td><td>5</td><td>2, 3</td><td>1s² 2s² 2p¹</td></tr>
          <tr><td>C</td><td>6</td><td>2, 4</td><td>1s² 2s² 2p²</td></tr>
          <tr><td>N</td><td>7</td><td>2, 5</td><td>1s² 2s² 2p³</td></tr>
          <tr><td>O</td><td>8</td><td>2, 6</td><td>1s² 2s² 2p⁴</td></tr>
          <tr><td>F</td><td>9</td><td>2, 7</td><td>1s² 2s² 2p⁵</td></tr>
          <tr><td>Ne</td><td>10</td><td>2, 8</td><td>1s² 2s² 2p⁶</td></tr>
          <tr><td>Na</td><td>11</td><td>2, 8, 1</td><td>1s² 2s² 2p⁶ 3s¹</td></tr>
          <tr><td>Cl</td><td>17</td><td>2, 8, 7</td><td>1s² 2s² 2p⁶ 3s² 3p⁵</td></tr>
          <tr><td>Ar</td><td>18</td><td>2, 8, 8</td><td>1s² 2s² 2p⁶ 3s² 3p⁶</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> s-, p-, d-элементы</div>
        <ul class="theory-list">
          <li><b>s-элементы</b> — заполняется s-орбиталь внешнего уровня: H, He, Li, Na, K, Be, Mg, Ca.</li>
          <li><b>p-элементы</b> — заполняется p-орбиталь: B → Ne, Al → Ar, Ga → Kr.</li>
          <li><b>d-элементы</b> — заполняется d-орбиталь предыдущего уровня: Fe, Cu, Zn, Cr, Mn.</li>
          <li><b>f-элементы</b> — лантаноиды и актиноиды.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🎯</span> Валентные электроны</div>
        <p class="paragraph">Электроны внешнего (иногда предвнешнего) уровня — валентные. Они определяют химические свойства элемента.</p>
        <ul class="theory-list">
          <li>У металлов 1–3 внешних электрона → отдают.</li>
          <li>У неметаллов 4–7 внешних электронов → принимают (или отдают).</li>
          <li>У благородных газов внешний уровень завершён → малоактивны.</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Распределите электроны по уровням у атома O.<br>
        <b>Решение:</b> № 8. 1-й уровень — 2 e⁻, 2-й — 6 e⁻. Схема: 2, 6.<br><br>
        2. Сколько электронов на внешнем уровне у хлора?<br>
        <b>Решение:</b> Cl — VIIA группа → 7 электронов.<br><br>
        3. Какой элемент имеет схему 2, 8, 8?<br>
        <b>Решение:</b> Сумма 18 → аргон Ar.<br><br>
        4. Сколько уровней у атома натрия?<br>
        <b>Решение:</b> Na — 3-й период → 3 уровня.
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-4-5': {
    title: '§ 5. Характеристика химического элемента по положению в таблице',
    sub: 'Глава 4. Периодический закон и строение атома',
    html: `
      <div class="card">
        <div class="card-title"><span class="num">📝</span> План характеристики элемента</div>
        <ol class="theory-list num">
          <li>Химический знак и название.</li>
          <li>Положение в таблице: период, группа, подгруппа.</li>
          <li>Порядковый номер, заряд ядра, число протонов, нейтронов, электронов.</li>
          <li>Строение электронной оболочки (распределение по уровням).</li>
          <li>Металл или неметалл (по свойствам).</li>
          <li>Формула высшего оксида и его характер (основный / кислотный / амфотерный).</li>
          <li>Формула высшего гидроксида и его характер.</li>
          <li>Формула летучего водородного соединения (для неметаллов).</li>
        </ol>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Пример — характеристика натрия Na</div>
        <ul class="theory-list">
          <li>Na — натрий, щелочной металл.</li>
          <li>3-й период, I-A группа.</li>
          <li>№ 11, заряд ядра +11, p⁺ = 11, e⁻ = 11, n⁰ = 23 − 11 = 12.</li>
          <li>Электронная схема: 2, 8, 1. Конфигурация: 1s² 2s² 2p⁶ 3s¹.</li>
          <li>Металл, сильный восстановитель.</li>
          <li>Высший оксид — Na₂O (основный).</li>
          <li>Гидроксид — NaOH (сильная щёлочь).</li>
          <li>Летучего водородного соединения нет (металл).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Пример — характеристика серы S</div>
        <ul class="theory-list">
          <li>S — сера, неметалл.</li>
          <li>3-й период, VI-A группа.</li>
          <li>№ 16, заряд ядра +16, p⁺ = 16, e⁻ = 16, n⁰ = 32 − 16 = 16.</li>
          <li>Электронная схема: 2, 8, 6. Конфигурация: 1s² 2s² 2p⁶ 3s² 3p⁴.</li>
          <li>Неметалл, окислитель и восстановитель.</li>
          <li>Высший оксид — SO₃ (кислотный).</li>
          <li>Гидроксид — H₂SO₄ (сильная кислота).</li>
          <li>Летучее водородное соединение — H₂S.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Пример — характеристика хлора Cl</div>
        <ul class="theory-list">
          <li>Cl — хлор, галоген.</li>
          <li>3-й период, VII-A группа.</li>
          <li>№ 17, заряд ядра +17, p⁺ = 17, e⁻ = 17, n⁰ = 35,5 − 17 ≈ 18.</li>
          <li>Электронная схема: 2, 8, 7. Конфигурация: 1s² 2s² 2p⁶ 3s² 3p⁵.</li>
          <li>Неметалл, сильный окислитель.</li>
          <li>Высший оксид — Cl₂O₇ (кислотный).</li>
          <li>Гидроксид — HClO₄ (хлорная кислота).</li>
          <li>Летучее водородное соединение — HCl.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Изменение свойств по таблице</div>
        <ul class="theory-list">
          <li><b>Слева направо по периоду:</b> металлические свойства ослабевают, неметаллические усиливаются, радиус атома уменьшается.</li>
          <li><b>Сверху вниз по группе (A):</b> металлические свойства усиливаются, неметаллические ослабевают, радиус атома увеличивается.</li>
          <li><b>В группе B (побочной):</b> все элементы — металлы.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Высшие оксиды и гидроксиды</div>
        <div class="table-wrap"><table>
          <tr><th>Группа</th><th>Высший оксид</th><th>Гидроксид</th><th>Характер</th></tr>
          <tr><td>I-A</td><td>R₂O</td><td>ROH</td><td>Основный</td></tr>
          <tr><td>II-A</td><td>RO</td><td>R(OH)₂</td><td>Основный</td></tr>
          <tr><td>III-A</td><td>R₂O₃</td><td>R(OH)₃</td><td>Амфотерный (Al)</td></tr>
          <tr><td>IV-A</td><td>RO₂</td><td>H₂RO₃</td><td>Кислотный</td></tr>
          <tr><td>V-A</td><td>R₂O₅</td><td>H₃RO₄</td><td>Кислотный</td></tr>
          <tr><td>VI-A</td><td>RO₃</td><td>H₂RO₄</td><td>Кислотный</td></tr>
          <tr><td>VII-A</td><td>R₂O₇</td><td>HRO₄</td><td>Кислотный</td></tr>
        </table></div>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Дайте характеристику магния Mg.<br>
        <b>Решение:</b> № 12, 3-й период, II-A группа. Заряд ядра +12. p⁺ = 12, e⁻ = 12, n⁰ = 24 − 12 = 12. Схема: 2, 8, 2. Металл. Оксид MgO — основный. Гидроксид Mg(OH)₂ — основание.<br><br>
        2. Дайте характеристику фосфора P.<br>
        <b>Решение:</b> № 15, 3-й период, V-A группа. Заряд ядра +15. p⁺ = 15, e⁻ = 15, n⁰ = 31 − 15 = 16. Схема: 2, 8, 5. Неметалл. Оксид P₂O₅ — кислотный. Гидроксид H₃PO₄. Летучее соединение PH₃.<br><br>
        3. Дайте характеристику калия K.<br>
        <b>Решение:</b> № 19, 4-й период, I-A группа. Заряд ядра +19. p⁺ = 19, e⁻ = 19, n⁰ = 39 − 19 = 20. Схема: 2, 8, 8, 1. Металл (щелочной). Оксид K₂O — основный. Гидроксид KOH — щёлочь.
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },
   /* ============ ГЛАВА 5 (РАСШИРЕННАЯ) ============ */

  'ch8-5-1': {
    title: '§ 1. Ионная химическая связь',
    sub: 'Глава 5. Химическая связь. ОВР',
    html: `
      <div class="definition"><span class="term">Ионная связь</span> — связь, которая образуется между ионами за счёт электростатического притяжения противоположно заряженных частиц.</div>

      <div class="card">
        <div class="card-title"><span class="num">⚛️</span> Как образуется ионная связь</div>
        <p class="paragraph">Атомы металлов легко отдают валентные электроны, превращаясь в положительные ионы — <b>катионы</b>. Атомы неметаллов принимают электроны, превращаясь в отрицательные ионы — <b>анионы</b>.</p>
        <div class="formula-box">Na − 1e⁻ → Na⁺</div>
        <div class="formula-box">Cl + 1e⁻ → Cl⁻</div>
        <p class="paragraph">Противоположно заряженные ионы притягиваются — возникает ионная связь.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📜</span> История</div>
        <p class="paragraph">Понятие «ион» ввёл английский физик и химик Майкл Фарадей в 1834 году. Теория электролитической диссоциации была создана Сванте Аррениусом в 1887 году.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📋</span> Условия образования</div>
        <ul class="theory-list">
          <li>Между типичными металлами (I–II вал.) и типичными неметаллами (VI–VII вал.).</li>
          <li>Разность электроотрицательностей Δχ > 1,7.</li>
          <li>Пример: NaCl, KBr, CaO, MgCl₂, FeS, LiF.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Важнейшие примеры</div>
        <div class="table-wrap"><table>
          <tr><th>Формула</th><th>Название</th><th>Катион</th><th>Анион</th></tr>
          <tr><td>NaCl</td><td>Хлорид натрия</td><td>Na⁺</td><td>Cl⁻</td></tr>
          <tr><td>CaO</td><td>Оксид кальция</td><td>Ca²⁺</td><td>O²⁻</td></tr>
          <tr><td>MgCl₂</td><td>Хлорид магния</td><td>Mg²⁺</td><td>2 Cl⁻</td></tr>
          <tr><td>Al₂O₃</td><td>Оксид алюминия</td><td>2 Al³⁺</td><td>3 O²⁻</td></tr>
          <tr><td>KBr</td><td>Бромид калия</td><td>K⁺</td><td>Br⁻</td></tr>
          <tr><td>LiF</td><td>Фторид лития</td><td>Li⁺</td><td>F⁻</td></tr>
          <tr><td>FeS</td><td>Сульфид железа(II)</td><td>Fe²⁺</td><td>S²⁻</td></tr>
          <tr><td>NaOH</td><td>Гидроксид натрия</td><td>Na⁺</td><td>OH⁻</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">💎</span> Ионная кристаллическая решётка</div>
        <p class="paragraph">Вещества с ионной связью образуют ионные кристаллические решётки. Свойства:</p>
        <ul class="theory-list">
          <li>Твёрдые при обычных условиях.</li>
          <li>Тугоплавкие (высокая t° плавления).</li>
          <li>Хрупкие.</li>
          <li>Многие растворимы в воде.</li>
          <li>Растворы и расплавы проводят электрический ток.</li>
          <li>Нелетучие.</li>
        </ul>
        <div class="example-box">
          <div class="lbl">Пример</div>
          NaCl плавится при 801 °C, кипит при 1465 °C. Кристалл хрупкий: при ударе слои ионов сдвигаются, одноимённые ионы отталкиваются — кристалл раскалывается.
        </div>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Какие вещества имеют ионную связь: NaCl, H₂O, K₂O, CO₂, CaCl₂?<br>
        <b>Решение:</b> NaCl, K₂O, CaCl₂ (металл + неметалл).<br><br>
        2. Как образуется ионная связь в CaCl₂?<br>
        <b>Решение:</b> Ca отдаёт 2 электрона и становится Ca²⁺, каждый Cl принимает 1 электрон и становится Cl⁻.<br><br>
        3. Почему растворы NaCl проводят ток, а чистый NaCl — нет?<br>
        <b>Решение:</b> В растворе ионы свободно перемещаются. В кристалле они «заперты» в решётке.
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-5-2': {
    title: '§ 2. Ковалентная химическая связь',
    sub: 'Глава 5. Химическая связь. ОВР',
    html: `
      <div class="definition"><span class="term">Ковалентная связь</span> — связь, возникающая за счёт общей электронной пары между двумя атомами.</div>

      <div class="card">
        <div class="card-title"><span class="num">⚛️</span> Как образуется</div>
        <p class="paragraph">Два атома-неметалла имеют неспаренные электроны на внешних уровнях. При сближении они образуют общую электронную пару, которая принадлежит обоим атомам.</p>
        <div class="formula-box">H· + ·H → H:H (H₂)</div>
        <div class="formula-box">H· + ·Cl: → H:Cl (HCl)</div>
        <p class="paragraph">Каждая общая пара = одна ковалентная связь.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Механизмы образования</div>
        <p class="paragraph"><b>1. Обменный механизм</b> — каждый атом даёт по одному электрону:</p>
        <div class="formula-box">H₂, Cl₂, O₂, N₂, HCl, H₂O</div>
        <p class="paragraph"><b>2. Донорно-акцепторный</b> — один атом даёт пару, другой принимает её:</p>
        <div class="formula-box">NH<sub>3</sub> + H<sup>+</sup> → NH<sub>4</sub><sup>+</sup></div>
        <div class="formula-box">H<sub>2</sub>O + H<sup>+</sup> → H<sub>3</sub>O<sup>+</sup></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📐</span> Свойства ковалентной связи</div>
        <ul class="theory-list">
          <li><b>Длина</b> — расстояние между ядрами атомов. Чем короче связь, тем она прочнее.</li>
          <li><b>Энергия</b> — энергия, необходимая для разрыва связи. Измеряется в кДж/моль.</li>
          <li><b>Кратность</b> — число общих пар: одинарная, двойная, тройная.</li>
          <li><b>Насыщаемость</b> — атом образует строго определённое число связей.</li>
          <li><b>Направленность</b> — связи расположены под определёнными углами.</li>
        </ul>
        <div class="formula-box">H−H — одинарная · O=O — двойная · N≡N — тройная</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Энергии связей</div>
        <div class="table-wrap"><table>
          <tr><th>Связь</th><th>Энергия (кДж/моль)</th></tr>
          <tr><td>H−H</td><td>436</td></tr>
          <tr><td>Cl−Cl</td><td>243</td></tr>
          <tr><td>O=O</td><td>498</td></tr>
          <tr><td>N≡N</td><td>946</td></tr>
          <tr><td>H−Cl</td><td>431</td></tr>
        </table></div>
        <p class="paragraph">Чем больше энергия, тем прочнее связь. Именно поэтому азот N₂ химически малоактивен — у него тройная прочная связь.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Получение ковалентной связи на примере H₂</div>
        <p class="paragraph">Схема: каждый атом водорода имеет 1 электрон. Образуется общая пара — молекула H₂.</p>
        <div class="formula-box">H· + ·H → H:H</div>
        <p class="paragraph">Аналогично для Cl₂, O₂, N₂.</p>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Какой механизм образования связи в H₂?<br>
        <b>Решение:</b> обменный — каждый H даёт 1 электрон.<br><br>
        2. Какой механизм в NH₄⁺?<br>
        <b>Решение:</b> донорно-акцепторный — N даёт пару, H⁺ принимает.<br><br>
        3. Почему N₂ прочнее O₂?<br>
        <b>Решение:</b> В N₂ тройная связь (946 кДж/моль), в O₂ двойная (498).
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-5-3': {
    title: '§ 3. Ковалентная неполярная и полярная связь',
    sub: 'Глава 5. Химическая связь. ОВР',
    html: `
      <div class="definition"><span class="term">Ковалентная неполярная связь</span> — связь между атомами одного и того же элемента-неметалла. Общая электронная пара расположена симметрично — ровно посередине между ядрами.</div>

      <div class="card">
        <div class="card-title"><span class="num">🔵</span> Примеры неполярной связи</div>
        <ul class="theory-list">
          <li>H₂, O₂, N₂, Cl₂, F₂, Br₂, I₂ — двухатомные молекулы.</li>
          <li>P₄, S₈, O₃ — многоатомные.</li>
          <li>Электроотрицательности атомов одинаковы, разность Δχ = 0.</li>
        </ul>
        <div class="formula-box">H:H, Cl:Cl, O::O, N:::N</div>
      </div>

      <div class="definition"><span class="term">Ковалентная полярная связь</span> — связь между атомами разных неметаллов. Общая электронная пара смещена к более электроотрицательному атому.</div>

      <div class="card">
        <div class="card-title"><span class="num">🟠</span> Примеры полярной связи</div>
        <ul class="theory-list">
          <li>HCl, H₂O, NH₃, CO₂, H₂S, SO₂, CH₄.</li>
          <li>Разность Δχ от 0,4 до 1,7.</li>
        </ul>
        <div class="formula-box">H<sup>δ+</sup>−Cl<sup>δ−</sup></div>
        <div class="formula-box">H<sup>δ+</sup>−O<sup>δ−</sup>−H<sup>δ+</sup></div>
        <div class="formula-box">H<sup>δ+</sup>−N<sup>δ−</sup>−H<sup>δ+</sup></div>
        <p class="paragraph">δ (дельта) — частичный заряд. Более электроотрицательный атом получает δ−.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Электроотрицательность (χ)</div>
        <p class="paragraph">Способность атома притягивать электроны других атомов. Ряд усиления (по Полингу):</p>
        <div class="formula-box">F (4,0) > O (3,5) > N (3,0) > Cl (2,8) > Br (2,7) > I (2,5) > S (2,5) > C (2,5) > H (2,2) > металлы</div>
        <p class="paragraph">Самый электроотрицательный элемент — фтор. Менее всего — металлы (Li, Na, K).</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Разница между связями</div>
        <div class="table-wrap"><table>
          <tr><th>Признак</th><th>Неполярная</th><th>Полярная</th><th>Ионная</th></tr>
          <tr><td>Атомы</td><td>Одинаковые</td><td>Разные</td><td>Металл + неметалл</td></tr>
          <tr><td>Δχ</td><td>0</td><td>0,4–1,7</td><td>&gt; 1,7</td></tr>
          <tr><td>Пара смещена</td><td>Симметрично</td><td>К более ЭО</td><td>Полностью к неметаллу</td></tr>
          <tr><td>Пример</td><td>O₂, N₂</td><td>HCl, H₂O</td><td>NaCl, CaO</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">💎</span> Кристаллические решётки</div>
        <ul class="theory-list">
          <li><b>Молекулярные</b> — лёгкоплавкие, летучие: H₂, HCl, CO₂, I₂.</li>
          <li><b>Атомные</b> — очень твёрдые и тугоплавкие: алмаз, SiO₂, SiC, графит (слоистый).</li>
        </ul>
        <p class="paragraph">Пример: CO₂ существует в виде молекул (газ), а SiO₂ — атомный кристалл (песок, кварц).</p>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Определите тип связи: O₂, HCl, H₂O, N₂, NH₃.<br>
        <b>Решение:</b> неполярная — O₂, N₂; полярная — HCl, H₂O, NH₃.<br><br>
        2. К какому атому смещена пара в HCl?<br>
        <b>Решение:</b> к хлору Cl (более электроотрицательный).<br><br>
        3. Почему H₂S — полярная молекула?<br>
        <b>Решение:</b> S и H — разные неметаллы, χ(S) = 2,5, χ(H) = 2,2. Пара смещена к S.
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-5-4': {
    title: '§ 4. Металлическая химическая связь',
    sub: 'Глава 5. Химическая связь. ОВР',
    html: `
      <div class="definition"><span class="term">Металлическая связь</span> — связь между положительными ионами металлов и обобществлёнными электронами.</div>

      <div class="card">
        <div class="card-title"><span class="num">⚛️</span> Как образуется</div>
        <p class="paragraph">Атомы металлов легко отдают валентные электроны. Эти электроны становятся общими для всего кристалла — образуют «электронное облако» или «электронный газ». Положительные ионы в узлах удерживаются этим облаком.</p>
        <div class="formula-box">Me⁰ − ne⁻ → Me<sup>n+</sup> + «электронное облако»</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">💎</span> Свойства металлов</div>
        <ul class="theory-list">
          <li><b>Электропроводность</b> — свободные электроны переносят заряд.</li>
          <li><b>Теплопроводность</b> — электроны быстро передают энергию.</li>
          <li><b>Металлический блеск</b> — отражение света электронами.</li>
          <li><b>Ковкость и пластичность</b> — слои ионов сдвигаются без разрушения связи.</li>
          <li>Разные t° плавления: Hg — жидкий при комнатной t°, W — 3410 °C.</li>
          <li>Разная твёрдость: Na — режется ножом, Cr — режет стекло.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Типы кристаллических решёток металлов</div>
        <ul class="theory-list">
          <li><b>Кубическая объёмноцентрированная (ОЦК)</b> — Li, Na, K, Fe (α), Cr, W.</li>
          <li><b>Кубическая гранецентрированная (ГЦК)</b> — Cu, Ag, Au, Al, Ni, Pb.</li>
          <li><b>Гексагональная плотноупакованная (ГПУ)</b> — Mg, Zn, Be, Ti.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Сравнение связей</div>
        <div class="table-wrap"><table>
          <tr><th>Признак</th><th>Ионная</th><th>Ковалентная</th><th>Металлическая</th></tr>
          <tr><td>Частицы</td><td>Ионы</td><td>Атомы</td><td>Ионы + e⁻</td></tr>
          <tr><td>Пара</td><td>Перешла полностью</td><td>Общая</td><td>Общая для всех</td></tr>
          <tr><td>Прочность</td><td>Высокая</td><td>Очень высокая</td><td>Разная</td></tr>
          <tr><td>Пример</td><td>NaCl</td><td>H₂O, алмаз</td><td>Cu, Fe</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Сплавы</div>
        <p class="paragraph">Сплавы — это твёрдые системы, состоящие из двух или нескольких металлов (или металла и неметалла).</p>
        <ul class="theory-list">
          <li><b>Сталь</b> — Fe + C (0,1–2%).</li>
          <li><b>Чугун</b> — Fe + C (2–4%).</li>
          <li><b>Бронза</b> — Cu + Sn.</li>
          <li><b>Латунь</b> — Cu + Zn.</li>
          <li><b>Мельхиор</b> — Cu + Ni.</li>
          <li><b>Дюраль</b> — Al + Cu + Mg.</li>
        </ul>
        <p class="paragraph">Сплавы часто превосходят чистые металлы по свойствам: прочнее, твёрже, устойчивее к коррозии.</p>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Чем объясняется электропроводность металлов?<br>
        <b>Решение:</b> наличием свободных электронов.<br><br>
        2. Почему металлы ковкие?<br>
        <b>Решение:</b> при деформации слои ионов сдвигаются, но связь с общим облаком сохраняется.<br><br>
        3. Какая связь в сплаве Cu + Zn?<br>
        <b>Решение:</b> металлическая.
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-5-5': {
    title: '§ 5. Степень окисления',
    sub: 'Глава 5. Химическая связь. ОВР',
    html: `
      <div class="definition"><span class="term">Степень окисления (с. о.)</span> — условный заряд атома в соединении, вычисленный исходя из предположения, что все связи — ионные.</div>

      <div class="card">
        <div class="card-title"><span class="num">📐</span> Правила определения</div>
        <ol class="theory-list num">
          <li>В простых веществах с. о. = 0 (O₂, Fe, S, H₂, Cl₂).</li>
          <li>Сумма степеней окисления в молекуле = 0.</li>
          <li>В ионе сумма с. о. = заряду иона (NH₄⁺ = +1, SO₄²⁻ = −2).</li>
          <li>Металлы I-A всегда +1, II-A всегда +2, Al всегда +3.</li>
          <li>Водород обычно +1, но в гидридах металлов −1 (NaH, CaH₂).</li>
          <li>Кислород обычно −2, но в H₂O₂ −1, в OF₂ +2.</li>
          <li>Фтор всегда −1 (самый электроотрицательный).</li>
        </ol>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔢</span> Примеры</div>
        <div class="table-wrap"><table>
          <tr><th>Формула</th><th>Степени окисления</th></tr>
          <tr><td>H₂O</td><td>H⁺¹, O⁻²</td></tr>
          <tr><td>H₂SO₄</td><td>H⁺¹, S⁺⁶, O⁻²</td></tr>
          <tr><td>HNO₃</td><td>H⁺¹, N⁺⁵, O⁻²</td></tr>
          <tr><td>KMnO₄</td><td>K⁺¹, Mn⁺⁷, O⁻²</td></tr>
          <tr><td>K₂Cr₂O₇</td><td>K⁺¹, Cr⁺⁶, O⁻²</td></tr>
          <tr><td>NaCl</td><td>Na⁺¹, Cl⁻¹</td></tr>
          <tr><td>Fe₂O₃</td><td>Fe⁺³, O⁻²</td></tr>
          <tr><td>NH₃</td><td>N⁻³, H⁺¹</td></tr>
          <tr><td>CH₄</td><td>C⁻⁴, H⁺¹</td></tr>
          <tr><td>MnO₂</td><td>Mn⁺⁴, O⁻²</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🧮</span> Как найти с. о. в сложном веществе</div>
        <p class="paragraph"><b>Пример 1.</b> H₂SO₄: H⁺¹·2 + S + O⁻²·4 = 0 → 2 + S − 8 = 0 → S = +6.</p>
        <p class="paragraph"><b>Пример 2.</b> KMnO₄: K⁺¹ + Mn + 4·O⁻² = 0 → 1 + Mn − 8 = 0 → Mn = +7.</p>
        <p class="paragraph"><b>Пример 3.</b> K₂Cr₂O₇: 2·(+1) + 2·Cr + 7·(−2) = 0 → 2 + 2Cr − 14 = 0 → 2Cr = 12 → Cr = +6.</p>
        <p class="paragraph"><b>Пример 4.</b> NH₃: N + 3·(+1) = 0 → N = −3.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Типичные с. о. элементов</div>
        <div class="table-wrap"><table>
          <tr><th>Элемент</th><th>Возможные с. о.</th></tr>
          <tr><td>H</td><td>+1, −1 (в гидридах)</td></tr>
          <tr><td>O</td><td>−2, −1 (в пероксидах), +2 (в OF₂)</td></tr>
          <tr><td>F</td><td>−1</td></tr>
          <tr><td>Cl</td><td>−1, 0, +1, +3, +5, +7</td></tr>
          <tr><td>S</td><td>−2, 0, +4, +6</td></tr>
          <tr><td>N</td><td>−3, 0, +1, +2, +3, +4, +5</td></tr>
          <tr><td>Fe</td><td>0, +2, +3, (+6)</td></tr>
          <tr><td>Mn</td><td>0, +2, +4, +6, +7</td></tr>
          <tr><td>Cr</td><td>0, +2, +3, +6</td></tr>
        </table></div>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Определите с. о. марганца в KMnO₄.<br>
        <b>Решение:</b> K⁺¹ + Mn + 4·O⁻² = 0 → 1 + Mn − 8 = 0 → Mn = +7.<br><br>
        2. Определите с. о. серы в H₂S.<br>
        <b>Решение:</b> 2·(+1) + S = 0 → S = −2.<br><br>
        3. Определите с. о. азота в HNO₃.<br>
        <b>Решение:</b> 1 + N + 3·(−2) = 0 → N = +5.<br><br>
        4. Определите с. о. углерода в CH₄.<br>
        <b>Решение:</b> C + 4·(+1) = 0 → C = −4.
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-5-6': {
    title: '§ 6. Окислительно-восстановительные реакции',
    sub: 'Глава 5. Химическая связь. ОВР',
    html: `
      <div class="definition"><span class="term">Окислительно-восстановительные реакции (ОВР)</span> — реакции, протекающие с изменением степеней окисления элементов.</div>

      <div class="card">
        <div class="card-title"><span class="num">🔺</span> Окисление</div>
        <p class="paragraph">Процесс <b>отдачи</b> электронов. Степень окисления повышается.</p>
        <div class="formula-box">Fe⁰ − 2e⁻ → Fe⁺²</div>
        <div class="formula-box">S⁻² − 6e⁻ → S⁺⁴</div>
        <p class="paragraph">Вещество, которое отдаёт электроны, — <b>восстановитель</b> (сам окисляется).</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔻</span> Восстановление</div>
        <p class="paragraph">Процесс <b>принятия</b> электронов. Степень окисления понижается.</p>
        <div class="formula-box">Cl₂⁰ + 2e⁻ → 2Cl⁻¹</div>
        <div class="formula-box">Mn⁺⁷ + 5e⁻ → Mn⁺²</div>
        <p class="paragraph">Вещество, которое принимает электроны, — <b>окислитель</b> (сам восстанавливается).</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Основные окислители и восстановители</div>
        <p class="paragraph"><b>Окислители:</b></p>
        <ul class="theory-list">
          <li>O₂, O₃, F₂, Cl₂, Br₂.</li>
          <li>HNO₃, H₂SO₄ (конц.), HClO₄.</li>
          <li>KMnO₄, K₂Cr₂O₇, MnO₂.</li>
          <li>Ионы металлов в высшей с. о.: Fe³⁺, Cu²⁺.</li>
        </ul>
        <p class="paragraph"><b>Восстановители:</b></p>
        <ul class="theory-list">
          <li>Активные металлы: Na, K, Ca, Mg, Al, Zn.</li>
          <li>H₂, C, CO.</li>
          <li>H₂S, NH₃, SO₂.</li>
          <li>Ионы металлов в низшей с. о.: Fe²⁺, Sn²⁺.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📐</span> Метод электронного баланса</div>
        <ol class="theory-list num">
          <li>Расставить степени окисления всех элементов.</li>
          <li>Найти элементы, у которых степень окисления изменилась.</li>
          <li>Составить схемы окисления и восстановления (полуреакции).</li>
          <li>Уравнять число отданных и принятых электронов (НОК).</li>
          <li>Расставить коэффициенты в уравнении.</li>
          <li>Проверить баланс по атомам каждого элемента.</li>
        </ol>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🧮</span> Пример 1: 2H₂S + 3O₂ → 2SO₂ + 2H₂O</div>
        <p class="paragraph"><b>Шаг 1.</b> С. о.: H⁺¹₂S⁻² + O₂⁰ → S⁺⁴O₂⁻² + H₂O</p>
        <p class="paragraph"><b>Шаг 2.</b> Изменяются: S (−2 → +4) и O (0 → −2).</p>
        <p class="paragraph"><b>Шаг 3.</b> Схемы:</p>
        <div class="formula-box">S⁻² − 6e⁻ → S⁺⁴ | × 2 — окисление</div>
        <div class="formula-box">O₂⁰ + 4e⁻ → 2O⁻² | × 3 — восстановление</div>
        <p class="paragraph"><b>Шаг 4.</b> НОК(6,4) = 12. Множители: 2 и 3.</p>
        <p class="paragraph"><b>Шаг 5.</b> Коэффициенты: перед H₂S и SO₂ — 2, перед O₂ — 3, перед H₂O — 2.</p>
        <div class="formula-box">2H<sub>2</sub>S + 3O<sub>2</sub> → 2SO<sub>2</sub> + 2H<sub>2</sub>O</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🧮</span> Пример 2: Cu + HNO₃(разб.) → Cu(NO₃)₂ + NO + H₂O</div>
        <p class="paragraph"><b>Шаг 1.</b> Cu⁰ + H⁺¹N⁺⁵O₃⁻² → Cu⁺²(NO₃)₂ + N⁺²O + H₂O</p>
        <p class="paragraph"><b>Шаг 2.</b> Изменяются: Cu (0 → +2) и N (+5 → +2).</p>
        <p class="paragraph"><b>Шаг 3.</b> Схемы:</p>
        <div class="formula-box">Cu⁰ − 2e⁻ → Cu⁺² | × 3</div>
        <div class="formula-box">N⁺⁵ + 3e⁻ → N⁺² | × 2</div>
        <p class="paragraph"><b>Шаг 4.</b> НОК(2,3) = 6. Множители: 3 и 2.</p>
        <p class="paragraph"><b>Шаг 5.</b> Коэффициенты: Cu — 3, HNO₃ — 8, Cu(NO₃)₂ — 3, NO — 2, H₂O — 4.</p>
        <div class="formula-box">3Cu + 8HNO<sub>3</sub> → 3Cu(NO<sub>3</sub>)<sub>2</sub> + 2NO↑ + 4H<sub>2</sub>O</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Типы ОВР</div>
        <ul class="theory-list">
          <li><b>Межмолекулярные</b> — окислитель и восстановитель в разных веществах: 2H₂S + 3O₂ → 2SO₂ + 2H₂O.</li>
          <li><b>Внутримолекулярные</b> — в одном веществе: 2KClO₃ → 2KCl + 3O₂.</li>
          <li><b>Диспропорционирования</b> — один элемент сам окисляется и восстанавливается: Cl₂ + 2NaOH → NaCl + NaClO + H₂O.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Значение ОВР</div>
        <ul class="theory-list">
          <li>Дыхание — окисление органических веществ.</li>
          <li>Фотосинтез — восстановление CO₂.</li>
          <li>Горение топлива.</li>
          <li>Коррозия металлов.</li>
          <li>Металлургия — восстановление металлов.</li>
          <li>Работа аккумуляторов и батарей.</li>
        </ul>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Определите окислитель и восстановитель: Fe + S → FeS.<br>
        <b>Решение:</b> Fe⁰ − 2e⁻ → Fe²⁺ (восстановитель), S⁰ + 2e⁻ → S²⁻ (окислитель).<br><br>
        2. Расставьте коэффициенты методом электронного баланса: Zn + HCl → ZnCl₂ + H₂.<br>
        <b>Решение:</b> Zn⁰ − 2e⁻ → Zn²⁺ | ×1; 2H⁺ + 2e⁻ → H₂⁰ | ×1. Уравнение: Zn + 2HCl → ZnCl₂ + H₂↑.<br><br>
        3. Уравняйте: Al + O₂ → Al₂O₃.<br>
        <b>Решение:</b> Al⁰ − 3e⁻ → Al³⁺ | ×4; O₂⁰ + 4e⁻ → 2O²⁻ | ×3. Уравнение: 4Al + 3O₂ → 2Al₂O₃.
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  }
};
