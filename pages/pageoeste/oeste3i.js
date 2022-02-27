let niebla = document.createElement('img');
niebla.src="../../assets/nieblalago.jfif";
niebla.width="300";

let parrafomain = document.createElement('p');
parrafomain.innerHTML="Empiezas a remar hacia la izquierda del tronco… continuas remando sin embargo la niebla no parece disiparse, sigues remando y remando… Empiezas observar que frente tuya empieza a haber un burbujeo en el agua. ";

let select = document.createElement('h4');
select.innerHTML = "Deberia irme";

let linkhola = document.createElement('a');
linkhola.href="oeste4I.html";
linkhola.innerHTML="Remar hacia el lado contrario";

window.onload = function() {
    document.getElementById('oeste3I').appendChild(niebla);
    document.getElementById('oeste3I').appendChild(parrafomain);
    document.getElementById('oeste3I').appendChild(select);
    document.getElementById('oeste3I').appendChild(linkhola);

}