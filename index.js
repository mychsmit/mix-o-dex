const express = require('express');

const cors = require('cors');

const app = express();

const model = require('./model');

const port = process.env.PORT || 8080;

const session = require('express-session');

function authorizeRequest(admin) {

}

function authorizeRequest(req, res, next) {
	if (req.session && req.session.userId) {
		model.User.findOne({ _id: req.session.userId }).then(function (user) {

		if (user) {
			req.user = user;
			next();

		} else {
			res.status(401).send("Unauthenticated");
		}

	});
	} else {
		res.status(401).send("Unauthenticated");
	}	
		
};


app.use(express.static('public'));

app.use(express.urlencoded({extended:false})); 

app.use(cors( {
	origin: 'null',
	credentials: true
}));

app.use(session({
	secret: "Jk$e3jk%Kjl@3kjsAeRq%Jk$",
	saveUninitialized: true,
	resave: false
}));

const localhost = "http://localhost:8080"
app.get('/spirits', function( req, res ) {

	model.spirits.find().then(spirits => {
		res.json(spirits);
	});

	console.log('Get Spirits Initiated');

});

app.post('/myselectedbaritems', authorizeRequest, function( req, res ) {

	const newSelectedBarItems = new model.mySelectedBarItems({
		listedItem: req.body.listedItem,
		user: req.user._id
	});

	console.log('Post Response Initiated');
	newSelectedBarItems.save().then(() => {
		console.log("Saved To DB");
		res.status(201).send('Created New Ingredient');
	});
});



app.get('/myselectedbaritems', authorizeRequest, function( req, res ) {

	model.mySelectedBarItems.find().then(mySelectedBarItems =>{
		res.json(mySelectedBarItems);
	});

	console.log('Get Bar List Initiated');

});

app.delete('/myselectedbaritems/:listedItemId', authorizeRequest, function( req, res ) {
	model.mySelectedBarItems.findOne({ _id: req.params.listedItemId }).then(listedItem => {
		if (listedItem) {
			model.mySelectedBarItems.deleteOne({ _id: req.params.listedItemId }).then(() => {
			res.status(204).send("Listed Bar Item Deleted");
			console.log("Deleted Listed Bar Item")
			});
		} else {
			res.status(404).send('Listed Bar Item Not Found');
		}
	}).catch(() => {
		res.status(400).send("Listed Bar Item Not Found");
	});

});

app.get('/bar_books/:currentDrinkId', function( req, res ) {
model.bar_books.findOne({_id: req.params.currentDrinkId}).then(currentDrink =>{
		if(currentDrink){
			res.json(currentDrink);
		} else {
			res.status(404).send("Current Drink Not Found");
		}
	}).catch(() => {
		res.status(400).send("Current Drink Not Found")
	});

	console.log('Get Bar Book Initiated');

});

app.put('/bar_books/:currentDrinkId', authorizeRequest, function( req, res ) {
	model.bar_books.findOne({_id: req.params.currentDrinkId}).then(currentDrink => {

		if (currentDrink) {
			model.bar_books.updateOne({name: req.params.name}).then(currentDrink =>{


			res.status(200).send("Current Drink Updated");
			console.log(currentDrink);

			});
		} else {
			res.status(404).send("Failed To Update Drink")
		};

	}).catch(() => {
		res.status(400).send("Current Drink Not Updated")
	});
});

app.get('/bar_books', function( req, res ) {

	var regex = req.query.findIngredients.split(",").join("|");



	var findIngredients = {};

	if (req.query.findIngredients) {
		findIngredients.ingredients = {$regex: regex, $options: "i"}
	}

	console.log("query params: ", findIngredients);


	model.bar_books.find(findIngredients).then(bar_books =>{
		res.json(bar_books);
	});

	console.log('Get Bar Book Initiated');

});

app.post('/bar_books', function( req, res ) {
	const newBarBookItem = new model.bar_books({
		name: req.body.name,
		ingredients: req.body.ingredients,
		directions: req.body.directions
	});

	console.log("Post Response For BarBook Initiated");

	newBarBookItem.save().then(() => {
		console.log("Saved Bar Book Item To DB");
		res.status(201).send('Created New Bar Book Item');
	});
});


app.get('/liqueurs', function( req, res ) {

	model.liqueurs.find().then(liqueurs => {
		res.json(liqueurs);
	});

	console.log("Get Liqueurs Initiated");

});


app.get('/beers_ciders', function( req, res ) {

	model.beers_ciders.find().then(beers_ciders => {
		res.json(beers_ciders);
	});

	console.log("Get Beers n' Ciders Initiated");

});

app.get('/wines', function( req, res ) {

	model.wines.find().then(wines => {
		res.json(wines);
	});

	console.log("Get Wines Initiated");

});



app.get('/mixers', function( req, res ) {

	model.mixers.find().then(mixers => {
		res.json(mixers);
	});

	console.log("Get Mixers Initiated");

});



app.get('/others', function( req, res ) {

	model.others.find().then(others => {
		res.json(others);
	});

	console.log("Get Others Initiated");

});

app.post('/users', function (req, res) {
	console.log('parsed request body');

	const newUser = new model.User({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email
	});

	console.log(req.body.password, "password is");
	
	newUser.setEncryptedPassword(req.body.password).then(function () {

		newUser.save().then(() => {
			console.log('User saved to db');
			res.status(201).send('Created user');
		}).catch((error) => {
			if (error.code == 11000) {
				res.status(422).json({
					email: "Must be unique"
				});
			} else if (error.errors) {
				let errorMesages = {};
				for (let e in error.errors) {
					errorMessages[e] = error.errors[e].message;
				}
				res.status(422).json(errorMessages);
			} else {
				console.error("Failed to save user to db", error);
				res.status(500).send("Server failed to create user.");
			}
		});

	});
});

app.post('/session', function (req, res) {

	model.User.findOne({ email: req.body.email }).then(function (user) {

		if (user) {

			user.verifyEncryptedPassword(req.body.password).then(function (result) {

				if (result){
					req.session.userId = user._id;
					res.status(201).send("Authenticated");
				} else {
					res.status(401).send("Unauthenticated");
				}

			});

		} else {
			res.status(401).send("Unauthenticated");
		}

	});

});

app.get('/session', authorizeRequest, function( req, res ) {

	res.json(req.user);
})

// app.get('/session', authorizeRequest, function (req, res) {
// 	console.log("the current session data: ", req.session);
// 	res.json(req.user);
// });

app.delete('/session', function( req, res ) {
	req.session.userId = undefined;
	res.status(204).send("Session Ended");
});


app.listen(port, function() {

	console.log(`Server Is Now Running On Port ${port}`);

});
