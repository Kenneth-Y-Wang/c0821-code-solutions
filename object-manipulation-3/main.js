console.log('Lodash is loaded:', typeof _ !== 'undefined');
function setCard() {
  var cardDeck = [];
  var cardRank = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
  var cardSuit = ['clubs', 'diamonds', 'hearts', 'spades'];
  for (var i = 0; i < cardSuit.length; i++) {
    for (var j = 0; j < cardRank.length; j++) {
      var card = {};
      card.suit = cardSuit[i];
      card.rank = cardRank[j];
      cardDeck.push(card);
    }
  }
  return cardDeck;
}
var cardDeck = setCard();
for (var i = 0; i < cardDeck.length; i++) {
  if (cardDeck[i].rank === 'ace') {
    cardDeck[i].value = 11;
  } else if (cardDeck[i].rank === 'jack' || cardDeck[i].rank === 'queen' || cardDeck[i].rank === 'king') {
    cardDeck[i].value = 10;
  } else {
    cardDeck[i].value = parseInt(cardDeck[i].rank);
  }
}
var newCard = _.shuffle(cardDeck);
function cardGame(array, number) {
  var player = [];
  var points = [];
  for (var i = 0; i < array.length; i++) {
    var each = {};
    each.playname = array[i];
    each.card = newCard.splice(0, number);
    player.push(each);
  }
  for (var j = 0; j < player.length; j++) {
    player[j].totalPoint = 0;
    for (var a = 0; a < player[j].card.length; a++) {
      player[j].totalPoint += player[j].card[a].value;
    }
    points.push(player[j].totalPoint);
  }
  var winner = {};
  for (var b = 0; b < player.length; b++) {
    if (player[b].totalPoint === Math.max(...points)) {
      winner.name = player[b].playname;
      winner.points = player[b].totalPoint;
    }
  }
  console.log('the winner is ' + winner.name + ', and the winning point is ' + winner.points + '!');
}
cardGame(['a', 'b', 'c', 'd'], 2);
