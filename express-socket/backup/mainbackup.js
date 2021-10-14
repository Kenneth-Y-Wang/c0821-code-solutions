// const form = document.querySelector('form');
// const input = document.querySelector('input');
// const messageList = document.querySelector('ul');

const message = document.getElementById('message');
const feedback = document.querySelector('#feedback');
const handle = document.getElementById('handle');
const btn = document.getElementById('send');
const output = document.getElementById('output');
const $form = document.querySelector('.chatForm');
const $modal = document.querySelector('.login');
let user = '';
const $login = document.querySelector('.modal-holder');
const $main = document.querySelector('.main');

$modal.addEventListener('submit', function () {
  event.preventDefault();
  const name = $modal.elements.username.value;
  for (let i = 0; i < name.length; i++) {
    user += name[i];
  }
  socket.emit('login', user);
  // socket.on('user connected', function () {
  //   feedback.innerHTML = '<p><em>' + name + ' Connected! </em></p>';
  // });
  console.log(name);
  console.log(user);
  $login.className = 'modal-holder hidden';
  $main.className = 'main';

});

// console.log(time);
// console.log(typeof time);

const socket = io('/');
socket.on('connection');

$form.addEventListener('submit', function () {
  event.preventDefault();
  const date = String(new Date());
  let time = '';

  for (let i = 16; i < 24; i++) {
    time += date[i];
  }
  socket.emit('chat', {
    message: message.value,
    handle: user,
    time: time
  });
  message.value = '';
});

socket.on('chat', function (data) {
  feedback.innerHTML = '';
  output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '<em> (' + data.time + ')</em></p>';
  // output.scrollTop = output.scrollHeight;
});

message.addEventListener('keypress', function () {
  socket.emit('typing', user);
});

socket.on('typing', function (data) {
  feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});

socket.on('login', function (message) {
  feedback.innerHTML = '<p><em>' + message + ' Connected! </em></p>';
});
// socket.on('user connected', function () {
//   feedback.innerHTML = '<p><em>' + user + ' Connected! </em></p>';
// });

// function sendMessage(e) {
//   // prevent form submission refreshing page
//   e.preventDefault();
//   // send input value to server as type 'message'
//   socket.emit('message', input.value);
//   // reset input value
//   input.value = '';
// }

// form.addEventListener('submit', sendMessage);

// function addMessageToHTML(message) {
//   // create a new li element
//   const li = document.createElement('li');
//   // add message to the elements text
//   li.innerText = message;
//   // add to list of messages
//   messageList.append(li);
// }
// // watch for socket to emit a 'message'
// socket.on('message', addMessageToHTML);

// function alertUserConnected() {
//   addMessageToHTML('User connected');
// }
// // watch for socket to emit a 'user connected' event
// socket.on('user connected', alertUserConnected);
