import { useEffect, useRef } from "react";

export const QuoteSlide = () => {
  useEffect(() => {
    // Set the widget type BEFORE loading the script
    (window as any).type = "day";

    // Load the widget script
    const script = document.createElement('script');
    script.src = 'https://citations.ouest-france.fr/js/web/export.js?v3';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

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
      <div className="max-w-6xl mx-auto relative z-10 bg-white/15 backdrop-blur-md rounded-3xl p-16 border border-white/30 shadow-2xl">
        <div className="text-center [&_#QuoteOFDay]:text-white [&_#QuoteOFDay_p]:!text-6xl [&_#QuoteOFDay_p]:!font-display [&_#QuoteOFDay_p]:!leading-tight [&_#QuoteOFDay_p]:!italic [&_#QuoteOFDay_p]:!font-light [&_#QuoteOFDay_p]:!mb-8 [&_#QuoteOFDay_cite]:!text-4xl [&_#QuoteOFDay_cite]:!font-display [&_#QuoteOFDay_cite]:!text-ajr-green-light [&_#QuoteOFDay_cite]:!font-medium [&_#QuoteOFDay_a]:!hidden">
          <div id="QuoteOFDay"></div>
        </div>
      </div>
    </div>
  );
};
