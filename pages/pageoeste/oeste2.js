let tronco = document.createElement('img');
tronco.src = "../../assets/troncohundido.jpg";
tronco.width = "300";

let parrafomain = document.createElement('p');
parrafomain.innerHTML = "Caminas hacia el bote, cada paso sobre el muelle hace que este se estremezca, tomas precaución de estopara no romper ninguna de las tablas… Finalmente te subes al bote y con un pequeño remo de madera que ya se encontraba dentro del bote empiezas a remar hacia la neblina.";

let parrafosec = document.createElement('p');
parrafosec.innerHTML = "A la distancia se ve un tronco gigante hundido en el lago, decides tomar esto como un punto de referencia.";

let select = document.createElement('h4');
select.innerHTML = "¿A donde iras?";

let linkderecha = document.createElement('a');
linkderecha.href = "oeste3D.html";
linkderecha.innerHTML = "A la derecha del tronco";

let linkizquierda = document.createElement('a');
linkizquierda.href ="oeste3I.html";
linkizquierda.innerHTML = "A la izquierda del tronco";

let linebreak1 = document.createElement('br');
let linebreak2 = document.createElement('br');

window.onload = function() {
    document.getElementById('oeste2').appendChild(tronco);
    document.getElementById('oeste2').appendChild(parrafomain);
    document.getElementById('oeste2').appendChild(linebreak1);
    document.getElementById('oeste2').appendChild(parrafosec);
    document.getElementById('oeste2').appendChild(linkderecha);
    document.getElementById('oeste2').appendChild(linebreak2);
    document.getElementById('oeste2').appendChild(linkizquierda);

}