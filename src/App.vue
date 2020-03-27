<template>
    <div class="">
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from './components/Header.vue';
    export default {
        components:{
            'app-header': Header
        },
        created(){
            this.$store.dispatch('initStocks');
        }
    }
</script>

<style lang="scss" scoped>
    h1{
        color:red;
    }
</style>
