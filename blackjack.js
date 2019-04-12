var deck = [];
var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

document.querySelector("#shuffle").addEventListener("click",function(){
    shuffle()
})

function createDeck(){
	var deck = [];
	for(var i = 0; i < suits.length; i++){
		for(var x = 0; x < values.length; x++){
			var card = {Value: values[x], Suit: suits[i]};
            deck.push(card);
		}
    }
    return deck;
}
function shuffle(){
	// switch the values of two random cards
	for (var i = 0; i < 1000; i++){
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
    }
    showDeck();
}
function showDeck(){
      document.getElementById("deck").innerHTML = "";

	for(var i = 0; i < deck.length; i++){
		var card = document.createElement("div");
		var value = document.createElement("div");
		var suit = document.createElement("div");
		card.className = "card";
		value.className = "value";
		suit.className = "suit " + deck[i].Suit;

		value.innerHTML = deck[i].Value;
		card.appendChild(value);
		card.appendChild(suit);

		document.getElementById("deck").appendChild(card);
	}
}
function load(){
	deck = createDeck();
	// shuffle();
	// showDeck();
}
load()
// window.onload = load;

// class Deck {
//     constructor() {
//       this.deck = [];
  
//       const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
//       const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  
//       for (let suit in suits) {
//         for (let value in values) {
//           this.deck.push(`${values[value]} of ${suits[suit]}`);
//         }
//       }
//     }
//   }
  
//   const deck1 = new Deck();
//   console.log(deck1.deck);