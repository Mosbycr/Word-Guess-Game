var newGameButton = document.getElementById("newGameButton");
var currentWord = document.getElementById("currentWordDashes");
var lettersGuess = document.getElementById("lettersGuessed");
var guessNumber = document.getElementById("guessesRemaining");
var userWins = document.getElementById("wins");

var mummyWords = ["Archaeology", "Egypt", "Tomb", "Sarcophagus", "Afterlife", "Mummy", "Curse"];
var wins = 0;
var guessesLeft = 10;
var gameRunning = false;
var pickedMummyWord = []; 
var pickedMummyWordDashesArray = [];
var lettersGuessedArray = [];
var incorrectLettersGuessed = [];

function play_single_sound() {
    document.getElementById('audiotag1').play();
}

var resetGame = function(){
    gameRunning = true;
    wins = 0;
    guessesLeft = 10;
    lettersGuessedArray = [];
    incorrectLettersGuessed = [];
    pickedMummyWordDashesArray = [];

    pickedMummyWord = mummyWords[Math.floor(Math.random() * mummyWords.length)]; 

    for (var i = 0; i < pickedMummyWord.length; i++) {
            pickedMummyWordDashesArray.push("_ ");
    }

    guessNumber.textContent = guessesLeft;
    currentWord.textContent = pickedMummyWordDashesArray.join("");
    lettersGuess.textContent = incorrectLettersGuessed;
    userWins.textContent = wins;
}

var resetGameWin = function () {
    gameRunning = true;
    guessesLeft = 10;
    lettersGuessedArray = [];
    incorrectLettersGuessed = [];
    pickedMummyWordDashesArray = [];

    pickedMummyWord = mummyWords[Math.floor(Math.random() * mummyWords.length)];

    for (var i = 0; i < pickedMummyWord.length; i++) {
        pickedMummyWordDashesArray.push("_ ");
    }

    guessNumber.textContent = guessesLeft;
    currentWord.textContent = pickedMummyWordDashesArray.join("");
    lettersGuess.textContent = incorrectLettersGuessed;
}

newGameButton.addEventListener("click", resetGame);

var userLetterPressed = function(letter){
    console.log(letter);

    if (gameRunning === true && lettersGuessedArray.indexOf(letter) === -1){
        lettersGuessedArray.push(letter);

        for (var i=0; i < pickedMummyWord.length; i++){
            if(pickedMummyWord[i].toLowerCase() === letter.toLowerCase()) {
                pickedMummyWordDashesArray[i] = pickedMummyWord[i];        
            }   
        }  
        
        currentWord.textContent = pickedMummyWordDashesArray.join("");  
        checkLetter(letter);
    } 
}

var checkLetter = function(letter){
    if (pickedMummyWordDashesArray.indexOf(letter.toLowerCase()) === -1) { 
        incorrectLettersGuessed.push(letter);
        lettersGuess.textContent = incorrectLettersGuessed.join(" ");
        guessesLeft--;
        guessNumber.textContent = guessesLeft;
    }
    checkLose();
}

var checkLose = function(){
    if (guessesLeft === 0){
        gameRunning = false; 
        currentWord.textContent = pickedMummyWord;
        resetGame();
    }
    checkWin();    
}

var checkWin = function(){
    if (pickedMummyWord.toLowerCase() === pickedMummyWordDashesArray.join("").toLowerCase()) {
        play_single_sound();
        wins++;
        userWins.textContent = wins;
        gameRunning = false;
        resetGameWin();
    }
}

document.onkeyup = function(event) { 
    if (event.keyCode >= 65 && event.keyCode <= 90) {
    userLetterPressed(event.key);
    }
}













