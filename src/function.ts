/**
 * Type of throttle wrappers.
 * (When invocation gap is less than specific value,
 * the callback won't be invoked
 * and `undefined` will be returned.)
 */
export interface ThrottleWrapper<T extends (...args: any[]) => any> {
    (...args: Parameters<T>): ReturnType<T> | undefined;
    throttleGap: number;
}
/** dts2md break */
/**
 * Create a throttle wrapper.
 */
export const throttle = <T extends (...args: any[]) => any>(
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
            return callback(...args);
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
export interface DebounceWrapper<T extends (...args: any[]) => any> {
    (...args: Parameters<T>): void;
    debounceTimeout: number;
}
/** dts2md break */
/**
 * Create a debounce wrapper.
 */
export const debounce = <T extends (...args: any[]) => any>(
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
            ...args,
        );
    };
    debounceWrapper.debounceTimeout = timeout;
    return debounceWrapper;
};
/** dts2md break */
/**
 * Type of lock wrappers.
 * (If `disabled` is `false`(default state), set it to `true`
 * and invoke the callback; otherwise, return `undefined`.
 * You will need to manually reset `disabled` to `false`,
 * to make the callback available again.)
 */
export interface LockWrapper<T extends (...args: any[]) => any> {
    (...args: Parameters<T>): ReturnType<T> | undefined;
    disabled: boolean;
}
/** dts2md break */
/**
 * Create a lock wrapper.
 */
export const lock = <T extends (...args: any[]) => any>(
    callback: T,
): LockWrapper<T> => {
    const wrapper: LockWrapper<T> = (...args) => {
        if (!wrapper.disabled) {
            wrapper.disabled = true;
            return callback(...args);
        }
    };
    wrapper.disabled = false;
    return wrapper;
};
