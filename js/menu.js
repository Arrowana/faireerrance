document.addEventListener('DOMContentLoaded', function(e) {
  let path = window.location.pathname.replace('/', '');

  console.log(path);
  let selectedLink = document.querySelector('header nav a[href="' + path + '"]');

  console.log(selectedLink);
  selectedLink.className += 'selected';
});
