/**
 * Returns a random number between the given bounds.
 */
export const random = (
    floor: number,
    ceiling: number,
) => (
    floor + (ceiling - floor) * Math.random()
);
/** dts2md break */
/**
 * Clamps x into range [min, max].
 */
export const clamp = (
    x: number,
    min: number,
    max: number,
) => {
    if (x <= min) {
        return min;
    } else if (x >= max) {
        return max;
    } else {
        return x;
    }
};
/** dts2md break */
/**
 * Returns `begin + (end - begin) * k`.
 */
export const interpolate = (
    begin: number,
    end: number,
    k: number,
) => (
    begin + (end - begin) * k
);
/** dts2md break */
/**
 * degrees -> radians
 */
export const deg2rad = (deg: number) => (deg / 180 * Math.PI);
/** dts2md break */
/**
 * radians -> degrees
 */
export const rad2deg = (rad: number) => (rad / Math.PI * 180);
/** dts2md break */
/**
 * Returns the quadratic sum of the given values.
 */
export const quadraticSum = (...values: number[]) => (
    values.reduce((s, x) => (s + x ** 2), 0)
);
