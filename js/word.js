//array of acceptable letters
var letterCheck = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
			  	   'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//class declaration
//Letter prototype
Letter.prototype = {
	letter: "",
	hidden: "",
	constructor: function(letter, hidden){
		this.letter = letter;
		this.hidden = hidden;
	}
}