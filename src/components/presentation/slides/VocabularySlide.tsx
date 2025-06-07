import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface VocabularySlideProps {
  title: string;
  content: {
    words: Array<{
      word: string;
      translation: string;
      example: string;
    }>;
  };
}

const VocabularySlide = ({ title, content }: VocabularySlideProps) => {
  return (
    <div className="text-white space-y-6">
      <h1 className="text-4xl font-bold text-center mb-8">{title}</h1>
      <div className="grid grid-cols-2 gap-4">
        {content.words.map((item, index) => (
          <Card key={index} className="bg-white/90 text-gray-900 p-4">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xl font-bold text-blue-800">
                {item.word}
              </span>
              <Badge variant="secondary">{item.translation}</Badge>
            </div>
            <p className="text-sm italic text-gray-600">"{item.example}"</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VocabularySlide;
