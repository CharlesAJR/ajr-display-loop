import { useEffect } from "react";

export const WeatherSlide = () => {
  useEffect(() => {
    // Load the weather widget script
    const script = document.createElement('script');
    script.src = 'https://app3.weatherwidget.org/js/?id=ww_260894198f3af';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-background animate-fade-in px-16">
      <h2 className="text-display-3 font-display text-foreground mb-12 text-center">
        Météo du jour
      </h2>
      <div className="flex items-center justify-center w-full max-w-6xl">
        <div 
          id="ww_260894198f3af" 
          className="w-full scale-125 transform"
          dangerouslySetInnerHTML={{
            __html: `<a href="https://weatherwidget.org/" id="ww_260894198f3af_u" target="_blank">Html weather widget</a>`
          }}
          style={{
            // @ts-ignore - custom attributes for weather widget
            v: '1.3',
            loc: 'id',
            a: '{"t":"responsive","lang":"fr","sl_lpl":1,"ids":["wl8308"],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","sl_tof":"3"}'
          }}
        />
      </div>
    </div>
  );
};
