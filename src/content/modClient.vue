<template>
  <div class="mod-client">
    <div id="show-clients">
        <header-itens title="Cadastro de Clientes" icon="fas fa-handshake pr-2" @backRouter="goBack()" />
        <edit-vue @openMyModal="showModal()"/>
        <transition name="slide">
            <modal-vue v-if="isModalVisible" @closeMd="closeModal()">
                <div class="header-modal" slot="header">
                    Cadastro de Cliente
                </div>
                <main class="body-modal" slot="body">
                    <div class="modal-register">
                        <input type="hidden" id='codi-client'>
                        <div id="first-line">
                            <div class="first-input">
                                <label>Razão Social</label>
                                <br>
                                <input type="text" name="" id="">
                            </div>
                            <div class="second-input">
                                <label>Nome Fantasia</label>
                                <br>
                                <input type="text" name="" id="">
                            </div>
                        </div>
                        <div id="second-line">
                            <div class="cnpjcpf">
                                <label for="">CNPJ/CPF</label>
                                <br>
                                <input type="text">
                            </div>
                            <div class="radio-input">
                                <label for="">Tipo de Pessoa</label>
                                <div class="radio-wrapper">
                                    <input type="radio" name="select" id="option-1" checked>
                                    <input type="radio" name="select" id="option-2">
                                    <label for="option-1" class="option option-1">
                                        <div class="dot-1">
                                            <span>Física</span>
                                        </div>
                                    </label>
                                    <label for="option-2" class="option option-2">
                                        <div class="dot-2">
                                            <span>Jurídica</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </modal-vue>
        </transition>
    </div>
    <div class="myTab">
        <table-vue :headers="myHeaders" :items="myForns"/>
    </div>
  </div>
</template>

<script>
import headerItens from '../components/headerItens.vue'
import ModalVue from '../components/ModalVue.vue'
import TableVue from '../components/tabVue.vue'
import editVue from '../components/editButtons.vue'

export default {
    name: 'modClient',
    components: { headerItens, ModalVue, TableVue, editVue },
    data(){
        return {
            isModalVisible: false,
            selected: null,
            unity: "",
            myHeaders: [
                { key: 'codi', label: 'Código', sortable: true },
                { key: 'nome', label: 'Nome', sortable: false},
                { key: 'fantasia', label: 'Fantasia', sortable: false},
                { key: 'pjpf', label: 'Tipo de Cadastro', sortable: true },
                { key: 'situacao', label: 'Situação', sortable: true }
            ],
            myForns: [
                { codi: '1010', nome: 'INCOSYSTEM', fantasia: 'Stout Software', pjpf: 'Jurídica', situacao: 'Ativa'},
                { codi: '1020', nome: 'JS Sucatas', fantasia: 'JS Reciclagem', pjpf: 'Jurídica', situacao: 'Ativa'},
                { codi: '1030', nome: 'Banho e Tosa Secos e Molhados', fantasia: 'Di-Pets', pjpf: 'Jurídica', situacao: 'Ativa'},
                { codi: '1040', nome: 'Vinicius Lioni Rodrigues da Silva', fantasia: 'Vini', pjpf: 'Física', situacao: 'Ativa'},
                { codi: '1050', nome: 'Mikhaele Ogeda', fantasia: 'Mika', pjpf: 'Física', situacao: 'Jurídica'},
                { codi: '1060', nome: 'Direitos Jurídicos - Pratika', fantasia: 'Pratika Imóveis', pjpf: 'Jurídica', situacao: 'Ativa'},
                { codi: '1070', nome: 'Kog Games', fantasia: 'Atomic Trash MotherFucker', pjpf: 'Jurídica', situacao: 'Inativa'},
                { codi: '1080', nome: 'LUG', fantasia: 'Level Up Games', pjpf: 'Jurídica', situacao: 'Inativa'},
                { codi: '1090', nome: 'HTD', fantasia: 'HTD - Sistemas', pjpf: 'Jurídica', situacao: 'Ativa'},
                { codi: '1100', nome: 'LL Eireli', fantasia: 'LL Redes & Internet', pjpf: 'Jurídica', situacao: 'Ativa'},
                { codi: '1110', nome: 'David Freitas .co', fantasia: 'DevFreitas', pjpf: 'Jurídica', situacao: 'Ativa'},
                { codi: '1120', nome: 'Gataticos Eireli', fantasia: 'Gataticos Acessórios', pjpf: 'Jurídica', situacao: 'Ativa'},
                { codi: '1130', nome: 'MK Software', fantasia: 'MK ERP', pjpf: 'jurídica', situacao: 'Inativa'},
            ]
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
        }
    }
}
</script>

