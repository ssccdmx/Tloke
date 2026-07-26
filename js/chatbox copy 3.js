const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotCloseBtn = document.querySelector(".close-btn");

let userMessage;
let questionNum = 0; // Contador de preguntas
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent =
    className === "saliente"
      ? `<p></p>`
      : `<span class="material-symbols-outlined"><i class="fa-solid fa-robot"></i></span><p></p>`;
  chatLi.innerHTML = chatContent;
  chatLi.querySelector("p").textContent = message;
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
  return chatLi;
};

const createChatLi3 = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent =
    className === "saliente"
      ? '<p></p>'
      : '<span style="visibility:hidden" class="material-symbols-outlined"></span><p><a style="color=blue" target="_blank" href="https://tlokenahuaque.github.io/DiagramasUCS/Docs/Directorio.html">createChatLi3</a></p>';
  chatLi.innerHTML = chatContent;
  if (className === "entrante") {
    chatLi.querySelector("a").textContent = message;
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
      : '<span style="visibility:hidden" class="material-symbols-outlined"></span><p><a style="color=blue" target="_blank" href="https://tlokenahuaque.github.io/DiagramasUCS/index.html">createChatLi3</a></p>';
  chatLi.innerHTML = chatContent;
  if (className === "entrante") {
    chatLi.querySelector("a").textContent = message;
  } else {
    chatLi.querySelector("p").textContent = message;
  }
  return chatLi;
};

const setQuestionNumber = (userMessage) => {
  // Expresión regular para buscar menciones del usuario
  const mentionRegex = /(hola|buenos d|buenas no|buenas ta|R11|R4)/i;

  // Directorio
  const specificWord1 = /(unidad de c|de contacto|secretario|UCS)/i;
  const specificWord2 = /(asuntos|internos|ext queja contra|ext. queja contra|pretor|extension queja|extensión queja)/i;
  const specificWord3 = /(ext brigada|ext. brigada|extension brigada|extensión brigada|ext vigilan|ext. vigilan|extension vigilan|extensión vigilan|ext animal|ext. animal|extension animal|extensión animal|ext bva|ext. bva|extension bva|extensión bva)/i;
  const specificWord4 = /(asuntos|internos|ext queja contra|ext. queja contra|pretor|extension queja|extensión queja)/i;
  const specificWord5 = /(asuntos|internos|ext queja contra|ext. queja contra|pretor|extension queja|extensión queja)/i;
  

  if (mentionRegex.test(userMessage)) {
    // Si el usuario saluda, restablece la pregunta a 0
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
                                            
  } else {
    questionNum = 5;
  }
};

const generateResponse = (userMessage) => {
  // Llamamos a la función para establecer el valor de questionNum
  setQuestionNumber(userMessage);

  switch (questionNum) {
    case 0:
      // specificWord0
      return "¡Hola! es un gusto conocerte ¿en qué te puedo ayudar?";

    case 1:
      setTimeout(() => {
        const response = "Estamos ubicados en Arcos de Belén 79, primer piso, colonia Centro, alcaldía Cuauhtémoc, C.P. 06000\n\nContamos con más canales para la recepción de solicitudes ciudadanas como lo son:\n\nCorreo:  ucontacto@ssc.cdmx.gob.mx,\nWhatsApp:  55 4331 9636,\nTwitter:  @UCS_GCDMX\nSUAC y la aplicación Mi policía";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 100);
      setTimeout(() => {
        const response = "Es un guto atenderte ¿Requieres algo más?";
        const entranteChatLi = createChatLi(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 1000); 
      return "Nuestro número telefónico es:\n55 5209 9898\n\nCon servicio los 365 días del año, las 24 horas del día";
            

    case 2:
      setTimeout(() => {
        const response = "¿Deseas buscar otra extensión?";
        const entranteChatLi = createChatLi(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 1000); 
      return "La extensión de Asuntos Internos es: 1121, 1122 y 1160";

    
    case 3:
        setTimeout(() => {
          const response = "[Haz click para abrir Diagramas]";
          const entranteChatLi = createChatLi4(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100);
        setTimeout(() => {
          const response = "¿Requieres algo más?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Por supuesto, te puedo mostrar algunos diagramas"; 


        case 4://no
          return "Es un gusto ayudarte, estoy a tu servicio, si me necesitas estaré por aquí";  

    
        default:
        return "No entiendo la pregunta o aún no conozco sobre ese tema, inténtalo de nuevo por favor .";
  }

};




const enableTextarea = () => {
  // Habilita el textarea cuando se muestra el chatbot
  chatInput.removeAttribute("disabled");
};


const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;
  chatInput.value = "";
  chatInput.style.height = `${inputInitHeight}px`;

  // Agregar mensaje al chatbox
  chatbox.appendChild(createChatLi(userMessage, "saliente"));
  chatbox.scrollTo(0, chatbox.scrollHeight);

  setTimeout(() => {
    // Mensaje de respuesta generada internamente
    const response = generateResponse(userMessage);
    const entranteChatLi = createChatLi(response, "entrante");
    chatbox.appendChild(entranteChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
  }, 600);

};



// Llamada para iniciar la conversación automáticamente al cargar la página
handleChat();

chatInput.addEventListener("input", () => {
  // Ajustar el tamaño del textarea en función de su contenido
  chatInput.style.height = `${inputInitHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
  // Si la tecla "Enter" es presionada
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    handleChat();
  }
});

sendChatBtn.addEventListener("click", handleChat);
chatbotCloseBtn.addEventListener("click", () => {
  document.body.classList.remove("show-chatbot");
  // Deshabilita el textarea al cerrar el chatbot
  chatInput.setAttribute("disabled", true);
});

chatbotToggler.addEventListener("click", () => {
  document.body.classList.toggle("show-chatbot");
  enableTextarea(); // Habilita el textarea al mostrar el chatbot
});





document.addEventListener('DOMContentLoaded', function () {
  var showMenuButton = document.getElementById('showmenu');
  var menu = document.getElementById('menu');

  showMenuButton.addEventListener('click', function () {
      menu.classList.toggle('show');
  });
});


