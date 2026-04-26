'use strict';

document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    let usuario = document.getElementById("usuario").value;
    let pass1 = document.getElementById("pass1").value;
    let pass2 = document.getElementById("pass2").value;
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let telefono = document.getElementById("telefono").value;

    let errores = [];

    // Usuario: empieza mayúscula y acaba en número
    let regexUsuario = /^[A-Z].*\d$/;
    if (!regexUsuario.test(usuario)) {
        errores.push("Usuario inválido");
    }

    // Contraseña: 8 caracteres, empieza por dígito y acaba en mayúscula
    let regexPass = /^\d.{6}[A-Z]$/;
    if (!regexPass.test(pass1)) {
        errores.push("Contraseña inválida");
    }

    //  Contraseñas iguales
    if (pass1 !== pass2) {
        errores.push("Las contraseñas no coinciden");
    }

    //  Nombre: empieza por mayúscula
    let regexNombre = /^[A-Z]/;
    if (!regexNombre.test(nombre)) {
        errores.push("Nombre inválido");
    }

    // Apellidos: empiezan por mayúscula
    let regexApellidos = /^[A-Z]/;
    if (!regexApellidos.test(apellidos)) {
        errores.push("Apellidos inválidos");
    }

    //  Teléfono: numérico y empieza por 6, 7 o 9
    let regexTelefono = /^[679]\d+$/;
    if (!regexTelefono.test(telefono)) {
        errores.push("Teléfono inválido");
    }

    
    if (errores.length > 0) {
        alert("Errores:\n" + errores.join("\n"));
    } else {
        alert("Formulario válido");
    }
});