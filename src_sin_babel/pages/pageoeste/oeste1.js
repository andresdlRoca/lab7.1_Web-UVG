let muelle = document.createElement('img');
muelle.src="../../assets/muelle.jpg";
muelle.width="300";

let parrafo = document.createElement('p');
parrafo.innerText = "Empiezas a caminar hacia el oeste cuando te topas con un lago, también encuentras un bote junto a un pequeño muelle";

let select = document.createElement('h4');
select.innerHTML="¿Qué haras?";

let linkmain = document.createElement('a');
linkmain.href = "../pageMain/mainhistoria.html";
linkmain.innerHTML="Regresar al punto inicial";

let seguir = document.createElement('a');
seguir.href = "oeste2.html";
seguir.innerHTML = "Subirse al bote y continuar";

let linebreak1 = document.createElement('br');

window.onload = function() {
    document.getElementById('text').appendChild(parrafo);
    document.getElementById('text').appendChild(select);
    document.getElementById('link1').appendChild(linkmain);
    document.getElementById('link2').appendChild(linebreak1);
    document.getElementById('link2').appendChild(seguir);
}
