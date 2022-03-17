// @ts-check
const HUtils = /** @type {import('..')} */(
    /** @type {unknown} */(require('../dist/3h-utils.umd.js'))
);

/**
 * @type {Record<string, import('3h-test').TestCaseCallback>}
 */
exports.timerTests = {

    throttle(ctx) {

        const GAP = 500;

        let count = 0;

        const callback = () => {
            count++;
        };

        const wrapper = HUtils.throttle(GAP, callback);
        ctx.assertStrictEqual(count, 0);

        wrapper();
        ctx.assertStrictEqual(count, 1);

        wrapper();
        ctx.assertStrictEqual(count, 1);

        ctx.expectResolved(
            new Promise(resolve => {
                setTimeout(() => {
                    wrapper();
                    ctx.assertStrictEqual(count, 2);
                    wrapper();
                    ctx.assertStrictEqual(count, 2);
                    resolve();
                }, GAP + 5);
            }),
            'throttle-async',
        );

    },

    debounce(ctx) {

        const TIMEOUT = 500;

        let count = 0;

        const callback = () => {
            count++;
        };

        const wrapper = HUtils.debounce(TIMEOUT, callback);
        ctx.assertStrictEqual(count, 0);

        wrapper();
        ctx.assertStrictEqual(count, 0);

        ctx.expectResolved(
            new Promise(resolve => {
                setTimeout(() => {
                    ctx.assertStrictEqual(count, 0);
                    wrapper();
                    setTimeout(() => {
                        ctx.assertStrictEqual(count, 1);
                        wrapper();
                        ctx.assertStrictEqual(count, 1);
                        resolve();
                    }, TIMEOUT + 5);
                }, TIMEOUT / 2);
            }),
            'debounce-async',
        );

    },

};
