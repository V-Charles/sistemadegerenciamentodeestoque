document.getElementById('form-produto').addEventListener('submit', function (event){
    event.preventDefault();

    const nome = document.getElementById('nome-produto');
    const categoria = document.getElementById('categoria');
    const fornecedor = document.getElementById('fornecedor');
    const valor = document.getElementById('valor-unitario');

    const nomeVal = nome.value.trim();
    const categoriaVal = categoria.value.trim();
    const fornecedorVal = fornecedor.value.trim();
    const valorVal = valor.value.trim().replace(',', '.');

    let erros = [];

    if (nomeVal === ''){
        erros.push('Preencha o nome do produto.');
    }

    if (categoriaVal === '') {
        erros.push('Preencha a categoria do produto.');
    }

    if (fornecedorVal === '') {
        erros.push('Preencha o fornecedor.');
    }

    if (valorVal === '' || isNaN(valorVal) || parseFloat(valorVal) <= 0) {
        erros.push('Informe um valor unitário válido (ex.: 10,50).');
    }

    if (erros.length > 0) {
        alert(erros.join('\n'));
    } else {
        alert('Produto cadastrado com sucesso!');
        this.submit();
    }
});