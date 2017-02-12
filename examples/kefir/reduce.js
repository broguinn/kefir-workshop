$ = require('baconjs');
_ = require('lodash');

const countTen = $.sequentially(100, _.times(10));

// countTen.scan(0, add)
// .log('scan');

// countTen.fold(0, add)
// .log('fold');

countTen.toProperty(50)
.scan(100, add)
.log('propertyScan')

function add (a, b) {return a + b}
