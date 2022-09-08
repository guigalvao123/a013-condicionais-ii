const num = Number(prompt("Escolha um numero"))

if(num%2 === 0){
    console.log("O seu numero e divisivel por 2")
    if(num%3 === 0)
    console.log("O seu numero e divisivel por 3")}

    if(num%2 === 0 || num%3 === 0){
        console.log("O seu numero e divisivel por 2 ou 3")
    }