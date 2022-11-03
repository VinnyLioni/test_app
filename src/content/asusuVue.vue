<template>
  <div class="asusu-vue">
    <div id="show-users">
        <header-itens title="Cadastro de Usuários" icon="fas fa-user-pen pr-2" @backRouter="goBack()"></header-itens>
        <edit-vue @openMyModal="showModal()"></edit-vue>
        <transition name="slide">
            <modal-vue v-if="isModalVisible" @closeMd="closeModal()">
                <div class="header-modal" slot="header">
                    Cadastro de Usuário
                </div>
                <main class="body-modal" slot="body">
                    <div class="modal-register">
                        <input type="hidden" id="codi-asusu">
                        <div id="first-line">
                            <div class="first-input">
                                <label>Nome</label>
                                <br>
                                <input type="text" name="" id="first-input" v-model="user.nome">
                            </div>
                            <div class="second-input">
                                <label for="">E-mail</label>
                                <br>
                                <input type="email" name="" id="email-input" v-model="user.email">
                            </div>
                        </div>
                        <div id="second-line">
                            <div class="first-input">
                                <label for="">Senha</label>
                                <br>
                                <input type="text" name="" id="password-input" v-model="user.password">
                            </div>
                            <div class="second-input">
                                <label for="">Situação</label>
                                <div class="tipo-situacao">
                                    <input type="radio" name="choose" id="st-1">
                                    <input type="radio" name="choose" id="st-2">
                                    <label for="st-1" class="option option-1">
                                        <div class="dot-1">
                                            <span>Ativo</span>
                                        </div>
                                    </label>
                                    <label for="st-2" class="option option-2">
                                        <div class="dot-2">
                                            <span>Inativo</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer slot="footer">
                    <div class="footer-modal">
                        <button @click="saveUser" id="save-users"><i class="fas fa-upload"></i> Salvar</button>
                    </div>
                </footer>
            </modal-vue>
        </transition>
    </div>
    <div class="myTab">
        <table-vue :headers="myHeaders" :items="myUsers">

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
    name: 'asusuVue',
    components: { headerItens, ModalVue, TableVue, editVue },
    data(){
        return {
            isModalVisible: false,
            user: {
                codi: '',
                nome: '',
                email: '',
                st: ''
            },
            myHeaders: [
                { key: 'codi', label: 'Código', sortable: true },
                { key: 'nome', label: 'Nome', sortable: true },
                { key: 'email', label: 'Email', sortable: true },
                { key: 'st', label: 'Situação', sortable: true },
            ],
            myUsers: [
                {}
                // { codi: '10', nome: 'Vinicius', email:'vinnylioni@gmail.com', password: 'Vini001*', st: 'Ativo', dtcad: '22102022'},
                // { codi: '20', nome: 'Mikhaele', email:'ogedamika@gmail.com', password: '050115', st: 'Ativo', dtcad: '22102022'},
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
        },
        // saveUser(){
        //     this.$http.post('asusu.json', this.user)
        //         .then(() => {
        //             this.user.nome = ''
        //             this.user.email = ''
        //         })
        // },
        // loadUser(){
        //     this.$http('asusu.json', this.user).then(res => {
        //         this.user = res.data
        //         console.log(this.user)
        //     })
        // },
    },
    mounted(){
        this.$http.get('asusu.json', this.user)
        .then(resp => {
            this.user = resp.data
            this.myUsers = this.user
        })
    }
}
</script>

<style>
    .asusu-vue {
        height: 80vh;
        background-color: #ffffff;
        border-radius: 5px;
    }

    #show-users {
        display: flex;
        justify-content: space-between;
        flex-flow: wrap;
        border-radius: 5px;
        padding: 10px;
    }

    .myTab {
        display: flex;
        justify-content: space-around;
    }

    input[type="text"],
    input[type="email"] {
        outline: none;
        border-radius: 5px;
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

    .option-1, .option-2 {
        background-color: #ffffff;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        width: 90px;
        height: 34px;
        display: flex;
        justify-content: space-around;
    }
    
    .tipo-situacao {
        display: flex;
        border-radius: 5px;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-content: space-between;
        width: 200px;
        height: 50px;
    }

    #st-1:checked ~ .option-1,
    #st-2:checked ~ .option-2 {
        background-color: #6d7fcc;
        color: #ffffff;
        border-radius: 5px;
        padding: 10px;
        transition: .3s ease;
        height: 34px;
    }

    .footer-modal {
        display: flex;
        justify-content: space-between;
    }

    #save-users {
        color: #127a5b;
        border-radius: 5px;
        padding: 5px;
        transition: .2s;
        margin-right: 10px;
    }

    #save-users:hover {
        background-color: #127a5b;
        color: #ffffff;
        transition: .2s;
    }
    #load-users {
        color: #707691;
        border-radius: 5px;
        padding: 5px;
        transition: .2s;
    }

    #load-users:hover {
        background-color: #707691;
        color: #ffffff;
        border-radius: 5px;
        padding: 5px;
        transition: .2s;
    }
</style>