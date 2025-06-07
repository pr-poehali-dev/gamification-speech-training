import React, { useState } from "react";
import { tkuSlides } from "@/data/tkuSlides";
import SlideRenderer from "@/components/presentation/SlideRenderer";
import SlideNavigation from "@/components/presentation/SlideNavigation";

const TKUPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < tkuSlides.length - 1) {
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

  const currentSlideData = tkuSlides[currentSlide];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 ${currentSlideData.background}`} />

      {/* Tech Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20zm0 0c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 min-h-screen flex flex-col">
        {/* Header with tech indicators */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
            <div className="text-2xl">⚙️</div>
            <div className="text-sm opacity-75">
              ТКУ • Техническое конструирование
            </div>
          </div>
          <div className="flex items-center space-x-2 text-sm opacity-75">
            <span>
              Слайд {currentSlide + 1} из {tkuSlides.length}
            </span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Slide Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-6xl">
            <SlideRenderer slide={currentSlideData} />
          </div>
        </div>

        {/* Navigation */}
        <SlideNavigation
          currentSlide={currentSlide}
          totalSlides={tkuSlides.length}
          onPrevSlide={prevSlide}
          onNextSlide={nextSlide}
          onGoToSlide={goToSlide}
        />
      </div>
    </div>
  );
};

export default TKUPresentation;
