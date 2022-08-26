import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMenuVisible: false,
  },
  getters: {},
  mutations: {
    toggleMenu(state, isVisible) {
      if (isVisible === undefined) {
        state.isMenuVisible = !state.isMenuVisible;
      } else {
        state.isMenuVisible = isVisible;
      }
      console.log("toggleMenu = " + state.isMenuVisible);
    },
  },
  actions: {},
  modules: {},
});
