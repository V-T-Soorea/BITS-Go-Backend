const mongoose = require('mongoose');

function connect(){
	try{
		const url = process.env.MONGOURL || 'mongodb://localhost:27017/BITSGO';
		mongoose.connect(url, {
			useUnifiedTopology: true,
			useNewUrlParser: true
		});
		console.log("Connected to Database");
		return 0;
	} catch(err){
		console.log("ERROR: Could not connect to database: ", err);
		process.exit(1);
	}
}

module.exports = connect;