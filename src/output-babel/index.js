"use strict";

require("core-js/modules/es.string.trim-start.js");

require("core-js/modules/es.string.trim-end.js");

require("core-js/modules/es.string.trim.js");

/*
*======================================
*   indexContent.js
*   Andres de la Roca 20332
*   Ver 1.0
*   Sistemas y tecnologias web
*   Laboratorio 6
*======================================
*/
var header = document.createElement('h1');
var headertxt = "  Menu Principal - Laboratorio 6";
headertxt = headertxt.trimStart();
console.log(headertxt);
header.innerHTML = headertxt;
var subtitle1 = document.createElement('h5');
subtitle1.innerHTML = "Andrés de la Roca - 20332  ".trimEnd();
var subtitle2 = document.createElement('h5');
subtitle2.innerHTML = "Sistemas y tecnologias web - Secciòn 20".trim();
var select = document.createElement('p');
select.innerHTML = "Elige una de las siguientes opciones:";
var mainhistorialink = document.createElement('a');
mainhistorialink.href = "pages/pageMain/mainhistoria.html";
mainhistorialink.innerHTML = "  Ir hacia Antworten  ".trim();
var lecturaauxlink = document.createElement('a');
lecturaauxlink.href = "pages/pagelecturaAux/lecturaux.html";
lecturaauxlink.innerHTML = "Ir hacia comentario sobre Benefits of Learning UX Design";
var htmllogo = document.createElement('img');
htmllogo.src = "assets/htmllogo.png";
htmllogo.alt = "Logo de HTML";
htmllogo.width = "300";
var menumusic = document.createElement('audio');
menumusic.src = "assets/menubg.mp3";
menumusic.controls = true;
menumusic.autoplay = false;
menumusic.loop = true;
menumusic.volume = 0.5;

window.onload = function () {
  document.getElementById('pageindex').appendChild(header);
  document.getElementById('pageindex').appendChild(subtitle1);
  document.getElementById('pageindex').appendChild(subtitle2);
  document.getElementById('pageindex').appendChild(select);
  document.getElementById('link1').appendChild(mainhistorialink);
  document.getElementById('link2').appendChild(lecturaauxlink);
  document.getElementById('image').appendChild(htmllogo);
  document.getElementById('player').appendChild(menumusic);
};