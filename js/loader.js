Image.prototype.load = function(url){
  var thisImg = this;
  var xmlHTTP = new XMLHttpRequest();
  xmlHTTP.open('GET', url,true);
  xmlHTTP.responseType = 'arraybuffer';
  xmlHTTP.onload = function(e) {
    var blob = new Blob([this.response], { type: "image/jpeg" });
    thisImg.src = window.URL.createObjectURL(blob);
    console.log('done');
    console.log(xmlHTTP);
    initLeaflet();
  };
  xmlHTTP.onprogress = function(e) {
    thisImg.completedPercentage = parseInt((e.loaded / e.total) * 100);
    console.log(thisImg.completedPercentage);
  };
  xmlHTTP.onloadstart = function() {
      thisImg.completedPercentage = 0;
  };
  xmlHTTP.send();
};

Image.prototype.completedPercentage = 0;

var img = new Image();
img.load("images/traces.jpg");
document.body.appendChild(img);
