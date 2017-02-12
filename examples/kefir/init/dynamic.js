K = require('kefir');

//promises or callbacks, also fromNodeCallback
K.fromPromise(openSSEStream());

K.fromCallback(done =>
  openSSEStream()
  .then(done));

const openSSEStream = () => new Promise(
  (res, rej) => res('a stream'));

//Events in the DOM
K.fromEvents(document.body, 'keypress');
//from a node EventEmitter
K.fromEvents(new EventEmitter(), 'data');
