"use strict";

var sala = document.createElement('img');
sala.src = "../../assets/sala.jpg";
sala.width = "300";
var parrafo = document.createElement('p');
parrafo.innerHTML = "Entras a la cabaña abandonada y ves una mesa con una vela parcialmente derretida, una nota y un lápiz… una puerta que va hacia un cuarto y unas gradas que se dirigen hacia lo que parece ser un sótano.";
var select = document.createElement('h4');
select.innerHTML = "¿Que haras?";
var sotanolink = document.createElement('a');
sotanolink.innerHTML = "Bajar hacia el sotano";
sotanolink.href = "../pagesotano/sotano1.html";
var audio = document.createElement('audio');
audio.src = "../../assets/scaryambience.mp3";
audio.autoplay = true;
audio.controls = false;
audio.volume = 0.5;
audio.loop = true;

window.onload = function () {
  document.getElementById('text').appendChild(parrafo);
  document.getElementById('text').appendChild(select);
  document.getElementById('link1').appendChild(sotanolink);
  document.getElementById('text').appendChild(audio);
};