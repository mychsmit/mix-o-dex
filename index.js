const express = require('express');

const cors = require('cors');

const app = express();

app.use(express.urlencoded({extended:false})); 

app.use(cors());


var ingredients = [
	{
		spirits: [{
				category: "Vodka",
				brands: ["Absolut", "Titos", "Sky", "Grey Goose", "Smirnoff", "Stolichnaya", "Three Olives", "Vodka"], 
			}, 
			{
				category: "Tequila",
				brands: ["Hornitos", "Jose Cuervo", "Patron", "Sauza", "Tequila Blanco", "Tequila Reposado", "Tequila Silver"], 
			},
			{
				category: "Gin",
				brands: ["Hendricks", "Beefeater", "Bombay Sapphire", "Gordon's", "Tanqueray"], 
			},
			{
				category: "Rum",
				brands: ["Bacardi", "Bacardi Black", "Castillo", "Captain Morgan", "Malibu"],
			},
			{
				category: "Whisky",
				brands: ["Beams 8 Star", "Crown Royal", "Jack Daniels", "Jameson", "Jim Beam", "Makers Mark"]
		}],
		liqueurs: [{
			category: "Chocolate Liqueur",
			brands: ["Chocolate Liqueur", "Godiva White Chocolate Liqueur", "Frangelico"]
		},
		{
			category: "Coffee Liqueur",
			brands: ["Coffee Liqueur", "Kahlua", "Mr. Black Cold Brew"]
		},
		{
			category: "Cream Liqueur",
			brands: ["Bailey's Irish Cream", "Disaronno Velvet Cream", "Apple Pie Cream", "Rose Strawberry Cream"]
		},
		{
			category:  "Fruit Liqueur",
			brands: ["Banana Liqueur", "Blue Curacao", "Chambord", "Cointreau", "Grand Marnier", "Limoncello"]
		},
		{
			category: "Herb Liqueur",
			brands: ["St. Germain Elderflower", "Creme de Menthe", "Cinnamon Liqueur", "Amaro Averna"]
		},
		{
			category: "Nut Liqueur",
			brands: ["Amaretto", "Chestnut Liqueur", "Walnut Liqueur"]
		}
		}]
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