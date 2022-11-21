<template>
    <div class="loading-mask">
        <div class="spinner">
            <i class="spinner-border text-light"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoadingVue',
    // data(){
    //     return {
    //         isVisible: false
    //     }
    // },
    // created(){
    //     this.$root.$on('Spinner::show', () => {
    //         this.isVisible = true
    //     })

    //     this.$root.$on('Spinner::hide', () => {
    //         this.isVisible = false
    //     })
    // }
}
</script>

<style>
    .loading-mask {
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        border: none;
        }

    .spinner {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .spinner-icon {
        font-size: 100px;
    }

</style>