// Seleciona os elementos necessários
const openMenuIcon = document.querySelector('.open-menu');
const closeMenuIcon = document.querySelector('.close-menu');
const navLinks = document.querySelector('.nav-links');
// var dark mode, seleciona a tag main para aplicar no body a cor do toggle
let body = document.querySelector('main');
// captura a classe padrão do toggle
let mode = document.getElementById('toggle_activate')

// Abre o menu e mostra o ícone de fechar
openMenuIcon.addEventListener('click', () => {
    navLinks.classList.add('show'); // Adiciona a classe show para exibir o dropdown
    openMenuIcon.classList.add('hidden');
    closeMenuIcon.classList.remove('hidden');
});

// Fecha o menu e mostra o ícone de abrir
closeMenuIcon.addEventListener('click', () => {
    navLinks.classList.remove('show'); // Remove a classe show para ocultar o dropdown
    closeMenuIcon.classList.add('hidden');
    openMenuIcon.classList.remove('hidden');
});


// função do toggle
// function toggleTheme() {
//     const toggle = document.querySelector('.toggle');
//     const body = document.querySelector('body');
    
//     toggle.classList.toggle('active');
//     body.classList.toggle('light-mode'); // Aplica o tema claro ao body
// }

function toggleTheme() {
    const body = document.querySelector('body');
    
    // Alterna a classe .light-mode no <body>
    body.classList.toggle('light-mode'); 
}


