<template>
  <div id="app">
    <home-view/>
  </div>
</template>

<script>
import HomeView from '@/views/HomeView.vue'

export default {
  name: 'App',
  components: { HomeView },
  methods: {

  },
  created(){
    // this.$http.post('asusu.json', {
    //   nome: 'Vinicius',
    //   email: 'vinnylioni@gmail.com'
    // }).then(res => console.log(res))
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
