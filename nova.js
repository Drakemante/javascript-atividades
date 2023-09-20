const prompt = require("prompt-sync")()
let result 
let fator1
let fator2
let opcao
let reiniciar = true

function operacao(tipoOperacao){
console.clear
console.log("Calculadora", tipoOperacao)
console.log("Digite o primeiro Valor:")
console.log("resposta:")
fator1 = parseInt(prompt())
console.log("Digite o segundo Valor")
console.log ("resposta:")
fator2 = parseInt(prompt())
}

function calcular(){
console.clear
console.log("Calculadora Basica\n")
console.log("\n Escolha a operação:\n")
console.log("1-Adição\n")
console.log("2-Subtração\n")
console.log("3-Multiplicação\n")
console.log("4-Divisão\n")
console.log("\nresposta:\t")
opcao = prompt()

if (opcao == 1) {
    operacao("Adição")
    result = fator1 + fator2
    console.log("\nO resultado é:\t", result, "\n")
}

if (opcao == 2) {
    operacao("Subtração")
    result = fator1 - fator2
    console.log("\nO resultado é:\t", result, "\n")
}

if (opcao == 3){
    operacao("Multiplicação")
    result = fator1 * fator2
    console.log("\nO resultado é:\t", result, "\n")
}

if (opcao == 4) {
    operacao("Divisão")
    result = fator1 / fator2
    console.log("\nO resultado é:\t", result, "\n")
}
}




while (reiniciar) {
    calcular()
    console.log("\nDeseja calcular novamente? digite 'verdadeiro' para sim e 'falso' para não:\n")
    console.log("Resposta:\t")
   reiniciar = prompt()
}
