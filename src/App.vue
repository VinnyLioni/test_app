<template>
  <div id="app">
    <loading-vue v-if="isLoading"/>
    <my-toasted v-if="isFinished"/>
    <home-view/>
  </div>
</template>

<script>
import HomeView from '@/views/HomeView.vue'
import LoadingVue from '@/components/LoadingVue.vue'
import myToasted from '@/components/toastedVue.vue'

import { mapState } from 'vuex'

export default {
  name: 'App',
  components: { HomeView, LoadingVue, myToasted },
  data(){
    return {

    }
  },
  computed: mapState(['isLoading', 'isFinished'])
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  color: #2c3e50;
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #e1e1e1;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #b5bacf;
  transition: .2s;
}
::-webkit-scrollbar-thumb:active {
  background: #eaeeff;
}
::-webkit-scrollbar-track {
  background: #eaeeff;
  border: 0px none #ffffff;
  border-radius: 46px;
}
::-webkit-scrollbar-track:hover {
  background: #e1e1e1;
}
::-webkit-scrollbar-track:active {
  background: #e1e1e1;
}
::-webkit-scrollbar-corner {
  background: transparent;
}

#content-view {
    transform: translateX(0);
}

#content-view:active {
    transform: translateX(10);
}


</style>
