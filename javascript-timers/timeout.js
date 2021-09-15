var $h1 = document.querySelector('h1');
function changeWord() {
  $h1.textContent = 'Hello There';
}

var timeOut = setTimeout(changeWord, 2000);

document.addEventListener('DOMContentLoaded', timeOut);
