// declare initial variable values
var wins = 0;
var losses = 0;
var guessesAllotted = 7;
var guessesLeft, guessedLetters, targetLetter, userGuess;
// make an array of the alphabet
var alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");

// decide on a random letter to be the target letter
function getRandomLetter(){
    return alphabet[(Math.floor(Math.random() * 25))];
}

// make an empty array of the letters already guessed by the user
// resets the gamestate to the default without affecting wins and losses
function gameReset(){
    guessesLeft = guessesAllotted;
    guessedLetters = [""];
    targetLetter = getRandomLetter();
    console.log("Target: " + targetLetter);
}

gameReset();

do {
console.log(guessedLetters);
alert("Wins: " + wins + "\nLosses: " + losses + "\nGuesses left: " + guessesLeft + "\nAlready Guessed: \n" + guessedLetters)
// get user guess
userGuess = prompt("Guess a letter");
// clean user input, ask for another guess if not a letter;

// check user input to make sure it is a new guess
while (guessedLetters.indexOf(userGuess) !== -1) {
    userGuess = prompt("Guess a new letter, you've already guessed \n" + guessedLetters)
}

// if it is the correct letter, 
if (userGuess === targetLetter) {
// add 1 to wins, reset guesses and guess array to default
    wins++;
// set a new random letter to be guessed
    gameReset();
} else {
// if it is not the correct letter,
// add guess to guess array, reduce guesses left
    guessedLetters.push(userGuess);
    guessesLeft--;
// if there are no guesses left, increment losses, reset game
    if (guessesLeft <= 0) {
        alert("You Lose");
        losses++;
        gameReset();
    }
}
// else go back to getting user input
} while (userGuess || (userGuess === ""));