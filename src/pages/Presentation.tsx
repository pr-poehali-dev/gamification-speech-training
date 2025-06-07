import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
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
      background:
        "bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700",
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
          {
            icon: "🎯",
            title: "Achievement Badges",
            desc: "Значки достижений",
          },
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

    // Slide 6: Station 1 - Vocabulary Hunt
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
        materials:
          "Hidden vocabulary cards, treasure chest, mind map templates",
      },
      background: "bg-gradient-to-br from-yellow-500 to-orange-600",
    },

    // Slide 7: Station 2 - Grammar Detective
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

    // Slide 8: Station 3 - Drama Activity
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

    // Slide 9: Station 4 - Design Challenge
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

    // Slide 10: Assessment Criteria
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

    // Slide 11: Homework
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

    // Slide 12: Reflection
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
          {
            level: "Master Detective",
            fingers: "5",
            desc: "Excellent mastery",
          },
        ],
      },
      background: "bg-gradient-to-br from-teal-500 to-cyan-600",
    },

    // Slide 13: Thank You
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

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const renderSlideContent = (slide: any) => {
    switch (slide.type) {
      case "title":
        return (
          <div className="text-center text-white space-y-6">
            <div className="text-6xl mb-4">🎓✨</div>
            <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
            <h2 className="text-2xl opacity-90 mb-8">{slide.subtitle}</h2>
            <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
              <Badge className="text-lg py-3 bg-white text-purple-800">
                <Icon name="Users" size={20} className="mr-2" />
                {slide.content.grade}
              </Badge>
              <Badge className="text-lg py-3 bg-white text-purple-800">
                <Icon name="Clock" size={20} className="mr-2" />
                {slide.content.duration}
              </Badge>
            </div>
            <p className="text-xl opacity-80 mt-6">{slide.content.date}</p>
          </div>
        );

      case "objectives":
        return (
          <div className="text-white space-y-6">
            <h1 className="text-4xl font-bold text-center mb-8">
              {slide.title}
            </h1>
            <Card className="bg-white/90 text-gray-900 p-6">
              <h3 className="text-2xl font-bold mb-4 text-center text-emerald-800">
                {slide.content.main}
              </h3>
              <div className="grid gap-4">
                {slide.content.practical.map(
                  (objective: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon
                        name="Target"
                        size={20}
                        className="text-emerald-600 flex-shrink-0 mt-1"
                      />
                      <p className="text-lg">{objective}</p>
                    </div>
                  ),
                )}
              </div>
            </Card>
          </div>
        );

      case "game-intro":
        return (
          <div className="text-white space-y-8">
            <h1 className="text-4xl font-bold text-center mb-8">
              {slide.title}
            </h1>
            <div className="grid grid-cols-2 gap-6">
              {slide.content.elements.map((element: any, index: number) => (
                <Card
                  key={index}
                  className="bg-white/90 text-gray-900 p-6 text-center"
                >
                  <div className="text-4xl mb-4">{element.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{element.title}</h3>
                  <p className="text-gray-700">{element.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        );

      case "vocabulary":
        return (
          <div className="text-white space-y-6">
            <h1 className="text-4xl font-bold text-center mb-8">
              {slide.title}
            </h1>
            <div className="grid grid-cols-2 gap-4">
              {slide.content.words.map((item: any, index: number) => (
                <Card key={index} className="bg-white/90 text-gray-900 p-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xl font-bold text-blue-800">
                      {item.word}
                    </span>
                    <Badge variant="secondary">{item.translation}</Badge>
                  </div>
                  <p className="text-sm italic text-gray-600">
                    "{item.example}"
                  </p>
                </Card>
              ))}
            </div>
          </div>
        );

      case "grammar":
        return (
          <div className="text-white space-y-6">
            <h1 className="text-4xl font-bold text-center mb-8">
              {slide.title}
            </h1>
            <Card className="bg-white/90 text-gray-900 p-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">
                  Timeline of Events
                </h3>
                <div className="bg-purple-100 p-4 rounded-lg">
                  <p className="text-lg font-mono">{slide.content.timeline}</p>
                </div>
              </div>
              <div className="grid gap-6">
                {slide.content.tenses.map((tense: any, index: number) => (
                  <div
                    key={index}
                    className="border-l-4 border-purple-500 pl-4"
                  >
                    <h4 className="text-xl font-bold text-purple-800">
                      {tense.name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Form:{" "}
                      <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                        {tense.form}
                      </span>
                    </p>
                    <p className="mb-2">{tense.use}</p>
                    <p className="italic text-purple-700">"{tense.example}"</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        );

      case "activity":
        return (
          <div className="text-white space-y-6">
            <h1 className="text-4xl font-bold text-center mb-8">
              {slide.title}
            </h1>
            <Card className="bg-white/90 text-gray-900 p-6">
              <h3 className="text-2xl font-bold mb-4 text-center">
                {slide.content.instruction}
              </h3>
              {slide.content.task && (
                <p className="text-lg mb-4 text-center font-semibold">
                  {slide.content.task}
                </p>
              )}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3">Rules:</h4>
                  <ul className="space-y-2">
                    {slide.content.rules.map((rule: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Icon
                          name="CheckCircle"
                          size={16}
                          className="text-green-600 flex-shrink-0 mt-1"
                        />
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  {slide.content.examples && (
                    <div>
                      <h4 className="font-bold mb-3">Examples:</h4>
                      <div className="flex flex-wrap gap-2">
                        {slide.content.examples.map(
                          (example: string, index: number) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="text-sm"
                            >
                              {example}
                            </Badge>
                          ),
                        )}
                      </div>
                    </div>
                  )}
                  {slide.content.materials && (
                    <div className="mt-4">
                      <h4 className="font-bold mb-2">Materials:</h4>
                      <p className="text-sm text-gray-600">
                        {slide.content.materials}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
                <p className="font-bold text-yellow-800">
                  {slide.content.points}
                </p>
              </div>
            </Card>
          </div>
        );

      case "assessment":
        return (
          <div className="text-white space-y-6">
            <h1 className="text-4xl font-bold text-center mb-8">
              {slide.title}
            </h1>
            <Card className="bg-white/90 text-gray-900 p-6">
              <h3 className="text-2xl font-bold mb-6 text-center">
                {slide.content.total}
              </h3>
              <div className="grid gap-4 mb-6">
                {slide.content.criteria.map((criteria: any, index: number) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 bg-orange-50 rounded-lg"
                  >
                    <div>
                      <h4 className="font-bold">{criteria.category}</h4>
                      <p className="text-sm text-gray-600">{criteria.desc}</p>
                    </div>
                    <Badge variant="secondary">{criteria.points}</Badge>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg">
                <h4 className="font-bold mb-3">Система оценок:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {slide.content.grades.map((grade: any, index: number) => (
                    <span
                      key={index}
                      className={`font-semibold ${grade.color}`}
                    >
                      {grade.range} = "{grade.grade}"
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        );

      case "homework":
        return (
          <div className="text-white space-y-6">
            <h1 className="text-4xl font-bold text-center mb-8">
              {slide.title}
            </h1>
            <Card className="bg-white/90 text-gray-900 p-6">
              <h3 className="text-2xl font-bold mb-4 text-center text-indigo-800">
                {slide.content.task}
              </h3>
              <p className="text-lg mb-6 text-center">
                {slide.content.instruction}
              </p>
              <div className="grid gap-4 mb-6">
                <h4 className="font-bold">Requirements:</h4>
                {slide.content.requirements.map(
                  (req: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon
                        name="CheckSquare"
                        size={16}
                        className="text-indigo-600 flex-shrink-0 mt-1"
                      />
                      <span>{req}</span>
                    </div>
                  ),
                )}
              </div>
              <div className="p-4 bg-indigo-100 rounded-lg">
                <p className="font-bold text-indigo-800">
                  {slide.content.bonus}
                </p>
                <p className="text-sm text-indigo-700 mt-2">
                  Materials: {slide.content.materials}
                </p>
              </div>
            </Card>
          </div>
        );

      case "reflection":
        return (
          <div className="text-white space-y-6">
            <h1 className="text-4xl font-bold text-center mb-8">
              {slide.title}
            </h1>
            <Card className="bg-white/90 text-gray-900 p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">
                    Reflection Questions:
                  </h3>
                  <ul className="space-y-3">
                    {slide.content.questions.map(
                      (question: string, index: number) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Icon
                            name="HelpCircle"
                            size={16}
                            className="text-teal-600 flex-shrink-0 mt-1"
                          />
                          <span>{question}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Show Your Level:</h3>
                  <div className="space-y-3">
                    {slide.content.levels.map((level: any, index: number) => (
                      <div key={index} className="p-3 bg-teal-50 rounded-lg">
                        <h4 className="font-bold text-teal-800">
                          {level.level}
                        </h4>
                        <p className="text-sm">
                          Show {level.fingers} fingers • {level.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        );

      case "thanks":
        return (
          <div className="text-center text-white space-y-8">
            <div className="text-6xl mb-4">🏆🎉</div>
            <h1 className="text-5xl font-bold mb-6">{slide.title}</h1>
            <Card className="bg-white/90 text-gray-900 p-8 max-w-3xl mx-auto">
              <p className="text-2xl mb-6">{slide.content.message}</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {slide.content.achievements.map(
                  (achievement: string, index: number) => (
                    <Badge
                      key={index}
                      className="text-lg py-3 bg-yellow-500 text-white"
                    >
                      <Icon name="Award" size={20} className="mr-2" />
                      {achievement}
                    </Badge>
                  ),
                )}
              </div>
              <p className="text-xl font-bold text-orange-600">
                {slide.content.nextLesson}
              </p>
            </Card>
          </div>
        );

      default:
        return <div>Slide content</div>;
    }
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 ${currentSlideData.background}`} />

      {/* Content */}
      <div className="relative z-10 p-8 min-h-screen flex flex-col">
        {/* Slide Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-6xl">
            {renderSlideContent(currentSlideData)}
          </div>
        </div>

        {/* Navigation */}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-black/50 backdrop-blur-sm rounded-full px-6 py-3">
          <Button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20"
          >
            <Icon name="ChevronLeft" size={20} />
          </Button>

          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>

          <Button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20"
          >
            <Icon name="ChevronRight" size={20} />
          </Button>
        </div>

        {/* Slide Counter */}
        <div className="fixed top-6 right-6 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
          <span className="text-white font-medium">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>

        {/* Timer (optional) */}
        <div className="fixed top-6 left-6 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
          <div className="flex items-center space-x-2 text-white">
            <Icon name="Clock" size={16} />
            <span className="font-medium">45 мин</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
