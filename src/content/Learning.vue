<template>
    <div class="learning-vue">
        <div id="show-learning">
            <header-itens title="Area para Testes" icon="fas fa-hammer pr-1" @backRouter="goBack"></header-itens>
            <div class="first-area">
                <div class="my-card">
                    <div class="my-form">
                        <div class="first-form">
                            <label>Nome</label>
                            <br>
                            <input type="text" name="" class="learning-input"
                            v-model="usuario.nome" placeholder="Insira o Nome">
                        </div>
                        <div class="second-form">
                            <label for="">E-mail</label>
                            <br>
                            <input type="email" name="" id="" class="learning-input"
                            v-model="usuario.email" placeholder="Insira o E-mail">
                        </div>
                    </div>
                    <button class="save-button mr-2" @click.prevent="saveUser">Salvar</button>
                    <button class="load-button" @click="loadUser">Carregar</button>
                    <hr>
                    <tab-vue :headers="headers"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import headerItens from '../components/headerItens.vue'
import tabVue from '../components/tabVue.vue'

export default {
    name: 'LearningVue',
    components: { headerItens, tabVue },
    data(){
        return {
            usuarios: [],
            usuario: {},
            headers: [
                { key: 'id', label: 'Código', sortable: true},
                { key: 'nome', label: 'Nome', sortable: true},
                { key: 'email', label: 'E-mail', sortable: true},
            ]
        }
    },
    methods: {
        saveUser(){
            this.$http.post('learning.json', this.usuario)
            .then(() => {
                this.usuario.nome = ''
                this.usuario.email = ''
            })
        },
        loadUsers(){
            this.$http('learning.json').then(res => {
                this.usuarios = res.data
                console.log(this.usuarios)
            })
        },
        goBack(){
            this.$router.go(-1)
        }
    },
    mounted(){
        this.loadUsers()
    }
}
</script>

<style>

    .my-form label {
        align-content: flex-start;
        padding-right: 10px;
    } 

    .my-form input {
        background-color: #dbdbdb;
        padding: 5px;
    }

    .learning-vue {
        height: 80vh;
        background-color: #ffffff;
        border-radius: 5px;
    }

    #show-learning {
        display: flex;
        justify-content: space-between;
        flex-flow: wrap;
        border-radius: 5px;
        padding: 10px;
    }

    .first-area {
        display: flex;
        flex-wrap: wrap;
    }

    .first-form, .second-form {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-content: flex-end;
        flex-wrap: wrap;
        align-items: baseline;
        padding: 10px;
    }
    
    .load-button {
        color: #3d6383;
        padding: 5px;
        border-radius: 5px;
        transition: .3s;
    }

    .load-button:hover {
        background-color: #3d6383;
        color: #ffffff;
        padding: 5px;
        border-radius: 5px;
        transition: .3s;

    }

    .save-button {
        color: #1e6335;
        padding: 5px;
        border-radius: 5px;
        transition: .3s;
    }

    .save-button:hover {
        background-color: #1e6335;
        color: #ffffff;
        padding: 5px;
        border-radius: 5px;
        transition: .3s;
    }
</style>