window.onload = function () {
    Mapwize.apiKey('176850fba5cd74d5eb41af2ace6ff5f9');
    const map = new Mapwize.Map({
        container: 'map'
    });

    map.on('mapwize:ready', () => {
        // Mapwize map is now ready to be used
        console.log('Maps is now ready to be used');

        map.on('mapwize:click', event => {
            console.log('mapwize:click', event);
        })
    });
};