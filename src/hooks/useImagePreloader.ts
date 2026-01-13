import { useState, useEffect } from "react";

export const useImagePreloader = (imageSources: string[], preloadCallbacks?: (() => Promise<void>)[]) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalItems = imageSources.length + (preloadCallbacks?.length || 0);
    
    if (totalItems === 0) {
      setImagesLoaded(true);
      return;
    }

    let loadedCount = 0;

    const updateProgress = () => {
      loadedCount++;
      setProgress(Math.round((loadedCount / totalItems) * 100));
    };

    const preloadImage = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          updateProgress();
          resolve();
        };
        img.onerror = () => {
          updateProgress();
          resolve(); // Continue even if one image fails
        };
        img.src = src;
      });
    };

    const allPromises = [
      ...imageSources.map(preloadImage),
      ...(preloadCallbacks?.map(cb => cb().then(updateProgress).catch(updateProgress)) || [])
    ];

    Promise.all(allPromises).then(() => {
      setImagesLoaded(true);
    });
  }, [imageSources, preloadCallbacks]);

  return { imagesLoaded, progress };
};
