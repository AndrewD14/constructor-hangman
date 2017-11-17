//class declaration
var Player = function(){}

//Player prototype
Player.prototype = {
	lives: 6,
	guessed: [],

	//function that reduces the lives remaining
	guessedIncorrectly: function(){
		if(this.lives > 0)
			this.lives--;
	},

	//function to access the lives
	getLives: function(){return this.lives;},

	//function that checks for previous guess (return false if wasnt guessed before, return true if was guessed before)
	guessedAlready: function(letter){
		if(this.guessed.indexOf(letter.toUpperCase()) == -1){
			this.guessed.push(letter.toUpperCase());
			return false;
		}
		return true;
	},

	//resets the player for a new game
	reset: function(){
		this.lives = 6;
		this.guessed = [];
	}
}

module.exports = Player;