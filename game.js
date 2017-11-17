//local files included
var Word = require('./js/word.js');
var Player = require('./js/player.js');
var Inputs = require('./js/inputs.js');

//general global variables
var myWord = new Word("The aNswer is this.");
var player = new Player();

//starts the game
Inputs.startGame(player, myWord);