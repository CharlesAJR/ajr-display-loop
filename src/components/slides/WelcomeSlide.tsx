import ajrLogo from "@/assets/ajr-logo.png";
import welcomeBg from "@/assets/welcome-background.png";
export const WelcomeSlide = () => {
  return <div className="h-full w-full relative animate-fade-in">
      {/* Background image */}
      <img src={welcomeBg} alt="Atelier Jean-Regniers" className="absolute inset-0 w-full h-full object-cover" />
      
      {/* Logo en haut à gauche */}
      <img src={ajrLogo} alt="Logo AJR" className="absolute top-12 left-12 w-48 h-48 z-10" />
      
      {/* Texte centré */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        
        
      </div>
    </div>;
};