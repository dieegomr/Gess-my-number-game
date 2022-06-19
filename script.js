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

    // Correct number
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector("body").style.backgroundColor = "#228B22";
    if (score > highScore) {
      highScore = score;
      console.log(highScore);
      document.querySelector(".highscore").textContent = highScore;
    }
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "25rem";
  } else {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "⬆️ Too high!" : "⬇️ Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else if (guess !== secretNumber) {
      score = 0;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector("body").style.backgroundColor = "#FF0000";
    }
  }
});
