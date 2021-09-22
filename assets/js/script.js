var startQuizBtn = document.querySelector("#start-quiz");
var timerEl = document.querySelector("#timer");
var startEl = document.querySelector(".start-page")
// timer count down
var secondsLeft = 75;
var timerNum
//question list-not show on the start page
var questionsEl = document.querySelector("#questions");
questionsEl.style.display = "none";
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
    answer: "console log"}
];


// Click the start button
startQuizBtn.addEventListener("click", function(event){
    event.preventDefault();
    startEl.style.display = "none";
    timerNum = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft;   
    }, 1000);
    showQuestions();    
});

//Game Start
var questionTitle = document.querySelector("#question-title");
var choicesEl = document.querySelector("#choices");
var result = document.querySelector("#result");
questionsEl.style.display = "initial";
var i = 0;
var currentQuestion = questions[i];

function showQuestions(){
    // while(i<questions.length){

        questionTitle.textContent = currentQuestion.title;
    
        choicesEl.innerHTML ="";
        result.textContent = "";
  
        currentQuestion.choices.forEach(function(choice, k){
            var choices = document.createElement("button");
            
            choices.setAttribute("class", "choice");
            choices.setAttribute("value", choice);
            if (choices.value == currentQuestion.answer){
                choices.setAttribute("data-state", "right");
            }else{
                choices.setAttribute("data-state", "wrong");
            }
            choices.textContent = k + 1 + ". " + choice;
            // choices.onclick = questionClick();
            choicesEl.appendChild(choices);
        }) 

    


        // if (choicesEl.onclick) {
        //     i++;
        // }
    // }

    // gameOver();   
}

   
        
     choicesEl.addEventListener("click", function(event){
            event.preventDefault();
            var element = event.target;
            if (element.matches("#choices")){
                var state = element.getAttribute("data-state");
                if(state == "right"){
                    result.innerHTML = "Correct!";
                }else{
                    result.innerHTML = "Wrong!";
                }
            }
            i++;
        
            if(i == questions.length){
                gameOver();
            }else{
                showQuestions();
            }    
        })

// choicesEl.addEventListener("click", function(event){
//     event.preventDefault();
//     var element = event.target;
//     if (element.matches("#choices")){
//         var state = element.getAttribute("data-state");
//         if(state == "right"){
//             result.textContent = "Correct!";
//         }else{
//             result.textContent = "Wrong!";
//         }
//     }
//     i++;

//     if(i == questions.length){
//         gameOver();
//     }else{
//         showQuestions();
//     }
// })

// function questionClick() {
//     // console.log(this.value);
//     if(this.value !== currentQuestion.answer){
//         secondsLeft -= 5;
//         if (secondsLeft < 0){
//             secondsLeft = 0;   
//         }
//         timerEl.textContent = secondsLeft;
//         result.textContent = "Wrong!";
//         //计分          
//     }else{
//         result.textContent = "Correct!"; 
//         // 计分
//     } 
//     i++;

//     if(i == questions.length){
//         gameOver();
//     }else{
//         showQuestions();
//     }
// }


// Game Over
function gameOver(){
    if(secondsLeft == 0){
        clearInterval(timerNum)};
}