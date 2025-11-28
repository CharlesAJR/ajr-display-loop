import welcomeBg from "@/assets/welcome-background.png";
export const WelcomeSlide = () => {
  return <div className="h-full w-full relative animate-fade-in">
      {/* Background image */}
      <img src={welcomeBg} alt="Atelier Jean-Regniers" className="absolute inset-0 w-full h-full object-cover" />
      
      {/* Subtle overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-16">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Main message */}
          <div className="space-y-6">
            <h1 className="text-8xl font-campton font-bold leading-tight tracking-wide animate-scale-in" style={{
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.7), 0 0 50px rgba(255, 255, 255, 0.3)',
              animationDelay: '0.2s',
              animationFillMode: 'backwards'
            }}>
              Bonne fête de la
            </h1>
            <h2 className="text-[10rem] font-campton font-bold leading-none tracking-wider animate-scale-in" style={{
              color: '#FFD700',
              textShadow: '0 0 40px rgba(255, 215, 0, 0.8), 0 4px 20px rgba(0, 0, 0, 0.9)',
              animationDelay: '0.4s',
              animationFillMode: 'backwards'
            }}>
              Saint-Éloi
            </h2>
            <p className="text-5xl font-display tracking-[0.2em] text-foreground/90 animate-fade-in" style={{
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
              animationDelay: '0.6s',
              animationFillMode: 'backwards'
            }}>
              à tout le monde !
            </p>
          </div>
        </div>
      </div>
    </div>;
};