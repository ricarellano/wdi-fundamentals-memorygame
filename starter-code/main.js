// console.log("JS file is connected to HTML! Woo!")
// var cardOne = "queen";
// var cardTwo = "king";
// var cardThree = "jack";
// var cardFour = "ace";
var cards = ['queen', 'queen', 'king', 'king'];
// if (cardTwo === cardFour) {
//    alert("Sorry, try again.");
// } else {
// 	alert("You found a match!");
// }
var gameBoard = document.getElementById('game-board');

var createCards = function(){
  for (var i = 0; i < cards.length; i++) {
  	var cardElement = document.createElement('div');
  	    cardElement.className = 'card';
  	    gameBoard.appendChild(cardElement);
  }
}

createCards();