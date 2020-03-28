<template>
        <div class="row">
            <h1 class="">Trade or View your Portfolio</h1>
            <h6 class="">You may save & load your Data</h6>
            <h6 class="">Click on 'End Day' to begin a New Day</h6>
            <hr>
            <p class="">Your funds: {{funds | currency}}</p>
        </div>
</template>

<script>
export default {
    computed: {
        funds(){
            return this.$store.getters.funds;
        }
    }
}
</script>

<style lang="scss" scoped>
h1, h6{
    width: 100%;
}
h1{
    color:#e403be;
}
</style>