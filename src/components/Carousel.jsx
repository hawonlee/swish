import React, { useState, useEffect } from 'react';
import arrow from '/arrow.svg'
import swish1 from '/swish1.png'
import swish2 from '/swish2.png'
import swish3 from '/swish3.png'

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Slide data (you can replace this with images or other content)
    const slides = [
        { id: 1, content: swish1 },
        { id: 2, content: swish2 },
        { id: 3, content: swish3 },
    ];

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentSlide((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    // Auto-slide effect
    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 4000); // change slide every 3 seconds

        // Clear interval on component unmount
        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentSlide((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="flex flex-col w-full h-full max-w-lg mx-auto p-4 pb-6">
            <div className="flex flex-row h-full justify-center pt-2">
                <div className="overflow-hidden">
                    <div
                        className="flex h-full transition-transform duration-500"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {slides.map((slide) => (
                            <div
                                key={slide.id}
                                className="w-full flex-shrink-0 flex justify-center items-center"
                            >
                                <div className="p-20">
                                    <img src={slide.content} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Left Button */}
            <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-black p-2"
            >
                <img src={arrow} className="w-6" alt="Previous" />
            </button>

            {/* Right Button */}
            <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black p-2"
            >
                <img src={arrow} className="w-6 rotate-180" alt="Next" />
            </button>



            {/* Indicators */}
            <div className="flex justify-center space-x-1 pt-2">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`w-1.5 h-1.5 rounded-full ${index === currentSlide ? 'bg-gray-800' : 'bg-gray-400'
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
