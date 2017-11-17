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
exports.displayResults = function(player, myWord){
	clearScreen();
	displayGallow(player.getLives());
	console.log();
	console.log(myWord.getReveal());
}