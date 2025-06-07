import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const LessonPlan = () => {
  const [activeStage, setActiveStage] = useState("organization");

  const lessonData = {
    title: "Education & School Life Quest",
    subtitle: "Module 3a: That's the Life for Me (Spotlight 8)",
    grade: "8 класс",
    type: "Комбинированный урок с элементами геймификации",
    duration: "45 минут",
    objectives: {
      educational:
        "Освоение лексики по теме 'Education' (УМК Spotlight 8, Module 3a), развитие навыков использования Present Simple vs Present Continuous",
      developing:
        "Развитие коммуникативных навыков через игровые задания, критического мышления через квест-активности",
      upbringing:
        "Формирование позитивного отношения к образованию и школьной жизни через геймификацию",
    },
  };

  const stages = {
    organization: {
      title: "🎯 1. Организационный этап",
      duration: "8-10 минут",
      activities: [
        {
          step: "School Life Warm-up Challenge",
          teacher:
            "Welcome to our Education Quest! Let's start with a quick challenge. Look at these emojis and guess the school subjects: 🧮 📚 🧪 🎨",
          students:
            "Разгадывают emoji-загадки, зарабатывают первые баллы команды",
          time: "3 мин",
          materials: "Interactive board, emoji cards, team score tracker",
          gameElement:
            "⭐ Команды получают +5 баллов за каждый правильный ответ",
        },
        {
          step: "Mission Briefing & Team Formation",
          teacher:
            "Today we're detectives solving the mystery of the Perfect School Day! Form teams of 4. Choose your team name related to education",
          students:
            "Формируют команды с названиями (The Brainiacs, Study Squad, Knowledge Knights, etc.)",
          time: "3 мин",
          materials: "Team badges, mission cards from Spotlight 8 Module 3a",
          gameElement:
            "🏆 Каждая команда получает детективный бейдж и стартовые 10 баллов",
        },
        {
          step: "Quest Map Reveal & Goal Setting",
          teacher:
            "Here's our quest map! We'll travel through 5 stations to unlock the secret of the perfect school day. Our mission: master school vocabulary and grammar rules! Are you ready for the adventure?",
          students:
            "Изучают карту квеста, обсуждают стратегию прохождения, формулируют личные цели урока",
          time: "2-4 мин",
          materials:
            "Large quest map poster, Spotlight 8 vocabulary cards, goal-setting worksheets",
          gameElement:
            "🗺️ Визуальная карта квеста с чекпоинтами и призами. Команды выбирают маршрут прохождения станций",
        },
      ],
    },
    main: {
      title: "🎮 2. Основной этап",
      duration: "30-32 минуты",
      activities: [
        {
          step: "Station 1: Vocabulary Treasure Hunt (Первичное усвоение)",
          teacher:
            "Find the hidden words around the classroom! Each word from Spotlight 8 p.42-43 is worth different points. Biology=10pts, Geography=15pts, etc. Create your school subjects collection!",
          students:
            "Ищут спрятанные карточки со словами, составляют mind map предметов, изучают новую лексику через контекст",
          time: "6 мин",
          materials:
            "Hidden vocabulary cards (Spotlight 8 p.42), treasure chest, timer, mind map templates",
          gameElement:
            "💎 Редкие слова стоят больше баллов. Бонус +20 за полную коллекцию. Achievement: 'Vocabulary Hunter'",
        },
        {
          step: "Station 2: Grammar Detective Work (Первичная проверка понимания)",
          teacher:
            "Solve the case! Read these Spotlight texts and find examples of Present Simple vs Present Continuous. Each correct find = clue points! Explain the rule to earn bonus points!",
          students:
            "Анализируют тексты из учебника, находят грамматические структуры, объясняют правила использования времен",
          time: "7 мин",
          materials:
            "Spotlight 8 texts (p.42-43), detective magnifying glasses, clue sheets, grammar reference cards",
          gameElement:
            "🔍 За каждый найденный пример +5 баллов, за объяснение правила +10. Special badge: 'Grammar Detective'",
        },
        {
          step: "Station 3: School Subjects Battle Royale (Первичное закрепление)",
          teacher:
            "Time for the ultimate subjects showdown! Teams compete in describing subjects using only actions and sounds - no words allowed! Other teams guess and explain why they love or hate these subjects!",
          students:
            "Показывают предметы через пантомиму и звуки, отгадывают предметы других команд, выражают отношение к предметам",
          time: "8 мин",
          materials:
            "Subject cards from Spotlight 8, buzzer, action cards, opinion expression templates",
          gameElement:
            "⚡ Быстрые ответы дают x2 баллы. Творческие показы получают бонус +15. Award: 'Drama King/Queen'",
        },
        {
          step: "Station 4: Perfect School Day Design Challenge (Применение знаний)",
          teacher:
            "Create the ultimate school timetable! Use Spotlight vocabulary to design a dream school day. Include subjects, activities, and explain your choices. Present it in 2 minutes max!",
          students:
            "Создают идеальное школьное расписание, используя новую лексику, презентуют креативные идеи, защищают свой выбор",
          time: "8 мин",
          materials:
            "Design sheets, Spotlight 8 vocabulary bank, colored markers, timer, presentation rubrics",
          gameElement:
            "🎨 Самый креативный проект получает Golden Schedule Award (+25 баллов). Peer voting для People's Choice Award",
        },
        {
          step: "Station 5: Quick-Fire Knowledge Quiz & Error Correction",
          teacher:
            "Final challenge! Lightning round about education systems and school uniforms. Answer fast to earn maximum points! Let's also fix any mistakes from previous stations together!",
          students:
            "Отвечают на быстрые вопросы о школьных системах разных стран, обсуждают ошибки, исправляют их коллективно",
          time: "3 мин",
          materials:
            "Quiz buzzer system, questions from Spotlight 8 Cultural Corner, error correction worksheets, mistake board",
          gameElement:
            "⚡ Первый правильный ответ = 10 баллов, второй = 5 баллов. Bonus points за помощь в исправлении ошибок",
        },
      ],
    },
    conclusion: {
      title: "🏆 3. Заключительный этап",
      duration: "5-7 минут",
      activities: [
        {
          step: "Victory Ceremony & Knowledge Reflection",
          teacher:
            "Let's crown our Education Champions! What was the most surprising thing you learned about school life today? Which station was your favorite and why?",
          students:
            "Празднуют победы, делятся открытиями урока, рефлексируют о достигнутых целях, получают награды",
          time: "3 мин",
          materials:
            "Champion certificates, vocabulary medals, reflection cards, achievement badges",
          gameElement:
            "🥇 Команды получают титулы: Education Masters, Vocabulary Wizards, Grammar Gurus, Creative Designers",
        },
        {
          step: "Quest Completion & Homework Mission",
          teacher:
            "Your homework quest: Create a mini-documentary about your perfect school day using today's vocabulary. Film it, make a comic strip, or write a blog post! Use at least 10 new words!",
          students:
            "Принимают творческое домашнее задание, выбирают формат выполнения, планируют использование новой лексики",
          time: "2 мин",
          materials:
            "Homework quest cards, vocabulary checklists, creative format options, QR codes for online resources",
          gameElement:
            "📱 Лучшие работы станут частью School Life Exhibition на следующем уроке. Special prize для самого креативного проекта",
        },
        {
          step: "Level Up Assessment & Final Scores",
          teacher:
            "Rate your adventure today! Show me your level: Beginner Explorer (1-2 fingers), Confident Navigator (3-4), or Master Detective (5)! Let's announce our quest winners!",
          students:
            "Оценивают свой прогресс через игровую систему уровней, подсчитывают финальные баллы команд",
          time: "2 мин",
          materials:
            "Level badges, self-assessment cards, progress tracker, final scoreboard",
          gameElement:
            "⭐ Каждый получает персональный achievement badge по итогам урока. Командный рейтинг с призами для топ-3",
        },
      ],
    },
  };

  const gameElements = [
    {
      icon: "🏆",
      title: "Team Competition",
      desc: "Командное соревнование с рейтингом",
    },
    {
      icon: "⭐",
      title: "Point System",
      desc: "Система баллов за каждое задание",
    },
    {
      icon: "🎯",
      title: "Achievement Badges",
      desc: "Значки достижений за успехи",
    },
    { icon: "🗺️", title: "Quest Map", desc: "Карта приключений по станциям" },
  ];

  const assessmentCriteria = [
    {
      category: "Лексические навыки",
      points: "0-25 баллов",
      criteria: "Знание и использование новых слов по теме 'School Life'",
    },
    {
      category: "Грамматические навыки",
      points: "0-20 баллов",
      criteria: "Правильное использование Present Simple vs Present Continuous",
    },
    {
      category: "Коммуникативные навыки",
      points: "0-20 баллов",
      criteria: "Участие в диалогах, презентациях, командной работе",
    },
    {
      category: "Креативность",
      points: "0-15 баллов",
      criteria: "Оригинальность идей в творческих заданиях",
    },
    {
      category: "Активность и мотивация",
      points: "0-20 баллов",
      criteria: "Вовлеченность в игровые активности, помощь команде",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Card className="mb-8 border-2 border-purple-200 shadow-lg">
          <CardHeader className="text-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-t-lg">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Icon name="Gamepad2" size={32} />
              <CardTitle className="text-3xl font-bold">
                Технологическая карта урока английского языка
              </CardTitle>
              <Icon name="Trophy" size={32} />
            </div>
            <p className="text-lg opacity-90">с элементами геймификации</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Badge
                variant="secondary"
                className="text-lg px-4 py-2 bg-white text-purple-800"
              >
                <Icon name="Target" size={16} className="mr-2" />
                {lessonData.grade}
              </Badge>
              <Badge
                variant="secondary"
                className="text-lg px-4 py-2 bg-white text-purple-800"
              >
                <Icon name="Clock" size={16} className="mr-2" />
                {lessonData.duration}
              </Badge>
              <Badge
                variant="secondary"
                className="text-lg px-4 py-2 bg-white text-purple-800"
              >
                <Icon name="Users" size={16} className="mr-2" />
                Геймификация
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-2">
                "{lessonData.title}"
              </h3>
              <p className="text-lg text-gray-600">{lessonData.subtitle}</p>
            </div>

            {/* Game Elements */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {gameElements.map((element, index) => (
                <Card
                  key={index}
                  className="text-center p-3 bg-gradient-to-b from-yellow-50 to-orange-50 border-yellow-200"
                >
                  <div className="text-2xl mb-2">{element.icon}</div>
                  <h4 className="font-semibold text-sm text-orange-800">
                    {element.title}
                  </h4>
                  <p className="text-xs text-gray-600">{element.desc}</p>
                </Card>
              ))}
            </div>

            {/* Objectives */}
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-green-50 border-green-200 border-2">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-green-800 flex items-center">
                    <Icon name="Star" size={16} className="mr-2" />
                    Образовательная цель
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{lessonData.objectives.educational}</p>
                </CardContent>
              </Card>
              <Card className="bg-blue-50 border-blue-200 border-2">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-blue-800 flex items-center">
                    <Icon name="Zap" size={16} className="mr-2" />
                    Развивающая цель
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{lessonData.objectives.developing}</p>
                </CardContent>
              </Card>
              <Card className="bg-purple-50 border-purple-200 border-2">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-purple-800 flex items-center">
                    <Icon name="Trophy" size={16} className="mr-2" />
                    Воспитательная цель
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{lessonData.objectives.upbringing}</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <Tabs
          value={activeStage}
          onValueChange={setActiveStage}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-3 mb-6 h-12">
            <TabsTrigger value="organization" className="text-sm font-semibold">
              🎯 Организационный
            </TabsTrigger>
            <TabsTrigger value="main" className="text-sm font-semibold">
              🎮 Основной
            </TabsTrigger>
            <TabsTrigger value="conclusion" className="text-sm font-semibold">
              🏆 Заключительный
            </TabsTrigger>
          </TabsList>

          {Object.entries(stages).map(([key, stage]) => (
            <TabsContent key={key} value={key}>
              <Card className="border-2 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-t-lg">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-2xl">{stage.title}</CardTitle>
                    <Badge
                      variant="secondary"
                      className="text-lg px-4 py-2 bg-white text-indigo-800"
                    >
                      <Icon name="Clock" size={16} className="mr-1" />
                      {stage.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  {stage.activities.map((activity, index) => (
                    <Card
                      key={index}
                      className="border-l-4 border-l-indigo-500 shadow-md hover:shadow-lg transition-shadow"
                    >
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg text-indigo-900 flex items-center">
                            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                              {index + 1}
                            </span>
                            {activity.step}
                          </CardTitle>
                          <Badge
                            variant="outline"
                            className="text-sm px-3 py-1"
                          >
                            {activity.time}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                            <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                              <Icon name="Users" size={16} className="mr-2" />
                              Деятельность учителя:
                            </h4>
                            <p className="text-sm italic text-blue-900">
                              "{activity.teacher}"
                            </p>
                          </div>
                          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                            <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                              <Icon name="Target" size={16} className="mr-2" />
                              Деятельность учащихся:
                            </h4>
                            <p className="text-sm text-green-900">
                              {activity.students}
                            </p>
                          </div>
                        </div>

                        {activity.gameElement && (
                          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-3 rounded-lg border border-yellow-200 mb-3">
                            <h4 className="font-semibold text-orange-800 mb-1 flex items-center">
                              <Icon
                                name="Gamepad2"
                                size={16}
                                className="mr-2"
                              />
                              Игровой элемент:
                            </h4>
                            <p className="text-sm text-orange-900">
                              {activity.gameElement}
                            </p>
                          </div>
                        )}

                        <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                          <Icon name="CheckCircle" size={16} />
                          <span className="font-medium">Материалы:</span>
                          <span>{activity.materials}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Assessment Criteria */}
        <Card className="mt-8 border-2 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center">
              <Icon name="Award" size={20} className="mr-2" />
              Критерии оценивания (100 баллов максимум)
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid gap-4">
              {assessmentCriteria.map((criteria, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-3 bg-orange-50 rounded-lg border border-orange-200"
                >
                  <div>
                    <h4 className="font-semibold text-orange-800">
                      {criteria.category}
                    </h4>
                    <p className="text-sm text-gray-600">{criteria.criteria}</p>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-orange-100 text-orange-800"
                  >
                    {criteria.points}
                  </Badge>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">
                🎯 Система оценок:
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                <span className="text-green-800">90-100 баллов = "5"</span>
                <span className="text-blue-800">75-89 баллов = "4"</span>
                <span className="text-yellow-800">60-74 балла = "3"</span>
                <span className="text-gray-600">Менее 60 = коррекция</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Resources */}
        <Card className="mt-8 border-2 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center">
              <Icon name="Star" size={20} className="mr-2" />
              Дополнительные материалы и ресурсы (УМК Spotlight 8)
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-indigo-900">
                  Ключевая лексика (Spotlight 8, Module 3a):
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Attend",
                    "Boarding school",
                    "Co-educational",
                    "Dull",
                    "Exciting",
                    "Experience",
                    "Extra-curricular",
                    "Facility",
                    "Higher education",
                    "Participate",
                    "Private school",
                    "Public school",
                    "Scholarship",
                    "State school",
                    "Uniform",
                    "Unusual",
                  ].map((word) => (
                    <Badge
                      key={word}
                      variant="secondary"
                      className="text-xs bg-indigo-100 text-indigo-800"
                    >
                      {word}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-indigo-900">
                  Игровые механики урока:
                </h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center">
                    <Icon
                      name="Trophy"
                      size={16}
                      className="mr-2 text-yellow-500"
                    />
                    Командные соревнования с рейтингом
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Star"
                      size={16}
                      className="mr-2 text-yellow-500"
                    />
                    Система достижений и бейджей
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Zap"
                      size={16}
                      className="mr-2 text-yellow-500"
                    />
                    Квест-формат с картой приключений
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Gamepad2"
                      size={16}
                      className="mr-2 text-yellow-500"
                    />
                    Интерактивные станции-челленджи
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Target"
                      size={16}
                      className="mr-2 text-yellow-500"
                    />
                    Творческие проекты и презентации
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">
                📚 Материалы УМК Spotlight 8:
              </h4>
              <p className="text-sm text-purple-800">
                Module 3a "That's the Life for Me" (p.42-43), Workbook
                exercises, Audio materials, Cultural Corner (Education systems),
                Grammar Bank (Present Simple vs Present Continuous), Progress
                Check 3
              </p>
            </div>

            <div className="mt-4 p-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">
                🎮 Методические особенности урока:
              </h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>
                  • Интеграция всех видов речевой деятельности через игровые
                  форматы
                </li>
                <li>
                  • Дифференцированный подход через разноуровневые задания на
                  станциях
                </li>
                <li>
                  • Формирующее оценивание через peer assessment и
                  self-reflection
                </li>
                <li>
                  • Развитие soft skills через командную работу и креативные
                  проекты
                </li>
                <li>
                  • Использование ИКТ для повышения мотивации и наглядности
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LessonPlan;
