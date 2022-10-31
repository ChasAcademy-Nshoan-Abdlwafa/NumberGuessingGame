let num_guesses = 1;
submitGuess.addEventListener("click", checkGuess);
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random Number", randomNumber);

function checkGuess() {
  let myGuess = guess.value;
  let parsedValue = parseInt(myGuess);
  if (parsedValue === randomNumber) {
    feedback.textContent = "You got it right!";
  } else if (num_guesses >= 5) {
    feedback.textContent = "You're out of attempts! Game over.";
  } else if (parsedValue > 100) {
    feedback.textContent = "Too high! Guess between 0-100.";
    document.getElementById("guesses").innerHTML +=
      "" + num_guesses + ". " + parsedValue + " (too high) <br/>";
  } else if (parsedValue < 0) {
    feedback.textContent = "Too low! Guess between 0-100.";
    document.getElementById("guesses").innerHTML +=
      "" + num_guesses + ". " + parsedValue + " (too low) <br/>";
  } else if (parsedValue > randomNumber) {
    feedback.textContent =
      "You need to guess lower than " + parsedValue + ". Try again.";
    document.getElementById("guesses").innerHTML +=
      "" + num_guesses + ". " + parsedValue + " (too high) <br/>";
  } else if (parsedValue < randomNumber) {
    feedback.textContent =
      "You need to guess higher than " + parsedValue + ". Try again.";
    document.getElementById("guesses").innerHTML +=
      "" + num_guesses + ". " + parsedValue + " (too low) <br/>";
  }
  num_guesses++;
}
