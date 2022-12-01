const totalEleitores = prompt('Total de eleitores:');
const votosBrancos = prompt('Votos brancos:');
const votosNulos = prompt('Votos nulos:');
const votosValidos = prompt('Votos válidos:');



const percentualVotosBrancos = (votosBrancos / totalEleitores) * 100 
const percentualVotosNulos = (votosNulos / totalEleitores) * 100
const percentualVotosValidos = (votosValidos / totalEleitores) * 100

alert (`O percentual de votos em branco é ${percentualVotosBrancos.toFixed(2)}%`);
alert (`O percentual de votos nulos é ${percentualVotosNulos.toFixed(2)}%`);
alert (`O percentual de votos válidos é ${percentualVotosValidos.toFixed(2)}%`);