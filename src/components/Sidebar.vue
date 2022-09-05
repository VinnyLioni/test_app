<template>
  <aside class="sidebar">
    <nav id="sidebar" :class="{'active': isMenuVisible}">
        <div class="sidebar-header">
            <h3>ViMk ERP</h3>
        </div>
        <ul class="list-unstyled components">
            <form>
                <div class="search-box">
                    <input type="text" class="search-input" placeholder="Procurar...">
                    <button class="search-button">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </form>
            <li class="module">
                <i class="fas fa-house-user pr-2 pt-1"></i>
                Inicio
            </li>
            <li class="module" @click="goToCad">
                <i class="fas fa-book pr-2 pt-1"></i>
                Cadastros
            </li>
            <li class="module">
                <i class="fas fa-cart-shopping pr-2 pt-1"></i>
                Vendas
            </li>
            <li class="module">
                <i class="fas fa-box-open pr-2 pt-1"></i>
                Compras
            </li>
            <li class="module">
                <i class="fas fa-boxes-stacked pr-2 pt-1"></i>
                Estoque
            </li>
            <li class="module">
                <i class="fas fa-chart-line pr-2 pt-1"></i>
                Relatórios
            </li>
            <li class="module">
                <i class="fas fa-gears pr-2 pt-1"></i>
                Configurações
            </li>
            <li class="module">
                <i class="fas fa-info-circle pr-2 pt-1"></i>
                Sobre
            </li>
            <li class="module">
                <i class="fas fa-power-off pr-2 pt-1"></i>
                Sair
            </li>
        </ul>
        <!-- <ul id="logout-sess" class="list-unstyled CTAs">
            <li>Sobre</li>
            <li>Sair</li>
        </ul> -->
    </nav>
  </aside>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'SidebarVue',
    computed: mapState(['isMenuVisible']),
    methods: {
        goToCad(){
            this.$router.push(
                '/cadastros'
            )
            console.log('funfou')
        }
    }
}
</script>

<style>

    .sidebar {
        background-color: #7386d5;
    }

    #sidebar {
        min-width: 250px;
        max-width: 250px;
        background: #7386d5;
        color: #fff;
        transition: all .3s
    }

    #sidebar.active {
        margin-left: -250px
    }

    #sidebar .sidebar-header {
        padding: 20px;
        background: #6d7fcc
    }

    #sidebar ul.components {
        padding: 20px 0;
        /* border-bottom: 1px solid #47748b; */
    }

    #sidebar ul p {
        color: #fff;
        padding: 10px
    }

    #sidebar ul li a {
        padding: 10px;
        font-size: 1.1em;
        display: block;
    }

    #sidebar ul li a:hover {
        color: #7386d5;
        background: #fff
    }

    #sidebar ul li.active>a,a[aria-expanded="true"]{
        color: #fff;
        background: #6d7fcc
    }

    .search-box {
        display: flex;
        justify-content: center;
        position: relative;
    }

    .search-input {
        /* outline: none;
        border: none;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        line-height: 30px;
        padding-left: 20px;
        width: 0%;
        transition: .3s ease-out; */
        height: 30px;
        width: 50px;
        border: none;
        padding: 10px;
        font-size: 18px;
        letter-spacing: 2px;
        outline: none;
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
        transition: all .5s ease-in-out;
        background-color: #7386d5;
        padding-right: 40px;
        /* display: none; */
        color:#fff;
    }

    .search-input::placeholder {
        color: #fff;
        font-size: 1rem;
        letter-spacing: 2px;
        font-weight: 100;
    }

    .search-input:hover {
        padding-left: 10px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        width: 80%;
        opacity: 100;
    }

    .search-button {
        outline: none;
        border: none;
        padding-left: -50px;
        line-height: 30px;
        background-color: #7386d5;
        color: #fff;
        cursor: pointer;
        pointer-events: painted;
    }


    .module {
        display: flex;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 20px;
        transition: all .3s ease-out;

    }

    li .module {
        align-items: flex-start;
    }

    .module:hover,
    .module:focus {
        background: #eaeeff;
        cursor: pointer;   
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        transition: .3s;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px;
        /* transform: translateY(-0.25em); */
        margin-left: 10px;
        color: #6d7fcc;

    }


    .line {
        width: 100%;
        height: 1px;
        border-bottom: 1px dashed #ddd;
        margin: 40px 0
    }

    form {
        padding-bottom: 20px;
    }



</style>