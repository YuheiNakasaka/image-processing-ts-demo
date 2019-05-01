<template>
  <div class="self-filter">
    <canvas class="main_canvas"></canvas>
    <p v-show="loading">Proccessing..</p>
    <label>filter size: </label><input type="number" min="3" step="2" v-model="filterSize" />
    <div class="matrixes" :style="`width: ${matrixWidth}px`">
      <input
        type="number"
        name="matrix[]"
        class="column"
        v-for="(i, j) in fields"
        :key="`${i}_${j}`"
        :value="i"
        @change="onMatrixChange"
      />
    </div>
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
export default class SelfFilter extends Vue {
  public filterSize: number = 3;
  public fields!: number[];
  public matrixWidth!: number;
  public loading: boolean = false;

  @Watch("filterSize")
  onFilterSize() {
    this.matrixWidth = parseInt(`${this.filterSize}`) * 100 + parseInt(`${this.filterSize}`) * 6;
    this.fields = new Array(parseInt(`${this.filterSize}`) * parseInt(`${this.filterSize}`)).fill(0);
  }

  beforeMount() {
    this.fields = [-1, -1, -1, -1, 9, -1, -1, -1, -1];
    this.matrixWidth = parseInt(`${this.filterSize}`) * 100 + parseInt(`${this.filterSize}`) * 6;
  }

  async mounted() {
    const canvas = new MyCanvas();
    const img = await canvas.lennner(".main_canvas");
    if (!img) return;
    const num = new Num();
    const kernel = this.getKernel(this.fields);
    img.context.putImageData(num.convolve2d(img, kernel), 0, 0);
  }

  async onMatrixChange() {
    const canvas = new MyCanvas();
    const img = await canvas.lennner(".main_canvas");
    if (!img) return;
    const columns = document.querySelectorAll<HTMLInputElement>(".column");
    const inputKernel: number[] = [];
    columns.forEach(elm => inputKernel.push(parseInt(elm.value)));

    const num = new Num();
    const kernel = this.getKernel(inputKernel);
    img.context.putImageData(num.convolve2d(img, kernel), 0, 0);
  }

  getKernel(params: number[]): number[][] {
    const kernel: number[][] = [];
    const n = params.length;
    const width = Math.sqrt(n);
    for (let i = 0; i < n; i++) {
      if (i % width === 0) kernel.push([]);
      kernel[Math.floor(i / width)][i % width] = params[i];
    }
    return kernel;
  }
}
</script>

<style lang="scss" scoped>
.self-filter {
  canvas {
    margin: 0 0 10px 0;
  }
  .matrixes {
    margin: 10px 0 0 0;
    input {
      width: 100px;
    }
  }
}
</style>
