<template>
  <div>
    <canvas class="main_canvas"></canvas>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MyCanvas from "@/libs/canvas";
import { CanvasResponse } from "@/libs/canvas";

@Component({
  components: {}
})
export default class Bilateral extends Vue {
  async mounted() {
    const canvas = new MyCanvas();
    const resp = await canvas.lennner(".main_canvas");
    if (!resp) return;

    const sigma1 = 1;
    const sigma2 = 2;
    const kernelSize = 3;
    const kernelG: number[][] = [];
    const base = Math.floor(kernelSize / 2);
    const stride = 4;
    for (let i = -base; i < kernelSize - base; i++) {
      for (let j = -base; j < kernelSize - base; j++) {
        kernelG[i + base][j + base] = this.gaussian(i + base, j + base, sigma1);
      }
    }
    console.log(kernelG);

    for (let y = 0; y < resp.height; y++) {
      for (let x = 0; x < resp.width; x++) {
        const base = (y * resp.width + x) * stride;
        resp.pixels[base + 0] = this.apply(resp, x, y, 0, kernelG, kernelSize, stride, sigma2);
        resp.pixels[base + 1] = this.apply(resp, x, y, 1, kernelG, kernelSize, stride, sigma2);
        resp.pixels[base + 2] = this.apply(resp, x, y, 2, kernelG, kernelSize, stride, sigma2);
        resp.pixels[base + 3] = 255;
      }
    }
    resp.context.putImageData(resp.imgData, 0, 0);
  }

  pixelSub(xy: number, ij: number, sigma: number): number {
    return Math.exp(-Math.pow(xy - ij, 2) / (2 * Math.pow(sigma, 2)));
  }

  gaussian(x: number, y: number, sigma: number): number {
    return Math.exp(-(Math.pow(x, 2) + Math.pow(y, 2)) / (2 * Math.pow(sigma, 2)));
  }

  apply(
    resp: CanvasResponse,
    x: number,
    y: number,
    colorPos: number,
    kernelG: number[][],
    kernelSize: number,
    stride: number,
    sigma2: number
  ): number {
    let totalWeight = 0;
    let weight = 0;
    let sum = 0;
    const base = Math.floor(kernelSize / 2);
    for (let i = -base; i < kernelSize - base; i++) {
      for (let j = -base; j < kernelSize - base; j++) {
        if (y - i > 0 && x - j > 0) {
          const _w =
            kernelG[i + base][j + base] *
            this.pixelSub(
              resp.pixels[(y * resp.width + x) * stride + colorPos],
              resp.pixels[((y + i) * resp.width + x + j) * stride + colorPos],
              sigma2
            );
          weight = _w;
          totalWeight += weight;
          sum += weight * resp.pixels[y + resp.width + x + stride];
          // if (y === 0 && colorPos === 1) console.log(sum, totalWeight);
        }
      }
    }
    return !isNaN(Math.floor(sum / totalWeight)) ? Math.floor(sum / totalWeight) : 0;
  }
}
</script>

<style lang="scss" scoped></style>
