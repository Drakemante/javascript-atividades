const prompt = require ("prompt-sync") ()
let fator1
let result
let opcao

 


function calcular(){
    console.clear()
    console.log("Calculadora De Temperatura\n")
    console.log("\nEscolha a operação:\n")
    console.log("1 - Grau Celsius pra Fahrenheit\n")
    console.log("2 - Grau Fahrenheit para Celsius\n")
    console.log("\nresposta:\t")
    opcao = prompt()

    if (opcao == 1) {
    console.log ("Digite o valor em celsius:\n")
    fator1 = parseFloat(prompt())
      result = fator1 * 9 / 5 +32
      console.log("\nO resultado é:\t", result, "\n")
    }

    if (opcao == 2) {
        console.log("Digite o valor em Fahrenheit:\n")
        fator1 = parseFloat(prompt())
      result = (fator1 - 32) * 5 / 9
      console.log("\nO resultado é:\t", result, "\n")
    }
  
  }
function inicio(){
calcular()
}
inicio()