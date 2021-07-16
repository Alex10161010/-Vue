const app = Vue.createApp({
	data() {
		return {
			nombreBoton: 'Agregar',
			mostrarDiv: false,
			newUtil: '',
			titulo: 'Lista de compras',
			listautiles: [
				{ descripcion: 'Cuadernos de rallas', comprado: false },
				{ descripcion: 'lapicero', comprado: true },
				{ descripcion: 'poligrafo', comprado: false },
				{ descripcion: 'Gomas', comprado: true },
			],
		};
	},
	methods: {
		agregarUtil() {
			this.listautiles.push({ descripcion: this.newUtil, comprado: false });
			this.newUtil = '';
		},
		validarCampo() {
			if (this.newUtil === '') {
				alert('El campo se encuentra vacio');
			} else {
				this.agregarUtil();
			}
		},
		cambiarShowDiv() {
			this.mostrarDiv = !this.mostrarDiv;
			this.nombreBoton = this.mostrarDiv ? 'Cancelar' : 'Agregar';
		},
		cambiarStatusCompra(util) {
			util.comprado = !util.comprado;
		},
	},
	computed: {
		maximoCarateres() {
			return this.newUtil.length;
		},
	},
}).mount('#lista_compras');
