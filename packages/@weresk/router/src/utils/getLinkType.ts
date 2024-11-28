import { LinkType } from "../schemas";

export function getLinkType(input: string): LinkType {
    if (input.startsWith("#")) {
        return "anchor";
    }
    if (
        input.startsWith("http://") ||
        input.startsWith("https://") ||
        input.startsWith("mailto:" || input.startsWith("www."))
    ) {
        return "external";
    }
    return "internal";
}
