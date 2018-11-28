

//------------------- FLATIRON RESTAURANT MAP --------------------

function initMap() {
    
    var gramercyTavern = {
        info: '<strong>Gramercy Tavern</strong><br>\
                    42 E 20th St, New York, NY 10003<br>\
                    <a href="https://www.gramercytavern.com/">Website</a>',
        lat: 40.738380,
        long: -73.988430
    };

    var dailyprovisions = {
        info: '<strong>Daily Provisions</strong><br>\
                    103 E 19th St, New York, NY 10003<br>\
                    <a href="https://www.cosmenyc.com/">Website</a>',
        lat: 40.737605,
        long: -73.987578
    };

    var tacombi = {
        info: '<strong>Tacombi</strong><br>\r\
                    30 W 24th St, New York, NY 10010<br>\
                    <a href="http://www.petestavern.com/">Website</a>',
        lat: 40.742603,
        long: -73.990270
    };

    var thaivilla = {
        info: '<strong>Thai Villa</strong><br>\r\
                    5 E 19th St, New York, NY 10003<br>\
                    <a href="http://www.petestavern.com/">Website</a>',
        lat: 40.738919,
        long: -73.990707
    };

    var studio = {
        info: '<strong>Studio</strong><br>\r\
                    23 Lexington Ave, New York, NY 10010<br>\
                    <a href="http://www.petestavern.com/">Website</a>',
        lat: 40.739590,
        long: -73.984497
    };

    var abcv = {
        info: '<strong>ABCV</strong><br>\r\
                    38 E 19th St, New York, NY 10003<br>\
                    <a href="http://www.petestavern.com/">Website</a>',
        lat: 40.738005,
        long: -73.989251
    };

    var locations = [
      [gramercyTavern.info, gramercyTavern.lat, gramercyTavern.long, 0],
      [dailyprovisions.info, dailyprovisions.lat, dailyprovisions.long, 1],
      [tacombi.info, tacombi.lat, tacombi.long, 2],
      [thaivilla.info, thaivilla.lat, thaivilla.long, 3],
      [studio.info, studio.lat, studio.long, 4],
      [abcv.info, abcv.lat, abcv.long, 5],
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: new google.maps.LatLng(40.738380, -73.988430),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow({});

    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}

