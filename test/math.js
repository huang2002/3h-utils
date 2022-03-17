// @ts-check
const HUtils = /** @type {import('..')} */(
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
            const x = HUtils.random(FLOOR, CEILING);
            ctx.assert(x >= FLOOR, 'x should be greater than or equal to FLOOR');
            ctx.assert(x < CEILING, 'x should be less than CEILING');
        }
    },

    clamp(ctx) {
        ctx.assertStrictEqual(HUtils.clamp(1, 0, 2), 1);
        ctx.assertStrictEqual(HUtils.clamp(0, 0, 2), 0);
        ctx.assertStrictEqual(HUtils.clamp(2, 0, 2), 2);
        ctx.assertStrictEqual(HUtils.clamp(-1, 0, 2), 0);
        ctx.assertStrictEqual(HUtils.clamp(3, 0, 2), 2);
    },

    interpolate(ctx) {
        ctx.assertStrictEqual(HUtils.interpolate(2, 6, .5), 4);
        ctx.assertStrictEqual(HUtils.interpolate(2, 6, 0), 2);
        ctx.assertStrictEqual(HUtils.interpolate(2, 6, 1), 6);
        ctx.assertStrictEqual(HUtils.interpolate(2, 6, -0.5), 0);
        ctx.assertStrictEqual(HUtils.interpolate(2, 6, 1.5), 8);
    },

    deg2rad(ctx) {
        ctx.assertStrictEqual(HUtils.deg2rad(0), 0);
        ctx.assertStrictEqual(HUtils.deg2rad(45), Math.PI / 4);
        ctx.assertStrictEqual(HUtils.deg2rad(90), Math.PI / 2);
        ctx.assertStrictEqual(HUtils.deg2rad(180), Math.PI);
    },

    rad2deg(ctx) {
        ctx.assertStrictEqual(HUtils.rad2deg(0), 0);
        ctx.assertStrictEqual(HUtils.rad2deg(Math.PI / 4), 45);
        ctx.assertStrictEqual(HUtils.rad2deg(Math.PI / 2), 90);
        ctx.assertStrictEqual(HUtils.rad2deg(Math.PI), 180);
    },

    quadraticSum(ctx) {
        ctx.assertStrictEqual(HUtils.quadraticSum(1, 2, 3), 14);
        ctx.assertStrictEqual(HUtils.quadraticSum(3, 4), 25);
        ctx.assertStrictEqual(HUtils.quadraticSum(2), 4);
        ctx.assertStrictEqual(HUtils.quadraticSum(), 0);
    },

};
