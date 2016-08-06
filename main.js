let body = document.querySelector('body');
let section = document.querySelector('section');
let imgs = document.querySelectorAll('img');
imgs = Array.from(imgs);

var clicked = false;

//Scroll window to be on top of image target
function scrollOnImg(target) {
  const elementRect = target.getBoundingClientRect();
  console.log(elementRect);

  const absoluteElementTop = elementRect.top + 
    elementRect.height/2 + window.pageYOffset;
  const absoluteElementLeft = elementRect.left + 
    elementRect.width/2 + window.pageXOffset;
  console.log(absoluteElementLeft);

  const goalX = absoluteElementLeft - (window.innerWidth/2);
  const goalY = absoluteElementTop - (window.innerHeight/2);

  window.scrollTo(goalX, goalY);
  console.log('done');
}

imgs.forEach(function dothis(item) {
  console.log(item);

  item.onclick = e => {
    console.log(e);

    if(!clicked) { 

      section.style.transform = "scale(2)";
      section.addEventListener('transitionend', scrollOnImg(item));

      clicked = true;
    }
    else {
      section.style.transform = "";
      clicked = false;
    }
  }
});


let x;
let y;

function mouseDown(e) {
  x = imgs[0].offsetLeft;
  y = imgs[0].offsetTop;
}

function dragMoveListener(e) {
    console.log(e);
    const dx = e.clientX - x;
    const dy = e.clientY - y;

    imgs[0].style.transform = 'translate('+ dx + 'px,'+
      dy+'px)';
}

imgs[0].addEventListener('drag', dragMoveListener);
imgs[0].addEventListener('mousedown', mouseDown);
