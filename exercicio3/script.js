const nome = prompt("Qual o seu nome?")
const idade = Number(prompt("Qual a sua idade?"))

console.log(nome === "jose" ? "Oi, Ze!" : "oi,", nome)

console.log( idade >= 18 ? "pode tirar carteira de motorista!" : "Ainda não pode tirar carteira de motorista")

// if(nome === "José"){
// 	console.log("Oi, Zé!");
// } else {
// 	console.log("Olá, "+nome);
// }

// if(idade >= 18){
// 	console.log("pode tirar carteira de motorista!");
// } else {
// 	console.log("Ainda não pode tirar carteira de motorista");
// }
