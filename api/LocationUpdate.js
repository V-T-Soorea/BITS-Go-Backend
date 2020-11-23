const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const User = require("../models/user");
const Location = require("../models/location");
const Reviews = require("../models/reviews");


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Get details from location name

app.get("/LocationInfo", function (req, res) {

    Location.find({ locationName: req.body.locationName }, function (err, locationDetails) {
        res.send(locationDetails);
    });
});
//Add new location in db

app.post("/NewLocation", function (req, res) {

    const newLocation = new Location({
        locationName: req.body.locName,
        locationArea: req.body.locArea,
        distance: req.body.locDist,
        description: req.body.locDes
    });

    newLocation.save(function (err) {
        if (err) console.log(err);
        else res.send("Thanks for adding a new location");
    })
});