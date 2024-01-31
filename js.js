"use strict";

const rockButton = document.querySelector("button.rock");
const paperButton = document.querySelector("button.paper");
const scissorButton = document.querySelector("button.scissors");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

function getRandomChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(player1Choice, player2Choice) {
  if (player1Choice === player2Choice) {
    return "draw";
  } else if (
    (player1Choice === "rock" && player2Choice === "scissors") ||
    (player1Choice === "scissors" && player2Choice === "paper") ||
    (player1Choice === "paper" && player2Choice === "rock")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

function playGame(player1Choice) {
  player1.classList.add("shake");
  player2.classList.add("shake");

  player1.addEventListener("animationend", () => {
    player1.className = "player";
    player1.classList.add(player1Choice);

    const player2Choice = getRandomChoice();
    player2.className = "player";
    player2.classList.add(player2Choice);

    const result = determineWinner(player1Choice, player2Choice);
    document.getElementById(result).classList.remove("hidden");
    
    setTimeout(() => {
        document.getElementById(result).classList.add("hidden");
      }, 2000);
    }, { once: true });
  }

rockButton.addEventListener("click", () => playGame("rock"));
paperButton.addEventListener("click", () => playGame("paper"));
scissorButton.addEventListener("click", () => playGame("scissors"));

