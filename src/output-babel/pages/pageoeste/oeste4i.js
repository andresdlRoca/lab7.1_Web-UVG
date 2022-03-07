"use strict";

var tenta = document.createElement('img');
tenta.src = "../../assets/tentaculo.jfif";
tenta.width = "300";
var parrafo = document.createElement('p');
parrafo.innerHTML = "De pronto, sientes una presion increiblemente fuerte en el pecho, cuando miras hacia abajo ves un tentaculo gigante... Con una gran fuerza este te jala hacia el agua y te hunde hasta el fondo del lago.";
var salir = document.createElement('a');
salir.href = "../../index.html";
salir.innerHTML = "Salir/Volver al menu principal";

window.onload = function () {
  document.getElementById('text').appendChild(parrafo);
  document.getElementById('link1').appendChild(salir);
};