<template>
  <transition name="leaveEnter">
  <div class="modal-backdrop">
    <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
      <b-container class="modal-box">
        <header class="modal-header">
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
          </slot>
          <button type="button" class="btn-green" @click='close'></button>
        </footer>
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
      this.$emit('close')
    }
  }
}
</script>

<style>

  .modal-backdrop {
    /* position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0; */
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    /* justify-content: center;
    align-items: center; */
  }

  .modal {
    background: #000;
    box-shadow: 2px 2px 20px 1px;
    /* overflow-x: auto; */
    display: flex;
    flex-direction: column;
  }

  .modal-box {
    background-color: #4aae9b;
    border-radius: 20px;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    /* display: flex; */
  }

  .modal-header {
    /* position: relative; */
    border-bottom: 1px solid #eeeeee;
    color: #4aae9b;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    /* justify-content: flex-end; */
  }

  .modal-body {
    /* position: relative; */
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    /* font-size: 10px; */
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4aae9b;
    background: transparent;
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
  }

  .leaveEnter-leave-active,
  .leaveEnter-enter-active {
    transition: opacity .3s ease !important;
  }

</style>