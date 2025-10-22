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

const SLIDE_DURATION = 12000; // 12 seconds per slide

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const gallery1 = [workshop1, workshop2, workshop3, workshop4, workshop5, workshop6];
  const gallery2 = [workshop7, workshop8, workshop9, workshop10, workshop11, workshop12];
  const gallery3 = [workshop13, workshop14, workshop15, workshop16, workshop17, workshop18];

  const slides = [
    <WelcomeSlide key="welcome" />,
    <QuoteSlide key="quote" />,
    <WeatherSlide key="weather" />,
    <BirthdaysSlide key="birthdays" />,
    <GallerySlide key="gallery1" images={gallery1} title="Nos Ateliers" />,
    <SafetySlide key="safety" />,
    <SafetyCounterSlide key="counter" />,
    <GallerySlide key="gallery2" images={gallery2} title="Notre Équipe" />,
    <GallerySlide key="gallery3" images={gallery3} title="Au Quotidien" />,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-background">
      {/* Slides */}
      <div className="absolute inset-0 pb-32">
        {slides.map((slide, index) => (
          <DisplaySlide key={index} isActive={currentSlide === index}>
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
