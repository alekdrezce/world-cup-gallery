// Base de datos completa de los 22 mundiales
const mundiales = {
    "1930": { 
        pais: "Uruguay", 
        marca: "-", 
        detalles: "Camiseta de punto de algodón pesado, con cuello acordonado clásico." 
    },
    "1934": { 
        pais: "Italia", 
        marca: "-", 
        detalles: "Camiseta de lana ligera azul azzurra, escudo fasces bordado y cuello redondo." 
    },
    "1938": { 
        pais: "Italia", 
        marca: "-", 
        detalles: "Camiseta de algodón peinado azul, corte entallado y escudo de la Casa de Saboya." 
    },
    "1950": { 
        pais: "Uruguay", 
        marca: "-", 
        detalles: "Camiseta de algodón entallado celeste, cuello en \"V\" blanco y puños elásticos." 
    },
    "1954": { 
        pais: "Alemania", 
        marca: "-", 
        detalles: "Camiseta de algodón grueso blanco, cuello negro texturizado y ajuste acordonado." 
    },
    "1958": { 
        pais: "Brasil", 
        marca: "-", 
        detalles: "Camiseta de punto azul cortada a mano con escudo cosido artesanalmente." 
    },
    "1962": { 
        pais: "Brasil", 
        marca: "-", 
        detalles: "Camiseta de algodón amarillo vivo, cuello polo verde y escudo CBD bordado." 
    },
    "1966": { 
        pais: "Inglaterra", 
        marca: "Umbro", 
        detalles: "De algodón entrelazado rojo manga larga y cuello redondo." 
    },
    "1970": { 
        pais: "Brasil", 
        marca: "-", 
        detalles: "Camiseta de punto de algodón ligero amarillo canario, cuello redondo y puños verdes." 
    },
    "1974": { 
        pais: "Alemania", 
        marca: "-", 
        detalles: "Camiseta de poliéster y algodón blanco satinado, cuello redondo negro." 
    },
    "1978": { 
        pais: "Argentina", 
        marca: "Adidas", 
        detalles: "Camiseta de piqué técnico, bastones celestes/blancos y cuello redondo." 
    },
    "1982": { 
        pais: "Italia", 
        marca: "-", 
        detalles: "Camiseta de piqué de polialgodón azul, cuello polo y ribetes." 
    },
    "1986": { 
        pais: "Argentina", 
        marca: "Le Coq Sportif", 
        detalles: "Camiseta de poliester microperforado, cuello redondo y bastones." 
    },
    "1990": { 
        pais: "Alemania", 
        marca: "Adidas", 
        detalles: "Camiseta de poliéster brillante blanco, cuello polo y gráfico geométrico." 
    },
    "1994": { 
        pais: "Brasil", 
        marca: "Umbro", 
        detalles: "Camiseta de poliéster Jacquard amarillo, cuello polo y escudos en marca de agua." 
    },
    "1998": { 
        pais: "Francia", 
        marca: "Adidas", 
        detalles: "Camiseta de tejido técnico satinado azul Francia con cuello polo blanco, complementada con paneles de ventilación discretos en los costados." 
    },
    "2002": { 
        pais: "Brasil", 
        marca: "Nike", 
        detalles: "Camiseta de tejido de alto rendimiento amarillo vivo con paneles ergonómicos verdes, ventilación dinámica en los costados y doble capa interna transpirable." 
    },
    "2006": { 
        pais: "Italia", 
        marca: "Puma", 
        detalles: "Camiseta de licra elástica de ajuste ceñido al cuerpo azul azzurra con sutiles paneles de ventilación simétricos en color negro bajo las axilas." 
    },
    "2010": { 
        pais: "España", 
        marca: "Adidas", 
        detalles: "Camiseta de tejido técnico reciclado en tono azul marino, con cuello de solapas finas, detalles en contraste rojo y amarillo en los hombros, y el escudo nacional coronado por una estrella dorada bordada de emergencia para el partido definitivo." 
    },
    "2014": { 
        pais: "Alemania", 
        marca: "Adidas", 
        detalles: "Camiseta ultraligera de alto rendimiento blanca, con cuello redondo y una pronunciada \"V\" en el pecho estampada en degradé rojo y negro." 
    },
    "2018": { 
        pais: "Francia", 
        marca: "Nike", 
        detalles: "Camiseta de tejido técnico texturizado azul marino oscuro, con cuello de solapa abotonada que oculta la bandera nacional, un tramado gráfico en zig-zag azul claro en las mangas hiperdinámicas y un patrón interno de ventilación transpirable de última generación." 
    },
    "2022": { 
        pais: "Argentina", 
        marca: "Adidas", 
        detalles: "Camiseta de tejido ultraligero termo-regulado, cuello redondo, el Sol de Mayo estampado en la nuca y el escudo coronado por detalles dorados texturizados." 
    }
};

// Esperamos a que todo el HTML cargue antes de ejecutar el script
document.addEventListener("DOMContentLoaded", () => {
    // Capturamos los elementos del DOM
    const botones = document.querySelectorAll(".btn-mundial");
    const visor = document.getElementById("visor-3d");
    const fichaMundial = document.getElementById("ficha-mundial");
    const fichaCampeon = document.getElementById("ficha-campeon");
    const fichaMarca = document.getElementById("ficha-marca");
    const fichaDetalles = document.getElementById("ficha-detalles");

    // Le agregamos el evento click a cada botón
    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            const year = boton.getAttribute("data-year");
            const data = mundiales[year];

            if (data) {
                // Generamos la ruta (ej: Uruguay1930.glb)
                const nombreArchivo = `${data.pais}${year}.glb`;
                visor.src = `assets/camisetas/${nombreArchivo}`;

                // Actualizamos los textos de la ficha
                fichaMundial.textContent = `${data.pais === "Espana" ? "España" : data.pais} ${year}`;
                fichaCampeon.textContent = data.pais === "Espana" ? "España" : data.pais;
                fichaMarca.textContent = data.marca;
                fichaDetalles.textContent = data.detalles;
            }
        });
    });
});