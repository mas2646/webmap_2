'use strict'

console.log('Loaded map.js')

mapboxgl.accessToken = 'pk.eyJ1IjoibWFzMjY0NiIsImEiOiJjbW9nNnM2NHAwMXF4MnJxOTM5YnBnZHkyIn0.3I0j_U-LV0t8X4C4KPEkrw'

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [-73.93324, 40.80877],
    zoom: 14
});

var blocks_url = "./data/blocks_joined_trees_um.geojson"

map.on('load',function(){
  // define a 'source' for your polygons dataset
  map.addSource('blocks_data',{
    'type':'geojson',
    'data': blocks_url,
  });
  // add a new layer with your polygons
  map.addLayer({
    'id':'blocks',
    'type':'fill',
    'source':'blocks_data',
    'paint':{
      'fill-color':'#ffffff',
      'fill-outline-color':'#000000',
      'fill-opacity': 0.5
    }
  })
});

map.on('load',function(){

var trees_url = "./data/2015_Street_Tree_Census_subset_um.geojson"

   // define a 'source' for your point dataset
    map.addSource('trees_data',{
      'type':'geojson',
      'data': trees_url
    });
    // add a new layer with your points
    map.addLayer({
      'id':'trees',
      'type':'circle',
      'source':'trees_data',
      'paint':{
        'circle-color': '#349f27',
        'circle-opacity':0.7,
        'circle-radius': ['/', ['get', 'tree_dbh'], 5],
      },
    })
    });

     