"use strict";

var parrafomain = document.createElement('p');
parrafomain.innerHTML = "Con tus piernas temblorosas regresas por el sendero por el que viniste solo para darte cuenta que… ya no está, frenéticamente intentas buscar el sendero tratado de recordar algún punto de referencia o algo con lo que guiarte hasta que… escuchas una voz a la distancia.";
var select = document.createElement('h4');
select.innerHTML = "¿Que haras?";
var linebreak1 = document.createElement('br');
var linebreak2 = document.createElement('br');
var linkmain = document.createElement('a');
linkmain.href = "../pageMain/mainhistoria.html";
linkmain.innerHTML = "Regresar al punto de inicio";
var surlink = document.createElement('a');
surlink.href = "sur2.html";
surlink.innerHTML = "Ir hacia la voz";
var voz = document.createElement('audio');
voz.autoplay = true;
voz.controls = false;
voz.src = "../../assets/whisper.mp3";

window.onload = function () {
  document.getElementById('text').appendChild(parrafomain);
  document.getElementById('text').appendChild(select);
  document.getElementById('link1').appendChild(linkmain);
  document.getElementById('link1').appendChild(linebreak1);
  document.getElementById('link2').appendChild(surlink);
  document.getElementById('link2').appendChild(linebreak2);
  document.getElementById('text').appendChild(voz);
};