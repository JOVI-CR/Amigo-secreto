//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nome = inputAmigo.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome válido');
        return;
    }

    amigos.push(nome);
    console.log(amigos);

    inputAmigo.value = '';

    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.lenght === 0) {
        alert('Por favor, adicione ao menos um amigo');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = "";

    let li = document.createElement('li');
    li.textContent = `🎁 ${amigoSorteado} foi sorteado!`;
    resultadoLista.appendChild(li);
}