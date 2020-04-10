// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
 let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// Create the map object with a center and zoom level.
//An alternative to using the setView() method
// let map = L.map("mapid", {
//     center: [
//       34.0522, -118.2437
//     ],
//     zoom: 14,
//       });


//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

//add a circle to the map
// L.circle([34.0522, -118.2437], {
//   radius: 100
// }).addTo(map);

//skill-drill
// L.circle([34.0522, -118.2437], {
//   color: 'black',
//   fillOpacity: 0.5,
//   stroke:true,
//   fillColor: '#ffffa1',
//   radius: 300  
// }).addTo(map);

L.circleMarker([34.0522, -118.2437], {
  color: 'black',
  fillColor: '#ffffa1',
  radius: 300  
}).addTo(map);


// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
// 	maxZoom: 18,
// 	accessToken: API_KEY
// });

//skill-drill: dark map: replace (streets-v11) by (dark-v10)
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});


// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


