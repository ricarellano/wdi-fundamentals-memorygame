// console.log("JS file is connected to HTML! Woo!")
// var cardOne = "queen";
// var cardTwo = "king";
// var cardThree = "jack";
// var cardFour = "ace";
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var resetButton = document.getElementById("reset");
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
  	    cardElement.setAttribute('data-card', cards[i]);
  	    cardElement.addEventListener('click', isTwoCards)
  	    
  	    
  }
}

var isMatch = function(){
 if (cards[0] === cards[1]) {
    alert("You have a match!");
  } else {
    alert("Sorry, try again.");

  }
}


var isTwoCards = function(){
	cardsInPlay.push(this.getAttribute('data-card'));

	if (this.getAttribute('data-card') === 'king'){
		this.innerHTML = "<img src='my_king.png' alt='King of Spades' />";;
	}else {
		this.innerHTML = "<img src='my_queen.png' alt='queen' />";
	}
	


	if(cardsInPlay.length === 2){
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}


	
	

createCards();

	





