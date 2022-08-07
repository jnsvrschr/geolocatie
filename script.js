function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const accuracy = position.coords.accuracy;
    const altitude = position.coords.altitude;
    const altitudeAccuracy = position.coords.altitudeAccuracy;
    const heading = position.coords.heading;
    const speed = position.coords.speed;
    const timestamp = position.timestamp;
    document.querySelector('h1').innerHTML = 'latitude: ' + latitude + '<br>longitude: ' + longitude
    + '<br>accuracy: ' + accuracy + '<br>altitude: ' + altitude + '<br>altitudeAccuracy: ' + altitudeAccuracy
    + '<br>heading: ' + heading + '<br>speed: ' + speed + '<br>timestamp: ' + timestamp;
}

function error() {
    document.querySelector('h1').textContent = 'locatie niet gevonden';
}

const options = {
    enableHighAccuracy: true
};

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(success, error, options);
} else {
    alert('geolocatie is niet ondersteund door jouw browser');
}
