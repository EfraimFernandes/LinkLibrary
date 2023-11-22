document.addEventListener("DOMContentLoaded", function() {

// PopUp do email
const infouser = document.getElementById("infouser");
const userEmail = document.getElementById("userEmail");

toggleVar = 0

userEmail.addEventListener("click", () => {
    if(toggleVar === 0){
      infouser.style.display = "flex"
      toggleVar = 1
    } else if(toggleVar === 1){
      infouser.style.display = "none"
      toggleVar = 0
    }
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
