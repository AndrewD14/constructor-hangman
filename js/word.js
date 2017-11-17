//array of acceptable letters
var letterCheck = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
			  	   'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//class declaration
var Word = function(wordToGuess){this.constructor(wordToGuess);}
var Letter = function(letter, hidden){this.constructor(letter,hidden);}

//Letter prototype
Letter.prototype = {
	letter: "",
	hidden: "",
	constructor: function(letter, hidden){
		this.letter = letter;
		this.hidden = hidden;
	}
}

//Word protoype
Word.prototype = {
	//class variables
	currentPhrase: [],

	//class method
	//sets up the class variables
	constructor: function(wordToGuess){
		//clears the previous phrase
		this.currentPhrase = [];

		//splits the string into separate parts
		var temp = wordToGuess.split(" ");

		//loops through each word to create multidimensional arrays
		for(var i = 0; i < temp.length; i++){
			var word = [];

			//creates the 2 arrays
			for(j in temp[i]){
				//check to see if it is a letter and displays if it is not
				if(letterCheck.indexOf(temp[i][j].toUpperCase()) != -1)
					word.push(new Letter(temp[i][j], "_"));
				else
					word.push(new Letter(temp[i][j], temp[i][j]));
			}

			//adds the array to the master array
			this.currentPhrase.push(word);
		}
	},

	//method to get the current guess
	getReveal: function(){
		var phrase = "";

		//builds the phrase to guess with 3 spaces in between the words
		for(var i = 0; i < this.currentPhrase.length; i++){
			for(var j = 0; j < this.currentPhrase[i].length; j++){
				phrase += this.currentPhrase[i][j].hidden;

				//adds the extra space to all but the last letter
				if(j < this.currentPhrase[i].length -1)
					phrase += " ";
			}

			//adds the extra spaces to all but the last word
			if(i < this.currentPhrase.length -1)
				phrase += "   ";
		}
		return phrase;
	},

	//method to get the current guess
	getAnswer: function(){
		var phrase = "";

		//builds the phrase with 1 space in between the words
		for(var i = 0; i < this.currentPhrase.length; i++){
			for(var j = 0; j < this.currentPhrase[i].length; j++){
				phrase += this.currentPhrase[i][j].letter;
			}

			//adds the extra spaces to all but the last word
			if(i < this.currentPhrase.length -1)
				phrase += " ";
		}
		return phrase;
	},

	//checks the guess (returns true if found, false otherwise)
	checkGuess: function(letter){
		var found = false;

		//loops through the answer to see if the letter exists
		for(i in this.currentPhrase){
			for(j in this.currentPhrase[i]){
				if(letter.toUpperCase() == this.currentPhrase[i][j].letter.toUpperCase()){
					//reveals the letter
					this.currentPhrase[i][j].hidden = this.currentPhrase[i][j].letter;
					found = true;
				}
			}
		}
		return found;
	},

	//checks if all the letters were guessed
	guessedAll: function(){
		for(i in this.currentPhrase){
			for(j in this.currentPhrase[i]){
				if(this.currentPhrase[i][j].hidden == "_") return false;
			}
		}

		//returns true if all were revealed
		return true;
	}
}

module.exports = Word;