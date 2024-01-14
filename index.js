const nomeHeroi = require('prompt-sync')({ sigint: true })
const nivelHeroi = require('prompt-sync')({ sigint: true })

let heroi = nomeHeroi("Digite o nome do Herói: ")
let nivel = nivelHeroi("Digite a quantidade de xp: ")

let classificarNivel = [
    ["Mario", "Radiante"],
    ["Maria",  "Ouro"],
    ["Paulo",  "Bronze"],
    ["Silvio",  "Prata"],
    ["Rita",  "Platina Diamante"],
    ["Janaina",  "Ascendente"],
    ["Marcos",  "Imortal"],
    ["Carlos",  "Ferro"]
]


if (heroi && nivel >= 10001) {
    console.log(`O heroi de nome ${classificarNivel[0][0]} está no nível de ${classificarNivel[0][1]}`)
} else if(heroi && nivel > 9001 && nivel <= 10000 ) {
    console.log(`O heroi de nome ${classificarNivel[6][0]} está no nível de ${classificarNivel[6][1]}`)
} else if(heroi && nivel > 8000 && nivel <= 9000) {
    console.log(`O heroi de nome ${classificarNivel[5][0]} está no nível de ${classificarNivel[5][1]}`)
} else if(heroi && nivel > 7000 && nivel <= 8000) {
    console.log(`O heroi de nome ${classificarNivel[4][0]} está no nível de ${classificarNivel[4][1]}`)
} else if(heroi && nivel > 5000 && nivel <= 6000) {
    console.log(`O heroi de nome ${classificarNivel[1][0]} está no nível de ${classificarNivel[1][1]}`)
} else if(heroi && nivel > 2000 && nivel <= 5000) {
    console.log(`O heroi de nome ${classificarNivel[3][0]} está no nível de ${classificarNivel[3][1]}`)
} else if(heroi && nivel > 1000 && nivel <= 2000) {
    console.log(`O heroi de nome ${classificarNivel[2][0]} está no nível de ${classificarNivel[2][1]}`)
} else if(heroi && nivel > 1 && nivel < 1000) {
    console.log(`O heroi de nome ${classificarNivel[7][0]} está no nível de ${classificarNivel[7][1]}`)
} else {
    console.log(`${heroi} não está na lista ou a quantidade de xp não foi informado corretamente`)
}
