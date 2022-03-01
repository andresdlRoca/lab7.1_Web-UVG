let hallway = document.createElement('img');
hallway.src = "../../assets/hallway.jpg";
hallway.width = "300";

let parrafo1 = document.createElement('p');
parrafo1.innerHTML = "Después de un tiempo lograste llegar a casa… pero algo no esta bien, desde ya hace tiempo vienes escuchando sonidos como pasos y susurros detrás de ti, alguien o algo te siguió a casa.";

let parrafo2 = document.createElement('p');
parrafo2.innerHTML = "Intentas abrir la puerta de tu apartamento, pero esta no abre,parece que se ha trabado, frenéticamente intentas abrirlamientras escuchas pasos que acercan, hasta que logras abrirla y estos se detienen.";

let parrafo3 = document.createElement('p');
parrafo3.innerHTML = "Echas llave en la puerta y te quedas en casa el resto del día... Sin embargo, en la noche cuando te fuiste a dormir algo se metió, no sabes que es, pero estas seguro que puedes ver algo que está parado en la esquina de tu cuarto.";

let corner = document.createElement('img');
corner.src = "../../assets/corner.jfif";
corner.width = "300";

let audio = document.createElement('audio');
audio.src = "../../assets/scaryambience.mp3";
audio.controls = false;
audio.loop = true;
audio.autoplay = true;
audio.volume = 0.5;

let menu = document.createElement('a');
menu.href = "../../index.html";
menu.innerHTML = "Salir/Volver al menu principal";

let linebreak1 = document.createElement('br');
let linebreak2 = document.createElement('br');
let linebreak3 = document.createElement('br');
let linebreak4 = document.createElement('br');

window.onload = function() {
    document.getElementById('text').appendChild(parrafo1);
    document.getElementById('text').appendChild(linebreak1);
    document.getElementById('text').appendChild(parrafo2);
    document.getElementById('text').appendChild(linebreak2);
    document.getElementById('text').appendChild(parrafo3);
    document.getElementById('text').appendChild(linebreak3);
    document.getElementById('text').appendChild(audio);
    document.getElementById('link1').appendChild(menu);


}