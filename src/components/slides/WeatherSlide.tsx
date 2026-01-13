import { useState, useEffect } from "react";

const WEATHER_URL = "https://weather-screen.web-apps-prod.wo-cloud.com/v2/screen/?locale=fr-BE&name=Bienne-lez-Happart&geoObjectKey=46865396&airPressureUnit=hpa&temperatureUnit=celsius&windUnit=kmh&systemOfMeasurement=metric&timeFormat=HH%3Amm";

export const WeatherSlide = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="h-full w-full flex items-center justify-center bg-transparent relative">
      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-background">
          <div className="animate-pulse text-foreground/60">Chargement météo...</div>
        </div>
      )}
      
      <iframe
        src={WEATHER_URL}
        className={`w-full h-full border-0 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        title="Météo Bienne-lez-Happart"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

// Preload the weather widget by creating a hidden iframe
export const preloadWeatherWidget = (): Promise<void> => {
  return new Promise((resolve) => {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = WEATHER_URL;
    iframe.onload = () => {
      document.body.removeChild(iframe);
      resolve();
    };
    iframe.onerror = () => {
      document.body.removeChild(iframe);
      resolve();
    };
    document.body.appendChild(iframe);
    
    // Timeout after 5 seconds
    setTimeout(() => {
      if (document.body.contains(iframe)) {
        document.body.removeChild(iframe);
      }
      resolve();
    }, 5000);
  });
};
