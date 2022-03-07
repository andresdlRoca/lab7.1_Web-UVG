/*
*======================================
*   lecturaux.js
*   Andres de la Roca 20332
*   Ver 1.0
*   Sistemas y tecnologias web
*   Laboratorio 6
*======================================
*/

let article1 = document.createElement('article');
let headera1 = document.createElement('h3');
headera1.innerHTML = "Sobre el UX Design";
let parrafoa1 = document.createElement('p');
parrafoa1.innerHTML = "El UX Design es uno de los aspectos mas importantes al crear programas, aplicaciones, páginas web entre otros productos, este campo se enfoca en entender y empatizar con el usuario para comprender de una mejor manera como los usuarios se sentirán más cómodos al utilizar un producto. El proceso por el que pasa requiere de investigaciones minuciosas, prototipado y de muchas pruebas con usuarios para alcanzar la interacción ideal entre el usuario y el producto, las buenas interacciones entre usuarios y producto son una parte esencial en el posible éxito que puede tener el producto. ";
let imga1 = document.createElement('img');
imga1.src = "../../assets/uxdesign.jpg"
imga1.alt = "uxdesign";
imga1.width= "400";
article1.appendChild(headera1);
article1.appendChild(parrafoa1);
article1.appendChild(imga1);

let article2 = document.createElement('article');
let headera2 = document.createElement('h3');
headera2.innerHTML = "Algunos aspectos esenciales del UX Design";
let titlea2 = document.createElement('h5');
titlea2.innerHTML = "La empatía:"
let parrafoa2 = document.createElement('p');
parrafoa2.innerHTML = "Es importante a la hora de diseñar un producto entender cosas como, ¿Qué tipo de usuario utilizará este producto?, ¿Qué uso le dará a este producto?, preguntas como estas puede ayudar a diseñadores a crear un producto que el usuario pueda utilizar de una manera eficiente.";
let imagenempatia = document.createElement('img');
imagenempatia.src = "../../assets/empatia.jfif";
imagenempatia.alt = "empatia";
imagenempatia.width= "400";
let titlea21 = document.createElement('h5');
titlea21.innerHTML = "Los sentimientos del usuario:";
let parrafoa21 = document.createElement('p');
parrafoa21.innerHTML = "Es importante tener en cuenta los sentimientos del usuario al diseñar un producto ya que si esto no se toma en cuenta puede que el usuario pueda sentirse frustrado al utilizar el producto y que esto reduzca su eficiencia al trabajar, por lo que centrarse en los sentimientos que el usuario tiene al utilizar el producto es una parte importante del UX Design.";
let sentimientosimagen = document.createElement('img');
sentimientosimagen.src = "../../assets/sentimientos.jpg";
sentimientosimagen.alt = "sentimientos";
sentimientosimagen.width = "400";
let pruebastitulo = document.createElement('h5');
pruebastitulo.innerHTML = "Pruebas con usuarios:";
let pruebasparrafo = document.createElement('p');
pruebasparrafo.innerHTML = "Otro aspecto muy importante para el UX Design son las pruebas con usuarios,este es un paso esencial ya que permite que los diseñadores tengan la opinión del público objetivo para el uso del producto, esto puede ser clave para obtener una retroalimentación con la que los diseñadores puedan modificar su producto para crear la versión ideal del mismo.";
let pruebasimagen = document.createElement('img');
pruebasimagen.src = "../../assets/testing.jpg";
pruebasimagen.alt = "testing";
pruebasimagen.width = "400";
let article3 = document.createElement('article');
article2.appendChild(headera2);
article2.appendChild(titlea2);
article2.appendChild(parrafoa2);
article2.appendChild(imagenempatia);
article3.appendChild(titlea21);
article3.appendChild(parrafoa21);
article3.appendChild(sentimientosimagen);
article3.appendChild(pruebastitulo);
article3.appendChild(pruebasparrafo);
article3.appendChild(pruebasimagen);

let article4 = document.createElement('article');
let efectosux = document.createElement('h3');
efectosux.innerHTML = "Como afecta el UX Design a la interacción con los usuarios";
let parrafoefectos = document.createElement('p');
parrafoefectos.innerHTML = " El UX Design ayuda a que la interacción entre el usuario y el producto sea lo más sencilla posible, permitiéndole al usuario utilizar el producto de manera que aproveche todo lo que este tiene que ofrecer de una manera que se sienta natural para el usuario o por lo menos fácil de entender. La interacción de los usuarios cambia de una gran manera cuando el UX Design esta involucrado en el producto que utilizan ya que el UX Design propone darles a los usuarios una experiencia con el producto diseñada especialmente para ellos.";
let imagenui = document.createElement('img');
imagenui.src = "../../assets/userinteraction.jpg";
imagenui.alt = "userinteraction";
imagenui.width = "400";
article4.appendChild(efectosux);
article4.appendChild(parrafoefectos);
article4.appendChild(imagenui);

let linkindex = document.createElement('a');
linkindex.href = "../../index.html";
linkindex.innerHTML = "Ir hacia menu principal";

window.onload = function() {
    
    document.getElementById('articulo1').appendChild(article1);
    document.getElementById('articulo2').appendChild(article3);
    document.getElementById('articulo3').appendChild(article3);
    document.getElementById('articulo4').appendChild(article4);
    document.getElementById('links').appendChild(linkindex);
}