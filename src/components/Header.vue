<template>
    <div class="">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                    <router-link to="/" active-class="active" exact><a class="navbar-brand">Stock Trader</a></router-link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <router-link to="/portfolio" tag="li" active-class="active" class="nav-item" exact><a class="nav-link">portfolio</a></router-link>
                            <router-link to="/stocks" tag="li" active-class="active" class="nav-item" exact><a class="nav-link">stocks</a></router-link>
                            <li class="nav-item"><a @click="endDay" class="nav-link" href="#endDay">End Day</a></li>
                            
                            
                            <li class="nav-item dropdown" :class="{show: isDropdownOpen}">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" :aria-expanded="isDropdownOpen ? 'true' : 'false'">
                                Dropdown link
                                </a>
                                <div :class="{show: isDropdownOpen}" class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a @click="saveData" class="dropdown-item" href="#save">save</a>
                                    <a @click="loadData" class="dropdown-item" href="#load">load</a>
                                </div>
                            </li>
                        </ul>
                        <strong :class="{'portfolioBlue': this.$route.path == '/portfolio', 'tradePink': this.$route.path == '/'}" class="navbar-text navbar-right funds-text">Funds: {{funds | currency}}</strong>
                    </div>
            </div>
            
        </nav>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
import axios from './../axios-auth';

export default {
    data(){
        return{
            isDropdownOpen: false
        }
    },
    computed:{
        funds(){
            return this.$store.getters.funds;
        }
    },
    methods: {
        ...mapActions({
            randomizeStocks: 'randomizeStocks',
            fetchData: 'loadData'
        }),
        endDay(){
            this.randomizeStocks();
        },
        saveData(){
            const data = {
                funds: this.$store.getters.funds,
                stockPortfolio: this.$store.getters.stockPortfolio,
                stocks: this.$store.getters.stocks
            }
             axios.put('/data.json', data)
                .then((res) => console.log(res))
                .catch(error => console.log(error))
      
        },
        loadData(){
            this.fetchData();
        }
    }
}
</script>

<style lang="scss" scoped>
    router-link{
        cursor: pointer;
    }
    .container{
        margin-top: 0;
    }
    .funds-text{
        color:#1c9638;
        margin-left: 15px;
        &.portfolioBlue{
            color:#138496;
        }
        &.tradePink{
            color:#e403be;
        }
    }
</style>