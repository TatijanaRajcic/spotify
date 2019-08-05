const express = require("express");
const router = express.Router();
const spotifyApi = require("../spotify")

// MY ROUTE

router.post('/artists', (req, res, next)=>{
  let searchedArtist = req.body.searchedArtist;
  spotifyApi.searchArtists(searchedArtist)
  .then(data => {
    console.log("The received data from the API: ", data.body);
    res.render("artists", {data})
  })
  .catch(err => {
    console.log("The error while searching artists occurred: ", err);
  })
})


module.exports = router;
