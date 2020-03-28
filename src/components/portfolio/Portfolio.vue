<template>
   <div class="container">
        <div class="row">
            <app-stock :stock="stock" v-for="(stock, index) in stocks" :key="index"></app-stock>
            <h1 v-if="stocks.length == 0">No purchased yet</h1>
        </div>
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

<style lang="scss" scoped>
h1{
    color:#138496;
}
</style>