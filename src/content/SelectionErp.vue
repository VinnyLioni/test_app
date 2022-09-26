<template>
    <div class="select-erp" @click="SetGoTo()">
        <div class="select-icon">
            <i :class="icon" :style="style"></i>
        </div>
        <div class="select-info">
            <span class="select-title">{{title}}</span>
            <span class="select-value">{{value}}</span>
        </div> 
    </div>
</template>

<script>
export default {
    name: 'SelectionErp',
    props: ['title', 'value','icon','color'],
    methods: {
        SetGoTo(){
            this.$emit("getGoTo")
        }
    }
}
</script>

<style>
    .select-erp {
        flex: 1;
        position: relative;
        display: flex;
        border-radius: 5px;
        margin-right: 2px;
        margin-bottom: 20px;
        /* background-color: rgb(146, 179, 228); */
        padding: 20px;
        border: 1px solider rgba(0, 0, 0, 0.2);
        /* box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, .5); */
        transition: all .5s cubic-bezier(0.77, 0, 0.175, 1);
        user-select: none;
    }

    .select-erp::before, .select-erp::after {
        content: '';
        position: absolute;
        transition: inherit;
        z-index: -1;
    }

    .select-erp:hover {
        color: #6d7fcc;
        transition-delay: .5s;
    }

    .select-erp:hover:before {
        transition-delay: 0s;
    }

    .select-erp:hover:after {
        transition-delay: .35s;
    }

    .select-erp:before {
        top: 0;
        left: 50%;
        height: 100%;
        width: 0;
        border: 1px solid #6d7fcc;
        border-left: 0;
        border-right: 0;
    }

    .select-erp:after {
        bottom: 0;
        left: 0;
        height: 0;
        width: 100%;
        background: #fff;
    }

    .select-erp:hover:before {
        left: 0;
        width: 100%
    }

    .select-erp:hover:after {
        top: 0;
        height: 100%
    }

    /* .select-erp:hover {
        background-color: rgb(123, 148, 185);
        color: #fff;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 1.2);
        box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, .5);
        transition: .2s
    } */

    .select-icon {
        display: flex;
        align-items: center;
    }

    .select-icon i {
        font-size: 5rem;
    }

    .select-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-center;
    }

    .select-title {
        font-size: 1.2rem;
    }

    .select-value {
        font-size: 3rem
    }
</style>