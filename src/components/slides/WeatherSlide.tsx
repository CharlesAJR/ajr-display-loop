export const WeatherSlide = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-background animate-fade-in px-32">
      <h2 className="text-display-3 font-display text-foreground mb-16 text-center">
        Météo du jour
      </h2>
      <div className="flex items-center justify-center w-full">
        <iframe 
          src="https://widget.weawow.com/en/weather/?source=js&location=Binche&autoresize=1&layout=wide" 
          className="w-[800px] h-[400px] border-0 scale-150 transform"
          title="Météo Binche"
        />
      </div>
    </div>
  );
};
