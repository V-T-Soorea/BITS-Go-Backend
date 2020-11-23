const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const User = require("../models/user");
const Location = require("../models/location");
const Reviews = require("../models/reviews");

const connect = require("../dbconfig.js");


const app = express();

app.use(bodyParser.urlencoded({extended: true}));

// Get reviews based on location

app.get("/ReviewsForLocation",function(req,res){

    Reviews.find({locationName: req.body.locationName}, function(err,reviews){        
        res.send(reviews);
    });     
});
//Add new reviews in db

app.post("/NewReviews",function(req,res){

    const newReview = new Reviews({
        senderEmail: req.body.email,
        locationName: req.body.locationName,
        rating: req.body.rating,	
        review: req.body.review
    });

    newReview.save(function(err){
        if(err) console.log(err);
        else res.send("Thanks for your review");
    })
});