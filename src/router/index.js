import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";
import ContentVue from "../components/ContentVue";
import MainContentVue from "../components/MainContent";
import ModalVue from "../components/ModalVue";

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
    path: "/modal",
    name: "modal",
    component: ModalVue,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
