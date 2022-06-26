const formulario = document.getElementById('cFormulario');
console.log(formulario)

// prevenção de comportamento padrão de submissão.
    formulario.onsubmit = (e) => {
      e.preventDefault();
    }

// Usuário salvo no databse
const Usuario = {
  name: 'Luiz Fernando',
  email: 'lfoalves@gmail.com',
  pass: '123',
}

// Validação de usuário
  function validaDados() {
    // Recebe email
    const email = document.getElementById('cEmail').value;
    console.log("O email recebido é:", email);

    // Recebe senha
    const senha = document.getElementById('cSenha').value;
    console.log("A senha recebida é:", senha);

    // Verifica se não é vazio, null ou undefined;
    if (!email || !senha) {
      return alert('Insira dados!')
    } else if (email != Usuario.email|| senha != Usuario.pass) {
      console.log('Dados incorretos.', email, senha)
      return alert('Dados incorretos.')
    } else {
      return alert(`Usuário logado com sucesso: ${email}`)
    }
  }