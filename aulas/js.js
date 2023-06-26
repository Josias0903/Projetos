var input = require('fs').readFileSync('/stdin', 'utf8');

const notas = [100, 50, 20, 10, 5, 2];
const moedas = [1, 0.5, 0.25, 0.1, 0.05, 0.01];

function calcularNotasEMoedas(valor) {
  let valorRestante = valor;
  let resultado = [];

  for (let nota of notas) {
    const quantidadeNotas = Math.floor(valorRestante / nota);
    valorRestante -= quantidadeNotas * nota;
    resultado.push(`${quantidadeNotas} nota(s) de R$ ${nota.toFixed(2)}`);
  }
  for (let moeda of moedas) {
    const quantidadeMoedas = Math.floor(valorRestante / moeda);
    valorRestante -= quantidadeMoedas * moeda;
    resultado.push(`${quantidadeMoedas} moeda(s) de R$ ${moeda.toFixed(2)}`);
  }

  return resultado;
}

const valor = 576.73;
const resultado = calcularNotasEMoedas(valor);
console.log(resultado);