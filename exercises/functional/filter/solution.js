const breakfastMeats = ["bacon", "Bacon", "sausage", "SauSaGe"];

const capitalize = word =>
  word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();

const isUnique = (x, i, xs) => xs.indexOf(x) === i;

const simplified = breakfastMeats.map(capitalize).filter(isUnique);
console.log(simplified);
