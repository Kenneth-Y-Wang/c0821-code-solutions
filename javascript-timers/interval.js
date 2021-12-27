// var $text = document.querySelector('h1');
// var number = 4;

// function countDown() {

//   number--;
//   $text.textContent = number;

//   if (number === 0) {
//     $text.textContent = '~Earth Beeeelooowww Us~';
//     clearCountDown();
//   }
// }
// function clearCountDown() {

//   clearInterval(intervalId);

// }

// var intervalId = setInterval(countDown, 1000);

const $text = document.querySelector('h1');
let number = 4;

const countDown = () => {
  number--;
  $text.textContent = number;

  if (number === 0) {
    $text.textContent = '~Earth Beeeelooowww Us~';
    clearCountDown();
  }
};

const clearCountDown = () => {
  clearInterval(intervalId);
};

const intervalId = setInterval(countDown, 1000);
