// reduce count word instance

const breads = ['ciabatta', 'baguette', 'sliced', 'baguette',
                'baguette']

var breadCounter = {};

for (i = 0; i < breads.length; i++) {
  var bread = breads[i];
  breadCounter[bread] ? breadCounter[bread]++ :
                        breadCounter[bread] = 1;
}

console.log(breadCounter);
//{ ciabatta: 1, baguette: 3, sliced: 1 }
