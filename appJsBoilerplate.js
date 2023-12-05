const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect('mongodb://127.0.0.1:27017/wikiDB');

////////////////////////////////////////////////////////Write your Comment Here////////////////////////////////////////////////////////


app.get("/", function (req, res) {

})


app.listen(3000, function (){
    console.log("Server started on port 3000")
})
