"use strict";

var tronco = document.createElement('img');
tronco.src = "../../assets/troncohundido.jpg";
tronco.width = "300";
var parrafomain = document.createElement('p');
parrafomain.innerHTML = "Caminas hacia el bote, cada paso sobre el muelle hace que este se estremezca, tomas precaución de estopara no romper ninguna de las tablas… Finalmente te subes al bote y con un pequeño remo de madera que ya se encontraba dentro del bote empiezas a remar hacia la neblina.";
var parrafosec = document.createElement('p');
parrafosec.innerHTML = "A la distancia se ve un tronco gigante hundido en el lago, decides tomar esto como un punto de referencia.";
var select = document.createElement('h4');
select.innerHTML = "¿A donde iras?";
var linkderecha = document.createElement('a');
linkderecha.href = "oeste3D.html";
linkderecha.innerHTML = "A la derecha del tronco";
var linkizquierda = document.createElement('a');
linkizquierda.href = "oeste3I.html";
linkizquierda.innerHTML = "A la izquierda del tronco";
var linebreak1 = document.createElement('br');
var linebreak2 = document.createElement('br');

window.onload = function () {
  document.getElementById('text').appendChild(parrafomain);
  document.getElementById('text').appendChild(linebreak1);
  document.getElementById('text').appendChild(parrafosec);
  document.getElementById('link1').appendChild(linkderecha);
  document.getElementById('link2').appendChild(linebreak2);
  document.getElementById('link2').appendChild(linkizquierda);
};