import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { lessonData } from "@/data/lessonData";

const UMKInformation: React.FC = () => {
  return (
    <Card className="mt-8 border-2 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-t-lg">
        <CardTitle className="flex items-center">
          <Icon name="BookOpen" size={20} className="mr-2" />
          Учебно-методический комплекс (УМК) Spotlight 8
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-4 text-indigo-900 flex items-center">
              <Icon name="Layers" size={18} className="mr-2" />
              Ключевая лексика (Module 3a):
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {lessonData.vocabulary.map((word) => (
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
            <h4 className="font-semibold mb-4 text-indigo-900 flex items-center">
              <Icon name="Gamepad2" size={18} className="mr-2" />
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
                <Icon name="Star" size={16} className="mr-2 text-yellow-500" />
                Система достижений и бейджей
              </li>
              <li className="flex items-center">
                <Icon name="Zap" size={16} className="mr-2 text-yellow-500" />
                Квест-формат с картой приключений
              </li>
              <li className="flex items-center">
                <Icon
                  name="Target"
                  size={16}
                  className="mr-2 text-yellow-500"
                />
                Интерактивные станции-челленджи
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg">
          <h4 className="font-semibold text-purple-900 mb-2">
            📚 Материалы УМК Spotlight 8:
          </h4>
          <p className="text-sm text-purple-800">
            Module 3 "School Days & School Ways" (p.42-43), Workbook exercises,
            Audio materials, Cultural Corner (Education systems), Grammar Bank
            (Past Perfect, Past Perfect Continuous), Progress Check 3
          </p>
        </div>

        <div className="mt-4 p-4 bg-gradient-to-r from-gray-100 to-blue-100 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
            <Icon name="Award" size={18} className="mr-2" />
            Соответствие образовательным стандартам:
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-800">
                <Icon
                  name="CheckCircle"
                  size={16}
                  className="mr-2 text-green-600 inline"
                />
                ФГОС ООО (Приказ Минпросвещения России от 31.05.2021 № 287)
              </p>
              <p className="text-gray-800">
                <Icon
                  name="CheckCircle"
                  size={16}
                  className="mr-2 text-green-600 inline"
                />
                Примерная рабочая программа основного общего образования
              </p>
            </div>
            <div>
              <p className="text-gray-800">
                <Icon
                  name="CheckCircle"
                  size={16}
                  className="mr-2 text-green-600 inline"
                />
                Федеральный перечень учебников (Приказ № 858 от 21.09.2022)
              </p>
              <p className="text-gray-800">
                <Icon
                  name="CheckCircle"
                  size={16}
                  className="mr-2 text-green-600 inline"
                />
                Уровень A2+ по шкале CEFR
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UMKInformation;
