const impostos = 45/100
const distribuidor = 28/100

const valorCarro = prompt('Custo do Carro')

const valorFinal = (valorCarro * impostos * distribuidor) + parseInt(valorCarro)

alert('Valor final do carro é R$ ' + valorFinal + ',00')