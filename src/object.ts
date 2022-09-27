/**
 * Type of {@link merge}.
 */
interface Merge {
    (objects: []): {};
    <T>(objects: [T]): T;
    <T, U>(objects: [T, U]): T & U;
    <T, U, V>(objects: [T, U, V]): T & U & V;
    <T, U, V, W>(objects: [T, U, V, W]): T & U & V & W;
    (objects: any[]): any;
}
/** dts2md break */
/**
 * Merge the given objects into a new one.
 */
export const merge: Merge = (objects: unknown[]) => (
    Object.assign(
        Object.create(null),
        ...objects,
    )
);
/** dts2md break */
/**
 * Returns `Object.prototype.toString.call(value) === '[object Object]'`.
 */
export const isDict = (value: unknown): value is Record<any, any> => (
    Object.prototype.toString.call(value) === '[object Object]'
);
