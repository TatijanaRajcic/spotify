const express = require("express");
const router = express.Router();
const spotifyApi = require("../spotify")

// TRACKS

router.get("/tracks/:id", (req, res, next) => {
  let albumId = req.params.id;
  spotifyApi.getAlbumTracks(albumId) 
  .then (tracksData => {
    debugger
    res.render("tracks", {tracksData})
  })
  .catch(err => {
    console.log(err)
  })
})

module.exports = router
