import politiqueQualiteImage from "@/assets/politique-qualite.jpg";

export const QualityPolicySlide = () => {
  return (
    <div className="h-full w-full flex items-center justify-center animate-fade-in bg-white">
      <img 
        src={politiqueQualiteImage} 
        alt="Politique Interne AJR - Tous acteurs de la réussite" 
        className="h-full w-auto max-w-full object-contain"
      />
    </div>
  );
};
