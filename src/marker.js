
const mapbox = require('mapbox-gl');
const iconURLs = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = (iconURLs) => {
//   console.log(iconURLs[type],'is the key')
//   if(iconURLs[type]) return
//  //new mapboxgl.Marker(type).setLngLat(coords).addTo(map);
//   // Your Code Here
for(var key in iconURLs){
  if(key)return iconURLs[key]
}

 };


new mapboxgl.Marker(markerDomEl).setLngLat(coords).addTo(map);

module.exports = buildMarker;
