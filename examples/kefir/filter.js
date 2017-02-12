$ = require('baconjs');
_ = require('lodash');

//lazily filters
$.sequentially(1000, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
.filter(x => x % 2)
.log()

//can take props
$.interval(100, {archived: false})
.filter('.archived')
.log()
//nothing
