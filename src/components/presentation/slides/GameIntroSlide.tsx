import { Card } from "@/components/ui/card";

interface GameIntroSlideProps {
  title: string;
  content: {
    elements: Array<{
      icon: string;
      title: string;
      desc: string;
    }>;
  };
}

const GameIntroSlide = ({ title, content }: GameIntroSlideProps) => {
  return (
    <div className="text-white space-y-8">
      <h1 className="text-4xl font-bold text-center mb-8">{title}</h1>
      <div className="grid grid-cols-2 gap-6">
        {content.elements.map((element, index) => (
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
};

export default GameIntroSlide;
