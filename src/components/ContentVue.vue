<template>
  <div class="content-vue">
    <div class="selects">
        <selection-erp style="cursor: pointer" title="Cadastro de Itens"/>
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
    }
}
</script>

<style>
    .selects {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>