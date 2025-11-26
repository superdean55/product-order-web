export const resizeImage = (
  file: File,
  maxWidth: number = 500,
  maxHeight: number = 500,
  quality: number = 0.9
): Promise<Blob> => {
  
  return new Promise((resolve, reject) => {
    
    if (!file.type.startsWith('image/')) {
      return reject(new Error("the file is not an image."));
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      const img = document.createElement('img');
      img.onload = () => {
        let width = img.width;
        let height = img.height;
        if (width <= maxWidth && height <= maxHeight) {
          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height);
            canvas.toBlob((blob) => {
              if (blob) resolve(blob);
              else reject(new Error("Error when converting to Blob (without resize)."));
            }, file.type, quality);
          } else {
            reject(new Error("Canvas context is not available."));
          }
          return;
        }

        if (width > maxWidth) {
          height = height * (maxWidth / width);
          width = maxWidth;
        }

        if (height > maxHeight) {
          width = width * (maxHeight / height);
          height = maxHeight;
        }
        
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          canvas.toBlob((blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error("Error converting to Blob."));
            }
          }, file.type, quality);
        } else {
          reject(new Error("Canvas context is not available."));
        }
      };
      
      if (typeof e.target?.result === 'string') {
        img.src = e.target.result;
      }
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};