// const robotron = document.querySelector("#robotron")

// robotron.addEventListener("click", (evento) => {
//     console.log(evento)
// })

// function dizOi(nome) {
//     console.log("oi" + nome)
//     console.log("Bem-vindo ao Robotron 2000")
// }

// dizOi('Fernanda')


const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica');
console.log(estatisticas)
const pecas = {
  "bracos": {
      "forca": 29,
      "poder": 35,
      "energia": -21,
      "velocidade": -5
  },
  "blindagem": {
      "forca": 41,
      "poder": 20,
      "energia": 0,
      "velocidade": -20
  },
  "nucleos":{
      "forca": 0,
      "poder": 7,
      "energia": 48,
      "velocidade": -24
  },
  "pernas":{
      "forca": 27,
      "poder": 21,
      "energia": -32,
      "velocidade": 42
  },
  "foguetes":{
      "forca": 0,
      "poder": 28,
      "energia": 0,
      "velocidade": -2
  }
}
//console.log(controle)


controle.forEach((elemento) => {
  //console.log(elemento)
  elemento.addEventListener('click', (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
    atualizaEstatisticas(evento.target.dataset.controle, evento.target.dataset.peca);
  })
});


function atualizaEstatisticas(operacao, peca) {
  //console.log(pecas[peca])

  estatisticas.forEach((elemento) => {
    //console.log(elemento.dataset.estatistica);
    if(operacao === '+')
      elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    else
      elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
  })
}

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector('[data-contador]');
  if(operacao === '-') {
    peca.value = parseInt(peca.value) - 1;
  } else {
    peca.value = parseInt(peca.value) + 1;
  }
}

// function alterarCor(cor) {
//   document.querySelector('#robotron').src = `img/robotron-${cor}.png`;
// }