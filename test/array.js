// @ts-check
const HUtils = /** @type {import('..')} */(
    /** @type {unknown} */(require('../dist/3h-utils.umd.js'))
);

/**
 * @type {Record<string, import('3h-test').TestCaseCallback>}
 */
exports.arrayTests = {

    insertElement(ctx) {

        const array0 = [0, 2];

        HUtils.insertElement(array0, 1, 1);
        ctx.assertDeepEqual(array0, [0, 1, 2]);

        HUtils.insertElement(array0, 0, -1);
        ctx.assertDeepEqual(array0, [-1, 0, 1, 2]);

        HUtils.insertElement(array0, 4, 3);
        ctx.assertDeepEqual(array0, [-1, 0, 1, 2, 3]);

        const array1 = [];

        HUtils.insertElement(array1, 0, 0);
        ctx.assertDeepEqual(array1, [0]);

        ctx.expectThrow(RangeError, HUtils.insertElement, [[0, 1], -1, '-1']);
        ctx.expectThrow(RangeError, HUtils.insertElement, [[0, 1], 3, '3']);
        ctx.expectThrow(RangeError, HUtils.insertElement, [[], 1, '1']);

    },

    removeElements(ctx) {

        const array0 = [0, 1, 2, 3];

        HUtils.removeElements(array0, 1, 0);
        ctx.assertDeepEqual(array0, [0, 1, 2, 3]);

        HUtils.removeElements(array0, 1, 1);
        ctx.assertDeepEqual(array0, [0, 2, 3]);

        HUtils.removeElements(array0, 0, 1);
        ctx.assertDeepEqual(array0, [2, 3]);

        HUtils.removeElements(array0, 1, 1);
        ctx.assertDeepEqual(array0, [2]);

        HUtils.removeElements(array0, 0, 1);
        ctx.assertDeepEqual(array0, []);

        const array1 = [0, 1, 2, 3];

        HUtils.removeElements(array1, 2);
        ctx.assertDeepEqual(array1, [0, 1]);

        HUtils.removeElements(array1, 2);
        ctx.assertDeepEqual(array1, [0, 1]);

        ctx.expectThrow(RangeError, HUtils.removeElements, [[0, 1], -1]);
        ctx.expectThrow(RangeError, HUtils.removeElements, [[0, 1], 0, -1]);
        ctx.expectThrow(RangeError, HUtils.removeElements, [[0, 1], 2, 1]);
        ctx.expectThrow(RangeError, HUtils.removeElements, [[0, 1], 1, 2]);

    },

    clampIndex(ctx) {

        ctx.assertStrictEqual(HUtils.clampIndex(0, 6), 0);
        ctx.assertStrictEqual(HUtils.clampIndex(1, 2), 1);
        ctx.assertStrictEqual(HUtils.clampIndex(2, 3), 2);
        ctx.assertStrictEqual(HUtils.clampIndex(-1, 3), 2);
        ctx.assertStrictEqual(HUtils.clampIndex(-1, 1), 0);

        ctx.expectThrow(RangeError, HUtils.clampIndex, [0, 0]);
        ctx.expectThrow(RangeError, HUtils.clampIndex, [1, 1]);
        ctx.expectThrow(RangeError, HUtils.clampIndex, [2, 1]);
        ctx.expectThrow(RangeError, HUtils.clampIndex, [-2, 1]);

    },

    pick(ctx) {

        const array = ['a', 'b', 'c'];
        const values = new Set();

        for (let i = 0; i < 100; i++) {
            const value = HUtils.pick(array);
            ctx.assert(array.includes(value), 'choices should come from the given array');
            values.add(value);
        }

        ctx.assert(values.size === 3, 'poor random result');

    },

};
