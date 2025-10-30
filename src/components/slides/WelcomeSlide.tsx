import welcomeBg from "@/assets/welcome-background.png";
export const WelcomeSlide = () => {
  return <div className="h-full w-full relative animate-fade-in">
      {/* Background image */}
      <img src={welcomeBg} alt="Atelier Jean-Regniers" className="absolute inset-0 w-full h-full object-cover" />
      
      {/* Subtle overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-16">
        <div className="text-center bg-white/80 backdrop-blur-md px-20 py-12 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.15)]">
          <h1 className="text-7xl font-display font-bold text-foreground leading-tight tracking-wide" style={{ textShadow: '0 2px 20px rgba(0, 0, 0, 0.08)' }}>
            BIENVENUE À L'ATELIER
            <br />
            JEAN REGNIERS
          </h1>
        </div>
      </div>
    </div>;
};