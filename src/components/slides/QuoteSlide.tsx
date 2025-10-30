import { slidesConfig } from "@/config/slidesContent";

export const QuoteSlide = () => {
  // Get day of year to select a different quote each day
  const getDayOfYear = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  };

  const dayOfYear = getDayOfYear();
  const quoteIndex = dayOfYear % slidesConfig.quotes.length;
  const quote = slidesConfig.quotes[quoteIndex];

  return (
    <div className="h-full w-full flex items-center justify-center bg-background px-16 animate-fade-in relative overflow-hidden">
      {/* Decorative quote marks background */}
      <svg 
        className="absolute top-20 left-20 w-[32rem] h-[32rem] text-ajr-violet opacity-5" 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
      </svg>
      <svg 
        className="absolute bottom-20 right-20 w-[32rem] h-[32rem] text-ajr-fuchsia opacity-5 rotate-180" 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
      </svg>

      {/* Content */}
      <div className="max-w-6xl mx-auto relative z-10 bg-muted/30 backdrop-blur-md rounded-3xl p-16 border border-border/50 shadow-2xl">
        <div className="text-center">
          <p className="text-foreground text-8xl font-display leading-tight italic font-light mb-8">
            "{quote.text}"
          </p>
          <cite className="not-italic text-5xl font-display text-ajr-violet font-medium">
            — {quote.author}
          </cite>
        </div>
      </div>
    </div>
  );
};
