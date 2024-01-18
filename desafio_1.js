// Desafios

// Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';


// Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function verificarChute(){
    console.log('O botão foi clicado');
}


// Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function mensagemDeAmor(){
    alert('Eu amo JS!');
}


// Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. 
// Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function lembreiDeVoce(){
    let cidade = prompt('Fale o nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você`);
} 


// Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.
function soma(){
    let valor1 = parseInt(prompt('Digite o primeiro valor da soma:'));
    let valor2 = parseInt(prompt('Digite o sugondo:'));
    let resultado = valor1 + valor2;

alert(`O resultado da soma é ${resultado}`);
}