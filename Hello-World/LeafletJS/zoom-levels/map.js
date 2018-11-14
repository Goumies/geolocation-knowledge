var myMap, marker, circle, polygon, popup, popupCoordinates;

myMap = L.map('mapid', {
    minZoom: 0,
    maxZoom: 0
});

var cartodbAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>';

var positron = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    attribution: cartodbAttribution
}).addTo(myMap);

myMap.setView([0, 0], 0);
