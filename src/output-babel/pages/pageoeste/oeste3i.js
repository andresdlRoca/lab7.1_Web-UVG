"use strict";

var niebla = document.createElement('img');
niebla.src = "../../assets/nieblalago.jfif";
niebla.width = "300";
var parrafomain = document.createElement('p');
parrafomain.innerHTML = "Empiezas a remar hacia la izquierda del tronco… continuas remando sin embargo la niebla no parece disiparse, sigues remando y remando… Empiezas observar que frente tuya empieza a haber un burbujeo en el agua. ";
var select = document.createElement('h4');
select.innerHTML = "Deberia irme...";
var linkhola = document.createElement('a');
linkhola.href = "oeste4I.html";
linkhola.innerHTML = "Remar hacia el lado contrario";

window.onload = function () {
  document.getElementById('text').appendChild(parrafomain);
  document.getElementById('text').appendChild(select);
  document.getElementById('link1').appendChild(linkhola);
};