function obterCPF()
{
    const cpf = document.getElementById('cpf');
    const valor = cpf.value;

    expressao_regular = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

    if (expressao_regular.test(valor))
    {
        alert("CPF correto!")
    }

    else
    {
        alert("CPF errado!")
    }
}

function obterCel()
{
    const cel = document.getElementById('cel');
    const valor = cel.value;

    expressao_regular = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/;

    if (expressao_regular.test(valor)) 
    {
        alert("Celular correto!")
    }

    else 
    {
        alert("Celular errado!")
    }

}

function obterCEP()
{
    const cep = document.getElementById('cep');
    const valor = cep.value;

    expressao_regular = /[0-9]{5}-[\d]{3}/;

    if (expressao_regular.test(valor)) 
    {
        alert("CEP correto!")
    }

    else 
    {
        alert("CEP errado!")
    }
}