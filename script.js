"use strict";
// DOM Variables
let message = document.querySelector(".message");
let score = document.querySelector(".score");
let highscore = document.querySelector(".highscore");
let number = document.querySelector(".number");
let guess = document.querySelector(".guess");
let randomNumber = Math.floor(Math.random() * 20) + 1;
let title = document.getElementsByTagName("h1")[0];

//  Initial Context Variable (higher score storage)
if (highscore.textContent < localStorage.getItem(highscore))
  highscore.textContent = localStorage.getItem(highscore);

// Refactoring to avoid duplicate code
const displayMessage = (newMessage) => {
  message.textContent = newMessage;
};

// Principal Function That Makes the Number Validation
const validation = (num) => {
  if (!num) {
    displayMessage("🦕 Choose a number");
  } else if (randomNumber == num) {
    displayMessage("Congratulations⚡🎆🎉🎉🎉!!!");
    number.textContent = guess.value;
    document.body.style.backgroundColor = "purple";
    document.querySelector(".number").style.width = "30rem";
    if (localStorage.getItem(highscore) < score.textContent) {
      localStorage.setItem(highscore, score.textContent);
      highscore.textContent = score.textContent;
    }
  } else if (num > randomNumber && score.textContent > 0) {
    displayMessage("Your number is too high! Try Again!");
    score.textContent--;
  } else if (num < randomNumber && score.textContent > 0) {
    displayMessage("Your number is too low! Try Again!");
    score.textContent--;
  } else {
    displayMessage("¡Game Over!");
    title.textContent = "¡Game Over!";
    document.body.style.backgroundColor = "#60b347";
    score.textContent = 0;
  }
};

// Call function when click the button
const checkNumber = () => {
  validation(guess.value);
};

// Allow to submit a number with 'Enter' keypress function
document.querySelector(".guess").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    checkNumber();
  }
});

const playAgain = () => {
  window.location.reload();
};
