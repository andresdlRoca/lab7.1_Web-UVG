"use strict";

var img = document.createElement('img');
img.src = "../../assets/cabaña.jpg";
img.width = "300";
var parrafo = document.createElement('p');
parrafo.innerHTML = "Empiezas a remar hacia la derecha del tronco, continúas remando hasta que la niebla de comienza a despejar, encuentras lo que parece ser una cabaña a la distancia. Cuando llegas a la orilla del lago decides bajarte del bote ir hacia la cabaña.";
var linkcasa = document.createElement('a');
linkcasa.href = "../pageHut/hut.html";
linkcasa.innerHTML = "Ir hacia cabaña";

window.onload = function () {
  document.getElementById('text').appendChild(parrafo);
  document.getElementById('link1').appendChild(linkcasa);
};