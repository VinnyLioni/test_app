<template>
  <transition name="leaveEnter">
  <div class="modal-backdrop">
    <div class="modal" role="dialog" aria-labelledby="modalTitle"
     aria-describedby="modalDescription">
      <b-container class="modal-box">
        <div id="exit" @click='close()'>
          <i class="fas fa-x"></i>
        </div>
        <!-- </button> -->
        <!-- <header class="modal-header">
          <slot name="header">
            Esse é um título padrão
          </slot>
          <button type="button" class="btn-close" @click="close">
            <i class="fas fa-x"></i>
          </button>
        </header>
        <section class="modal-body">        
          <slot name="body">
            Espaço padrão do corpo da modal
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            Espaço padrão para o rodapé
          </slot> -->
        <!-- </footer> -->
        <!-- <button type="button" class="btn-green" @click='close'>FECHAR</button> -->
      </b-container>
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

  .modal-backdrop {
    /* display: flex; */
    position: absolute;
    height: 100vh
  }

  .modal {
    background: #000;
    /* box-shadow: 2px 2px 20px 1px; */
    display: flex;
    border-radius: 20px;
    flex-direction: column;
    /* z-index: 10; */
    /* height: 80%;
    width: 80%; */
    /* position: absolute; */
    
    
  }

  .modal-box {
    /* background-color: #4aae9b; */
    border-radius: 20px;
  }

  #exit {
    display: flex;
    cursor: pointer;
  }

  .btn-green {
    color: white;
    background: #4aae9b;
    border: 1px solid #4aae9b;
    border-radius: 2px;
  }

  .leaveEnter-enter,
  .leaveEnter-leave-to {
    opacity: 0;
    transition: .3s;
  }

  .leaveEnter-leave-active,
  .leaveEnter-enter-active {
    transition: opacity .3s ease !important;
  }

</style>