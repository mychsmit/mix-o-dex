const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://mychsmit:AVBwrgOZIGktbSnf@mix-o-dex.m7tkt2a.mongodb.net/mix-o-dex?retryWrites=true&w=majority')


const spirits = mongoose.model('spirits', { 
	spirits: []
});

const liqueurs = mongoose.model('liqueurs', { 
	liqueurs: []
});

const beers_ciders = mongoose.model('beers_ciders', { 
	beers_ciders: []
});

const wines = mongoose.model('wines', { 
	wines: []
});

const mixers = mongoose.model('mixers', { 
	mixers: []
});

const others = mongoose.model('others', { 
	others: []
});

const mySelectedBarItems = mongoose.model('mySelectedBarItems', { 
	listedItem: String
});

const bar_books = mongoose.model('bar_books', {
	name: String,
	ingredients: [String],
	directions: String
});

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: [true, "Please specify first name."]
	},
	lastName: {
		type: String, 
		required: [true, "Please specify last name."]
	},
	email: {
		type: String,
		required: [true, "Please specify an email."],
		unique: true
	},
	encryptedPassword: {
		type: String,
		required: [true, "Please specify a password."]
	}
});

const User = mongoose.model('User', userSchema);

module.exports = {
    spirits: spirits,
    liqueurs: liqueurs,
    beers_ciders: beers_ciders,
    wines: wines,
    mixers: mixers,
    others: others,
    mySelectedBarItems: mySelectedBarItems,
    bar_books: bar_books,
    User: User

};