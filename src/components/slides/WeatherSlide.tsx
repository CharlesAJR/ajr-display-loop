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
    <div className="h-full w-full flex flex-col items-center justify-center bg-background animate-fade-in px-16">
      <h2 className="text-display-3 font-display text-foreground mb-12 text-center">
        Météo du jour
      </h2>
      <div className="flex items-center justify-center w-full max-w-6xl">
        <div 
          ref={widgetRef}
          id="ww_60349a19f1af6" 
          className="w-full scale-125 transform"
          dangerouslySetInnerHTML={{
            __html: `<a href="https://weatherwidget.org/" id="ww_60349a19f1af6_u" target="_blank">Html weather widget</a>`
          }}
        />
      </div>
    </div>
  );
};
