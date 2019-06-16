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


function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}


function flipCard(cardId) {
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	/*
	var cardOne = cards[0];
	var cardTwo = cards[2];
	cardsInPlay.push(cardOne);
	cardsInPlay.push(cardTwo);

	console.log("User flipped " + cardsInPlay);


	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("You did not find any match!(as expected)");
	}
	*/
}
	flipCard(0);
	flipCard(2);

	checkForMatch();
	console.log(cardsInPlay.length);



/*
document.addEventListener('DOMContentLoaded', fn, false);

function fn() {

	console.log("Ready")

	var main = document.getElementById("game-board").appendChild("<p>Hello</p>")

	console.log(main)

	// main.appendChild("<p>Hello</p>")
}



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
	 var cardElement = ""
	
	}


	document.addEventListener("click", function(){

	});
};



function checkForMatch (){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}


function flipCard (){
    // Method
    this.getAttribute()
        console.log("inside get getAttribute");
}

// var cardElement = document.createElement('img');
// cardElement.setAttribute('attributeName', 'attributeValue');
// setAttribute('data-id');


// //invoke createBoard function
// cards.createBoard();


// console.log("User flipped " + cards[cardId].rank);
// cardsInPlay.push(cards[cardId].rank);

// console.log(cardImage)
// console.log(suit)

// createBoard ();

// }
*/




