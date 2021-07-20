<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <FormContacto />

</template>

<script>
import FormContacto from './components/FormularioContacto.vue';



export default {
  name: 'App',
  components: {
    FormContacto,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
