// Desafios


// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, 
// em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calcImc(altura, peso) {
    let imc = (peso / (altura * altura)) * 10000;
    console.log(`Seu IMC é ${imc.toFixed(1)}`);
}
calcImc(178, 71);


// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcFatorial(valor) {
    if (valor === 0 || valor === 1)
        return 1;
    for (var i = valor - 1; i >= 1; i--) {
        valor *= i;
    }
    console.log(`Resultado do fatorial é ${valor}`);
    return valor;
}
calcFatorial(5);


// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. 
// Para isso, considere a cotação do dólar igual a R$4,80.
function converteDolarEmReais(dolar) {
    let cotacaoDolar = 4.80;
    resultado = dolar * cotacaoDolar;
    console.log(`R$ ${resultado.toFixed(2)}`);
}
converteDolarEmReais(100);

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calculadoraSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);

    console.log(`Essa sala tem Área: ${area} e Perímetro: ${perimetro}`);
}
calculadoraSalaRetangular(3, 5);

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. 
// Considere Pi = 3,14.
function calculadoraSalaCircular(raio) {
    let areaPeloRaio = Math.PI * raio * raio;
    let comprimentoPeloRaio = 2 * Math.PI * raio;

    console.log(`Essa sala tem Área: ${areaPeloRaio.toFixed(2)} metros quadrados e Perímetro: ${comprimentoPeloRaio.toFixed(2)} metros`);
}
calculadoraSalaCircular(5);


// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuadaAte10(numero) {
    for (let i = 1; i <= 10; i++) {
        let final = numero * i;
        console.log(`${numero} * ${i} = ${final}`);
    }
}
tabuadaAte10(9);