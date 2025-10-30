interface GallerySlideProps {
  images: string[];
  title?: string;
}

export const GallerySlide = ({ images }: GallerySlideProps) => {
  return (
    <div className="h-full w-full flex items-center justify-center bg-background animate-fade-in p-4">
      <div className="grid grid-cols-3 grid-rows-2 gap-4 w-full h-full max-h-[90vh]">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden rounded-xl shadow-xl group"
          >
            <img
              src={image}
              alt={`Photo ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
};
