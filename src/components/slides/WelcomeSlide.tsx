import welcomeBg from "@/assets/welcome-background.png";
import ajrLogoColor from "@/assets/ajr-logo.png";

export const WelcomeSlide = () => {
  return <div className="h-full w-full relative animate-fade-in overflow-hidden" style={{ margin: '-3.2%', width: '106.4%', height: '106.4%' }}>
      {/* Background image */}
      <img src={welcomeBg} alt="Atelier Jean-Regniers" className="absolute inset-0 w-full h-full object-cover scale-[1.20]" />
      
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/55" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-16">
        <div className="text-center flex flex-col items-center">
          {/* Colored logo prominently displayed */}
          <img 
            src={ajrLogoColor} 
            alt="AJR Logo" 
            className="h-44 w-auto mb-8 drop-shadow-xl"
          />
          
          <p className="text-4xl font-display font-bold tracking-[0.4em] mb-4 text-white/90" style={{
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 255, 255, 0.3)'
          }}>
            BIENVENUE À L'ATELIER
          </p>
          
          <h1 className="text-[10rem] font-campton font-bold leading-[0.9] tracking-wider text-white" style={{
            textShadow: '0 4px 12px rgba(0, 0, 0, 0.6), 0 0 40px rgba(255, 255, 255, 0.2)'
          }}>
            JEAN<br/>REGNIERS
          </h1>
        </div>
      </div>
    </div>;
};