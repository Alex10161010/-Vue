<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div class="row">
    <div class="col-md-8">
      <MyCajaTxt :dataInput="txtNombre"   @updateInput="getDatoInput"/>
      <br>
      <MyCajaTxt :dataInput="txtPassword"  @updateInput="getDatoInput"/>
      <br>
      <MyButton :="btnBoton" :disabled="!validacionBoton" @click="enviarInformacion"/>
    </div>
  </div>
</template>

<script>

import MyButton from './components/MyBoton.vue';
import MyCajaTxt from './components/MyCajaTexto.vue';

export default {
  name: 'App',
  components: {
    MyButton,
    MyCajaTxt
  },
  data() {
    return {
      btnBoton:{
        nombre:"Validar",
        type:"button",
        class:"btn btn-rojo",
        disabled:false
      },
      txtNombre:{
        nombre:'Nombre',
        type:'text',
        class:'form-control',
        placeholder:'Introduce nombre',
        id:"txtNombre",
        required:true,
        min:5,
        value:"",
        validate:false
      },
      txtPassword:{
        nombre:'Password',
        type:'password',
        class:'form-control',
        placeholder:'Introduce su contraseña',
        id:"txtPassword",
        required:true,
        min:10,
        value:"",
        validate:false
      },
      txtPellidop:{
        nombre:'Apellido Paterno',
        type:'text',
        class:'form-control',
        placeholder:'Introduce el apellido',
        id:"txtPellidop",
        required:true,
        min:5,
        value:"Mancera",
        validate:false
      }
    }
  },
  methods: {
    getDatoInput(objHijo){
      let objPadre = this[objHijo.id];
      objPadre.validate= objHijo.validate;
      objPadre.value= objHijo.value;
    },
    enviarInformacion($evento){
      $evento.preventDefault();
      console.log('Enviando');
    }
  },
  computed:{
    validacionBoton(){
       return this.txtNombre.validate && this.txtPassword.validate;
    }
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
    font-size: 18px;
  }
  .activar{
    color:#1b66b1;
    background: #1b66b1;
  }
  .desactivar{
    color:#2c3e50;
    background: #2c3e50;
  }
</style>
