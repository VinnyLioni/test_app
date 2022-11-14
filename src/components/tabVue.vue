<template>
    <div class="table-vue">
        <b-table sticky-header hover :fields="headers" :items="MyItens" 
        :select-mode="selectMode" selectable @row-selected="onRowSelected">
            <template role="row-table"></template>
        </b-table>
    </div>
</template>

<script>
export default {
    name: 'TableVue',
    props: [ 'headers', 'MyItens', 'selectMode' ],
    methods: {
        // onRowSelected(){
        //     this.$emit('SelectItem')
        // }
    }
}
</script>

<style>




</style>