import GaussianFilter from "@/libs/gaussian_filter";

class BilateralFilter {
  public sigma: number;
  public w: number;
  public h: number;
  public gaussian: GaussianFilter;

  constructor(sigma: number, w: number, h: number) {
    this.sigma = sigma;
    this.w = w;
    this.h = h;
    this.gaussian = new GaussianFilter(this.sigma, this.w, this.h);
  }

  apply(imgData: ImageData, imgWidth: number, imgHeight: number): ImageData {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) return imgData;
    let resultImageData = context.createImageData(imgData.width, imgData.height);

    // dankogai gauss color weight
    // http://blog.livedoor.jp/dankogai/archives/51822270.html
    const sigma8bit = 2.04045;
    const sigmaColor = ((this.sigma / 255) * Math.sqrt(255 * 255 * 3)) / sigma8bit;
    const gaussColorCoeff = -0.5 / (sigmaColor * sigmaColor);

    // 注目画素
    for (let y = 0; y < imgHeight; y++) {
      for (let x = 0; x < imgWidth; x++) {
        let i = (y * imgWidth + x) * 4;
        let pr1 = imgData.data[i];
        let pg1 = imgData.data[i + 1];
        let pb1 = imgData.data[i + 2];
        let wsum = 0;
        let rgb = [0, 0, 0];

        // その周辺画素にカーネル適用
        for (let y2 = -this.gaussian.centerY; y2 <= this.gaussian.centerY; y2++) {
          for (let x2 = -this.gaussian.centerX; x2 <= this.gaussian.centerX; x2++) {
            if (y + y2 > 0 && x + x2 > 0 && y + y2 < imgHeight && x + x2 < imgWidth) {
              let i2 = ((y + y2) * imgWidth + (x + x2)) * 4;
              let pr2 = imgData.data[i2];
              let pg2 = imgData.data[i2 + 1];
              let pb2 = imgData.data[i2 + 2];
              let rdiff = pr2 - pr1;
              let gdiff = pg2 - pg1;
              let bdiff = pb2 - pb1;
              let diffsum = rdiff * rdiff + gdiff * gdiff + bdiff * bdiff;
              let weight =
                this.gaussian.kernel[(y2 + this.gaussian.centerY) * this.gaussian.w + (x2 + this.gaussian.centerX)] *
                Math.exp(diffsum * gaussColorCoeff);
              wsum += weight;
              rgb[0] += pr2 * weight;
              rgb[1] += pg2 * weight;
              rgb[2] += pb2 * weight;
            }
          }
        }

        resultImageData.data[i] = rgb[0] / wsum;
        resultImageData.data[i + 1] = rgb[1] / wsum;
        resultImageData.data[i + 2] = rgb[2] / wsum;
        resultImageData.data[i + 3] = 255;
      }
    }
    return resultImageData;
  }
}

export default BilateralFilter;
