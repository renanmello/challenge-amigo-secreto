//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Variável global para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // Obtém o valor do campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    // Verifica se o campo não está vazio
    if (nomeAmigo === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }

    // Adiciona o nome à lista de amigos
    amigos.push(nomeAmigo);

    // Atualiza a lista na interface
    atualizarListaAmigos();
    
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = ''; // Limpa o resultado anterior
    // Limpa o campo de entrada
    inputAmigo.value = '';
}

// Função para atualizar a lista de amigos na interface
function atualizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.innerHTML = ''; // Limpa a lista atual

    // Adiciona cada amigo como um item da lista
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigosElement.appendChild(li);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    // Verifica se há amigos na lista
    if (amigos.length === 0) {
        alert('A lista de amigos está vazia. Adicione amigos antes de sortear.');
        return;
    }

    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibe o resultado na interface
    const resultadoElement = document.getElementById('resultado');
    amigos = []; // Limpa a lista após o sorteio
    atualizarListaAmigos(); // Atualiza a lista na interface
    resultadoElement.innerHTML = `<li>O amigo sorteado é: ${amigoSorteado}</li>`;
}