<style>

    .mod-client {
        height: 80vh;
        background-color: #ffffff;
        border-radius: 5px;
    }
    
    #show-clients {
        display: flex;
        justify-content: space-between;
        flex-flow: wrap;
        border-radius: 5px;
        padding: 10px;
    }

    #first-line {
        display: flex;
        justify-content: space-around;
        padding-bottom: 30px;
    }

    #second-line {
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        align-content: stretch;
        padding-bottom: 30px;
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

    .myTab {
        display: flex;
        justify-content: space-around;
    }

    input[type="text"] {
        border-radius: 5px;
    }


    input[type="radio"] {
        display: none;
    }

    .radio-wrapper {
        /* background: #ffffff; */
        /* padding: 2px; */
        display: flex;
        border-radius: 5px;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-content: space-between;
        width: 200px;
        height: 50px;
    }

    #option-1:checked ~ .option-1,
    #option-2:checked ~ .option-2 {
        background-color: #6d7fcc;
        color: #ffffff;
        border-radius: 5px;
        padding: 10px;
        transition: .3s ease;
        height: 34px;
    }

    .option-1, .option-2 {
        background-color: #ffffff;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        width: 90px;
        height: 34px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .option-1, .option-2 span {
        font-size: 1rem;
    }


        /* .radio-wrapper {
            display: flex;
            background: #ffffff;
            height: 100px;
            width: 400px;
            align-items: left;
            justify-content: space-evenly;
            border-radius: 5px;
            padding: 20px 15px;
        }
    
        .radio-wrapper .option {
            background: #ffffff;
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            margin: 0 10px;
            border-radius: 5px;
            cursor: pointer;
            padding: 0 10px;
            border: 2px solid lightgray;
            transition: all .3s ease;
        }
    
        .radio-wrapper .option .dot {
            height: 20px;
            width: 20px;
            background: #d9d9d9;
            border-radius: 50%;
            position: relative;
        }
    
        .radio-wrapper .option .dot::before {
            position: absolute;
            content: "";
            top: 4px;
            left: 4px;
            width: 12px;
            height: 12px;
            background: #0069d9;
            border-radius: 50%;
            opacity: 0;
            transform: scale(1.5);
            transition: all .3s ease;
            }
    
        input[type="radio"] {
            display: none;
        }
    
        #option-1:checked:checked ~ .option-1,
        #option-2:checked:checked ~ .option-2 {
            border-color: #0069d9;
            background: #0069d9;
        }
    
        #option-1:checked:checked ~ .option-1 .dot,
        #option-2:checked:checked ~ .option-2 .dot {
            background: #ffffff;
        }
    
        #option-1:checked:checked ~.option-1 .dot::before,
        #option-2:checked:checked ~.option-2 .dot::before {
            opacity: 1;
            transform: scale(1);
        }
    
        .radio-wrapper .option span {
            font-size: 1.2rem;
            color: #808080;
            padding-left: 50px;
            justify-content: right;
            align-items: flex-end;
            justify-content: space-evenly;
        }
    
        #option-1:checked:checked ~ .option-1 span,
        #option-2:checked:checked ~ .option-2 span {
            color: #ffffff;
        }
     */
    
</style>