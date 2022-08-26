<template>
  <div class="wrapper">
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
                Inicio
            </li>
            <li class="module">
                Cadastros
            </li>
            <li class="module">
                Vendas
            </li>
            <li class="module">
                Compras
            </li>
            <li class="module">
                Estoque
            </li>
            <li class="module">
                Relatórios
            </li>
            <li class="module">
                Configurações
            </li>
        </ul>
        <ul class="list-unstyled CTAs">
            <li>Sobre</li>
            <li>Sair</li>
        </ul>
    </nav>
    <div id="content">
        <nav class="header-box">
            <div id="row-itens">
                <div class="main-menu">
                    <button type="button" id="sideBarCollapse" class="p-2" @click="toggleMenu">
                        <i class="fas fa-align-left pr-2 pt-1"></i>
                        <span>Menu Principal</span>
                    </button>
                </div>
                <h3>
                    ViMk ERP
                </h3>
            </div>
        </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'HomeView',
    computed: mapState(['isMenuVisible']),
    mounted(){
        (function(){
            (document).ready(function () {
            ('#sidebarCollapse').on('click', function () {
                ('#sidebar').toggleClass('active');
            })
        })
        })
    },
    methods: {
        toggleMenu(){
            this.$store.commit('toggleMenu')
        }
    }
}
</script>

<style>
    @import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";
    body {
        font-family: 'Poppins', sans-serif;
        background: #fafafa;
    }

    * {
        font-family: 'Poppins', sans-serif;
    }

    p {
        font-family: 'Poppins', sans-serif;
        font-size: 1.1rem;
        font-weight: 300;
        line-height: 1.7rem;
        color: #999;
    }

    a,
    a:hover,
    a:focus {
        color: inherit;
        text-decoration: none;
        transition: all .3s
    }

    form {
        padding-bottom: 30px;
    }

    .search-input {
        outline: none;
        border: none;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        line-height: 30px;
    }

    .search-input::placeholder {
        padding: 10px;
    }

    .search-button {
        outline: none;
        border: none;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        line-height: 30px
    }
    
    .header-box {
        padding: 15px 10px;
        background: #6d7fcc;
        border: none;
        border-radius: 10px;
        margin-bottom: 40px;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    }

    #row-itens {
        display: grid;
        grid-template-columns: 1fr 4fr 1fr;
        padding-top: 2px;
    }

    #row-itens button {
        border-radius: 20px;
        color: #fff;
        border: none;
        background: #6d7fcc;
        transition: 0.2s
    }

    #row-itens button:hover {
        background: #99a4d4;
        transition: 0.2s;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        transform: translateY(-0.25em);
    }

    #row-itens h3 {
        color: #fff;
        font-size: 200%;
    }


    
    .navbar-btn {
        box-shadow: none;
        outline: none !important;
        border: none;
    }

    .module {
        display: flex;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 50px;
        transition: .3s;

    }

    .module:hover,
    .module:focus {
        background: #99a4d4;
        cursor: pointer;   
        border-radius: 20px;
        transition: .3s;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        transform: translateY(-0.25em);
    }

    .line {
        width: 100%;
        height: 1px;
        border-bottom: 1px dashed #ddd;
        margin: 40px 0
    }

    .wrapper {
        display: flex;
        width: 100%;
        align-items: stretch;
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
        border-bottom: 1px solid #47748b;
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

    a[data-toggle="collapse"] {
        position: relative;
    }

    .dropdown-toggle::after {
        display: block;
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%)
    }

    ul ul a {
        font-size: 0.9em !important;
        padding-left: 30px !important;
        background: #6d7fcc
    }

    ul.CTAs {
        text-align: center;
        font-size: 0.9em !important;
        display: block;
        border-radius: 5px;
        margin-bottom: 5px;
    }

    a.download {
        background: #fff;
        color: #7386D5 
    }

    a.article,
    a.article:hover {
        background: #6d7fcc !important;
        color: #fff !important
    }

    #content {
        width: 100%;
        padding: 20px;
        min-height: 100vh;
        transition: all .3s;
    }

    @media (max-width: 768px) {
        #sidebar {
            margin-left: -250px
        }

        #sidebar.active {
            margin-left: 0;
        }

        #sidebarCollapse span {
            display: none
        }
    }
</style>