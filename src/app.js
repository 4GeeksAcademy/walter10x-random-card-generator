/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const sticks = ["Corazones", "Picas", "Treboles", "Diamantes"];
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

  console.log(sticks);
  console.log(numbersValue);

  const sticksIndex = sticks[Math.floor(Math.random() * sticks.length)];
  const valuesIndex =
    numbersValue[Math.floor(Math.random() * numbersValue.length)];
  console.log(sticksIndex);
  console.log(valuesIndex);
};
