const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotCloseBtn = document.querySelector(".close-btn");

let userMessage;
let questionNum = 0; // Contador de preguntas
const inputInitHeight = chatInput.scrollHeight;

//======================================================
//      VOZ DEL CHATBOT
//======================================================

function hablar(texto) {

    if (!('speechSynthesis' in window)) return;

    // Detener cualquier voz anterior
    window.speechSynthesis.cancel();

    const mensaje = new SpeechSynthesisUtterance(texto);

    mensaje.lang = "es-MX";
    mensaje.rate = 1;
    mensaje.pitch = 1;
    mensaje.volume = 1;

    const voces = window.speechSynthesis.getVoices();

    const voz =
        voces.find(v => v.lang === "es-MX") ||
        voces.find(v => v.lang === "es-ES") ||
        voces.find(v => v.lang.startsWith("es"));

    if (voz) {
        mensaje.voice = voz;
    }

    window.speechSynthesis.speak(mensaje);
}

window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
};

//======================================================
//      MENSAJES DEL CHAT
//======================================================

const createChatLi = (message, className) => {

    const chatLi = document.createElement("li");

    chatLi.classList.add("chat", className);

    let chatContent =
        className === "saliente"
            ? `<p></p>`
            : `<span class="material-symbols-outlined"><i class="fa-solid fa-robot"></i></span><p></p>`;

    chatLi.innerHTML = chatContent;

    chatLi.querySelector("p").textContent = message;

    // Leer respuestas del bot
    if (className === "entrante") {
        hablar(message);
    }

    return chatLi;
};

const createChatLi2 = (message, className) => {

    const chatLi = document.createElement("li");

    chatLi.classList.add("chat", className);

    let chatContent =
        className === "saliente"
            ? `<p></p>`
            : `<span style="visibility:hidden" class="material-symbols-outlined"></span><p></p>`;

    chatLi.innerHTML = chatContent;

    chatLi.querySelector("p").textContent = message;

    if (className === "entrante") {
        hablar(message);
    }

    return chatLi;
};

const createChatLi3 = (message, className) => {

    const chatLi = document.createElement("li");

    chatLi.classList.add("chat", className);

    let chatContent =
        className === "saliente"
            ? '<p></p>'
            : '<span style="visibility:hidden" class="material-symbols-outlined"></span><p><a target="_blank" href="https://tlokenahuaque.github.io/DiagramasUCS/Docs/Directorio.html">createChatLi3</a></p>';

    chatLi.innerHTML = chatContent;

    if (className === "entrante") {

        chatLi.querySelector("a").textContent = message;

        hablar(message);

    } else {

        chatLi.querySelector("p").textContent = message;

    }

    return chatLi;
};

const createChatLi4 = (message, className) => {

    const chatLi = document.createElement("li");

    chatLi.classList.add("chat", className);

    let chatContent =
        className === "saliente"
            ? '<p></p>'
            : '<span style="visibility:hidden" class="material-symbols-outlined"></span><p><a target="_blank" href="https://tlokenahuaque.github.io/DiagramasUCS/index.html">createChatLi3</a></p>';

    chatLi.innerHTML = chatContent;

    if (className === "entrante") {

        chatLi.querySelector("a").textContent = message;

        hablar(message);

    } else {

        chatLi.querySelector("p").textContent = message;

    }

    return chatLi;
};

const setQuestionNumber = (userMessage) => {

    const mentionRegex = /(hola|buenos d|buenas no|buenas ta|R11|R4)/i;

    const specificWord1 = /(unidad de c|de contacto|secretario|UCS)/i;
    const specificWord2 = /(asuntos|internos|ext queja contra|ext. queja contra|pretor|extension queja|extensión queja)/i;
    const specificWord3 = /(ext brigada|ext. brigada|extension brigada|extensión brigada|ext vigilan|ext. vigilan|extension vigilan|extensión vigilan|ext animal|ext. animal|extension animal|extensión animal|ext bva|ext. bva|extension bva|extensión bva)/i;
    const specificWord4 = /(asuntos|internos|ext queja contra|ext. queja contra|pretor|extension queja|extensión queja)/i;
    const specificWord5 = /(asuntos|internos|ext queja contra|ext. queja contra|pretor|extension queja|extensión queja)/i;

    if (mentionRegex.test(userMessage)) {

        questionNum = 0;

    } else if (specificWord1.test(userMessage)) {

        questionNum = 1;

    } else if (specificWord2.test(userMessage)) {

        questionNum = 2;

    } else if (specificWord3.test(userMessage)) {

        questionNum = 3;

    } else if (specificWord4.test(userMessage)) {

        questionNum = 4;

    } else if (specificWord5.test(userMessage)) {

        questionNum = 5;

    } else {

        questionNum = 5;

    }

};

