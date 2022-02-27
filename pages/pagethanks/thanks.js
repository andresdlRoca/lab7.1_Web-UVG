let thanksimage = document.createElement('img');
thanksimage.src = "../../assets/playing.jpg";
thanksimage.width="500";

let thanks = document.createElement('p');
thanks.innerHTML="Gracias por jugar !";

let back = document.createElement('a');
back.href="../../index.html";
back.innerHTML="Volver al menu principal"

window.onload = function() {
    document.getElementById('thanks').appendChild(thanksimage);
    document.getElementById('thanks').appendChild(thanks);
    document.getElementById('thanks').appendChild(back);
}