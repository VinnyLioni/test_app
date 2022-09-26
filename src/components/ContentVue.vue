<template>
  <div class="content-vue">
    <div class="selects">
        <selection-erp style="cursor: pointer" title="Cadastro de Itens" @getGoTo="goToItens()"/>
        <selection-erp style="cursor: pointer" title="Teste modal" @getGoTo="goToModal()"/>
    </div>
  </div>
</template>

<script>
import SelectionErp from '../content/SelectionErp.vue'
export default {
    name: 'ContentVue',
    components: { SelectionErp },
    methods: {
        goToItens(){
            this.$router.push(
                '/itens'
            )
        },
        goToModal(){
            this.$router.push(
                '/modal'
            )
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
    }

    #content-view {
        transform: translateX(0);
    }

    #content-view:active {
        transform: translateX(10);
    }
</style>