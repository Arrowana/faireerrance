let map;
let imageO;
function initLeaflet() {
  console.log('start leaflet initialization');
  map = L.map('mapcontainer', {
    maxZoom: 0,
    minZoom: -4,
    crs: L.CRS.Simple
  });

  map.setView([img.height/2, img.width/2], -4);

  var imageUrl = mapImage;
  var imageBounds = [[0,0], [img.height,img.width]];

  imageO = L.imageOverlay(imageUrl, imageBounds);
  imageO.on('load', x => {
    console.log('done loading');
  });

  imageO.addTo(map);

  map.fitBounds(imageBounds);

  let rect = L.rectangle(L.latLngBounds([0, 0], [1000, 1000]), {stroke: false, fillOpacity: 0});
  rect.addTo(map);
  rect.addEventListener('click', x=> {console.log('rect clicked')});
}

function test(feature, layer) {
  layer.on('click', function(e) {
    console.log('clicked');
  });
}

let img = document.getElementById("mapimage");
img.onload = initLeaflet();
