Vue.createApp({
	data: function() {
		return {

			ingredients: [],
			selectedIngredientTypes: []
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

				this.ingredients = data;	

				});

			});
		},

		showSpirits: function () {

			//spirits
			document.querySelector('.gin').style.display='block';
			document.querySelector('.rum').style.display='block';
			document.querySelector('.tequila').style.display='block';
			document.querySelector('.vodka').style.display='block';
			document.querySelector('.whisky').style.display='block';

			//liqueurs
			document.querySelector('.chocolate').style.display='none';
			document.querySelector('.coffee').style.display='none';
			document.querySelector('.cream').style.display='none';
			document.querySelector('.fruit').style.display='none';
			document.querySelector('.herb').style.display='none';
			document.querySelector('.nut').style.display='none';

			//beers
			document.querySelector('.pilsner').style.display='none';
			document.querySelector('.ipa').style.display='none';
			document.querySelector('.blonde').style.display='none';
			document.querySelector('.cider').style.display='none';

			//wines 
			document.querySelector('.red').style.display='none';
			document.querySelector('.white').style.display='none';
			document.querySelector('.champagne').style.display='none';

			//mixers 
			document.querySelector('.juice').style.display='none';
			document.querySelector('.flavor').style.display='none';
			document.querySelector('.soda').style.display='none';

			//wines 
			document.querySelector('.fruits').style.display='none';
			document.querySelector('.spice').style.display='none';
			document.querySelector('.vegetables').style.display='none';
		},

		showLiqueurs: function () {

			//liqueurs
			document.querySelector('.chocolate').style.display='block';
			document.querySelector('.coffee').style.display='block';
			document.querySelector('.cream').style.display='block';
			document.querySelector('.fruit').style.display='block';
			document.querySelector('.herb').style.display='block';
			document.querySelector('.nut').style.display='block';

			//spirits
			document.querySelector('.gin').style.display='none';
			document.querySelector('.rum').style.display='none';
			document.querySelector('.tequila').style.display='none';
			document.querySelector('.vodka').style.display='none';
			document.querySelector('.whisky').style.display='none';

			//beers
			document.querySelector('.pilsner').style.display='none';
			document.querySelector('.ipa').style.display='none';
			document.querySelector('.blonde').style.display='none';
			document.querySelector('.cider').style.display='none';

			//wines 
			document.querySelector('.red').style.display='none';
			document.querySelector('.white').style.display='none';
			document.querySelector('.champagne').style.display='none';

			//mixers 
			document.querySelector('.juice').style.display='none';
			document.querySelector('.flavor').style.display='none';
			document.querySelector('.soda').style.display='none';

			//wines 
			document.querySelector('.fruits').style.display='none';
			document.querySelector('.spice').style.display='none';
			document.querySelector('.vegetables').style.display='none';
		},

		showBeers: function () {


			//beers
			document.querySelector('.pilsner').style.display='block';
			document.querySelector('.ipa').style.display='block';
			document.querySelector('.blonde').style.display='block';
			document.querySelector('.cider').style.display='block';

			//liqueurs
			document.querySelector('.chocolate').style.display='none';
			document.querySelector('.coffee').style.display='none';
			document.querySelector('.cream').style.display='none';
			document.querySelector('.fruit').style.display='none';
			document.querySelector('.herb').style.display='none';
			document.querySelector('.nut').style.display='none';

			//spirits
			document.querySelector('.gin').style.display='none';
			document.querySelector('.rum').style.display='none';
			document.querySelector('.tequila').style.display='none';
			document.querySelector('.vodka').style.display='none';
			document.querySelector('.whisky').style.display='none';

			//wines 
			document.querySelector('.red').style.display='none';
			document.querySelector('.white').style.display='none';
			document.querySelector('.champagne').style.display='none';

			//mixers 
			document.querySelector('.juice').style.display='none';
			document.querySelector('.flavor').style.display='none';
			document.querySelector('.soda').style.display='none';

			//wines 
			document.querySelector('.fruits').style.display='none';
			document.querySelector('.spice').style.display='none';
			document.querySelector('.vegetables').style.display='none';
		},

		showWines: function () {

			//wines 
			document.querySelector('.red').style.display='block';
			document.querySelector('.white').style.display='block';
			document.querySelector('.champagne').style.display='block';

			//beers
			document.querySelector('.pilsner').style.display='none';
			document.querySelector('.ipa').style.display='none';
			document.querySelector('.blonde').style.display='none';
			document.querySelector('.cider').style.display='none';

			//liqueurs
			document.querySelector('.chocolate').style.display='none';
			document.querySelector('.coffee').style.display='none';
			document.querySelector('.cream').style.display='none';
			document.querySelector('.fruit').style.display='none';
			document.querySelector('.herb').style.display='none';
			document.querySelector('.nut').style.display='none';

			//spirits
			document.querySelector('.gin').style.display='none';
			document.querySelector('.rum').style.display='none';
			document.querySelector('.tequila').style.display='none';
			document.querySelector('.vodka').style.display='none';
			document.querySelector('.whisky').style.display='none';

			//mixers 
			document.querySelector('.juice').style.display='none';
			document.querySelector('.flavor').style.display='none';
			document.querySelector('.soda').style.display='none';

			//wines 
			document.querySelector('.fruits').style.display='none';
			document.querySelector('.spice').style.display='none';
			document.querySelector('.vegetables').style.display='none';

		},

		showMixers: function () {

			//mixers 
			document.querySelector('.juice').style.display='block';
			document.querySelector('.flavor').style.display='block';
			document.querySelector('.soda').style.display='block';

			//wines 
			document.querySelector('.red').style.display='none';
			document.querySelector('.white').style.display='none';
			document.querySelector('.champagne').style.display='none';

			//beers
			document.querySelector('.pilsner').style.display='none';
			document.querySelector('.ipa').style.display='none';
			document.querySelector('.blonde').style.display='none';
			document.querySelector('.cider').style.display='none';

			//liqueurs
			document.querySelector('.chocolate').style.display='none';
			document.querySelector('.coffee').style.display='none';
			document.querySelector('.cream').style.display='none';
			document.querySelector('.fruit').style.display='none';
			document.querySelector('.herb').style.display='none';
			document.querySelector('.nut').style.display='none';

			//spirits
			document.querySelector('.gin').style.display='none';
			document.querySelector('.rum').style.display='none';
			document.querySelector('.tequila').style.display='none';
			document.querySelector('.vodka').style.display='none';
			document.querySelector('.whisky').style.display='none';

			//wines 
			document.querySelector('.fruits').style.display='none';
			document.querySelector('.spice').style.display='none';
			document.querySelector('.vegetables').style.display='none';

		},

		showOthers: function () {

			//wines 
			document.querySelector('.fruits').style.display='none';
			document.querySelector('.spice').style.display='none';
			document.querySelector('.vegetables').style.display='none';

			//mixers 
			document.querySelector('.juice').style.display='none';
			document.querySelector('.flavor').style.display='none';
			document.querySelector('.soda').style.display='none';

			//beers
			document.querySelector('.pilsner').style.display='none';
			document.querySelector('.ipa').style.display='none';
			document.querySelector('.blonde').style.display='none';
			document.querySelector('.cider').style.display='none';

			//liqueurs
			document.querySelector('.chocolate').style.display='none';
			document.querySelector('.coffee').style.display='none';
			document.querySelector('.cream').style.display='none';
			document.querySelector('.fruit').style.display='none';
			document.querySelector('.herb').style.display='none';
			document.querySelector('.nut').style.display='none';

			//spirits
			document.querySelector('.gin').style.display='none';
			document.querySelector('.rum').style.display='none';
			document.querySelector('.tequila').style.display='none';
			document.querySelector('.vodka').style.display='none';
			document.querySelector('.whisky').style.display='none';

		}
	},


	created: function () {
		this.getSpirits();
	}

}).mount("#app");