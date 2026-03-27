function removerProduto(botao) {
    const card = botao.parentElement;
    card.remove();
}

function editarProduto(botao) {
    const card = botao.parentElement;
    const titulo = card.querySelector("h3");

    if (titulo.isContentEditable) {
        titulo.contentEditable = "false";
        botao.innerText = "Editar";
    } else {
        titulo.contentEditable = "true";
        titulo.focus();
        botao.innerText = "Salvar";
    }
}

function toggleStatus(botao) {
    const card = botao.parentElement;
    const status = card.querySelector(".status");

    if (status.innerText.includes("Ativo")) {
        status.innerText = "Status: Inativo";
        botao.innerText = "Reativar";

        // efeito visual
        card.style.opacity = "0.5";
    } else {
        status.innerText = "Status: Ativo";
        botao.innerText = "Desativar";

        card.style.opacity = "1";
    }
}