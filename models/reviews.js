const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
	senderEmail: {
		type: String
	},
	senderName:{
		type:String
	},
	locationName: {
		type:String
	},
	rating: {
		type: Number,
		enum: [1,2,3,4,5]
	},	
	review: {
		type: String
	}	
});

module.exports = mongoose.model('Reviews', reviewSchema);