function initMap () {
    const threearmszone = { lat:9.0733503, lng:7.5064504 };
    const map = new google.maps.Map(document.getElementById('map'),
    {
        zoom: 4,
        center: threearmszone,
    });
    const marker = new goole.maps.Marker(
        {
            position: threearmszone,
            map: map,
        }
    );

}