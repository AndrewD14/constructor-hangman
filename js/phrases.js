var phrases = [
"Captain America",
"Batman",
"Green Arrow",
"Wolverine",
"Superman",
"Spider-Man",
"Black Panther",
"Iron Man",
"Wonder Woamn",
"Aquaman",
"Daredevil",
"Black Canary",
"Green Lantern",
"Iron Fist",
"Ghost Rider",
"The Human Torch",
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
"Star-lord"];

//returns a random element from the array
exports.getRandomPhrase = function(){
	return phrases[Math.floor(Math.random()*phrases.length)];
}