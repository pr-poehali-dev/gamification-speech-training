import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { plannedResults } from "@/data/plannedResults";

const PlannedResults: React.FC = () => {
  return (
    <Card className="mt-8 border-2 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-t-lg">
        <CardTitle className="flex items-center">
          <Icon name="Target" size={20} className="mr-2" />
          Планируемые результаты урока
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        {/* Subject Results */}
        <Card className="border-2 border-blue-200 bg-blue-50">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-blue-800 flex items-center">
              <Icon name="BookOpen" size={18} className="mr-2" />
              {plannedResults.subject.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Знания:</h4>
                <ul className="text-sm space-y-1">
                  {plannedResults.subject.knowledge.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Icon
                        name="CheckCircle"
                        size={14}
                        className="mr-2 mt-0.5 text-green-600 flex-shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Умения:</h4>
                <ul className="text-sm space-y-1">
                  {plannedResults.subject.skills.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Icon
                        name="CheckCircle"
                        size={14}
                        className="mr-2 mt-0.5 text-green-600 flex-shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Metasubject Results */}
        <Card className="border-2 border-purple-200 bg-purple-50">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-purple-800 flex items-center">
              <Icon name="Brain" size={18} className="mr-2" />
              {plannedResults.metasubject.title} (УУД)
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-purple-900 mb-2">
                  Регулятивные УУД:
                </h4>
                <ul className="text-sm space-y-1">
                  {plannedResults.metasubject.regulatory.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Icon
                        name="CheckCircle"
                        size={14}
                        className="mr-2 mt-0.5 text-green-600 flex-shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-900 mb-2">
                  Познавательные УУД:
                </h4>
                <ul className="text-sm space-y-1">
                  {plannedResults.metasubject.cognitive.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Icon
                        name="CheckCircle"
                        size={14}
                        className="mr-2 mt-0.5 text-green-600 flex-shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-900 mb-2">
                  Коммуникативные УУД:
                </h4>
                <ul className="text-sm space-y-1">
                  {plannedResults.metasubject.communicative.map(
                    (item, index) => (
                      <li key={index} className="flex items-start">
                        <Icon
                          name="CheckCircle"
                          size={14}
                          className="mr-2 mt-0.5 text-green-600 flex-shrink-0"
                        />
                        <span>{item}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Personal Results */}
        <Card className="border-2 border-orange-200 bg-orange-50">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-orange-800 flex items-center">
              <Icon name="Heart" size={18} className="mr-2" />
              Личностные результаты
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <ul className="text-sm space-y-2">
              {plannedResults.personal.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Icon
                    name="CheckCircle"
                    size={14}
                    className="mr-2 mt-0.5 text-green-600 flex-shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default PlannedResults;
