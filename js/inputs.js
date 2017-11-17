//package requirements
var inquirer = require("inquirer");
var clc = require('cli-color');

//local files included
var Display = require('./display.js');
var Word = require('./word.js');

//array of acceptable letters
var letterCheck = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
			  	   'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//function to check guesses (return null if valid, returns msg if not valid)
function isValidGuess(letter){
	if(letter.length > 1){
		return "The guess \""+letter+"\" is more than 1 character. Please limit to only 1 letter per guess.";
	}
	else if(letterCheck.indexOf(letter.toUpperCase()) == -1){
		return "The guess \""+letter+"\" is not a valid guess.";
	}
	else
		return null;
}

//function to get input from a user for a guess
var getUserGuess = function(previousResponse, player, myWord){
	//displays the message from the previous input after the screen is cleared
	if(previousResponse)
		console.log(previousResponse);

	//asks the user for a guess
	inquirer.prompt([
	{
		name: "guess",
		message: "Enter a letter to guess."
	}]).then(function(answer){
		var badGuess = isValidGuess(answer.guess);
		
		//checks the guess
		if(!badGuess){
			//checks if the player already guessed the letter
			if(player.guessedAlready(answer.guess)){
				Display.displayResults(player, myWord);
				getUserGuess("The letter \""+answer.guess+"\" was guessed already.", player, myWord);
			}
			else{
				//checks if it is a good guess or bad guess
				var found = myWord.checkGuess(answer.guess);

				//bad guess
				if(!found)
					player.guessedIncorrectly();

				//displays the results
				Display.displayResults(player, myWord);

				//checks the remaining lives
				if(player.getLives() > 0){
					//good guess
					if(found){
						//checks if guessed all the letters
						if(myWord.guessedAll()){
							console.log(clc.greenBright("You WIN!!!"));
							playAgain(player, myWord);
						}
						else
							getUserGuess(null, player, myWord);
					}
					//bad guess
					else
						getUserGuess("\""+clc.redBright(answer.guess)+"\" is an incorrect guess.", player, myWord);
				}
				//game over
				else{
					console.log(clc.redBright("GAME OVER!"));
					console.log("The correct phrase is: "+myWord.getAnswer());
					playAgain(player, myWord);
				}
			}
		}
		else{
			//displays the results
			Display.displayResults(player, myWord);
			getUserGuess(badGuess, player, myWord);
		}
	});
}

//function to see if the user wants to play again
function playAgain(player, myWord){
	inquirer.prompt([
	{
		type: "list",
		name: "command",
		message: "Want to play again?",
		choices: ["Yes", "No"]
	}]).then(function(answer){
		//resets the game
		if(answer.command == "Yes"){
			startGame(player, myWord);
		}
	});
}

//function for starting and resetting the game
var startGame = function(player, myWord){
	myWord = new Word("The aNswer is this.");
	player.reset();
	Display.displayResults(player, myWord);
	getUserGuess(null, player, myWord);
}

//exports it so another file can use it while still being available for use within the current file
module.exports = {startGame: startGame};