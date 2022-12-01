const totalMacas = prompt('Qual o número de maçãs compradas:')
if (totalMacas < 12){
    valor = totalMacas * (3/10)
    alert(`O valor final da compra é R$ ${valor},00 `)
}
else{
    valorf = totalMacas* (25/100)
    alert(`O valor final da compra é R$ ${valorf},00 `)
}