import welcomeBg from "@/assets/welcome-background.png";
export const WelcomeSlide = () => {
  return <div className="h-full w-full relative animate-fade-in">
      {/* Background image */}
      <img src={welcomeBg} alt="Atelier Jean-Regniers" className="absolute inset-0 w-full h-full object-cover" />
      
      {/* Subtle overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-16">
        <div className="text-center">
          <p className="text-3xl font-sans font-normal tracking-[0.3em] mb-4" style={{
          textShadow: '0 2px 8px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 255, 255, 0.3)'
        }}>
            BIENVENUE À L'ATELIER
          </p>
          <h1 className="text-[10rem] font-serif font-bold leading-none tracking-tight" style={{
          textShadow: '0 4px 12px rgba(0, 0, 0, 0.6), 0 0 40px rgba(255, 255, 255, 0.2)'
        }}>JEAN
REGNIERS</h1>
        </div>
      </div>
    </div>;
};