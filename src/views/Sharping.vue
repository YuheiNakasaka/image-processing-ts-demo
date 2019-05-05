<template>
  <div class="sharping">
    <canvas class="main_canvas"></canvas>
    <div><label>K: </label><input type="number" minlength="1" v-model="kValue" /></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import MyCanvas from "@/libs/canvas";
import { CanvasResponse } from "@/libs/canvas";
import SharpingFilter from "@/libs/sharping_filter";

@Component({
  components: {}
})
export default class Sharping extends Vue {
  public kValue: number = 9;

  @Watch("kValue")
  async onChange() {
    const canvas = new MyCanvas();
    const resp = await canvas.lennner(".main_canvas");
    if (!resp) return;

    const filter = new SharpingFilter(parseInt(`${this.kValue}`), 3);
    const imgData = filter.apply(resp.imgData, resp.width, resp.height);
    resp.context.putImageData(imgData, 0, 0);
  }

  async mounted() {
    const canvas = new MyCanvas();
    const resp = await canvas.lennner(".main_canvas");
    if (!resp) return;

    const filter = new SharpingFilter(parseInt(`${this.kValue}`), 3);
    const imgData = filter.apply(resp.imgData, resp.width, resp.height);
    resp.context.putImageData(imgData, 0, 0);
  }
}
</script>

<style lang="scss" scoped></style>
