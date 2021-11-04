// Desafio 1
function compareTrue(n1, n2) {
  if((n1 && n2)){
    return true;
  }else {
    return false;
  };
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let stringArray = string.split(' ', );
  return stringArray;
}

console.log(splitSentence('oi amigos do coração'));

// Desafio 4
function concatName(vetor) {
  return `${vetor[vetor.length - 1]}, ${vetor[0]}`;
};

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 ) + ties ;
};
//Desafio 6
function highestCount(numeros) {
  let resposta = 0;
  let maiorNumero = numeros[0];
  for(let valor of numeros){
    if(valor > maiorNumero) {
      maiorNumero = valor;
    };
  };
  for(let valor of numeros) {
    if(valor === maiorNumero) {
      resposta += 1;
    };
  };
  return resposta;
};



//Desafio 7
function catAndMouse(mouse, cat1, cat2 ) {
  let resposta;
  let calculoCat1 = Math.abs(mouse - cat1);
  let calculoCat2 = Math.abs(mouse - cat2);
  
  if(calculoCat1 === calculoCat2) {
    resposta = 'os gatos trombam e o rato foge';
  }else if(calculoCat1 < calculoCat2){
    resposta = 'cat1';
  }else {
    resposta = 'cat2';
  }
  return resposta;
};

// Desafio 8
function fizzBuzz(numerosArray) {
  let array = [];
  for(let numero of numerosArray) {
    if(numero % 3 === 0 && numero%5 === 0 ) {
      array.push("fizzBuzz");
    }else if(numero % 5 === 0 ){
      array.push("buzz");
    }else if(numero % 3 === 0) {
      array.push("fizz");
    }else {
      array.push("bug!");
    };  
  };
  return array;
}

// Desafio 9
  function encode(letrasParaNumeros) {
    for(let index = 0; index < letrasParaNumeros.length; index +=1) {
      if(letrasParaNumeros[index] === 'a'){
        letrasParaNumeros = letrasParaNumeros.replace('a', '1');
      }else if(letrasParaNumeros[index] === 'e'){
        letrasParaNumeros = letrasParaNumeros.replace('e', '2');
      }else if(letrasParaNumeros[index] === 'i'){
        letrasParaNumeros = letrasParaNumeros.replace('i', '3');
      }else if(letrasParaNumeros[index] === 'o'){
        letrasParaNumeros = letrasParaNumeros.replace('o', '4');
      }else if(letrasParaNumeros[index] === 'u'){
        letrasParaNumeros = letrasParaNumeros.replace('u', '5');
      };
  };
  return letrasParaNumeros;
};

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


