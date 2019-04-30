<template>
  <div>
    <canvas class="main_canvas"></canvas>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MyCanvas from "@/libs/canvas";

@Component({
  components: {}
})
export default class Thresholding extends Vue {
  async mounted() {
    const canvas = new MyCanvas();
    const resp = await canvas.lennner(".main_canvas");
    if (!resp) return;

    // モード法
    let threshold = 0;
    let i = 0;
    for (let y = 0; y < resp.height; y++) {
      for (let x = 0; x < resp.width; x++) {
        const base = (y * resp.width + x) * 4;
        threshold += resp.pixels[base + 1];
        i++;
      }
    }
    threshold = threshold / (resp.height * resp.width);

    for (let y = 0; y < resp.height; y++) {
      for (let x = 0; x < resp.width; x++) {
        const base = (y * resp.width + x) * 4;
        resp.pixels[base + 0] = resp.pixels[base + 1] > threshold ? 255 : 0;
        resp.pixels[base + 1] = resp.pixels[base + 1] > threshold ? 255 : 0;
        resp.pixels[base + 2] = resp.pixels[base + 1] > threshold ? 255 : 0;
        resp.pixels[base + 3] = 255;
      }
    }
    resp.context.putImageData(resp.imgData, 0, 0);
  }
}
</script>

<style lang="scss" scoped></style>
