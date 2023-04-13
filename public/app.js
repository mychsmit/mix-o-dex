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
			shake_ingredients: [], 
			edit: false,
			edit_login: false,
			edit_register: false,
			currentDrink: {
				name: "",
				ingredients: [], 
				directions: ""
			},
			firstName: "",
			lastName: "",
			email: "",
			showPassword: false,
			password: "",
			registered: false,
			loggedIn: false,
			loggedInUser: "", 
			incorrect: false,
			user: "",
			uniqueEmail: false,
			support: false,
			support_input: "",
			support_outgoing_message: "",
			support_bubble_incoming: "",
			support_bubble_outgoing: "",
			support_page_incoming: "",
			support_page_outgoing: "",
			support_page_response: "", 
			socket: null,
			sent_message: false,
			incoming_message: false,
			support_incoming: false,
			support_outoing: true

		};
	},

	methods: {

		openSupport: function() {
			this.support = true;
		},

		closeSupport: function() {
			this.support = false;
		},
	
		toggleShow: function() {
			this.showPassword = !this.showPassword;
		},

		updateDrinkName: function (drink) {

			console.log(drink, "name");

			console.log("is this working on the update function?")

			var data = "name=" + encodeURIComponent(drink.name);

			fetch('/bar_books/' + drink._id, {
				method: "PUT",
				credentials: "include",
				body: data,
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				}
			}).then(response => {
				if (response.status == 200) {
					this.getCurrentDrink(drink._id);
					console.log("Response code 200")
					this.edit = false;
				} else {
					console.log("Failed to update drink");
				}
			});

		},
		
	    showPopup: function(currentDrinkId) {
	      this.edit = true;

	      this.getCurrentDrink(currentDrinkId);
	    },
	    closePopup: function() {
	      this.edit = false;
	    },
		
	    showPopupLogin: function() {
	      this.edit_login = true;
	    },
	    closePopupLogin: function() {
	      this.edit_login = false;
	    },
		
	    showPopupRegister: function() {
	      this.edit_register = true;
	    },
	    closePopupRegister: function() {
	      this.edit_register = false;
	      this.registered = false;
	    },

		searchIngredients: function () {

			// this.getMySelectedBarItems();

			var items = this.mySelectedBarItems.map(item => item.listedItem);




			if (this.mySelectedBarItems.length > 0) {
				fetch("/bar_books?findIngredients=" + items.join(",")).then(response => {
					response.json().then(data => {
						console.log('search query? ', data);
						this.bar_books = data;
					})
				})
			} else {
				console.log("This did not work!")
			}

		},

		barItemsTrue: function () {

			if( this.mySelectedBarItems.length > 0 ) {
				return true;
			} else {
				return false;
			}

		},

		getSpirits: function () {

			fetch("/spirits").then(response => {

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

			fetch("/myselectedbaritems", {
				method: "POST",
				credentials: "include",
				body: data,
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				}
			}).then(response => {
				if (response.status == 201) {
					this.getMySelectedBarItems();
				} else {
					console.log("Failed to add ingredient to bar list");
				}
			});

		},

		getBarBook: function () {

			fetch("/bar_books").then(response => {

				response.json().then(data => {

				console.log('loaded bar_books from server: ', data);

				this.bar_books = data;	

				});

			});

			
		},

		getCurrentDrink: function(currentDrinkId) {
			console.log("getting drink by id");
			fetch("/bar_books/" + currentDrinkId).then(response => {
				response.json().then(data => {
					console.log("fetched item by id", data);
					this.currentDrink = data
				});
			});
		},

		registerUser: function() {

			// var that = this;

			var data = "firstName=" + encodeURIComponent(this.firstName);
			data += "&lastName=" + encodeURIComponent(this.lastName);
			data += "&email=" + encodeURIComponent(this.email);
			data += "&password=" + encodeURIComponent(this.password);
			
			fetch('/users', {
				method: "POST",
				credentials: "include",
				body: data, 
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				}
			}).then(response => {
				if (response.status == 201) {
					this.registered = true;
					this.firstName = "";
					this.lastName = "";
					this.email = "";
					this.password  = "";
					this.uniqueEmail = false;

					console.log("User Created");
				} else if (response.status == 422) {
					console.log("Email Must Be Unique");
					this.uniqueEmail = true;

				} else {
					console.log("Failed to add ingredient to bar list");
				}
			});

		}, 

		addDrinkToBarBook: function() {

			var that = this;

			var data = "name=" + encodeURIComponent(this.name);
			data += "&ingredients=" + encodeURIComponent(this.ingredients);
			data += "&directions=" + encodeURIComponent(this.directions);

			fetch("/bar_books", {
				method: "POST",
				credentials: "include",
				body: data,
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				}
			}).then(response => {
				if (response.status == 201) {
					this.getBarBook();
				} else {
					console.log("Failed to add drink to bar book");
				}
			})

		},

		getMySelectedBarItems: function () {

			fetch("/myselectedbaritems").then(response => {

				response.json().then(data => {

				console.log('loaded bar items from server: ', data);

				this.mySelectedBarItems = data;	

				});

			});
		},
		
		getLiqueurs: function () {

			fetch("/liqueurs").then(response => {

				response.json().then(data => {

				console.log('loaded bar liqueurs from server: ', data);

				this.liqueurs = data;	

				});

			});
		},

		getBeers: function () {

			fetch("/beers_ciders").then(response => {

				response.json().then(data => {

				console.log('loaded bar beers_ciders from server: ', data);

				this.beers_ciders = data;	

				});

			});


		},

		getWines: function () {

			fetch("/wines").then(response => {

				response.json().then(data => {

				console.log('loaded bar wines from server: ', data);

				this.wines = data;	

				});

			});

			
		},

		getMixers: function () {

			fetch("/mixers").then(response => {

				response.json().then(data => {

				console.log('loaded bar mixers from server: ', data);

				this.mixers = data;	

				});

			});

			
		},

		getOthers: function () {

			fetch("/others").then(response => {

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

			fetch("/myselectedbaritems/" + listedbaritemId, {
				method: "DELETE",
				credentials: "include"
			}).then(response => {
				console.log("Listed Bar Item Deleted");
				this.getMySelectedBarItems();
			});

		},

		deleteBarListItem: function (listedbaritem) {
			console.log("Attempt to delete a listed bar item");
			this.deleteBarListItemFromDB(listedbaritem._id);
		},

		userLoggedIn: function() {

			var data = "email=" + encodeURIComponent(this.email);
			data += "&password=" + encodeURIComponent(this.password);

			fetch('/session', {
				method: "POST",
				credentials: "include",
				body:data,
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				}
			}).then(response => {
				if (response.status == 201) {
					this.loggedIn = true;
					this.email = "";
					this.password = "";
					this.incorrect = false;
					this.getMySelectedBarItems();

					console.log("User successfully Logged in");
				} else {
					console.log("User Failed To Log In");
					this.incorrect = true;
					this.loggedIn = false;
				}
			});


      		window.location.reload();

		},

		userLogsOut: function() {

			fetch("/session/",  {
				method: "DELETE",
				credentials: "include"
			}).then(response => {
				if (response.status == 204) {
					console.log("User Logged Out");
					this.loggedIn = false;
				} else {
					console.error("Failed to delete session on server");
				}
			});


      		window.location.reload();

		},
		
		getUser: function () {

			fetch("/session", {
				credentials: "include"
			}).then(response => {

				if( response.status == 200 ) {

					response.json().then(user => {

					this.user = user;	

					this.loggedIn = true;

					this.getMySelectedBarItems();

					console.log('User logged in');

					});

				} else {
					this.loggedIn = false;
					console.log('User Not Logged in')
				}

			});
		},

		connectSocket: function () {
			this.socket = new WebSocket("ws://localhost:8080");
			this.socket.onmessage = (event) => {
				this.handleMessageFromSocket(event.data);
			}
		},
		handleMessageFromSocket: function (data) {
			console.log("message received from socket:", event.data);
		},
		sendMessageToSupport: function (message) {
			this.email = message.email;
			this.support_outgoing_message = message.subscriberMessage;
			this.support_page_incoming = message.subscriberMessage;
			this.sent_message = true;
		},
		sendMessageToSocket: function () {
			var message = {
				email: this.user.email,
				subscriberMessage: this.support_bubble_outgoing
			}
			this.socket.send(JSON.stringify(message))
			this.sendMessageToSupport(message)
			this.support_bubble_outgoing = "";
		}
	},


	created: function () {
		this.getSpirits();
		this.getLiqueurs();
		this.getBeers();
		this.getWines();
		this.getMixers();
		this.getOthers();
		this.getUser();
		this.connectSocket();


	}, 

	computed: {
	    buttonLabel() {
	      return (this.showPassword) ? "Hide" : "Show";
	    }
  }

}).mount("#app");