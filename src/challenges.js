// Desafio 1
function compareTrue(n1, n2) {
  if((n1 && n2 )) {
    return true
  }else{
    return false
  }
};

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


//---------------------------------------------------------------------------------------------------------------------


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
let letras = 'a e i o u';
let listaSubstituicao = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5
};
letrasParaNumeros = letras.replace(/a|e|i|o|u/);
// let alteracaoLista  = listaSubstituicao[letrasParaNumeros];
letras = listaSubstituicao[avogais];

 return letra
}
 
console.log(encode('hi there!'));

let resultado = letras.replace('a', '1', 'e', '2')

console.log(resultado);




function decode(numeroParaLetra) {
  let numeros = '1 2 3 4 5'
  let res1 = numeros.replace('3', '1')
  if(numeroParaLetra == res1) {
    return decode
  }

}
console.log(decode('hi there'));




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



function encode(letrasParaNumeros){
  let array = []
  for (let letra of letrasParaNumeros) {
    array.push(letra)
  }
  for(let index = 0; index == array.length; index +=1) {
    switch(array) {
      case letra[index] == 'a':
        letra[index] = '1';
        break
    }
  }
}

console.log(encode('a'));







