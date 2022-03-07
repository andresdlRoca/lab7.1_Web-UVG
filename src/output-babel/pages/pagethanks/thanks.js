"use strict";

var thanksimage = document.createElement('img');
thanksimage.src = "../../assets/playing.jpg";
thanksimage.width = "500";
var thanks = document.createElement('p');
thanks.innerHTML = "Gracias por jugar !";
var back = document.createElement('a');
back.href = "../../index.html";
back.innerHTML = "Volver al menu principal";

window.onload = function () {
  document.getElementById('text').appendChild(thanks);
  document.getElementById('link1').appendChild(back);
};