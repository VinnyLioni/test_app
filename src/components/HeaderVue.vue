<template>
  <header class="content">
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
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'HeaderVue',
    computed: mapState(['isMenuVisible']),
    methods: {
        openModal(){
            this.$refs['my-modal'].toggle('#toggle-btn')
        }
    },
    mounted(){

    }
    
}
</script>

<style>

</style>