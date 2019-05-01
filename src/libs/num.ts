import { CanvasResponse } from "@/libs/canvas";

class Num {
  convolve2d(img: CanvasResponse, kernel: number[][]): ImageData {
    // Create empty image
    let resultImageData = img.context.createImageData(img.width, img.height);

    const stride = 4; // RGBA
    for (let y = 0; y < img.height; y++) {
      for (let x = 0; x < img.width; x++) {
        const base = (y * img.width + x) * stride;
        // kernel適用 to RGB
        resultImageData.data[base + 0] = this.patchKernel(img, x, y, kernel, stride, 0);
        resultImageData.data[base + 1] = this.patchKernel(img, x, y, kernel, stride, 1);
        resultImageData.data[base + 2] = this.patchKernel(img, x, y, kernel, stride, 2);
        resultImageData.data[base + 3] = 255;
      }
    }
    return resultImageData;
  }

  private patchKernel(
    img: CanvasResponse,
    x: number,
    y: number,
    kernel: number[][],
    stride: number,
    colorPos: number
  ): number {
    const kCol = kernel[0].length;
    const kRow = kernel.length;
    let pixel = 0;
    for (let i = -1; i < kRow - 1; i++) {
      for (let j = 0; j < kCol; j++) {
        const base = ((y + i) * img.width + x) * stride;
        pixel += !isNaN(img.pixels[base + colorPos + stride * i] * kernel[i + 1][j])
          ? img.pixels[base + colorPos + stride * i] * kernel[i + 1][j]
          : 0;
      }
    }
    return pixel;
  }
}

export default Num;
