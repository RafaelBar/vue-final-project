<template>
    <div class="">
        <app-header></app-header>
        <div class="container">
            <transition name="slide" mode="out-in">
                 <router-view></router-view>
            </transition>
        </div>
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

<style lang="scss">
    .container{
        margin-top: 20px;
    }
    hr{
        border-top: 1px solid black;
        display: block;
        width: 100%;
    }
    .slide-enter-active{
        animation: slide-in 200ms ease-out forwards;
    }
    .slide-leave-active{
        animation: slide-out 200ms ease-in forwards;
    }
    @keyframes slide-in{
        from{
            transform: translateY(-30px);
            opacity: 0;
        }
        to{
            transform: translateY(0);
            opacity: 1;
        }
    }
    @keyframes slide-out{
        from{
            transform: translateY(0);
            opacity: 1;
        }
        to{
            transform: translateY(-30px);
            opacity: 0;
        }
    }
</style>
