'use strict';

loadMensajes("mensajes.txt");

function loadMensajes(fichero) {
    let http = new XMLHttpRequest();

    http.open("GET", fichero, true);

    http.onreadystatechange = function () {
        if (http.readyState === 4 && http.status === 200) {
            mostrarMensajes(http.responseText);
        }
    };

    http.send();
}

function mostrarMensajes(texto) {
    let chat = document.getElementById("chat");
    let mensajes = texto.split("\n");

    for (let i = 0; i < mensajes.length; i++) {
        let msg = mensajes[i].trim();

        if (msg !== "") {
            let div = document.createElement("div");
            div.classList.add("mensaje");

            // alterna izquierda / derecha
            if (i % 2 === 0) {
                div.classList.add("izquierda");
            } else {
                div.classList.add("derecha");
            }

            div.textContent = msg;
            chat.appendChild(div);
        }
    }
}