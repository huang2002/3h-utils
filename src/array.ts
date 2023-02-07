/**
 * Insert an element at specific index of the array.
 * (Throws if `index < 0 || index > array.length`.)
 */
export const insertElement = <T>(
    array: T[],
    index: number,
    element: T,
) => {
    if (index < 0 || index > array.length) {
        throw new RangeError('invalid index to insert');
    }
    if (index === 0) {
        array.unshift(element);
    } else if (index === array.length) {
        array.push(element);
    } else {
        array.length++;
        for (let i = array.length - 1; i > index; i--) {
            array[i] = array[i - 1];
        }
        array[index] = element;
    }
};
/** dts2md break */
/**
 * Remove specific element(s) from the array.
 * (Default count: `Math.max(0, array.length - start)`;
 * throws if `start < 0 || count < 0 || start + count > array.length`.)
 */
export const removeElements = (
    array: any[],
    start: number,
    count = Math.max(0, array.length - start),
) => {
    if (count < 0) {
        throw new RangeError('invalid count');
    }
    if (start < 0 || start + count > array.length) {
        throw new RangeError('invalid index to remove');
    }
    for (let i = start; i < array.length - count; i++) {
        array[i] = array[i + count];
    }
    array.length -= count;
};
/** dts2md break */
/**
 * Try to fit the given index into range [0, arraySize).
 * (Throws if `index < -arraySize || index >= arraySize`.)
 */
export const clampIndex = (
    index: number,
    arraySize: number,
) => {
    if (index < -arraySize || index >= arraySize) {
        throw new RangeError('invalid index');
    }
    if (index < 0) {
        return index + arraySize;
    } else {
        return index;
    }
};
/** dts2md break */
/**
 * Pick a random element from the given array.
 * (Throws if `array.length === 0`.)
 */
export const pick = <T>(array: T[]) => {
    if (array.length === 0) {
        throw new RangeError('no elements to pick');
    }
    return array[Math.floor(array.length * Math.random())];
};
/** dts2md break */
/**
 * A stable in-place sorting function.
 * (Swaps two elements when `compare` returns a positive number.)
 */
export const sort = <T>(
    array: T[],
    compare: (a: T, b: T) => number,
) => {
    let t;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (compare(array[i], array[j]) > 0) {
                t = array[i];
                array[i] = array[j];
                array[j] = t;
            }
        }
    }
};
/** dts2md break */
/**
 * Shuffle the array elements in place.
 */
export const shuffle = <T>(
    array: T[],
) => {
    let j, t;
    for (let i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * i);
        t = array[i];
        array[i] = array[j];
        array[j] = t;
    }
};
/** dts2md break */
/**
 * Get an array containing the unique elements
 * of the given array.
 */
export const unique = <T>(
    array: T[],
) => {
    const result: T[] = [];
    let element: T;
    for (let i = 0; i < array.length; i++) {
        element = array[i];
        if (result.indexOf(element) === -1) {
            result.push(element);
        }
    }
    return result;
};
