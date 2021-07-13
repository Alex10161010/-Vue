const app = Vue.createApp({
	template: `
		<form action="">
			<input type="text" @input="validatexto" :value="txtusuario">
			<div v-if="esError">
				<span>{{msjError}}</span>
			</div>
		</form>`,
	data() {
		return {
			txtusuario: 'Usuario',
			esError: false,
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
