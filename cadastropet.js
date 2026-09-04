function login() {
    alert("nome");
    alert("cpf")
    alert("telefone")

    const usuario = document.getElementById("usuario").value;

    document.getElementById("msg").innerHTML =
        "Obrigado por entrar, " + usuario + "!";
}