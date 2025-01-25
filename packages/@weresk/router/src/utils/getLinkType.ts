import { LinkType } from "../schemas";

export function getLinkType(url: string): LinkType {
    if (url.startsWith("#")) {
        return "anchor";
    }
    if (
        url.startsWith("http://") ||
        url.startsWith("https://") ||
        url.startsWith("mailto:" || url.startsWith("www."))
    ) {
        return "external";
    }
    return "internal";
}
