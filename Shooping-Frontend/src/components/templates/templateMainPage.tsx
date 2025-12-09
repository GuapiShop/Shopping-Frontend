import React, { useState } from "react";

const TemplateMainPage: React.FC = () => {

  const images = [
    "/carousel-img2.jpg",
    "/carousel-img3.jpg",
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex space-x-4 mx-auto mb-4 justify-center">
        {/*Left Image 1*/}
        <img 
            src="/carousel-img2.jpg" 
            alt="Main Visual" 
            className="h-12 min-h-70 min-w-80" 
        />
      
        {/* Carousel */}
        <div 
            className="w-97 relative overflow-hidden"
        >
            
            {/* Slides container */}
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        className="w-3xl h-70 object-cover"
                    />
                ))}
            </div>

            {/* Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-2 rounded-full"
            >
                ❮
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-2 rounded-full"
            >
                ❯
            </button>
        </div>

        {/*Right Image*/}
        <img 
            src="/carousel-img3.jpg" 
            alt="Main Visual" 
            className="h-12 min-h-70 min-w-80" 
        />
    </div>
  );
};

export default TemplateMainPage;
