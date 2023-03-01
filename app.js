Vue.createApp({
	data: function() {
		return {

			spirits: [],
			liqueurs: [], 
			beers_ciders: [],
			wines: [],
			mixers: [],
			others: [],
			show_spirits: false,
			show_liqueurs: false,
			show_beers: false,
			show_wines: false,
			show_mixers: false,
			show_others: false, 
			show_sub: false
		};
	},

	methods: {

		getSpirits: function () {

			fetch("http://localhost:8080/spirits").then(response => {

				response.json().then(data => {

				console.log('loaded bar spirits from server: ', data);

				this.spirits = data;	

				});

			});
		},
		
		getLiqueurs: function () {

			fetch("http://localhost:8080/liqueurs").then(response => {

				response.json().then(data => {

				console.log('loaded bar liqueurs from server: ', data);

				this.liqueurs = data;	

				});

			});
		},

		getBeers: function () {

			fetch("http://localhost:8080/beers_ciders").then(response => {

				response.json().then(data => {

				console.log('loaded bar beers_ciders from server: ', data);

				this.beers_ciders = data;	

				});

			});


		},

		getWines: function () {

			fetch("http://localhost:8080/wines").then(response => {

				response.json().then(data => {

				console.log('loaded bar wines from server: ', data);

				this.wines = data;	

				});

			});

			
		},

		getMixers: function () {

			fetch("http://localhost:8080/mixers").then(response => {

				response.json().then(data => {

				console.log('loaded bar mixers from server: ', data);

				this.mixers = data;	

				});

			});

			
		},

		getOthers: function () {

			fetch("http://localhost:8080/others").then(response => {

				response.json().then(data => {

				console.log('loaded bar others from server: ', data);

				this.others = data;	

				});

			});

			
		},



		showSpirits: function () {

			if (this.show_spirits == false) {
				this.show_spirits = true;
				this.show_liqueurs = false;
				this.show_beers = false;
				this.show_wines = false;
				this.show_mixers = false;
				this.show_others = false;
				this.show_sub = false;
			} else {
				this.show_spirits = false;
				this.show_sub = false;
			}
			
		},

		showSubSpirits: function () {

			if (this.show_sub == false) {
				this.show_sub = true;
			} else {
				this.show_sub = false;
			}
		},

		showLiqueurs: function () {

			if (this.show_liqueurs == false) {
				this.show_liqueurs = true;
				this.show_spirits = false;
				this.show_beers = false;
				this.show_wines = false;
				this.show_mixers = false;
				this.show_others = false;
			} else {
				this.show_liqueurs = false;
			}
			
		},

		showBeers: function () {

			if (this.show_beers == false) {
				this.show_beers = true;
				this.show_liqueurs = false;
				this.show_spirits = false;
				this.show_wines = false;
				this.show_mixers = false;
				this.show_others = false;
			} else {
				this.show_beers = false;
			}
			
		},

		showWines: function () {

			if (this.show_wines == false) {
				this.show_wines = true;
				this.show_beers = false;
				this.show_liqueurs = false;
				this.show_spirits = false;
				this.show_mixers = false;
				this.show_others = false;
			} else {
				this.show_wines = false;
			}
			
		},

		showMixers: function () {

			if (this.show_mixers == false) {
				this.show_mixers = true;
				this.show_wines = false;
				this.show_beers = false;
				this.show_liqueurs = false;
				this.show_spirits = false;
				this.show_others = false;
			} else {
				this.show_mixers = false;
			}
			
		},

		showOthers: function () {

			if (this.show_others == false) {
				this.show_others = true;
				this.show_beers = false;
				this.show_liqueurs = false;
				this.show_spirits = false;
				this.show_wines = false;
				this.show_mixers = false
			} else {
				this.show_others = false;
			}
			
		}
	},


	created: function () {
		this.getSpirits();
		this.getLiqueurs();
		this.getBeers();
		this.getWines();
		this.getMixers();
		this.getOthers();
	}

}).mount("#app");