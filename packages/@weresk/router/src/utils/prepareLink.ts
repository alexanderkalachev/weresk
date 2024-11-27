import { ISO_LOCALES, IsoLocale } from "@weresk/locales";
import { LinkTyped } from "../schemas";
import { RouterConfig } from "../types";
import { normalizeLink } from "./normalizeLink";
import { getDocumentPath } from "./getDocumentPath";

export function prepareLink(input: LinkTyped, router: RouterConfig, lang?: IsoLocale): string {
    const { type, anchor, href, internal, reference, file } = input;
    // External – return href
    if ((!type || type === "external") && href) {
        return href;
    }
    // Anchor – check for anchor symbol and normalize
    else if (type === "anchor" && anchor) {
        return normalizeLink(anchor.startsWith("#") ? anchor : `#${anchor}`);
    }
    // File - return file URL if its defined
    else if (type === "file") {
        return file?.url || file?.asset?.url || "";
    }
    // Internal – check for locale segment, normalize and and locale segment if needed
    else if (type === "internal" && internal) {
        const path = internal.split("/");
        const firstSegment = path[0] || path[1];
        const hasLocale = ISO_LOCALES.some((l) => firstSegment === l);
        const link = normalizeLink(
            internal.startsWith("/") || internal.startsWith("?") || internal.startsWith("#") ? internal : `/${internal}`
        );
        return !hasLocale && lang && internal.startsWith("/") ? `/${lang}${link}` : link;
    }
    // Reference – return document path, add locale if needed
    else if (type === "reference" && reference) {
        const link = getDocumentPath(reference, router);
        return lang ? `/${lang}${link}` : link;
    }

    return "";
}
