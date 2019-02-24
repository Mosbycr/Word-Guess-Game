var answerArrayDashes = document.getElementById("answerArrayDashes");



document.onkeyup = function(event) {
    var userGuess = event.key;
    // console.log(userGuess);
   
    var userChoice = userGuess.toLowerCase();
    console.log(userChoice);
}


var jonesWords = ["archaeology", "indiana", "whip", "marion", "ark", "adventure", "snakes"];

var gameWord = jonesWords[Math.floor(Math.random() * jonesWords.length)];
console.log(gameWord);

var answerArray = [];
for (var i = 0; i < gameWord.length; i++){
    answerArray[i] = "_";
}

var lettersRemaining = gameWord.length;

answerArrayDashes.textContent = answerArray;

