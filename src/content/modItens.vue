<template>
  <div class="mod-itens">
    <div id="show-itens">
      <header-itens title="Cadastro de Itens" icon="fas fa-shapes pr-2" @backRouter="goBack()"/>  
        <div id="session-itens">
            <button id="button-itens" class="mr-1" @click="showModal">
                <i class="fas fa-plus pr-1"></i>Cadastrar
            </button>
            <button id="edit-itens" class="mr-1" @click="showModal">
                <i class="fas fa-pen-to-square pr-1"></i>Editar
            </button>
            <button id="view-itens" class="mr-1" @click="showModal">
                <i class="fas fa-eye pr-1"></i>Visualizar
            </button>
            <button id="print-itens">
                <i class="fas fa-print pr-1"></i>Imprimir
            </button>
        </div>
      <transition name="slide">
        <modal-vue v-if="isModalVisible" @closeMd="closeModal()">
            <div class="header-modal" slot="header">
                Cadastro do Item
            </div>
            <main class="body-modal" slot="body">
                <div class="modal-register">
                    <div id="first-line">
                        <div class="first-input">
                            <label>Descrição</label>
                            <br>
                            <input type="text" id="first-input">
                        </div>
                        <div class="second-input">
                            <label>Descrição Completa</label>
                            <br>
                            <input type="text" id="second-input">
                        </div>
                    </div>
                    <div id="second-line">
                        <div class="first-input">
                            <label>Grupo de Item</label>
                            <br>
                            <div id="group-input">
                                <input type="text">
                                <button><i class="fas fa-bars"></i></button>
                            </div>
                        </div>
                        <div class="second-input">
                            <label for="units">Unidade de Medida</label>
                            <br>
                            <select name="unit-select" id="unity-select">
                                <option value="" disabled>Selecione o Controle</option>
                                <option value="UN">Unidade</option>
                                <option value="CX">Caixa</option>
                                <option value="PC">Pacote</option>
                                <option value="KG">Quilograma</option>
                                <option value="MG">Miligrama</option>
                                <option value="L">Litros</option>
                            </select>
                        </div>
                    </div>
                </div>
            </main>
            <footer slot="footer">
                <div class="footer-modal"></div>
            </footer>
        </modal-vue>
      </transition>
      <transition name="new-slide">
      <div class="tab-itens" >
        <ul id="table-1">
            <li class="1">1</li>
            <li class="2">2</li>
            <li class="3">3</li>
            <li class="4">4</li>
            <li class="5">5</li>
            <li class="6">6</li>
        </ul>
      </div>
      </transition>
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
        isModalVisible: false,
        selected: null,
        unity: "",
        gforn: [
            { value: null, text: 'Selecione um Fornecedor'},
            { value: '1', text: 'teste'}
        ]
    }
  },
  methods: {
    goBack(){
      this.$router.go(-1)
    },
    showModal(){
        this.isModalVisible=true
        console.log(this.isModalVisible)
    },
    closeModal(){
        this.isModalVisible=false
        console.log(this.isModalVisible)
    }
  }
};

</script>

<style>

    .body-modal input {
        padding: 5px;
    }

    #first-input {
        border-radius: 5px;
        text-align: left;
    }

    #second-input {
        border-radius: 5px;
    }

    #group-input {
        width: 200px;
    }

    #group-input input {
        width: 170px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    #group-input button {
        width: 30px;
        height: 34px;
        background-color: #ffffff;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    #group-input button i {
        font-size: 1rem;
        display: flex;
        padding: 10px;
        align-content: center;
        justify-content: center;
    }

    .modal-register input {
        width: 200px
    }

    #unity-select {
        width: 200px;
        outline: none;
        border-radius: 5px;
        padding: 5px;
    }


    /* #unity-select option {
        cursor: pointer;
    }  */

    .modal-register input {
        outline: none;
    }

    /* .first-input {
        width: 50%;
    }

    .second-input {
        width: 50%
    } */

    #first-line {
        display: flex;
        justify-content: space-around;
        padding-bottom: 30px;
    }
    
    #second-line {
        display: flex;
        justify-content: space-around;
        padding-bottom: 30px;
    }

    #search-box span {
        width: 100%;
        display: flex;
    }

    #search-box input {
        border: none ;
        outline: none;
        border-radius: 5px;
    }

    #search-box input:focus {
        border: none ;
        /* border-radius: 5px; */
    }
    
    .header-modal {
        font-size: 1.3rem;
    }

    /* .tab-itens {

    } */

    @keyframes slide-in {
        from { transform: translateY(10px) translateX(0px); opacity: 0}
        to { transform: translateY(0px) translateX(0px); opacity: 1}
    }

    @keyframes slide-out {
        from { transform: translateY(0px); opacity: 1;}
        to { transform: translateY(0px) translateX(0px); opacity: 0;}
    }

    .slide-enter-active {
        animation: slide-in .2s ease;
    }

    .slide-leave-active {
        animation: slide-out .2s ease;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    
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

    #session-itens {
        display: flex;
        align-content: flex-start;
        padding-left: 10px;
        width: 100%;
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
