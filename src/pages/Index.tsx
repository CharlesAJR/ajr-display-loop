import { useState, useEffect, useMemo } from "react";
import { DisplaySlide } from "@/components/DisplaySlide";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import { WelcomeSlide } from "@/components/slides/WelcomeSlide";
import { KurarayWelcomeSlide } from "@/components/slides/KurarayWelcomeSlide";
import { QuoteSlide } from "@/components/slides/QuoteSlide";
import { WeatherSlide, preloadWeatherWidget } from "@/components/slides/WeatherSlide";
import { BirthdaysSlide } from "@/components/slides/BirthdaysSlide";
import { GallerySlide } from "@/components/slides/GallerySlide";
import { SafetySlide } from "@/components/slides/SafetySlide";
import { SafetyCounterSlide } from "@/components/slides/SafetyCounterSlide";
import { QualityPolicySlide } from "@/components/slides/QualityPolicySlide";
import TeamworkSlide from "@/components/slides/TeamworkSlide";
import { slidesConfig } from "@/config/slidesContent";
import { useImagePreloader } from "@/hooks/useImagePreloader";

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

// New images
import new1 from "@/assets/new-1.jpg";
import new2 from "@/assets/new-2.jpg";
import new3 from "@/assets/new-3.jpg";
import new4 from "@/assets/new-4.jpg";
import new5 from "@/assets/new-5.jpg";
import new6 from "@/assets/new-6.jpg";
import new7 from "@/assets/new-7.jpg";
import new8 from "@/assets/new-8.jpg";
import new9 from "@/assets/new-9.jpg";
import new10 from "@/assets/new-10.jpg";
import new11 from "@/assets/new-11.jpg";
import new12 from "@/assets/new-12.jpg";

// Background images
import welcomeBg from "@/assets/welcome-background.png";
import ajrLogo from "@/assets/ajr-logo.png";
import safetyWorkers from "@/assets/safety-workers.png";
import safetyCounter from "@/assets/safety-counter-reference.png";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const SLIDE_DURATION = slidesConfig.slideDuration * 1000;
  
  // All images to preload
  const allImages = useMemo(() => [
    // Workshop images
    workshop1, workshop2, workshop3, workshop4, workshop5, workshop6,
    workshop7, workshop8, workshop9, workshop10, workshop11, workshop12,
    workshop13, workshop14, workshop15, workshop16, workshop17, workshop18,
    // New images
    new1, new2, new3, new4, new5, new6,
    new7, new8, new9, new10, new11, new12,
    // Background and logos
    welcomeBg, ajrLogo, safetyWorkers, safetyCounter
  ], []);

  // Callbacks to preload widgets
  const preloadCallbacks = useMemo(() => [preloadWeatherWidget], []);

  const { imagesLoaded, progress } = useImagePreloader(allImages, preloadCallbacks);

  const gallery1 = [workshop1, workshop2, workshop3, workshop4, workshop5, workshop6];
  const gallery2 = [workshop7, workshop8, workshop9, workshop10, workshop11, workshop12];
  const gallery3 = [workshop13, workshop14, workshop15, workshop16, workshop17, workshop18];
  const galleryNew1 = [new1, new2, new3, new4, new5, new6];
  const galleryNew2 = [new7, new8, new9, new10, new11, new12];
  
  // Positions par défaut pour galerie 2 (photos verticales, centrer sur le haut pour voir les visages)
  const gallery2DefaultPositions = [
    { x: 50, y: 15 }, // new-7: ligne de production
    { x: 50, y: 15 }, // new-8: personne avec boîte, voir le visage
    { x: 50, y: 15 }, // new-9: personne avec bouteille, voir le visage
    { x: 50, y: 50 }, // new-10
    { x: 50, y: 50 }, // new-11
    { x: 50, y: 50 }, // new-12
  ];

  // Check if today is January 23rd (Kuraray visit day)
  // TODO: Remove "|| true" after testing - this forces the slide to show
  const isKurarayDay = useMemo(() => {
    const today = new Date();
    return today.getMonth() === 0 && today.getDate() === 23 || true; // January = 0
  }, []);

  const slides = useMemo(() => {
    const baseSlides = [
      <WelcomeSlide key="welcome" />,
      // Add Kuraray welcome slide only on January 23rd
      ...(isKurarayDay ? [<KurarayWelcomeSlide key="kuraray" />] : []),
      <QualityPolicySlide key="quality" />,
      <TeamworkSlide key="teamwork" />,
      <SafetyCounterSlide key="counter" />,
      <BirthdaysSlide key="birthdays" />,
      <SafetySlide key="safety" />,
      <WeatherSlide key="weather" />,
      <QuoteSlide key="quote" />,
      <GallerySlide key="gallery-new1" images={galleryNew1} title="gallery1" showTitle={false} />,
      <GallerySlide key="gallery-new2" images={galleryNew2} title="gallery2" showTitle={false} defaultPositions={gallery2DefaultPositions} />
    ];
    return baseSlides;
  }, [isKurarayDay, galleryNew1, galleryNew2, gallery2DefaultPositions]);


  // Auto-rotation des slides
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
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
          setCurrentSlide(prev => (prev + 1) % slides.length);
          break;
        case "ArrowLeft":
        case "ArrowUp":
          // Slide précédente
          setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
          break;
        case " ":
        case "p":
          // Pause/Play (Barre espace ou P)
          e.preventDefault();
          setIsPaused(prev => !prev);
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
  // Show loading screen until all images are loaded
  if (!imagesLoaded) {
    return <LoadingScreen progress={progress} />;
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-background">
      {/* Conteneur pour centrer et réduire le contenu (protection TV overscan) */}
      <div className="absolute inset-0 pb-32 flex items-center justify-center z-10">
        <div className="w-full h-full relative" style={{ transform: 'scale(0.94)' }}>
          {/* Keep all slides mounted but only show active one */}
          {slides.map((slide, index) => (
            <div 
              key={index}
              style={{ 
                display: index === currentSlide ? 'block' : 'none',
                position: 'absolute',
                inset: 0
              }}
            >
              <DisplaySlide isActive={index === currentSlide}>
                {slide}
              </DisplaySlide>
            </div>
          ))}
        </div>
      </div>

      {/* Barre de progression - juste au-dessus du footer */}
      <div className="fixed bottom-[145px] left-0 right-0 h-2 bg-foreground/10 z-[60]">
        <div
          key={currentSlide}
          style={{ animation: isPaused ? 'none' : `progress-bar ${SLIDE_DURATION}ms linear` }}
          className="h-full bg-ajr-violet-soft backdrop-blur-md origin-left shadow-lg bg-[#8a62ba]"
        />
      </div>

      {/* Footer - non affecté par le scale */}
      <Footer />
    </div>
  );
};

export default Index;