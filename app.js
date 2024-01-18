let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroAleatario = gerarNumeroAleatorio();
let numeroTentativas = 1;

alterarCampo('h1', 'Jogo do Número Secreto');
alterarCampo('p', 'Escolha um número entre 1 e 10');

function mensagemInicial() {
    alterarCampo('h1', 'Jogo do Número Secreto');
    alterarCampo('p', 'Escolha um número entre 1 e 10');
}

mensagemInicial();

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}


function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroAleatario) {
        let palavraTentativas = numeroTentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Você descobriu o número secreto em ${numeroTentativas} ${palavraTentativas}!`;
        alterarCampo('h1', 'Acertou!');
        alterarCampo('p', mensagem);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroAleatario) {
            alterarCampo('p', 'O número secreto é menor');
        } else {
            alterarCampo('p', 'O número secreto é maior');
        }
        numeroTentativas++;
        limparCampo();
    }
}

function alterarCampo(tag, texto) {
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { ratio: 1.2 });
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroAleatario = gerarNumeroAleatorio();
    numeroTentativas = 1;
    limparCampo();
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}