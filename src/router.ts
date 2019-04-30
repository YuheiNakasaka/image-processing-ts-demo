import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Lenna from "@/views/Lenna.vue";
import Nega from "@/views/Nega.vue";
import GrayScale from "@/views/GrayScale.vue";
import Thresholding from "@/views/Thresholding.vue";
import Gaussian from "@/views/Gaussian.vue";
import Laplacian from "@/views/Laplacian.vue";

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
          path: "/lenna",
          name: "lenna",
          component: Lenna
        },
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
        }
      ]
    }
  ]
});
