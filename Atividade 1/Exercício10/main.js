const anoNas = prompt('Qual seu ano de nascimento:')
const dataAtual = new Date();
const anoAtual = dataAtual. getFullYear();
const ano = anoAtual - anoNas
if (ano < 16){
    alert('Você não pode votar esse ano.')
}else if (ano <18){
    alert('Você pode votar se quiser')
}else{
    alert('Você pode votar esse ano')
}