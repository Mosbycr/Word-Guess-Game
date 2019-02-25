

//Score
var wins = 0;
var guessesRemaining = 12;
var lettersUsed = [];
var answerArray = [];

//word choices 
var jonesWords = ["archaeology", "indiana", "whip", "marion", "ark", "adventure", "snakes"];

var gameWord = jonesWords[Math.floor(Math.random() * jonesWords.length)]; 

// reset function will start guessesremain over and empty out arrays to be refilled
var resetGame = function(){
    guessesRemaining = 12;
    lettersUsed = [];
    answerArray = [];

    gameWord = jonesWords[Math.floor(Math.random() * jonesWords.length)]; //will set new word and array dashes

    for(var i = 0; i < gameWord.length; i++){
        answerArray.push("_");
    }

    updateDashes();
    updateGuessesRemaining();
    updateLettersGuessed();
}

//updates Display when letters are pressed 
var updateDashes = function(){
    document.getElementById("answerArrayDashes").innerText = "";
  
    for (var i = 0; i < answerArray.length; i++){
        document.getElementById("answerArrayDashes").innerText += answerArray[i];
    }
   
}
//updates win #
var updateWins = function(){
    document.getElementById("wins").innerText = wins;
}
//updates guesses remaining as decreases
var updateGuessesRemaining = function(){
    document.getElementById("guessesRemaining").innerText = guessesRemaining;
}
//updates letters guessed by user
var updateLettersGuessed = function(){
    document.getElementById("lettersGuessed").innerText = lettersUsed;
}


//collects keys pressed
document.onkeyup = function(event) {
    guessesRemaining--;
    var userGuess = event.key;
    //console.log(userGuess);
   
    //changes any uppercase keys to lowercase so matches words
    var userChoice = userGuess.toLowerCase();
    console.log(userChoice);
}











