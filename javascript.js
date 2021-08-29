// validando as funções dos dados//

function validarDados(){

    const nome = document.getElementById("nome")
    const CPF = document.getElementById("cpf")
    const rg = document.getElementById("rg")
    const telefone = document.getElementById("telefone")
    const celular = document.getElementById("celular")
    const endereco = document.getElementById("Endereco")
    const numer = document.getElementById("number")
    const cep = document.getElementById("cep")

}
     
if (nome.value == "") {
    alert("Nome não informado");

    // Deixar o input com o focus
    nome.focus()

   // Retorna a função e não leia outras linhas.
    return;
}

   // CPF
if (CPF.value == "") {
    alert("CPF não informado");
    CPF.focus();
    return;
  }

  // RG
  if (rg.value == "") {
    alert("RG não informado");
    street.focus();
    return;
  }

  // TELEFONE FIXO
  if (telefone.value == "") {
    alert('Número não informado');
    number.focus();
    return;
  }

  // CELULAR 
  if (celular.value == "") {
    alert('Celular não informado');
    phone.focus();
    return;
  }

   // Endereço
  if (endereco.value == "") {
    alert("Endereço não informado");
    street.focus();
    return;
  }

  // Número
  if (number.value == "") {
    alert("Número não informado");
    street.focus();
    return;
  }

  // CEP
  if (cep.value == "") {
    alert("CEP não informado");
    street.focus();
    return;
  }

  // Informa que o cadastro for o sucesso.
  alert('O cadastro está sucesso!')
}
    

