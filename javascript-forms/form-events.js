function handleFocus(event) {
  console.log('focus event was fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event was fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name', event.target.name);
  console.log('event.target.value', event.target.value);
}

var $name = document.querySelector('#user-name');
var $email = document.querySelector('#user-email');
var $message = document.querySelector('#user-message');

$name.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);

var $contactform = document.querySelector('#contact-form');
$contactform.addEventListener('submit', function () {
  event.preventDefault();
  var messagedata = {};
  messagedata.name = $contactform.elements.name.value;
  messagedata.email = $contactform.elements.email.value;
  messagedata.message = $contactform.elements.message.value;
  console.log('messagedata', messagedata);
  $contactform.reset();
});
