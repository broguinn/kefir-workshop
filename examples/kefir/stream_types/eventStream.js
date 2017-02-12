$ = require('baconjs');
_ = require('lodash');

//stream.holdWhen(@ : EventStream[A], valve : Observable[B]) : EventStream[A]
$.sequentially(200, _.times(30))
.holdWhen(
  $.sequentially(
    1000,
    [false, true, false, true, false, true]))
.onValue(console.log);

// 1valve open
// 2
// 3
// 4
// 5
// valve closed



// 6 7 8 9 10 valve open
// 11
// 12
// 13
// 14
// 15

// stream.skipWhile(property)
// $.sequentially(10, _.times(50))
// .skipWhile(
//   $.sequentially(
//     100,
//     [true, true, true, false, true]).toProperty())
// .onValue(console.log);

//stream.bufferWithTime(delay)
// $.interval(200, 'what a value!')
// .bufferWithTime(1000)
// .onValue(console.log);
