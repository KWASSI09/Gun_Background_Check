// This gets inserted into the div with an id of "map".
var myMap = L.map("map", {
    center: [37.0902, -95.7129],
    zoom: 13
  });


  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

  