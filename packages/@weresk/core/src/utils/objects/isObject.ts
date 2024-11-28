export function isObject(item?: any): boolean {
    return Boolean(item) && typeof item === "object" && !Array.isArray(item);
}
