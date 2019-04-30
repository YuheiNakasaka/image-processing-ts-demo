import { CanvasResponse } from "@/libs/canvas";

class Num {
  convolve2d(img: CanvasResponse, kernel: number[][]): ImageData {
    // Create empty image
    let resultImageData = img.context.createImageData(img.width, img.height);

    const stride = 4;

    for (let y = 0; y < img.height; y++) {
      for (let x = 0; x < img.width; x++) {
        const top = ((y - 1) * img.width + x) * stride;
        const base = (y * img.width + x) * stride;
        const bottom = ((y + 1) * img.width + x) * stride;

        let pixel = 0;
        // top rows
        pixel += !isNaN(img.pixels[top + 1 - stride] * kernel[0][0])
          ? img.pixels[top + 1 - stride] * kernel[0][0]
          : 0;
        pixel += !isNaN(img.pixels[top + 1] * kernel[0][1])
          ? img.pixels[top + 1] * kernel[0][1]
          : 0;
        pixel += !isNaN(img.pixels[top + 1 + stride] * kernel[0][2])
          ? img.pixels[top + 1 + stride] * kernel[0][2]
          : 0;
        // center row
        pixel += !isNaN(img.pixels[base + 1 - stride] * kernel[1][0])
          ? img.pixels[base + 1 - stride] * kernel[1][0]
          : 0;
        pixel += !isNaN(img.pixels[base + 1] * kernel[1][1])
          ? img.pixels[base + 1] * kernel[1][1]
          : 0;
        pixel += !isNaN(img.pixels[base + 1 + stride] * kernel[1][2])
          ? img.pixels[base + 1 + stride] * kernel[1][2]
          : 0;
        // bottom row
        pixel += !isNaN(img.pixels[bottom + 1 - stride] * kernel[2][0])
          ? img.pixels[bottom + 1 - stride] * kernel[2][0]
          : 0;
        pixel += !isNaN(img.pixels[bottom + 1] * kernel[2][1])
          ? img.pixels[bottom + 1] * kernel[2][1]
          : 0;
        pixel += !isNaN(img.pixels[bottom + 1 + stride] * kernel[2][2])
          ? img.pixels[bottom + 1 + stride] * kernel[2][2]
          : 0;

        resultImageData.data[base + 0] = pixel;
        resultImageData.data[base + 1] = pixel;
        resultImageData.data[base + 2] = pixel;
        resultImageData.data[base + 3] = 255;
      }
    }
    return resultImageData;
  }
}

export default Num;
