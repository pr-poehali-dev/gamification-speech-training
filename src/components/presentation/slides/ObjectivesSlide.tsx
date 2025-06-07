import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ObjectivesSlideProps {
  title: string;
  content: {
    main: string;
    practical: string[];
  };
}

const ObjectivesSlide = ({ title, content }: ObjectivesSlideProps) => {
  return (
    <div className="text-white space-y-6">
      <h1 className="text-4xl font-bold text-center mb-8">{title}</h1>
      <Card className="bg-white/90 text-gray-900 p-6">
        <h3 className="text-2xl font-bold mb-4 text-center text-emerald-800">
          {content.main}
        </h3>
        <div className="grid gap-4">
          {content.practical.map((objective: string, index: number) => (
            <div key={index} className="flex items-start space-x-3">
              <Icon
                name="Target"
                size={20}
                className="text-emerald-600 flex-shrink-0 mt-1"
              />
              <p className="text-lg">{objective}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ObjectivesSlide;
