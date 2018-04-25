// declare initial variable values
var wins = 0;
var losses = 0;
// this is the number of guesses the user has
var guessesAllotted = 7;
var guessesLeft, guessedLetters, targetLetter, userGuess;
// make an array of the alphabet
var alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");

// gets a random element from an array
function getRandomElement(inputArray){
    return inputArray[(Math.floor(Math.random() * (inputArray.length - 1)))];
}

// decide on a random letter to be the target letter
// make an empty array of the letters already guessed by the user
// resets the gamestate to the default without affecting wins and losses
function gameReset(){
    guessesLeft = guessesAllotted;
    guessedLetters = [];
    targetLetter = getRandomElement(alphabet);
    console.log("Target: " + targetLetter);
    getElem("wins").textContent = wins;
    getElem("losses").textContent = losses;
    getElem("guesses").textContent = guessesLeft;
    getElem("playerChoices").textContent = "";
}

// get a pointer to an element in the html when provided with a link
function getElem(id) {
    return document.getElementById(id);
}

// reset the game to the new game state
gameReset();


// When a key is pressed and released:
document.onkeyup = function(userInput) {
    getElem("playerWins").textContent = "";
    userGuess = userInput.key;
    userGuess = userGuess.toLowerCase();
    console.log("User Guess: " + userGuess);

    // ignore any key that isn't a letter or has already been guessed
    if ((-1 != alphabet.indexOf(userGuess)) && (-1 === guessedLetters.indexOf(userGuess))) {
        
        // if the guess was correct
        if (userGuess === targetLetter) {
            // increase the number of wins and reset the game to a new game
            console.log("You win!");
            wins += 1;
            getElem("playerWins").textContent = "You guessed the correct letter! It was " + targetLetter + "!";
            gameReset();
        
        // if the guess was incorrect
        } else {
            // add the guess to the list of already guessed letters, reduce the guesses the user has left
            guessedLetters.push(userGuess);
            guessesLeft -= 1;
            console.log("You missed!");
            getElem("playerChoices").textContent = guessedLetters;
            
            // if the user has no guesses left
            if (guessesLeft <= 0) {

                // increase the number of losses, reset the game to a new game
                losses += 1;
                getElem("playerWins").textContent = "You ran out of guesses! The correct letter was " + targetLetter + "!";
                gameReset();
                console.log("You lose!");
                
            }
        }
    }

    getElem("wins").textContent = wins;
    getElem("losses").textContent = losses;
    getElem("guesses").textContent = guessesLeft;
}
// console.log(guessedLetters);
// alert("Wins: " + wins + "\nLosses: " + losses + "\nGuesses left: " + guessesLeft + "\nAlready Guessed: \n" + guessedLetters)
// // get user guess
// userGuess = prompt("Guess a letter");
// // clean user input, ask for another guess if not a letter;

// // check user input to make sure it is a new guess
// while (guessedLetters.indexOf(userGuess) !== -1) {
//     userGuess = prompt("Guess a new letter, you've already guessed \n" + guessedLetters)
// }

// // if it is the correct letter, 
// if (userGuess === targetLetter) {
// // add 1 to wins, reset guesses and guess array to default
//     wins++;
// // set a new random letter to be guessed
//     gameReset();
// } else {
// // if it is not the correct letter,
// // add guess to guess array, reduce guesses left
//     guessedLetters.push(userGuess);
//     guessesLeft--;
// // if there are no guesses left, increment losses, reset game
//     if (guessesLeft <= 0) {
//         alert("You Lose");
//         losses++;
//         gameReset();
//     }
// }
// // else go back to getting user input
// }