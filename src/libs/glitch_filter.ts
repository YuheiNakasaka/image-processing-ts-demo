class GlitchFilter {
  apply(imgData: ImageData, imgWidth: number, imgHeight: number): ImageData {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) return imgData;
    let resultImageData = context.createImageData(imgData.width, imgData.height);

    // 行の入れ替え
    let isGlitch = Math.floor(Math.random() * 2) % 2 === 0;
    let transRowSize = Math.floor(Math.random() * 15);
    let row = Math.floor(Math.random() * imgHeight);
    for (let y = 0; y < imgHeight; y++) {
      if (transRowSize === 0) {
        transRowSize = Math.floor(Math.random() * 15);
        row = Math.floor(Math.random() * imgHeight);
        isGlitch = Math.floor(Math.random() * 2) % 2 === 0;
      }
      if (!isGlitch) row = y;
      transRowSize--;
      for (let x = 0; x < imgWidth; x++) {
        const idx = (y * imgWidth + x) * 4;
        const rowIdx = (row * imgWidth + x) * 4;
        resultImageData.data[idx] = imgData.data[rowIdx];
        resultImageData.data[idx + 1] = imgData.data[rowIdx + 1];
        resultImageData.data[idx + 2] = imgData.data[rowIdx + 2];
        resultImageData.data[idx + 3] = 255;
      }
    }

    // rowをずらす
    let isCGlitch = Math.floor(Math.random() * 2) % 2 === 0;
    let colorSize = Math.floor(Math.random() * 20);
    let bias = Math.floor(Math.random() * 10);
    for (let y = 0; y < imgHeight; y++) {
      if (colorSize === 0) {
        colorSize = Math.floor(Math.random() * 20);
        bias = Math.floor(Math.random() * 10);
        isCGlitch = Math.floor(Math.random() * 2) % 2 === 0;
      }
      colorSize--;
      for (let x = 0; x < imgWidth; x++) {
        const idx = (y * imgWidth + x) * 4;
        const colIdx = (y * imgWidth + x + bias) * 4;
        if ((x + bias) * 4 < imgWidth * 4) {
          let r = resultImageData.data[colIdx];
          let g = resultImageData.data[colIdx + 1];
          let b = resultImageData.data[colIdx + 2];
          if (isCGlitch) {
            r = r > 150 ? r + Math.floor(Math.random() * 120) : r;
            g = g < 30 ? g - Math.floor(Math.random() * 50) : g;
            b = b > 150 ? b + Math.floor(Math.random() * 120) : b;
          }
          resultImageData.data[idx] = r;
          resultImageData.data[idx + 1] = g;
          resultImageData.data[idx + 2] = b;
          resultImageData.data[idx + 3] = 255;
        }
      }
    }
    return resultImageData;
  }
}

export default GlitchFilter;
