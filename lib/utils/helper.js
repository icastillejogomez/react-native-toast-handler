export function isFunction(value) {
    return typeof value === 'function';
}
export function isString(value) {
    return typeof value === 'string';
}
export function isObject(value) {
    return typeof value === 'object';
}
export function isEmpty(value) {
    return value === undefined || value === null;
}
