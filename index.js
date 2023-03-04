const express = require('express');

const cors = require('cors');

const app = express();

const model = require('./model')

app.use(express.urlencoded({extended:false})); 

app.use(cors());



app.get('/spirits', function( req, res ) {

	res.json(spirits);

	console.log('Get Spirits Initiated');

});

app.get('/myselectedbaritems', function( req, res ) {

	res.json(mySelectedBarItems);

	console.log('Get Bar List Initiated');

});

app.post('/spirits', function( req, res ) {

	console.log('Post Response Initiated');
	console.log(req.body);
	mySelectedBarItems.push(req.body);
	res.status(201).send('Created New Ingredient');
});

app.delete('/spirits', function( req, res ) {

	console.log('Post Response Initiated');
	console.log(req.body);
	mySelectedBarItems.push(req.body);
	res.status(201).send('Created New Ingredient');
});


app.get('/liqueurs', function( req, res ) {

	res.json(liqueurs);

	console.log("Get Liqueurs Initiated");

});


app.get('/beers_ciders', function( req, res ) {

	res.json(beers_ciders);

	console.log("Get Beers n' Ciders Initiated");

});

app.get('/wines', function( req, res ) {

	res.json(wines);

	console.log("Get Wines Initiated");

});



app.get('/mixers', function( req, res ) {

	res.json(mixers);

	console.log("Get Mixers Initiated");

});



app.get('/others', function( req, res ) {

	res.json(others);

	console.log("Get Others Initiated");

});

app.listen(8080, function() {

	console.log('Server Is Now Running On Port 8080');

});
