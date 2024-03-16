function getLetter (str, index) {
  if(index >= 1 && index <= str.length ){
    return str[index - 1];
  } else {
    return '';
  }

};
console.log(getLetter('hdksjf', 15));
console.log(getLetter('hdksjf', 5));
console.log(getLetter('hdksjf', 15));
console.log(getLetter('hdksjf', 1))