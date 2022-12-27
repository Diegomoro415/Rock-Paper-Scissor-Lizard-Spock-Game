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
    startGame();
    playPc();
})
/** 
 * Gets the values of user's choice
 */
function startGame() {
    //collect value from input name=play that has been selected
    //displays the value of player1 concatenated with the image's address
    player1 = document.querySelector('input[name="play"]:checked').value;
    displayPlayer1.innerHTML = "<img src='assets/images/" + player1 + ".png'>";
    displayComputer.innerHTML = "";
}
/**
 * Displays a random value for computer
 */
function playPc() {
    //array with possible choices
    let opt = ['rock', 'paper', 'scissor' , 'lizard' , 'spock'];
    //gets a random choice for computar
    let num = Math.floor(Math.random() * 5);
    //displays the value of computer concatenated with the image's address
    computer = opt[num];
    displayComputer.innerHTML = "<img src='assets/images/" + computer + ".png'>";
    checkResult();
}
/**
 * Game Rules
 */
function checkResult() {

    play.disabled = true

    let win = "0";
     //checks player 1 choice and computer choice to determinate who wins
     // 1 win, -1 lose and 0 game is a tie
    if (player1 == computer) {

    } else if (player1 == 'rock') {
        win = computer == 'scissor' || computer == 'lizard' ? 1 : -1
    } else if (player1 == 'paper') {
        win = computer == 'rock' || computer == 'spock' ? 1 : -1
    } else if (player1 == 'scissor') {
        win = computer == 'paper' || computer == 'lizard' ? 1 : -1
    } else if (player1 == 'lizard') {
        win = computer == 'paper' || 'spock' ? 1 : -1
    } else if (player1 == 'spock') {
        win = computer == 'scissor' || computer == ' rock' ? 1 : -1
    }

    // if win bigger than 0 (a tie game) increase by 1 scoreUser
    // if win smaller than 0 (a tie game) increase by 1 scorePc
    if(win == 0){
                                                                                                                 
    } else if (win > 0) {
        scoreUser = scoreUser + 1
        
    } else {
        scorePc = scorePc + 1
    }
    
    //displays score
    scoreBoard.innerHTML = scoreUser +  ":" + scorePc
    
    //defines tha game is over after 5 wins
    //user reaches 5 wins pop up winner final-screen
    if (scoreUser >= 5){
        winner.classList.remove('none')
        winner.classList.add('center')
    }
    
    //computer reaches 5 wins pop up loser final-screen
    if (scorePc >= 5){
        loser.classList.remove('none')
        loser.classList.add('center')
    }
    
    //set time 1 second to the next try
    setTimeout(()=>{
        play.disabled = false
        clear()
    },1000)
}
    /**
     * cleans displayComputer and displayPlayer1
     */
    function clear(){
        displayComputer.innerHTML=""
        displayPlayer1.innerHTML = ""
    }
    
    /**
     * sets display and score to 0 to start a new game
     */
        function newGame(){
        playAgain = document.getElementsByClassName("play-again");
        scorePc = 0
        scoreUser = 0
        winner.classList.add('none')
        winner.classList.remove('center')
        loser.classList.add('none')
        loser.classList.remove('center')
        
    }
    
