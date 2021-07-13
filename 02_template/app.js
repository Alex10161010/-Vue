const app = Vue.createApp({
	template: `
		<button v-on:click="incrementar(1)">+ 1</button> <br>
		<button v-on:mousemove="mousemove(1)">+ mousemove</button>
	 	<p>{{contador}}</p>
		 
	`,
	data() {
		return {
			contador: 0,
		};
	},
	methods: {
		incrementar(valor) {
			this.contador += valor;
		},

		mousemove(valor) {
			this.contador += valor;
		},
	},
}).mount('#app');
