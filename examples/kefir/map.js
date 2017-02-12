$ = require('baconjs');
_ = require('lodash');

$.sequentially(100, _.times(10))
.map(v => console.log('Lazy!'))

$.sequentially(100, _.times(10))
.map(v => console.log('Is asked for'))
.log('thanks for the value');

// $.sequentially(100, _.times(10))
// .map(20)
// .onValue(v => console.log(v));
