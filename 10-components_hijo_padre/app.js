const ComponenteTitulo = {
	props: {
		titulo_: {
			type: String,
			required: true,
		},
	},
	template: `
        <h3>{{titulo_}}</h3>`,
};

const ComponenteNumero = {
	props: {
		numero_: {
			type: Number,
			required: true,
		},
	},
	template: `
        <button :class="getClase(numero_)" :title="numero_" @click="btnEventoClick">
            {{numero_}}
        </button>`,
	methods: {
		btnEventoClick() {
			console.log('haciendo click en btn:');
			this.$emit('eventohijo', this.numero_);
		},
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
            <ComponenteTitulo :titulo_="titulo"/>
            <div>
				<p>{{mensaje}}</p>
			</div>
            <ComponenteNumero v-for="numero in numeros" :numero_="numero" @eventohijo="recibirEventoHijo"/>

			<h3>Numeros a los que se hicieron Click</h3>
			<ComponenteNumero v-for="numero in numerosClick" :numero_="numero"/>
            `,
	data() {
		return {
			titulo: 'Comunicacion del componete hijo al padre',
			mensaje: 'Herramienta de trabajo es Vue.js devtools. ',
			numeros: [1, 62, 6, 94, 39, 6, 9],
			numerosClick: [],
		};
	},
	methods: {
		recibirEventoHijo(numero) {
			console.log('Se recibio el mensaje del componente hijo y se almacena el numero click.');
			this.numerosClick.push(numero);
		},
	},
}).mount('#app');
