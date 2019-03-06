# The Egyptian Mummy Word Guess Game
A Word Guess Game similar to Hangman utilizing HTML5, CSS3, Bootstrap4, and Javascript. 

# How the game works
An array of words provides the current hidden word. Each word is presented in random order. As letters are guessed correctly they are filled in until the user either fills in the entire word and wins or runs out of the 10 guesses available. A start game button with an .addEventListener allows users to begin the game with all variables reset to their default values. As users press keyboard letters a document.onkeyup event captures the key and runs the letter chosen through a function to compare that letter to those in the current hidden word. Letters that match those within the word are filled in while letters that do not match the hidden word are pushed to an empty array and displayed as letters already guessed. Using two seperate functions containing if statements the game checks for a loss and a win. As letters are guessed incorrectly the user decreases the amount of guesses left. If guesses left becomes 0 the game ends and all variables are reset. If the user correctly guesses the word. The wins score increases and a new word is generated. The game continues on. 

# Game Rules
1. Start the game by pressing the Press here to start a new game button.
2. Then using the keyboard the user can press any letter key to guess the letters in the current word.
3. The user has 10 guesses to complete the hidden word before losing and a new game begins.
4. If the user completes the hidden word, they win and the score increases to 1. A new word is generated and the game continues.

# Demo
![2019-03-06 2](https://user-images.githubusercontent.com/46547100/53903294-553a0c00-4011-11e9-941e-3b6b4b7fac11.png)
