interface GallerySlideProps {
  images: string[];
  title?: string;
}
export const GallerySlide = ({
  images,
  title
}: GallerySlideProps) => {
  return <div className="h-full w-full flex items-center justify-center bg-background animate-fade-in">
      <div className="max-w-7xl max-h-[80vh] flex flex-col items-center px-12 py-8 gap-0 shadow-none rounded-none">
        {title && <h2 className="text-5xl font-display font-bold text-foreground mb-6">
            {title}
          </h2>}
        <div className="grid grid-cols-3 grid-rows-2 gap-3 w-full">
          {images.map((image, index) => <div key={index} className="relative overflow-hidden rounded-xl shadow-[0_4px_25px_rgba(0,0,0,0.1)] group h-48">
              <img src={image} alt={`Photo ${index + 1}`} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>)}
        </div>
      </div>
    </div>;
};