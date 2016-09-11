//Get all video overlays
let videoOverlays = document.querySelectorAll('.video-overlay');

videoOverlays = Array.from(videoOverlays);

videoOverlays.forEach(function(item) {
  item.onclick = e => {
    console.log('clicked');
    console.log(item);

    openPlayer(item.getAttribute('data-video'));
  };
});

document.getElementById('reduce-button').addEventListener('click', closePlayer);

document.onkeydown = function(e) {
  console.log(e);
  if(e.key == 'Escape') {
    closePlayer();
  }
};

function closePlayer() {
    document.getElementById('video-player').style.display = 'none';
    document.getElementById('global-overlay').style.display = 'none';

    //Stop vimeo
    let iframe = document.getElementById('iframe-player'); 
    var player = new Vimeo.Player(iframe);
    player.pause();
}

function openPlayer(videoId) {
    document.getElementById('video-player').style.display = 'block';
    document.getElementById('global-overlay').style.display = 'block';

    //Load video
    let iframe = document.getElementById('iframe-player'); 
    var player = new Vimeo.Player(iframe);
    console.log('Load video id:' + videoId);
    player.loadVideo(videoId);
}

function videoAction(item) {
    videoAction(item);
    //Start video
    let video = item.parentNode.querySelector('iframe');
    var player = new Vimeo.Player(video);
    player.play();

    videoOverlays.forEach(function(i) {
      //Make all video overlay block display
      i.style.display = 'block';
    });
    
    //Hide overlay element
    item.style.display = 'none';
}

//Add youtube API

var tag = document.createElement('script');

function testStart() {
  var iframe = document.querySelector('iframe');
  var player= new Vimeo.Player(iframe);

  player.play();
}

      '<iframe src="https://player.vimeo.com/video/179430733?byline=0&portrait=0&title=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'

