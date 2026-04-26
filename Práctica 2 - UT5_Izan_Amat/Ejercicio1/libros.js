loadLDocA("libros.xml")

function loadLDocA(fichero)
{
    let http = new XMLHttpRequest(); //Se crea petición al servidor
    http.open("GET",fichero,true); //Se pide procesar el fichero. Continua la ejecución hasta recibir la respuesta
    //http.setRequestHeader("Content-type", "text/xml");
    http.send();

    http.addEventListener('load', (event) => {  //Cuando se reciba la respuesta, se ejecuta esta función
        if(http.status === 200) {
            if(fichero.split(".")[1] == "xml")
            {
                gestionarFicheroXML(http.responseXML)
            }
            else
            {
			    gestionarFicheroTXT(http.responseText)
            }
		}})
}





function gestionarFicheroXML(xml) {
    let capa = document.querySelector(".cont");

    let libros = xml.querySelectorAll("libro");


    let tablaLibros = "<table border='1'>";

    tablaLibros += "<td>Título</td><td>Precio</td><td>Autores</td><td>Fecha</td><td>Editorial</td>";

    libros.forEach(libro => {
        tablaLibros += "<tr>";

        tablaLibros += "<td>" + libro.querySelector("titulo").textContent + "</td>";

        tablaLibros += "<td>" + libro.querySelector("precio").textContent + "</td>";

        tablaLibros += "<td>" + libro.querySelector("autores").textContent + "</td>";

        tablaLibros += "<td>" + libro.querySelector("fechaPublicacion").textContent + "</td>";

        tablaLibros += "<td>" + libro.querySelector("editorial").textContent + "</td>";

        tablaLibros += "</tr>";
    });



    tablaLibros += "</table>";
    capa.innerHTML = tablaLibros;
}