export const WeatherSlide = () => {
  return (
    <div className="h-full w-full flex items-center justify-center bg-transparent">
      <iframe
        src="https://weather-screen.web-apps-prod.wo-cloud.com/v2/screen/?locale=fr-BE&name=Bienne-lez-Happart&geoObjectKey=46865396&airPressureUnit=hpa&temperatureUnit=celsius&windUnit=kmh&systemOfMeasurement=metric&timeFormat=HH%3Amm"
        className="w-full h-full border-0"
        title="Météo Bienne-lez-Happart"
      />
    </div>
  );
};
