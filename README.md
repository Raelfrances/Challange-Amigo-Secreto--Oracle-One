# Projeto Lista de Amigos

## Descrição

Este projeto permite adicionar amigos a uma lista, visualizar a lista atualizada e sortear um amigo aleatoriamente com direito a narração em voz alta em português brasileiro. Foi desenvolvido utilizando HTML, CSS e JavaScript.

## Tecnologias Utilizadas

- **HTML:** Estrutura do projeto, definindo os elementos da interface do usuário.
- **CSS:** Estilização da interface do usuário para um design agradável.
- **JavaScript:** Lógica do projeto, manipulação do DOM e funcionalidades interativas.

[![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

## Desafio Oracle ONE

Este projeto faz parte do desafio do Oracle ONE, que é uma iniciativa da Oracle em parceria com a Alura, voltada para o desenvolvimento de habilidades em programação e tecnologias emergentes. Os participantes são desafiados a criar projetos práticos que consolidam o aprendizado teórico.

## Estrutura do Projeto

### Index.HTML
```plaintext
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Amigos</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Lista de Amigos</h1>
    <input type="text" id="amigo" placeholder="Nome do amigo">
    <button onclick="adicionarAmigo()">Adicionar Amigo</button>
    <ul id="listaAmigos"></ul>
    <button onclick="sortearAmigo()">Sortear Amigo</button>
    <p id="resultado"></p>

    <script src="script.js"></script>
</body>
</html>

```

 ### Styles.css
```plaintext
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    text-align: center;
    margin: 0;
    padding: 20px;
}

h1 {
    color: #333;
}

input {
    padding: 10px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    padding: 10px 20px;
    margin: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    background-color: #fff;
    margin: 5px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
``` 

 ### app.js
```plaintext
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
```

Como Executar
Clone este repositório:

#### sh
```plaintext
git clone https://github.com/seu-usuario/nome-do-repositorio.git
Navegue até o diretório do projeto:

```

### sh
``` plaintext
cd nome-do-repositorio
Abra o arquivo index.html no seu navegador preferido.
```

### Contribuição

--Faça um fork do projeto.

--Crie uma branch para sua feature (git checkout -b feature/AmazingFeature).

--Commit suas alterações (git commit -m 'Add some AmazingFeature').

--Faça um push para a branch (git push origin feature/AmazingFeature).

--Abra um Pull Request.

