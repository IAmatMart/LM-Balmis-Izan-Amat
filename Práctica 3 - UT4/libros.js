document.addEventListener("DOMContentLoaded", () => {
    fetch("libros.json")
        .then((response) => response.json())
        .then((data) => {
            const main = document.getElementsByTagName("main")[0];

            data.forEach((item) => {
                main.innerHTML += `
                    <div class="libro">
                        <h2>${item.titulo}</h2>
                        <img src="Caratulas/${item.imagen}" alt="${item.titulo}">
                        <p>${item.autor}</p>
                        <p>${item.genero} (${item.year})</p>
                    </div>
                `;
            });
        })
        .catch((error) => console.error("Error loading data:", error));
});
