//= require jquery
//= require bootstrap-sprockets
//= require_tree .

// Maps

var myLatlng = new google.maps.LatLng(48.8655909, 2.378983);

var myOptions = {
  zoom: 16,
  center: myLatlng,
  scrollwheel: false,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  styles: [
    {
      "featureType": "landscape.natural",
      "elementType": "geometry.fill",
      "stylers": [
        { "visibility": "on" },
        { "color": "#e0efef" }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry.fill",
      "stylers": [
        { "visibility": "on" },
        { "hue": "#1900ff" },
        { "color": "#c0e8e8" }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        { "lightness": 100 },
        { "visibility": "simplified" }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [
        { "visibility": "off" }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        { "visibility": "on" },
        { "lightness": 700 }
      ]
    },
    {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
        { "color": "#7dcdcd" }
      ]
    }
  ]
};

var map = new google.maps.Map(document.getElementById('map'), myOptions);
var marker = new google.maps.Marker({
  position: myLatlng,
  map: map,
  title: "You are here!"
});


// Login
// var loginBtn = $(".navbar-wagon-button");
// var banner = $(".banner-image");
// loginBtn.click(function() {
//   $( ".banner-content, .login-form" ).toggle();
// });
