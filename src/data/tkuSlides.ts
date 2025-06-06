export interface TKUSlideContent {
  type: string;
  title: string;
  subtitle?: string;
  content: any;
  background: string;
}

export const tkuSlides: TKUSlideContent[] = [
  // Slide 1: Title
  {
    type: "title",
    title: "Техническое конструирование и углубленное изучение",
    subtitle: "Модуль 3a: Школьная жизнь через призму технологий",
    content: {
      grade: "8 класс",
      duration: "45 минут",
      teacher: "Учитель технологии и английского языка",
      date: new Date().toLocaleDateString("ru-RU"),
      focus: "Интеграция технических знаний с языковым развитием",
    },
    background: "bg-gradient-to-br from-slate-700 via-gray-800 to-blue-900",
  },

  // Slide 2: Technical Learning Objectives
  {
    type: "objectives",
    title: "🔧 Технические цели урока",
    content: {
      main: "Формирование технической грамотности через изучение школьной инфраструктуры",
      practical: [
        "Изучить техническую лексику школьного оборудования",
        "Освоить принципы проектирования учебных пространств",
        "Развить навыки технического черчения и моделирования",
        "Создать техническую документацию на английском языке",
      ],
      technical: [
        "Анализ конструкции школьных объектов",
        "Работа с техническими чертежами",
        "Использование измерительных инструментов",
        "Основы CAD-проектирования",
      ],
    },
    background: "bg-gradient-to-br from-blue-600 to-indigo-700",
  },

  // Slide 3: Technical Game Elements
  {
    type: "game-intro",
    title: "⚙️ Инженерные челленджи",
    content: {
      elements: [
        {
          icon: "🔨",
          title: "Construction Teams",
          desc: "Инженерные команды-проектировщики",
        },
        {
          icon: "📐",
          title: "Blueprint Points",
          desc: "Баллы за точность чертежей",
        },
        {
          icon: "🏗️",
          title: "Build Badges",
          desc: "Значки за успешную сборку",
        },
        {
          icon: "🗂️",
          title: "Project Portfolio",
          desc: "Портфолио технических решений",
        },
      ],
    },
    background: "bg-gradient-to-br from-orange-600 to-red-700",
  },

  // Slide 4: Technical Vocabulary
  {
    type: "vocabulary",
    title: "🔩 Technical Vocabulary: School Infrastructure",
    content: {
      words: [
        {
          word: "blueprint",
          translation: "чертеж, план",
          example: "We need a blueprint of the classroom",
        },
        {
          word: "assembly",
          translation: "сборка, монтаж",
          example: "The desk assembly took 30 minutes",
        },
        {
          word: "infrastructure",
          translation: "инфраструктура",
          example: "School infrastructure includes heating systems",
        },
        {
          word: "specifications",
          translation: "технические характеристики",
          example: "Check the computer specifications",
        },
        {
          word: "dimensions",
          translation: "размеры",
          example: "Measure the classroom dimensions",
        },
        {
          word: "layout",
          translation: "планировка",
          example: "The lab layout is efficient",
        },
        {
          word: "circuit",
          translation: "схема, цепь",
          example: "The lighting circuit needs repair",
        },
        {
          word: "prototype",
          translation: "прототип",
          example: "We built a desk prototype",
        },
      ],
    },
    background: "bg-gradient-to-br from-cyan-600 to-blue-700",
  },

  // Slide 5: Technical Grammar
  {
    type: "grammar",
    title: "📋 Technical Documentation Grammar",
    content: {
      structures: [
        {
          name: "Technical Instructions",
          form: "Imperative + Technical Terms",
          use: "Для составления инструкций по сборке и эксплуатации",
          example: "Connect the power cable to the main unit before starting.",
        },
        {
          name: "Specifications Description",
          form: "Present Simple + Measurements",
          use: "Для описания технических характеристик",
          example:
            "The classroom measures 8x6 meters and accommodates 30 students.",
        },
        {
          name: "Problem-Solution Pattern",
          form: "If/When + Problem, Then + Solution",
          use: "Для описания технических решений",
          example:
            "If the projector overheats, then check the ventilation system.",
        },
      ],
      focus: "Технический английский для документации проектов",
    },
    background: "bg-gradient-to-br from-emerald-600 to-teal-700",
  },

  // Technical Activity Slides
  {
    type: "activity",
    title: "🔍 Station 1: School Infrastructure Analysis",
    content: {
      instruction: "Проанализируйте техническое оснащение класса!",
      rules: [
        "Измерьте размеры помещения и оборудования",
        "Составьте техническую спецификацию",
        "Найдите и опишите инженерные системы",
        "Оцените эффективность планировки",
      ],
      tools: ["Рулетка", "Угольник", "Блокнот для записей", "Камера для фото"],
      points: "📐 +10 баллов за точные измерения • +15 за полный анализ",
      deliverable: "Техническое описание на английском языке",
    },
    background: "bg-gradient-to-br from-slate-600 to-gray-700",
  },

  {
    type: "activity",
    title: "📐 Station 2: Blueprint Creation Challenge",
    content: {
      instruction: "Создайте чертеж идеальной классной комнаты!",
      task: "Спроектируйте оптимальную планировку учебного пространства",
      rules: [
        "Используйте масштаб 1:50",
        "Включите все необходимое оборудование",
        "Соблюдайте требования безопасности",
        "Подпишите все элементы на английском языке",
      ],
      materials: ["Миллиметровка", "Линейка", "Карандаши", "Шаблоны мебели"],
      points: "🏗️ +20 баллов за технически верный чертеж",
    },
    background: "bg-gradient-to-br from-blue-700 to-indigo-800",
  },

  {
    type: "activity",
    title: "🔨 Station 3: Prototype Assembly",
    content: {
      instruction: "Соберите модель школьного оборудования!",
      rules: [
        "Используйте предоставленные материалы",
        "Следуйте технической инструкции на английском",
        "Проверьте функциональность модели",
        "Документируйте процесс сборки",
      ],
      options: [
        "📚 Book Stand - подставка для книг",
        "💡 Desk Lamp - настольная лампа",
        "📱 Phone Holder - держатель телефона",
        "🗂️ Organizer - органайзер для канцелярии",
      ],
      points: "⚙️ +25 баллов за работающий прототип",
    },
    background: "bg-gradient-to-br from-orange-700 to-red-800",
  },

  {
    type: "activity",
    title: "💻 Station 4: CAD Design Workshop",
    content: {
      instruction: "Создайте 3D-модель школьного объекта!",
      requirements: [
        "Выберите объект для моделирования",
        "Создайте 3D-модель в простом CAD-редакторе",
        "Добавьте размеры и аннотации",
        "Подготовьте презентацию проекта",
      ],
      software: "Tinkercad (онлайн) или SketchUp Free",
      examples: ["Стол", "Стул", "Доска", "Стеллаж"],
      points: "🎯 +30 баллов за детализированную модель",
    },
    background: "bg-gradient-to-br from-purple-700 to-pink-800",
  },

  // Technical Assessment
  {
    type: "assessment",
    title: "📊 Критерии технической оценки",
    content: {
      total: "100 баллов максимум",
      criteria: [
        {
          category: "Техническая лексика",
          points: "0-20",
          desc: "Использование специальной терминологии",
        },
        {
          category: "Точность измерений",
          points: "0-25",
          desc: "Правильность технических расчетов",
        },
        {
          category: "Качество чертежа",
          points: "0-20",
          desc: "Соблюдение стандартов черчения",
        },
        {
          category: "Функциональность прототипа",
          points: "0-20",
          desc: "Работоспособность созданной модели",
        },
        {
          category: "Техническая презентация",
          points: "0-15",
          desc: "Качество представления проекта",
        },
      ],
      grades: [
        { range: "90-100", grade: "отлично", color: "text-green-600" },
        { range: "75-89", grade: "хорошо", color: "text-blue-600" },
        { range: "60-74", grade: "удовл.", color: "text-yellow-600" },
        { range: "< 60", grade: "доработка", color: "text-red-600" },
      ],
    },
    background: "bg-gradient-to-br from-amber-600 to-orange-700",
  },

  // Technical Homework
  {
    type: "homework",
    title: "🏠 Техническое задание на дом",
    content: {
      task: "Engineering Portfolio Project",
      instruction: "Создайте техническое портфолио школьного оборудования",
      requirements: [
        "Сфотографируйте 5 предметов школьного оборудования",
        "Составьте техническое описание каждого на английском",
        "Укажите размеры, материалы, функции",
        "Предложите 1 улучшение для каждого предмета",
        "Оформите как техническую документацию",
      ],
      format: "A4 страницы с фото, чертежами и описаниями",
      bonus: "🏆 Лучшие портфолио войдут в школьную техническую библиотеку",
      tools: "Камера, линейка, компьютер/планшет для оформления",
    },
    background: "bg-gradient-to-br from-indigo-700 to-purple-800",
  },

  // Technical Reflection
  {
    type: "reflection",
    title: "🔧 Техническая рефлексия",
    content: {
      questions: [
        "What technical skills did you develop today?",
        "Which engineering challenge was most difficult?",
        "How can you apply these skills in real life?",
        "What would you like to design or build next?",
      ],
      levels: [
        {
          level: "Apprentice Engineer",
          stars: "⭐",
          desc: "Базовые навыки освоены",
        },
        {
          level: "Skilled Technician",
          stars: "⭐⭐⭐",
          desc: "Уверенное владение инструментами",
        },
        {
          level: "Master Designer",
          stars: "⭐⭐⭐⭐⭐",
          desc: "Готов к сложным проектам",
        },
      ],
      skills: [
        "Измерения и расчеты",
        "Техническое черчение",
        "3D-моделирование",
        "Сборка прототипов",
        "Техническая документация",
      ],
    },
    background: "bg-gradient-to-br from-teal-700 to-cyan-800",
  },

  // Thank You
  {
    type: "thanks",
    title: "🏆 Поздравляем, инженеры-конструкторы!",
    content: {
      message: "Вы успешно завершили техническое конструирование!",
      achievements: [
        "Technical Vocabulary Masters",
        "Blueprint Designers",
        "Prototype Builders",
        "CAD Specialists",
      ],
      skills_developed: [
        "✅ Техническое черчение",
        "✅ 3D-моделирование",
        "✅ Инженерный английский",
        "✅ Прототипирование",
      ],
      nextLesson: "Следующий модуль: Робототехника и программирование!",
    },
    background: "bg-gradient-to-br from-yellow-600 via-orange-600 to-red-700",
  },
];
