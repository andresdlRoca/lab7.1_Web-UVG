let redeyes = document.createElement('img');
redeyes.src= "../../assets/eyes.png";

let parrafo = document.createElement('p');
parrafo.innerHTML= "Sigues bajando las gradas y el sotano parece ser mucho mas grande de lo que la cabaña en su totalidad es... notas un sonido extraño a tu derecha por lo que volteas a ver y ves unos ojos brillantes de color rojo que lentamente se van acercando a ti... Parece que al final has logrado encontrar la respuesta que tanto buscabas... ";

let linkthanks = document.createElement("a");
linkthanks.href = "../pagethanks/thanks.html";
linkthanks.innerHTML ="Continuar";

window.onload = function() {
    document.getElementById('ending').appendChild(redeyes);
    document.getElementById('ending').appendChild(parrafo);
    document.getElementById('ending').appendChild(linkthanks);
}