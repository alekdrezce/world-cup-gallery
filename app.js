// Base de datos de los mundiales (acá podés ir agregando todos los demás)
const mundiales = {
    "1930": {
        pais: "Uruguay",
        marca: "",
        detalles: ""
    },
    "1950": {
        pais: "Uruguay",
        marca: "",
        detalles: ""
    },
    "1986": {
        pais: "Argentina",
        marca: "",
        detalles: ""
    }
    // La estructura está lista para ir sumando los demás mundiales
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