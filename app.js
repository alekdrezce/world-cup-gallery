// Base de datos de los mundiales (acá podés ir agregando todos los demás)
// Base de datos completa de los 22 mundiales
const mundiales = {
    "1930": { pais: "Uruguay", marca: "", detalles: "" },
    "1934": { pais: "Italia", marca: "", detalles: "" },
    "1938": { pais: "Italia", marca: "", detalles: "" },
    "1950": { pais: "Uruguay", marca: "", detalles: "" },
    "1954": { pais: "Alemania", marca: "", detalles: "" },
    "1958": { pais: "Brasil", marca: "", detalles: "" },
    "1962": { pais: "Brasil", marca: "", detalles: "" },
    "1966": { pais: "Inglaterra", marca: "", detalles: "" },
    "1970": { pais: "Brasil", marca: "", detalles: "" },
    "1974": { pais: "Alemania", marca: "", detalles: "" },
    "1978": { pais: "Argentina", marca: "", detalles: "" },
    "1982": { pais: "Italia", marca: "", detalles: "" },
    "1986": { pais: "Argentina", marca: "", detalles: "" },
    "1990": { pais: "Alemania", marca: "", detalles: "" },
    "1994": { pais: "Brasil", marca: "", detalles: "" },
    "1998": { pais: "Francia", marca: "", detalles: "" },
    "2002": { pais: "Brasil", marca: "", detalles: "" },
    "2006": { pais: "Italia", marca: "", detalles: "" },
    "2010": { pais: "Espana", marca: "", detalles: "" }, // Sin la "ñ" para evitar problemas si usás esto en nombres de archivo
    "2014": { pais: "Alemania", marca: "", detalles: "" },
    "2018": { pais: "Francia", marca: "", detalles: "" },
    "2022": { pais: "Argentina", marca: "", detalles: "" }
};

// Esperamos a que todo el HTML cargue antes de ejecutar el script
document.addEventListener("DOMContentLoaded", () => {
    // Capturamos los elementos del DOM (HTML) que vamos a modificar
    const botones = document.querySelectorAll(".btn-mundial");
    const visor = document.getElementById("visor-3d");
    const fichaMundial = document.getElementById("ficha-mundial");
    const fichaCampeon = document.getElementById("ficha-campeon");
    const fichaMarca = document.getElementById("ficha-marca");
    const fichaDetalles = document.getElementById("ficha-detalles");

    // Le agregamos un evento de "click" a cada botón
    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            // Obtenemos el año desde el atributo data-year del botón (ej: "1930")
            const year = boton.getAttribute("data-year");
            const data = mundiales[year];

            if (data) {
                // 1. Construimos la ruta exacta siguiendo tu regla: Pais + Año (ej: Uruguay1930)
                const nombreArchivo = `${data.pais}${year}.glb`;
                
                // 2. Actualizamos el visor 3D
                visor.src = `assets/camisetas/${nombreArchivo}`;

                // 3. Actualizamos los textos de la ficha técnica
                fichaMundial.textContent = `${data.pais} ${year}`;
                fichaCampeon.textContent = data.pais;
                fichaMarca.textContent = data.marca;
                fichaDetalles.textContent = data.detalles;
            }
        });
    });
});