class ThresholdFilter {
  apply(imgData: ImageData, imgWidth: number, imgHeight: number): ImageData {
    // モード法
    let threshold = 0;
    for (let y = 0; y < imgHeight; y++) {
      for (let x = 0; x < imgWidth; x++) {
        const base = (y * imgWidth + x) * 4;
        threshold += imgData.data[base + 1];
      }
    }
    threshold = threshold / (imgHeight * imgWidth);

    for (let y = 0; y < imgHeight; y++) {
      for (let x = 0; x < imgHeight; x++) {
        const idx = (y * imgWidth + x) * 4;
        imgData.data[idx] = imgData.data[idx + 1] > threshold ? 255 : 0;
        imgData.data[idx + 1] = imgData.data[idx + 1] > threshold ? 255 : 0;
        imgData.data[idx + 2] = imgData.data[idx + 1] > threshold ? 255 : 0;
        imgData.data[idx + 3] = 255;
      }
    }
    return imgData;
  }
}

export default ThresholdFilter;
