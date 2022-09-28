<template>
    <div class="select-erp" @click="SetGoTo()">
        <!-- <div class="select-icon">
            <i :class="icon"></i>
        </div> -->
        <div class="select-info">
            <span class="select-title">
                <i :class="icon"></i>{{title}}</span>
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
        justify-content: space-between;
        align-content: space-between;
        display: flex;
        border-radius: 5px;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-right: 5px;
        margin-left: 5px;
        padding: 20px;
        border: 1px #6d7fcc;
        background-color: #ffffff;
        color: #343953;
        /* color: #6d7fcc; */
        /* box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, .5); */
        transition: all .25s cubic-bezier(0.77, 0, 0.175, 1);
        transform: translate(0%,0%);
        /* user-select: none; */
    }
/* 
    .select-erp::before, .select-erp::after {
        content: '';
        position: absolute;
        transition: inherit;
        z-index: -1;
    } */

    .select-erp:hover {
        background-color: #6d7fcc;
        transform: translate(0%,-5%);
        -webkit-box-shadow: 0px 8px 14px -3px rgba(0,0,0,0.19);
        -moz-box-shadow: 0px 8px 14px -3px rgba(0,0,0,0.19);
        box-shadow: 0px 8px 14px -3px rgba(0,0,0,0.19);
        color: #ffffff;
        /* transition-delay: .25s; */
    }

    /* .select-erp:hover:before {
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
        z-index: 1;
    }

    .select-erp:after {
        bottom: 0;
        left: 0;
        height: 0;
        width: 100%;
        background: #fff;
        color: #6d7fcc;
        z-index: 2;
    }

    .select-erp:hover:before {
        left: 0;
        width: 100%
    }

    .select-erp:hover:after {
        top: 0;
        height: 100%
    } */

    /* .select-erp:hover {
        background-color: rgb(123, 148, 185);
        color: #fff;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 1.2);
        box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, .5);
        transition: .2s
    } */

    .select-icon {
        display: flex;
        /* align-items: center; */
        /* justify-content: space-between; */
        /* margin-left: 5%; */
    }

    .select-icon i {
        font-size: 5rem;
        /* width:100% */
    }

    .select-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-center;
    }

    .select-title {
        font-size: 1.2rem;
        /* color: #43508b; */
    }

    .select-value {
        font-size: 3rem
    }
</style>