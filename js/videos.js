//Get all video overlays
let videoOverlays = document.querySelectorAll('.video-overlay');

videoOverlays = Array.from(videoOverlays);

videoOverlays.forEach(function(item) {
  item.onclick = e => {
    console.log('clicked');
    console.log(item);

    let video = item.parentNode.querySelector('iframe');

    var player = new Vimeo.Player(video);
    player.play();

    videoOverlays.forEach(function(i) {
      //Make all video overlay block display
      i.style.display = 'block';
    });
    
    //Hide overlay element
    item.style.display = 'none';
  };
});

//Add youtube API

var tag = document.createElement('script');

function testStart() {
  var iframe = document.querySelector('iframe');
  var player= new Vimeo.Player(iframe);

  player.play();
}
