const breads = ['ciabatta', 'baguette', 'sliced', 'baguette',
                'baguette']

const breadCount = breads.reduce((accumulator, value) => {
  accumulator[value] ? accumulator[value]++ :
                       accumulator[value] = 1;
  return accumulator;
}, {});

console.log(breadCount);
// { ciabatta: 1, baguette: 3, sliced: 1 }
