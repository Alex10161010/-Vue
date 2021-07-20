<template lang="">
    <button>{{nombre}}</button>
</template>

<script>
export default {
    name:'MyButton',
    props:{
        nombre:{
            type:String
        }
    }
}
</script>

<style scoped>
    button:disabled{
        opacity: 0.5;
    }

    .btn{
        border: none;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        border-radius: 8px;
        cursor: pointer;
    }
    .btn:hover{
        filter: brightness(125%);
    }
    .btn-morado{
        background: #afaccc;
        color: #003366;
    }
    /* #131910 */
    .btn-rojo{
        background: #851f43;
        color: #cfe0f0;
    }
    .btn-verde{
        background: #7fc89a;
        color: #35495e;
    }
</style>