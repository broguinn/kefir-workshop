K = require('kefir');
_ = require('lodash');

K.sequentially(1000, _.times(10))
  .bufferWhile(x => x < 4)
  .log();

const laterFalse =
  K.interval(1000, false)
    .toProperty(() => true)
    .delay(5000)
    .log('later');

K.sequentially(1000, _.times(10))
  .bufferWhileBy(laterFalse, {  })
  .log();
