const app = Vue.createApp({
	data() {
		return {
			newUtil: '',
			titulo: 'Lista de compras',
			listautiles: [
				{ descripcion: 'Cuadernos de rallas' },
				{ descripcion: 'lapicero' },
				{ descripcion: 'poligrafo' },
				{ descripcion: 'Gomas' },
			],
		};
	},
	methods: {
		agregarUtil() {
			this.listautiles.push({ descripcion: this.newUtil });
			this.newUtil = '';
		},
		validarCampo() {
			if (this.newUtil === '') {
				alert('El campo se encuentra vacio');
			} else {
				this.agregarUtil();
			}
		},
	},
}).mount('#lista_compras');
