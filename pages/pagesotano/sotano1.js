let img = document.createElement('img');
img.src = "../../assets/staircase.jpg";
img.width = "300";

let parrafo = document.createElement('p');
parrafo.innerHTML = "Te adentras al sotano, sin embargo cuando empiezas a bajar las gradas notas un olor desagradable proveniente de mas abajo... Tienes un mal presentimiento sobre el seguir bajando, te cuestionas el continuar... ";

let select = document.createElement('h4');
select.innerHTML = "¿Estas seguro de querer continuar?";

let linkending = document.createElement('a');
linkending.href = "../pageEnding/ending.html";
linkending.innerHTML = "Si";

let linkhut = document.createElement('a');
linkhut.href= "../pageHut/hut.html";
linkhut.innerHTML="No";

let linebreak = document.createElement('br');

window.onload = function() {
    document.getElementById('sotano1').appendChild(img);
    document.getElementById('sotano1').appendChild(parrafo);
    document.getElementById('sotano1').appendChild(select);
    document.getElementById('sotano1').appendChild(linkending);
    document.getElementById('sotano1').appendChild(linebreak);
    document.getElementById('sotano1').appendChild(linkhut);
}