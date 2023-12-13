const botao = document.querySelector(".botao-hamburguer");



function trocaDeMenu(event){
    if( event.type === 'touchstart') event.preventDefault();
    const navegacao = document.querySelector(".menu");

    navegacao.classList.toggle('active')

}


botao.addEventListener('click', trocaDeMenu)
botao.addEventListener('touchstart', trocaDeMenu)

