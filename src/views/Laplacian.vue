<template>
  <div>
    <canvas class="main_canvas"></canvas>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MyCanvas from "@/libs/canvas";
import LaplacianFilter from "@/libs/laplacian_filter";
import Num from "@/libs/num";

@Component({
  components: {}
})
export default class Laplacian extends Vue {
  async mounted() {
    const canvas = new MyCanvas();
    const resp = await canvas.lennner(".main_canvas");
    if (!resp) return;

    const filter = new LaplacianFilter();
    const imgData = filter.apply(resp.imgData, resp.width, resp.height);
    resp.context.putImageData(imgData, 0, 0);
  }
}
</script>

<style lang="scss" scoped></style>
