<template>
  <div>
    <canvas class="main_canvas"></canvas>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MyCanvas from "@/libs/canvas";
import ThresholdFilter from "@/libs/threshold_filter";

@Component({
  components: {}
})
export default class Thresholding extends Vue {
  async mounted() {
    const canvas = new MyCanvas();
    const resp = await canvas.lennner(".main_canvas");
    if (!resp) return;

    const filter = new ThresholdFilter();
    const imgData = filter.apply(resp.imgData, resp.width, resp.height);
    resp.context.putImageData(imgData, 0, 0);
  }
}
</script>

<style lang="scss" scoped></style>
