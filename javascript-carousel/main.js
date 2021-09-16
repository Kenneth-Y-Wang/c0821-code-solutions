var $arrowLeft = document.querySelector('.arrowLeft');
var $arrowRight = document.querySelector('.arrowRight');
var $switch = document.querySelectorAll('.switch');
var $img = document.querySelectorAll('img');
var $buttonHolder = document.querySelector('.buttonHolder');
var timeId = null;
var count = 0;
var $form = document.querySelector('form');

$form.addEventListener('submit', function () {
  event.preventDefault();

  for (var i = 0; i < $img.length; i++) {
    if (String($form.elements.picNumber.value) === $img[i].getAttribute('data-view')) {
      $img[i].setAttribute('src', $form.elements.url.value);
    }
  }
  $form.reset();
});

function viewChange() {
  for (var a = 0; a < $img.length; a++) {
    if (String(count) === $img[a].getAttribute('data-view')) {
      $img[a].className = '';
      for (var i = 0; i < $switch.length; i++) {
        if ($switch[i].getAttribute('data-view') === $img[a].getAttribute('data-view')) {
          $switch[i].className = 'switch click';
        } else {
          $switch[i].className = 'switch';
        }
      }
    } else {
      $img[a].className = 'hidden';
    }
  }
}

function picChange(event) {
  count++;
  viewChange();
  if (count === 5) {
    count = 0;
  }
}

function picChangeBack(event) {
  if (count <= 0) {
    return;
  } else if (count === 1) {
    count = 6;
  }
  --count;
  viewChange();
}

function clearInt() {
  clearInterval(timeId);
  timeId = setInterval(picChange, 3000);
}

timeId = setInterval(picChange, 3000);

$arrowRight.addEventListener('click', function () {
  picChange();
  clearInt();
});

$arrowLeft.addEventListener('click', function () {
  picChangeBack();
  clearInt();
});

function dotSwitch(event) {

  if (event.target.matches('.switch') === false) {
    return;
  }

  for (var a = 0; a < $switch.length; a++) {
    if ($switch[a] === event.target) {
      $switch[a].className = ' switch click';
    } else {
      $switch[a].className = 'switch';
    }
  }
  for (var i = 0; i < $img.length; i++) {
    if (event.target.getAttribute('data-view') === $img[i].getAttribute('data-view')) {
      $img[i].className = '';
      count = event.target.getAttribute('data-view');
    } else {
      $img[i].className = 'hidden';

    }
  }
}

$buttonHolder.addEventListener('click', function () {
  dotSwitch(event);
  clearInt();
});
