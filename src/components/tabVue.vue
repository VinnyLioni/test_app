<template>
    <div class="table-vue">
        <b-table sticky-header hover :fields="headers" :items="items">
        </b-table>
    </div>
</template>

<script>
export default {
    name: 'TableVue',
    props: [ 'headers', 'items']
}
</script>

<style>
    .table-vue {
        width: 100%;
        color: #3b4472;
        cursor: pointer;
    }

    .table thead th {
        background-color: #7d8199 !important;
        color: #fefefe !important;
        vertical-align: middle !important;
        /* border-radius: 5px; */
    }

    .table thead {
        border-radius: 5px !important;
    }


</style>