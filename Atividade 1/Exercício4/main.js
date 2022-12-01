const salario = parseInt(prompt('O salário fixo dos vendedores é de R$:'));
const comissao = parseInt(prompt('A comissão fixa por carro vendido é de R$:'));
const carrosVendidos = parseInt(prompt('A quantidade de carros vendidos foi de'));
const totalVendas = parseInt(prompt('O valor total de suas vendas foi de R$:'));

const salarioFinal = (carrosVendidos * comissao) + (totalVendas * 0.05) + salario
alert (`O salário final do vendedor foi de R$ ${salarioFinal},00`);