export function objectMap(obj: object, fn: (k: string, v: any, i: number) => any): object {
    return Object.fromEntries(Object.entries(obj).map(([k, v], i) => [k, fn(k, v, i)]));
}
