require('dotenv').config();

const express = require('express');
const hbs = require('hbs');
var bodyParser = require('body-parser');


// setting up the app:
const app = express();

// setting up hbs:
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }))

// the routes:
const index = require('./routes/index');
app.use('/', index);

const artists = require("./routes/artists")
app.use('/', artists)

const albums = require("./routes/albums")
app.use('/', albums)

const tracks = require("./routes/tracks")
app.use('/', tracks)

app.listen(3000, () => console.log("My Spotify project running on port 3000 🎧 🥁 🎸 🔊"));

module.exports = app;