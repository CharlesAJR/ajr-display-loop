import { slidesConfig } from "@/config/slidesContent";

export const QuoteSlide = () => {
  const currentQuote = slidesConfig.quotes[Math.floor(Date.now() / 86400000) % slidesConfig.quotes.length];

  return (
    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-ajr-violet to-ajr-fuchsia px-16 animate-fade-in relative overflow-hidden">
      {/* Decorative quote marks background */}
      <svg 
        className="absolute top-20 left-20 w-96 h-96 text-white opacity-5" 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
      </svg>
      <svg 
        className="absolute bottom-20 right-20 w-96 h-96 text-white opacity-5 rotate-180" 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
      </svg>

      {/* Content */}
      <div className="max-w-6xl mx-auto relative z-10 bg-white/10 backdrop-blur-sm rounded-3xl p-16 border border-white/20 shadow-2xl">
        <div className="text-center space-y-8">
          <p className="text-7xl font-display text-white leading-tight italic font-light">
            {currentQuote.text}
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-ajr-green-light"></div>
            <p className="text-5xl font-display text-ajr-green-light font-medium">
              {currentQuote.author}
            </p>
            <div className="h-px w-16 bg-ajr-green-light"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
