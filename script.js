
//const age = prompt('how areyou age?');


//let acces = age > 10 ? 'Its good': 'Not good';
// if (age >= 10){
//   acces = "Its good";
// } else {
//   acces = "No good"
// }
//document.write(`<h3>${acces}</h3>`);

// let num = 10;
// while (num >= 0) {
//   document.write(`<h4>${num}</h4>`);
//   num --;
//   if( num == 3) {
//     break;
//   }
// }

let num = 0;
let age = prompt('How old are you?');
while (true) {
  if (age > 0 && age < 100) {
    document.write('<h1>Hello it,s good !</h1>')
    break;
  } else {
    age = prompt('inkorrect input');
    document.write('<h1>Goodbye!</h1>');
  }

}