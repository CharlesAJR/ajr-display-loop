import ajrLogo from "@/assets/ajr-logo.png";

export const WelcomeSlide = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-ajr-green-light animate-fade-in">
      <img 
        src={ajrLogo} 
        alt="Logo AJR" 
        className="w-80 h-80 mb-12 animate-pulse-soft"
      />
      <h1 className="text-display-2 font-display text-white text-center tracking-wide">
        BIENVENUE À L'AJR 💚
      </h1>
    </div>
  );
};
