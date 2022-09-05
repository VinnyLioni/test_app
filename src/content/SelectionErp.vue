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
        display: flex;
        border-radius: 10px;
        margin-right: 2px;
        margin-bottom: 20px;
        background-color: rgb(146, 179, 228);
        padding: 20px;
        border: 1px solider rgba(0, 0, 0, 0.2);
        box-shadow: 0 1px 5px rgba(0, 0, 0, 1.2);
        transition: .3s;
    }

    .select-erp:hover {
        background-color: rgb(123, 148, 185);
        color: #fff;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 1.2);
        transition: .2s
    }

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