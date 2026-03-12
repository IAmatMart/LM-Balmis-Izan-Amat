function Ejercicio4(array1, array2) {
    let contador = 0;

    array1.forEach(function Ejercicio4(nombre) {
        if (array2.includes(nombre)) {
            contador++;
        }
    });

    if (contador === array1.length) 
    {
        console.log("Todos los nombres del primer array están en el segundo.");
    } else if (contador === 0) 
    {
        console.log("Ningún nombre del primer array está en el segundo.");
    } else 
    {
        console.log("Algunos nombres del primer array están en el segundo.");
    }
}