const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

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

// const barItemsSchema = new mongoose.Schema({
// 	listedItem: {
// 		type: String
// 	},
// 	user: {
// 		type: Schema.Types.ObjectId,
// 		ref: 'User',
// 		required: true
// 	}
// });

// const mySelectedBarItems = mongoose.model('mySelectedBarItems', barItemsSchema);

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

userSchema.methods.setEncryptedPassword = function (plainPassword) {

	var promise = new Promise( (resolve, reject) => {

		bcrypt.hash(plainPassword, 12).then( hash => {
			this.encryptedPassword = hash;
			resolve(); 
		});
	});
	return promise;
};

userSchema.methods.verifyEncryptedPassword = function (plainPassword) {

	var promise = new Promise( (resolve, reject) => {

		bcrypt.compare(plainPassword, this.encryptedPassword).then( result => {
			resolve(result); 
		});
	});
	return promise;
};

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