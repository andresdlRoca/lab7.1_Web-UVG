/*
*======================================
*   indexContent.js
*   Andres de la Roca 20332
*   Ver 1.0
*   Sistemas y tecnologias web
*   Laboratorio 6
*======================================
*/

let header = document.createElement('h1');
header.innerHTML = "Menu Principal - Laboratorio 6";

let subtitle1 = document.createElement('h5');
subtitle1.innerHTML = "Andrés de la Roca - 20332";

let subtitle2 = document.createElement('h5');
subtitle2.innerHTML = "Sistemas y tecnologias web - Secciòn 20";

let select = document.createElement('p');
select.innerHTML = "Elige una de las siguientes opciones:";

let mainhistorialink = document.createElement('a');
mainhistorialink.href="pages/pageMain/mainhistoria.html";
mainhistorialink.innerHTML = "Ir hacia Antworten";

let lecturaauxlink = document.createElement('a');
lecturaauxlink.href = "pages/pagelecturaAux/lecturaux.html";
lecturaauxlink.innerHTML = "Ir hacia comentario sobre Benefits of Learning UX Design"

let htmllogo = document.createElement('img');
htmllogo.src="assets/htmllogo.png";
htmllogo.alt = "Logo de HTML";
htmllogo.width="300";

let menumusic = document.createElement('audio');
menumusic.src = "assets/menubg.mp3";
menumusic.controls = true;
menumusic.autoplay = false;
menumusic.loop = true;

linebreak = document.createElement('br');
linebreak2 = document.createElement('br');
linebreak3 = document.createElement('br');



window.onload = function() {
    document.getElementById('pageindex').appendChild(header);
    document.getElementById('pageindex').appendChild(subtitle1);
    document.getElementById('pageindex').appendChild(subtitle2);
    document.getElementById('pageindex').appendChild(select);
    document.getElementById('pageindex').appendChild(mainhistorialink);
    document.getElementById('pageindex').appendChild(linebreak);
    document.getElementById('pageindex').appendChild(lecturaauxlink);
    document.getElementById('pageindex').appendChild(linebreak2);
    document.getElementById('pageindex').appendChild(htmllogo);
    document.getElementById('pageindex').appendChild(linebreak3);
    document.getElementById('pageindex').appendChild(menumusic);

}