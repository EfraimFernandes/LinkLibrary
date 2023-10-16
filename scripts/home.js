const infouser = document.getElementById("infouser");
const nomeUsuario = document.getElementById("nomeUsuario");

// Adicione um ouvinte de evento de clique ao nomeUsuario
nomeUsuario.addEventListener("mouseover", () => {
  // Verifique se o infouser tem a classe "oculto"
    infouser.style.display = "flex"
});

infouser.addEventListener("mouseover", () => {
  // Quando o mouse sai do elemento de gatilho, esconda o elemento-alvo novamente
  infouser.style.display = "flex";
});

nomeUsuario.addEventListener("mouseout", () => {
  // Verifique se o infouser tem a classe "oculto"
    infouser.style.display = "none"
});

infouser.addEventListener("mouseout", () => {
  // Quando o mouse sai do elemento de gatilho, esconda o elemento-alvo novamente
  infouser.style.display = "none";
});

const openModalButton = document.querySelector("#open-modal")
const closeModalButton = document.querySelector("#close-modal")
const modal = document.querySelector("#modal")
const fade = document.querySelector("#fade")

const toggleModal = () => {
  modal.classList.toggle("hide")
  fade.classList.toggle("hide")
}

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal())
})