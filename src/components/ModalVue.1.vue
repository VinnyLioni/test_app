<template>
  <transition name="fade" mode="out-in">
  <div id="back-modal">
    <div id="modal">
      <div id="modal-space">
        <div id="exit" @click='close()'>
          <i class="fas fa-x"></i>
        </div>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'ModalVue',
  methods: {
    close(){
      this.$emit('closeMd')
    }
  }
}
</script>

<style>

  #back-modal {
    height: 100%;
    width: 100%;
    border-radius: 5px;
    /* display: flex; */
    background-color:#ffffff;
  }

  #modal {
    /* background-color: #919191; */
    border-radius: 5px;
    /* display: flex; */
    /* flex-direction: column; */
    border: none;
    
  }

  #modal-space {
    /* display: flex; */
    /* align-content: center; */
    /* background-color: #ffffffff; */
    height: 90%;
    width: 80%;
  }

  #exit {
    display: flex;
    cursor: pointer;
  }


    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    
    .fade-enter, .fade-leave-to {
        opacity: 0
    }

</style>