const generateResponse = (userMessage) => {

    // Establece el número de pregunta
    setQuestionNumber(userMessage);

    switch (questionNum) {

        //==================================================
        // SALUDO
        //==================================================

        case 0:

            return "¡Hola! Es un gusto conocerte. ¿En qué te puedo ayudar?";

        //==================================================
        // UNIDAD DE CONTACTO
        //==================================================

        case 1:

            setTimeout(() => {

                const response =
                    "Estamos ubicados en Arcos de Belén 79, primer piso, colonia Centro, alcaldía Cuauhtémoc, C.P. 06000.\n\n" +
                    "Contamos con más canales para la recepción de solicitudes ciudadanas como lo son:\n\n" +
                    "Correo: ucontacto@ssc.cdmx.gob.mx\n" +
                    "WhatsApp: 55 4331 9636\n" +
                    "Twitter: @UCS_GCDMX\n" +
                    "SUAC y la aplicación Mi Policía.";

                const entranteChatLi = createChatLi2(response, "entrante");

                chatbox.appendChild(entranteChatLi);

                chatbox.scrollTo(0, chatbox.scrollHeight);

                // Leer respuesta
                hablar(response);

            }, 100);

            setTimeout(() => {

                const response =
                    "Es un gusto atenderte. ¿Requieres algo más?";

                const entranteChatLi = createChatLi(response, "entrante");

                chatbox.appendChild(entranteChatLi);

                chatbox.scrollTo(0, chatbox.scrollHeight);

                hablar(response);

            }, 1000);

            return "Nuestro número telefónico es 55 5209 9898. Tenemos servicio los 365 días del año, las 24 horas del día.";

        //==================================================
        // ASUNTOS INTERNOS
        //==================================================

        case 2:

            setTimeout(() => {

                const response =
                    "¿Deseas buscar otra extensión?";

                const entranteChatLi = createChatLi(response, "entrante");

                chatbox.appendChild(entranteChatLi);

                chatbox.scrollTo(0, chatbox.scrollHeight);

                hablar(response);

            }, 1000);

            return "La extensión de Asuntos Internos es 1121, 1122 y 1160.";

        //==================================================
        // DIAGRAMAS
        //==================================================

        case 3:

            setTimeout(() => {

                const response =
                    "[Haz clic para abrir los diagramas]";

                const entranteChatLi =
                    createChatLi4(response, "entrante");

                chatbox.appendChild(entranteChatLi);

                chatbox.scrollTo(0, chatbox.scrollHeight);

                hablar(response);

            }, 100);

            setTimeout(() => {

                const response =
                    "¿Requieres algo más?";

                const entranteChatLi =
                    createChatLi(response, "entrante");

                chatbox.appendChild(entranteChatLi);

                chatbox.scrollTo(0, chatbox.scrollHeight);

                hablar(response);

            }, 1000);

            return "Por supuesto. Te puedo mostrar algunos diagramas.";

        //==================================================
        // DESPEDIDA
        //==================================================

        case 4:

            return "Es un gusto ayudarte. Estoy a tu servicio. Si me necesitas, estaré por aquí.";

        //==================================================
        // RESPUESTA POR DEFECTO
        //==================================================

        default:

            return "No entiendo la pregunta o aún no conozco sobre ese tema. Inténtalo nuevamente, por favor.";

    }

};

//==================================================
// HABILITAR TEXTAREA
//==================================================

const enableTextarea = () => {

    chatInput.removeAttribute("disabled");

};

//==================================================
// ENVIAR MENSAJES
//==================================================

const handleChat = () => {

    userMessage = chatInput.value.trim();

    if (!userMessage) return;

    chatInput.value = "";

    chatInput.style.height = `${inputInitHeight}px`;

    // Detener cualquier voz anterior
    window.speechSynthesis.cancel();

    // Mostrar mensaje del usuario
    chatbox.appendChild(createChatLi(userMessage, "saliente"));

    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {

        // Generar respuesta
        const response = generateResponse(userMessage);

        const entranteChatLi =
            createChatLi(response, "entrante");

        chatbox.appendChild(entranteChatLi);

        chatbox.scrollTo(0, chatbox.scrollHeight);

        // Leer la respuesta principal
        hablar(response);

    }, 600);

};

//==================================================
// INICIAR CHAT
//==================================================

handleChat();

//==================================================
// AUTOAJUSTE DEL TEXTAREA
//==================================================

chatInput.addEventListener("input", () => {

    chatInput.style.height = `${inputInitHeight}px`;

    chatInput.style.height =
        `${chatInput.scrollHeight}px`;

});

//==================================================
// ENTER
//==================================================

chatInput.addEventListener("keydown", (e) => {

    if (e.key === "Enter" && !e.shiftKey) {

        e.preventDefault();

        handleChat();

    }

});

//==================================================
// BOTÓN ENVIAR
//==================================================

sendChatBtn.addEventListener("click", handleChat);

//==================================================
// CERRAR CHAT
//==================================================

chatbotCloseBtn.addEventListener("click", () => {

    document.body.classList.remove("show-chatbot");

    chatInput.setAttribute("disabled", true);

    // Detener la voz al cerrar
    window.speechSynthesis.cancel();

});

//==================================================
// ABRIR CHAT
//==================================================

chatbotToggler.addEventListener("click", () => {

    document.body.classList.toggle("show-chatbot");

    enableTextarea();

});

//==================================================
// MENÚ
//==================================================

document.addEventListener("DOMContentLoaded", function () {

    const showMenuButton =
        document.getElementById("showmenu");

    const menu =
        document.getElementById("menu");

    if (showMenuButton && menu) {

        showMenuButton.addEventListener("click", function () {

            menu.classList.toggle("show");

        });

    }

});