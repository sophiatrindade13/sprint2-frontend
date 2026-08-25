// ==========================================
// JOVI SCAN
// Controle das telas
// ==========================================

// Guarda a pasta criada apenas enquanto a página estiver aberta
let pastaCriada = false;
let nomePastaCriada = "";


// ==========================================
// MOSTRAR TELA
// ==========================================

function mostrarTela(nomeTela) {

    // Esconde todas as telas
    const telas = document.querySelectorAll(".tela");

    telas.forEach(function(tela) {
        tela.classList.remove("ativa");
    });

    // Mostra a tela escolhida
    const telaSelecionada = document.getElementById("tela-" + nomeTela);

    if (telaSelecionada) {
        telaSelecionada.classList.add("ativa");
    }

    // Se abriu a galeria, atualiza as pastas
    if (nomeTela === "galeria") {
        atualizarGaleria();
    }
}


// ==========================================
// BOTÕES QUE TROCAM DE TELA
// ==========================================

const botoesTela = document.querySelectorAll("[data-tela]");

botoesTela.forEach(function(botao) {

    botao.addEventListener("click", function(event) {

        event.preventDefault();

        const nomeTela = botao.getAttribute("data-tela");

        mostrarTela(nomeTela);

    });

});


// ==========================================
// CRIAR PASTA
// ==========================================

const checkboxPasta = document.getElementById("criar-pasta");
const nomePasta = document.getElementById("nome-pasta");

checkboxPasta.addEventListener("change", function() {

    if (checkboxPasta.checked) {

        nomePasta.style.display = "block";

    } else {

        nomePasta.style.display = "none";
        nomePasta.value = "";

    }

});


// ==========================================
// SALVAR PASTA CRIADA
// ==========================================

const botaoCriar = document.querySelector(".btn-criar");

botaoCriar.addEventListener("click", function() {

    if (checkboxPasta.checked) {

        const nome = nomePasta.value.trim();

        if (nome !== "") {

            pastaCriada = true;
            nomePastaCriada = nome;

        }

    } else {

        pastaCriada = false;
        nomePastaCriada = "";

    }

    // Vai para a tela de sucesso
    mostrarTela("sucesso");

});


// ==========================================
// MOSTRAR PASTA NA GALERIA
// ==========================================

function atualizarGaleria() {

    const pastasArea = document.getElementById("pastas-area");
    const nomePastaGaleria = document.getElementById("nome-pasta-galeria");

    if (!pastasArea || !nomePastaGaleria) {
        return;
    }

    if (pastaCriada && nomePastaCriada !== "") {

        pastasArea.style.display = "block";
        nomePastaGaleria.textContent = nomePastaCriada;

    } else {

        pastasArea.style.display = "none";

    }

}

// ==========================================
// CHATBOT JOVI IA
// ==========================================

const iconeIA = document.querySelector(".icone-ia");
const chatIA = document.getElementById("chat-ia");
const fecharChat = document.getElementById("fechar-chat");
const enviarPergunta = document.getElementById("enviar-pergunta");
const perguntaIA = document.getElementById("pergunta-ia");
const chatMensagens = document.querySelector(".chat-mensagens");

iconeIA.addEventListener("click", function() {

    chatIA.classList.add("aberto");

});

fecharChat.addEventListener("click", function() {

    chatIA.classList.remove("aberto");

});

enviarPergunta.addEventListener("click", function() {

    const pergunta = perguntaIA.value.trim();

    if (pergunta === "") {
        return;
    }

    const mensagemUsuario = document.createElement("div");

    mensagemUsuario.classList.add("mensagem-usuario");

    mensagemUsuario.textContent = pergunta;

    chatMensagens.appendChild(mensagemUsuario);

    perguntaIA.value = "";

    const mensagemIA = document.createElement("div");

    mensagemIA.classList.add("mensagem-ia");

    mensagemIA.textContent =
        "Entendi! Posso ajudar a explicar e organizar as informações presentes no conteúdo escaneado.";

    chatMensagens.appendChild(mensagemIA);

    chatMensagens.scrollTop = chatMensagens.scrollHeight;

});