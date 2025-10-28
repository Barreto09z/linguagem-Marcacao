// Menu hamburguer 

const btnHamburguer = document.querySelector('#btn-hamburguer')
const menuMobile = document.querySelector('#menu-mobile')

btnHamburguer.addEventListener("click", () =>{
    menuMobile.classList.toggle("hidden");
})