// using bind
const add = (a, b) => a + b;
console.log(
  [1, 2, 3].map(add.bind(null, 5))
);
// >> [6, 7, 8]

// roll-your-own
const addVal = value => number => number + value;
console.log(
  [1, 2, 3].map(addVal(5))
);
// >> [6, 7, 8]
