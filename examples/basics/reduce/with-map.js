//How many vowels are in these fruits?
//grab vowels
//count
//add to total

const fruits = ['Apple', 'Banana', 'Apple', 'Durian', 'Bacon', 'Durian']

const countVowels = item =>
  item.toLowerCase()
    .split('')
    .filter(isIn('aeiou'.split('')))
    .length;

const isIn = array => item => array.indexOf(item) !== -1;
const add = (a, b) =>  a + b;

console.log(
  fruits
  .map(countVowels)
  .reduce(add, 0));
