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
    <div className="h-full w-full flex items-center justify-center bg-background px-32 py-16 animate-fade-in">
      {/* Content */}
      <div className="max-w-5xl mx-auto w-full">
        <div className="bg-muted/30 rounded-xl p-12 border border-border/50">
          <h2 className="text-5xl font-display text-foreground mb-10 text-center font-semibold">
            Météo du jour
          </h2>
          <div className="bg-background rounded-lg p-6 border border-border/30">
            <div 
              ref={widgetRef}
              id="ww_60349a19f1af6" 
              className="w-full"
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
