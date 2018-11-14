var myMap, streets, cities;


// Bunch of layers to combine in a group
var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
    denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
    aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
    golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');

// Adding them all as a group
cities = L.layerGroup([littleton, denver, aurora, golden]);

var grayscale = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        id: 'mapbox.light',
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        accessToken: 'pk.eyJ1IjoiZ291bWllcyIsImEiOiJjam9mdWQwdDMwM2FkM3JvM282N2Fjczk1In0.cn5judg7WkANSxSGTESEtA'
    }),
    streets = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        id: 'mapbox.streets',
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        accessToken: 'pk.eyJ1IjoiZ291bWllcyIsImEiOiJjam9mdWQwdDMwM2FkM3JvM282N2Fjczk1In0.cn5judg7WkANSxSGTESEtA'
    });

myMap = L.map('mapid', {
    center: [39.73, -104.99],
    zoom: 10,
    layers: [grayscale, cities]
});

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZ291bWllcyIsImEiOiJjam9mdWQwdDMwM2FkM3JvM282N2Fjczk1In0.cn5judg7WkANSxSGTESEtA'
}).addTo(myMap);

// Switching layers
var baseMaps, overlayMaps;

baseMaps = {
    "<span style='color: gray'>Grayscale</span>": grayscale,
    "Streets": streets
};

overlayMaps  = {
    "Cities": cities
};

// Controls to switch
L.control.layers(baseMaps, overlayMaps).addTo(myMap);

