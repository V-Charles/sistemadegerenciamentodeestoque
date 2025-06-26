document.getElementById('form-fornecedor').addEventListener('submit', function (event){
    event.preventDefault();

    const nome = document.getElementById('nome-fornecedor');
    const cnpj = document.getElementById('cnpj');
    const email = document.getElementById('email-fornecedor');
    const telefone = document.getElementById('telefone-fornecedor');

    const nomeVal = nome.value.trim();
    const cnpjVal = cnpj.value.replace(/\D/g, '');
    const emailVal = email.value.trim();
    const telefoneVal = telefone.value.replace(/\D/g, '');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const somenteNumeros = /^\d+$/;

    let erros = [];

    if (nomeVal === '') {
        erros.push('Preencha o nome do fornecedor.');
    }

    if (!somenteNumeros.test(cnpjVal) || cnpjVal.length !== 14) {
        erros.push('CNPJ deve conter 14 números.');
    }

    if (!emailRegex.test(emailVal)) {
        erros.push('E-mail inválido.');
    }

    if (!somenteNumeros.test(telefoneVal) || telefoneVal.length < 10) {
        erros.push('Telefone inválido. Insira ao menos 10 números.');
    }

    if (erros.length > 0) {
        alert(erros.join('\n'));
    } else {
        alert('Fornecedor cadastrado com sucesso!');
        //this.onsubmit();
    }
});

/* Máscara para CNPJ */
document.getElementById('cnpj').addEventListener('input', function (){
    let cnpj = this.value.replace(/\D/g, '');

    if (cnpj.length > 14) cnpj = cnpj.slice(0, 14);

    cnpj = cnpj.replace(/^(\d{2})(\d)/, '$1.$2');
    cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    cnpj = cnpj.replace(/\.(\d{3})(\d)/, '.$1/$2');
    cnpj = cnpj.replace(/(\d{4})(\d)/, '$1-$2');
    
    this.value = cnpj;
});

/* Máscara para Telefone */
document.getElementById('telefone-fornecedor').addEventListener('input', function (){
    let tel = this.value.replace(/\D/g, '');

    if (tel.length > 11) tel = tel.slice(0, 11);

    tel = tel.replace(/^(\d{2})(\d)/g, '($1) $2');
    tel = tel.replace(/(\d{5})(\d)/, '$1-$2');

    this.value = tel;
});