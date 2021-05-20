<template>
    <div>
        <div v-bind:key="tarea.id" v-for="tarea in lista_tareas">
            <TareaItem v-bind:tareax="tarea" v-on:eliminar-tarea="$emit('eliminar-tarea',tarea.id)"/>
        </div>
    </div>
</template>


<script>
    import TareaItem from './TareaItem';
    export default {
        name:'Tareas',
        props:['lista_tareas'],
        components:{TareaItem}
    }
</script>

<style>
</style>