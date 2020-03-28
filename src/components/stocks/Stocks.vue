<template>
    <div class="container">
        <div class="row">
            <app-stock class="" :stock="stock"  v-for="(stock, index) in stocks" :key="index">
                
            </app-stock>
        </div>
    </div>
   
</template>

<script>
import Stock from './Stock.vue';

export default {
    components: {
        'app-stock': Stock
    },
    computed: {
        stocks(){
            return this.$store.getters.stocks;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>