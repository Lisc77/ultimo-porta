/* =====================================================
   LUMICUP - SCRIPT PRINCIPAL
   ===================================================== */


/* =====================================================
   SIMULADOR DE TEMPERATURA
   ===================================================== */

const temperatura = document.getElementById("temperatura");
const valorTemperatura = document.getElementById("valorTemperatura");
const vaso = document.getElementById("vaso");
const mensajeTemperatura = document.getElementById("mensajeTemperatura");


function actualizarTemperatura() {

    if (!temperatura || !vaso) {
        return;
    }

    const valor = Number(temperatura.value);

    if (valorTemperatura) {
        valorTemperatura.textContent = valor;
    }


    if (valor <= 10) {

        vaso.style.background = "#51CFFA";

        if (mensajeTemperatura) {
            mensajeTemperatura.textContent =
                "Bebida fría: LumiCup muestra un color celeste.";
        }

    }

    else if (valor <= 25) {

        vaso.style.background = "#8988ED";

        if (mensajeTemperatura) {
            mensajeTemperatura.textContent =
                "Temperatura templada: LumiCup muestra un color violeta.";
        }

    }

    else if (valor <= 40) {

        vaso.style.background = "#FB5ECB";

        if (mensajeTemperatura) {
            mensajeTemperatura.textContent =
                "Bebida caliente: LumiCup muestra un color rosa.";
        }

    }

    else {

        vaso.style.background = "#9C45D9";

        if (mensajeTemperatura) {
            mensajeTemperatura.textContent =
                "Bebida muy caliente: LumiCup muestra un color morado.";
        }

    }

}


if (temperatura) {

    temperatura.addEventListener(
        "input",
        actualizarTemperatura
    );

    actualizarTemperatura();

}


/* =====================================================
   EVENTO CLICK
   ===================================================== */

const demoClick = document.getElementById("demoClick");
const resultadoClick = document.getElementById("resultadoClick");


if (demoClick) {

    demoClick.addEventListener("click", function() {

        resultadoClick.textContent =
            "¡Correcto! JavaScript detectó el evento click.";

    });

}


/* =====================================================
   EVENTO HOVER
   ===================================================== */

const demoHover = document.getElementById("demoHover");
const resultadoHover = document.getElementById("resultadoHover");


if (demoHover) {

    demoHover.addEventListener(
        "mouseenter",
        function() {

            demoHover.style.transform = "scale(1.05)";

            if (resultadoHover) {
                resultadoHover.textContent =
                    "Evento mouseenter detectado: el mouse entró al elemento.";
            }

        }
    );


    demoHover.addEventListener(
        "mouseleave",
        function() {

            demoHover.style.transform = "scale(1)";

            if (resultadoHover) {
                resultadoHover.textContent =
                    "Evento mouseleave detectado: el mouse salió del elemento.";
            }

        }
    );

}


/* =====================================================
   EJEMPLO JSON
   ===================================================== */

const mostrarJSON = document.getElementById("mostrarJSON");
const resultadoJSON = document.getElementById("resultadoJSON");


if (mostrarJSON) {

    mostrarJSON.addEventListener("click", function() {

        const producto = {

            nombre: "LumiCup",

            precio: 12.99,

            disponible: true,

            colores: [
                "rosa",
                "morado",
                "celeste"
            ]

        };


        const datosJSON =
            JSON.stringify(producto, null, 4);


        resultadoJSON.textContent = datosJSON;

    });

}


/* =====================================================
   CUESTIONARIO
   ===================================================== */

const formularioQuiz =
    document.getElementById("formularioQuiz");


if (formularioQuiz) {

    formularioQuiz.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const respuestasCorrectas = {

                p1: "b",
                p2: "a",
                p3: "b",
                p4: "a",
                p5: "a",
                p6: "c",
                p7: "a",
                p8: "b",
                p9: "a",
                p10: "a"

            };


            let puntuacion = 0;


            for (let pregunta in respuestasCorrectas) {

                const seleccion =
                    document.querySelector(
                        `input[name="${pregunta}"]:checked`
                    );


                if (
                    seleccion &&
                    seleccion.value ===
                    respuestasCorrectas[pregunta]
                ) {

                    puntuacion++;

                }

            }


            const resultadoQuiz =
                document.getElementById("resultadoQuiz");


            let mensaje = "";


            if (puntuacion === 10) {

                mensaje =
                    "🌟 ¡Excelente! Respondiste correctamente las 10 preguntas.";

            }

            else if (puntuacion >= 7) {

                mensaje =
                    "👏 ¡Muy bien! Tienes un buen dominio de los temas.";

            }

            else if (puntuacion >= 5) {

                mensaje =
                    "👍 Buen trabajo. Puedes repasar las páginas informativas para mejorar.";

            }

            else {

                mensaje =
                    "📚 Sigue estudiando. Te recomendamos revisar nuevamente las páginas.";

            }


            resultadoQuiz.innerHTML =
                `<strong>Resultado: ${puntuacion}/10</strong><br>${mensaje}`;


            resultadoQuiz.style.background =
                puntuacion >= 5
                    ? "rgba(81, 207, 250, 0.15)"
                    : "rgba(251, 94, 203, 0.15)";

        }
    );

}