// Função para validar se as senhas são iguais
function validarSenha(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmarSenha").value;
  
    if (senha !== confirmarSenha) {
      alert("As senhas devem ser as mesmas");
      return false;
    } else {
      // Se as senhas forem iguais, você pode prosseguir com o envio do formulário
      // Aqui você pode adicionar o código para enviar os dados ao servidor
      // Por exemplo:
      // document.getElementById("formCadastro").submit();
      alert("Cadastro realizado com sucesso!");
      return true;
    }
  }
  
  // Adicionando o evento de submit ao formulário
  document.getElementById("formCadastro").addEventListener("submit", validarSenha);
  