interface CanvasResponse {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  imgData: ImageData;
  pixels: Uint8ClampedArray;
  width: number;
  height: number;
}

class Canvas {
  lennner(selectorName: string, imgUrl = ""): Promise<CanvasResponse> | null {
    const canvas: HTMLCanvasElement | null = document.querySelector(
      selectorName
    );
    if (!canvas) return null;
    const context = canvas.getContext("2d");
    if (!context) return null;
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = imgUrl != "" ? imgUrl : "./lenna.png";
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0);
        const imgData = context.getImageData(0, 0, canvas.width, canvas.height);
        resolve({
          canvas: canvas,
          context: context,
          imgData: imgData,
          pixels: imgData.data,
          width: canvas.width,
          height: canvas.height
        });
      };
      img.onerror = () => reject(null);
    });
  }
}
export default Canvas;
