// ANIMAÇÃO AO ROLAR
const elements = document.querySelectorAll(".fade");

function showOnScroll() {
    const trigger = window.innerHeight * 0.85;

    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if(top < trigger){
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();

// FORMULÁRIO
const form = document.getElementById("formContato");

form.addEventListener("submit", function(e){
    e.preventDefault();

    document.getElementById("msgStatus").innerText =
        "Mensagem enviada com sucesso!";
    form.reset();
});
