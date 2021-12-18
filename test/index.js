// @ts-check
const { test } = require('3h-test');
const { arrayTests } = require('./array.js');
const { mathTests } = require('./math.js');

test(null, {
    ...arrayTests,
    ...mathTests,
});
