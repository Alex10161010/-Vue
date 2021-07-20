<template>
<div class="container">
	<div class="row">
		<div class="col-md-12">
			<form v-on:submit.prevent="enviarInformacion">
				<div class="form-group">
					<label for="txtNombre">Nombre</label>
					<input type="text" class="form-control" id="txtNombre" v-model="contacto.nombre" autocomplete="off"/>
					<small id="nombrelHelp" class="invalido" v-if="v$.contacto.nombre.$error">{{v$.contacto.nombre.$errors[0].$message}}</small>
				</div>
				<div class="form-group">
					<label for="txtEmail">Email</label>
					<input type="email" class="form-control" id="txtEmail" v-model="contacto.correo" autocomplete="off"/>
					<small id="emailHelp" class="invalido" v-if="v$.contacto.correo.$error">{{v$.contacto.correo.$errors[0].$message}}</small>
				</div>
				<div class="form-group">
					<label for="txtTelefono">Telefono</label>
					<input type="text" class="form-control" id="txtTelefono" v-model="contacto.telefono" autocomplete="off"/>
					<small id="telefonoHelp" class="invalido" v-if="v$.contacto.telefono.$error">{{v$.contacto.telefono.$errors[0].$message}}</small>
				</div>
				<div class="form-group">
					<label for="txtMensaje">Mensaje</label>
					<textarea class="form-control" id="txtMensaje" cols="30" rows="10" v-model="contacto.mensaje" autocomplete="off"></textarea>
					<small id="mensajeHelp" class="invalido" v-if="v$.contacto.mensaje.$error">{{v$.contacto.mensaje.$errors[0].$message}}</small>
				</div>
				<div class="form-group form-check">
					<input type="checkbox" class="form-check-input" id="exampleCheck1" />
					<label class="form-check-label" for="exampleCheck1">Check me out</label>
				</div>
				<button type="submit" class="btn btn-primary">Enviar</button>
			</form>
		</div>
	</div>
</div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { helpers,required, email ,minLength,alphaNum,numeric} from '@vuelidate/validators'

export default {
  name: 'FormContacto',
  data() {
	return {
        v$:useVuelidate(),
		contacto:{
            nombre:'',
            correo:'',
            telefono:'',
            mensaje:''
        }

	}
  },
  methods: {
    enviarInformacion(){
        /* Inicializar la validacion */
        this.v$.$validate();
        /* Comprovando si exite algun error en la validacion*/
        if(!this.v$.$error){
            console.log('enviando informacion',this.contacto);
        }else{
            console.log('Error en el formulario');
        }
    }
  },
  /* https://vuelidate-next.netlify.app/validators.html */
  validations(){
      return {
          contacto:{
            nombre:{
                required: helpers.withMessage('Este campo no puede estar vacío', required),
                minLength: helpers.withMessage('El minimo de carateres son 3',minLength(3))
            },
            correo:{required,email },
            telefono:{required,numeric},
            mensaje:{alphaNum},
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .invalido{
        width: 100%;
        margin-top: .25rem;
        font-size: 80%;
        color: #dc3545;
    }
    .valido{
        width: 100%;
        margin-top: .25rem;
        font-size: 80%;
        color: #28a745;
    }
</style>
