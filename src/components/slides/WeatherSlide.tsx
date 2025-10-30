import { useEffect, useRef } from "react";

export const WeatherSlide = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set custom attributes on the widget container
    if (widgetRef.current) {
      widgetRef.current.setAttribute('v', '1.3');
      widgetRef.current.setAttribute('loc', 'id');
      widgetRef.current.setAttribute('a', '{"t":"horizontal","lang":"fr","sl_lpl":1,"ids":["wl8308"],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"image","cl_font":"rgba(255,255,255,1)","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","el_nme":3}');
    }

    // Check if script already exists
    const existingScript = document.querySelector('script[src="https://app3.weatherwidget.org/js/?id=ww_4428319a2904e"]');
    
    if (!existingScript) {
      // Load the weather widget script only if it doesn't exist
      const script = document.createElement('script');
      script.src = 'https://app3.weatherwidget.org/js/?id=ww_4428319a2904e';
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Trigger widget reinitialisation if script already exists
      if ((window as any).__weatherwidget_init) {
        (window as any).__weatherwidget_init[0].display.show();
      }
    }
  }, []);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-background animate-fade-in relative overflow-hidden -mt-12">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-ajr-green/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-[32rem] h-[32rem] bg-ajr-lime/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center relative z-10 space-y-12">
        <h2 className="text-9xl font-display text-foreground text-center font-bold tracking-tight">
          Météo du jour
        </h2>
        <div className="flex items-center justify-center">
          <div 
            ref={widgetRef}
            id="ww_4428319a2904e" 
            className="scale-[2.0] transform origin-center"
            dangerouslySetInnerHTML={{
              __html: `<a href="https://weatherwidget.org/" id="ww_4428319a2904e_u" target="_blank">Free weather widget</a>`
            }}
          />
        </div>
      </div>
    </div>
  );
};
