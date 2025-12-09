export const WeatherSlide = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center animate-fade-in relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-ajr-green/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-[32rem] h-[32rem] bg-ajr-lime/10 rounded-full blur-3xl"></div>

      {/* Weather iframe */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <iframe
          src="https://weather-screen.web-apps-prod.wo-cloud.com/v2/screen/?locale=fr-BE&name=Bienne-lez-Happart&geoObjectKey=46865396&airPressureUnit=hpa&temperatureUnit=celsius&windUnit=kmh&systemOfMeasurement=metric&timeFormat=HH%3Amm"
          className="w-full h-full border-0"
          title="Météo Bienne-lez-Happart"
        />
      </div>
    </div>
  );
};
