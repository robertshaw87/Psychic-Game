// declare initial variable values
var wins = 0;
var losses = 0;
// this is the number of guesses the user has
var guessesAllotted = 7;
var guessesLeft, guessedLetters, targetLetter, userGuess;
// make an array of the alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
console.log(alphabet);
alphabet = alphabet.split("");

// gets a random element from an array
function getRandomElement(inputArray){
    return inputArray[(Math.floor(Math.random() * inputArray.length))];
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
    getElem("playerMessage").textContent = "";
    userGuess = userInput.key;
    userGuess = userGuess.toUpperCase();
    console.log("User Guess: " + userGuess);

    // ignore any key that isn't a letter or has already been guessed
    if (-1 === alphabet.indexOf(userGuess)) {
        getElem("playerMessage").textContent = "Please guess a letter between A-Z.";
    } else {
    if (-1 != guessedLetters.indexOf(userGuess)) {
        getElem("playerMessage").textContent = "You have already guessed " + userGuess;

    // if the guess was a letter that hasn't been guessed yet
    } else {   
        
        // if the guess was correct
        if (userGuess === targetLetter) {
            // increase the number of wins and reset the game to a new game
            console.log("You win!");
            wins += 1;
            getElem("playerMessage").textContent = "You guessed the correct letter! It was " + targetLetter + "!";
            gameReset();
        
        // if the guess was incorrect
        } else {
            // add the guess to the list of already guessed letters, reduce the guesses the user has left
            guessedLetters.push(userGuess);
            guessesLeft -= 1;
            getElem("playerChoices").textContent = guessedLetters.join(" ");
            console.log("You missed!")
            
            // if the user has no guesses left
            if (guessesLeft <= 0) {

                // increase the number of losses, reset the game to a new game
                losses += 1;
                getElem("playerMessage").textContent = "You ran out of guesses! The correct letter was " + targetLetter + "!";
                gameReset();
                console.log("You lose!");
            }
        }}
    }

    getElem("wins").textContent = wins;
    getElem("losses").textContent = losses;
    getElem("guesses").textContent = guessesLeft;
}