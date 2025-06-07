export interface SlideContent {
  type: string;
  title: string;
  subtitle?: string;
  content: any;
  background: string;
}

export const slides: SlideContent[] = [
  // Slide 1: Title
  {
    type: "title",
    title: "Education & School Life Quest",
    subtitle: "Spotlight 8 • Module 3a: That's the Life for Me",
    content: {
      grade: "8 класс",
      duration: "45 минут",
      teacher: "Учитель английского языка",
      date: new Date().toLocaleDateString("ru-RU"),
    },
    background: "bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700",
  },

  // Slide 2: Learning Objectives
  {
    type: "objectives",
    title: "🎯 Цели урока",
    content: {
      main: "Формирование коммуникативной компетенции в рамках темы «Школьная жизнь»",
      practical: [
        "Освоить 16 лексических единиц по теме 'School Life'",
        "Сформировать навыки Past Perfect и Past Perfect Continuous",
        "Развить умения диалогической и монологической речи",
        "Совершенствовать навыки аудирования и чтения",
      ],
    },
    background: "bg-gradient-to-br from-emerald-500 to-teal-600",
  },

  // Slide 3: Game Elements
  {
    type: "game-intro",
    title: "🎮 Игровые элементы урока",
    content: {
      elements: [
        {
          icon: "🏆",
          title: "Team Competition",
          desc: "Командные соревнования",
        },
        { icon: "⭐", title: "Point System", desc: "Система баллов" },
        { icon: "🎯", title: "Achievement Badges", desc: "Значки достижений" },
        { icon: "🗺️", title: "Quest Map", desc: "Карта приключений" },
      ],
    },
    background: "bg-gradient-to-br from-orange-500 to-red-600",
  },

  // Slide 4: Vocabulary Introduction
  {
    type: "vocabulary",
    title: "📚 New Vocabulary: School Life",
    content: {
      words: [
        {
          word: "attend",
          translation: "посещать",
          example: "I attend a state school",
        },
        {
          word: "boarding school",
          translation: "школа-интернат",
          example: "She lives at a boarding school",
        },
        {
          word: "co-educational",
          translation: "смешанная школа",
          example: "Our school is co-educational",
        },
        {
          word: "facility",
          translation: "помещение, оборудование",
          example: "Great sports facilities",
        },
        {
          word: "scholarship",
          translation: "стипендия",
          example: "He got a scholarship",
        },
        {
          word: "uniform",
          translation: "школьная форма",
          example: "We wear a blue uniform",
        },
        {
          word: "curriculum",
          translation: "учебная программа",
          example: "The curriculum includes art",
        },
        {
          word: "extra-curricular",
          translation: "внеклассный",
          example: "Extra-curricular activities",
        },
      ],
    },
    background: "bg-gradient-to-br from-blue-500 to-indigo-600",
  },

  // Slide 5: Grammar Focus
  {
    type: "grammar",
    title: "⚡ Grammar: Past Tenses Timeline",
    content: {
      tenses: [
        {
          name: "Past Perfect",
          form: "had + V3",
          use: "Действие, которое произошло раньше другого в прошлом",
          example: "I had finished my homework before I went to school.",
        },
        {
          name: "Past Perfect Continuous",
          form: "had been + Ving",
          use: "Длительное действие, которое происходило до определенного момента в прошлом",
          example:
            "I had been studying English for 2 years before I moved here.",
        },
      ],
      timeline:
        "Past Perfect (had done) → Past Perfect Continuous (had been doing) → Past Simple (did)",
    },
    background: "bg-gradient-to-br from-violet-500 to-purple-600",
  },

  // Activity Slides
  {
    type: "activity",
    title: "🎯 Station 1: Vocabulary Treasure Hunt",
    content: {
      instruction: "Find hidden words around the classroom!",
      rules: [
        "Each team searches for vocabulary cards",
        "Different words = different points",
        "Create a mind map with found words",
        "Explain word meanings to earn bonus points",
      ],
      points: "💎 Rare words worth more points • +20 for complete collection",
      materials: "Hidden vocabulary cards, treasure chest, mind map templates",
    },
    background: "bg-gradient-to-br from-yellow-500 to-orange-600",
  },

  {
    type: "activity",
    title: "🕵️ Station 2: Past Time Detective Work",
    content: {
      instruction: "Solve the grammar mystery!",
      task: "Read school stories and find examples of different past tenses",
      rules: [
        "Identify Past Perfect, Past Perfect Continuous, Past Simple, Past Continuous",
        "Arrange events in correct chronological order",
        "Create timelines showing sequence of events",
        "Explain why each tense is used",
      ],
      points: "🔍 +5 points per correct tense • +10 for timeline explanation",
    },
    background: "bg-gradient-to-br from-indigo-500 to-blue-600",
  },

  {
    type: "activity",
    title: "🎭 Station 3: School Subjects Battle Royale",
    content: {
      instruction: "Show subjects without words!",
      rules: [
        "Teams act out school subjects using only gestures and sounds",
        "No words allowed during performance",
        "Other teams guess the subject",
        "Express your attitude to each subject",
      ],
      examples: ["🧮 Mathematics", "📚 Literature", "🧪 Chemistry", "🎨 Art"],
      points: "⚡ Quick answers = x2 points • +15 for creativity",
    },
    background: "bg-gradient-to-br from-pink-500 to-rose-600",
  },

  {
    type: "activity",
    title: "🎨 Station 4: Perfect School Day Design",
    content: {
      instruction: "Create your ultimate school timetable!",
      requirements: [
        "Use new vocabulary from Spotlight 8",
        "Include subjects, activities, and facilities",
        "Explain your choices",
        "Present in 2 minutes maximum",
      ],
      criteria: "Creativity, vocabulary use, presentation skills",
      points: "🏆 Golden Schedule Award = +25 points",
    },
    background: "bg-gradient-to-br from-emerald-500 to-green-600",
  },

  // Assessment
  {
    type: "assessment",
    title: "📊 Критерии оценивания",
    content: {
      total: "100 баллов максимум",
      criteria: [
        {
          category: "Лексические навыки",
          points: "0-25",
          desc: "Знание школьной лексики",
        },
        {
          category: "Грамматические навыки",
          points: "0-25",
          desc: "Использование прошедших времен",
        },
        {
          category: "Коммуникативные навыки",
          points: "0-20",
          desc: "Участие в диалогах",
        },
        {
          category: "Креативность",
          points: "0-15",
          desc: "Оригинальность идей",
        },
        {
          category: "Активность",
          points: "0-15",
          desc: "Вовлеченность в игру",
        },
      ],
      grades: [
        { range: "90-100", grade: "5", color: "text-green-600" },
        { range: "75-89", grade: "4", color: "text-blue-600" },
        { range: "60-74", grade: "3", color: "text-yellow-600" },
        { range: "< 60", grade: "коррекция", color: "text-red-600" },
      ],
    },
    background: "bg-gradient-to-br from-orange-500 to-amber-600",
  },

  // Homework
  {
    type: "homework",
    title: "🏠 Homework Mission",
    content: {
      task: "School Diary Entry",
      instruction: "Write about an important school day from your past",
      requirements: [
        "Use Past Perfect (что случилось до этого)",
        "Use Past Perfect Continuous (что происходило)",
        "Use Past Simple (основные события)",
        "Use Past Continuous (фоновые действия)",
        "Include 10+ new vocabulary words",
      ],
      bonus: "📸 Best diaries will be featured in School Memories Exhibition",
      materials: "Diary templates, past tense checklist, vocabulary bank",
    },
    background: "bg-gradient-to-br from-indigo-500 to-purple-600",
  },

  // Reflection
  {
    type: "reflection",
    title: "🤔 Let's Reflect!",
    content: {
      questions: [
        "What was the most interesting part of today's lesson?",
        "Which grammar rule is now clearer for you?",
        "How confident do you feel about school vocabulary?",
        "What would you like to explore more?",
      ],
      levels: [
        {
          level: "Beginner Explorer",
          fingers: "1-2",
          desc: "Need more practice",
        },
        {
          level: "Confident Navigator",
          fingers: "3-4",
          desc: "Good understanding",
        },
        { level: "Master Detective", fingers: "5", desc: "Excellent mastery" },
      ],
    },
    background: "bg-gradient-to-br from-teal-500 to-cyan-600",
  },

  // Thank You
  {
    type: "thanks",
    title: "🏆 Congratulations, Education Champions!",
    content: {
      message: "You've successfully completed the Education Quest!",
      achievements: [
        "Vocabulary Hunters",
        "Grammar Detectives",
        "Creative Designers",
        "Communication Masters",
      ],
      nextLesson: "Next quest: Daily Routines Adventure!",
    },
    background: "bg-gradient-to-br from-yellow-500 via-orange-500 to-red-600",
  },
];
