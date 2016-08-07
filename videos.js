let videoOverlays = document.querySelectorAll('.video-overlay');

videoOverlays = Array.from(videoOverlays);

videoOverlays.forEach(function(item) {
  item.onclick = e => {
    console.log('clicked');
    console.log(item);

    //Trigger autoplay
    let target = item.getAttribute('data-target');
    document.getElementById(target).src += '&autoplay=1';

    //Hide overlay element
    item.style.display = 'none';
  };
});

//Add youtube API

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player1;
let player2;
let player3;
function onYouTubeIframeAPIReady() {
  player1 = new YT.Player('first', {
    events: {
      'onReady': testStart,
      'onStateChange': onPlayerStateChange
    }
  });
  console.log('wadwad');

};

function testStart() {
  //player1.playVideo();
  player1.addEventListener('onStateChange', function(e) {
    console.log('State is:', e.data);
  });
}

function onPlayerStateChange(event) {
  console.log(event.data);
}
