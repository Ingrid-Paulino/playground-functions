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
  for(let index = 0; index < numeros.length; index += 1) {  let nRepete = 1;
    let qtdRepete = 0;
    for(let indexIgual = 0; indexIgual < numeros.length; indexIgual += 1) {
      if(numeros[index] == numeros[indexIgual]) {
      nRepete += 1
      qtdRepete = numeros[index];
      }
    }
    return qtdRepete
  }
}
console.log(highestCount([10, 1, 10, 3, 5, 3, 7]));


//Desafio 7
function catAndMouse(mouse, cat1, cat2 ) {
  let calculoCat1 = mouse - cat1;
  let calculoCat2 = mouse - cat2;
  if(calculoCat1 > calculoCat2) {
    return 'cat1';
  }else if(calculoCat1 < calculoCat2){
    return 'cat2';
  } else {
    return "Os gatos trombam e o rato foge";
  }
  
 
}
  console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(numerosArray) {
  
  for(let index = 0; index < numerosArray.length; index += 1) {
    let res = '';
    if(numerosArray[index]%3 == 0) {
      return "fizz";
      res.push([index])
    }else if(numerosArray[index]%5 == 0 ){
      return "buzz";
    }else if(numerosArray[index]%3 == 0 && numerosArray[index]%5 == 0 ) {
      return "fizzBuzz";
    }else {
      return "bug!";
    };  
  }
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
  function encode(letrasParaNumeros) {
    for(let index = 0; index < letrasParaNumeros.length; index +=1) {
      if(letrasParaNumeros[index] == 'a'){
        letrasParaNumeros = letrasParaNumeros.replace('a', '1')
      }else if(letrasParaNumeros[index] == 'e'){
        letrasParaNumeros = letrasParaNumeros.replace('e', '2')
      }else if(letrasParaNumeros[index] == 'i'){
        letrasParaNumeros = letrasParaNumeros.replace('i', '3')
      }else if(letrasParaNumeros[index] == 'o'){
        letrasParaNumeros = letrasParaNumeros.replace('o', '4')
      }else if(letrasParaNumeros[index] == 'u'){
        letrasParaNumeros = letrasParaNumeros.replace('u', '5')
      }
  }
  return letrasParaNumeros
}

console.log(encode('hi there!'));

function decode(numeroParaLetra) {
  for(let index = 0; index < numeroParaLetra.length; index +=1) {
    if(numeroParaLetra[index] == '1'){
      numeroParaLetra = numeroParaLetra.replace('1', 'a')
    }else if(numeroParaLetra[index] == '2'){
      numeroParaLetra = numeroParaLetra.replace('2', 'e')
    }else if(numeroParaLetra[index] == '3'){
      numeroParaLetra = numeroParaLetra.replace('3', 'i')
    }else if(numeroParaLetra[index] == '4'){
      numeroParaLetra = numeroParaLetra.replace('4', 'o')
    }else if(numeroParaLetra[index] == '5'){
      numeroParaLetra = numeroParaLetra.replace('5', 'u')
    }
}
  return numeroParaLetra
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