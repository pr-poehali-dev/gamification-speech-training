import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface TitleSlideProps {
  title: string;
  subtitle?: string;
  content: {
    grade: string;
    duration: string;
    date: string;
  };
}

const TitleSlide = ({ title, subtitle, content }: TitleSlideProps) => {
  return (
    <div className="text-center text-white space-y-6">
      <div className="text-6xl mb-4">🎓✨</div>
      <h1 className="text-5xl font-bold mb-4">{title}</h1>
      {subtitle && <h2 className="text-2xl opacity-90 mb-8">{subtitle}</h2>}
      <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
        <Badge className="text-lg py-3 bg-white text-purple-800">
          <Icon name="Users" size={20} className="mr-2" />
          {content.grade}
        </Badge>
        <Badge className="text-lg py-3 bg-white text-purple-800">
          <Icon name="Clock" size={20} className="mr-2" />
          {content.duration}
        </Badge>
      </div>
      <p className="text-xl opacity-80 mt-6">{content.date}</p>
    </div>
  );
};

export default TitleSlide;
