// declare initial variable values
var wins = 0;
var losses = 0;
var guessesLeft = 7;
var userGuess = "";
// make an array of the alphabet
var alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");

// make an empty array of the letters already guessed by the user
var guessedLetters = [];
// decide on a random letter to be the target letter
function getRandomLetter(){
    return alphabet[(Math.random() * 25)];
}

var targetLetter = getRandomLetter();

do {
console.log(guessedLetters);
alert("Wins: " + wins + "<br>Losses: " + losses + "<br>Guesses left: " + guessesLeft + "<br>Already Guessed: <br>" + guessedLetters)
// get user guess
userGuess = prompt("Guess a letter");
// clean user input, ask for another guess if not a letter;

// check user input to make sure it is a new guess
while (guessedLetters.indexOf(userGuess) !== -1) {
    userGuess = prompt("Guess a new letter")
}

// if it is the correct letter, 
if (userGuess === targetLetter) {
// add 1 to wins, reset guesses and guess array to default
    wins++;
    guessesLeft = 7;
    guessedLetters = [];
// set a new random letter to be guessed
    targetLetter = getRandomLetter();
} else {
// if it is not the correct letter,
// add guess to guess array, reduce guesses left
    guessedLetters.push(userGuess);
    guessesLeft--;
// if there are no guesses left, increment losses, reset game
    if (guessesLeft <= 0) {
        alert("You Lose");
        losses++;
        guessesLeft = 7;
        guessedLetters = [];
        targetLetter = getRandomLetter();
    }
}
// else go back to getting user input
} while (userGuess);