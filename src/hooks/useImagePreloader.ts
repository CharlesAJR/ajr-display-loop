import { useState, useEffect } from "react";

export const useImagePreloader = (imageSources: string[]) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (imageSources.length === 0) {
      setImagesLoaded(true);
      return;
    }

    let loadedCount = 0;
    const totalImages = imageSources.length;

    const preloadImage = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          setProgress(Math.round((loadedCount / totalImages) * 100));
          resolve();
        };
        img.onerror = () => {
          loadedCount++;
          setProgress(Math.round((loadedCount / totalImages) * 100));
          resolve(); // Continue even if one image fails
        };
        img.src = src;
      });
    };

    Promise.all(imageSources.map(preloadImage)).then(() => {
      setImagesLoaded(true);
    });
  }, [imageSources]);

  return { imagesLoaded, progress };
};
