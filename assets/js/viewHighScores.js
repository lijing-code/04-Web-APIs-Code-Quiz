var historyRecord = document.querySelector("#historyRecord");
for(var i =0; i < localStorage.length; i++){
    var list = document.createElement("li");   
    historyRecord.appendChild(list);
    var playerName = localStorage.key(i);
    var playerScore = localStorage.getItem(localStorage.key(i));
    if (playerName) {
        list.innerHTML = "Name: "+ localStorage.key(i) +"    "+ "Score: "+localStorage.getItem(localStorage.key(i));
    }
}

var clearScoresEl = document.querySelector("#clear-scores");
clearScoresEl.addEventListener("click", function(event){
    event.preventDefault();
    historyRecord.innerHTML = "";
})