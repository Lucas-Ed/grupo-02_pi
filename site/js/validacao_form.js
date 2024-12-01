document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.newsletterForm').addEventListener('submit', async function (e) {
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
    
    try {
      // Verifica se o email já está cadastrado
      const emailExists = await verificarEmailCadastrado(email);
      if (emailExists) {
        alert('Este e-mail já está cadastrado. Por favor, use outro e-mail.');
        return;
      }

      // Se passar as validações, os dados podem ser enviados ao backend
      console.log('Dados válidos:', { name, email });

      // Envia os dados usando fetch
      await enviarDados({ name, email });
    } catch (error) {
      alert('Ocorreu um erro ao se cadastrar. Tente novamente mais tarde.');
      console.error('Erro ao realizar o cadastro:', error);
    }
  });
});

// Função para verificar se o email já está cadastrado
async function verificarEmailCadastrado(email) {
  try {
    const response = await fetch('https://backend-grupo02-pi.vercel.app/cadastrados');
    if (!response.ok) {
      throw new Error('Erro ao consultar emails cadastrados.');
    }

    const cadastrados = await response.json();
    // Verifica se o email está na lista de cadastrados
    return cadastrados.some(cadastrado => cadastrado.email === email);
  } catch (error) {
    console.error('Erro ao verificar e-mail cadastrado:', error);
    throw error; // Repassa o erro para tratamento
  }
}

// Função para enviar os dados ao backend
async function enviarDados(dados) {
  try {
    const response = await fetch('https://backend-grupo02-pi.vercel.app/cadastrar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados),
    });

    if (!response.ok) {
      throw new Error('Erro ao enviar dados para o backend.');
    }

    const data = await response.json();
    alert('Cadastro realizado com sucesso!');
    console.log(data);
  } catch (error) {
    console.error('Erro ao enviar dados:', error);
    throw error;
  }
}
// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelector('.newsletterForm').addEventListener('submit', function (e) {
//       e.preventDefault(); // Impede o envio do formulário se houver erros
    
//       const name = document.querySelector('input[placeholder="Insira seu nome"]').value.trim();
//       const email = document.querySelector('input[placeholder="Insira seu e-mail"]').value.trim();
    
//       // Validação do nome (não vazio e apenas letras)
//       if (!name || !/^[a-zA-ZÀ-ÿ\s]+$/.test(name)) {
//         alert('Por favor, insira um nome válido.');
//         return;
//       }
    
//       // Validação do email (formato válido)
//       if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//         alert('Por favor, insira um email válido.');
//         return;
//       }
    
//       // Se passar as validações, os dados podem ser enviados ao backend
//       console.log('Dados válidos:', { name, email });
    
//       // Você pode enviar os dados usando fetch ou Ajax
//       enviarDados({ name, email });
//     });
//   });
//     // Função para enviar os dados ao backend
//     function enviarDados(dados) {
//       fetch('https://backend-grupo02-pi.vercel.app/cadastrar', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         // mode: 'no-cors',
//         body: JSON.stringify(dados),
//       })
//         .then(response => response.json())
//         .then(data => {
//           alert('Cadastro realizado com sucesso!');
//           console.log(data);
//         })
//         .catch(error => {
//           alert('Ocorreu um erro ao enviar os dados.');
//           console.error(error);
//         });
//     };  