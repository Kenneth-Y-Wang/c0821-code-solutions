var count = 0;
var $light = document.querySelector('.lightBulb');
var $container = document.querySelector('.container');

$light.addEventListener('click', function () {
  count++;
  if (count % 2 === 1) {
    $light.className = 'lightBulb switch-off';
    $container.className = 'container off';
  } else {
    $light.className = 'lightBulb switch-on';
    $container.className = 'container on';
  }
});
