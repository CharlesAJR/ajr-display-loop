interface GallerySlideProps {
  images: string[];
  title?: string;
}

export const GallerySlide = ({ images, title = "Nos Ateliers" }: GallerySlideProps) => {
  return (
    <div className="h-full w-full flex flex-col bg-background animate-fade-in px-16 py-12">
      {title && (
        <h2 className="text-display-4 font-display text-foreground mb-8 text-center">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-3 grid-rows-2 gap-8 flex-1">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden rounded-3xl shadow-2xl group"
          >
            <img
              src={image}
              alt={`Atelier ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
};
