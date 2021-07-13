const app = Vue.createApp({
	template: `
		<div>
			<p>abreviatura <strong>:</strong> para <strong>v-bind</strong> Esta directiva permite enlazar (bindear) una variable de Vue con un atributo específico de una etiqueta HTML. De esta forma, podemos colocar como valor de un atributo HTML el contenido que tengamos almacenado en una variable de la lógica de Javascript.</p>
			<div v-for="numero in numeros">
				<div v-bind:class="getColorNumero(numero)" :title="numero">
					{{numero}}
				</div>
			</div>
		</div>
		<h4>Imagen</h4>
		<div>
			<div :class="className">
				<img v-bind:src="image" v-bind:alt="text" width="200" height="200">
			</div>
			<div :style="styles">
				<img :src="image" :alt="text" width="200" height="200">
			</div>
		</div>
	`,
	data() {
		return {
			numeros: [1, 6, 58, 9, 4, 8, 6, 25, 99, 87],
			image: 'https://lenguajejs.com/javascript/logo.svg',
			text: 'Logo de Javascript',
			/* Caso 3 */
			styles: {
				background: '#e7e7e7',
				color: 'white',
				padding: '8px',
			},
			/* Caso 3 */
			className: {
				divmorado: true,
				divazul: false,
			},
		};
	},
	methods: {
		verificaEsPar(numero) {
			return numero % 2 === 0;
		},
		getColorNumero(numero) {
			return this.verificaEsPar(numero) ? 'txtazul' : 'txtrojo';
		},
	},
}).mount('#app');
