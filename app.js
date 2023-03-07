Vue.createApp({
	data: function() {
		return {

			listedItem: "",
			spirits: [],
			liqueurs: [], 
			beers_ciders: [],
			wines: [],
			mixers: [],
			others: [],
			selectedBrands: [],
			mySelectedBarItems: [""],
			bar_books: [],
			show_spirits: false,
			show_liqueurs: false,
			show_beers: false,
			show_wines: false,
			show_mixers: false,
			show_others: false, 
			show_sub: false,
			show_list: true,
			name: "",
			ingredients: [],
			directions: "",
			drink_hover: false,
			shake_ingredients: []
		};
	},

	methods: {

		shakeIngredients: function () {



		},

		barItemsTrue: function () {

			if( this.mySelectedBarItems.length > 0 ) {
				return true;
			} else {
				return false;
			}

		},

		getSpirits: function () {

			fetch("https://mix-o-dex.up.railway.app/spirits").then(response => {

				response.json().then(data => {

				console.log('loaded bar spirits from server: ', data);

				this.spirits = data;	

				});

			});


				this.show_list = true;
		},

		addIngredientsToBarList: function(brand) {

			if(this.show_list == false) {
				this.show_list = true;
			} else {
				this.show_list = false;
			}

			this.listedItem = brand;

			
			var data = "listedItem=" + encodeURIComponent(this.listedItem);

			fetch("https://mix-o-dex.up.railway.app/spirits", {
				method: "POST",
				body: data,
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				}
			}).then(response => {
				if (response.status = 201) {
					this.getMySelectedBarItems();
				} else {
					console.log("Failed to add ingredient to bar list");
				}
			});

		},

		getBarBook: function () {

			fetch("https://mix-o-dex.up.railway.app/bar_books").then(response => {

				response.json().then(data => {

				console.log('loaded bar_books from server: ', data);

				this.bar_books = data;	

				});

			});

			
		},

		addDrinkToBarBook: function() {

			var that = this;

			var name = "name=" + encodeURIComponent(this.name);
			data + "&ingredients=" + encodeURIComponent(this.ingredients);
			data + "&directions=" + encodeURIComponent(this.directions);

			fetch("https://mix-o-dex.up.railway.app/bar_books", {
				method: "POST",
				body: data,
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				}
			}).then(response => {
				if (response.status = 201) {
					this.getBarBook();
				} else {
					console.log("Failed to add drink to bar book");
				}
			})

		},

		getMySelectedBarItems: function () {

			fetch("https://mix-o-dex.up.railway.app/myselectedbaritems").then(response => {

				response.json().then(data => {

				console.log('loaded bar items from server: ', data);

				this.mySelectedBarItems = data;	

				});

			});
		},
		
		getLiqueurs: function () {

			fetch("https://mix-o-dex.up.railway.app/liqueurs").then(response => {

				response.json().then(data => {

				console.log('loaded bar liqueurs from server: ', data);

				this.liqueurs = data;	

				});

			});
		},

		getBeers: function () {

			fetch("https://mix-o-dex.up.railway.app/beers_ciders").then(response => {

				response.json().then(data => {

				console.log('loaded bar beers_ciders from server: ', data);

				this.beers_ciders = data;	

				});

			});


		},

		getWines: function () {

			fetch("https://mix-o-dex.up.railway.app/wines").then(response => {

				response.json().then(data => {

				console.log('loaded bar wines from server: ', data);

				this.wines = data;	

				});

			});

			
		},

		getMixers: function () {

			fetch("https://mix-o-dex.up.railway.app/mixers").then(response => {

				response.json().then(data => {

				console.log('loaded bar mixers from server: ', data);

				this.mixers = data;	

				});

			});

			
		},

		getOthers: function () {

			fetch("https://mix-o-dex.up.railway.app/others").then(response => {

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

		showBrands: function (brands) {

			if (this.show_sub == false) {
				this.show_sub = true;
			} else {
				this.show_sub = false;
			}

			this.selectedBrands = brands;


		},

		showList: function (item) {
			if(this.show_list == false) {
				this.show_list = true;
			} else {
				this.show_list = false;
			}

			this.mySelectedBarItems = item;
		},

		showLiqueurs: function () {

			if (this.show_liqueurs == false) {
				this.show_liqueurs = true;
				this.show_spirits = false;
				this.show_beers = false;
				this.show_wines = false;
				this.show_mixers = false;
				this.show_others = false;
				this.show_sub = false;
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
				this.show_sub = false;
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
				this.show_sub = false;
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
				this.show_sub = false;
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
				this.show_sub = false;
			} else {
				this.show_others = false;
			}
			
		},

		deleteBarListItemFromDB: function(listedbaritemId) {

			fetch("https://mix-o-dex.up.railway.app/myselectedbaritems/" + listedbaritemId, {
				method: "DELETE"
			}).then(response => {
				console.log("Listed Bar Item Deleted");
				this.getMySelectedBarItems();
			});

		},

		deleteBarListItem: function (listedbaritem) {
			console.log("Attempt to delete a listed bar item");
			this.deleteBarListItemFromDB(listedbaritem._id);
		},
	},


	created: function () {
		this.getSpirits();
		this.getLiqueurs();
		this.getBeers();
		this.getWines();
		this.getMixers();
		this.getOthers();
	}, 

	mounted: function() {
		this.getMySelectedBarItems();
	}

}).mount("#app");