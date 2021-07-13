const app = Vue.createApp({
	template: `
		<div>
			<p>cual es la diferencia entre un metodo y una propiedad computada, si bien es cierto es que
			es una funcion mas pero las propiedades computadas se almacena en cache y esto ayuda al
			performan de la aplicacion</p>
			<span>Mostrar solo los numeros que sean pares</span>
			<ul>
				<li v-for="numero in listarNumerosPares">
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
			if (numero % 2 === 0) {
				return numero;
			}
		},
	},
	computed: {
		listarNumerosPares() {
			return this.numeros.filter((numero) => numero % 2 === 0);
		},
	},
}).mount('#app');
