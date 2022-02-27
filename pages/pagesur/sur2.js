let senderoimg = document.createElement('img');
senderoimg.src = "../../assets/sendero.jpg";
senderoimg.width = "300";

let parrafo = document.createElement('p');
parrafo.innerHTML = "Te acercas lentamente hacia la voz, cada vez se escucha mas fuerte y cuando crees que haz llegadoa la fuente de esta, para, empiezas a mirar alrededor hasta que por fin lo encuentras, encuentras el sendero por donde viniste, con gran alivio empiezas a caminar para regresar a casa.";

let linked = document.createElement('a');
linked.href = "southed.html";
linked.innerHTML = "Volver a casa";

window.onload = function() {
    document.getElementById('sur2').appendChild(senderoimg);
    document.getElementById('sur2').appendChild(parrafo);
    document.getElementById('sur2').appendChild(linked);
    
}