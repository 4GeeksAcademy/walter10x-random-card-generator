/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Obtener elementos de las partes de las cartas
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

  // Función para generar una nueva carta
  function generateCard() {
    const sticksIndex = sticks[Math.floor(Math.random() * sticks.length)];
    const valuesIndex =
      numbersValue[Math.floor(Math.random() * numbersValue.length)];
    numberRandom.textContent = valuesIndex;

    // Determinar si la opción es corazón y pintar de color rojo
    stickTop.textContent = sticksIndex;
    stickBottom.textContent = sticksIndex;
    if (sticksIndex === "♥" || sticksIndex === "♦") {
      // También debería incluir ♦ para rojo
      stickTop.style.color = "red";
      stickBottom.style.color = "red";
    }
  }

  // Llamar a la función para generar la primera carta
  generateCard();

  // Función para cambiar el tamaño de la carta
  function changeCardSize() {
    const widthValue = parseInt(document.getElementById("width-card").value);
    const heightValue = parseInt(document.getElementById("height-card").value);

    // Verificar si el valor de ancho está dentro del rango
    if (widthValue < 100 || widthValue > 700) {
      alert("El ancho debe estar entre 100 y 700.");
      return;
    }

    // Verificar si el valor de altura está dentro del rango
    if (heightValue < 350 || heightValue > 700) {
      alert("La altura debe estar entre 350 y 700.");
      return;
    }

    // Cambiar el tamaño de la carta
    const cardElement = document.getElementById("card1");
    cardElement.style.width = widthValue + "px";
    cardElement.style.height = heightValue + "px";
  }

  // Asignar la función changeCardSize al evento onclick del botón
  document.getElementById("btn3").onclick = changeCardSize;
};
