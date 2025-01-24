let amigos = [];

function adicionarAmigo() {
    let inputNome = document.getElementById('amigo');
    let nome = inputNome.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome");
    } else {
        amigos.push(nome);
        atualizarListaAmigos();
        inputNome.value = ""; 
    }
}

function atualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia");
    } else {
        let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `Amigo sorteado: ${sorteado}`;
        responsiveVoice.speak(`Amigo sorteado: ${sorteado}`, "Brazilian Portuguese Female", { rate: 1.2 });
    }
}
