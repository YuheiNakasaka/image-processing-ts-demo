<template>
  <div>
    <canvas class="main_canvas"></canvas>
    <div><label>K: </label><input type="number" minlength="1" v-model="kValue" /></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import MyCanvas from "@/libs/canvas";
import PixelArtFilter from "@/libs/pixel_art_filter";

@Component({
  components: {}
})
export default class PixelArt extends Vue {
  public kValue: number = 5;

  @Watch("kValue")
  async onChange() {
    const canvas = new MyCanvas();
    const resp = await canvas.lennner(".main_canvas");
    if (!resp) return;

    const filter = new PixelArtFilter(parseInt(`${this.kValue}`));
    const imgData = filter.apply(resp.imgData, resp.width, resp.height);
    resp.context.putImageData(imgData, 0, 0);
  }

  async mounted() {
    const canvas = new MyCanvas();
    const resp = await canvas.lennner(".main_canvas");
    if (!resp) return;

    const filter = new PixelArtFilter(parseInt(`${this.kValue}`));
    const imgData = filter.apply(resp.imgData, resp.width, resp.height);
    resp.context.putImageData(imgData, 0, 0);
  }
}
</script>

<style lang="scss" scoped></style>
