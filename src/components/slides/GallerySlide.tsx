interface GallerySlideProps {
  images: string[];
  title?: string;
}

export const GallerySlide = ({ images, title }: GallerySlideProps) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-background animate-fade-in p-12 pb-40">
      {title && (
        <h2 className="text-6xl font-display font-bold text-foreground mb-8">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-3 grid-rows-2 gap-4 w-full h-full max-h-[78vh]">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.1)] group"
          >
            <img
              src={image}
              alt={`Photo ${index + 1}`}
              className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                index === 5 ? 'object-top' : ''
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
};
