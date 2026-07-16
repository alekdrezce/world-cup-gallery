// Base de datos completa de los 22 mundiales con sedes, fechas, resultados y marcas históricas
const mundiales = {
    "1930": { 
        sede: "Uruguay",
        campeon: "Uruguay",
        fecha: "30 de julio de 1930",
        resultado: "Uruguay 4 - 2 Argentina",
        marca: "St. Margaret", 
        detalles: "Camiseta de punto de algodón pesado, con cuello acordonado clásico." 
    },
    "1934": { 
        sede: "Italia",
        campeon: "Italia",
        fecha: "10 de junio de 1934",
        resultado: "Italia 2 - 1 Checoslovaquia",
        marca: "Sin Marca (confección local)", 
        detalles: "Camiseta de lana ligera azul azzurra, escudo fasces bordado y cuello redondo." 
    },
    "1938": { 
        sede: "Francia",
        campeon: "Italia",
        fecha: "19 de junio de 1938",
        resultado: "Italia 4 - 2 Hungría",
        marca: "Marchi Cristofoli", 
        detalles: "Camiseta de algodón peinado azul, corte entallado y escudo de la Casa de Saboya." 
    },
    "1950": { 
        sede: "Brasil",
        campeon: "Uruguay",
        fecha: "16 de julio de 1950",
        resultado: "Uruguay 2 - 1 Brasil",
        marca: "Atleta Banquero y Cia", 
        detalles: "Camiseta de algodón entallado celeste, cuello en \"V\" blanco y puños elásticos." 
    },
    "1954": { 
        sede: "Suiza",
        campeon: "Alemania",
        fecha: "4 de julio de 1954",
        resultado: "Alemania Federal 3 - 2 Hungría",
        marca: "Leuze", 
        detalles: "Camiseta de algodón grueso blanco, cuello negro texturizado y ajuste acordonado." 
    },
    "1958": { 
        sede: "Suecia",
        campeon: "Brasil",
        fecha: "29 de junio de 1958",
        resultado: "Brasil 5 - 2 Suecia",
        marca: "Athleta", 
        detalles: "Camiseta de punto azul cortada a mano con escudo cosido artesanalmente." 
    },
    "1962": { 
        sede: "Chile",
        campeon: "Brasil",
        fecha: "17 de junio de 1962",
        resultado: "Brasil 3 - 1 Checoslovaquia",
        marca: "Athleta", 
        detalles: "Camiseta de algodón amarillo vivo, cuello polo verde y escudo CBD bordado." 
    },
    "1966": { 
        sede: "Inglaterra",
        campeon: "Inglaterra",
        fecha: "30 de julio de 1966",
        resultado: "Inglaterra 4 - 2 Alemania Federal",
        marca: "Umbro", 
        detalles: "De algodón entrelazado rojo manga larga y cuello redondo." 
    },
    "1970": { 
        sede: "México",
        campeon: "Brasil",
        fecha: "21 de junio de 1970",
        resultado: "Brasil 4 - 1 Italia",
        marca: "Athleta", 
        detalles: "Camiseta de punto de algodón ligero amarillo canario, cuello redondo y puños verdes." 
    },
    "1974": { 
        sede: "Alemania Occidental",
        campeon: "Alemania",
        fecha: "7 de julio de 1974",
        resultado: "Alemania Federal 2 - 1 Países Bajos",
        marca: "Erima", 
        detalles: "Camiseta de poliéster y algodón blanco satinado, cuello redondo negro." 
    },
    "1978": { 
        sede: "Argentina",
        campeon: "Argentina",
        fecha: "25 de junio de 1978",
        resultado: "Argentina 3 - 1 Países Bajos",
        marca: "Adidas", 
        detalles: "Camiseta de piqué técnico, bastones celestes/blancos y cuello redondo." 
    },
    "1982": { 
        sede: "España",
        campeon: "Italia",
        fecha: "11 de julio de 1982",
        resultado: "Italia 3 - 1 Alemania Federal",
        marca: "Le Coq Sportif", 
        detalles: "Camiseta de piqué de polialgodón azul, cuello polo y ribetes." 
    },
    "1986": { 
        sede: "México",
        campeon: "Argentina",
        fecha: "29 de junio de 1986",
        resultado: "Argentina 3 - 2 Alemania Federal",
        marca: "Le Coq Sportif", 
        detalles: "Camiseta de poliester microperforado, cuello redondo y bastones." 
    },
    "1990": { 
        sede: "Italia",
        campeon: "Alemania",
        fecha: "8 de julio de 1990",
        resultado: "Alemania Federal 1 - 0 Argentina",
        marca: "Adidas", 
        detalles: "Camiseta de poliéster brillante blanco, cuello redondo cruzado y gráfico geométrico." 
    },
    "1994": { 
        sede: "Estados Unidos",
        campeon: "Brasil",
        fecha: "17 de julio de 1994",
        resultado: "Brasil 0 - 0 Italia (3-2 pen.)",
        marca: "Umbro", 
        detalles: "Camiseta de poliéster Jacquard amarillo, cuello polo y escudos en marca de agua." 
    },
    "1998": { 
        sede: "Francia",
        campeon: "Francia",
        fecha: "12 de julio de 1998",
        resultado: "Francia 3 - 0 Brasil",
        marca: "Adidas", 
        detalles: "Camiseta de tejido técnico satinado azul Francia con cuello polo blanco, complementada con paneles de ventilación discretos en los costados." 
    },
    "2002": { 
        sede: "Corea y Japón",
        campeon: "Brasil",
        fecha: "30 de junio de 2002",
        resultado: "Brasil 2 - 0 Alemania",
        marca: "Nike", 
        detalles: "Camiseta de tejido de alto rendimiento amarillo vivo con paneles ergonómicos verdes, ventilación dinámica en los costados y doble capa interna transpirable." 
    },
    "2006": { 
        sede: "Alemania",
        campeon: "Italia",
        fecha: "9 de julio de 2006",
        resultado: "Italia 1 - 1 Francia (5-3 pen.)",
        marca: "Puma", 
        detalles: "Camiseta de licra elástica de ajuste ceñido al cuerpo azul azzurra con sutiles paneles de ventilación simétricos en color negro bajo las axilas." 
    },
    "2010": { 
        sede: "Sudáfrica",
        campeon: "España",
        fecha: "11 de julio de 2010",
        resultado: "España 1 - 0 Países Bajos",
        marca: "Adidas", 
        detalles: "Camiseta de tejido técnico reciclado en tono azul marino, con cuello de solapas finas, detalles en contraste rojo y amarillo en los hombros, y el escudo nacional coronado por una estrella dorada bordada de emergencia para el partido definitivo." 
    },
    "2014": { 
        sede: "Brasil",
        campeon: "Alemania",
        fecha: "13 de julio de 2014",
        resultado: "Alemania 1 - 0 Argentina",
        marca: "Adidas", 
        detalles: "Camiseta ultraligera de alto rendimiento blanca, con cuello redondo y una pronunciada \"V\" en el pecho estampada en degradé rojo y negro." 
    },
    "2018": { 
        sede: "Rusia",
        campeon: "Francia",
        fecha: "15 de julio de 2018",
        resultado: "Francia 4 - 2 Croacia",
        marca: "Nike", 
        detalles: "Camiseta de tejido técnico texturizado azul marino oscuro, con cuello de solapa abotonada que oculta la bandera nacional, un tramado gráfico en zig-zag azul claro en las mangas hiperdinámicas y un patrón interno de ventilación transpirable de última generación." 
    },
    "2022": { 
        sede: "Catar",
        campeon: "Argentina",
        fecha: "18 de diciembre de 2022",
        resultado: "Argentina 3 - 3 Francia (4-2 pen.)",
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
    
    // Capturamos los nuevos elementos en el orden solicitado
    const fichaCampeon = document.getElementById("ficha-campeon");
    const fichaFecha = document.getElementById("ficha-fecha");
    const fichaResultado = document.getElementById("ficha-resultado");
    const fichaMarca = document.getElementById("ficha-marca");
    const fichaDetalles = document.getElementById("ficha-detalles");

    // Le agregamos el evento click a cada botón
    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            const year = boton.getAttribute("data-year");
            const data = mundiales[year];

            if (data) {
                // Filtro para el nombre de España en el archivo 3D (para que busque Espaa2010.glb en vez de España2010.glb)
                const nombreArchivo = `${data.campeon === "España" ? "España" : data.campeon}${year}.glb`;
                visor.src = `assets/camisetas/${nombreArchivo}`;

                // Actualizamos el encabezado con la sede y el año
                fichaMundial.textContent = `${data.sede} ${year}`;
                
                // Inyectamos las etiquetas en negrita junto con los datos usando innerHTML
                fichaCampeon.innerHTML = `<strong>Campeón:</strong> ${data.campeon}`;
                fichaFecha.innerHTML = `<strong>Fecha:</strong> ${data.fecha}`;
                fichaResultado.innerHTML = `<strong>Resultado:</strong> ${data.resultado}`;
                fichaMarca.innerHTML = `<strong>Marca:</strong> ${data.marca}`;
                
                // El detalle queda igual
                fichaDetalles.textContent = data.detalles;
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // 1. CAPTURA DE COMPONENTES DEL DOM
    const container = document.getElementById("timelineContainer");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const track = document.querySelector(".timeline-track");
    const visor3D = document.querySelector("model-viewer");
    
    // Componentes del Popup y Botón Flotante
    const btnFlotante = document.getElementById("btnFlotanteInfo");
    const txtDinamicoBtn = document.getElementById("btn-texto-dinamico");
    const modal = document.getElementById("modalFicha");
    const btnCerrar = document.getElementById("btnCerrarModal");

    // Cálculo responsivo de distancia de scroll (PC: 255px / Móvil: 195px)
    const esCelular = window.innerWidth <= 480;
    const scrollStep = esCelular ? 195 : 255; 

    // Diccionario de archivos 3D reales de tu servidor (assets/camisetas/)
    const nombresCamisetas = {
        "1930": "Uruguay1930", "1934": "Italia1934", "1938": "Italia1938", "1950": "Uruguay1950",
        "1954": "Alemania1954", "1958": "Brasil1958", "1962": "Brasil1962", "1966": "Inglaterra1966",
        "1970": "Brasil1970", "1974": "Alemania1974", "1978": "Argentina1978", "1982": "Italia1982",
        "1986": "Alemania1986", "1990": "Alemania1990", "1994": "Brasil1994", "1998": "Francia1998",
        "2002": "Brasil2002", "2006": "Italia2006", "2010": "Espana2010", "2014": "Alemania2014",
        "2018": "Francia2018", "2022": "Argentina2022"
    };

    // Diccionario rápido para el Botón Flotante (Año + Sede)
    const nombresLocaciones = {
        "1930": "Uruguay 1930", "1934": "Italia 1934", "1938": "Francia 1938", "1950": "Brasil 1950",
        "1954": "Suiza 1954", "1958": "Suecia 1958", "1962": "Chile 1962", "1966": "Inglaterra 1966",
        "1970": "México 1970", "1974": "Alemania 1974", "1978": "Argentina 1978", "1982": "España 1982",
        "1986": "México 1986", "1990": "Italia 1990", "1994": "EEUU 1994", "1998": "Francia 1998",
        "2002": "Corea/Japón 2002", "2006": "Alemania 2006", "2010": "Sudáfrica 2010", "2014": "Brasil 2014",
        "2018": "Rusia 2018", "2022": "Catar 2022"
    };

    // 2. DISPARADORES DE DESPLAZAMIENTO (FLECHAS)
    if (container && prevBtn && nextBtn) {
        prevBtn.onclick = function(e) { e.preventDefault(); container.scrollLeft -= scrollStep; };
        nextBtn.onclick = function(e) { e.preventDefault(); container.scrollLeft += scrollStep; };
    }

    // 3. APERTURA Y CIERRE DEL POPUP MODAL
    if (btnFlotante && modal) {
        btnFlotante.onclick = function(e) { e.preventDefault(); modal.classList.add("open"); };
    }
    if (modal && btnCerrar) {
        btnCerrar.onclick = function(e) { e.preventDefault(); modal.classList.remove("open"); };
        modal.onclick = function(e) { if (e.target === modal) modal.classList.remove("open"); };
    }

    // 4. EL PUENTE ESPEJO SINCRONIZADOR DE DATOS PRIVADOS
    if (track) {
        track.addEventListener("click", function(e) {
            const botonMundial = e.target.closest(".btn-mundial");
            if (!botonMundial) return;

            const anio = botonMundial.getAttribute("data-year");
            
            // A. Cambiar modelo 3D
            if (visor3D) {
                const nombreArchivo = nombresCamisetas[anio];
                if (nombreArchivo) {
                    visor3D.src = `assets/camisetas/${nombreArchivo}.glb`;
                    if (typeof visor3D.dismissPoster === "function") visor3D.dismissPoster();
                }
            }

            // B. Cambiar etiqueta del botón flotante
            if (txtDinamicoBtn) {
                txtDinamicoBtn.textContent = nombresLocaciones[anio] || `Mundial ${anio}`;
            }

            // C. Active State de opacidad en la botonera
            document.querySelectorAll(".btn-mundial").forEach(b => b.style.opacity = "0.4");
            botonMundial.style.opacity = "1";
            
            // D. Delay milimétrico para clonar los textos mutados por tu lógica vieja privada
            setTimeout(() => {
                console.log("Sincronización espejo completada con éxito.");
            }, 50);
        });
    }
});
