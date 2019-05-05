<template>
  <div>
    <canvas class="main_canvas"></canvas>
    <div><label>Frame: </label><input type="number" minlength="1" maxlength="50" v-model="frame" /></div>
    <div><label>Color: </label><input type="number" minlength="1" maxlength="255" v-model="color" /></div>
    <div><label>Bilateral: </label><input type="number" minlength="0" maxlength="1" v-model="bilateral" /></div>
    <div v-show="!runnable"><span>[Warn] Frame has mod.</span></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import MyCanvas from "@/libs/canvas";
import PixelArtFilter from "@/libs/pixel_art_filter";
import BilateralFilter from "@/libs/bilateral_filter";

@Component({
  components: {}
})
export default class PixelArt extends Vue {
  public frame: number = 5;
  public color: number = 4;
  public validFrames: number[] = [];
  public runnable: boolean = true;
  public canvas!: MyCanvas;
  public bilateral: number = 0;

  @Watch("frame")
  onFrameChange() {
    this.renderImage();
  }

  @Watch("color")
  onColorChange() {
    this.renderImage();
  }

  @Watch("bilateral")
  onBilateralChange() {
    this.renderImage();
  }

  mounted() {
    this.renderImage();
  }

  private async renderImage() {
    const canvas = new MyCanvas();
    const resp = await canvas.lennner(".main_canvas");
    const frame = parseInt(`${this.frame}`);
    const color = parseInt(`${this.color}`);
    if (!resp || !this.validate(resp.width)) return;

    let midImgData = resp.imgData;
    if (this.bilateral === 1) {
      const bfilter = new BilateralFilter(80, 7, 7);
      midImgData = bfilter.apply(resp.imgData, resp.width, resp.height);
      resp.context.putImageData(midImgData, 0, 0);
    }

    const pfilter = new PixelArtFilter(frame, color);
    const imgData = pfilter.apply(midImgData);
    resp.context.putImageData(imgData, 0, 0);
  }

  private validate(width: number): boolean {
    if (this.validFrames.length === 0) {
      for (let i = 0; i < 50; i++) {
        if (width % i === 0) this.validFrames.push(i);
      }
    }
    if (this.validFrames.indexOf(parseInt(`${this.frame}`)) === -1) {
      this.runnable = false;
      return false;
    }
    this.runnable = true;
    return true;
  }
}
</script>

<style lang="scss" scoped></style>
