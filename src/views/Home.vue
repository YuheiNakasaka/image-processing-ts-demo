<template>
  <div class="home">
    <ul class="nav">
      <li>
        <router-link to="/">HOME</router-link>
        <router-link to="/lenna">Lenna</router-link>
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
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Home extends Vue {
  mounted() {}
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
}
</style>
