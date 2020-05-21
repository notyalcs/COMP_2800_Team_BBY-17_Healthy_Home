
let pos;
let map;
let bounds;
let infoWindow;
let currentInfoWindow;
let service;
let infoPane;
function initMap() {
  // Initialize variables
  bounds = new google.maps.LatLngBounds();
  infoWindow = new google.maps.InfoWindow;
  currentInfoWindow = infoWindow;

  // Try geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      map = new google.maps.Map(document.getElementById('map'), {
        center: pos,
        zoom: 15
      });
      bounds.extend(pos);

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);

      // Call on user's location
      getNearbyPlaces(pos);
    }, () => {
      // Browser supports geolocation, but user has denied permission
      handleLocationError(true, infoWindow);
    });
  } else {
    // Browser doesn't support geolocation
    handleLocationError(false, infoWindow);
  }
}

// Handle a geolocation error
function handleLocationError(browserHasGeolocation, infoWindow) {
  // Set default location to BCIT
  pos = { lat: 49.250481, lng: -123.001605 };
  map = new google.maps.Map(document.getElementById('map'), {
    center: pos,
    zoom: 15
  });

  // Display an InfoWindow at the map center
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Geolocation permissions denied. Using default location.' :
    'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
  currentInfoWindow = infoWindow;

  // Call on default pos
  getNearbyPlaces(pos);
}

// Search nearby locations of keyword: field
function getNearbyPlaces(position) {
  let request = {
    location: position,
    rankBy: google.maps.places.RankBy.DISTANCE,
    keyword: 'field'
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, nearbyCallback);
}

// Handle the results (up to 20) of the Nearby Search
function nearbyCallback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    createMarkers(results);
  }
}

// Set markers at the location of each place result
function createMarkers(places) {
  places.forEach(place => {
    let marker = new google.maps.Marker({
      position: place.geometry.location,
      map: map,
      title: place.name
    });


    // Adjust the map bounds to include marker location
    bounds.extend(place.geometry.location);
  });
  map.fitBounds(bounds);
}
