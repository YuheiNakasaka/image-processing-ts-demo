class GaussianFilter {
  public sigma: number;
  public w: number;
  public h: number;
  public centerX: number;
  public centerY: number;
  public kernel: Float32Array;

  constructor(sigma = 1.023, w = 5, h = 5) {
    this.sigma = sigma;
    this.w = w;
    this.h = h;
    this.centerX = Math.floor(this.w / 2);
    this.centerY = Math.floor(this.h / 2);
    this.kernel = new Float32Array(this.w * this.h);

    for (let y = 0; y < this.h; y++) {
      for (let x = 0; x < this.w; x++) {
        this.kernel[y * this.w + x] = this.get(Math.pow(x - this.centerX, 2) + Math.pow(y - this.centerY, 2));
      }
    }
  }

  get(distance: number): number {
    return Math.exp(-distance / (2 * Math.pow(this.sigma, 2))) / (2 * Math.PI * this.sigma);
  }

  apply(imgData: ImageData, imgWidth: number, imgHeight: number): ImageData {
    const cw = Math.floor(this.w / 2);
    const ch = Math.floor(this.h / 2);
    for (let y = 0; y < imgHeight; y++) {
      for (let x = 0; x < imgHeight; x++) {
        const idx = (y * imgWidth + x) * 4;
        let rSum = 0;
        let gSum = 0;
        let bSum = 0;
        let wwww = 0;
        for (let i = -ch; i <= ch; i++) {
          for (let j = -cw; j <= cw; j++) {
            const idx2 = ((y + i) * imgWidth + (x + j)) * 4;
            if (y + i > 0 && x + j > 0 && y + i < imgHeight && x + j < imgWidth) {
              rSum += imgData.data[idx2] * this.kernel[(i + ch) * this.w + (j + cw)];
              gSum += imgData.data[idx2 + 1] * this.kernel[(i + ch) * this.w + (j + cw)];
              bSum += imgData.data[idx2 + 2] * this.kernel[(i + ch) * this.w + (j + cw)];
            }
            // if (y === 5 && x === 5) {
            //   wwww += this.kernel[(i + ch) * this.w + (j + cw)];
            //   console.log(wwww);
            // }
          }
        }
        imgData.data[idx] = rSum;
        imgData.data[idx + 1] = gSum;
        imgData.data[idx + 2] = bSum;
        imgData.data[idx + 3] = 255;
      }
    }
    return imgData;
  }
}

export default GaussianFilter;
