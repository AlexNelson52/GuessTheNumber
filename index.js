'use strict';

const h1 = document.getElementById('header')

const btn = document.getElementById("genBtn")

const inputValue = playerInput.value;
const generatedNumber = (Math.round(Math.random() * 100))

function game() {

  const playerInput = document.getElementById("playerInput");
  const inputValue = Number(playerInput.value);
  console.log(inputValue)

  if (inputValue === generatedNumber) {
    h1.innerText = `You Win! The number was ${generatedNumber}! Click Reset Game to play again.`,
      btn.setAttribute("disabled", "");
  }
  if (inputValue > generatedNumber) {
    h1.innerText = `Lower`;
  }
  if (inputValue < generatedNumber) {
    h1.innerText = 'Higher';
  }



};
