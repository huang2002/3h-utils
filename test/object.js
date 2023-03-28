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

        const result1 = HUtils.merge(foo, bar);
        ctx.assert(result1 !== foo);
        ctx.assertDeepEqual(result1, { a: -1, b: 1, c: 2 });

        const result2 = HUtils.merge(foo, baz);
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

    cloneShallowly(ctx) {
        const objectSource = { a: 0, b: { c: 1 } };
        const objectCopy = HUtils.cloneShallowly(objectSource);
        ctx.assertStrictEqual(objectCopy.a, objectSource.a);
        ctx.assertStrictEqual(objectCopy.b, objectSource.b);
        /**
         * @type {[number, [number]]}
         */
        const arraySource = [0, [1]];
        const arrayCopy = HUtils.cloneShallowly(arraySource);
        ctx.assertStrictEqual(arrayCopy.length, arraySource.length);
        ctx.assertStrictEqual(arrayCopy[0], arraySource[0]);
        ctx.assertStrictEqual(arrayCopy[1].length, arraySource[1].length);
        ctx.assertStrictEqual(arrayCopy[1], arraySource[1]);
    },

    cloneDeeply(ctx) {
        const source = { a: 0, b: [1] };
        const copy = HUtils.cloneDeeply(source);
        ctx.assertStrictEqual(copy.a, source.a);
        ctx.assert(copy.b !== source.b);
        ctx.assertStrictEqual(copy.b.length, source.b.length);
        ctx.assertStrictEqual(copy.b[0], source.b[0]);
    },

};
