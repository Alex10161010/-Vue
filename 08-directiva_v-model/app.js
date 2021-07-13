const app = Vue.createApp({
	template: `
		<p>v-model: automaticamente trabaja con el evento input y con  value del evento del formulario</p>
			<form action="">
				<input type="text" v-model="txtusuario" />
				<div v-if="msjError">
					<span>{{msjError}}</span>
				</div>
				<br />
				<br />
				<p>Comida favorita</p>
				<input type="checkbox" id="cbox1" value="Gorditas Preparadas" v-model="checkcomida" /><label for="cbox1"
					>Gorditas Preparadas</label
				>
				<br>
				<input type="checkbox" id="cbox2" value="Pizza" v-model="checkcomida" />
				<label for="cbox2">Pizza</label>
				<br />
				<p>Tipo de usuario</p>
				<input type="radio" value="Admin" v-model="radusuario" /> Admin <br />
				<input type="radio" value="Prueba" v-model="radusuario" /> Prueba

				<br>
				<br>
				<p>checkbox de comida: {{checkcomida}}</p>

			</form>
		`,
	data() {
		return {
			txtusuario: 'Usuario',
			radusuario: 'Admin',
			checkcomida: ['Gorditas Preparadas'],
		};
	},
	methods: {
		validatexto($event) {
			this.txtusuario = $event.target.value;
			this.esError = this.txtusuario.length < 5 ? true : false;
		},
	},
	computed: {
		msjError() {
			if (this.txtusuario.length < 5) {
				return 'Texto de usuario muy corto';
			}
		},
	},
}).mount('#app');
