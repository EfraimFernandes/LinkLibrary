document.addEventListener("DOMContentLoaded", function() {

// PopUp do email
const infouser = document.getElementById("infouser");
const userEmail = document.getElementById("userEmail");


userEmail.addEventListener("mouseover", () => {
    infouser.style.display = "flex"
});

infouser.addEventListener("mouseover", () => {
  infouser.style.display = "flex";
});

userEmail.addEventListener("mouseout", () => {
    infouser.style.display = "none"
});

infouser.addEventListener("mouseout", () => {
  infouser.style.display = "none";
});












  //Modal AddLink
  const openmodalAddLinkButton = document.querySelector("#open-modalAddLink")
  const closemodalAddLinkButton = document.querySelector("#close-modalAddLink")
  const modalAddLink = document.querySelector("#modalAddLink")
  const fade = document.querySelector("#fade")

  const togglemodalAddLink = () => {
    modalAddLink.classList.toggle("hide")
    fade.classList.toggle("hide")
  }

  [openmodalAddLinkButton, closemodalAddLinkButton, fade].forEach((el) => {
    el.addEventListener("click", () => togglemodalAddLink())
  })




  //Adicionar novo Link
  const linkNameInput = document.getElementById("linkName");
  const linkURLInput = document.getElementById("linkURL");
  const linkList = document.getElementById("linksContent");
  const saveLinkButton = document.getElementById("AddLink");
  const links = [];

  saveLinkButton.addEventListener("click", function() {
    console.log("Save link foi clicado");
      const name = linkNameInput.value;
      const url = linkURLInput.value;

      if (name && url) {
          const link = {
              name: name,
              url: url
          };
          links.push(link);
          // Adiciona o link à lista de links na página
          const listItem = document.createElement("div");
          listItem.innerHTML = `

            <div class="linkContent">
                      <div class="link">
                          <a href="${url}"><h3>${name}</h3></a>
                          <a href="${url}"><h5>${url}</h5></a>
                      </div>
                      <div class="options">
                          <button id="open-modalEditLink" class="editarLink"><i class="fa-solid fa-pen"></i></button>
                          <button class="excluirLink"><i class="fa-solid fa-trash"></i></button>
                      </div>
            </div>
            
            `;
          linkList.appendChild(listItem);

        
        
          // Limpa os campos de entrada
          linkNameInput.value = "";
          linkURLInput.value = "";
          
          //Fecha o modal
          modalAddLink.classList.add("hide");
          fade.classList.add('hide')
      }
  });




  //Modal EditLink
  const openmodalEditLinkButton = document.getElementById("open-modalEditLink")
  const closemodalEditLinkButton = document.getElementById("close-modalEditLink")
  const modalEditLink = document.getElementById("modalEditLink")
  const fade2 = document.getElementById("fade2")

  const togglemodalEditLink = () => {
    modalEditLink.classList.toggle("hide")
    fade2.classList.toggle("hide")
  }

  [openmodalEditLinkButton, closemodalEditLinkButton, fade2].forEach((el) => {
    el.addEventListener("click", () => togglemodalEditLink())
  })
















//Toogle color, modos light and dark
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
})



})