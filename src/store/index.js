import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMenuVisible: false,
    // isModuleSelected: false,
    IsModalVisible: false,
    isLoading: false,
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
    toggleModal(state, isVisible) {
      if (isVisible === undefined) {
        state.IsModalVisible = !state.IsModalVisible;
      } else {
        state.IsModalVisible = isVisible;
      }
      console.log("toggleModal = " + state.IsModalVisible);
    },
    toggleSelected(state, isSelected) {
      if (isSelected === undefined) {
        state.IsItemSelected = !state.IsItemSelected;
      } else {
        state.IsItemSelected = isSelected;
      }
      console.log("toggleModal = " + state.IsItemSelected);
    },
    setLoading(state, payload) {
      state.isLoading = payload;
      console.log(state.isLoading, "lucas gay");
    },
  },
  actions: {},
  modules: {},
});
