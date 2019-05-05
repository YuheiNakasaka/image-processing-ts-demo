import KMeans from "@/libs/k_means";
class PixelArtFilter {
  public kernelSize: number;
  public colorSize: number;
  public features: number[][];

  constructor(kernelSize = 3, colorSize = 4) {
    this.kernelSize = kernelSize;
    this.colorSize = colorSize;
    this.features = [];
  }

  apply(imgData: ImageData): ImageData {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) return imgData;
    let resultImageData = context.createImageData(imgData.width, imgData.height);

    this.getFeatures(imgData, imgData.width, imgData.height);
    const kmeans = new KMeans(this.features, this.colorSize);
    const resp = kmeans.run();
    const vq = kmeans.quantize(this.features, resp.centroids, resp.code);

    let vqIdx = 0;
    for (let y = 0; y < imgData.height; y += this.kernelSize) {
      for (let x = 0; x < imgData.width; x += this.kernelSize) {
        for (let i = 0; i < this.kernelSize; i++) {
          for (let j = 0; j < this.kernelSize; j++) {
            const idx = ((y + i) * imgData.width + (x + j)) * 4;
            resultImageData.data[idx] = vq[vqIdx][0];
            resultImageData.data[idx + 1] = vq[vqIdx][1];
            resultImageData.data[idx + 2] = vq[vqIdx][2];
            resultImageData.data[idx + 3] = 255;
          }
        }
        vqIdx++;
      }
    }

    return resultImageData;
  }

  private getFeatures(imgData: ImageData, imgWidth: number, imgHeight: number) {
    for (let y = 0; y < imgHeight; y += this.kernelSize) {
      for (let x = 0; x < imgHeight; x += this.kernelSize) {
        let rSum = 0;
        let gSum = 0;
        let bSum = 0;
        let blocks = 0;

        for (let i = 0; i < this.kernelSize; i++) {
          for (let j = 0; j < this.kernelSize; j++) {
            const idx2 = ((y + i) * imgWidth + (x + j)) * 4;
            rSum += imgData.data[idx2];
            gSum += imgData.data[idx2 + 1];
            bSum += imgData.data[idx2 + 2];
            blocks++;
          }
        }

        this.features.push([rSum / blocks, gSum / blocks, bSum / blocks]);
      }
    }
    return imgData;
  }
}

export default PixelArtFilter;
