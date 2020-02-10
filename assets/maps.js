function initMap() {
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 3,
            center: {
                lat: 46.619261,
                lng: -33.134766
            }
        });

        const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        const locations = [
            {lat: 40.785091, lng: -73.9682285},
            {lat: 41.785091, lng: -73.874245},
            {lat: 40.785091, lng: -73.984016},
            {lat: -36.828611, lng: 175.790222},
            {lat: -37.750000, lng: 145.116667},
            {lat: -37.759859, lng: 145.128708}
        ];

        const markers = locations.map(function(location, i) {
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
        });
        const markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    }