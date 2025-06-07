import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { gameElements } from "@/data/lessonData";

interface LessonHeaderProps {
  title: string;
  subtitle: string;
  grade: string;
  duration: string;
  goal: string;
}

const LessonHeader: React.FC<LessonHeaderProps> = ({
  title,
  subtitle,
  grade,
  duration,
  goal,
}) => {
  return (
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
            {grade}
          </Badge>
          <Badge
            variant="secondary"
            className="text-lg px-4 py-2 bg-white text-purple-800"
          >
            <Icon name="Clock" size={16} className="mr-2" />
            {duration}
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
          <h3 className="text-2xl font-bold text-indigo-900 mb-2">"{title}"</h3>
          <p className="text-lg text-gray-600">{subtitle}</p>
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

        {/* Goal */}
        <Card className="bg-blue-50 border-blue-200 border-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-blue-800 flex items-center">
              <Icon name="Target" size={18} className="mr-2" />
              Цель урока
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-blue-900">{goal}</p>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default LessonHeader;
