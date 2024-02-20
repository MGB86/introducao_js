const form = document.getElementById('form-deposito')
const nomeBeneficiario = document.getElementById('nome-beneficiario');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(" ");
    return nomeComoArray.length >= 2
}

form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta')
    const valorDeposito = document.getElementById('valor-deposito')
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente <b>${nomeBeneficiario.value}</b> - conta <b>${numeroContaBeneficiario.value}</b>`;

    formEValido = validaNome(nomeBeneficiario.value)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message')
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        
        //Zerar as variáveis 
        nomeBeneficiario = '';
        numeroContaBeneficiario = '';
        valorDeposito = '';
    } else { 
        numeroContaBeneficiario.style.border = '1px solid red'
        document.querySelector('.errorMessage').style.display = 'block' //Usado para mostrar algo que estava oculto pelo comando "display = none"
    }
})

nomeBeneficiario.addEventListener('keyup', function(e) {
    console.log(e.target.value);
})

console.log(form);