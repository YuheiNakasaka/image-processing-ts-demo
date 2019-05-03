class MosaicFilter {
  public kernelSize: number;
  constructor(kernelSize = 3) {
    this.kernelSize = kernelSize;
  }

  apply(imgData: ImageData, imgWidth: number, imgHeight: number): ImageData {
    const cw = Math.floor(this.kernelSize / 2);
    for (let y = 0; y < imgHeight; y += this.kernelSize) {
      for (let x = 0; x < imgHeight; x += this.kernelSize) {
        let rSum = 0;
        let gSum = 0;
        let bSum = 0;
        let blocks = 0;

        for (let i = -cw; i <= cw; i++) {
          for (let j = -cw; j <= cw; j++) {
            const idx2 = ((y + i) * imgWidth + (x + j)) * 4;
            if (y + i > 0 && x + j > 0 && y + i < imgHeight && x + j < imgWidth) {
              rSum += imgData.data[idx2];
              gSum += imgData.data[idx2 + 1];
              bSum += imgData.data[idx2 + 2];
              blocks++;
            }
          }
        }

        for (let i = -cw; i <= cw; i++) {
          for (let j = -cw; j <= cw; j++) {
            const idx2 = ((y + i) * imgWidth + (x + j)) * 4;
            if (y + i > 0 && x + j > 0 && y + i < imgHeight && x + j < imgWidth) {
              imgData.data[idx2] = rSum / blocks;
              imgData.data[idx2 + 1] = gSum / blocks;
              imgData.data[idx2 + 2] = bSum / blocks;
              imgData.data[idx2 + 3] = 255;
            }
          }
        }
      }
    }
    return imgData;
  }
}

export default MosaicFilter;
