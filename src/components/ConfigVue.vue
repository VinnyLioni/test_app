<template>
  <div class="content-vue">
    <div class="selects">
        <header-itens title="Cadastros" icon="fas fa-book pt-1 pr-2" @backRouter="goBack"/>
        <!-- <div id="select-title">
           <i class="fas fa-book pr-2 pt-1"></i><span>Cadastros</span>
        </div> -->
        <div id="select-border">
            <div id="select-session">
                <selection-erp style="cursor: pointer" title="Usuários" 
                icon="ffas fa-users pt-1 pr-2" @getGoTo="goToUsers()"/>
            </div>
            <hr>
            
        </div>
    </div>
  </div>
</template>

<script>
import headerItens from '../components/headerItens.vue'
import SelectionErp from '../content/SelectionErp.vue'
export default {
    name: 'ContentVue',
    components: { SelectionErp, headerItens },
    methods: {
        goToUsers(){
            this.$router.push(
                '/users'
            )
        },
        goBack(){
             this.$router.go(-1)
    }
    }
}
</script>

<style>
    .selects {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        background-color: #ffffff;
        border-radius: 5px;
        padding: 10px;
    }

    #select-border {
        display: flex;
        margin: 10px;
        justify-content: space-between;
        width: 100%;
        flex-wrap: wrap;
    }

    #select-session {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 10px;
    }

    /* #select-title {
        display: flex;
        padding-left: 20px;
        padding-top: 25px;
        padding-bottom: 15px;
        font-size: 25px;
    } */
</style>