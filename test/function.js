// @ts-check
const HUtils = /** @type {import('..')} */(
    /** @type {unknown} */(require('../dist/3h-utils.umd.js'))
);

/**
 * @type {import('3h-test').TestCases}
 */
exports.functionTests = {

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
            new Promise(
                /**
                 * @param {(value: void) => void} resolve
                 */
                (resolve) => {
                    setTimeout(() => {
                        wrapper();
                        ctx.assertStrictEqual(count, 2);
                        wrapper();
                        ctx.assertStrictEqual(count, 2);
                        resolve();
                    }, GAP + 5);
                }
            ),
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
            new Promise(
                /**
                 * @param {(value: void) => void} resolve
                 */
                (resolve) => {
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
                }
            ),
            'debounce-async',
        );

    },

    lock(ctx) {
        const data = [];
        const wrapper = HUtils.lock((x) => {
            data.push(x);
            setTimeout(() => {
                wrapper.disabled = false;
            }, 100);
        });
        ctx.expectResolved(
            new Promise(
                /**
                 * @param {(value: void) => void} resolve
                 */
                (resolve) => {
                    wrapper(0);
                    setTimeout(() => {
                        wrapper(1);
                    }, 50);
                    setTimeout(() => {
                        wrapper(2);
                    }, 150);
                    setTimeout(() => {
                        ctx.assertDeepEqual(data, [0, 2]);
                        resolve();
                    }, 200);
                }
            ),
            'lock-async',
        );
    },

};
