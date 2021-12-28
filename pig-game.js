"use strict";

const score0El = document.getElementById("score__0");
const score1El = document.getElementById("score__1");
const dice = document.querySelector(".dice");
const btn__new = document.querySelector(".btn__new");
const btn__roll = document.querySelector(".btn__roll");
const btn__hold = document.querySelector(".btn__hold");
const currentScore0 = document.querySelector("#current__0");
const currentScore1 = document.querySelector("#current__1");
const player0El = document.querySelector(".player__0");
const player1El = document.querySelector(".player__1");


// Game Conditions

const switchPlayer = function () {
    document.getElementById(`current__${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player__active");
    player1El.classList.toggle("player__active");
}

const scroes = [0, 0];
score__0.textContent = 0;
score__1.textContent = 0;
dice.classList.add("hidden");
let currentScore = 0;
let activePlayer = 0;

// dice roll functionality

btn__roll.addEventListener("click", () => {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove("hidden");
    dice.src = `dice-${diceNumber}.png`;

    if (diceNumber !== 1) {
        currentScore += diceNumber;
        document.getElementById(`current__${activePlayer}`).textContent = currentScore;
    } else {
        switchPlayer();
    }
});

// Score hold functionality

btn__hold.addEventListener("click", () => {
    scroes[activePlayer] += currentScore;
    document.getElementById(`score__${activePlayer}`).textContent = scroes[activePlayer];

    if (scroes[activePlayer] >= 20) {
        document.querySelector(`.player__${activePlayer}`).classList.add("player__winner");
        document.querySelector(`.player__${activePlayer}`).classList.remove("player__active");
        document.querySelector(`#name__${activePlayer}`).textContent = `Winner`;
    } else {
        switchPlayer();

    }
});

// Reset hold functionality

btn__new.addEventListener("click", () => {
    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;
    dice.classList.add("hidden");
    player0El.classList.remove("player__winner");
    player1El.classList.remove("player__winner");
    player0El.classList.add("player__active");
    player1El.classList.remove("player__active");


});