<template>
    <div class="table-vue">
        <b-table sticky-header hover :fields="headers" :items="items">
        </b-table>
        <!-- <div class="table-wrapper">
            <table class="fl-table">
                <thead>
                    <tr>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'TableVue',
    props: [ 'headers', 'items']
}
</script>

<style>

    .table.b-table > thead > tr > [aria-sort=none], .table.b-table > tfoot > tr > [aria-sort=none] {
        background-image: none;
        transition: .3s;
    }

    .table.b-table > thead > tr {
        background-color: #525f9c;
    }

    .table.b-table > thead > tr > [aria-sort], .table.b-table > tfoot > tr > [aria-sort] {
        background-image: none;
        transition: .3s;
    }

    .table-vue {
        cursor: pointer;
        width: 99%;
    }

    [role=columnheader] {
        background-color: #6d7fcc !important;
        color: #ffffff !important;
        outline: none !important;
        border: none !important;
        position: sticky !important
    }

    /* [role=columnheader]:focus {
        background-color: #525f9c;
    } */

    [role=columnheader]:first-child{
        border-top-left-radius: 5px;
        background-color: #6d7fcc;
    }

    .table td, .table th {
        border-top: none;
    }

    [role=row] {
        border-top: none;
        transition: .2s;
    }

    [role=row]:hover {
        /* border-top: none; */
        transition: .2s;
    }


</style>