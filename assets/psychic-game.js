var wins = 0;
var losses = 0;
var guessesLeft = 0;
var letters = "abcdefghijklmnopqrstuvwxyz";
var array = [];
var letterSelect = letterSelect;

letterSelect = letters[Math.floor(Math.random() * letters.length)];
    console.log(letterSelect);

function Guess() {
    letterSelect = letters[Math.floor(Math.random() * letters.length)];
    console.log(letterSelect);
}

document.onkeyup = function (event) {
    var guess = event.key;

    if (guess === letterSelect) {
          wins++;
          attempts = 9;
          array = [];

    }

    Guess();
    if (guess !== letterSelect) {
          guessesLeft--;

    }

    if (guessesLeft == 0) {
        losses++;
        array = []
        guessesLeft = 9;
    }

    if (array.indexOf(guess) >= 0) {

    }

    else {
        array.push(guess);
        document.getElementById("lettersUsed").innerHTML = array;
        console.log(array);
    }

    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guessLeft").innerHTML = guessesLeft;

}