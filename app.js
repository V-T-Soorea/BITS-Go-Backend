const express = require("express");
const mongoose = require("mongoose");

const app = express();

//Connects the frontend to the datbase using APIs

app.listen(3000, function(err){ 
    if (err) console.log(err); 
    console.log("Server listening on PORT:", 3000); 
});