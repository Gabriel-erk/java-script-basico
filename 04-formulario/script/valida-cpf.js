// Pegando elemento do HTML pelo ID - Adicionar evento ouvinte no "validarButton" do tipo "clique",
// com a ação "function" que definirá o que o sistema irá fazer quando o usuário clicar no botão
document.getElementById("validarButton").addEventListener("click", function() {
    //alert("Deu Certo!!");
    const cpf = document.getElementById("cpfInput").value;

    if (validaCPF(cpf)) {
        document.getElementById("resultado").textContent = "CPF Válido";
    } else {
        document.getElementById("resultado").textContent = "CPF Inválido";
    }
});

function validaCPF(vrCPF) {
    // Se o tamanho da constante cpf for igual a 11 e forem números (com a função isNaN = is not a number)
    return vrCPF.length === 11 && !isNaN(vrCPF);
}
