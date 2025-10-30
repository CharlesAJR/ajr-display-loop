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
    <div className="h-full w-full flex items-center justify-center bg-background px-32 py-16 animate-fade-in">
      {/* Content */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-muted/30 rounded-xl p-16 border border-border/50">
          <div className="text-center">
            <svg 
              className="w-16 h-16 text-ajr-violet mx-auto mb-8 opacity-40" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
            </svg>
            <p className="text-foreground text-4xl font-display leading-relaxed italic font-light mb-8">
              "{quote.text}"
            </p>
            <cite className="not-italic text-2xl font-display text-ajr-violet font-semibold">
              — {quote.author}
            </cite>
          </div>
        </div>
      </div>
    </div>
  );
};
