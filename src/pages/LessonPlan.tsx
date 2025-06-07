import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Users, Target, CheckCircle } from "lucide-react";

const LessonPlan = () => {
  const [activeStage, setActiveStage] = useState("organization");

  const lessonData = {
    title: "School, School Life, School Uniform, Subjects and Attitudes",
    grade: "8 класс",
    type: "Комбинированный урок",
    duration: "45 минут",
    objectives: {
      educational: "Формирование лексических навыков по теме «Школа»",
      developing: "Развитие навыков говорения, аудирования и чтения",
      upbringing: "Воспитание позитивного отношения к учебе",
    },
  };

  const stages = {
    organization: {
      title: "1. Организационный этап",
      duration: "7-10 минут",
      activities: [
        {
          step: "Приветствие и организация класса",
          teacher: "Good morning, class! How are you today?",
          students: "Отвечают на приветствие",
          time: "2 мин",
          materials: "Доска, презентация",
        },
        {
          step: "Постановка цели урока",
          teacher:
            "Today we're going to talk about school life. What comes to your mind when you hear 'school'?",
          students: "Высказывают ассоциации со словом 'school'",
          time: "3 мин",
          materials: "Mind map на доске",
        },
        {
          step: "Мотивация учебной деятельности",
          teacher:
            "We'll learn new vocabulary, discuss school subjects and share opinions about school uniform.",
          students: "Слушают, задают вопросы",
          time: "2-3 мин",
          materials: "Слайды с задачами урока",
        },
      ],
    },
    main: {
      title: "2. Основной этап",
      duration: "30-35 минут",
      activities: [
        {
          step: "Первичное усвоение новых знаний",
          teacher:
            "Let's learn new vocabulary about school subjects and school life",
          students: "Повторяют слова, работают с карточками",
          time: "8 мин",
          materials: "Vocabulary cards, audio",
        },
        {
          step: "Первичная проверка понимания",
          teacher: "Match the subjects with their descriptions",
          students: "Выполняют задание на соотнесение",
          time: "5 мин",
          materials: "Worksheet, интерактивная доска",
        },
        {
          step: "Первичное закрепление",
          teacher:
            "Work in pairs. Discuss your favorite subjects and explain why you like them",
          students: "Работают в парах, обсуждают предметы",
          time: "10 мин",
          materials: "Speaking cards",
        },
        {
          step: "Контроль усвоения",
          teacher: "Listen to the dialogue and answer the questions",
          students: "Слушают аудио и отвечают на вопросы",
          time: "7 мин",
          materials: "Audio recording, question sheets",
        },
        {
          step: "Обсуждение ошибок и коррекция",
          teacher: "Let's check your answers and correct any mistakes",
          students: "Проверяют ответы, исправляют ошибки",
          time: "5 мин",
          materials: "Answer key",
        },
      ],
    },
    conclusion: {
      title: "3. Заключительный этап",
      duration: "5-8 минут",
      activities: [
        {
          step: "Подведение итогов урока",
          teacher:
            "What new words have we learned today? What was the most interesting part?",
          students: "Называют новые слова, делятся впечатлениями",
          time: "3 мин",
          materials: "Vocabulary list",
        },
        {
          step: "Домашнее задание",
          teacher:
            "Write a short paragraph about your school day using new vocabulary",
          students: "Записывают домашнее задание",
          time: "2 мин",
          materials: "Student books",
        },
        {
          step: "Оценивание и рефлексия",
          teacher: "Rate your work today from 1 to 5. What was difficult?",
          students: "Оценивают свою работу, высказывают мнения",
          time: "2-3 мин",
          materials: "Evaluation cards",
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Card className="mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-indigo-900 mb-2">
              Технологическая карта урока английского языка
            </CardTitle>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Badge variant="outline" className="text-lg px-4 py-2">
                <Target className="w-4 h-4 mr-2" />
                {lessonData.grade}
              </Badge>
              <Badge variant="outline" className="text-lg px-4 py-2">
                <Clock className="w-4 h-4 mr-2" />
                {lessonData.duration}
              </Badge>
              <Badge variant="outline" className="text-lg px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                {lessonData.type}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-semibold mb-4 text-center">
              "{lessonData.title}"
            </h3>

            {/* Objectives */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <Card className="bg-green-50 border-green-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-green-800">
                    Образовательная цель
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{lessonData.objectives.educational}</p>
                </CardContent>
              </Card>
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-blue-800">
                    Развивающая цель
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{lessonData.objectives.developing}</p>
                </CardContent>
              </Card>
              <Card className="bg-purple-50 border-purple-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-purple-800">
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
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="organization" className="text-sm">
              1. Организационный
            </TabsTrigger>
            <TabsTrigger value="main" className="text-sm">
              2. Основной
            </TabsTrigger>
            <TabsTrigger value="conclusion" className="text-sm">
              3. Заключительный
            </TabsTrigger>
          </TabsList>

          {Object.entries(stages).map(([key, stage]) => (
            <TabsContent key={key} value={key}>
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-2xl">{stage.title}</CardTitle>
                    <Badge variant="secondary" className="text-lg px-3 py-1">
                      <Clock className="w-4 h-4 mr-1" />
                      {stage.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {stage.activities.map((activity, index) => (
                    <Card
                      key={index}
                      className="border-l-4 border-l-indigo-500"
                    >
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg text-indigo-900">
                            {activity.step}
                          </CardTitle>
                          <Badge variant="outline">{activity.time}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="grid md:grid-cols-2 gap-4 mb-3">
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <h4 className="font-semibold text-blue-800 mb-2">
                              Деятельность учителя:
                            </h4>
                            <p className="text-sm italic">
                              "{activity.teacher}"
                            </p>
                          </div>
                          <div className="bg-green-50 p-3 rounded-lg">
                            <h4 className="font-semibold text-green-800 mb-2">
                              Деятельность учащихся:
                            </h4>
                            <p className="text-sm">{activity.students}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
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
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Дополнительные материалы и ресурсы</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Ключевые слова урока:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Mathematics",
                    "History",
                    "Chemistry",
                    "Physics",
                    "Literature",
                    "PE",
                    "Art",
                    "Music",
                    "School uniform",
                    "Homework",
                    "Timetable",
                  ].map((word) => (
                    <Badge key={word} variant="secondary" className="text-xs">
                      {word}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Типы заданий:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Matching exercises</li>
                  <li>• Pair work discussions</li>
                  <li>• Listening comprehension</li>
                  <li>• Vocabulary practice</li>
                  <li>• Opinion sharing</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LessonPlan;
