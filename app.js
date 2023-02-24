Vue.createApp({
	data: function() {
		return {

			ingredients: [],
			spirits: [],
			liqueurs: [],
			beers: [],
			wine: [],
			mixers: [],
			other: []
		};
	},

	methods: {
		viewIngredients: function () {
			var that = this;
			var data = "spirts=" + encodeURIComponent(this.spirits);
		},

		getSpirits: function () {

			fetch("http://localhost:8080/ingredients").then(response => {

				response.json().then(data => {

				console.log('loaded bar ingredients from server: ', data);

				this.spirits = data;	

				});

			});
		}
	},

	created: function () {
		this.getSpirits();
	}

}).mount("#app");