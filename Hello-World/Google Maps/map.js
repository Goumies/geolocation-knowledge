var map, marker, deveryware;
function initMap() {
    deveryware = {lat: 48.874646, lng: 2.335168};
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 48.874646, lng: 2.335168}, // Deveryware
        zoom: 20
    });
    marker = new google.maps.Marker({position: deveryware, map: map});
}