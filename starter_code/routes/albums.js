const express = require("express");
const router = express.Router();
const spotifyApi = require("../spotify")

// ALBUMS

router.get("/albums/:id", (req,res,next) => {
  let artistId = req.params.id;
  spotifyApi.getArtistAlbums(artistId)
  .then(albumData => {
    res.render("albums", {albumData})
  })
  .catch(err => {
    console.log(err);
  })
})

/* how to chain two requests */
/* router.get("/albums/:id", (req, res, next) => {
  let artistId = req.params.id;
  spotifyApi.getArtist(artistId)
  .then( artistData => {
    spotifyApi.getArtistAlbums(artistId)
    .then(albumData => {
      res.render("albums", {artistData, albumData});
    }) 
  }) 
  .catch(err => {
    console.error(err);
  });
}) */

module.exports = router

