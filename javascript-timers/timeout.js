var $h1 = document.querySelector('h1');
// function changeWord() {
//   $h1.textContent = 'Hello There';
// }

const changeWord = () => {
  $h1.textContent = 'Hello There';
};
setTimeout(changeWord, 2000);
