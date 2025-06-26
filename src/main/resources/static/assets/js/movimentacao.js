document.addEventListener("DOMContentLoaded", function () {
    const dataInput = document.getElementById("data");
    const hoje = new Date().toISOString().split("T")[0];
    dataInput.value = hoje;

    document.getElementById("form-movimentacao").addEventListener("submit", function (event) {
        event.preventDefault();

        const quantidade = document.getElementById("quantidade").value.trim();
        const tipoMov = document.getElementById("tipo-movimentacao").value;

        let erros = [];

        if (!quantidade || isNaN(quantidade) || Number(quantidade) <= 0) {
            erros.push("Quantidade deve ser um número maior que zero.");
        }

        if (!tipoMov) {
            erros.push("Selecione um tipo de movimentação.");
        }

        if (erros.length > 0) {
            alert(erros.join("\n"));
        } else {
            alert("Movimentação registrada com sucesso!");
        }
    });
});