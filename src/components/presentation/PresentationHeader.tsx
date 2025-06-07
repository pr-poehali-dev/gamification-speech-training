import Icon from "@/components/ui/icon";

interface PresentationHeaderProps {
  currentSlide: number;
  totalSlides: number;
}

const PresentationHeader = ({
  currentSlide,
  totalSlides,
}: PresentationHeaderProps) => {
  return (
    <>
      {/* Slide Counter */}
      <div className="fixed top-6 right-6 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
        <span className="text-white font-medium">
          {currentSlide + 1} / {totalSlides}
        </span>
      </div>

      {/* Timer */}
      <div className="fixed top-6 left-6 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
        <div className="flex items-center space-x-2 text-white">
          <Icon name="Clock" size={16} />
          <span className="font-medium">45 мин</span>
        </div>
      </div>
    </>
  );
};

export default PresentationHeader;
