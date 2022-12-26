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
/** 
 * Gets the values of user's choice
 */
function startGame() {
    //collect value from input name=play that has been selected
    //displays the value of player1 concatenated with the image's address
    player1 = document.querySelector('input[name="play"]:checked').value
    displayPlayer1.innerHTML = "<img src='assets/images/" + player1 + ".png'>"
    displayComputer.innerHTML = ""
}
