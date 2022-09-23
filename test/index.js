// @ts-check
const { test } = require('3h-test');
const { arrayTests } = require('./array.js');
const { mathTests } = require('./math.js');
const { objectTests } = require('./object.js');
const { timerTests } = require('./timer.js');

test(null, {
    ...arrayTests,
    ...objectTests,
    ...mathTests,
    ...timerTests,
});
