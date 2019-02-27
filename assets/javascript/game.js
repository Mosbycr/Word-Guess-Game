//html DOM elements links
var newGameButton = document.getElementById("newGameButton");
var currentWord = document.getElementById("currentWordDashes");
var lettersGuess = document.getElementById("lettersGuessed");
var guessesLeft = document.getElementById("guessesRemaining");
var userWins = document.getElementById("wins");

//variables for js code
var mummyWords = ["archaeology", "egypt", "rick", "evelyn", "imohtep", "mummy", "curse"];
var wins = 0;
var guessesLeft = 12;
var gameRunning = false;
var pickedMummyWord = []; //changed to array from ""
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

    pickedMummyWord = mummyWords[Math.floor(Math.random() * mummyWords.length)]; 

    //puts dashes in place of letters and pushes random letter to array
    for (var i = 0; i < pickedMummyWord.length; i++) {
            pickedMummyWordDashesArray.push("_ ");//changed to one line of code for dash and space
    }

    guessesLeft.textContent = guessesRemaining;
    currentWord.textContent = pickedMummyWordDashesArray.join("");
    lettersGuess.textContent = incorrectLettersGuessed;
}

newGameButton.addEventListener("click", resetGame);

//letter guess function
var userLetterPressed = function(letter){
    console.log(letter);

    if (gameRunning === true && lettersGuessedArray.indexOf(letter) === -1){//-1 means not in available letters and have not guessed yet
        lettersGuessedArray.push(letter);

        //check to see if letter is in picked word
        for (var i=0; i < pickedMummyWord.length; i++){
            if(pickedMummyWord[i] === letter) {
                pickedMummyWordDashesArray[i] = pickedMummyWord[i];     
            }
        }

        currentWord.textContent = pickedMummyWordDashesArray.join("");
    } 
        else {
            if (gameRunning === false){
             alert("The game isn't running, press the New Game Button");
            } else {
             alert("You have already guessed that letter, please try another one!");
            }
    }
}
//collects keys pressed
document.onkeyup = function(event) {
    // guessesRemaining--;
    var userGuess = event.key;
    console.log(userGuess);
   
    //changes any uppercase keys to lowercase so matches words
    userLetterPressed = userGuess.toLowerCase();
    console.log(userLetterPressed);
}













