// Desafio 10
function techList(tecnologias, name) {
  let array = [];
  let arrayOrganiza = tecnologias.sort();
  let cont = 0;
  for(let index = 0; index < tecnologias.length; index += 1) {
     let techtechObj = {
    tech: arrayOrganiza[index],
    name: name
  }
  array.push(techtechObj)
  cont+=1
  }
  if(cont == 0){
    return 'Vazio!'
  }else{
    return array
  }
}

// Desafio 11
function generatePhoneNumber(numeros) {
  let array = [];
  
  array.push('(')
  for(let index = 0; index < numeros.length - 9; index += 1) {
    array.push(numeros[index])
  }
  array.push(')')
  array.push('')
  for(let index2 = 2; index2 <numeros.length - 4; index2 += 1 ){
    array.push(numeros[index2])
  }
  array.push('-')
  for(let index3 = 7; index3 <numeros.length; index3 += 1 ){
    array.push(numeros[index3])
  }
  array = array.join('')
  // for(let i = 3; i < array.length - 10; i +=1) {
  //   array[i].join('');
  // }

  if(numeros.length !== 11) {
    array = "Array com tamanho incorreto."
  }else if(numeros < 0 || numeros > 9) {
    array = "não é possível gerar um número de telefone com esses valores"
  }


  return array

}
console.log(generatePhoneNumber([3,1,9,9,2,6,4,4,5,1,5]))











// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let soma = lineB + lineC;
  let subtracao = lineB - lineC;
  let res = '';

  if(lineA > soma) {
    res = false
  }else if(lineA < subtracao) {
    res = false
  }else if(lineA < soma && lineA > subtracao) {
    res = true
  }
  return res;
}
console.log(triangleCheck(30, 10, 10))




// Desafio 13
function hydrate(string) {
  var pegaN = /\d+/g;
  var numero =string.match(pegaN)
  var soma = 0;
  for(let index = 0; index < numero.length; index += 1) {
    soma = soma + Number(numero[index]) 
  };
  
  if(soma < 2) {
    return `${soma} copo de água`;
  }else {
    return `${soma} copos de água`;
  };

}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
}
