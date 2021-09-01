
// use the group selector to select all span element with letter class
// with the NodeList(a array with index)
// set a default value of 0, and everytime if the key in value === current element's textContent
// then value++, meantime, since the value increased by 1, so the current element(value-1)'s classname change to 'right' class
// the element next to the checked element, class changes to standby
// with a default value of 0 set for num, use a second function to check the current keyin value
// if the keyin value not strictly equals to the current element textcontent, then change the current element class to 'wrong standby'
// if the keyin value matches, then num increase by 1.

var $spam = document.querySelectorAll('span.letter');
var $message = document.querySelector('.message');
var $score = document.querySelector('.score');
var $yes = document.querySelector('.yes');
// var $no = document.querySelector('.no');

var value = 0;
var count = 0;
var num = 0;

document.addEventListener('keydown', function () {
  count++;
  if (event.key === $spam[value].textContent) {
    value++;
  }

  $spam[value - 1].className = 'letter right';
  $spam[value].className = 'letter standby';

  if (value === 19) {
    $spam[value].className = 'letter';

  }

  if (value > 0 && value < 5) {
    $message.textContent = 'You can do it!';
    $message.className = ' message mild';
  } else if (value >= 5 && value < 12) {
    $message.textContent = 'Not too bad!';
    $message.className = ' message good';
  } else if (value >= 12 && value < 19) {
    $message.textContent = 'You are almost there!';
    $message.className = ' message better';
  } else if (value === 19) {
    $message.textContent = 'Wow, you made it!';
    $message.className = ' message finish';
    $score.className = 'score';
    $score.textContent = 'Your accuracy: ' + ((value / count) * 100).toFixed(2) + '%';

  }
}
);

document.addEventListener('keydown', function () {
  if (event.key !== $spam[num].textContent) {
    $spam[value].className = ' letter wrong standby';
  } else {
    num++;
  }
});

$yes.addEventListener('click', function () {
  value = 0;
  count = 0;
  $spam[0].className = 'letter standby';
});
