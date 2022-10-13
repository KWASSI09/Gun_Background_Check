var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// An array containing each state's name, location, and population
var states = [{
  location: [37.8393, -84.2700],
  name: "Kentucky",
  population: 4509342
},
{
  location: [40.6331, -89.3985],
  name: "Illinois",
  population: 12812508
},
{
  location: [31.9686, -99.9018],
  name: "Texas",
  population: 29145505
},
{
  location: [36.7783, -119.4179],
  name: "California",
  population: 39185605
},
{
  location: [35.7596, -79.0193],
  name: "North Carolina",
  population: 10439388
},
{
  location: [41.2033, -77.1945],
  name: "Pennsylvania",
  population: 13002700
},
{
  location: [27.6648, -81.5158],
  name: "Florida",
  population: 21538187
}
];

// Looping through the states array, create one marker for each state, bind a popup containing its name and population, and add it to the map.
for (var i = 0; i < states.length; i++) {
  var state = states[i];
  L.marker(state.location)
    .bindPopup(`<h1>${state.name}</h1> <hr> <h3>Population ${state.population.toLocaleString()}</h3>`)
    .addTo(myMap);
}

  