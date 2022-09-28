<template>
  <div class="mod-itens">
    <div id="show-itens">
      <header-itens title="Cadastro de Itens" icon="fas fa-shapes pr-2" @backRouter="goBack()"/>  
      <!-- <div id="header-itens">
        <span>Cadastro de Itens</span>
        <div id="return" class="p-2" @click="goBack()">
            Voltar<i class="fas fa-door-open pl-2 pt-1"></i>
        </div>
      </div> -->
        <!-- <hr> -->
      <div id="session-itens">
        <button id="button-itens" class="mr-1" @click="showModal">
            <i class="fas fa-plus pr-1"></i>Cadastrar
        </button>
        <button id="edit-itens" class="mr-1">
            <i class="fas fa-pen-to-square pr-1"></i>Editar
        </button>
        <button id="view-itens">
            <i class="fas fa-eye pr-1"></i>Visualizar
        </button>
        <button id="print-itens">
            <i class="fas fa-print pr-1"></i>Imprimir
        </button>
      </div>
      <hr>
      <modal-vue v-if="isModalVisible" @closeMd="closeModal()">
      </modal-vue>
      <div class="tab-itens">
        <ul id="table-1"></ul>
      </div>
    </div>
  </div>
</template>

<script>
import headerItens from '../components/headerItens.vue'
import ModalVue from '../components/ModalVue.vue'

export default {
  name: "modItens",
  components: { headerItens,ModalVue },
  data(){
    return {
        isModalVisible: false
    }
  },
  methods: {
    goBack(){
      this.$router.go(-1)
    },
    showModal(){
        this.isModalVisible=true
    },
    closeModal(){
        this.isModalVisible=false
        console.log(this.isModalVisible)
    }
  }
};

</script>

<style>
    /* .tab-itens {

    } */

    .mod-itens {
        height: 80vh;
        background-color: #ffffff;
        border-radius: 5px;
    } 

    #show-itens {
        display: flex;
        justify-content: space-between;
        flex-flow: wrap;
        border-radius: 5px;
        padding: 10px;
    }

    /* #header-itens {
        display: flex;
        justify-content: space-between;
        width:100%;
        padding: 10px;
        padding-bottom: 15px;
        font-size: 25px;
    }

    #header-itens span {
        align-content: flex-start;
        padding-top: 5px;
    }

    #return {
        font-size: 1.2rem;
        align-self: flex-end;
        border: none;
        color: #b97676;
        background-color: #ffffff;
        padding-bottom: 10px;
        border-radius: 5px;
        transition: .2s;
        font-size: 1.1rem;
        cursor: pointer;
    }

    #return:hover {
        background-color: #b97676;
        color: #ffffff;
    } */

    #session-itens {
        padding-left: 10px;
    }

    #button-itens {
        /* align-items: flex-end; */
        background-color: #ffffff;
        color: #1ab486;
        border: none;
        border-radius: 5px;
        padding: 8px;
        transition: .2s;
    }

    #button-itens:hover {
        background-color: #1ab486;
        color: #ffffff;
        transition: .2s;
    }

    #view-itens {
        padding-left: 20px;
        /* margin-left: 2px; */
        border: none;
        background-color: #ffffff;
        color: #989fbe;
        border-radius: 5px;
        padding: 8px;
        transition: .2s;
    }

    #view-itens:hover {
        background-color: #989fbe;
        color: #ffffff;
        transition: .2s;
    }

    #edit-itens {
        border: none;
        background-color: #ffffff;
        color: #7c80a0;
        border-radius: 5px;
        padding: 8px;
        transition: .2s;
    }

    #edit-itens:hover {
        background-color: #7c80a0;
        color: #ffffff;
        transition: .2s;
    }

    #print-itens {
        border: none;
        background-color: #ffffff;
        color: #387080;
        border-radius: 5px;
        padding: 8px;
        transition: .2s;
    }

    #print-itens:hover {
        background-color: #387080;
        color: #ffffff;
        transition: .2s;
    }
</style>
