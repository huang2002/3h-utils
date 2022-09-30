/**
 * Type of throttle wrappers.
 * (When invocation gap is less than specific value,
 * the callback won't be invoked
 * and `undefined` will be returned.)
 */
export interface ThrottleWrapper<T extends (...args: any) => any> {
    (...args: Parameters<T>): ReturnType<T> | undefined;
    throttleGap: number;
}
/** dts2md break */
/**
 * Create a throttle wrapper.
 */
export const throttle = <T extends (...args: any) => any>(
    gap: number,
    callback: T,
): ThrottleWrapper<T> => {
    let lastInvokeTime: number | null = null;
    const throttleWrapper: ThrottleWrapper<T> = (...args) => {
        const now = Date.now();
        if (
            (lastInvokeTime === null)
            || (now - lastInvokeTime >= throttleWrapper.throttleGap)
        ) {
            lastInvokeTime = now;
            return callback(...(args as unknown[]));
        }
    };
    throttleWrapper.throttleGap = gap;
    return throttleWrapper;
};
/** dts2md break */
/**
 * Type of debounce wrappers.
 * (Invokes the callback after specific timeout.
 * Duplicate invocation resets the timer.)
 */
export interface DebounceWrapper<T extends (...args: any) => any> {
    (...args: Parameters<T>): void;
    debounceTimeout: number;
}
/** dts2md break */
/**
 * Create a debounce wrapper.
 */
export const debounce = <T extends (...args: any) => any>(
    timeout: number,
    callback: T,
): DebounceWrapper<T> => {
    let timer: any = null;
    const debounceWrapper: DebounceWrapper<T> = (...args) => {
        if (timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(
            callback,
            debounceWrapper.debounceTimeout,
            ...(args as unknown[]),
        );
    };
    debounceWrapper.debounceTimeout = timeout;
    return debounceWrapper;
};
