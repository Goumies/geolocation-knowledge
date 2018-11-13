var myMap, marker, circle, polygon, popup, popupCoordinates;

myMap = L.map('mapid').setView([51.505, -0.09], 13); // [coordinates], zoom

marker = L.marker([51.505, -0.09]).addTo(myMap);
marker.bindPopup("<b>Hello World !</b><br>I'm a popup.").openPopup(); // .openPopup() = for markers only

circle = L.circle([51.505, -0.09], {
    color: 'blue',
    fillColor: '#2aaaff',
    fillOpacity: 0.5,
    radius: 700
}).addTo(myMap);
circle.bindPopup("I'm a circle.");

polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(myMap);
polygon.bindPopup("I'm a polygon.");

popup = L.popup()
    .setLatLng([51.505, -0.09])
    .setContent("I'm a standalone popup")
    .openOn(myMap); // .openOn() handles automatic whenever a new popup opens up = usability ++

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets', // 'mapbox.satellite'
    accessToken: 'pk.eyJ1IjoiZ291bWllcyIsImEiOiJjam9mdWQwdDMwM2FkM3JvM282N2Fjczk1In0.cn5judg7WkANSxSGTESEtA'
}).addTo(myMap);

popupCoordinates = L.popup();

function onMapClick(event) {
    popupCoordinates
        .setLatLng(Object.values(event.latlng))
        .setContent("You clicked the map at " + Object.values(event.latlng))
        .openOn(myMap);
}

myMap.on('click', onMapClick);