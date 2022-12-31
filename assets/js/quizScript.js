/*jshint esversion: 6*/
var question = document.getElementById("question");
var answers = document.getElementById("answers");
var numQuestion = document.getElementById("num-question");
var quizContainer = document.getElementById("quiz-container");
var endQuiz = document.getElementById("end-quiz");
var endQuizScreen = document.getElementById("end-quiz-screen");
var quizButton = document.getElementById("btn-end-screen");

var shuffedQuestions;

/**
 * shuffleQuestions randomly shuffles the questions shuffledQuestions
 */
function shuffleQuestions(){
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  }

import questions from "./questions.js";
//Displyas number of current question and number of correct answers
let currentQuestion = 0;
let correctAnswers = 0;

/**
 * Get the current question number  and shows how many question to the end
 * everytime load question  add by 1 current question number
 */
function loadQuestions() {
    numQuestion.innertHTML = `${currentQuestion +1} / ${questions.length}`;
    const item = questions[currentQuestion];
    answers.innerHTML = "";
    question.innerHTML = item.question;
// create a forEach for answer and create a new div
    item.answers.forEach((answer) => {
        const div = document.createElement("div");
    //create button for answers, colletct data for correct answer and display answers options
        div.innerHTML = `
        <button class="answer" data-correct="${answer.correct}">
          ${answer.option}
        </button>
        `;
   // Append div to answers
        answers.appendChild(div);
      });
      // Querry selector to all these buttons,  forEach to item to assign click events to each button
      document.querySelectorAll(".answer").forEach((item) => {
        item.addEventListener("click", nextQuestion);
      });
    }
    loadQuestions();
    shuffedQuestions();
    /**
     * This function checks data correct and defines when the game is over
     * if statement data correct is equal to true increase correctAnser 
     * if statement currentQuestion = or bigger than questions length the game is over
     * and it calls finish function
     */
    function nextQuestion(e) {
        if (e.target.getAttibute("data-correct") === "true")
        {
            correctAnswers++;
        }
        if (currentQuestion < questions.length -1) {
            currentQuestion++;
            loadQuestions();
            shuffedQuestions();
        } else {
            finish();
        }
    }
    /**
     * This function is call when there are no more questions
     * displyas a end screen with total of question the users made right
     */
    function finish () {
        endQuizScreen.innerHTML = `You made ${correctAnswers} of ${questions.length}`;
        quizContainer.style.display = "none";
        endQuiz.style.display = "flex";
    }

