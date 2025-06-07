import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { fgosLessonStages } from "@/data/lessonStages";

interface LessonStagesProps {
  activeStage: string;
  setActiveStage: (stage: string) => void;
}

const LessonStages: React.FC<LessonStagesProps> = ({
  activeStage,
  setActiveStage,
}) => {
  return (
    <Tabs value={activeStage} onValueChange={setActiveStage} className="w-full">
      <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 mb-6 h-auto text-xs">
        <TabsTrigger value="organizational" className="font-semibold p-2">
          🎯 Мотивация
        </TabsTrigger>
        <TabsTrigger value="actualization" className="font-semibold p-2">
          📋 Актуализация
        </TabsTrigger>
        <TabsTrigger value="new-material" className="font-semibold p-2">
          📚 Новый материал
        </TabsTrigger>
        <TabsTrigger value="primary-practice" className="font-semibold p-2">
          🔧 Закрепление
        </TabsTrigger>
        <TabsTrigger value="application" className="font-semibold p-2">
          🎮 Применение
        </TabsTrigger>
        <TabsTrigger value="control" className="font-semibold p-2">
          ✅ Контроль
        </TabsTrigger>
        <TabsTrigger value="reflection" className="font-semibold p-2">
          🤔 Рефлексия
        </TabsTrigger>
        <TabsTrigger value="homework" className="font-semibold p-2">
          🏠 Домашнее задание
        </TabsTrigger>
      </TabsList>

      {Object.entries(fgosLessonStages).map(([key, stage]) => (
        <TabsContent key={key} value={key}>
          <Card className="border-2 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-t-lg">
              <div className="flex justify-between items-center flex-wrap gap-2">
                <CardTitle className="text-xl md:text-2xl">
                  {stage.title}
                </CardTitle>
                <div className="flex gap-2">
                  <Badge
                    variant="secondary"
                    className="text-sm px-3 py-1 bg-white text-indigo-800"
                  >
                    <Icon name="Clock" size={14} className="mr-1" />
                    {stage.duration}
                  </Badge>
                </div>
              </div>
              <p className="text-sm opacity-90 mt-2">
                <Icon name="Target" size={16} className="mr-1 inline" />
                Цель этапа: {stage.pedagogicalGoal}
              </p>
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
                      <Badge variant="outline" className="text-sm px-3 py-1">
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
                          <Icon name="Gamepad2" size={16} className="mr-2" />
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
  );
};

export default LessonStages;
