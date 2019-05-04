class NegaFilter {
  apply(imgData: ImageData, imgWidth: number, imgHeight: number): ImageData {
    for (let y = 0; y < imgHeight; y++) {
      for (let x = 0; x < imgHeight; x++) {
        const idx = (y * imgWidth + x) * 4;
        imgData.data[idx] = 255 - imgData.data[idx];
        imgData.data[idx + 1] = 255 - imgData.data[idx + 1];
        imgData.data[idx + 2] = 255 - imgData.data[idx + 2];
        imgData.data[idx + 3] = 255;
      }
    }
    return imgData;
  }
}

export default NegaFilter;
