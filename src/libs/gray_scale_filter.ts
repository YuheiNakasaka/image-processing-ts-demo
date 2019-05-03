class GrayScaleFilter {
  apply(imgData: ImageData, imgWidth: number, imgHeight: number): ImageData {
    for (let y = 0; y < imgHeight; y++) {
      for (let x = 0; x < imgHeight; x++) {
        const idx = (y * imgWidth + x) * 4;
        const medColor =
          (Math.max(imgData.data[idx + 0], imgData.data[idx + 1], imgData.data[idx + 2]) +
            Math.min(imgData.data[idx + 0], imgData.data[idx + 1], imgData.data[idx + 2])) /
          2;
        imgData.data[idx] = medColor;
        imgData.data[idx + 1] = medColor;
        imgData.data[idx + 2] = medColor;
        imgData.data[idx + 3] = 255;
      }
    }
    return imgData;
  }
}

export default GrayScaleFilter;
