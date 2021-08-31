var model = true;
var $press = document.querySelector('.press');
var $no = document.querySelector('.no');
var $row = document.querySelector('.row');
var $overlay = document.querySelector('.overlay');

$press.addEventListener('click', function () {
  model = !model;
  if (model === false) {
    $row.className = 'row';
    $overlay.className = ' overlay';

  } else {
    $row.className = 'row off';
    $overlay.className = ' overlay noshow';
  }
});

$no.addEventListener('click', function () {
  model = !model;
  if (model === false) {
    $row.className = 'row';
    $overlay.className = ' overlay';

  } else {
    $row.className = 'row off';
    $overlay.className = ' overlay noshow';
  }
}
);
