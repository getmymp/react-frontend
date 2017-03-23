import React from 'react';

class MpMapSearch extends React.Component{
  constructor(props) {
    super(props)
    window.mapClick = this._selectMp
  }

  _selectMp = (mpId) => {
    this.props.onChange(mpId)
  };


  componentDidMount(){

      mapboxgl.accessToken = 'pk.eyJ1IjoiYnJpYW5iYW5jcm9mdCIsImEiOiJsVGVnMXFzIn0.7ldhVh3Ppsgv4lCYs65UdA';
        var map = new mapboxgl.Map({
            container: 'map',

            maxBounds: [
                [-141.8521455, 41.68392799015035], // Southwest coordinates
                [-52.0792153, 83.7630545]  // Northeast coordinates
            ],
            style: 'mapbox://styles/brianbancroft/cio5y4bf10001afnmjjdelbzf',
            zoom: 6,
            center: [-73.8574963,46.363789],
        });

        map.on('load', function() {
            map.addSource('ridings-canada', {
                type: 'vector',
                url: 'mapbox://brianbancroft.1sf4w5x6'

            },'water');
            map.addLayer({
              'id': 'lib-riding',
              'type': 'fill',
              "source": "ridings-canada",
              "source-layer": "electboundaries1",
              'paint': {
                'fill-color': '#ed2e38',
                'fill-opacity': 0.8,
                'fill-outline-color': '#000'
              },
              filter: ['==', 'Party', 'Liberal']
            },'water');
            map.addLayer({
                "id": "ridings-canada",
                "type": "line",
                "source": "ridings-canada",
                "source-layer": "electboundaries1",
                'paint': {
                  "line-color": "#330033",
                  "line-width": 3,
                  'fill-outline-color': '#000'
                }

            },'water');
            map.addLayer({
              'id': 'con-riding',
              'type': 'fill',
              "source": "ridings-canada",
              "source-layer": "electboundaries1",
              'paint': {
                'fill-color': '#002395',
                'fill-opacity': 0.8,
                'fill-outline-color': '#000'
              },
              filter: ['==', 'Party', 'Conservative']
            },'water');
            map.addLayer({
              'id': 'ndp-riding',
              'type': 'fill',
              "source": "ridings-canada",
              "source-layer": "electboundaries1",
              'paint': {
                'fill-color': '#FF5800',
                'fill-opacity': 0.8,
                'fill-outline-color': '#000'
              },
              filter: ['==', 'Party', 'NDP']
            },'water');
            map.addLayer({
              'id': 'green-riding',
              'type': 'fill',
              "source": "ridings-canada",
              "source-layer": "electboundaries1",
              'paint': {
                'fill-color': '#427730',
                'fill-opacity': 0.8,
                'fill-outline-color': '#000'
              },
              filter: ['==', 'Party', 'Green Party']
            });
            map.addLayer({
              'id': 'bloc-riding',
              'type': 'fill',
              "source": "ridings-canada",
              "source-layer": "electboundaries1",
              'paint': {
                'fill-color': '#0088CE',
                'fill-opacity': 0.8,
                'fill-outline-color': '#000'
              },
              filter: ['==', 'Party', 'Bloc Quebecois']
            },'water');



        });


        map.on('click', function(e) {
            var features = map.queryRenderedFeatures(e.point, {
                layers: ['lib-riding','con-riding','ndp-riding','bloc-riding','green-riding']

            });

            if (!features.length) {
                return;
            }

            var feature = features[0];
            console.log("constit id: " + feature.properties.constit_id);
            var mpId = feature.properties.MP_ID
            console.log("mp id: " + mpId);

            // Populate the popup and set its coordinates
            // based on the feature found.

            var popup = new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML("<center>" + "<br>" + "<h2>" + feature.properties.ENNAME + "</h2>" + "</center><br><button onClick=window.mapClick(" + mpId + ") >GET MY MP</button>")
                .addTo(map);
        });

        map.dragRotate.disable();
        map.touchZoomRotate.disableRotation();

  };

  render() {
    return (
      <div>
        <div id='map' className="big-map"></div>
      </div>
    )
  }
}



export default MpMapSearch;
