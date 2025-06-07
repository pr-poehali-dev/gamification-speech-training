import React, { useState } from "react";
import LessonHeader from "@/components/lesson-plan/LessonHeader";
import LessonStages from "@/components/lesson-plan/LessonStages";
import PlannedResults from "@/components/lesson-plan/PlannedResults";
import AssessmentCriteria from "@/components/lesson-plan/AssessmentCriteria";
import UMKInformation from "@/components/lesson-plan/UMKInformation";
import { lessonData } from "@/data/lessonData";

const LessonPlan = () => {
  const [activeStage, setActiveStage] = useState("organizational");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        <LessonHeader
          title={lessonData.title}
          subtitle={lessonData.subtitle}
          grade={lessonData.grade}
          duration={lessonData.duration}
          goal={lessonData.goal}
        />

        <LessonStages
          activeStage={activeStage}
          setActiveStage={setActiveStage}
        />

        <PlannedResults />

        <AssessmentCriteria />

        <UMKInformation />
      </div>
    </div>
  );
};

export default LessonPlan;
