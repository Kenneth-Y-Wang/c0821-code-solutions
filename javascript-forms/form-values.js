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
