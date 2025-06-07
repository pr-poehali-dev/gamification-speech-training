import { SlideContent } from "@/data/slides";
import TitleSlide from "./slides/TitleSlide";
import ObjectivesSlide from "./slides/ObjectivesSlide";
import GameIntroSlide from "./slides/GameIntroSlide";
import VocabularySlide from "./slides/VocabularySlide";
import ActivitySlide from "./slides/ActivitySlide";

interface SlideRendererProps {
  slide: SlideContent;
}

const SlideRenderer = ({ slide }: SlideRendererProps) => {
  switch (slide.type) {
    case "title":
      return (
        <TitleSlide
          title={slide.title}
          subtitle={slide.subtitle}
          content={slide.content}
        />
      );

    case "objectives":
      return <ObjectivesSlide title={slide.title} content={slide.content} />;

    case "game-intro":
      return <GameIntroSlide title={slide.title} content={slide.content} />;

    case "vocabulary":
      return <VocabularySlide title={slide.title} content={slide.content} />;

    case "activity":
      return <ActivitySlide title={slide.title} content={slide.content} />;

    default:
      return (
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-8">{slide.title}</h1>
          <div>Slide content for type: {slide.type}</div>
        </div>
      );
  }
};

export default SlideRenderer;
