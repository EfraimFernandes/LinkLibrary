const infouser = document.getElementById("infouser");
const nomeUsuario = document.getElementById("nomeUsuario");


nomeUsuario.addEventListener("mouseover", () => {
    infouser.style.display = "flex"
});

infouser.addEventListener("mouseover", () => {
  infouser.style.display = "flex";
});

nomeUsuario.addEventListener("mouseout", () => {
    infouser.style.display = "none"
});

infouser.addEventListener("mouseout", () => {
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







let toggleColor = 2;
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
    ".toggle,.toggle-ball"
    );

ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })

    if(toggleColor === 1) {
      document.documentElement.style.setProperty('--color1', '#FFFFFF');
      document.documentElement.style.setProperty('--color2', '#F9F9F9');
      document.documentElement.style.setProperty('--color3', '#1B1C1D');
      document.documentElement.style.setProperty('--color4', '#949281');
      document.documentElement.style.setProperty('--color5', '#EDF0E4');
      document.documentElement.style.setProperty('--color6', '#edf0e4b0');
      document.documentElement.style.setProperty('--color7', '#4E575C');
      document.documentElement.style.setProperty('--color8', '#E9967A');
      document.documentElement.style.setProperty('--color9', '#76756a');
      document.documentElement.style.setProperty('--color10', '#edf0e47e');
      document.documentElement.style.setProperty('--color11', '#f6ab92');
      document.documentElement.style.setProperty('--color12', '#e8eae0');
      document.documentElement.style.setProperty('--color13', '#1b1c1d');
      document.documentElement.style.setProperty('--color14', '#F9F9F9');
      toggleColor = 2;
    } else if(toggleColor === 2) {
      document.documentElement.style.setProperty('--color1', '#96a0aa');
      document.documentElement.style.setProperty('--color2', '#96a0aa');
      document.documentElement.style.setProperty('--color3', '#F9F9F9');
      document.documentElement.style.setProperty('--color4', '#000000');
      document.documentElement.style.setProperty('--color5', '#353c3f');
      document.documentElement.style.setProperty('--color6', '#000000');
      document.documentElement.style.setProperty('--color7', '#091013');
      document.documentElement.style.setProperty('--color8', '#E9967A');
      document.documentElement.style.setProperty('--color9', '#353c3f');
      document.documentElement.style.setProperty('--color10', '#edf0e47e');
      document.documentElement.style.setProperty('--color11', '#f6ab92');
      document.documentElement.style.setProperty('--color12', '#222628');
      document.documentElement.style.setProperty('--color13', '#f9f9f9');
      toggleColor = 1;
    }

    console.log("Cores trocadas")
})