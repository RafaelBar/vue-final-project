<template>
   <div class="">
       <app-stock :stock="stock" v-for="(stock, index) in stocks" :key="index"></app-stock>
   </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Stock from './Stock.vue';

export default {
    computed: {
        ...mapGetters({ 
                stocks: 'stockPortfolio' 
        })
    },
    components: {
        'app-stock': Stock
    }
}
</script>