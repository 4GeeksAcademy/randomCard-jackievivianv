/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function jugar() {
  //write your code here

  const cardsNumbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const cardsPalos = ["♦", "♥", "♠", "♣"];

  const randomCards = Math.floor(Math.random() * cardsNumbers.length);
  const randomPalos = Math.floor(Math.random() * cardsPalos.length);

  document.getElementById("numero").innerHTML = cardsNumbers[randomCards];

  if (randomPalos === 0 || randomPalos === 1) {
    document.getElementById(
      "iconosPalos"
    ).innerHTML = `<span class="text-danger"> ${cardsPalos[randomPalos]} </span>`;
    document.getElementById(
      "iconosPalosBajo"
    ).innerHTML = `<span class="text-danger"> ${cardsPalos[randomPalos]} </span>`;
  } else {
    document.getElementById("iconosPalos").innerHTML = cardsPalos[randomPalos];
    document.getElementById("iconosPalosBajo").innerHTML =
      cardsPalos[randomPalos];
  }

  let button = document.getElementById("boton");

  button.addEventListener("click", function() {
    jugar();
  });
};
