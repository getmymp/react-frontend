import React from 'react';

var SingleRidingMap = React.createClass({

  componentDidMount: function(){
    var riding = this.props.mp.riding_id
        mapboxgl.accessToken = 'pk.eyJ1IjoiYnJpYW5iYW5jcm9mdCIsImEiOiJsVGVnMXFzIn0.7ldhVh3Ppsgv4lCYs65UdA';
    var map = new mapboxgl.Map({
        container: 'map',
        attributionControl: false,
        style: 'mapbox://styles/brianbancroft/cio5y4bf10001afnmjjdelbzf',
        zoom: 2,
        center: [-91.23046875,45.460130637921]
    });

    map.on('style.load', function(){
      $.getJSON('//findmymp.herokuapp.com/riding/' + riding, function(response){
        var boundingBox = getBoundingBox(response);
        var ridingBoundary = new mapboxgl.GeoJSONSource({ data: response } );

        map.addSource('riding', ridingBoundary);
        map.addLayer({
          'id': 'lib-riding',
          'type': 'fill',
          'source': 'riding',
          'paint': {
        'fill-color': '#ed2e38',
            'fill-opacity': 0.8
          },
          filter: ['==', 'partyName', 'Liberal']
        },'water');
        map.addLayer({
          'id': 'con-riding',
          'type': 'fill',
          'source': 'riding',
          'paint': {
            'fill-color': '#002395',
            'fill-opacity': 0.8
          },
          filter: ['==', 'partyName', 'Conservative']
        },'water');
        map.addLayer({
          'id': 'ndp-riding',
          'type': 'fill',
          'source': 'riding',
          'paint': {
            'fill-color': '#FF5800',
            'fill-opacity': 0.8
          },
          filter: ['==', 'partyName', 'NDP']
        },'water');
        map.addLayer({
          'id': 'green-riding',
          'type': 'fill',
          'source': 'riding',
          'paint': {
            'fill-color': '#427730',
            'fill-opacity': 0.8
          },
          filter: ['==', 'partyName', 'Green Party']
        },'water');
        map.addLayer({
          'id': 'bloc-riding',
          'type': 'fill',
          'source': 'riding',
          'paint': {
            'fill-color': '#0088CE',
            'fill-opacity': 0.8
          },
          filter: ['==', 'partyName', 'Bloc Quebecois']
        },'water');

        map.fitBounds([[boundingBox.xMin, boundingBox.yMin], [boundingBox.xMax, boundingBox.yMax]]);
      })



    });

    function getBoundingBox(data) {
      var bounds = {}, coords, point, latitude, longitude;
      for (var i = 0; i < data.geometry.coordinates.length; i++) {
        var polygons = data.geometry.coordinates[i];

        for (var j = 0; j < polygons.length; j++) {
          coords = polygons[j];

          for (var k = 0; k < coords.length; k++) {
            longitude = coords[k][0];
            latitude = coords[k][1];
            bounds.xMin = bounds.xMin < longitude ? bounds.xMin : longitude;
            bounds.xMax = bounds.xMax > longitude ? bounds.xMax : longitude;
            bounds.yMin = bounds.yMin < latitude ? bounds.yMin : latitude;
            bounds.yMax = bounds.yMax > latitude ? bounds.yMax : latitude;
          }
        }

        // bounds.xMin -= (Math.abs(bounds.xMin-bounds.xMax) / 5.5);
        // bounds.xMax += (Math.abs(bounds.xMin-bounds.xMax) / 5.5);
        // bounds.yMin -= (Math.abs(bounds.yMin-bounds.yMax) / 5.5);
        // bounds.yMax += (Math.abs(bounds.yMin-bounds.yMax) / 5.5);

      }

      return bounds;
    }

    map.scrollZoom.disable();
    map.dragPan.disable();

  },

  render: function() {
    return (

        <div id='map' className="single-map"></div>

    )
  }
});



export default SingleRidingMap;
