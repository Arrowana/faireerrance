let progress = document.getElementById('progress');

progress.style.width = '0%';

//Fake increment of the progress bar to test
let fakeProgress = setInterval(incrementProgress, 800);

function incrementProgress() {
  console.log(progress.style.width);
  let previousWidth = parseFloat(progress.style.width.split('%')[0]);
  progress.style.width = previousWidth + 10 + '%';

  if(previousWidth >= 90) {
    clearInterval(fakeProgress);
  }
  console.log(previousWidth);
}
