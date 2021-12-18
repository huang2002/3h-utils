// @ts-check
const Utils = /** @type {import('..')} */(
    /** @type {unknown} */(require('../dist/3h-utils.umd.js'))
);

/**
 * @type {Record<string, import('3h-test').TestCaseCallback>}
 */
exports.mathTests = {

    random(ctx) {
        const FLOOR = 2;
        const CEILING = 6;
        for (let i = 0; i < 100; i++) {
            const x = Utils.random(FLOOR, CEILING);
            ctx.assert(x >= FLOOR, 'x should be greater than or equal to FLOOR');
            ctx.assert(x < CEILING, 'x should be less than CEILING');
        }
    },

    clamp(ctx) {
        ctx.assertStrictEqual(Utils.clamp(1, 0, 2), 1);
        ctx.assertStrictEqual(Utils.clamp(0, 0, 2), 0);
        ctx.assertStrictEqual(Utils.clamp(2, 0, 2), 2);
        ctx.assertStrictEqual(Utils.clamp(-1, 0, 2), 0);
        ctx.assertStrictEqual(Utils.clamp(3, 0, 2), 2);
    },

    interpolate(ctx) {
        ctx.assertStrictEqual(Utils.interpolate(2, 6, .5), 4);
        ctx.assertStrictEqual(Utils.interpolate(2, 6, 0), 2);
        ctx.assertStrictEqual(Utils.interpolate(2, 6, 1), 6);
        ctx.assertStrictEqual(Utils.interpolate(2, 6, -0.5), 0);
        ctx.assertStrictEqual(Utils.interpolate(2, 6, 1.5), 8);
    },

    deg2rad(ctx) {
        ctx.assertStrictEqual(Utils.deg2rad(0), 0);
        ctx.assertStrictEqual(Utils.deg2rad(45), Math.PI / 4);
        ctx.assertStrictEqual(Utils.deg2rad(90), Math.PI / 2);
        ctx.assertStrictEqual(Utils.deg2rad(180), Math.PI);
    },

    rad2deg(ctx) {
        ctx.assertStrictEqual(Utils.rad2deg(0), 0);
        ctx.assertStrictEqual(Utils.rad2deg(Math.PI / 4), 45);
        ctx.assertStrictEqual(Utils.rad2deg(Math.PI / 2), 90);
        ctx.assertStrictEqual(Utils.rad2deg(Math.PI), 180);
    },

    quadraticSum(ctx) {
        ctx.assertStrictEqual(Utils.quadraticSum(1, 2, 3), 14);
        ctx.assertStrictEqual(Utils.quadraticSum(3, 4), 25);
        ctx.assertStrictEqual(Utils.quadraticSum(2), 4);
        ctx.assertStrictEqual(Utils.quadraticSum(), 0);
    },

};
