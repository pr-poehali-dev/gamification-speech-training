import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface ActivitySlideProps {
  title: string;
  content: {
    instruction: string;
    task?: string;
    rules: string[];
    examples?: string[];
    materials?: string;
    points: string;
  };
}

const ActivitySlide = ({ title, content }: ActivitySlideProps) => {
  return (
    <div className="text-white space-y-6">
      <h1 className="text-4xl font-bold text-center mb-8">{title}</h1>
      <Card className="bg-white/90 text-gray-900 p-6">
        <h3 className="text-2xl font-bold mb-4 text-center">
          {content.instruction}
        </h3>
        {content.task && (
          <p className="text-lg mb-4 text-center font-semibold">
            {content.task}
          </p>
        )}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold mb-3">Rules:</h4>
            <ul className="space-y-2">
              {content.rules.map((rule: string, index: number) => (
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
            {content.examples && (
              <div>
                <h4 className="font-bold mb-3">Examples:</h4>
                <div className="flex flex-wrap gap-2">
                  {content.examples.map((example: string, index: number) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {example}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            {content.materials && (
              <div className="mt-4">
                <h4 className="font-bold mb-2">Materials:</h4>
                <p className="text-sm text-gray-600">{content.materials}</p>
              </div>
            )}
          </div>
        </div>
        <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
          <p className="font-bold text-yellow-800">{content.points}</p>
        </div>
      </Card>
    </div>
  );
};

export default ActivitySlide;
