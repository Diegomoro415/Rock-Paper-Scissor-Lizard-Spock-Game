/*jshint esversion: 6*/
var question = document.getElementById("question");
var answers = document.getElementById("answers");
var numQuestion = document.getElementById("num-question");
var quizContainer = document.getElementById("quiz-container");
var endQuiz = document.getElementById("end-quiz");
var endQuizScreen = document.getElementById("end-quiz-screen");
var quizButton = document.getElementById("btn-end-screen");

import questions from "./questions.js";


var shuffedQuestions;