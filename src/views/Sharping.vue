<template>
  <div class="sharping">
    <canvas class="main_canvas"></canvas>
    <label>K: </label><input type="number" minlength="1" v-model="kValue" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import MyCanvas from "@/libs/canvas";
import { CanvasResponse } from "@/libs/canvas";
import Num from "@/libs/num";

@Component({
  components: {}
})
export default class Sharping extends Vue {
  public kValue: number = 9;

  @Watch("kValue")
  async onChange() {
    const canvas = new MyCanvas();
    const img = await canvas.lennner(".main_canvas");
    if (!img) return;
    const num = new Num();
    const kernel = this.getKernel(this.kValue);
    img.context.putImageData(num.convolve2d(img, kernel), 0, 0);
  }

  async mounted() {
    const canvas = new MyCanvas();
    const img = await canvas.lennner(".main_canvas");
    if (!img) return;
    const num = new Num();
    const kernel = this.getKernel(this.kValue);
    img.context.putImageData(num.convolve2d(img, kernel), 0, 0);
  }

  getKernel(k: number): number[][] {
    return [[-k / 9, -k / 9, -k / 9], [-k / 9, 1 + (k * 8) / 9, -k / 9], [-k / 9, -k / 9, -k / 9]];
  }
}
</script>

<style lang="scss" scoped>
.sharping {
  canvas {
    margin: 0 0 10px 0;
  }
}
</style>
