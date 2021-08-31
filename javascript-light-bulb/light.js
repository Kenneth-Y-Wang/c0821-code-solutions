var trigger = true;
var $light = document.querySelector('.lightBulb');
var $container = document.querySelector('.container');

$light.addEventListener('click', function () {
  trigger = !trigger;
  if (trigger === false) {
    $light.className = 'lightBulb switch-off';
    $container.className = 'container off';
  } else {
    $light.className = 'lightBulb switch-on';
    $container.className = 'container on';
  }
});
