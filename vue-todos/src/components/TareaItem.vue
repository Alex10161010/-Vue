<template>
    <div class="tarea" v-bind:class="{completed:tareax.completado}">
        <div class="tarea-body">
            <input type="checkbox"
                v-bind:checked="tareax.completado ? 'checked':'' "
                v-on:change="checkTarea"
            >

            {{tareax.titulo}}
        </div>

        <div class="tarea-actions">
            <button @click="$emit('eliminar-tarea',tareax.id)">Eliminar</button>
        </div>
    </div>
</template>

<script>
export default {
    name:'TareaItem',
    props:['tareax'],
    methods: {
        checkTarea(){
            this.tareax.completado =!this.tareax.completado;
        }
    },
}
</script>


<style scoped>
   .tarea{
        border-bottom: solid 1px #ccc;
        padding: 10px;
    }
    .tarea:not(.completed):hover{
        background-color: #eee;
    }
    .completed{
        color: #ccc;
        text-decoration: line-through;
    }
    .completed .tarea-body{
        text-decoration: line-through;
    }
    .tarea-body, .tarea-actions{
        display: inline-block;
        vertical-align: top;
    }
    .tarea-body{
        width: 85%;
    }
    .tarea-actions{
        padding: 0 10px;
        width: 10%;
    }
    button{
        border: none;
        border-radius: 3px;
        padding: 10px;
        background-color: #ccc;
        color: black;
    }
    button:hover{
        background-color: #da2020;
        color: white;
    }
</style>>