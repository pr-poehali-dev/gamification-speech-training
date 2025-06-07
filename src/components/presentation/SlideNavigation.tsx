import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevSlide: () => void;
  onNextSlide: () => void;
  onGoToSlide: (index: number) => void;
}

const SlideNavigation = ({
  currentSlide,
  totalSlides,
  onPrevSlide,
  onNextSlide,
  onGoToSlide,
}: SlideNavigationProps) => {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-black/50 backdrop-blur-sm rounded-full px-6 py-3">
      <Button
        onClick={onPrevSlide}
        disabled={currentSlide === 0}
        variant="ghost"
        size="sm"
        className="text-white hover:bg-white/20"
      >
        <Icon name="ChevronLeft" size={20} />
      </Button>

      <div className="flex space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onGoToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>

      <Button
        onClick={onNextSlide}
        disabled={currentSlide === totalSlides - 1}
        variant="ghost"
        size="sm"
        className="text-white hover:bg-white/20"
      >
        <Icon name="ChevronRight" size={20} />
      </Button>
    </div>
  );
};

export default SlideNavigation;
