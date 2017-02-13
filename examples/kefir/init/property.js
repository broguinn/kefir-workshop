K = require('kefir');

K.constant(5).log();
K.constantError('hi hello I\'m nick').log();

const counterProp = K.sequentially(1000, _.times(10));
counterProp.toProperty(() => 5).log();
