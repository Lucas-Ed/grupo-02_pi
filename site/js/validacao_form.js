document.addEventListener('DOMContentLoaded', () => {
document.querySelector('.newsletterForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio do formulário se houver erros
  
    const name = document.querySelector('input[placeholder="Insira seu nome"]').value.trim();
    const email = document.querySelector('input[placeholder="Insira seu e-mail"]').value.trim();
  
    // Validação do nome (não vazio e apenas letras)
    if (!name || !/^[a-zA-ZÀ-ÿ\s]+$/.test(name)) {
      alert('Por favor, insira um nome válido.');
      return;
    }
  
    // Validação do email (formato válido)
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Por favor, insira um email válido.');
      return;
    }
  
    // Se passar as validações, os dados podem ser enviados ao backend
    console.log('Dados válidos:', { name, email });
  
    // Você pode enviar os dados usando fetch ou Ajax
    enviarDados({ name, email });
  });
});
  // Função para enviar os dados ao backend
  function enviarDados(dados) {
    fetch('https://backend-grupo02-pi.vercel.app/cadastrar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // mode: 'no-cors',
      body: JSON.stringify(dados),
    })
      .then(response => response.json())
      .then(data => {
        alert('Cadastro realizado com sucesso!');
        console.log(data);
      })
      .catch(error => {
        alert('Ocorreu um erro ao enviar os dados.');
        console.error(error);
      });
  }
  