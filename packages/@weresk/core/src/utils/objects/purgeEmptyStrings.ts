import { objectMap } from "./objectMap";

export function purgeEmptyStrings<T extends object>(obj: T): Partial<T> {
    return objectMap(obj, (key: string, value: any) => (value !== "" ? value : undefined));
}
