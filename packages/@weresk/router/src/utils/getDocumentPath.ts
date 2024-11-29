import { ReferenceDocument, RouterConfig } from "../types";

export function getDocumentPath(doc: ReferenceDocument | undefined, config: RouterConfig): string {
    const { mode, routes, parentDepth = 5 } = config;
    if (doc) {
        if (mode === "folder") {
            const folder = routes[doc._type];
            return `/${folder ? folder + "/" : ""}${doc.slug?.current || ""}`;
        } else if (mode === "parent") {
            let path = "/" + (doc.slug?.current || "");
            let parent = doc.parent;
            let depth = parentDepth;
            while (parent?.slug?.current && depth > 0) {
                path = `/${parent.slug.current}${path}`;
                parent = parent.parent;
                depth--;
            }
            return path;
        }
    }
    return "/";
}
