// Seleciona o elemento do menu
const menu = document.querySelector('.menu-bar');

// Seleciona o elemento do botão de menu
const menuButton = document.querySelector('.hamburger');

// Seleciona o elemento do conteúdo principal
const mainContent = document.querySelector('.main-content');

// Função para abrir e fechar o menu
function toggleMenu() {
    menu.classList.toggle('open');
    mainContent.classList.toggle('open');
}

// Adiciona evento de clique ao botão de menu
menuButton.addEventListener('click', toggleMenu);