const express = require('express');
const axios = require('axios');
const _=require('lodash');
var app = express();

var encodedAddress = encodeURIComponent("hyderbad");
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=hyderbad`;

axios.get(geocodeUrl).then((response) => 
{
  if (response.data.status === 'ZERO_RESULTS') 
  {
    throw new Error('Unable to find that address.');
  }  

  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  console.log(lat);
  console.log(lng);
 // console.log(response.data.results[0].formatted_address);
}).catch((e) => 
{
  if (e.code === 'ENOTFOUND') 
  {
    console.log('Unable to connect to API servers.');
  } else {
    console.log(e.message);
  }
});


app.listen(3009, () => 
{
  console.log('Server is up on port 3009');
});