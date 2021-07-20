<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <FormContacto msg="Bienvenido a Vue 3"/>
  <Prueba />
</template>

<script>
import FormContacto from './components/FormularioContacto.vue';
import Prueba from './components/Prueba.vue';

export default {
  name: 'App',
  components: {
    FormContacto,
    Prueba
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
