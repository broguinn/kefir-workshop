$ = require('baconjs');
_ = require('lodash');

//map vs flatMap

const counter = $.interval(100)

const mapCounter = counter.map(val => new Date().getTime())
  .toProperty();
const sampler = mapCounter.sampledBy(
  $.interval(1000).delay(500))
  .log('map : ');

// const flatCounter = counter.flatMap(val => new Date().getTime())
//   .toProperty();
// const flatSampler = flatCounter.sampledBy(
//   $.interval(1000).delay(500))
//   .log('flat: ');
