var startQuizBtn = document.querySelector("#start-quiz");
var timerEl = document.querySelector("#timer");
var startEl = document.querySelector(".start-page")
// timer count down
var secondsLeft = 75;
var timerNum
//question list-not show on the start page
var questionsEl = document.querySelector("#questions");
questionsEl.style.display = "none";
//final score section hide
var finalScore = document.querySelector("#score");
finalScore.style.display = "none";
var questions = [ 
    {title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"},
    {title: "The condition in an if/els statement is enclosed within ____.",
    choices: ["quotes", "curlybrackets", "parentheses", "square brackets"],
    answer: "parentheses"},
    {title: "Arrays in JavaScript can be used to store ____.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"},
    {title: "String values must be enclosed within ____ when being assigned to variables",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes"},
    {title: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal/bash", "for loops", "console log"],
    answer: "console log"
    }
];

// Click the start button
startQuizBtn.addEventListener("click", function(event){
    event.preventDefault();
    startEl.style.display = "none";
    timerNum = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft;   
    }, 1000);
    if (secondsLeft != 0){ 
        showQuestions();
    } else {
        gameOver();
    }    
});

//Game Start
var questionTitle = document.querySelector("#question-title");
var choicesEl = document.querySelector("#choices");
var result = document.createElement("p");
questionsEl.appendChild(result);
questionsEl.style.display = "initial";
var i = 0;
var currentQuestion = questions[i];

function showQuestions(){

    currentQuestion = questions[i]; 
    // insert the question title in HTML 
    questionTitle.textContent = currentQuestion.title;
    // clear choices buttons each time
    choicesEl.innerHTML = "";
    // defined each botton, give them class, value and target them to decide the player's score
    currentQuestion.choices.forEach(function(choice, k){
        var choices = document.createElement("button");   
        choices.setAttribute("class", "choice");
        choices.setAttribute("value", choice);
        choices.textContent = k + 1 + ". " + choice;
        choicesEl.appendChild(choices);
        choices.addEventListener('click', function(event){
            event.preventDefault();
            if (choices.value == currentQuestion.answer) {
                result.textContent = "Correct!"; 
            } else {
                result.textContent = "Wrong!"; 
                secondsLeft -= 10;
            }  

            setTimeout(function () {
            result.textContent = "";
            }, 500);
            
            i++; 

            if (i < questions.length){    
                showQuestions();
            } else {
                gameOver();
            }
        })    
    }) 
}

// Game Over and stop the count down
function gameOver(){
    if(i = questions.length){
        score = secondsLeft;
        clearInterval(timerNum);
        initialPage();
    }else if (secondsLeft == 0){
        score = 0;
        clearInterval(timerNum);
        initialPage();
    }
}

//Show scores and put inital column
var finalScoreTitle = document.querySelector(".final-score");
var formEl = document.querySelector(".enter-initial");
var submit = document.querySelector("#submit");
var initial = document.querySelector("#initial");
function initialPage(){
    questionsEl.style.display = "none";
    finalScore.style.display = "initial";
    finalScoreTitle.textContent = "Finished! Your score is " + timerEl.textContent +". Now enter your initial."
    submit.addEventListener("click", function(event){
        event.preventDefault();
        localStorage.setItem(initial.value, timerEl.textContent);
        initial.value = "";
        window.location.href = "viewHighScores.html";
    })    
}