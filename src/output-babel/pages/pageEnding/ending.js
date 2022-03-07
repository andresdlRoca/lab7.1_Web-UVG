"use strict";

var redeyes = document.createElement('img');
redeyes.src = "../../assets/eyes.png";
var parrafo = document.createElement('p');
parrafo.innerHTML = "Sigues bajando las gradas y el sotano parece ser mucho mas grande de lo que la cabaña en su totalidad es... notas un sonido extraño a tu derecha por lo que volteas a ver y ves unos ojos brillantes de color rojo que lentamente se van acercando a ti... Parece que al final has logrado encontrar la respuesta que tanto buscabas... ";
var linkthanks = document.createElement("a");
linkthanks.href = "../pagethanks/thanks.html";
linkthanks.innerHTML = "Continuar";

window.onload = function () {
  document.getElementById('text').appendChild(parrafo);
  document.getElementById('link1').appendChild(linkthanks);
};