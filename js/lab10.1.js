document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([38.9, -77], 11);

    L.tileLayer('https://api.mapbox.com/styles/v1/brightrain/ciycbsoa8007c2rqf7ym69old/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYnJpZ2h0cmFpbiIsImEiOiJyMjgtNGk4In0.Y64dPMiS4Xi8BXRiDhWXyg',
                {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18
    }).addTo(map);

    fetch('//opendata.dc.gov/datasets/e8c2b7ef54fb43d9a2ed1b0b75d0a14d_4.geojson')
        .then(function(response) {
        return response.json();
    })
        .then(function(geojson) {
        L.geoJSON(geojson).addTo(map);
    });
});