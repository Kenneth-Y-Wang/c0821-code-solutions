var model = true;
var $press = document.querySelector('.press');
var $no = document.querySelector('.no');
var $row = document.querySelector('.row');
var $overlay = document.querySelector('.overlay');

function callmodal(event) {
  model = !model;
  if (model === false) {
    $row.className = 'row';
    $overlay.className = ' overlay';

  } else {
    $row.className = 'row off';
    $overlay.className = ' overlay noshow';
  }
}

$press.addEventListener('click', callmodal);
$no.addEventListener('click', callmodal);
