const breakfastMeats =
  ["bacon", "Bacon", "sausage", "SauSaGe"];

const capitalize = word =>
  word[0].toUpperCase() +
  word.slice(1, word.length).toLowerCase();

const isUnique = (x, i, xs) =>
  xs.indexOf(x) === i;

const wrap = (pre, post) =>
  (content, word) =>
    content + pre + word + post;

const paragraphs = breakfastMeats
  .map(capitalize)
  .filter(isUnique)
  .reduce(wrap('<p>', '</p>'), '');

console.log(paragraphs);
