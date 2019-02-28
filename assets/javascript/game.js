//html DOM elements links
var newGameButton = document.getElementById("newGameButton");
var currentWord = document.getElementById("currentWordDashes");
var lettersGuess = document.getElementById("lettersGuessed");
var guessNumber = document.getElementById("guessesRemaining");
var userWins = document.getElementById("wins");

//variables for js code
var mummyWords = ["Archaeology", "Egypt", "Rick", "Evelyn", "Imohtep", "Mummy", "Curse"];
var wins = 0;
var guessesLeft = 10;
var gameRunning = false;
var pickedMummyWord = []; //changed to array from ""
var pickedMummyWordDashesArray = [];
var lettersGuessedArray = [];
var incorrectLettersGuessed = [];

//reset function
var resetGame = function(){
    gameRunning = true;
    guessesLeft = 10;
    lettersGuessedArray = [];
    incorrectLettersGuessed = [];
    pickedMummyWordDashesArray = [];

    pickedMummyWord = mummyWords[Math.floor(Math.random() * mummyWords.length)]; 

    //puts dashes in place of letters and pushes random letter to array
    for (var i = 0; i < pickedMummyWord.length; i++) {
            pickedMummyWordDashesArray.push("_ ");//changed to one line of code for dash and space
    }

    guessNumber.textContent = guessesLeft;
    currentWord.textContent = pickedMummyWordDashesArray.join("");
    lettersGuess.textContent = incorrectLettersGuessed;
}

//start new game
newGameButton.addEventListener("click", resetGame);

//letter guess function
var userLetterPressed = function(letter){
    console.log(letter);

    if (gameRunning === true && lettersGuessedArray.indexOf(letter) === -1){//-1 means not in available letters and have not guessed yet
        lettersGuessedArray.push(letter);

        //check to see if letter is in picked word
        for (var i=0; i < pickedMummyWord.length; i++){
            if(pickedMummyWord[i].toLowerCase() === letter.toLowerCase()) {
                pickedMummyWordDashesArray[i] = pickedMummyWord[i];        
            }   
        }  
        
        currentWord.textContent = pickedMummyWordDashesArray.join("");  
        checkLetter(letter);
    } 
    
        // else {
        //     if (gameRunning === false){
        //      alert("The game isn't running, press the New Game Button");
        //     } else {
        //      alert("You have already guessed that letter, please try another one!");
        //     }
    // }
}

var checkLetter = function(letter){
    if (pickedMummyWordDashesArray.indexOf(letter.toLowerCase()) === -1) { // need to work more is returning 5 of the letter
        incorrectLettersGuessed.push(letter);
        lettersGuess.textContent = incorrectLettersGuessed.join("");
        guessesLeft--;
        guessNumber.textContent = guessesLeft;
    }
    checkLose();
}

var checkLose = function(){
    if (guessesLeft === 0){
        gameRunning = false; // maybe add alert here to say lost???
        currentWord.textContent = pickedMummyWord;
        resetGame();
    }
    checkWin();    
}

var checkWin = function(){
    if (pickedMummyWord.toLowerCase() === pickedMummyWordDashesArray.join("").toLowerCase()) {
        wins++;
        userWins.textContent = wins;
        gameRunning = false;
        resetGame();
    }
}


//collects keys pressed
document.onkeyup = function(event) { // can add specific keys so only letters
              // if(even.keyCode >= 65 && event.keyCode <= 90)
    userLetterPressed(event.key);
    
}













