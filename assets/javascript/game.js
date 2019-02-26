//html DOM elements links
var $newGameButton = document.getElementById("newGameButton");
var $currentWordDashes = document.getElementById("currentWordDashes");
var $lettersGuessed = document.getElementById("lettersGuessed");
var $guessesRemaining = document.getElementById("guessesRemaining");
var $wins = document.getElementById("wins");

var mummyWords = ["archaeology", "egypt", "rick", "evelyn", "imohtep", "mummy", "curse"];
var wins = 0;
var guessesRemaining = 12;
var gameRunning = false;
var pickedMummyWord = "";
var pickedMummyWordDashesArray = [];
var lettersGuessedArray = [];
var incorrectLettersGuessed = [];

//reset function
var resetGame = function(){
    gameRunning = true;
    guessesRemaining = 12;
    lettersGuessedArray = [];
    incorrectLettersGuessed = [];
    pickedMummyWordDashesArray = [];

var gameWord = mummyWords[Math.floor(Math.random() * mummyWords.length)]; 
}





// reset function will start guessesremain over and empty out arrays to be refilled


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
// var updateWins = function(){
//     document.getElementById("wins").innerText = wins;
// }
//updates guesses remaining as decreases
// var updateGuessesRemaining = function(){
//     document.getElementById("guessesRemaining").innerText = guessesRemaining;
// }
//updates letters guessed by user
// var updateLettersGuessed = function(){
//     document.getElementById("lettersGuessed").innerText = lettersUsed;
// }


//collects keys pressed
document.onkeyup = function(event) {
    guessesRemaining--;
    var userGuess = event.key;
    //console.log(userGuess);
   
    //changes any uppercase keys to lowercase so matches words
    var userChoice = userGuess.toLowerCase();
    console.log(userChoice);
}











