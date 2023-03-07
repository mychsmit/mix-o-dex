const express = require('express');

const cors = require('cors');

const app = express();

const model = require('./model');

const port = process.env.PORT || 8080;

app.use(express.urlencoded({extended:false})); 

app.use(cors());





app.get('/spirits', function( req, res ) {

	model.spirits.find().then(spirits => {
		res.json(spirits);
	});

	console.log('Get Spirits Initiated');

});

app.post('/spirits', function( req, res ) {

	const newSelectedBarItems = new model.mySelectedBarItems({
		listedItem: req.body.listedItem
	});

	console.log('Post Response Initiated');
	newSelectedBarItems.save().then(() => {
		console.log("Saved To DB");
		res.status(201).send('Created New Ingredient');
	});
});



app.get('/myselectedbaritems', function( req, res ) {

	model.mySelectedBarItems.find().then(mySelectedBarItems =>{
		res.json(mySelectedBarItems);
	});

	console.log('Get Bar List Initiated');

});

app.delete('/myselectedbaritems/:listedItemId', function( req, res ) {
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





app.get('/bar_books', function( req, res ) {

	console.log("query params: ", req.query);

	model.bar_books.find().then(bar_books =>{
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

app.listen(port, function() {

	console.log('Server Is Now Running On Port ${port}');

});
