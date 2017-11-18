//local files included
var Word = require('./js/word.js');
var Player = require('./js/player.js');
var Inputs = require('./js/inputs.js');
var Display = require('./js/display.js');
var Phrase = require('./js/phrases.js');

//general global variables
var myWord = new Word(Phrase.getRandomPhrase());
var player = new Player();

//starts the game
Inputs.startGame(player, myWord);