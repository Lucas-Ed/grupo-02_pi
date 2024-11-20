        // Função para exibir o alerta quando a página carregar
        function mostrarAlerta() {
            alert("Este site é um projeto de faculdade, não é o site oficial da empresa!");
        }

        function toggleTheme() {
            const body = document.querySelector('body');
            
            // Alterna a classe .light-mode no <body>
            body.classList.toggle('light-mode'); 
        }
// função do toggle
// function toggleTheme() {
//     const toggle = document.querySelector('.toggle');
//     const body = document.querySelector('body');
    
//     toggle.classList.toggle('active');
//     body.classList.toggle('light-mode'); // Aplica o tema claro ao body
// }