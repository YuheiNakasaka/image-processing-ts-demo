<template>
  <div>
    <canvas class="main_canvas"></canvas>
    <div><label>Frame: </label><input type="number" minlength="1" maxlength="50" v-model="frame" /></div>
    <div><label>Color: </label><input type="number" minlength="1" maxlength="255" v-model="color" /></div>
    <div><label>Bilateral: </label><input type="number" minlength="0" maxlength="1" v-model="bilateral" /></div>
    <div><input type="file" @change="onFileChange" /></div>
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
  public frame: number = 2;
  public color: number = 8;
  public validFrames: number[] = [];
  public runnable: boolean = true;
  public canvas!: MyCanvas;
  public bilateral: number = 0;
  public imgUrl: string = "";

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

  onFileChange(e: Event) {
    if (e.target instanceof HTMLInputElement) {
      const files = e.target.files;
      if (!files) return;
      if (!files[0].type.match(/image.*/)) return;
      const reader = new FileReader();
      reader.onload = async () => {
        if (!reader.result || reader.result instanceof ArrayBuffer) return;
        this.imgUrl = reader.result;
        this.renderImage();
      };
      reader.readAsDataURL(files[0]);
    }
  }

  private async renderImage() {
    const canvas = new MyCanvas();
    const resp = await canvas.lennner(".main_canvas", this.imgUrl);
    const frame = parseInt(`${this.frame}`);
    const color = parseInt(`${this.color}`);
    if (!resp || !this.validate(resp.width, resp.height)) return;

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

  private validate(width: number, height: number): boolean {
    const frame = parseInt(`${this.frame}`);
    if (this.validFrames.length === 0) {
      for (let i = 0; i < 50; i++) {
        if (width % i === 0) this.validFrames.push(i);
      }
    }
    if (this.validFrames.indexOf(frame) === -1) {
      this.runnable = false;
      return false;
    }
    if (width % frame !== 0 || height % frame !== 0) {
      this.runnable = false;
      return false;
    }
    this.runnable = true;
    return true;
  }
}
</script>

<style lang="scss" scoped>
.main_canvas {
  max-width: 500px;
}
</style>
