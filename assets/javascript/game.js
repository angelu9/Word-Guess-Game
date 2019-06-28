var bandsList = ["metallica", "scorpions", "pantera", "eagles", "supertramp"];
var chosenWord = "";
var lettersInChosenWord = [];
var guessesLeft = 7;
var wins = 0;
var losses = 0;
var blanks = 0;
var rightGuess = [];
var wrongGuess = [];



function startGame() {

    guessesLeft = 7;
    

    chosenWord = bandsList[Math.floor(Math.random() * bandsList.length)];

    lettersInChosenWord = chosenWord.split("");

    blanks = lettersInChosenWord.length;

    console.log(chosenWord);

    rightGuess = [];
    wrongGuess = [];


    for (var i = 0; i < blanks; i++) {
        rightGuess.push("_")
    }
    console.log(rightGuess);

    
    document.getElementById("guesses-left").textContent = guessesLeft;
    document.getElementById("blanks").textContent = rightGuess.join(" ");
    document.getElementById("already-guessed").textContent = wrongGuess.join(" ");

        
}

function rightLetter(letter) {

    var letterInWord = false;
    for (var i = 0; i < blanks; i++) {
        if (chosenWord[i] === letter) {
            letterInWord = true;
        }
    }

    if (letterInWord) {
        for (var j = 0; j < blanks; j++) {
            if (chosenWord[j] === letter) {
                rightGuess[j] = letter;
            } 
        }

        console.log(rightGuess);
    }
    
    else {
        wrongGuess.push(letter);
        guessesLeft--;
    }

}



