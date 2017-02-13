K = require('kefir');
_ = require('lodash');

//lazily filters
K.sequentially(1000, _.times(10))
.filter(x => x % 2)
.log();

const blinker = K.sequentially(2000, [true, false, true, false, true]);
K.sequentially(1000, _.times(10))
  .filterBy(blinker)
  .log('blinking');
