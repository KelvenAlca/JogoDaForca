const words = ["javascript", "html", "css", "desenvolvedor", "programar"];
const maxGuesses = 6;

let currentWord = "";
let guessedWord = "";
let remainingGuesses = maxGuesses;

function selectRandomWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    guessedWord = "_".repeat(currentWord.length);
    remainingGuesses = maxGuesses;
}

function displayWord() {
    document.getElementById("word-display").textContent = guessedWord;
    document.getElementById("remaining-guesses").textContent = remainingGuesses;
}

function guessLetter() {
    const letterInput = document.getElementById("letter-input");
    const letter = letterInput.value.toLowerCase();

    if (letter.length !== 1) {
        return;
    }

    if (currentWord.includes(letter)) {
        for (let i = 0; i < currentWord.length; i++) {
            if (currentWord[i] === letter) {
                guessedWord = guessedWord.substring(0, i) + letter + guessedWord.substring(i + 1);
            }
        }
    } else {
        remainingGuesses--;
    }

    letterInput.value = "";
    displayWord();
    
    if (guessedWord === currentWord) {
        document.getElementById("message-text").textContent = "Parabéns, você ganhou!";
        document.getElementById("guess-button").disabled = true;
    } else if (remainingGuesses === 0) {
        document.getElementById("message-text").textContent = "Você perdeu! A palavra era: " + currentWord;
        document.getElementById("guess-button").disabled = true;
    }
}

selectRandomWord();
displayWord();

document.getElementById("guess-button").addEventListener("click", guessLetter);
