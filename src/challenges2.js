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
/**
 * Consultei o repositório do Lucas Oliveira para resolver essa parte.
 * Link https://github.com/tryber/sd-014-a-project-playground-functions/pull/112
 */
function generatePhoneNumber(array) {
  let qtd = array.reduce((acumulador, elemento) => {
    acumulador[elemento] = (elemento in acumulador ? acumulador[elemento] + 1 : 1);
    return acumulador;
  }, {});

  if (array.length !== 11) return 'Array com tamanho incorreto.';
  if (array.some((e) => e < 0 || e > 9 || qtd[e] >= 3)) return 'não é possível gerar um número de telefone com esses valores';

  const op = array.splice(0, 2).join('');
  const part1 = array.splice(0, 5).join('');
  const tel = `(${op}) ${part1}-${array.join('')}`;

  return tel;
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
