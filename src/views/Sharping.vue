<template>
  <div>
    <canvas class="main_canvas"></canvas>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MyCanvas from "@/libs/canvas";
import Num from "@/libs/num";

@Component({
  components: {}
})
export default class Sharping extends Vue {
  async mounted() {
    const canvas = new MyCanvas();
    const resp = await canvas.lennner(".main_canvas");
    if (!resp) return;

    // kernel
    const k = 9;
    const kernel = [[-k / 9, -k / 9, -k / 9], [-k / 9, 1 + (k * 8) / 9, -k / 9], [-k / 9, -k / 9, -k / 9]];

    // convolution
    const num = new Num();
    resp.context.putImageData(num.convolve2d(resp, kernel), 0, 0);
  }
}
</script>

<style lang="scss" scoped></style>
