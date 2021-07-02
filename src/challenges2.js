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
  
  return array

}
console.log(generatePhoneNumber([3,1,9,9,2,6,4,4,5,1,5]))
















// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
