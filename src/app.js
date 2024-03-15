/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // obetener elementos de las partes de las cartas
  const stickTop = document.getElementById("stick-top");
  const numberRandom = document.getElementById("numberRandomix");
  const stickBottom = document.getElementById("stick-bottom");

  const sticks = ["♥", "♠", "♣", "♦"];
  const numbersValue = [
    "As",
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

  const sticksIndex = sticks[Math.floor(Math.random() * sticks.length)];
  const valuesIndex =
    numbersValue[Math.floor(Math.random() * numbersValue.length)];
  numberRandom.textContent = valuesIndex;
  // determinar si la opcion es corazon pintar de color rojo
  stickTop.textContent = sticksIndex;
  stickBottom.textContent = sticksIndex;
  if (sticksIndex === "♥" || sticksIndex === "♦") {
    // También debería incluir ♦ para rojo
    stickTop.style.color = "red";
    stickBottom.style.color = "red";
  }
};
