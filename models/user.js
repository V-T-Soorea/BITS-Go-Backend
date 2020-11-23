const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	email: {
		type: String
	},
	bitsId: {
		type: String
	},
	name: {
		type: String
    },
    Position: { //Admin or not
        type:String
    }
	
});

module.exports = mongoose.model('User', userSchema);