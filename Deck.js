class Deck {
	constructor() {
		this.cards = [];
		this.values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']; 
		this.symbols = ['hearts','diamonds','spades','clubs'];
	}
	getNewDeckShuffled() {
		for(let i = 0; i < this.symbols.length; i++)
		{
			for (let x = 0; x < this.values.length; x++)
			{
				let card = new Card(this.values[x], this.symbols[i]);
				this.cards.push(card);
			}
		}
		for (var i = 0; i < 1000; i++)
		{
			var location1 = Math.floor((Math.random() * this.cards.length));
			var location2 = Math.floor((Math.random() * this.cards.length));
			var tmp = this.cards[location1];

			this.cards[location1] = this.cards[location2];
			this.cards[location2] = tmp;
		}
		return this.cards;
	}

	getAndRemove() {
		let card = this.cards[0];
		this.cards.shift();
		return card;
	}

	getActualDeck(){
		return this.cards;
	}
}