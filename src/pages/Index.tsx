import { useState, useEffect } from "react";
import { DisplaySlide } from "@/components/DisplaySlide";
import { Footer } from "@/components/Footer";
import { WelcomeSlide } from "@/components/slides/WelcomeSlide";
import { QuoteSlide } from "@/components/slides/QuoteSlide";
import { WeatherSlide } from "@/components/slides/WeatherSlide";
import { BirthdaysSlide } from "@/components/slides/BirthdaysSlide";
import { GallerySlide } from "@/components/slides/GallerySlide";
import { SafetySlide } from "@/components/slides/SafetySlide";
import { SafetyCounterSlide } from "@/components/slides/SafetyCounterSlide";
import { slidesConfig } from "@/config/slidesContent";

// Import images
import workshop1 from "@/assets/workshop-1.jpg";
import workshop2 from "@/assets/workshop-2.jpg";
import workshop3 from "@/assets/workshop-3.jpg";
import workshop4 from "@/assets/workshop-4.jpg";
import workshop5 from "@/assets/workshop-5.jpg";
import workshop6 from "@/assets/workshop-6.jpg";
import workshop7 from "@/assets/workshop-7.jpg";
import workshop8 from "@/assets/workshop-8.jpg";
import workshop9 from "@/assets/workshop-9.jpg";
import workshop10 from "@/assets/workshop-10.jpg";
import workshop11 from "@/assets/workshop-11.jpg";
import workshop12 from "@/assets/workshop-12.jpg";
import workshop13 from "@/assets/workshop-13.jpg";
import workshop14 from "@/assets/workshop-14.jpg";
import workshop15 from "@/assets/workshop-15.jpg";
import workshop16 from "@/assets/workshop-16.jpg";
import workshop17 from "@/assets/workshop-17.jpg";
import workshop18 from "@/assets/workshop-18.jpg";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const SLIDE_DURATION = slidesConfig.slideDuration * 1000;

  const gallery1 = [workshop1, workshop2, workshop3, workshop4, workshop5, workshop6];
  const gallery2 = [workshop7, workshop8, workshop9, workshop10, workshop11, workshop12];
  const gallery3 = [workshop13, workshop14, workshop15, workshop16, workshop17, workshop18];

  const slides = [
    <WelcomeSlide key="welcome" />,
    <BirthdaysSlide key="birthdays" />,
    <QuoteSlide key="quote" />,
    <GallerySlide key="gallery1" images={gallery1} title={slidesConfig.galleryTitles.gallery1} />,
    <SafetySlide key="safety" />,
    <SafetyCounterSlide key="counter" />,
    <WeatherSlide key="weather" />,
    <GallerySlide key="gallery2" images={gallery2} title={slidesConfig.galleryTitles.gallery2} />,
  ];

  // Auto-rotation des slides
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, [slides.length, isPaused, SLIDE_DURATION]);

  // Navigation clavier
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
          // Slide suivante
          setCurrentSlide((prev) => (prev + 1) % slides.length);
          break;
        case "ArrowLeft":
        case "ArrowUp":
          // Slide précédente
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
          break;
        case " ":
        case "p":
          // Pause/Play (Barre espace ou P)
          e.preventDefault();
          setIsPaused((prev) => !prev);
          break;
        case "Home":
          // Retour au début
          setCurrentSlide(0);
          break;
        case "End":
          // Aller à la fin
          setCurrentSlide(slides.length - 1);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [slides.length]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-background">
      {/* Slides */}
      <div className="absolute inset-0 pb-32">
        {slides.map((slide, index) => (
          <DisplaySlide key={index} isActive={currentSlide === index} duration={SLIDE_DURATION}>
            {slide}
          </DisplaySlide>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
