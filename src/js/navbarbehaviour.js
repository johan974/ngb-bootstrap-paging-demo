var hamburgerButton = document.querySelector('#menu-btn');
var menu = document.querySelector('.menu');

menu.onclick = function() {
  if (hamburgerButton.checked) {
    hamburgerButton.click();
  }
}
