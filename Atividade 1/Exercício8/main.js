/*Escreva um algoritmo que tenha como valores de entradas o nome
e idade do usuário e imprima no terminal o nome e a quantidade de
letras que o nome possui, bem como a idade e o ano de nascimento
do usuário. Ex: “Nome: Pedro, 5 letras. Idade: 22 anos, nasceu em
2000”.*/
const nome = prompt('Qual seu nome?')
const tamNome = nome.length
const idd = prompt('Qual sua idade?')
const id = 2022 - idd

alert(`Nome: ${nome}. Tem ${tamNome} letras. Idade: ${idd}. Nasceu no ano de ${id}`)