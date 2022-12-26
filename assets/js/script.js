/*jshint esversion: 6 */
//variable score
var scoreUser = 0;
var scorePc = 0;
//variable Players
var player1 = "";
var computer = "";
//aplications
const displayPlayer1 = document.getElementById("player1");
const displayComputer = document.getElementById("computer");
const scoreBoard = document.getElementById("score-board");
const play = document.getElementById("playing");
const winner = document.getElementById("winner");
const loser = document.getElementById("loser");

// Calls startGame and playPc function after user's click
playing.addEventListener("click", () => {
    startGame()
    playPc()
})
