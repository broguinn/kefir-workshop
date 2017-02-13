K = require('kefir');
_ = require('lodash');

K.sequentially(1000, _.times(10))
.map(v => console.log('Lazy!'))

K.sequentially(1000, _.times(10))
.map(v => console.log('Is asked for'))
.log('thanks for the value');

K.sequentially(1000, _.times(10))
.map(v => 20)
.onValue(v => console.log(v));
