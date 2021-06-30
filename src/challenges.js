// Desafio 1
function compareTrue(n1, n2) {
  if((n1 && n2 )) {
    return true
  }else{
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2
}

// Desafio 3
function splitSentence(string) {
  let stringArray = string.split(' ', );
  return stringArray;
}

// Desafio 4
function concatName(vetor) {
  return `${vetor[vetor.length -1]}, ${vetor[0]}`
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 ) + ties ;
}

// Desafio 6
function highestCount(numeros) {
  let nRepete = 0;
  for(let index = 0; index < numeros.length; index += 1) {
    if(numeros[index] === numeros[index]) {
      nRepete += numeros[index]
      return nRepete
    }
  }
}
console.log(highestCount([9, 1, 2, 3, 5, 3, 7]));


//Desafio 7
function catAndMouse(mouse, cat1, cat2 ) {
  let calculoCat1 = mouse - cat1;
  let calculoCat2 = mouse - cat2;
  if(calculoCat1 > calculoCat2) {
    return 'cat1';
  }else if(calculoCat1 < calculoCat2){
    return 'cat2';
  }else {
    return "Os gatos trombam e o rato foge";
  }
}
  console.log(catAndMouse(8, 6, 12));

// Desafio 8
function fizzBuzz(numerosArray) {
  for(let index = 0; index < numerosArray.length; index += 1) {
    if((numerosArray[index]/3) % 0) {
      return "fizz";
    }else if((numerosArray[index]/5) % 0 ){
      return "buzz";
    }else if((numerosArray[index]/3) % 0 && (numerosArray[index]/5) % 0 ) {
      return "fizzBuzz";
    }else {
      return "bug!";
    };  
  }
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
  function encode(letrasParaNumeros) {
    let frase = '';
    frase = letrasParaNumeros.replace(/a/g, '1');
    frase = letrasParaNumeros.replace(/e/g, '2');
    frase = letrasParaNumeros.replace(/i/g, '3');
    frase = letrasParaNumeros.replace(/o/g, '4');
    frase = letrasParaNumeros.replace(/u/g, '5');
    return frase
    }
console.log(encode('hi there!'));

function decode(numeroParaLetra) {
  let frase2 = '';
  frase2 = numeroParaLetra.replace(/1/g, 'a');
  frase2 = numeroParaLetra.replace(/2/g, 'e');
  frase2 = numeroParaLetra.replace(/3/g, 'i');
  frase2 = numeroParaLetra.replace(/4/g, 'o');
  frase2 = numeroParaLetra.replace(/3/g, 'u');
  return frase2
}
console.log(decode('h3 th2r2!'));


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