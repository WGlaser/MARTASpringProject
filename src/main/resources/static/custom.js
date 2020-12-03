
	


var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        //center: { lat: parseFloat(busLocations[0].LATITUDE), lng: parseFloat(busLocations[0].LONGITUDE) },
		center: {lat: parseFloat(personLoc.lat), lng: parseFloat(personLoc.lng)},
		//center: {lat: 33.7528747,lng: -84.3900077},
        zoom: 15,
        scrollwheel: false
		
    });
	
	var person = new google.maps.Marker({
            position: {lat: parseFloat(personLoc.lat), lng: parseFloat(personLoc.lng)},
            map: map,
		
        });

	
	var icon = {
    url:  "https://image.freepik.com/free-icon/bus_318-2038.jpg", // url
    scaledSize: new google.maps.Size(25, 25), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
};
	
	
    for (i=0; i<busLocations.length; i++){
        var marker = new google.maps.Marker({
            position: { lat: parseFloat(busLocations[i].LATITUDE), lng: parseFloat(busLocations[i].LONGITUDE) },
            map: map,icon:icon,
        });
  		addInfoWindow(marker, "BUS#:"+ busLocations[i].VEHICLE);
    }
}

function addInfoWindow(marker, content) {
    var infoWindow = new google.maps.InfoWindow({
        content: content
    });

    google.maps.event.addListener(marker, 'click', function () {
        infoWindow.open(map, marker);
    });
}


