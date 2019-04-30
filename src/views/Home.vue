<template>
  <div class="home">
    <ul class="nav">
      <li>
        <router-link to="/">HOME</router-link>
        <router-link to="/lenna">Lenna</router-link>
        <router-link to="/nega">Nega</router-link>
        <router-link to="/grayscale">GrayScale</router-link>
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
