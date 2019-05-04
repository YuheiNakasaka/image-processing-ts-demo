import KMeans from "@/libs/k_means";
class PixelArtFilter {
  public kernelSize: number;
  public features: number[][];

  constructor(kernelSize = 3) {
    this.kernelSize = kernelSize;
    this.features = [];

    const kmeans = new KMeans([[1, 2, 3], [10, -2, 3], [5, 4, 2], [3, 1, 7]]);
    const resp = kmeans.run();
    console.log(resp);
  }

  apply(imgData: ImageData, imgWidth: number, imgHeight: number): ImageData {
    this.getFeatures(imgData, imgWidth, imgHeight);
    return imgData;
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
