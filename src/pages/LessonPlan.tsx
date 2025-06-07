import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Clock,
  Users,
  Target,
  CheckCircle,
  Trophy,
  Star,
  Gamepad2,
  Zap,
} from "lucide-react";

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
          step: "Quest Map Reveal",
          teacher:
            "Here's our quest map! We'll travel through 5 stations to unlock the secret of the perfect school day. Are you ready for the adventure?",
          students: "Изучают карту квеста, обсуждают стратегию прохождения",
          time: "2-4 мин",
          materials: "Large quest map poster, Spotlight 8 vocabulary cards",
          gameElement: "🗺️ Визуальная карта квеста с чекпоинтами и призами",
        },
      ],
    },
    main: {
      title: "🎮 2. Основной этап",
      duration: "30-32 минуты",
      activities: [
        {
          step: "Station 1: Vocabulary Treasure Hunt",
          teacher:
            "Find the hidden words around the classroom! Each word from Spotlight 8 p.42-43 is worth different points. Biology=10pts, Geography=15pts, etc.",
          students:
            "Ищут спрятанные карточки со словами, составляют mind map предметов",
          time: "6 мин",
          materials:
            "Hidden vocabulary cards (Spotlight 8 p.42), treasure chest, timer",
          gameElement:
            "💎 Редкие слова стоят больше баллов. Бонус +20 за полную коллекцию",
        },
        {
          step: "Station 2: Grammar Detective Work",
          teacher:
            "Solve the case! Read these Spotlight texts and find examples of Present Simple vs Present Continuous. Each correct find = clue points!",
          students:
            "Анализируют тексты из учебnika, находят грамматические структуры",
          time: "7 мин",
          materials:
            "Spotlight 8 texts (p.42-43), detective magnifying glasses, clue sheets",
          gameElement:
            "🔍 За каждый найденный пример +5 баллов, за объяснение правила +10",
        },
        {
          step: "Station 3: School Subjects Battle Royale",
          teacher:
            "Time for the ultimate subjects showdown! Teams compete in describing subjects using only actions and sounds - no words allowed!",
          students:
            "Показывают предметы через пантомиму и звуки, отгадывают предметы других команд",
          time: "8 мин",
          materials: "Subject cards from Spotlight 8, buzzer, action cards",
          gameElement:
            "⚡ Быстрые ответы дают x2 баллы. Творческие показы получают бонус +15",
        },
        {
          step: "Station 4: Perfect School Day Design Challenge",
          teacher:
            "Create the ultimate school timetable! Use Spotlight vocabulary to design a dream school day. Present it in 2 minutes max!",
          students:
            "Создают идеальное школьное расписание, презентуют креативные идеи",
          time: "8 мин",
          materials:
            "Design sheets, Spotlight 8 vocabulary bank, colored markers, timer",
          gameElement:
            "🎨 Самый креативный проект получает Golden Schedule Award (+25 баллов)",
        },
        {
          step: "Station 5: Quick-Fire Knowledge Quiz",
          teacher:
            "Final challenge! Lightning round about education systems. Answer fast to earn maximum points for your team!",
          students:
            "Отвечают на быстрые вопросы о школьных системах разных стран",
          time: "3 мин",
          materials:
            "Quiz buzzer system, questions from Spotlight 8 Cultural Corner",
          gameElement:
            "⚡ Первый правильный ответ = 10 баллов, второй = 5 баллов",
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
            "Let's crown our Education Champions! What was the most surprising thing you learned about school life today?",
          students:
            "Празднуют победы, делятся открытиями урока, получают награды",
          time: "3 мин",
          materials:
            "Champion certificates, vocabulary medals, reflection cards",
          gameElement:
            "🥇 Команды получают титулы: Education Masters, Vocabulary Wizards, Grammar Gurus",
        },
        {
          step: "Quest Completion & Homework Mission",
          teacher:
            "Your homework quest: Create a mini-documentary about your perfect school day using today's vocabulary. Film it or make a comic strip!",
          students:
            "Принимают творческое домашнее задание, выбирают формат выполнения",
          time: "2 мин",
          materials:
            "Homework quest cards, vocabulary checklists, creative format options",
          gameElement:
            "📱 Лучшие работы станут частью School Life Exhibition на следующем уроке",
        },
        {
          step: "Level Up Assessment",
          teacher:
            "Rate your adventure today! Show me your level: Beginner (1-2 fingers), Explorer (3-4), or Master Detective (5)!",
          students: "Оценивают свой прогресс через игровую систему уровней",
          time: "2 мин",
          materials: "Level badges, self-assessment cards, progress tracker",
          gameElement:
            "⭐ Каждый получает персональный achievement badge по итогам урока",
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Card className="mb-8 border-2 border-purple-200 shadow-lg">
          <CardHeader className="text-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-t-lg">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Gamepad2 className="w-8 h-8" />
              <CardTitle className="text-3xl font-bold">
                Технологическая карта урока английского языка
              </CardTitle>
              <Trophy className="w-8 h-8" />
            </div>
            <p className="text-lg opacity-90">с элементами геймификации</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Badge
                variant="secondary"
                className="text-lg px-4 py-2 bg-white text-purple-800"
              >
                <Target className="w-4 h-4 mr-2" />
                {lessonData.grade}
              </Badge>
              <Badge
                variant="secondary"
                className="text-lg px-4 py-2 bg-white text-purple-800"
              >
                <Clock className="w-4 h-4 mr-2" />
                {lessonData.duration}
              </Badge>
              <Badge
                variant="secondary"
                className="text-lg px-4 py-2 bg-white text-purple-800"
              >
                <Users className="w-4 h-4 mr-2" />
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
                    <Star className="w-4 h-4 mr-2" />
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
                    <Zap className="w-4 h-4 mr-2" />
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
                    <Trophy className="w-4 h-4 mr-2" />
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
                      <Clock className="w-4 h-4 mr-1" />
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
                              <Users className="w-4 h-4 mr-2" />
                              Деятельность учителя:
                            </h4>
                            <p className="text-sm italic text-blue-900">
                              "{activity.teacher}"
                            </p>
                          </div>
                          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                            <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                              <Target className="w-4 h-4 mr-2" />
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
                              <Gamepad2 className="w-4 h-4 mr-2" />
                              Игровой элемент:
                            </h4>
                            <p className="text-sm text-orange-900">
                              {activity.gameElement}
                            </p>
                          </div>
                        )}

                        <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                          <CheckCircle className="w-4 h-4" />
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

        {/* Additional Resources */}
        <Card className="mt-8 border-2 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center">
              <Star className="w-5 h-5 mr-2" />
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
                    <Trophy className="w-4 h-4 mr-2 text-yellow-500" />
                    Командные соревнования с рейтингом
                  </li>
                  <li className="flex items-center">
                    <Star className="w-4 h-4 mr-2 text-yellow-500" />
                    Система достижений и бейджей
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-yellow-500" />
                    Квест-формат с картой приключений
                  </li>
                  <li className="flex items-center">
                    <Gamepad2 className="w-4 h-4 mr-2 text-yellow-500" />
                    Интерактивные станции-челленджи
                  </li>
                  <li className="flex items-center">
                    <Target className="w-4 h-4 mr-2 text-yellow-500" />
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
                Grammar Bank (Present Simple vs Present Continuous)
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LessonPlan;
