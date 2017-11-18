var phrases = [
"Captain America",
"Batman",
"Green Arrow",
"Wolverine",
"Superman",
"Spider-Man",
"Black Panther",
"Iron Man",
"Wonder Woman",
"Aquaman",
"Daredevil",
"Black Canary",
"Green Lantern",
"Iron Fist",
"Ghost Rider",
"Doctor Strange",
"Robin",
"Hulk",
"Thor",
"Supergirl",
"Black Widow",
"Martian Manhunter",
"Firestorm",
"Atom",
"Antman",
"Flash",
"Star-lord",
"Hawkeye",
"Captain Marvel",
"Luke Cage",
"Mr. Fantastic",
"Invisible Woman",
"Human Torch",
"Thing",
"Silver Surfer",
"Professor X",
"Cyclops",
"Jean Grey",
"Rouge",
"Storm",
"Gambit",
"Hawkgirl",
"Deadpool"];

//returns a random element from the array
exports.getRandomPhrase = function(){
	return phrases[Math.floor(Math.random()*phrases.length)];
}