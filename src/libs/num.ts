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
    let pixel = 0;
    let abs = Math.floor(kernel.length / 2);
    for (let row = -abs; row < kernel.length - abs; row++) {
      for (let col = 0; col < kernel[0].length; col++) {
        const base = ((y + row) * img.width + x) * stride;
        pixel += !isNaN(img.pixels[base + colorPos + stride * row] * kernel[row + abs][col])
          ? img.pixels[base + colorPos + stride * row] * kernel[row + abs][col]
          : 0;
      }
    }
    return pixel;
  }
}

export default Num;
