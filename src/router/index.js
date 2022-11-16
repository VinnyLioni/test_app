import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";
import ContentVue from "../components/ContentVue";
import MainContentVue from "../components/MainContent";
import modItens from "../content/modItens";
import modClient from "../content/modClient";
import ModalVue from "../components/ModalVue";
import asusuVue from "../content/asusuVue";
import LearningVue from "../content/Learning";
import ConfigVue from "../components/ConfigVue";
import LearningFirebase from "../content/Learning2";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: MainContentVue,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/cadastros",
    name: "cadastros",
    component: ContentVue,
  },
  {
    path: "/config",
    name: "config",
    component: ConfigVue,
  },
  {
    path: "/itens",
    name: "itens",
    component: modItens,
  },
  {
    path: "/teste",
    name: "modal",
    component: ModalVue,
  },
  {
    path: "/clients",
    name: "clients",
    component: modClient,
  },
  {
    path: "/users",
    name: "asusu",
    component: asusuVue,
  },
  {
    path: "/learning",
    name: "learning",
    component: LearningVue,
  },
  {
    path: "/learning2",
    name: "learning2",
    component: LearningFirebase,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
