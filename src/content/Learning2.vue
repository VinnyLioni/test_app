<template>
  <div class="learning-firebase">
    <b-alert show dismissible v-for="mensagem in mensagens" :key="mensagem.texto" :variant="mensagem.tipo"> 
        {{ mensagem.texto }}
    </b-alert>
    <b-card>
        <b-form-group label="Nome">
            <b-form-input type="text" size="lg" 
            v-model="usuario.nome" placeholder="Informe o Nome"></b-form-input>
        </b-form-group>
        <b-form-group label="Email">
            <b-form-input type="text" size="lg" 
            v-model="usuario.email" placeholder="Informe o Email"></b-form-input>
        </b-form-group>
        <hr>
        <b-button class="button-learning" variant="success" @click="Salvar">Salvar</b-button>
        <b-button class="button-learning ml-2" variant="warning" @click="obterUsuario">Salvar</b-button>
    </b-card>
    <hr>
    <b-list-group>
        <b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
            <strong>ID: </strong> {{ usuario.id }}
            <strong>Nome: </strong> {{ usuario.nome }}
            <strong>E-mail: </strong> {{ usuario.email }}<br>
            <b-button class="button-list" @click="carregar(id)">Carregar</b-button>
            <b-button class="button-list" @click="excluir(id)">Excluir</b-button>
        </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
    name: 'LearningFirebase',
    data(){
        return {
            mensagens: [],
            usuarios: [],
            id: null,
            usuario: {
                nome: '',
                email:''
            }
        }
    },
    methods: {
        reload(){
            this.limpar()
            this.obterUsuario()
        },
        limpar(){
            this.usuario.nome=''
            this.usuario.email=''
            this.id=null
            this.mensagens = []
        },
        carregar(id){
            this.id = id
            this.usuario = { ...this.usuarios[id] }
        },
        excluir(id){
            this.$http.delete(`/learning/${id}.json`)
                .then(() => {
                    this.reload()
                    this.mensagens.push({
                        texto: 'Operação Realizada',
                        tipo: 'success'
                    })
                })
                .catch(() => {
                    this.mensagens.push({
                        texto: 'Problema para excluir!',
                        tipo: 'danger'
                    })
                })
        },
        Salvar(){
            const metodo = this.id ? 'put' : 'post'
            const finalUrl = this.id ? `/${this.id}.json` : '.json'
            this.$http[metodo](`/learning${finalUrl}`, this.usuario)
                .then(() => {
                    this.limpar()
                    this.obterUsuario()
                    this.mensagens.push({
                        texto: 'Operação Realizada',
                        tipo: 'success'
                    })
                })
            
        },
        obterUsuario(){
            this.$http('learning.json').then(res => {
                this.usuarios = res.data
            })
            console.log(this.usuarios)
        }
    },
    created(){
        // this.$http.post('learning.json', {
        //     nome: 'teste',
        //     email: 'teste@gmail.com'
        // }).then(res => console.log(res))
    }
}
</script>

<style>
    .button-learning, .button-list {
        color: #000000
    }

    .button-learning:hover, .button-list:hover {
        color: #ffffff
    }
</style>