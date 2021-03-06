import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Nega from "@/views/Nega.vue";
import GrayScale from "@/views/GrayScale.vue";
import Thresholding from "@/views/Thresholding.vue";
import Gaussian from "@/views/Gaussian.vue";
import Laplacian from "@/views/Laplacian.vue";
import Sharping from "@/views/Sharping.vue";
import Bilateral from "@/views/Bilateral.vue";
import Mosaic from "@/views/Mosaic.vue";
import PixelArt from "@/views/PixelArt.vue";
import Glitch from "@/views/Glitch.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: [
        {
          path: "/nega",
          name: "nega",
          component: Nega
        },
        {
          path: "/grayscale",
          name: "grayscale",
          component: GrayScale
        },
        {
          path: "/thresholding",
          name: "thresholding",
          component: Thresholding
        },
        {
          path: "/gaussian",
          name: "gaussian",
          component: Gaussian
        },
        {
          path: "/laplacian",
          name: "laplacian",
          component: Laplacian
        },
        {
          path: "/sharping",
          name: "sharping",
          component: Sharping
        },
        {
          path: "/bilateral",
          name: "bilateral",
          component: Bilateral
        },
        {
          path: "/mosaic",
          name: "mosaic",
          component: Mosaic
        },
        {
          path: "/pixel-art",
          name: "pixel-art",
          component: PixelArt
        },
        {
          path: "/glitch",
          name: "glitch",
          component: Glitch
        }
      ]
    }
  ]
});
