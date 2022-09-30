// @ts-check
const { test } = require('3h-test');
const { arrayTests } = require('./array.js');
const { mathTests } = require('./math.js');
const { objectTests } = require('./object.js');
const { functionTests } = require('./function.js');

test(null, {
    ...arrayTests,
    ...objectTests,
    ...mathTests,
    ...functionTests,
});
