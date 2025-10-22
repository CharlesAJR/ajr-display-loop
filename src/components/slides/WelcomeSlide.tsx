import ajrLogo from "@/assets/ajr-logo.png";
import welcomeBg from "@/assets/welcome-background.png";

export const WelcomeSlide = () => {
  return (
    <div className="h-full w-full relative animate-fade-in">
      {/* Background image */}
      <img 
        src={welcomeBg} 
        alt="Atelier Jean-Regniers" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Logo en haut à gauche */}
      <img 
        src={ajrLogo} 
        alt="Logo AJR" 
        className="absolute top-12 left-12 w-48 h-48 z-10"
      />
      
      {/* Texte centré */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <p className="text-6xl font-body tracking-wider mb-4 text-foreground">
          BIENVENUE À L'ATELIER
        </p>
        <h1 className="text-[160px] font-display font-black tracking-tight text-foreground leading-none">
          JEAN-REGNIERS
        </h1>
      </div>
    </div>
  );
};
