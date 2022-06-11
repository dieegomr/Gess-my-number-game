"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start guessing...";
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  // Falsy value
  if (!guess) {
    document.querySelector(".message").textContent =
      "🚫 Choose a number between 1 and 20";

    // Guess greater than secret number
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "⬆️ Too high!";
      score--;
      document.querySelector(".score").textContent = score;

      // Lost the game
    } else {
      score = 0;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector("body").style.backgroundColor = "#FF0000";
    }

    // Guess less than secret number
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "⬇️ Too low!";
      score--;
      document.querySelector(".score").textContent = score;
      // Lost the game
    } else {
      score = 0;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector("body").style.backgroundColor = "#FF0000";
    }

    // Corrrect guesss
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector("body").style.backgroundColor = "#228B22";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "25rem";
  }
});
