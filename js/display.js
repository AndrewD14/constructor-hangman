//package requirements
var clc = require('cli-color');

//function to clear the screen
function clearScreen(){
	process.stdout.write("\u001b[2J\u001b[0;0H");
}

//displays a nice little gallow
function displayGallow(guessesRemaining){
	//top
	console.log("  ________");
	console.log("  |      |");

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
	console.log(output);

	//body
	if(guessesRemaining > 4)
		console.log("  |");
	else
		console.log("  |      |");

	//legs
	output = "  |     ";
	if(guessesRemaining == 1)
		output += "/ ";
	else if(guessesRemaining < 1)
		output += "/ \\";
	console.log(output);

	//base
	console.log("  |");
	console.log("  |");
	console.log("-----")
}

//function to display the results
function displayResults(player, myWord){
	clearScreen();
	generateLogo();
	displayGallow(player.getLives());
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
	if(msg.color)
		console.log(clc[msg.color](msg.msg));
	else
		console.log(msg.msg);

	console.log();
}

//export function for other files to use
module.exports = {colorizeOutPut: colorizeOutPut,
					displayResults: displayResults};