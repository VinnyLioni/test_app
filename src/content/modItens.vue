<template>
  <div class="mod-itens">
    <div id="show-itens">
      <header-itens title="Cadastro de Itens" icon="fas fa-shapes pr-2" @backRouter="goBack()"/>  
      <edit-vue @openMyModal="showModal()" />
      <transition name="slide">
        <modal-vue v-if="isModalVisible" @closeMd="closeModal()">
            <div class="header-modal" slot="header">
                Cadastro do Item
            </div>
            <main class="body-modal" slot="body">
                <div class="modal-register">
                    <input type="hidden" id="codi-item">
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
                <div class="footer-modal">
                    <button id="save-itens"><i class="fas fa-upload"></i> Salvar</button>
                </div>
            </footer>
        </modal-vue>
      </transition>
    </div>
    <div class="myTab">
        <table-vue :headers="myHeaders" :items="myItems">
        </table-vue>
    </div>
  </div>
</template>

<script>
import headerItens from '../components/headerItens.vue'
import ModalVue from '../components/ModalVue.vue'
import TableVue from '../components/tabVue.vue'
import editVue from '../components/editButtons.vue'

export default {
  name: "modItens",
  components: { headerItens,ModalVue,TableVue,editVue },
  data(){
    return {
        isModalVisible: false,
        selected: null,
        unity: "",
        myHeaders: [
            { key: 'CODI', label: 'Código', sortable: true},
            { key: 'DES', label: 'Descrição', sortable: true},
            { key: 'CGRU', label: 'Grupo', sortable: true},
            { key: 'UN', label: 'Unidade de Medida', sortable: true}
        ],
        myItems: [
            { CODI: '100', DES: 'Turbina HX-40', CGRU: 'Turbinas', UN: 'PÇ'},
            { CODI: '200', DES: 'Turbina HX-35', CGRU: 'Turbinas', UN: 'PÇ'},
            { CODI: '300', DES: 'Turbina HX-55', CGRU: 'Turbinas', UN: 'PÇ'},
            { CODI: '400', DES: 'Fueltech FT-450', CGRU: 'Turbinas', UN: 'PÇ'},
            { CODI: '500', DES: 'Fueltech FT-550', CGRU: 'Turbinas', UN: 'PÇ'},
            { CODI: '600', DES: 'Manometro 60mm Cronomac', CGRU: 'Turbinas', UN: 'PÇ'},
            { CODI: '700', DES: 'Manometro 52mm AutoMeter', CGRU: 'Turbinas', UN: 'PÇ'},
            { CODI: '800', DES: 'Mufla 2E', CGRU: 'Turbinas', UN: 'PÇ'},
            { CODI: '900', DES: 'Mufla 3E', CGRU: 'Turbinas', UN: 'PÇ'},
            { CODI: '1000', DES: 'Weber 450', CGRU: 'Turbinas', UN: 'PÇ'},
            { CODI: '1100', DES: 'Weber TLDZ', CGRU: 'Turbinas', UN: 'PÇ'},
            { CODI: '1200', DES: 'Bicos 80lb', CGRU: 'Turbinas', UN: 'PÇ'},
            { CODI: '1300', DES: 'Bicos 120lb', CGRU: 'Turbinas', UN: 'PÇ'},
            { CODI: '1400', DES: 'Bobina MI', CGRU: 'Turbinas', UN: 'PÇ'},
            { CODI: '1500', DES: 'Módulo SparkPro', CGRU: 'Turbinas', UN: 'PÇ'},
            { CODI: '1600', DES: 'BoostController', CGRU: 'Turbinas', UN: 'PÇ'}
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

    .header-modal {
        font-size: 1.3rem;
    }

    .body-modal input {
        padding: 5px;
    }

    .modal-register input {
        width: 200px;
        outline: none;
    }

    #first-line,
    #second-line {
        display: flex;
        justify-content: space-around;
        padding-bottom: 30px;
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

    #unity-select {
        width: 200px;
        outline: none;
        border-radius: 5px;
        padding: 5px;
    }


    #save-itens {
        color: #127a5b;
        border-radius: 5px;
        padding: 5px;
        transition: .2s;
    }

    #save-itens:hover {
        background-color: #1ab486;
        transition: .2s;
        color: #ffffff;
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
    }

    .myTab {
        display: flex;
        justify-content: space-around;
    }

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

</style>
