class LaplacianFilter {
  public kernelSize: number;
  public kernel: number[];

  constructor(kernelSize = 3) {
    this.kernelSize = kernelSize;
    this.kernel = [];
    const cw = Math.floor(this.kernelSize / 2);
    const center = Math.floor((this.kernelSize * this.kernelSize) / 2);
    for (let y = 0; y < this.kernelSize; y++) {
      for (let x = 0; x < this.kernelSize; x++) {
        const idx = y * this.kernelSize + x;
        if (idx === center) {
          // center
          this.kernel[idx] = cw * -4;
        } else if ((center - cw <= idx && idx <= center + cw) || x == cw) {
          // neighbor
          this.kernel[idx] = 1;
        } else {
          this.kernel[idx] = 0;
        }
      }
    }
  }

  apply(imgData: ImageData, imgWidth: number, imgHeight: number): ImageData {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) return imgData;
    let resultImageData = context.createImageData(imgData.width, imgData.height);

    const cw = Math.floor(this.kernelSize / 2);
    for (let y = 0; y < imgHeight; y++) {
      for (let x = 0; x < imgHeight; x++) {
        const idx = (y * imgWidth + x) * 4;
        let rSum = 0;
        let gSum = 0;
        let bSum = 0;
        for (let i = -cw; i <= cw; i++) {
          for (let j = -cw; j <= cw; j++) {
            const idx2 = ((y + i) * imgWidth + (x + j)) * 4;
            if (y + i >= 0 && x + j >= 0 && y + i <= imgHeight && x + j <= imgWidth) {
              rSum += imgData.data[idx2] * this.kernel[(i + cw) * this.kernelSize + (j + cw)];
              gSum += imgData.data[idx2 + 1] * this.kernel[(i + cw) * this.kernelSize + (j + cw)];
              bSum += imgData.data[idx2 + 2] * this.kernel[(i + cw) * this.kernelSize + (j + cw)];
            }
          }
        }
        resultImageData.data[idx] = rSum;
        resultImageData.data[idx + 1] = gSum;
        resultImageData.data[idx + 2] = bSum;
        resultImageData.data[idx + 3] = 255;
      }
    }
    return resultImageData;
  }
}

export default LaplacianFilter;
