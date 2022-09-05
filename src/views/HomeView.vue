<template>
  <div class="wrapper">
    <SidebarVue />
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
        <div id="content-view">
            <router-view/>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SidebarVue from '../components/Sidebar.vue'

export default {
    name: 'HomeView',
    computed: mapState(['isMenuVisible']),
    components: { SidebarVue },
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
        flex-direction: column;
        width: 100%;
        padding: 20px;
        min-height: 100vh;
        transition: all .3s;
        background-color: #eaeeff;
    }

    #content-vue {
        background-color: #000;
        display: flex;
        flex-direction: column;
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

        #content h3 {
            display: none;
        }
    }
</style>