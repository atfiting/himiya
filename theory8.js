// theory8.js — теория 8 класса (Габриелян, 2025)

var PAGES_8 = {

  /* ============ ГЛАВА 1 ============ */

  'ch8-1-1': {
    title: '§ 1. Предмет химии. Роль химии в жизни человека',
    sub: 'Глава 1. Первоначальные химические понятия',
    html: `
      <div class="definition"><span class="term">Химия</span> — наука о веществах, их свойствах, превращениях и явлениях, которые сопровождают эти превращения.</div>

      <div class="card">
        <div class="card-title"><span class="num">📖</span> Что изучает химия</div>
        <p class="paragraph">Химия — одна из естественных наук. Она изучает:</p>
        <ul class="theory-list">
          <li><b>Вещества</b> — то, из чего состоят физические тела.</li>
          <li><b>Свойства веществ</b> — признаки, по которым одни вещества отличаются от других.</li>
          <li><b>Химические реакции</b> — превращения одних веществ в другие.</li>
        </ul>
        <p class="paragraph">Физическое тело — это любой предмет, который нас окружает: стол, ложка, капля воды. Тело состоит из вещества. Например, ложка — из железа, стол — из дерева.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚛️</span> Основные понятия</div>
        <div class="definition"><span class="term">Атом</span> — мельчайшая химически неделимая частица вещества. Атомы настолько малы, что их нельзя увидеть даже в самый сильный микроскоп.</div>
        <div class="definition"><span class="term">Молекула</span> — мельчайшая частица вещества, обладающая его химическими свойствами. Молекула состоит из атомов.</div>
        <div class="definition"><span class="term">Химический элемент</span> — вид атомов с одинаковым зарядом ядра.</div>
        <div class="note">Пример: молекула воды H₂O состоит из 2 атомов водорода и 1 атома кислорода. При этом водород и кислород — это разные химические элементы.</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Роль химии в жизни человека</div>
        <p class="paragraph">Химия окружает нас повсюду. Без неё невозможно представить:</p>
        <ul class="theory-list">
          <li><b>Медицину</b> — лекарства, вакцины, антисептики.</li>
          <li><b>Сельское хозяйство</b> — удобрения, средства защиты растений.</li>
          <li><b>Промышленность</b> — пластмассы, металлы, топливо, стройматериалы.</li>
          <li><b>Быт</b> — мыло, стиральные порошки, косметика, продукты.</li>
        </ul>
      </div>

      <div class="example-box">
        <div class="lbl">Примеры веществ</div>
        <b>H₂O</b> — вода · <b>O₂</b> — кислород · <b>CO₂</b> — углекислый газ · <b>NaCl</b> — поваренная соль · <b>Fe</b> — железо · <b>Cu</b> — медь.
      </div>

      <div class="task-box">
        <div class="lbl">Проверь себя</div>
        1. Что такое химия?<br>
        2. Чем отличается атом от молекулы?<br>
        3. Что такое химический элемент?<br>
        4. Приведи 3 примера веществ, с которыми ты встречаешься дома.
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-1-2': {
    title: '§ 2. Методы изучения химии',
    sub: 'Глава 1. Первоначальные химические понятия',
    html: `
      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Основные методы</div>
        <div class="definition"><span class="term">Наблюдение</span> — целенаправленное восприятие предметов и явлений с помощью органов чувств.</div>
        <p class="paragraph">Наблюдение бывает качественное (что происходит) и количественное (сколько). Пример: «при горении магния выделяется белое пламя» — качественное; «объём выделившегося газа 2 л» — количественное.</p>

        <div class="definition"><span class="term">Эксперимент</span> — метод познания, при котором явление изучают в специально созданных условиях.</div>
        <p class="paragraph">Эксперимент позволяет проверить гипотезу. Например, предположить, что вещество содержит кислород, и доказать это опытом.</p>

        <div class="definition"><span class="term">Моделирование</span> — метод познания, при котором изучают не сам объект, а его модель. Модели бывают материальные (шар-модель атома) и знаковые (формулы, схемы).</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚠️</span> Правила безопасности в лаборатории</div>
        <ul class="theory-list">
          <li>Работать в халате, при необходимости — в перчатках и очках.</li>
          <li>Не пробовать вещества на вкус. Нюхать осторожно: направляя пары рукой к себе.</li>
          <li>Не наклоняться над сосудом с кипящей жидкостью.</li>
          <li>При попадании кислоты или щелочи на кожу — сразу смыть большим количеством воды.</li>
          <li>Тушить огонь песком, одеялом или огнетушителем. Не водой, если горит масло.</li>
          <li>Нельзя уносить реактивы домой.</li>
        </ul>
      </div>

      <div class="example-box">
        <div class="lbl">Пример эксперимента</div>
        Взаимодействие соды с уксусом. В стакан с содой приливают уксус — появляются пузырьки. Это выделяется углекислый газ CO₂.
      </div>

      <div class="task-box"><div class="lbl">Проверь себя</div>1. Назови основные методы изучения химии.<br>2. Перечисли 4 правила безопасности в лаборатории.</div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-1-3': {
    title: '§ 3. Агрегатные состояния веществ',
    sub: 'Глава 1. Первоначальные химические понятия',
    html: `
      <div class="paragraph">Одно и то же вещество может находиться в трёх агрегатных состояниях — в зависимости от температуры и давления. При изменении условий состояние вещества меняется, но состав остаётся неизменным.</div>

      <div class="card">
        <div class="card-title"><span class="num">❄️</span> Твёрдое состояние</div>
        <p class="paragraph">Сохраняет форму и объём. Частицы расположены упорядоченно, в узлах кристаллической решётки. Расстояния между частицами сравнимы с их размером.</p>
        <div class="note">Примеры: лёд, поваренная соль, железо, сера.</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">💧</span> Жидкое состояние</div>
        <p class="paragraph">Сохраняет объём, но не форму. Принимает форму сосуда. Частицы расположены близко, но беспорядочно.</p>
        <div class="note">Примеры: вода, спирт, ртуть, бензин.</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">💨</span> Газообразное состояние</div>
        <p class="paragraph">Не сохраняет ни форму, ни объём. Занимает весь предоставленный объём. Расстояния между частицами во много раз больше самих частиц.</p>
        <div class="note">Примеры: кислород O₂, углекислый газ CO₂, азот N₂, водород H₂.</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔄</span> Переходы между состояниями</div>
        <ul class="theory-list">
          <li><b>Плавление</b> — твёрдое → жидкое.</li>
          <li><b>Кристаллизация (отвердевание)</b> — жидкое → твёрдое.</li>
          <li><b>Парообразование</b> — жидкое → газообразное.</li>
          <li><b>Конденсация</b> — газообразное → жидкое.</li>
          <li><b>Сублимация (возгонка)</b> — твёрдое → газообразное, минуя жидкое.</li>
        </ul>
      </div>

      <div class="example-box"><div class="lbl">Пример</div>При 0 °C вода замерзает (жидкое → твёрдое). При 100 °C вода кипит (жидкое → газообразное).</div>

      <div class="task-box"><div class="lbl">Проверь себя</div>1. Назови три агрегатных состояния.<br>2. Как называется переход из жидкого в твёрдое состояние?</div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-1-4': {
    title: '§ 4. Физические явления — основа разделения смесей',
    sub: 'Глава 1. Первоначальные химические понятия',
    html: `
      <div class="definition"><span class="term">Физические явления</span> — явления, при которых изменяются агрегатное состояние, форма или размеры тела, но состав вещества остаётся неизменным.</div>

      <div class="card">
        <div class="card-title"><span class="num">📌</span> Примеры физических явлений</div>
        <ul class="theory-list">
          <li>Плавление льда</li>
          <li>Испарение воды</li>
          <li>Растворение сахара в воде</li>
          <li>Измельчение мела</li>
          <li>Притягивание железа магнитом</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Чистые вещества и смеси</div>
        <div class="definition"><span class="term">Чистое вещество</span> — вещество, состоящее из частиц одного вида.</div>
        <div class="definition"><span class="term">Смесь</span> — сочетание нескольких веществ, которые сохраняют свои свойства.</div>
        <p class="paragraph">Смеси бывают:</p>
        <ul class="theory-list">
          <li><b>Однородные (гомогенные)</b> — частицы нельзя различить (раствор соли, воздуха).</li>
          <li><b>Неоднородные (гетерогенные)</b> — частицы видны (вода + песок, молоко).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔧</span> Способы разделения смесей</div>
        <ul class="theory-list">
          <li><b>Отстаивание</b> — для разделения нерастворимых веществ (например, вода и песок).</li>
          <li><b>Фильтрование</b> — отделение жидкости от нерастворимого твёрдого вещества через фильтр.</li>
          <li><b>Выпаривание</b> — выделение растворённого вещества из раствора (соль из солёной воды).</li>
          <li><b>Дистилляция (перегонка)</b> — разделение жидкостей с разной температурой кипения.</li>
          <li><b>Магнит</b> — отделение железных опилок от других веществ.</li>
          <li><b>Хроматография</b> — разделение веществ по скорости движения в среде.</li>
        </ul>
      </div>

      <div class="example-box"><div class="lbl">Пример</div>Разделение смеси воды и речного песка: сначала отстаиваем — песок опускается на дно. Потом фильтруем — песок остаётся на фильтре, чистая вода проходит.</div>

      <div class="task-box"><div class="lbl">Проверь себя</div>1. Чем смесь отличается от чистого вещества?<br>2. Как разделить смесь воды и соли?</div>

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
          <li>Атомы одного вида одинаковы, а разных видов — различны.</li>
          <li>При химических реакциях атомы не исчезают и не появляются, а только перегруппировываются.</li>
          <li>Молекулы находятся в непрерывном движении.</li>
          <li>Между молекулами есть промежутки.</li>
        </ol>
      </div>

      <div class="definition"><span class="term">Химический элемент</span> — вид атомов с одинаковым зарядом ядра.</div>

      <div class="card">
        <div class="card-title"><span class="num">🌐</span> Простые и сложные вещества</div>
        <div class="definition"><span class="term">Простое вещество</span> — состоит из атомов одного химического элемента.</div>
        <p class="paragraph">Примеры: O₂, H₂, N₂, Fe, S, Cu.</p>
        <div class="definition"><span class="term">Сложное вещество</span> — состоит из атомов разных химических элементов.</div>
        <p class="paragraph">Примеры: H₂O, CO₂, NaCl, H₂SO₄.</p>
      </div>

      <div class="note">Важно: понятия «химический элемент» и «простое вещество» — разные. Элемент — это вид атомов, а простое вещество — форма его существования.</div>

      <div class="example-box"><div class="lbl">Пример</div>Кислород O₂ — простое вещество. Вода H₂O — сложное. И в том, и в другом есть элемент «кислород».</div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-1-6': {
    title: '§ 6. Знаки химических элементов',
    sub: 'Глава 1. Первоначальные химические понятия',
    html: `
      <div class="paragraph">Каждый химический элемент имеет свой символ — знак. Он состоит из одной или двух букв латинского названия элемента.</div>

      <div class="card">
        <div class="card-title"><span class="num">🔤</span> Примеры знаков</div>
        <div class="table-wrap"><table>
          <tr><th>Знак</th><th>Русское название</th><th>Латинское название</th><th>Произношение</th></tr>
          <tr><td>H</td><td>Водород</td><td>Hydrogenium</td><td>аш</td></tr>
          <tr><td>O</td><td>Кислород</td><td>Oxygenium</td><td>о</td></tr>
          <tr><td>C</td><td>Углерод</td><td>Carboneum</td><td>цэ</td></tr>
          <tr><td>N</td><td>Азот</td><td>Nitrogenium</td><td>эн</td></tr>
          <tr><td>S</td><td>Сера</td><td>Sulfur</td><td>эс</td></tr>
          <tr><td>Fe</td><td>Железо</td><td>Ferrum</td><td>феррум</td></tr>
          <tr><td>Au</td><td>Золото</td><td>Aurum</td><td>аурум</td></tr>
          <tr><td>Na</td><td>Натрий</td><td>Natrium</td><td>натрий</td></tr>
          <tr><td>Cu</td><td>Медь</td><td>Cuprum</td><td>купрум</td></tr>
          <tr><td>Ag</td><td>Серебро</td><td>Argentum</td><td>аргентум</td></tr>
          <tr><td>Hg</td><td>Ртуть</td><td>Hydrargyrum</td><td>гидраргирум</td></tr>
          <tr><td>Pb</td><td>Свинец</td><td>Plumbum</td><td>плюмбум</td></tr>
        </table></div>
      </div>

      <div class="note">Большинство названий элементов — латинские. Поэтому в знаках используются именно латинские буквы.</div>

      <div class="task-box"><div class="lbl">Проверь себя</div>1. Что такое химический знак?<br>2. Что означают знаки: Fe, Cu, Ag, Au?</div>

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
          <li><b>Периоды</b> — горизонтальные ряды. Всего 7 периодов (3 малых, 4 больших).</li>
          <li><b>Группы</b> — вертикальные столбцы. Всего 8 групп, каждая делится на A (главную) и B (побочную) подгруппы.</li>
          <li><b>Порядковый номер</b> элемента = заряд ядра = число протонов = число электронов.</li>
          <li><b>Номер периода</b> = число энергетических уровней.</li>
          <li><b>Номер группы (для A)</b> = число электронов на внешнем уровне.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔢</span> Что можно узнать по таблице</div>
        <p class="paragraph">Зная положение элемента в таблице, можно определить:</p>
        <ul class="theory-list">
          <li>Заряд ядра и число электронов.</li>
          <li>Число энергетических уровней.</li>
          <li>Строение внешнего уровня.</li>
          <li>Металл это или неметалл.</li>
          <li>Формулу высшего оксида и гидроксида.</li>
        </ul>
      </div>

      <div class="example-box">
        <div class="lbl">Пример разбора</div>
        <b>Натрий Na</b>: порядковый номер 11 → заряд ядра +11, 11 электронов. 3-й период → 3 уровня. I-A группа → 1 электрон на внешнем уровне. Металл.
      </div>

      <div class="task-box"><div class="lbl">Проверь себя</div>1. Что такое период и группа?<br>2. Что можно узнать по порядковому номеру?</div>

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
        <p class="paragraph"><b>Индекс</b> (маленькая цифра снизу справа) показывает число атомов данного элемента в молекуле.</p>
        <div class="formula-box">H<sub>2</sub>O — 2 атома водорода и 1 атом кислорода</div>
        <div class="formula-box">H<sub>2</sub>SO<sub>4</sub> — 2 H + 1 S + 4 O</div>
        <div class="formula-box">Ca(OH)<sub>2</sub> — 1 Ca + 2 O + 2 H</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚖️</span> Относительная атомная масса (Ar)</div>
        <p class="paragraph">Показывает, во сколько раз масса атома больше 1/12 массы атома углерода. Значения Ar даны в таблице Менделеева.</p>
        <p class="paragraph">Примеры: Ar(H) = 1, Ar(O) = 16, Ar(C) = 12, Ar(Na) = 23, Ar(Fe) = 56.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📐</span> Относительная молекулярная масса (Mr)</div>
        <p class="paragraph">Mr = сумма относительных атомных масс всех атомов в молекуле.</p>
        <div class="formula-box">Mr(H<sub>2</sub>O) = 2·1 + 16 = <span class="eq">18</span></div>
        <div class="formula-box">Mr(H<sub>2</sub>SO<sub>4</sub>) = 2·1 + 32 + 4·16 = <span class="eq">98</span></div>
        <div class="formula-box">Mr(Ca(OH)<sub>2</sub>) = 40 + 2·(16+1) = <span class="eq">74</span></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📏</span> Массовая доля элемента</div>
        <p class="paragraph">ω(элемента) = Ar · n / Mr, где n — число атомов этого элемента.</p>
        <div class="formula-box">ω(H) в H<sub>2</sub>O = 2·1 / 18 = <span class="eq">0,111 (11,1%)</span></div>
        <div class="formula-box">ω(O) в H<sub>2</sub>O = 16 / 18 = <span class="eq">0,889 (88,9%)</span></div>
      </div>

      <div class="task-box">
        <div class="lbl">Задача</div>
        Найдите Mr(CO₂) и массовую долю углерода в нём.<br>
        <b>Решение:</b> Mr(CO₂) = 12 + 2·16 = 44. ω(C) = 12/44 = 0,273 (27,3%).
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-1-9': {
    title: '§ 9. Валентность',
    sub: 'Глава 1. Первоначальные химические понятия',
    html: `
      <div class="definition"><span class="term">Валентность</span> — свойство атома химического элемента присоединять или замещать определённое число атомов другого элемента. Обозначается римскими цифрами I, II, III, IV, V.</div>

      <div class="card">
        <div class="card-title"><span class="num">📌</span> Элементы с постоянной валентностью</div>
        <div class="table-wrap"><table>
          <tr><th>Валентность</th><th>Элементы</th></tr>
          <tr><td>I</td><td>H, Na, K, Li, F, Ag, Cl (в HCl)</td></tr>
          <tr><td>II</td><td>O, Mg, Ca, Ba, Zn, Be</td></tr>
          <tr><td>III</td><td>Al, B</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🎯</span> Элементы с переменной валентностью</div>
        <div class="table-wrap"><table>
          <tr><th>Элемент</th><th>Валентности</th><th>Примеры</th></tr>
          <tr><td>Fe</td><td>II, III</td><td>FeO, Fe₂O₃</td></tr>
          <tr><td>Cu</td><td>I, II</td><td>Cu₂O, CuO</td></tr>
          <tr><td>S</td><td>II, IV, VI</td><td>H₂S, SO₂, SO₃</td></tr>
          <tr><td>N</td><td>I, II, III, IV, V</td><td>N₂O, NO, N₂O₃, NO₂, N₂O₅</td></tr>
          <tr><td>P</td><td>III, V</td><td>PH₃, P₂O₅</td></tr>
          <tr><td>Mn</td><td>II, IV, VI, VII</td><td>MnO, MnO₂, MnO₃, Mn₂O₇</td></tr>
        </table></div>
        <p class="paragraph">Если валентность переменная, её указывают в скобках после названия: Fe(II)O, Fe(III)₂O₃.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔍</span> Как определить валентность по формуле</div>
        <p class="paragraph">Если известна валентность одного из двух элементов, валентность второго находят через <b>наименьшее общее кратное (НОК)</b>:</p>
        <ol class="theory-list num">
          <li>Находят НОК валентностей.</li>
          <li>НОК делят на валентность известного элемента — получают индекс другого.</li>
          <li>НОК делят на индекс — получают валентность.</li>
        </ol>
        <div class="formula-box">Al<sub>2</sub>O<sub>3</sub> → O(II) → НОК(2,3)=6 → Al = 6:2 = <span class="eq">III</span></div>
        <div class="formula-box">Cu<sub>2</sub>O → O(II) → НОК(2,1)=2 → Cu = 2:1 = <span class="eq">I</span></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">✏️</span> Составление формулы по валентности</div>
        <p class="paragraph">Алгоритм:</p>
        <ol class="theory-list num">
          <li>Записать символы элементов.</li>
          <li>Над ними написать валентности.</li>
          <li>Найти НОК.</li>
          <li>Разделить НОК на валентности — получить индексы.</li>
        </ol>
        <div class="formula-box">Оксид серы(VI): S<sup>VI</sup>O<sup>II</sup> → НОК=6 → S: 6:6=1, O: 6:2=3 → <span class="eq">SO₃</span></div>
      </div>

      <div class="task-box">
        <div class="lbl">Задачи</div>
        1. Определите валентность железа в Fe₂O₃.<br>
        <b>Решение:</b> O(II), НОК(2,3)=6, Fe = 6:2 = III.<br><br>
        2. Составьте формулу оксида фосфора(V).<br>
        <b>Решение:</b> P(V) O(II), НОК=10, P=2, O=5 → <b>P₂O₅</b>.
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
          <li><b>Изменение цвета</b> — например, потемнение серебра.</li>
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
        <p class="paragraph">При физических явлениях состав вещества не меняется. При химических — из одних веществ образуются новые.</p>
      </div>

      <div class="example-box"><div class="lbl">Пример</div>Горение магния: <b>2Mg + O₂ → 2MgO</b>. Яркое белое пламя, образование белого порошка — это химическая реакция.</div>

      <div class="task-box"><div class="lbl">Проверь себя</div>1. Назови 5 признаков химических реакций.<br>2. Чем химическое явление отличается от физического?</div>

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
        <div class="card-title"><span class="num">✏️</span> Как составлять уравнения</div>
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
        <div class="lbl">Задача</div>
        Уравняйте: Fe + O₂ → Fe₂O₃.<br>
        <b>Решение:</b> 4Fe + 3O₂ → 2Fe₂O₃.
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
      </div>

      <div class="card">
        <div class="card-title"><span class="num">2️⃣</span> Реакция разложения</div>
        <p class="paragraph">Из одного сложного вещества образуется несколько новых веществ.</p>
        <div class="formula-box">AB → A + B</div>
        <div class="formula-box">2H<sub>2</sub>O → 2H<sub>2</sub> + O<sub>2</sub></div>
        <div class="formula-box">CaCO<sub>3</sub> → CaO + CO<sub>2</sub></div>
        <div class="formula-box">2KMnO<sub>4</sub> → K<sub>2</sub>MnO<sub>4</sub> + MnO<sub>2</sub> + O<sub>2</sub></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">3️⃣</span> Реакция замещения</div>
        <p class="paragraph">Простое вещество замещает атом одного элемента в сложном веществе.</p>
        <div class="formula-box">A + BC → AC + B</div>
        <div class="formula-box">Fe + CuSO<sub>4</sub> → FeSO<sub>4</sub> + Cu</div>
        <div class="formula-box">Zn + 2HCl → ZnCl<sub>2</sub> + H<sub>2</sub></div>
        <div class="formula-box">2Na + 2H<sub>2</sub>O → 2NaOH + H<sub>2</sub></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">4️⃣</span> Реакция обмена</div>
        <p class="paragraph">Два сложных вещества обмениваются своими составными частями.</p>
        <div class="formula-box">AB + CD → AD + CB</div>
        <div class="formula-box">NaOH + HCl → NaCl + H<sub>2</sub>O</div>
        <div class="formula-box">AgNO<sub>3</sub> + NaCl → AgCl↓ + NaNO<sub>3</sub></div>
        <div class="formula-box">BaCl<sub>2</sub> + H<sub>2</sub>SO<sub>4</sub> → BaSO<sub>4</sub>↓ + 2HCl</div>
      </div>

      <div class="task-box">
        <div class="lbl">Задача</div>
        Определите тип реакции: 2H₂O → 2H₂ + O₂.<br>
        <b>Решение:</b> Из одного вещества образуется два → это реакция разложения.
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  /* ============ ГЛАВА 2 ============ */

  'ch8-2-1': {
    title: '§ 1. Воздух и его состав',
    sub: 'Глава 2. Кислород. Водород. Вода. Растворы',
    html: `
      <div class="paragraph">Воздух — это смесь газов. Он не имеет цвета, вкуса и запаха.</div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Состав воздуха (по объёму)</div>
        <div class="table-wrap"><table>
          <tr><th>Газ</th><th>Формула</th><th>Объёмная доля</th></tr>
          <tr><td>Азот</td><td>N₂</td><td>78%</td></tr>
          <tr><td>Кислород</td><td>O₂</td><td>21%</td></tr>
          <tr><td>Благородные газы</td><td>Ar, Ne, He и др.</td><td>0,94%</td></tr>
          <tr><td>Углекислый газ</td><td>CO₂</td><td>0,03%</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">💨</span> Значение воздуха</div>
        <ul class="theory-list">
          <li>Необходим для дыхания живых организмов.</li>
          <li>Необходим для горения топлива.</li>
          <li>Участвует в процессах окисления и гниения.</li>
          <li>Переносит пыльцу, семена растений.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚠️</span> Охрана воздуха</div>
        <p class="paragraph">Воздух загрязняется выбросами заводов, выхлопными газами автомобилей, продуктами горения. Меры защиты: очистные сооружения, фильтры, переход на экологичное топливо.</p>
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
        <div class="card-title"><span class="num">🔬</span> Получение в лаборатории</div>
        <ul class="theory-list">
          <li>Разложение перманганата калия: 2KMnO<sub>4</sub> → K<sub>2</sub>MnO<sub>4</sub> + MnO<sub>2</sub> + O<sub>2</sub></li>
          <li>Разложение пероксида водорода (с катализатором MnO₂): 2H<sub>2</sub>O<sub>2</sub> → 2H<sub>2</sub>O + O<sub>2</sub></li>
          <li>Разложение бертолетовой соли: 2KClO<sub>3</sub> → 2KCl + 3O<sub>2</sub></li>
          <li>Электролиз воды: 2H<sub>2</sub>O → 2H<sub>2</sub> + O<sub>2</sub></li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🏭</span> В промышленности</div>
        <p class="paragraph">Из жидкого воздуха методом перегонки. Сначала испаряется азот (t кип. −196 °C), кислород остаётся (t кип. −183 °C).</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔥</span> Химические свойства</div>
        <p class="paragraph">Кислород — сильный окислитель. Реагирует со многими веществами, часто с выделением теплоты и света (горение).</p>
        <div class="formula-box">S + O<sub>2</sub> → SO<sub>2</sub></div>
        <div class="formula-box">4P + 5O<sub>2</sub> → 2P<sub>2</sub>O<sub>5</sub></div>
        <div class="formula-box">3Fe + 2O<sub>2</sub> → Fe<sub>3</sub>O<sub>4</sub></div>
        <div class="formula-box">CH<sub>4</sub> + 2O<sub>2</sub> → CO<sub>2</sub> + 2H<sub>2</sub>O</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Применение</div>
        <ul class="theory-list">
          <li>В медицине — для кислородных подушек.</li>
          <li>В металлургии — для выплавки стали.</li>
          <li>В авиации и космонавтике — как окислитель топлива.</li>
          <li>Для резки и сварки металлов.</li>
        </ul>
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
          <tr><td>CO₂</td><td>Оксид углерода(IV)</td><td>Кислотный</td></tr>
          <tr><td>SO₃</td><td>Оксид серы(VI)</td><td>Кислотный</td></tr>
          <tr><td>Al₂O₃</td><td>Оксид алюминия</td><td>Амфотерный</td></tr>
          <tr><td>ZnO</td><td>Оксид цинка</td><td>Амфотерный</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Классификация</div>
        <ul class="theory-list">
          <li><b>Основные</b> — оксиды металлов I, II валентности (кроме Be, Zn): Na₂O, CaO, CuO.</li>
          <li><b>Кислотные</b> — оксиды неметаллов и некоторых металлов высшей валентности: CO₂, SO₃, Mn₂O₇.</li>
          <li><b>Амфотерные</b> — проявляют и основные, и кислотные свойства: Al₂O₃, ZnO, BeO.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌫️</span> Физические свойства</div>
        <p class="paragraph">Оксиды бывают газообразные (CO₂, SO₂), жидкие (H₂O), твёрдые (CaO, Fe₂O₃).</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства</div>
        <p class="paragraph">Основные оксиды реагируют с кислотами и кислотными оксидами:</p>
        <div class="formula-box">CaO + 2HCl → CaCl<sub>2</sub> + H<sub>2</sub>O</div>
        <div class="formula-box">CaO + CO<sub>2</sub> → CaCO<sub>3</sub></div>
        <p class="paragraph">Кислотные оксиды реагируют с основаниями и основными оксидами:</p>
        <div class="formula-box">CO<sub>2</sub> + 2NaOH → Na<sub>2</sub>CO<sub>3</sub> + H<sub>2</sub>O</div>
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
        <div class="card-title"><span class="num">🔬</span> Получение</div>
        <p class="paragraph">В лаборатории:</p>
        <div class="formula-box">Zn + 2HCl → ZnCl<sub>2</sub> + H<sub>2</sub>↑</div>
        <div class="formula-box">Fe + H<sub>2</sub>SO<sub>4</sub> → FeSO<sub>4</sub> + H<sub>2</sub>↑</div>
        <p class="paragraph">В промышленности: электролиз воды, конверсия метана.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔥</span> Химические свойства</div>
        <p class="paragraph">Водород — восстановитель. Реагирует с:</p>
        <ul class="theory-list">
          <li><b>Кислородом</b> (с образованием воды): 2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</li>
          <li><b>Хлором</b>: H<sub>2</sub> + Cl<sub>2</sub> → 2HCl</li>
          <li><b>Оксидами металлов</b>: CuO + H<sub>2</sub> → Cu + H<sub>2</sub>O</li>
          <li><b>Металлами</b> (с образованием гидридов): 2Na + H<sub>2</sub> → 2NaH</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚠️</span> Техника безопасности</div>
        <p class="paragraph">Смесь водорода с кислородом (или воздухом) взрывоопасна — «гремучий газ». Перед поджиганием водорода необходимо проверить его на чистоту.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🚀</span> Применение</div>
        <ul class="theory-list">
          <li>Как ракетное топливо.</li>
          <li>Для получения аммиака и HCl.</li>
          <li>Для восстановления металлов из оксидов.</li>
          <li>В топливных элементах.</li>
        </ul>
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
        <div class="card-title"><span class="num">📋</span> Примеры кислот</div>
        <div class="table-wrap"><table>
          <tr><th>Формула</th><th>Название</th><th>Кислотный остаток</th></tr>
          <tr><td>HCl</td><td>Соляная (хлороводородная)</td><td>Cl⁻ (хлорид)</td></tr>
          <tr><td>H₂SO₄</td><td>Серная</td><td>SO₄²⁻ (сульфат)</td></tr>
          <tr><td>HNO₃</td><td>Азотная</td><td>NO₃⁻ (нитрат)</td></tr>
          <tr><td>H₃PO₄</td><td>Фосфорная</td><td>PO₄³⁻ (фосфат)</td></tr>
          <tr><td>H₂CO₃</td><td>Угольная</td><td>CO₃²⁻ (карбонат)</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Классификация</div>
        <p class="paragraph"><b>По числу атомов H:</b></p>
        <ul class="theory-list">
          <li>Одноосновные: HCl, HNO₃</li>
          <li>Двухосновные: H₂SO₄, H₂S</li>
          <li>Трёхосновные: H₃PO₄</li>
        </ul>
        <p class="paragraph"><b>По наличию кислорода:</b></p>
        <ul class="theory-list">
          <li>Кислородсодержащие: H₂SO₄, HNO₃</li>
          <li>Бескислородные: HCl, HBr, H₂S</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства</div>
        <p class="paragraph">Кислоты изменяют цвет индикаторов (лакмус — красный, метилоранж — розовый). Реагируют с:</p>
        <ul class="theory-list">
          <li><b>Металлами</b> (до H в ряду активности): Zn + 2HCl → ZnCl₂ + H₂↑</li>
          <li><b>Оксидами металлов</b>: CuO + H₂SO₄ → CuSO₄ + H₂O</li>
          <li><b>Основаниями</b> (реакция нейтрализации): NaOH + HCl → NaCl + H₂O</li>
          <li><b>Солями</b>: BaCl₂ + H₂SO₄ → BaSO₄↓ + 2HCl</li>
        </ul>
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
          <tr><th>Формула</th><th>Название</th></tr>
          <tr><td>NaCl</td><td>Хлорид натрия</td></tr>
          <tr><td>K₂SO₄</td><td>Сульфат калия</td></tr>
          <tr><td>CaCO₃</td><td>Карбонат кальция</td></tr>
          <tr><td>Fe(NO₃)₃</td><td>Нитрат железа(III)</td></tr>
          <tr><td>NaHCO₃</td><td>Гидрокарбонат натрия</td></tr>
          <tr><td>Cu(OH)Cl</td><td>Гидроксохлорид меди</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Классификация</div>
        <ul class="theory-list">
          <li><b>Средние</b> — все атомы H кислоты замещены на металл: NaCl, K₂SO₄.</li>
          <li><b>Кислые</b> — замещены не все атомы H: NaHCO₃, KH₂PO₄.</li>
          <li><b>Основные</b> — не все OH⁻ основания замещены: Cu(OH)Cl.</li>
          <li><b>Двойные</b> — два разных металла и один кислотный остаток: KAl(SO₄)₂.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства</div>
        <ul class="theory-list">
          <li><b>С металлами:</b> Fe + CuSO₄ → FeSO₄ + Cu</li>
          <li><b>С кислотами:</b> CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑</li>
          <li><b>С основаниями:</b> CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄</li>
          <li><b>С другими солями:</b> AgNO₃ + NaCl → AgCl↓ + NaNO₃</li>
        </ul>
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
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📐</span> Формулы</div>
        <div class="formula-box">n = m / M <span class="eq">(количество вещества)</span></div>
        <div class="formula-box">n = N / N<sub>A</sub> <span class="eq">(число частиц)</span></div>
        <div class="formula-box">M = Mr г/моль <span class="eq">(молярная масса)</span></div>
        <p class="paragraph">где n — количество вещества (моль), m — масса (г), M — молярная масса (г/моль), N — число частиц.</p>
      </div>

      <div class="example-box">
        <div class="lbl">Пример</div>
        Сколько молей в 36 г воды?<br>
        <b>Решение:</b> M(H₂O) = 18 г/моль. n = m/M = 36/18 = 2 моль.
      </div>

      <div class="task-box">
        <div class="lbl">Задача</div>
        Найдите массу 3 моль CO₂.<br>
        <b>Решение:</b> M(CO₂) = 44 г/моль. m = n·M = 3·44 = 132 г.
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
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📐</span> Формулы</div>
        <div class="formula-box">V = n · V<sub>m</sub> = n · 22,4</div>
        <div class="formula-box">n = V / 22,4</div>
        <p class="paragraph">где V — объём газа (л), n — количество вещества (моль).</p>
      </div>

      <div class="example-box">
        <div class="lbl">Пример</div>
        Какой объём занимают 2 моль кислорода при н. у.?<br>
        <b>Решение:</b> V = 2 · 22,4 = 44,8 л.
      </div>

      <div class="task-box">
        <div class="lbl">Задача</div>
        Найдите объём 8 г кислорода O₂ при н. у.<br>
        <b>Решение:</b> M(O₂) = 32 г/моль. n = 8/32 = 0,25 моль. V = 0,25·22,4 = 5,6 л.
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
          <li>Над формулами — массы (или объёмы) по уравнению (количество моль × молярную массу).</li>
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

      <div class="example-box">
        <div class="lbl">Пример</div>
        Сколько граммов воды образуется при сгорании 4 г водорода?<br>
        <b>Решение:</b><br>
        2H₂ + O₂ → 2H₂O<br>
        n(H₂) = 4/2 = 2 моль<br>
        По уравнению: 2 моль H₂ → 2 моль H₂O<br>
        m(H₂O) = 2 · 18 = 36 г<br>
        <b>Ответ:</b> 36 г.
      </div>

      <div class="task-box">
        <div class="lbl">Задача для тренировки</div>
        Какой объём CO₂ (н. у.) выделится при разложении 50 г CaCO₃?<br>
        <b>Решение:</b> CaCO₃ → CaO + CO₂. n(CaCO₃) = 50/100 = 0,5 моль. n(CO₂) = 0,5 моль. V = 0,5 · 22,4 = 11,2 л.
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
          <li>t плавления = 0 °C, t кипения = 100 °C.</li>
          <li>Плотность 1 г/см³.</li>
          <li>Плохой проводник электричества (но хороший — растворы солей).</li>
          <li>Максимальная плотность при 4 °C.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства воды</div>
        <ul class="theory-list">
          <li>С активными металлами: 2Na + 2H₂O → 2NaOH + H₂↑</li>
          <li>С оксидами металлов: CaO + H₂O → Ca(OH)₂</li>
          <li>С оксидами неметаллов: CO₂ + H₂O → H₂CO₃</li>
          <li>Разложение: 2H₂O → 2H₂ + O₂ (электролиз)</li>
        </ul>
      </div>

      <div class="definition"><span class="term">Основания</span> — сложные вещества, состоящие из атомов металла и гидроксогрупп OH.</div>

      <div class="card">
        <div class="card-title"><span class="num">📋</span> Примеры оснований</div>
        <div class="table-wrap"><table>
          <tr><th>Формула</th><th>Название</th><th>Растворимость</th></tr>
          <tr><td>NaOH</td><td>Гидроксид натрия</td><td>Растворим (щёлочь)</td></tr>
          <tr><td>KOH</td><td>Гидроксид калия</td><td>Растворим (щёлочь)</td></tr>
          <tr><td>Ca(OH)₂</td><td>Гидроксид кальция</td><td>Малорастворим</td></tr>
          <tr><td>Cu(OH)₂</td><td>Гидроксид меди(II)</td><td>Нерастворим</td></tr>
          <tr><td>Fe(OH)₃</td><td>Гидроксид железа(III)</td><td>Нерастворим</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства оснований</div>
        <ul class="theory-list">
          <li>Реагируют с кислотами: NaOH + HCl → NaCl + H₂O (реакция нейтрализации).</li>
          <li>Реагируют с кислотными оксидами: 2NaOH + CO₂ → Na₂CO₃ + H₂O.</li>
          <li>Реагируют с солями: 2NaOH + CuSO₄ → Cu(OH)₂↓ + Na₂SO₄.</li>
          <li>Нерастворимые основания при нагревании разлагаются: Cu(OH)₂ → CuO + H₂O.</li>
        </ul>
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
        <div class="card-title"><span class="num">💧</span> Виды растворов</div>
        <ul class="theory-list">
          <li><b>Ненасыщенный</b> — при данной температуре можно растворить ещё вещество.</li>
          <li><b>Насыщенный</b> — при данной температуре вещество больше не растворяется.</li>
          <li><b>Перенасыщенный</b> — содержит больше вещества, чем может раствориться (неустойчив).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📐</span> Массовая доля растворённого вещества</div>
        <div class="formula-box">ω = m(в-ва) / m(раствора) · 100%</div>
        <p class="paragraph">где m(раствора) = m(в-ва) + m(растворителя).</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🧪</span> Пример задачи</div>
        <p class="paragraph">В 200 г воды растворили 20 г соли. Найдите массовую долю соли.</p>
        <p class="paragraph"><b>Решение:</b> m(раствора) = 200 + 20 = 220 г.</p>
        <p class="paragraph">ω = 20/220 · 100% = <b>9,1%</b>.</p>
      </div>

      <div class="task-box">
        <div class="lbl">Задача</div>
        Сколько соли нужно взять, чтобы приготовить 500 г раствора с массовой долей 10%?<br>
        <b>Решение:</b> m(соли) = 500 · 0,10 = 50 г. Воды = 500 − 50 = 450 г.
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  /* ============ ГЛАВА 3 ============ */

  'ch8-3-1': {
    title: '§ 1. Оксиды: классификация и химические свойства',
    sub: 'Глава 3. Классы неорганических соединений',
    html: `
      <div class="definition"><span class="term">Оксиды</span> — сложные вещества, состоящие из двух элементов, один из которых кислород (степень окисления −2).</div>

      <div class="card">
        <div class="card-title"><span class="num">📋</span> Классификация</div>
        <ul class="theory-list">
          <li><b>Несолеобразующие</b> — не образуют солей: CO, N₂O, NO, H₂O.</li>
          <li><b>Солеобразующие</b> — образуют соли:
            <ul style="list-style:none;padding-left:20px;margin-top:6px">
              <li>• Основные: Na₂O, CaO, FeO, CuO</li>
              <li>• Кислотные: CO₂, SO₃, P₂O₅, Mn₂O₇</li>
              <li>• Амфотерные: Al₂O₃, ZnO, BeO, Cr₂O₃</li>
            </ul>
          </li>
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
        </ul>
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
        <div class="card-title"><span class="num">🔷</span> Классификация</div>
        <ul class="theory-list">
          <li><b>Растворимые (щёлочи)</b> — NaOH, KOH, LiOH, Ca(OH)₂, Ba(OH)₂.</li>
          <li><b>Нерастворимые</b> — Cu(OH)₂, Fe(OH)₃, Mg(OH)₂, Al(OH)₃, Zn(OH)₂.</li>
          <li><b>Амфотерные</b> — Al(OH)₃, Zn(OH)₂, Be(OH)₂.</li>
        </ul>
        <p class="paragraph"><b>По числу OH-групп:</b> однокислотные (NaOH), двухкислотные (Ca(OH)₂), трёхкислотные (Fe(OH)₃).</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства щелочей</div>
        <ul class="theory-list">
          <li>Изменяют цвет индикаторов (лакмус — синий, фенолфталеин — малиновый).</li>
          <li>+ кислота → соль + H₂O: NaOH + HCl → NaCl + H₂O</li>
          <li>+ кислотный оксид → соль + H₂O: 2NaOH + CO₂ → Na₂CO₃ + H₂O</li>
          <li>+ соль → новое основание + новая соль: 2NaOH + CuSO₄ → Cu(OH)₂↓ + Na₂SO₄</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства нерастворимых оснований</div>
        <ul class="theory-list">
          <li>+ кислота → соль + H₂O: Cu(OH)₂ + 2HCl → CuCl₂ + 2H₂O</li>
          <li>Разлагаются при нагревании: Cu(OH)₂ → CuO + H₂O</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Получение</div>
        <ul class="theory-list">
          <li>Активный металл + вода: 2Na + 2H₂O → 2NaOH + H₂↑</li>
          <li>Основный оксид + вода: CaO + H₂O → Ca(OH)₂</li>
          <li>Соль + щёлочь: CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄</li>
        </ul>
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
        <div class="card-title"><span class="num">🔷</span> Классификация</div>
        <p class="paragraph"><b>По числу атомов H:</b> одноосновные (HCl), двухосновные (H₂SO₄), трёхосновные (H₃PO₄).</p>
        <p class="paragraph"><b>По наличию кислорода:</b> кислородсодержащие (H₂SO₄, HNO₃), бескислородные (HCl, H₂S).</p>
        <p class="paragraph"><b>По силе:</b> сильные (HCl, H₂SO₄, HNO₃), слабые (H₂CO₃, H₂S, H₂SiO₃).</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства</div>
        <ul class="theory-list">
          <li>Изменяют цвет индикаторов (лакмус — красный).</li>
          <li>+ металл (до H в ряду активности) → соль + H₂: Zn + 2HCl → ZnCl₂ + H₂↑</li>
          <li>+ основный оксид → соль + H₂O: CuO + H₂SO₄ → CuSO₄ + H₂O</li>
          <li>+ основание → соль + H₂O: NaOH + HCl → NaCl + H₂O</li>
          <li>+ соль → новая соль + новая кислота: BaCl₂ + H₂SO₄ → BaSO₄↓ + 2HCl</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Ряд активности металлов</div>
        <div class="formula-box">Li → K → Ba → Ca → Na → Mg → Al → Zn → Fe → Ni → Sn → Pb → (H) → Cu → Hg → Ag → Au</div>
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

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-3-4': {
    title: '§ 4. Соли: классификация и химические свойства',
    sub: 'Глава 3. Классы неорганических соединений',
    html: `
      <div class="definition"><span class="term">Соли</span> — сложные вещества, состоящие из атомов металла и кислотного остатка.</div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Классификация</div>
        <ul class="theory-list">
          <li><b>Средние (нормальные)</b> — NaCl, K₂SO₄, CaCO₃.</li>
          <li><b>Кислые</b> — NaHCO₃, NaH₂PO₄, KHSO₄.</li>
          <li><b>Основные</b> — Cu(OH)Cl, Al(OH)Cl₂.</li>
          <li><b>Двойные</b> — KAl(SO₄)₂, NaKCO₃.</li>
          <li><b>Комплексные</b> — Na₃[Al(OH)₆], K₄[Fe(CN)₆].</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">⚗️</span> Химические свойства</div>
        <ul class="theory-list">
          <li><b>+ металл</b> (более активный): Fe + CuSO₄ → FeSO₄ + Cu</li>
          <li><b>+ кислота</b> (если образуется газ/осадок): CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑</li>
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
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🌍</span> Значение солей</div>
        <ul class="theory-list">
          <li>NaCl — поваренная соль, в пищу и в промышленности.</li>
          <li>CaCO₃ — мел, мрамор, известняк.</li>
          <li>NaHCO₃ — пищевая сода.</li>
          <li>Удобрения: KNO₃, NH₄NO₃, суперфосфат.</li>
        </ul>
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
        <div class="card-title"><span class="num">🔗</span> Ряд превращений для металлов</div>
        <div class="formula-box">Металл → Основный оксид → Основание → Соль</div>
        <div class="formula-box">Ca → CaO → Ca(OH)<sub>2</sub> → CaCl<sub>2</sub></div>
        <ul class="theory-list">
          <li>2Ca + O₂ → 2CaO</li>
          <li>CaO + H₂O → Ca(OH)₂</li>
          <li>Ca(OH)₂ + 2HCl → CaCl₂ + 2H₂O</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔗</span> Ряд превращений для неметаллов</div>
        <div class="formula-box">Неметалл → Кислотный оксид → Кислота → Соль</div>
        <div class="formula-box">C → CO<sub>2</sub> → H<sub>2</sub>CO<sub>3</sub> → Na<sub>2</sub>CO<sub>3</sub></div>
        <ul class="theory-list">
          <li>C + O₂ → CO₂</li>
          <li>CO₂ + H₂O → H₂CO₃</li>
          <li>H₂CO₃ + 2NaOH → Na₂CO₃ + 2H₂O</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔄</span> Полный генетический ряд</div>
        <div class="formula-box">Металл → Основный оксид → Основание → Соль</div>
        <div class="formula-box">Неметалл → Кислотный оксид → Кислота → Соль</div>
        <p class="paragraph">Соли могут превращаться друг в друга, реагируя с металлами, кислотами, щелочами, другими солями.</p>
      </div>

      <div class="example-box">
        <div class="lbl">Пример превращений</div>
        Cu → CuO → CuSO₄ → Cu(OH)₂ → CuO<br>
        2Cu + O₂ → 2CuO<br>
        CuO + H₂SO₄ → CuSO₄ + H₂O<br>
        CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄<br>
        Cu(OH)₂ → CuO + H₂O
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  /* ============ ГЛАВА 4 ============ */

  'ch8-4-1': {
    title: '§ 1. Естественные семейства химических элементов. Амфотерность',
    sub: 'Глава 4. Периодический закон и строение атома',
    html: `
      <div class="definition"><span class="term">Естественное семейство</span> — группа элементов со сходными свойствами, объединённая по определённому признаку.</div>

      <div class="card">
        <div class="card-title"><span class="num">1️⃣</span> Щелочные металлы (IA)</div>
        <p class="paragraph">Li, Na, K, Rb, Cs, Fr. Все — мягкие, легкоплавкие, очень активные. Реагируют с водой с выделением водорода.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">2️⃣</span> Щёлочноземельные металлы (IIA)</div>
        <p class="paragraph">Ca, Sr, Ba, Ra. Реагируют с водой, образуют щёлочи.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">3️⃣</span> Галогены (VIIA)</div>
        <p class="paragraph">F, Cl, Br, I, At. Сильные окислители. Активность падает от фтора к астату.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">4️⃣</span> Благородные (инертные) газы (VIIIA)</div>
        <p class="paragraph">He, Ne, Ar, Kr, Xe, Rn. Химически малоактивны.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Амфотерность</div>
        <div class="definition"><span class="term">Амфотерность</span> — способность соединения проявлять и кислотные, и основные свойства.</div>
        <p class="paragraph">Амфотерные оксиды: Al₂O₃, ZnO, BeO, Cr₂O₃.</p>
        <p class="paragraph">Амфотерные гидроксиды: Al(OH)₃, Zn(OH)₂, Be(OH)₂, Cr(OH)₃.</p>
        <div class="formula-box">Zn(OH)<sub>2</sub> + 2HCl → ZnCl<sub>2</sub> + 2H<sub>2</sub>O</div>
        <div class="formula-box">Zn(OH)<sub>2</sub> + 2NaOH → Na<sub>2</sub>[Zn(OH)<sub>4</sub>]</div>
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-4-2': {
    title: '§ 2. Открытие Периодического закона Д. И. Менделеева',
    sub: 'Глава 4. Периодический закон и строение атома',
    html: `
      <div class="paragraph">Д. И. Менделеев открыл Периодический закон 1 марта 1869 года (по новому стилю — 17 февраля), работая над учебником «Основы химии».</div>

      <div class="definition"><span class="term">Периодический закон</span> (формулировка Менделеева): свойства химических элементов и образованных ими веществ находятся в периодической зависимости от их атомных масс.</div>

      <div class="card">
        <div class="card-title"><span class="num">📜</span> Как Менделеев пришёл к открытию</div>
        <ul class="theory-list">
          <li>Расположил все известные элементы в порядке возрастания атомных масс.</li>
          <li>Заметил, что свойства повторяются через определённые промежутки — периодически.</li>
          <li>Оставил пустые клетки для ещё не открытых элементов и предсказал их свойства.</li>
          <li>Позже эти элементы были открыты: Ga, Sc, Ge — и свойства совпали.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Современная формулировка</div>
        <p class="paragraph">Свойства химических элементов и их соединений находятся в периодической зависимости от <b>заряда ядра атома</b> (а не от атомной массы).</p>
        <p class="paragraph">Это объясняется тем, что заряд ядра определяет число электронов и их распределение по уровням, а значит — все химические свойства элемента.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Значение закона</div>
        <ul class="theory-list">
          <li>Объединил все химические знания в стройную систему.</li>
          <li>Позволил предсказывать новые элементы.</li>
          <li>Стал основой для изучения строения атома.</li>
        </ul>
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
        <div class="card-title"><span class="num">⚛️</span> Состав атома</div>
        <div class="table-wrap"><table>
          <tr><th>Частица</th><th>Обозначение</th><th>Заряд</th><th>Масса (а.е.м.)</th><th>Где находится</th></tr>
          <tr><td>Протон</td><td>p⁺</td><td>+1</td><td>1</td><td>В ядре</td></tr>
          <tr><td>Нейтрон</td><td>n⁰</td><td>0</td><td>1</td><td>В ядре</td></tr>
          <tr><td>Электрон</td><td>e⁻</td><td>−1</td><td>1/1837</td><td>Вокруг ядра</td></tr>
        </table></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔢</span> Важные правила</div>
        <ul class="theory-list">
          <li>Число протонов = порядковый номер элемента в таблице.</li>
          <li>Число электронов = число протонов (атом электронейтрален).</li>
          <li>Число нейтронов = Ar − число протонов (округлённо).</li>
          <li>Заряд ядра = число протонов.</li>
        </ul>
      </div>

      <div class="example-box">
        <div class="lbl">Пример разбора атома натрия Na</div>
        Порядковый номер — 11 → 11 протонов, 11 электронов, заряд ядра +11.<br>
        Ar(Na) = 23 → нейтронов 23 − 11 = 12.
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📚</span> Изотопы</div>
        <div class="definition"><span class="term">Изотопы</span> — разновидности атомов одного элемента с одинаковым числом протонов, но разным числом нейтронов.</div>
        <p class="paragraph">Пример: водород имеет три изотопа — протий ¹H, дейтерий ²H, тритий ³H.</p>
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
          <li>1-й уровень: 2·1² = 2 электрона (максимум).</li>
          <li>2-й уровень: 2·2² = 8 электронов.</li>
          <li>3-й уровень: 2·3² = 18 электронов.</li>
          <li>4-й уровень: 2·4² = 32 электрона.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📐</span> Правила заполнения</div>
        <ul class="theory-list">
          <li>Уровни заполняются по порядку (1-й, потом 2-й и т.д.).</li>
          <li>На внешнем уровне не может быть больше 8 электронов.</li>
          <li>Число электронов на внешнем уровне = номер группы (для A-подгрупп).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔬</span> Электронные конфигурации</div>
        <p class="paragraph">Записываются с помощью s- и p-орбиталей:</p>
        <div class="table-wrap"><table>
          <tr><th>Элемент</th><th>Номер</th><th>Конфигурация</th></tr>
          <tr><td>H</td><td>1</td><td>1s¹</td></tr>
          <tr><td>He</td><td>2</td><td>1s²</td></tr>
          <tr><td>Li</td><td>3</td><td>1s² 2s¹</td></tr>
          <tr><td>C</td><td>6</td><td>1s² 2s² 2p²</td></tr>
          <tr><td>Na</td><td>11</td><td>1s² 2s² 2p⁶ 3s¹</td></tr>
          <tr><td>Cl</td><td>17</td><td>1s² 2s² 2p⁶ 3s² 3p⁵</td></tr>
        </table></div>
      </div>

      <div class="example-box">
        <div class="lbl">Схема распределения электронов по уровням</div>
        Na (11): 2, 8, 1 (на 1-м уровне 2, на 2-м — 8, на 3-м — 1).<br>
        Cl (17): 2, 8, 7.
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
          <li>Металл или неметалл.</li>
          <li>Формула высшего оксида и его характер.</li>
          <li>Формула высшего гидроксида.</li>
          <li>Формула летучего водородного соединения (для неметаллов).</li>
        </ol>
      </div>

      <div class="example-box">
        <div class="lbl">Пример — характеристика серы S</div>
        1. S — сера.<br>
        2. 3-й период, VI-A группа.<br>
        3. № 16, заряд ядра +16, 16 протонов, 16 нейтронов, 16 электронов.<br>
        4. 1s² 2s² 2p⁶ 3s² 3p⁴ (2, 8, 6).<br>
        5. Неметалл.<br>
        6. Высший оксид SO₃ — кислотный.<br>
        7. Гидроксид H₂SO₄ — кислота.<br>
        8. Летучее соединение H₂S.
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Изменение свойств по таблице</div>
        <ul class="theory-list">
          <li><b>Слева направо по периоду:</b> металлические свойства ослабевают, неметаллические усиливаются.</li>
          <li><b>Сверху вниз по группе (A):</b> металлические свойства усиливаются, неметаллические ослабевают.</li>
          <li>Радиус атома слева направо уменьшается, сверху вниз увеличивается.</li>
        </ul>
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  /* ============ ГЛАВА 5 ============ */

  'ch8-5-1': {
    title: '§ 1. Ионная химическая связь',
    sub: 'Глава 5. Химическая связь. ОВР',
    html: `
      <div class="definition"><span class="term">Ионная связь</span> — связь, которая образуется между ионами за счёт электростатического притяжения.</div>

      <div class="card">
        <div class="card-title"><span class="num">⚛️</span> Как образуется</div>
        <p class="paragraph">Атомы металлов легко отдают электроны, превращаясь в положительные ионы — <b>катионы</b>. Атомы неметаллов принимают электроны, превращаясь в отрицательные ионы — <b>анионы</b>.</p>
        <div class="formula-box">Na − 1e⁻ → Na⁺</div>
        <div class="formula-box">Cl + 1e⁻ → Cl⁻</div>
        <p class="paragraph">Противоположно заряженные ионы притягиваются — возникает ионная связь.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📋</span> Примеры веществ с ионной связью</div>
        <ul class="theory-list">
          <li>NaCl, KCl, CaCl₂ — соли.</li>
          <li>Na₂O, CaO, MgO — оксиды металлов.</li>
          <li>NaOH, KOH — гидроксиды.</li>
        </ul>
        <p class="paragraph">Ионная связь образуется между металлами и неметаллами (разность электроотрицательностей > 1,7).</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">💎</span> Ионная кристаллическая решётка</div>
        <p class="paragraph">Вещества с ионной связью образуют ионные кристаллические решётки. Свойства:</p>
        <ul class="theory-list">
          <li>Твёрдые при обычных условиях.</li>
          <li>Тугоплавкие, с высокой температурой плавления.</li>
          <li>Хрупкие.</li>
          <li>Растворимы в воде (многие).</li>
          <li>Растворы и расплавы проводят электрический ток.</li>
        </ul>
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
        <p class="paragraph">Два атома-неметалла имеют неспаренные электроны на внешних уровнях. Когда они сближаются, электроны образуют общую пару, принадлежащую обоим атомам.</p>
        <div class="formula-box">H· + ·H → H:H (H₂)</div>
        <div class="formula-box">H· + ·Cl: → H:Cl (HCl)</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Механизмы образования</div>
        <ul class="theory-list">
          <li><b>Обменный</b> — оба атома дают по одному электрону: H₂, Cl₂.</li>
          <li><b>Донорно-акцепторный</b> — один атом даёт пару, другой принимает: NH₄⁺, H₃O⁺.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📐</span> Свойства ковалентной связи</div>
        <ul class="theory-list">
          <li><b>Длина</b> — расстояние между ядрами.</li>
          <li><b>Энергия</b> — энергия, необходимая для разрыва связи.</li>
          <li><b>Кратность</b> — число общих пар (одинарная, двойная, тройная).</li>
        </ul>
        <div class="formula-box">H−H — одинарная · O=O — двойная · N≡N — тройная</div>
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  },

  'ch8-5-3': {
    title: '§ 3. Ковалентная неполярная и полярная связь',
    sub: 'Глава 5. Химическая связь. ОВР',
    html: `
      <div class="definition"><span class="term">Ковалентная неполярная связь</span> — связь между атомами одного и того же элемента-неметалла. Общая электронная пара расположена симметрично.</div>

      <div class="card">
        <div class="card-title"><span class="num">🔵</span> Примеры неполярной связи</div>
        <ul class="theory-list">
          <li>H₂, O₂, N₂, Cl₂, F₂, Br₂, I₂.</li>
          <li>Электроотрицательности атомов одинаковы, разность Δχ = 0.</li>
        </ul>
        <div class="formula-box">H:H, Cl:Cl, O::O</div>
      </div>

      <div class="definition"><span class="term">Ковалентная полярная связь</span> — связь между атомами разных неметаллов. Общая пара смещена к более электроотрицательному атому.</div>

      <div class="card">
        <div class="card-title"><span class="num">🟠</span> Примеры полярной связи</div>
        <ul class="theory-list">
          <li>HCl, H₂O, NH₃, CO₂, H₂S.</li>
          <li>Разность Δχ от 0,4 до 1,7.</li>
        </ul>
        <div class="formula-box">H<sup>δ+</sup>−Cl<sup>δ−</sup></div>
        <div class="formula-box">H<sup>δ+</sup>−O<sup>δ−</sup>−H<sup>δ+</sup></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Электроотрицательность</div>
        <p class="paragraph">Способность атома притягивать электроны других атомов. Ряд усиления:</p>
        <div class="formula-box">F > O > N > Cl > Br > I > S > C > H > металлы</div>
        <p class="paragraph">Самый электроотрицательный элемент — фтор (χ = 4,0).</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">💎</span> Кристаллические решётки</div>
        <ul class="theory-list">
          <li><b>Молекулярные</b> — лёгкоплавкие, летучие (H₂, HCl, CO₂).</li>
          <li><b>Атомные</b> — очень твёрдые и тугоплавкие (алмаз, SiO₂, SiC).</li>
        </ul>
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
        <p class="paragraph">Атомы металлов легко отдают валентные электроны. Эти электроны становятся общими для всего кристалла — образуют «электронный газ» или «электронное облако». Положительные ионы в узлах удерживаются этим облаком.</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">💎</span> Свойства металлов</div>
        <ul class="theory-list">
          <li><b>Электропроводность</b> — свободные электроны переносят заряд.</li>
          <li><b>Теплопроводность</b> — электроны передают энергию.</li>
          <li><b>Металлический блеск</b> — отражение света электронами.</li>
          <li><b>Ковкость и пластичность</b> — слои ионов сдвигаются, связь не разрушается.</li>
          <li>Разные температуры плавления (Hg — жидкий, W — тугоплавкий).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Типы кристаллических решёток металлов</div>
        <ul class="theory-list">
          <li><b>Кубическая объёмноцентрированная (ОЦК)</b> — Li, Na, K, Fe.</li>
          <li><b>Кубическая гранецентрированная (ГЦК)</b> — Cu, Ag, Au, Al.</li>
          <li><b>Гексагональная плотноупакованная</b> — Mg, Zn, Be.</li>
        </ul>
      </div>

      <div class="note">Металлическая связь характерна для простых веществ-металлов и их сплавов.</div>

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
          <li>В простых веществах с. о. = 0 (O₂, Fe, S, H₂).</li>
          <li>Сумма степеней окисления в молекуле = 0.</li>
          <li>В ионе сумма с. о. = заряду иона.</li>
          <li>Металлы I-A всегда +1, II-A всегда +2, Al всегда +3.</li>
          <li>Водород обычно +1, но в гидридах металлов −1 (NaH).</li>
          <li>Кислород обычно −2, но в пероксидах −1 (H₂O₂), во фториде OF₂ +2.</li>
          <li>Фтор всегда −1.</li>
        </ol>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔢</span> Примеры</div>
        <div class="table-wrap"><table>
          <tr><th>Формула</th><th>Степени окисления</th></tr>
          <tr><td>H₂O</td><td>H⁺¹, O⁻²</td></tr>
          <tr><td>H₂SO₄</td><td>H⁺¹, S⁺⁶, O⁻²</td></tr>
          <tr><td>KMnO₄</td><td>K⁺¹, Mn⁺⁷, O⁻²</td></tr>
          <tr><td>NaCl</td><td>Na⁺¹, Cl⁻¹</td></tr>
          <tr><td>Fe₂O₃</td><td>Fe⁺³, O⁻²</td></tr>
        </table></div>
      </div>

      <div class="example-box">
        <div class="lbl">Как найти с. о. в H₂SO₄</div>
        H⁺¹·2 + S + O⁻²·4 = 0<br>
        2 + S − 8 = 0<br>
        S = +6.
      </div>

      <div class="task-box">
        <div class="lbl">Задача</div>
        Определите с. о. марганца в KMnO₄.<br>
        <b>Решение:</b> K⁺¹ + Mn + 4·O⁻² = 0 → 1 + Mn − 8 = 0 → Mn = +7.
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
        <p class="paragraph">Вещество, которое отдаёт электроны, — <b>восстановитель</b> (сам окисляется).</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔻</span> Восстановление</div>
        <p class="paragraph">Процесс <b>принятия</b> электронов. Степень окисления понижается.</p>
        <div class="formula-box">Cl₂⁰ + 2e⁻ → 2Cl⁻¹</div>
        <p class="paragraph">Вещество, которое принимает электроны, — <b>окислитель</b> (сам восстанавливается).</p>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📊</span> Основные окислители и восстановители</div>
        <ul class="theory-list">
          <li><b>Окислители</b>: O₂, Cl₂, F₂, HNO₃, H₂SO₄(конц), KMnO₄, K₂Cr₂O₇.</li>
          <li><b>Восстановители</b>: H₂, C, CO, металлы, H₂S, NH₃.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title"><span class="num">📐</span> Метод электронного баланса</div>
        <ol class="theory-list num">
          <li>Расставить степени окисления всех элементов.</li>
          <li>Найти элементы, у которых степень окисления изменилась.</li>
          <li>Составить схемы окисления и восстановления.</li>
          <li>Уравнять число отданных и принятых электронов (НОК).</li>
          <li>Расставить коэффициенты.</li>
        </ol>
      </div>

      <div class="example-box">
        <div class="lbl">Пример</div>
        <b>2H₂S + 3O₂ → 2SO₂ + 2H₂O</b><br>
        S⁻² − 6e⁻ → S⁺⁴ | × 2 (окисление, восстановитель)<br>
        O₂⁰ + 4e⁻ → 2O⁻² | × 3 (восстановление, окислитель)
      </div>

      <div class="card">
        <div class="card-title"><span class="num">🔷</span> Типы ОВР</div>
        <ul class="theory-list">
          <li><b>Межмолекулярные</b> — окислитель и восстановитель в разных веществах.</li>
          <li><b>Внутримолекулярные</b> — окислитель и восстановитель в одном веществе.</li>
          <li><b>Диспропорционирования</b> — элемент сам с собой (часть окисляется, часть восстанавливается).</li>
        </ul>
      </div>

      <a href="https://rutube.ru/plst/1266533/" target="_blank" class="video-btn">🎬 Видеоурок по теме</a>
    `
  }

};
