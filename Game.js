class Game {
	constructor() {
		this.pot = 0;
	}
	betOnPot(chips) {
		this.pot = this.pot + chips;
	}
}