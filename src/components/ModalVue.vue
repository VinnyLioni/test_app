<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
            <button class="modal-default-button p-1" @click="close()">Voltar <i class="fas fa-xmark p-1"></i></button>
          </div>
          <div class="modal-body">
            <slot name="body">
              
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              default footer
            </slot>
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
  },
  data(){
    return {
      showModal: false
    }
  }
}
</script>

<style>

  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    /* transition: opacity 0.3s ease; */
    border-radius: 5px;
    /* -webkit-box-shadow: 0px 0px 41px -5px rgba(0,0,0,0.28);
    -moz-box-shadow: 0px 0px 41px -5px rgba(0,0,0,0.28);
    box-shadow: 0px 0px 41px -5px rgba(0,0,0,0.28); */
    border: none;
    
  }

  .modal-wrapper {
    display: table-cell;
    padding-top: 5%;
  }

  .modal-container {
    width: 600px;
    margin: 0px auto;
    padding: 5px 10px;
    background-color: #eaeeff;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all .3s ease;
  }

  [slot="footer"] {
    display: flex;
  }

  .modal-header {
    display: flex;
    /* justify-content: center; */
  }

  .modal-header h3 {
    margin-top: 0;
    color: #343953;
  }

  .modal-body {
    /* display: flex;
    flex-flow: column; */
    margin: 20px 0;
  }

  .modal-default-button {
    padding-top: 0px;
    margin-top: 2px;
    display: flex;
    transition: .3s;
    border-radius: 5px;
    color: #b97676;
    /* top: 0; */
  }

  .modal-default-button:hover {
    background-color: #b97676;
    color: #fff;
    transition: .3s;
    border-radius: 5px;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container, .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>