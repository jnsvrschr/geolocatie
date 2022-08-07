function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const accuracy = position.coords.accuracy;
    const altitude = position.coords.altitude;
    const altitudeAccuracy = position.coords.altitudeAccuracy;
    const heading = position.coords.heading;
    const speed = position.coords.speed;
    const timestamp = position.timestamp;
    document.querySelector('h1').innerHTML = latitude + '<br>' + longitude + '<br>' + accuracy + '<br>'
    + altitude + '<br>' + altitudeAccuracy + '<br>' + heading + '<br>' + speed + '<br>' + timestamp;
}

function error() {
    document.querySelector('h1').textContent = 'locatie niet gevonden';
}

const options = {
    enableHighAccuracy: true
};

if ('geolocation' in navigator) {
    navigator.geolocation.watchPosition(success, error, options);
} else {
    alert('geolocatie is niet ondersteund door jouw browser');
}

if ('compass' in navigator) {
    alert('ja');
} else {
    alert('nee');
}
