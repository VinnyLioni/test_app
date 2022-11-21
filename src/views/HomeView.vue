<template>
  <div class="wrapper">
    <!-- <loading-vue /> -->
    <SidebarVue />
    <!-- <HeaderVue /> -->
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
                <label id="dropdown-area">
                    <div id="notifyButton" class="p-2">
                        Notificações<i class="fas fa-bell pl-2 pt-1"></i>
                    </div>
                    <input type="checkbox" class="dd-input" id="test">
                    <ul class="dd-menu">
                        <li>Estoque baixo: <strong>TURB-001</strong></li>
                        <li>Estoque baixo: <strong>ECU-FT450</strong></li>
                        <li>Novo cliente: <strong>001</strong></li>
                        <li>Novo pedido: <strong>01</strong> Cliente: <strong>002</strong></li>
                        <li class="divider"></li>
                        <li id="clean">Limpar Notificações</li>
                    </ul>
                </label>

            </div>
        </nav>
        <div id="content-view">
                <transition name="mySlide" mode="out-in">
                <!-- <modal-vue v-if="isModalVisible" @closeMd="closeModal()"></modal-vue> -->
                <router-view />
            </transition>

            <!-- <ModalVue v-if="isModalVisible" @close="closeModal">
                <template v-slot:header>
                    teste do header dentro do template
                </template>
                <template v-slot:body>
                    teste da section dentro do template
                </template>
                <template v-slot:footer>
                    teste do rodapé no template
                </template>
            </ModalVue> -->
        </div>
        <!-- <ModalVue /> -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SidebarVue from '../components/Sidebar.vue'
// import ModalVue from '../components/ModalVue.vue'
// import LoadingVue from '../components/LoadingVue.vue'

export default {
    name: 'HomeView',
    computed: mapState(['isMenuVisible']),
    components: { SidebarVue },
    // data(){
    //     return {
    //         isModalVisible: false
    //     }
    // },
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
        },
        showModal(){
            this.isModalVisible = true
        },
        closeModal(){
            this.isModalVisible = false
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

    #dropdown-area {
        display: inline-block;
        position: relative;
    }

    .dd-input {
        display: none;
    }

    .dd-menu {
        position: absolute;
        top: 100%;
        right:0%;
        /* border: 0.1px solid #6d7fcc; */
        border-radius: 4px;
        padding: 0;
        margin: 5px 0 0 0;
        box-shadow: 0 0 6px 0 rgba(0,0,0,0.1);
        /* -webkit-box-shadow: 0px 2px 9px 0px rgba(0,0,0,0.32);
        -moz-box-shadow: 0px 2px 9px 0px rgba(0,0,0,0.32);
        box-shadow: 0px 2px 9px 0px rgba(0,0,0,0.32); */
        background-color: #ffffff;
        list-style-type: none;
        color: #43508b;
        /* transition: all .2s ease; */
    }

    .dd-input + .dd-menu {
        opacity: 0;
        transition: all .2s ease;
        transform: translateY(10px);
        overflow: hidden;
        /* z-index: 200; */
    }

    .dd-input:checked + .dd-menu {
        display: block;
        opacity: 1;
        transform: translateY(0px);
        position: absolute;
        z-index: 200;
    }

    .dd-menu li {
        margin: 0px 10px;
        padding: 10px 20px;
        cursor: pointer;
        /* white-space: nowrap; */
    }

    .dd-menu li.divider {
        padding: 0;
        border-bottom: 1px solid #6d7fcc;
    }

    #clean {
        color: #ff0000;
        font-weight: 500;
    }

    .header-box {
        padding: 15px 10px;
        background: #6d7fcc;
        border: none;
        border-radius: 5px;
        margin-bottom: 20px;
        /* box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1); */
        /* box-shadow: 0 1px 5px rgba(0, 0, 0, 1.2); */
        /* -webkit-box-shadow: 0px 2px 2px 1px rgba(0,0,0,0.2);
        box-shadow: 0px 2px 2px 1px rgba(0,0,0,0.2); */
    }

    #row-itens {
        display: flex;
        justify-content: space-between;
        padding-left: 10px;
        padding-top: 6px;
        padding-right: 10px;
        /* padding-right: 10px; */
        /* display: flex;
        padding-top: 2px; */
    }

    #row-itens #sideBarCollapse {
        align-items: flex-start;
        border-radius: 5px;
        padding-left: 20px;
        color: #fff;
        border: none;
        background: #6d7fcc;
        transition: 0.2s
    }

    #notifyButton {
        align-items: flex-end;
        cursor: pointer;
        border-radius: 5px;
        color: #fff;
        border: none;
        background: #6d7fcc;
        transition: .2s;

    }

    #row-itens #sideBarCollapse:hover, #notifyButton:hover {
        background: #eaeeff;
        color: #6d7fcc;
        transition: 0.2s;
        /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
        /* transform: translateY(-0.25em); */
    }

    #row-itens h3 {
        align-items: center;
        padding-right: 15px;
        color: #fff;
        font-size: 200%;
    }

    /* #row-itens #notifyButton {
        padding-top: 10px;
        align-items: flex-end;
        border-radius: 5px;
        color: #fff;
        border: none;
        background: #6d7fcc;
        transition: 0.2s;
        font-size: 80%;
    }

    #row-itens #notifyButton:hover  {
        background: #eaeeff;
        color: #6d7fcc;
        transition: .2s;
    } */


    .navbar-btn {
        box-shadow: none;
        outline: none !important;
        border: none;
    }






    .wrapper {
        display: flex;
        width: 100%;
        align-items: stretch;
    }

    ul.CTAs {
        text-align: center;
        font-size: 0.9em !important;
        display: block;
        border-radius: 5px;
        margin-bottom: 5px;
    }

    #content {
        display: flex;
        /* justify-content: center; */
        flex-direction: column;
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 20px;
        padding-bottom: 0px;
        min-height: 100vh;
        transition: all .3s;
        background-color: #eaeeff;
        transition: .3s;
    }

    /* #content-vue {
        background-color: #000;
        display: flex;
        flex-direction: column;
    } */

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

        #content h3 {
            display: none;
        }

    /* #__BVID__14___BV_modal_content_ {
        background-color: #eaeeff;
    } */

    }
</style>