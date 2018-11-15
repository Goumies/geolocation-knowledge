var myMap;

myMap = L.map('map');
myMap.createPane('labels');

myMap.getPane('labels').style.zIndex = 650;

myMap.getPane('labels').style.pointerEvents = 'none';

var cartodbAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>';

L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
    attribution: cartodbAttribution
}).addTo(myMap);

var positronLabels = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
    attribution: cartodbAttribution,
    pane: 'labels'
}).addTo(myMap);

geojson = L.geoJson(euCountries).addTo(myMap);

geojson.eachLayer(function (layer) {
    layer.bindPopup(layer.feature.properties.name);
});


myMap.setView({ lat: 47.040182144806664, lng: 9.667968750000002 }, 4);