const prompt = require("prompt-sync")()
let result 
let altura
let peso
let opcao
let reiniciar = true

console.log ("Calculadora de IMC\n")
console.log ("Qual o seu peso\n")
console.log ("Resposta:\n\n")
peso = parseFloat (prompt())

console.log ("Qual sua altura em metros\n")
console.log ("Resposta:\n\n")
altura = parseFloat (prompt())

result = peso/(altura*altura)
console.log ("Reaultado:\t",result, "\n")

if (result > 18.5 && result < 24.9) {
    console.log ("está normal")
  }
  if (result < 18.5 ) {
  console.log ("está abaixo do peso")
  }
  if (result > 24.9) {
   console.log ("acima")
  }