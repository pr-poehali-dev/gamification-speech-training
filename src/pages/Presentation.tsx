import React, { useState } from "react";
import { slides } from "@/data/slides";
import SlideRenderer from "@/components/presentation/SlideRenderer";
import SlideNavigation from "@/components/presentation/SlideNavigation";
import PresentationHeader from "@/components/presentation/PresentationHeader";

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 ${currentSlideData.background}`} />

      {/* Content */}
      <div className="relative z-10 p-8 min-h-screen flex flex-col">
        {/* Slide Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-6xl">
            <SlideRenderer slide={currentSlideData} />
          </div>
        </div>

        {/* Navigation */}
        <SlideNavigation
          currentSlide={currentSlide}
          totalSlides={slides.length}
          onPrevSlide={prevSlide}
          onNextSlide={nextSlide}
          onGoToSlide={goToSlide}
        />

        {/* Header Elements */}
        <PresentationHeader
          currentSlide={currentSlide}
          totalSlides={slides.length}
        />
      </div>
    </div>
  );
};

export default Presentation;
