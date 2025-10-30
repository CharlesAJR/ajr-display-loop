import { useEffect, useRef } from "react";

export const WeatherSlide = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set custom attributes on the widget container
    if (widgetRef.current) {
      widgetRef.current.setAttribute('v', '1.3');
      widgetRef.current.setAttribute('loc', 'id');
      widgetRef.current.setAttribute('a', '{"t":"responsive","lang":"en","sl_lpl":1,"ids":["wl8308"],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722"}');
    }

    // Load the weather widget script
    const script = document.createElement('script');
    script.src = 'https://app3.weatherwidget.org/js/?id=ww_60349a19f1af6';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="h-full w-full flex items-center justify-center bg-background px-16 animate-fade-in relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <svg 
        className="absolute top-32 right-32 w-72 h-72 text-white opacity-5" 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"/>
      </svg>

      {/* Content */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-muted/30 backdrop-blur-md rounded-3xl p-12 border border-border/50 shadow-2xl">
          <h2 className="text-8xl font-display text-white mb-12 text-center font-bold tracking-tight">
            Météo du jour
          </h2>
          <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
            <div 
              ref={widgetRef}
              id="ww_60349a19f1af6" 
              className="w-full scale-110 transform"
              dangerouslySetInnerHTML={{
                __html: `<a href="https://weatherwidget.org/" id="ww_60349a19f1af6_u" target="_blank">Html weather widget</a>`
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
