<template>
    <div class="col-sm-6 col-md-4">
        <div class="card" style="width: 18rem;">
            <div class="card-body row">
                <h5 class="card-title col-sm-12">{{stock.name}}<small> (Price: {{stock.price | currency}})</small></h5>
                <div class="col-sm-8 col-md-8">
                    <input :class="{danger: insufficientFunds}" v-model="quantity" type="number" placeholder="Quantity" class="form-control">
                </div>
                <div class="pull-right col-sm-4 col-md-4">
                    <button  
                            @click="buyStock" 
                            class="btn btn-success"
                            :disabled="insufficientFunds || quantity <= 0">Buy</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:[
        'stock'
    ],
    data(){
        return{
            quantity: 0
        }
    },
    computed:{
        funds(){
            return this.$store.getters.funds;
        },
        insufficientFunds(){
            return this.quantity * this.stock.price > this.funds;
        }
    },
    methods: {
        buyStock(){
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            this.$store.dispatch('buyStock', order);
            this.quantity = 0;
        }
    }
}
</script>

<style lang="scss" scoped>
    .col-sm-6, .col-md-4{
        padding: 10px 5px;
    }
    .row{
        >div{
            justify-content: center;
            align-items: center;
            display: flex;
        }
    }
    .danger{
        border: 1px solid red;;
    }
</style>