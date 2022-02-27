let imagenforest = document.createElement('img');
imagenforest.src = "../../assets/lostforest.jpg";
imagenforest.width = "300";

let parrafomain = document.createElement('p');
parrafomain.innerHTML = "Con tus piernas temblorosas regresas por el sendero por el que viniste solo para darte cuenta que… ya no está, frenéticamente intentas buscar el sendero tratado de recordar algún punto de referencia o algo con lo que guiarte hasta que… escuchas una voz a la distancia.";

let select = document.createElement('h4');
select.innerHTML = "¿Que haras?";

let linebreak1 = document.createElement('br');
let linebreak2 = document.createElement('br');

let linkmain = document.createElement('a');
linkmain.href="../pageMain/mainhistoria.html";
linkmain.innerHTML="Regresar al punto de inicio";

let surlink = document.createElement('a');
surlink.href="sur2.html";
surlink.innerHTML="Ir hacia la voz";

let voz = document.createElement('audio');
voz.autoplay = true;
voz.controls = false;
voz.src = "../../assets/whisper.mp3";

window.onload = function() {
    document.getElementById('sur1').appendChild(imagenforest);
    document.getElementById('sur1').appendChild(parrafomain);
    document.getElementById('sur1').appendChild(select);
    document.getElementById('sur1').appendChild(linkmain);
    document.getElementById('sur1').appendChild(linebreak1);
    document.getElementById('sur1').appendChild(surlink);
    document.getElementById('sur1').appendChild(linebreak2);
    document.getElementById('sur1').appendChild(voz);
    
}