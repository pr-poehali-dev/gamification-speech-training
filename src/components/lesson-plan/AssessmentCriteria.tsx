import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { assessmentCriteria } from "@/data/plannedResults";

const AssessmentCriteria: React.FC = () => {
  return (
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
  );
};

export default AssessmentCriteria;
