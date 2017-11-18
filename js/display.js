//package requirements
var clc = require('cli-color');

//function to clear the screen
function clearScreen(){
	process.stdout.write("\u001b[2J\u001b[0;0H");
}

//displays a nice little gallow
function displayGallow(guessesRemaining, guessed){
	//top
	console.log("  ________");
	console.log("  |      |            Previous Guesses");

	//head & arms
	var output = "  |     ";
	if(guessesRemaining <= 3)
		output += "\\";
	else
		output += " ";
	if(guessesRemaining <= 5)
		output += "O";
	if(guessesRemaining < 3)
		output += "/";

	//adds the previous guesses for the head and arms
	if(guessesRemaining < 3)
		output += "           ";
	else if(guessesRemaining == 3)
		output += "            ";
	else if(guessesRemaining <= 5)
		output += "            ";
	else
		output += "             ";
	for(var i = 0; (i < 6 && i < guessed.length); i++)
		if(i == 5 || i == guessed.length-1)
			output += guessed[i];
		else
			output += guessed[i]+", ";
	console.log(output);

	//body
	output = "";
	if(guessesRemaining > 4)
		output = "  |";
	else
		output = "  |      |";

	//adds the previous guesses for the body
	if(guessesRemaining > 4)
		output += "                   ";
	else
		output += "            ";
	for(var i = 6; (i < 12 && i < guessed.length); i++)
		if(i == 11 || i == guessed.length-1)
			output += guessed[i];
		else
			output += guessed[i]+", ";
	console.log(output);

	//legs
	output = "  |     ";
	if(guessesRemaining == 1)
		output += "/ ";
	else if(guessesRemaining < 1)
		output += "/ \\";

	//adds the previous guesses to the legs
	if(guessesRemaining == 1)
		output += "            ";
	else if(guessesRemaining < 1)
		output += "           ";
	else
		output += "              ";
	for(var i = 12; (i < 18 && i < guessed.length); i++)
		if(i == 17 || i == guessed.length-1)
			output += guessed[i];
		else
			output += guessed[i]+", ";
	console.log(output);

	//base
	console.log("  |                   ");

	//additional possible letters
	for(var i = 18; (i < 24 && i < guessed.length); i++)
		if(i == 23 || i == guessed.length-1)
			output += guessed[i];
		else
			output += guessed[i]+", ";

	console.log("  |                   ");

	//additional possible letters
	for(var i = 24; (i < 30 && i < guessed.length); i++)
		if(i == 29 || i == guessed.length-1)
			output += guessed[i];
		else
			output += guessed[i]+", ";

	console.log("-----")
}

//function to display the results
function displayResults(player, myWord){
	clearScreen();
	generateLogo();
	displayGallow(player.getLives(), player.getAlreadyGuessed());
	console.log();
	console.log(myWord.getReveal());
	console.log();
}

//function to display the logo
function generateLogo(){
	console.log("   _____ __  ______  __________  __  ____________  ____  ___________")
	console.log("  / ___// / / / __ \\/ ____/ __ \\/ / / / ____/ __ \\/ __ \\/ ____/ ___/")
	console.log("  \\__ \\/ / / / /_/ / __/ / /_/ / /_/ / __/ / /_/ / / / / __/  \\__ \\")
	console.log(" ___/ / /_/ / ____/ /___/ _, _/ __  / /___/ _, _/ /_/ / /___ ___/ /")
	console.log("/____/\\____/_/   /_____/_/ |_/_/ /_/_____/_/ |_|\\____/_____//____/")
}

//function to display to the console log and takes in a color parameter
function colorizeOutPut(msg){
	var string = "";

	for(i in msg){
		if(msg[i].color)
			string += clc[msg[i].color](msg[i].msg);
		else
			string += msg[i].msg;
	}

	console.log(string)
	console.log();
}

//export function for other files to use
module.exports = {colorizeOutPut: colorizeOutPut,
					displayResults: displayResults};