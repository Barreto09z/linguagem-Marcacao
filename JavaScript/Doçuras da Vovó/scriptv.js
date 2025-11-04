const botaoHamburguer = document.querySelector('#btn-hamburguer');
const menuMobile = document.querySelector("#menuMobile");

botaoHamburguer.addEventListener("click", () =>{
    menuMobile.classList.toggle("hidden");
})

// selecionar os elementos
const gatilhoDropdownWeb = document.querySelector("#gatilho-dropdown-web");
const menuDropdownWeb = document.querySelector("#menu-dropdown-web");

// Mobile
const gatilhoDropdownMobile = document.querySelector("#gatilho-dropdown-mobile");
const menuDropdownMobile = document.querySelector("#menu-dropdown-mobile");

// Adicionar eventos de click aos gatilhos
gatilhoDropdownWeb.addEventListener("click",(evento) =>{
    evento.stopPropagation(); //impede que o elemento vaze
    menuDropdownWeb.classList.toggle("hidden");
    menuDropdownMobile.classList.add("hidden"); //garantir que o menu feche
} )

// Menu Mobile
gatilhoDropdownMobile.addEventListener("click",(evento) =>{
    evento.stopPropagation(); //impede que o elemento vaze
    menuDropdownMobile.classList.toggle("hidden");
    menuDropdownWeb.classList.add("hidden"); //garantir que o menu feche
} )

// Movimentando o carrossel

//selecionar os elementos
const containerSlides = document.querySelector("#carrossel-slides")
const todosSlides = document.querySelectorAll(".slide-carrossel")
const btnAnterior = document.querySelector("#btn-anterior")
const btnProximo = document.querySelector("#btn-proximo")

let slideAtual = 0
const totalSlides = todosSlides.length

//funcao principal
function atualizarCarrossel() {
    let valorTransform = `translateX(-${slideAtual * 100}%)`
    containerSlides.style.transform = valorTransform
}

btnAnterior.addEventListener("click", () =>{
    slideAtual--
    if (slideAtual < 0) {
        slideAtual = totalSlides -1
    }
    atualizarCarrossel()
})

btnProximo.addEventListener("click", () =>{
    slideAtual++
    if (slideAtual >= totalSlides) {
        slideAtual = 0
    }
    atualizarCarrossel()
})

atualizarCarrossel()