$ = require('baconjs');
_ = require('lodash');

const model = {
  total: 0,
  addValue(value) {
    if (value > 1) model.total += value;
  }
}

const twos = $.interval(100, 2)
.toProperty()

twos.assign(model, 'addValue')
twos.onValue(v => console.log(model))
