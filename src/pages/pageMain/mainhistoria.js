let bosqueimg = document.createElement('img');
bosqueimg.src = "../../assets/forestmain.jpg";
bosqueimg.alt = "forest image";
bosqueimg.width = "300";

let parrafomain = document.createElement('p');
parrafomain.innerHTML = "Luego de una gran caminata haz llegado por fin al bosque en donde ha desaparecido tu hermano hace tantos años… Con gran valentía, una linterna en mano y una mochila te adentras a lo profundo de este bosque tan tenebroso en busca de respuestas y con la esperanza de por fin encontrar paz en tu corazón, o quizás en busca de algo mas…?";

let linebreak1 = document.createElement('br');

let parrafoselect = document.createElement('p');
parrafoselect.innerHTML="Ves que los senderos que van hacia el este y el norte estan bloqueado por troncos caidos por lo que solo te queda ir hacia el oeste... o quizas regresar a casa.";

let select = document.createElement('h4');
select.innerHTML="¿Adonde iras?";

let oestelink = document.createElement('a');
oestelink.href="../pageoeste/oeste1.html";
oestelink.innerHTML = "Iré hacia el oeste";

let linebreak3 = document.createElement('br');

let surlink = document.createElement('a');
surlink.href="../pagesur/sur1.html";
surlink.innerHTML = "Regresare a casa..."

let audio = document.createElement('audio');
audio.controls = false;
audio.autoplay = true;
audio.src = "../../assets/scaryforest.wav";

let linebreak2 = document.createElement('br');

let menuvolver = document.createElement('a');
menuvolver.href="../../index.html";
menuvolver.innerHTML="Salir/Volver al menu principal";

let linebreak4 = document.createElement('br')

window.onload = function() {
    document.getElementById('text').appendChild(parrafomain);
    document.getElementById('text').appendChild(linebreak1);
    document.getElementById('text').appendChild(parrafoselect);
    document.getElementById('text').appendChild(select);
    document.getElementById('link1').appendChild(oestelink);
    document.getElementById('link1').appendChild(linebreak3);
    document.getElementById('link2').appendChild(surlink);
    document.getElementById('link2').appendChild(linebreak2);
    document.getElementById('link3').appendChild(menuvolver);
    document.getElementById('link3').appendChild(linebreak4);
    document.getElementById('text').appendChild(audio);
}