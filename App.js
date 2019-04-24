let deck = new Deck();
deck.getNewDeckShuffled();

let stack = 1500;
let player1 = new Player("Yoel", stack);
let player2 = new Player("Nathan", stack);
let player3 = new Player("Willy", stack);


player1.addCard(deck.getAndRemove());
player2.addCard(deck.getAndRemove());
player3.addCard(deck.getAndRemove());
player1.addCard(deck.getAndRemove());
player2.addCard(deck.getAndRemove());
player3.addCard(deck.getAndRemove());


console.log(deck.getActualDeck());
console.log(player1.getCards());
console.log(player2.getCards());
console.log(player3.getCards());
let game = new Game();
console.log(game)
console.log(player1.bet(game.betOnPot(400)));
console.log(player1)
