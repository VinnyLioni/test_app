<template>
      <div id="header-itens">
        <span>
            <i id="icon-fas" :class="icon"></i>{{ title }}</span>
        <div id="return" class="p-2" @click="backRouter()">
            Voltar<i class="fas fa-door-open pl-2 pt-1"></i>
        </div>
      </div>
</template>

<script>
export default {
    name: 'headerItens',
    props: ['title','icon'],
    methods: {
        backRouter(){
            this.$emit("backRouter")
        }
    }
}
</script>

<style>
    #header-itens {
        display: flex;
        justify-content: space-between;
        width:100%;
        padding: 10px;
        padding-bottom: 15px;
        font-size: 25px;
    }

    #header-itens span {
        align-content: flex-start;
        padding-top: 5px;
        color: #343953;
    }

    #return {
        font-size: 1.2rem;
        align-self: flex-end;
        border: none;
        color: #b97676;
        background-color: #ffffff;
        padding-bottom: 10px;
        border-radius: 5px;
        transition: .2s;
        font-size: 1.1rem;
        cursor: pointer;
    }

    #return:hover {
        background-color: #b97676;
        color: #ffffff;
    }
</style>