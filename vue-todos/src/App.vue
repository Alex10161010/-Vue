<template>
  <div>
    <div id="header">
      <Buscador v-on:query-change="buscarQuery"/>
    </div>
      <div id="main-container">
        <a href="https://www.youtube.com/watch?v=iENgabVQSYY"> TU PRIMER APP CON VUE.JS</a>
        <h2> Tareas </h2>
        <AgregarTarea v-on:agregar-tarea="agregarTarea"/>
        <Tareas v-bind:lista_tareas="copiaTareas" v-on:eliminar-tarea="eliminarTarea"/>
      </div>
  </div>
</template>

<script>
import Buscador from './components/Buscador';
import Tareas from './components/Tareas';
import AgregarTarea from './components/AgregarTarea';

export default {
  name: 'App',
  components: {
    Tareas, AgregarTarea, Buscador
  },
  methods: {
    eliminarTarea(id){
      this.tareas=this.tareas.filter(tarea=>tarea.id != id);
      this.copiaTareas= [...this.tareas];
    },
    agregarTarea(tarea){
        this.tareas.push(tarea);
        this.copiaTareas =  [...this.tareas];
    },
    buscarQuery(query){
      if(query.trim()=== ''){
        this.copiaTareas =  [...this.tareas];
      }else{
        const temp = this.tareas.filter(tarea =>{
          return tarea.titulo.includes(query)
        });
        this.copiaTareas= [...temp];
      }
    }
  },
  data() {
    return {
      tareas:[
        {
          id:0,
          titulo:'Comprar la cena',
          completado:false
        },
        {
          id:1,
          titulo:'Lavar los trastes',
          completado:true
        },
        {
          id:2,
          titulo:'Recordatorio para limpiar la arena de mi gato',
          completado:false
        }
      ],
      copiaTareas:[]
    }
  },
  created() {
    this.copiaTareas=[...this.tareas]
  },
}
</script>

<style>
  *{
    box-sizing: border-box;
  }
  body{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.5em;
    padding: 0;
    margin: 0;
  }

  #main-container{
    border: solid 1px #ccc;
    width: 600px;
    margin: 100px auto;
  }

  #header{
    background: black;
    padding: 10px;
  }

  h2{
    padding: 0 10px;
  }
</style>
