// SPOTIFY API

const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
  clientId : process.env.CLIENT_ID,
  clientSecret : process.env.CLIENT_SECRET
});

spotifyApi.clientCredentialsGrant()
.then( data => {
  spotifyApi.setAccessToken(data.body['access_token']);
  console.log("token ok")
})
.catch(error => {
  console.log('Something went wrong when retrieving an access token', error);
})


module.exports = spotifyApi