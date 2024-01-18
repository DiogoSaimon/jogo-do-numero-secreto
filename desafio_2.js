// Desafios


// Criar uma função que exibe "Olá, mundo!" no console.
function olaMundo() {
    console.log('Olá Mundo!');
}
olaMundo();

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function seuNome(nome) {
    console.log(`Olá, ${nome}`);
}
seuNome('Diogo Saimon');


// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
let resultado = dobrarValor(10);
function dobrarValor(valor) {
    return valor * 2;
}
console.log(resultado);


// Criar uma função que recebe três números como parâmetros e retorna a média deles.
let resultadoFinal = mediaEntre3Numeros(10, 20, 30);
function mediaEntre3Numeros(valor1, valor2, valor3) {
    return (valor1 + valor2 + valor3) / 3;
}
console.log(resultadoFinal);


// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
let maiorValor = MaiorValorEntre2Numeros(10,20);
function MaiorValorEntre2Numeros(valor1, valor2){
    if(valor1 > valor2){
        return valor1;
    }else{
        return valor2;
    }
} 
console.log(maiorValor);

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
let numeroAoQuadrado = numeroAoQuadrado1Numero(10);
function numeroAoQuadrado1Numero(valor){
    return valor * valor;
}
console.log(numeroAoQuadrado);