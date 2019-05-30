//console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay =[];


function flipCard(cardId) {
	cardsInPlay.push(cardId);
	console.log("User flipped " + cardId)
};

function checkForMatch () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match");
	}
	else {
		alert("Sorry, try again");
	}
};

flipCard(cards[3]);
