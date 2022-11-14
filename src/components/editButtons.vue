<template>
    <div class="edit-vue">
            <button id="button-itens" class="mr-1" @click="openModel1">
                <i class="fas fa-plus pr-1"></i>Cadastrar
            </button>
            <button id="edit-itens" class="mr-1" @click="openModel2">
                <i class="fas fa-pen-to-square pr-1"></i>Editar
            </button>
            <button id="view-itens" class="mr-1" @click="openModel1">
                <i class="fas fa-eye pr-1"></i>Visualizar
            </button>
            <button id="filter-itens" class="mr-1" @click="openModel1">
                <i class="fas fa-filter pr-1"></i>Filtro
            </button>
            <button id="print-itens">
                <i class="fas fa-print pr-1"></i>Imprimir
            </button>
            <button id="refresh-itens" @click="refreshItem()">
                <i class="fas fa-retweet pr-1"></i>Atualizar
            </button>
    </div>
</template>

<script>
export default {
    name: 'editVue',
    methods: {
        openModel1(){
            this.$emit("openMyModal1")
        },
        openModel2(){
            this.$emit("openMyModal2")
        },
        refreshItem(){
            window.location.reload()
        }
    }
}
</script>

<style>

    #session-itens {
        display: flex;
        align-content: flex-start;
        padding-left: 10px;
        width: 100%;
    }

    #button-itens, #refresh-itens {
        /* align-items: flex-end; */
        background-color: #ffffff;
        color: #1ab486;
        border: none;
        border-radius: 5px;
        padding: 8px;
        transition: .2s;
    }

    #button-itens:hover, #refresh-itens:hover {
        background-color: #1ab486;
        color: #ffffff;
        transition: .2s;
    }

    #view-itens {
        padding-left: 20px;
        /* margin-left: 2px; */
        border: none;
        background-color: #ffffff;
        color: #989fbe;
        border-radius: 5px;
        padding: 8px;
        transition: .2s;
    }

    #view-itens:hover {
        background-color: #989fbe;
        color: #ffffff;
        transition: .2s;
    }

    #edit-itens {
        border: none;
        background-color: #ffffff;
        color: #7c80a0;
        border-radius: 5px;
        padding: 8px;
        transition: .2s;
    }

    #edit-itens:hover {
        background-color: #7c80a0;
        color: #ffffff;
        transition: .2s;
    }

    #filter-itens {
        border: none;
        background-color: #ffffff;
        color: #4e505e;
        border-radius: 5px;
        padding: 8px;
        transition: .2s;
    }

    #filter-itens:hover {
        background-color: #4e505e;
        color: #ffffff;
        transition: .2s;
    }

    #print-itens {
        border: none;
        background-color: #ffffff;
        color: #387080;
        border-radius: 5px;
        padding: 8px;
        transition: .2s;
    }

    #print-itens:hover {
        background-color: #387080;
        color: #ffffff;
        transition: .2s;
    }

</style>