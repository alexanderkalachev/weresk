import { LinkTyped } from "../schemas";
import { ReferenceDocument } from "../types";

export function wrapReference<Reference extends ReferenceDocument = ReferenceDocument>(
    doc: Reference
): LinkTyped<Reference> {
    return {
        _type: "linkTyped",
        type: "reference",
        reference: doc
    };
}
