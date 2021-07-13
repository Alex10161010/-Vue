const app = Vue.createApp({
	data() {
		return {
			msj: 'Hola Mundo',
			persona: {
				nombre: 'Alejandro',
				edad: '29',
			},
		};
	},
}).mount('#app');
