// @ts-check
const HUtils = /** @type {import('..')} */(
    /** @type {unknown} */(require('../dist/3h-utils.umd.js'))
);

/**
 * @type {import('3h-test').TestCases}
 */
exports.objectTests = {

    merge(ctx) {

        const foo = { a: 0, b: 1 };
        const bar = { a: -1, c: 2 };
        const baz = { d: 3 };

        const result1 = HUtils.merge([foo, bar]);
        ctx.assert(result1 !== foo);
        ctx.assertDeepEqual(result1, { a: -1, b: 1, c: 2 });

        const result2 = HUtils.merge([foo, baz]);
        ctx.assert(result2 !== foo);
        ctx.assertDeepEqual(result2, { a: 0, b: 1, d: 3 });

    },

    isDict(ctx) {
        ctx.assertStrictEqual(HUtils.isDict({}), true);
        ctx.assertStrictEqual(HUtils.isDict({ foo: 'bar' }), true);
        ctx.assertStrictEqual(HUtils.isDict(Object.create(null)), true);
        ctx.assertStrictEqual(HUtils.isDict(Object()), true);
        ctx.assertStrictEqual(HUtils.isDict(new Object()), true);
        ctx.assertStrictEqual(HUtils.isDict(Object), false);
        ctx.assertStrictEqual(HUtils.isDict(Array), false);
        ctx.assertStrictEqual(HUtils.isDict([]), false);
    },

};
