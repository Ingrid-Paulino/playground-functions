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
function generatePhoneNumber() {
  // seu código aqui
}

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
