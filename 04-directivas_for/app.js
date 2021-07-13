const app = Vue.createApp({
	template: `
		<div>
			<p>Arreglo de numeros: [1, 6, 58, 9, 4, 8, 6]</p>
			<span>Mostrar solo los numeros que sean pares</span>
			<ul>
				<li v-for="numero in numeros">
					{{verificaEsPar(numero)}}
				</li>
			</ul>
		</div>
	`,
	data() {
		return {
			numeros: [1, 6, 58, 9, 4, 8, 6],
		};
	},
	methods: {
		verificaEsPar(numero) {
			if (numero % 2 === 0 ? true : false) {
				return numero;
			}
		},
	},
}).mount('#app');
