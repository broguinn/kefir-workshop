$ = require('baconjs');
_ = require('lodash');

const stream = $.fromEvent(someEvent);
aProcess(stream.latestValue); //no wrong bad

stream.onValue(aProcess); //ok better

const property = stream.toProperty();
setInterval(v => aProcess(property.latestValue), 100) //no gross

property.sample(100).onValue(aProcess); //better
property.sampledBy($.interval(100)); //also okay

function aProcess() {}
