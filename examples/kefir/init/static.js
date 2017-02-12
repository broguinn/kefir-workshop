K = require('kefir');
_ = require('lodash');

const sec = 1000;

K.interval(sec, 'Event: 42');

K.interval(sec, 'Event: 42')
  .log();

//oh god make it stop
const eternity = K.interval(sec, 'Event: 42');

eternity.log();
eternity.offLog();

K.sequentially(sec, [0, 1, 2])
  .log();

K.sequentially(sec, _.times(3))
  .log();
