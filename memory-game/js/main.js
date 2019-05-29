//console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];


var cardOne = cards[0];
var cardTwo = cards[2];
var cardsInPlay =[];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardsInPlay[0]);
console.log("User flipped " + cardsInPlay[1]);

if ((cardsInPlay.length === 2) && (cardsInPlay[0] === cardsInPlay[1])) {
alert("You found a match");
}
else {
	alert("Sorry, try again");
}