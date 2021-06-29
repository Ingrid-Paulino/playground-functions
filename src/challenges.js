// Desafio 1
function compareTrue(n1, n2) {
  // seu código aqui
  if((n1 && n2 )) {
    return true
  }else{
    return false
  }
};

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base*height)/2
}


// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let stringArray = string.split(' ', );
  return stringArray;
}
console.log(splitSentence("vamo que vamo"));

// Desafio 4
function concatName(vetor) {
  // seu código aqui
  // for(let index = 0; index < vetor.lenght; index += 1) {
  // }
  return vetor[0] + vetor[vetor.lenght -1]
} 
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))






// Desafio 5
const vitoria = 3;
const empate = 1;
const gol = 0;
function footballPoints(wins, ties) {
  // seu código aqui


}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
