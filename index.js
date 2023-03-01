const express = require('express');

const cors = require('cors');

const app = express();

app.use(express.urlencoded({extended:false})); 

app.use(cors());


var spirits = [{
				type: "Vodka",
				brands: ["Absolut", "Titos", "Sky", "Grey Goose", "Smirnoff", "Stolichnaya", "Three Olives", "Vodka"], 
			}, 
			{
				type: "Tequila",
				brands: ["Hornitos", "Jose Cuervo", "Patron", "Sauza", "Tequila Blanco", "Tequila Reposado", "Tequila Silver"], 
			},
			{
				type: "Gin",
				brands: ["Hendricks", "Beefeater", "Bombay Sapphire", "Gordon's", "Tanqueray"], 
			},
			{
				type: "Rum",
				brands: ["Bacardi", "Bacardi Black", "Castillo", "Captain Morgan", "Malibu"],
			},
			{
				type: "Whisky",
				brands: ["Beams 8 Star", "Crown Royal", "Jack Daniels", "Jameson", "Jim Beam", "Makers Mark"]
		}]
	

var liqueurs = [{
			type: "Chocolate Liqueur",
			brands: ["Chocolate Liqueur", "Godiva White Chocolate Liqueur", "Frangelico"]
		},
		{
			type: "Coffee Liqueur",
			brands: ["Coffee Liqueur", "Kahlua", "Mr. Black Cold Brew"]
		},
		{
			type: "Cream Liqueur",
			brands: ["Bailey's Irish Cream", "Disaronno Velvet Cream", "Apple Pie Cream", "Rose Strawberry Cream"]
		},
		{
			type:  "Fruit Liqueur",
			brands: ["Banana Liqueur", "Blue Curacao", "Chambord", "Cointreau", "Grand Marnier", "Limoncello"]
		},
		{
			type: "Herb Liqueur",
			brands: ["St. Germain Elderflower", "Creme de Menthe", "Cinnamon Liqueur", "Amaro Averna"]
		},
		{
			type: "Nut Liqueur",
			brands: ["Amaretto", "Chestnut Liqueur", "Walnut Liqueur"]
		}
		]

var beers_ciders = [
	{
		type: "Beers",
		brands: ["Beer", "Lager", "Light Beer", "IPA","Stout"]
	},
	{
		type: "Ciders",
		brands: ["Apple Cider", "Dry Cider", "Pear Cider", "Strongbow"]
	}

	]

var wines = [
		{
			type: "Red Wines",
			brands: ["Red Blend", "Cabernet Sauvignon", "Malbec", "Merlot", "Pinot Noir"]
		},
		{
			type: "White Wines",
			brands: ["Chardonay", "Riesling", "Pinot Grigio", "Sauvignon Blanc", "Moscoto"]
		},
		{
			type: "Champagnes",
			brands: ["Champagne", "Brute Split", "Pink Champagne"]
		}
	]

var mixers = [
		{
			type: "Juices",
			brands: ["Apple Juice", "Cranberry Juice", "Grapefruit Juice", "Orange Juice", "Pineapple Juice", "Tomato Juice"]
		}, 
		{
			type: "Bar Stock",
			brands: ["Bitters", "Sour Mix", "Simple Syrup", "Grenadine", "Half & Half"]
		},
		{
			type: "Sodas",
			brands: ["Cola", "Diet Cola", "Cola Zero", "Lemon Lime", "Mountain Dew", "Dr. Pepper", "Energy Drink"]
		}
	]

var others = [
	{
		type: "Fruits",
		brands: ["Apples", "Bananas", "Blueberries", "Cherries", "Cucumber", "Lemons", "Limes", "Oranges", "Raspberries"]
	}

]



app.get('/spirits', function( req, res ) {

	res.json(spirits);

	console.log('Get Spirits Initiated');

});

app.post('/spirits', function( req, res ) {

	console.log('Post Response Initiated');
	console.log(req.body);
	spirits.push(req.body);
	res.status(201).sen('Created New Ingredient');
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

app.listen("0.0.0.0:$PORT", function() {

	console.log('Server Is Now Running On Port 8080');

});
