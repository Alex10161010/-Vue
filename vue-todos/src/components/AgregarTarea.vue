<template>
    <div id="add-container">
        <form @submit="agregarTarea">
            <input type="text" v-model="titulo">
        </form>
    </div>
</template>


<script>
import {uuid} from 'vue-uuid';
export default {
    name:'AgregarTarea',
    data(){
        return{
            titulo:''
        }
    },
    methods: {
        agregarTarea(e){
            e.preventDefault();
            const nuevaTarea = {
                id:uuid.v4(),
                titulo:this.titulo,
                completado:false
            };

            this.titulo = '';
            this.$emit('agregar-tarea',nuevaTarea);
        }
    },
}
</script>


<style scoped>
    #add-container{
        padding: 10px;
    }
    input{
        padding: 10px;
        outline:none;
        border:solid 1px #ccc;
        width: 100%;
    }
</style>