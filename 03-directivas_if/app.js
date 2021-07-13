const app = Vue.createApp({
	template: `
		<button v-on:click="incrementar(1)">+ 1</button> <br>
	 	<p>{{contador}}</p>
		<br>
		<div>
			<span v-if=esPar>
				{{mensaje}}
			</span>
		</div>
	`,
	data() {
		return {
			esPar: true,
			contador: 0,
			mensaje: '------MSJ-----',
		};
	},
	methods: {
		incrementar(valor) {
			this.contador += valor;
			if (this.contador % 2 === 0 ? true : false) {
				this.mostrarMesaje('es Par');
			} else {
				this.mostrarMesaje('No es par');
			}
		},
		mostrarMesaje(msj) {
			this.esPar = true;
			this.mensaje = msj;
		},
	},
}).mount('#app');
