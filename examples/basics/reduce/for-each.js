const breads = ['ciabatta', 'baguette', 'sliced', 'baguette',
                'baguette']

var breadCounter = {};

breads.forEach(bread => {
  breadCounter[bread] ? breadCounter[bread]++ :
                        breadCounter[bread] = 1;
})

console.log(breadCounter);
// { ciabatta: 1, baguette: 3, sliced: 1 }
