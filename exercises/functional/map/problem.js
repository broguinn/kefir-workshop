const breakfastMeats = ["bacon", "Bacon", "sausage", "SauSaGe"]

/*  In the commented out code below, in an imperative style, we update the breakfastMeats array, with standardized capitalization */

// var meat, i, first, rest
// for (i in breakfastMeats) {
//   meat = breakfastMeats[i]
//   first = meat[0].toUpperCase()
//   rest = meat.slice(1, meat.length).toLowerCase()
//   breakfastMeats[i] = first + rest
// }
// // breakfastMeats === ['Bacon', 'Bacon', 'Sausage', 'Sausage']
// console.log(breakfastMeats)

const capitalized;

/*  Rewrite the above in a functional style. You should use the
  breakfastMeats.map method and define a pure capitalize(word) mapper function.
  When you're finished, running `node imperative.js` should print out
  "[ 'Bacon', 'Bacon', 'Sausage', 'Sausage' ]"  */

console.log(capitalized)
// ==> ["Bacon", "Bacon", "Sausage", "Sausage"]
