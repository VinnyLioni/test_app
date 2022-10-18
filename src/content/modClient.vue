<template>
  <div class="mod-client">
    <div id="show-clients">
        <header-itens title="Cadastro de Clientes" icon="fas fa-handshake pr-2" @backRouter="goBack()" />
        <edit-vue />
        <modal-vue v-if="isModalVisible" @closeModal="closeModal()"></modal-vue>
        <table-vue :headers="myHeaders" :items="myItems"/>
    </div>
  </div>
</template>

<script>
import  headerItens from '../components/headerItens.vue'
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
            myItems: [
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



</style>