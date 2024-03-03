const person = {
  firstName: 'Pavel',
  lastName: 'Koryagin',
  age: 47,
  city:'Usolie-Sib',
  married: true,
  languages: {
    english: 'b3',
    franse: 'b2',
  }
};

//console.log(person.languages.franse, person.firstName);
// for(let key in person){
//   console.log(person[k]);
// }
const array = [1, 3, 6, 31, 89];
for (let num of array){
  console.log(num);
}
console.log(array[3])