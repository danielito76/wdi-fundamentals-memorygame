//console.log("Up and running!");


var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];


function createBoard (){
	for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src', 'images/back.png');
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener("click", flipCard);
  	document.getElementById("game-board").appendChild(cardElement);
	}
}




function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
} 	else {
  alert("Sorry, try again.");
}
}


function flipCard() {
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank);
	checkForMatch();
	//console.log(cardsInPlay.length);
	//console.log(cards[cardId].cardImage);
	//console.log(cards[cardId].suit);
}



	createBoard();



	//from here script for second 3D flipping

function myFunction() {
  var x = document.getElementsByClassName("card");
  var i;
  for (i = 0; i < x.length; i++) {
  x[i].classList.toggle('is-flipped');
  }
}





