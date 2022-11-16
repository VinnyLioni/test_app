<template>
  <div class="learning-firebase">
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
        <b-button class="button-learning ml-2" variant="warning" @click="Carregar">Salvar</b-button>
    </b-card>
    <hr>
    <b-list-group>
        <b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
            <strong>ID: </strong> {{ usuario.id }}
            <strong>Nome: </strong> {{ usuario.nome }}
            <strong>E-mail: </strong> {{ usuario.email }}
        </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
    name: 'LearningFirebase',
    data(){
        return {
            usuarios: [],
            usuario: {
                nome: '',
                email:''
            }
        }
    },
    methods: {
        Salvar(){
            this.$http.post('learning.json', this.usuario)
            /* eslint-disable-next-line */
                .then(resp => {
                    this.usuario.nome = ''
                    this.usuario.email = ''
                })
            
        },
        Carregar(){
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
    .button-learning {
        color: #000000
    }

    .button-learning:hover {
        color: #ffffff
    }
</style>