<template lang="">
	<div class="form-group">
		<label :for="dataInput.id">{{dataInput.nombre}}</label>
		<input :="dataInput" @input="eventoInput">
		<div :class="nameClass">{{error}}</div>
		{{dataInput}}
	</div>
</template>

<script>
export default {
   name:'MyCajaTxt',
    props:{
        dataInput:{type:Object},
    },
	data() {
		return {
			nameClass:'invalido',
			isValido:false
		}
	},
	methods: {
		validacion(value){
			this.isValido=true;
			if(value.length === 0 || value.length < this.dataInput.min){
				this.isValido=false;
			}
		},
		mensaje(value){
			if(this.dataInput.required && value.length === 0){
				this.nameClass='invalido';
				this.validacion(value);
				return `Campo ${this.dataInput.nombre} es requerido`;
			}else if(this.dataInput.min && value.length < this.dataInput.min){
				this.nameClass='invalido';
				this.validacion(value);
				return `Debes de ingresar minimo ${this.dataInput.min}`;
			}else{
				this.nameClass='valido';
				this.validacion(value);
				return 'Correcto';
			}
		},
		eventoInput($event){
			let valorInput =$event.target.value;
			this.$emit('updateInput',{
				value: valorInput,
				id:this.dataInput.id,
				validate: this.isValido
			});
		}
	},
	computed:{
		error(){
			return this.mensaje(this.dataInput.value);
		}
	}

}
</script>

<style scoped>
	.form-control {
		display: block;
		width: 90%;
		padding: .375rem .75rem;
		font-size: 1rem;
		line-height: 1.5;
		color: #495057;
		background-color: #fff;
		background-clip: padding-box;
		border: 1px solid #ced4da;
		border-radius: .25rem;
		transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
		margin: 7px;
	}

	.invalido{
		width: 100%;
		margin-top: .25rem;
		font-size: 80%;
		color: #dc3545;
	}
	.valido {
		width: 100%;
		margin-top: .25rem;
		font-size: 80%;
		color: #28a745;
	}
</style>