const express = require('express');

const cors = require('cors');

const app = express();

app.use(express.urlencoded({extended:false})); 

app.use(cors());


var ingredients = [
	{
		spirits: [{
			vodka: ["Absolut", "Titos", "Sky", "Grey Goose", "Smirnoff", "Stolichnaya", "Three Olives", "Vodka"], 
			tequila: ["Hornitos", "Jose Cuervo", "Patron", "Sauza", "Tequila Blanco", "Tequila Reposado", "Tequila Silver"], 
			gin: ["Hendricks", "Beefeater", "Bombay Sapphire", "Gordon's", "Tanqueray"], 
			rum: ["Bacardi", "Bacardi Black", "Castillo", "Captain Morgan", "Malibu"],
			whisky: ["Beams 8 Star", "Crown Royal", "Jack Daniels", "Jameson", "Jim Beam", "Makers Mark"]
		}],
		liqueurs: ["Chocolate Liqueur", "Coffee Liqueur", "Cream Liqueur", "Fruit Liqueur", "Herb Liqueur", "Nut Liqueur", "Other Liqueur", "Whisky Liqueur"],
		beers: ["Beers", "Ciders"],
		wines: ["Champagnes", "Red Wines", "White Wines"],
		mixers: ["Juices", "Soft Drinks", "Syrups"],
		other: ["Fruits"]
	}
	]

app.get('/ingredients', function( req, res ) {

	res.json(ingredients);

	console.log('Get Response Initiated');

});

app.post('/ingredients', function( req, res ) {

	console.log('Post Response Initiated');
	console.log(req.body);
	ingredients.push(req.body);
	res.status(201).sen('Created New Ingredient');
});

app.listen(8080, function() {

	console.log('Server Is Now Running On Port 8080');

});