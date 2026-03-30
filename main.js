
// const { calcularMedia, classificar } = require("./funcoes-auxiliares")
import {calcularMedia, classificar} from "./funcoes-auxiliares.js"
// npm init -y
// adicionar ("type": "module",) abaixo do "main"


console.log(classificar(10))


console.log()
console.log()
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import {tabuada, maiorMenor, pares} from "./funcoes-auxiliares.js"

// 1) Faça um programa que receba um número e escreva a sua respectiva tabuada.
//     Exemplo:
//         Entrada:
//             2

//         Saída:
//             2x1 = 2
//             2x2 = 4
//             2x3 = 6
//             2x4 = 8
//             2x5 = 10
//             2x6 = 12
//             2x7 = 14
//             2x8 = 16
//             2x9 = 18
//             2x10 = 20

let numero = 7
let tabuadaSelecionada = []

if(isNaN(numero)){
    console.log("Eu esterava mais")
} else{
    tabuada(tabuadaSelecionada, numero)
}


console.log()
// 2) Faça um programa que receba a quantidade de números e seus respectivos valores.
// Imprima o maior e o menor número deste conjunto.

// Exemplo:
//     Entrada:
//         4
//         100
//         150
//         90
//         200

//     Saída:
//         Maior número: 200
//         Menor número: 90

let valores = [8, 9, 10, 7, 5]

maiorMenor(valores)


console.log()
// 3) Faça um programa que receba a quantidade de números e seus respectivos valores.
// Imprima todos os números pares.
// Exemplo:
//     Entrada:
//         5
//         1
//         3
//         9
//         10
//         12

//     Saída:
//         Números Pares: 10, 12

let numeros = [8, 9, 3, 2, 7, 6, 12, 10, 5, 1]

console.log("Números pares da lista: ")
pares(numeros)


console.log()