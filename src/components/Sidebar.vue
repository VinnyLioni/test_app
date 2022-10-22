<template>
  <aside class="sidebar">
    <nav id="sidebar" :class="{'active': isMenuVisible}">
        <div class="sidebar-header">
            <h3>ViMk ERP</h3>
        </div>
        <ul class="list-unstyled components">
            <form id="body">
                <!-- <div class="search-box">
                    <input type="text" class="search-input" placeholder="Procurar...">
                    <button class="search-button">
                        <i class="fas fa-search"></i>
                    </button>
                </div> -->
                <div class="box">
                    <form name="search">
                        <input type="text" 
                        data-toggle="tooltip" data-placement="top" class="input" name="txt">
                    </form>
                    <i id="search" class="fas fa-search"></i>
                </div>
            </form>
            <li id="module" @click="goToHome()">
                <i class="fas fa-house-user pr-2 pt-1"></i>
                Inicio
            </li>
            <li id="module" @click="goToCad()">
                <i class="fas fa-book pr-2 pt-1"></i>
                Cadastros
            </li>
            <li id="module">
                <i class="fas fa-cart-shopping pr-2 pt-1"></i>
                Vendas
            </li>
            <li id="module">
                <i class="fas fa-box-open pr-2 pt-1"></i>
                Compras
            </li>
            <li id="module">
                <i class="fas fa-boxes-stacked pr-2 pt-1"></i>
                Estoque
            </li>
            <li id="module">
                <i class="fas fa-chart-line pr-2 pt-1"></i>
                Relatórios
            </li>
            <li id="module" @click="goToConfig()">
                <i class="fas fa-gears pr-2 pt-1"></i>
                Configurações
            </li>
            <li id="module">
                <i class="fas fa-info-circle pr-2 pt-1"></i>
                Sobre
            </li>
            <li id="module">
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
            ).catch(()=>{})
            console.log('funfou')
        },
        goToHome(){
            this.$router.push(
                '/home'
            ).catch(()=>{})
        },
        goToConfig(){
            this.$router.push(
                '/config'
            ).catch(() => {})
        }
        
    },
    mounted(){
        
    }
}
</script>

<style>

    .sidebar {
        background-color: #7386d5;
        /* box-shadow: inset -10px 0 5px -8px hsla(0,0%,0%,.25);      */
    }

    #sidebar {
        min-width: 250px;
        max-width: 250px;
        background: #7386d5;
        color: #fff;
        transition: all .3s;
        /* box-shadow: inset -10px 0 5px -8px hsla(0,0%,0%,.25); */
    }

    #sidebar.active {
        margin-left: -250px
    }

    #sidebar .sidebar-header {
        padding: 20px;
        background: #6d7fcc;
        /* box-shadow: inset -10px 0 5px -8px hsla(0,0%,0%,.25); */
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
        background: #fff;
    }

    #sidebar ul li.active>a,a[aria-expanded="true"]{
        color: #fff;
        background: #6d7fcc
    }

    #body {
        margin: 0;
        padding-top: 10px;
        padding-bottom: 0;
        /* padding: 0; */
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        align-content: center;
    }

    .box {
        position: relative;
    }

    .input {
        padding: 10px;
        width: 30px;
        height: 30px;
        background: none;
        /* border: 2px solid #fff; */
        border: none;;
        border-radius: 50px;
        box-sizing: border-box;
        font-size: 15px;
        color: #6d7fcc;
        outline: none;
        transition: .5s;
        text-decoration: none;
    }

    .box:hover input {
        width: 235px;
        background: #eaeeff;
        border: 2px solid #eaeeff;
        color: #6d7fcc;
        border-radius: 10px;
    }
    

    .box #search {
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translate(50%, -100%);
        font-size: 20px;
        color: #fff;
        transition: .4s;
    }

    .box:hover #search {
        color: #7386d5;
        font-size: 15px;
        transform: translate(50%, -120%);
    }

    #module {
        display: flex;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 20px;
        transition: all .4s ease-out;
        /* background-image: linear-gradient(#7386d5,#eaeeff);
        background-size: 100% 0%;
        background-repeat: no-repeat; */
        background-image: linear-gradient(#eaeeff,#eaeeff);
        background-size: 0 100%;
        background-repeat: no-repeat;
        transition: .4s;

    }

    li #module {
        align-items: flex-start;
    }

    #module:hover {
        background-size: 100% 100%;
        cursor: pointer;   
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        transition: .3s;
        /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px; */
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