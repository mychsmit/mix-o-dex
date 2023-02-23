Vue.createApp({
	data: function() {
		retrn {
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
		}
	}
})