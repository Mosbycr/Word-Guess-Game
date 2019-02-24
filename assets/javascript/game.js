// var answerArrayDashes = document.getElementById("answerArrayDashes");
// var wins = document.getElementById("wins");
// var guessesRemaining = document.getElementById("guessesRemaining");
// var lettersGuessed = document.getElementById("lettersGuessed");

//Score
var wins = 0;
var guessesRemaining = 12;
var lettersUsed = [];
var gameWord;

//word choices 
var jonesWords = ["archaeology", "indiana", "whip", "marion", "ark", "adventure", "snakes"];

//picks random words
// var gameWord = jonesWords[Math.floor(Math.random() * jonesWords.length)];
// console.log(gameWord);

var resetGame = function(){
    guessesRemaining = 12;
    lettersUsed = [];
    answerArray = [];

    gameWord = jonesWords[Math.floor(Math.random() * jonesWords.length)];

    for(var i = 0; i < gameWord.length; i++){
        answerArray.push("_");
    }

    updateDisplay();
}

var updateDisplay = function(){
    
}


//collects keys pressed
document.onkeyup = function(event) {
    var userGuess = event.key;
    // console.log(userGuess);
   
    //changes any uppercase keys to lowercase so matches words
    var userChoice = userGuess.toLowerCase();
    console.log(userChoice);
}

//fills empty array with _ _ for letters in random word to be guessed
var answerArray = [];
for (var i = 0; i < gameWord.length; i++){
    answerArray[i] = "_";
}

// sets a counter for when word is filled and completed
var lettersRemaining = gameWord.length;







