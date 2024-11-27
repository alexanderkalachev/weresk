import { ListItem } from "../../lib";
import { capitalize } from "../text";

export function getTitleByValue(value?: string, items?: ListItem[]): string {
    return value ? items?.find((item) => item.value === value)?.title || capitalize(value) : "";
}
