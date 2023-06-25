const pessoas = [
  { name: 'João', num: 9 },
  { name: 'Maria', num: 3 },
  { name: 'Carlos', num: 4 },
  
];

//Calculs o número de tortas necessárias
function calcularNumeroDeTortas(pessoas, quantidadePedacos) {
  const totalPedacos = pessoas.reduce((sum, pessoa) => sum + pessoa.num, 0);
  const numeroTortas = Math.ceil(totalPedacos / quantidadePedacos);
  return numeroTortas;
}

const quantidadePedacosPorTorta = 8; // Pedaços por torta
const numeroTortasNecessarias = calcularNumeroDeTortas(pessoas, quantidadePedacosPorTorta);

 document.getElementById("resultado").innerHTML = numeroTortasNecessarias;
