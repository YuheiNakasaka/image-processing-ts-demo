<template>
  <div class="home">
    <ul class="nav">
      <li>
        <router-link to="/">HOME</router-link>
        <router-link to="/nega">Nega</router-link>
        <router-link to="/grayscale">GrayScale</router-link>
        <router-link to="/thresholding">Thresholding</router-link>
        <router-link to="/gaussian">Gaussian</router-link>
        <router-link to="/laplacian">Laplacian</router-link>
        <router-link to="/sharping">Sharping</router-link>
        <router-link to="/bilateral">Bilateral</router-link>
        <router-link to="/self-filter">Self-Filter</router-link>
        <router-link to="/mosaic">Mosaic</router-link>
      </li>
    </ul>
    <div class="main">
      <canvas class="sample-canvas"></canvas>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MyCanvas from "@/libs/canvas";

@Component({
  components: {}
})
export default class Home extends Vue {
  async mounted() {
    const canvas = new MyCanvas();
    const resp = await canvas.lennner(".sample-canvas");
    if (!resp) return;

    for (let y = 0; y < resp.height; y++) {
      for (let x = 0; x < resp.width; x++) {
        const base = (y * resp.width + x) * 4;
        resp.pixels[base + 0] = resp.pixels[base + 0];
        resp.pixels[base + 1] = resp.pixels[base + 1];
        resp.pixels[base + 2] = resp.pixels[base + 2];
        resp.pixels[base + 3] = 255;
      }
    }
    resp.context.putImageData(resp.imgData, 0, 0);
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding: 10px 20px;
  .nav {
    padding: 10px 0;
    a {
      padding: 5px;
      display: inline-block;
    }
  }
  .main {
    width: 500px;
    margin: 0 auto;
    text-align: center;
  }
}
</style>
