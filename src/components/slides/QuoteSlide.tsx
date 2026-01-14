import { slidesConfig } from "@/config/slidesContent";
import { SlideBackground } from "@/components/SlideBackground";

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
    <SlideBackground>
      <div className="h-full w-full flex items-center justify-center animate-fade-in relative overflow-hidden">
        {/* Decorative quote marks background */}
        <svg 
          className="absolute top-20 left-20 w-[24rem] h-[24rem] text-white opacity-[0.05]" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
        </svg>
        <svg 
          className="absolute bottom-20 right-20 w-[24rem] h-[24rem] text-white opacity-[0.05] rotate-180" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
        </svg>

        {/* Content - redimensionné */}
        <div className="max-w-6xl max-h-[75vh] mx-auto relative z-10 px-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-16 border border-white/20">
            <div className="text-center">
              <p className="text-white font-serif leading-tight italic font-normal mb-8" style={{ fontSize: '3.3rem' }}>
                "{quote.text}"
              </p>
              <cite className="not-italic font-display text-amber-200 font-semibold" style={{ fontSize: '2.0625rem' }}>
                — {quote.author}
              </cite>
            </div>
          </div>
        </div>
      </div>
    </SlideBackground>
  );
};
