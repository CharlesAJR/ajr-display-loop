import { slidesConfig } from "@/config/slidesContent";

export const QuoteSlide = () => {
  const currentQuote = slidesConfig.quotes[Math.floor(Date.now() / 86400000) % slidesConfig.quotes.length];

  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-ajr-beige px-32 animate-fade-in">
      <div className="max-w-6xl text-center">
        <svg 
          className="w-32 h-32 mx-auto mb-12 text-ajr-violet opacity-20" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
        </svg>
        <p className="text-display-4 font-display text-foreground leading-tight mb-8 italic">
          "{currentQuote.text}"
        </p>
        <p className="text-6xl font-display text-muted-foreground">
          — {currentQuote.author}
        </p>
      </div>
    </div>
  );
};
