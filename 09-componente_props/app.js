const ComponenteTitulo = {
	template: `
        <h3>Hola desde un componente</h3>`,
};

const ComponenteNumero = {
	props: {
		numero_: {
			type: Number,
			required: true,
		},
	},
	template: `
        <div :class="getClase(numero_)" :title="numero_">
            {{numero_}}
        </div>`,
	methods: {
		esPar(numero) {
			return numero % 2 === 0;
		},
		getClase(numero) {
			let colortexto = 'txtverde';
			if (this.esPar(numero)) {
				colortexto = 'txtrojo';
			}
			return colortexto;
		},
	},
};

const app = Vue.createApp({
	components: {
		ComponenteTitulo,
		ComponenteNumero,
	},
	template: `
            <div><ComponenteTitulo/></div>
            <div>
				<p>{{mensaje}}</p>
			</div>
            <div v-for="numero in numeros">
				<ComponenteNumero :numero_="numero"/>
			</div>
            `,
	data() {
		return {
			mensaje: 'Herramienta de trabajo es Vue.js devtools. ',
			numeros: [1, 62, 6, 94, 39, 6, 9],
		};
	},
}).mount('#app');
