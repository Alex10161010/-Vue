<template>
    <div id="buscador-container">
        <input type="text" v-model="query" v-on:input="$emit('query-change',query)">
    </div>
</template>


<script>
export default {
    name:'Buscador',
    data() {
        return {
            query:''
        }
    },
}
</script>

<style scoped>
    #buscador-container{
        width: 600px;
        margin: 0 auto;
    }
    input{
        padding: 10px;
        width: 100%;
        outline: none;
    }
</style>