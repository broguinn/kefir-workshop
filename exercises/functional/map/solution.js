const breakfastMeats = ["bacon", "Bacon", "sausage", "SauSaGe"]

const capitalize = word =>
  word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();

const capitalized = breakfastMeats.map(capitalize);
console.log(capitalized)
