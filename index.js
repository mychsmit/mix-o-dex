const express = require('express');

const cors = require('cors');

const app = express();

const model = require('./model')

app.use(express.urlencoded({extended:false})); 

app.use(cors());



app.get('/spirits', function( req, res ) {

	model.spirits.find().then(spirits => {
		res.json(spirits);
	});

	console.log('Get Spirits Initiated');

});

app.get('/myselectedbaritems', function( req, res ) {

	model.mySelectedBarItems.find().then(mySelectedBarItems =>{
		res.json(mySelectedBarItems);
	});

	console.log('Get Bar List Initiated');

});

app.post('/spirits', function( req, res ) {

	const newSelectedBarItems = new model.mySelectedBarItems({
		mySelectedBarItems: [req.body.listedItem]
	})

	console.log('Post Response Initiated');
	newSelectedBarItems.save().then(() => {
		console.log("Saved To DB");
		res.status(201).send('Created New Ingredient');
	});
});

app.delete('/spirits', function( req, res ) {

	console.log('Post Response Initiated');
	console.log(req.body);
	mySelectedBarItems.save().then(() => {
		console.log("Saved To DB");
		res.status(201).send('Created New Ingredient');
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

app.listen(8080, function() {

	console.log('Server Is Now Running On Port 8080');

});
