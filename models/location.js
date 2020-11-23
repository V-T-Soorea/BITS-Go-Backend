const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
	locationName: {
        type: String
    },
    locationArea: {
        type: String
    },
    distance:{
        type: Number
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model('Locations', locationSchema);