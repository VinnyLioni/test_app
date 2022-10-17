<template>
    <div class="table-vue">
        <!-- <b-table sticky-header hover :fields="headers" :items="items">
        </b-table> -->
        <div class="table-wrapper">
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
        </div>
    </div>
</template>

<script>
export default {
    name: 'TableVue',
    props: [ 'headers', 'items']
}
</script>

<style>
    /* .table-vue {
        width: 100%;
        color: #3b4472;
        cursor: pointer;
    }

    .table thead th {
        background-color: #7d8199 !important;
        color: #fefefe !important;
        vertical-align: middle !important;
        border-radius: 5px;
    }

    .table thead {
        border-radius: 5px !important;
    } */

    .table-vue {
        cursor: pointer;
    }

    h2 {
        text-align: center;
        font-size: 18px;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #ffffff;
        padding: 10px 0;
        width: 100%;
    }

    .table-wrapper {
        /* margin: 10px 10px; */
        padding: 5px;
        /* box-shadow: 0px 35px 50px rgba(0, 0, 0, 0.2); */
        border-radius: 5px;
    }

    .fl-table {
        border-radius: 5px;
        font-size: 1.3rem;
        /* font-weight: normal; */
        border: none;
        border-collapse: collapse;
        width: 100%;
        max-width: 100%;
        white-space: nowrap;
        background-color: #ffffff;
    }

    .fl-table td {
        border-right: 1px solid #f8f8f8;
        font-size: 1.1rem;
    }

    .fl-table thead th {
        color: #ffffff;
        padding: 8px;
        background: #6d7fcc;
    }

    .fl-table thead th:first-child {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    .fl-table thead th:last-child {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }

 @media (max-width: 767px) {
    .fl-table {
        display: block;
        width: 100%;
    }
    .table-wrapper:before{
        content: "Scroll horizontally >";
        display: block;
        text-align: right;
        font-size: 11px;
        color: white;
        padding: 0 0 10px;
    }
    .fl-table thead, .fl-table tbody, .fl-table thead th {
        display: block;
    }
    .fl-table thead th:last-child{
        border-bottom: none;
    }
    .fl-table thead {
        float: left;
    }
    .fl-table tbody {
        width: auto;
        position: relative;
        overflow-x: auto;
    }
    .fl-table td, .fl-table th {
        padding: 20px .625em .625em .625em;
        height: 60px;
        vertical-align: middle;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
        width: 120px;
        font-size: 13px;
        text-overflow: ellipsis;
    }
    .fl-table thead th {
        text-align: left;
        border-bottom: 1px solid #f7f7f9;
    }
    .fl-table tbody tr {
        display: table-cell;
    }
    .fl-table tbody tr:nth-child(odd) {
        background: none;
    }
    .fl-table tr:nth-child(even) {
        background: transparent;
    }
    .fl-table tr td:nth-child(odd) {
        background: #F8F8F8;
        border-right: 1px solid #E6E4E4;
    }
    .fl-table tr td:nth-child(even) {
        border-right: 1px solid #E6E4E4;
    }
    .fl-table tbody td {
        display: block;
        text-align: center;
    }
}



</style>