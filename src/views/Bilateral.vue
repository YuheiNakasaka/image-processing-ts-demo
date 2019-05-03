<template>
  <div>
    <canvas class="main_canvas"></canvas>
    <label>K: </label><input type="number" minlength="1" maxlength="255" v-model="kValue" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import MyCanvas from "@/libs/canvas";
import BilateralFilter from "@/libs/bilateral_filter";

@Component({
  components: {}
})
export default class Bilateral extends Vue {
  public kValue: number = 80;

  @Watch("kValue")
  async onChange() {
    const canvas = new MyCanvas();
    const resp = await canvas.lennner(".main_canvas");
    if (!resp) return;

    const bilateralFilter = new BilateralFilter(this.kValue, 7, 7);
    const imgData = bilateralFilter.apply(resp.imgData, resp.width, resp.height);

    resp.context.putImageData(imgData, 0, 0);
  }

  async mounted() {
    const canvas = new MyCanvas();
    const resp = await canvas.lennner(".main_canvas");
    if (!resp) return;

    const filter = new BilateralFilter(this.kValue, 7, 7);
    const imgData = filter.apply(resp.imgData, resp.width, resp.height);

    resp.context.putImageData(imgData, 0, 0);
  }
}
</script>

<style lang="scss" scoped></style>
