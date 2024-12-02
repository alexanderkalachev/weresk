import { LinkCaptioned, LinkTyped } from "../schemas";
import { ReferenceDocument } from "../types";

export function toLinkCaptioned<Reference extends ReferenceDocument = ReferenceDocument>(
    doc: Reference
): LinkCaptioned<NonNullable<Reference["title"]>, LinkTyped<Reference>> {
    return {
        _type: "linkCaptioned",
        _key: doc._key || doc._id,
        caption: doc.title,
        link: {
            _type: "linkTyped",
            type: "reference",
            reference: doc
        }
    };
}
