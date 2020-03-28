<template>
    <div class="col-sm-6 col-md-4">
        <div class="card" style="width: 18rem;">
            <div class="card-body row">
                <h5 class="card-title col-sm-12">{{stock.name}}<br><small> (Price: {{stock.price | currency}} | Quantity: {{stock.quantity}})</small></h5>
                <div class="col-sm-8 col-md-8">
                    <input :class="{danger: insufficientQuantity}" v-model="quantity" type="number" placeholder="Quantity" class="form-control">
                </div>
                <div class="pull-right col-sm-4 col-md-4">
                    <button  
                            @click="sellStock" 
                            class="btn btn-info"
                            :disabled="insufficientQuantity || quantity <= 0">Sell</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

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
        insufficientQuantity(){
            return this.quantity > this.stock.quantity;
        }
    },
    methods: {
        ...mapActions({
            placeSellOrder: 'sellStock'
        }),
       sellStock(){
           const order = {
               stockId: this.stock.id,
               stockPrice: this.stock.price,
               quantity: this.quantity
           };
           this.placeSellOrder(order);
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
        border: 1px solid red;
    }
</style>