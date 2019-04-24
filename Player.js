class Player {
  constructor(name, stack) {
    this.name = name;
    this.playerCards = [];
    this.stack = stack;
    } 
    addCard(card) {
    	this.playerCards.push(card);
    }
    getCards() {
    	return this.playerCards;
    }
    bet(chips) {
    	this.stack = this.stack - chips;
    	return chips;
    }
    fold() {
    	
    }
}