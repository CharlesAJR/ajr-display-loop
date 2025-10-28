import welcomeBg from "@/assets/welcome-background.png";
export const WelcomeSlide = () => {
  return <div className="h-full w-full relative animate-fade-in">
      {/* Background image */}
      <img src={welcomeBg} alt="Atelier Jean-Regniers" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        
        
      </div>
    </div>;
};