const $chatForm = document.querySelector('#chat-form');
const $chatMessages = document.querySelector('.chat-messages');
const $roomName = document.querySelector('#room-name');
const $userList = document.querySelector('#users');
const $messageInput = document.querySelector('#msg');
const $statusBar = document.querySelector('.typing-status');

// Get username and room from URL
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true // ignore all these stupid characters
});

const socket = io();

// Join chatroom and send info to backend
socket.emit('joinRoom', { username, room });

// Get room and users name when user login
socket.on('roomUsers', ({ room, users }) => {
  outputRoomName(room);
  outputUsers(users);
});

// Message from server
socket.on('message', message => {
  // console.log(message);
  outputMessage(message);
  $statusBar.textContent = '';

  // Scroll down
  $chatMessages.scrollTop = $chatMessages.scrollHeight;
});

// Message submit and send to the server
$chatForm.addEventListener('submit', event => {
  event.preventDefault();

  // Get message text
  let msg = event.target.elements.msg.value;

  msg = msg.trim();

  if (!msg) {
    return false;
  }

  // Emit message to server
  socket.emit('chatMessage', msg);

  // Clear input
  event.target.elements.msg.value = '';
  event.target.elements.msg.focus(); // focus on the empty input
});

// typing status

$messageInput.addEventListener('keypress', () => {
  socket.emit('typing');
});

socket.on('typing', message => {
  $statusBar.textContent = `${message.username}${message.text}`;
});

// render message
function outputMessage(message) {
  const $div = document.createElement('div');
  $div.setAttribute('class', 'message');

  const $p = document.createElement('p');
  $p.setAttribute('class', 'sub');
  $p.textContent = message.username;
  $p.innerHTML += `<span> ${message.time}</span>`;
  $div.appendChild($p);

  const $text = document.createElement('p');
  $text.setAttribute('class', 'text');
  $text.textContent = message.text;
  $div.appendChild($text);
  document.querySelector('.chat-messages').appendChild($div);
}

// renderRoom
function outputRoomName(room) {
  $roomName.textContent = room;
}

// renderUser
function outputUsers(users) {
  $userList.innerHTML = '';
  users.forEach(user => {
    const $li = document.createElement('li');
    $li.textContent = user.username;
    $userList.appendChild($li);
  });
}
// function outputUsers(users){
//   userList.innerHTML=`
//   ${users.map(user=> `<li>${user.username}</li>`).join('')}
//   `;
// }

// Prompt the user before leave chat room
document.getElementById('leave-btn').addEventListener('click', () => {
  const leaveRoom = confirm('Are you sure you want to leave the chatroom?');
  if (leaveRoom) {
    window.location = '../index.html';
  } else {
  }
});
