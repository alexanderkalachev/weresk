import { LinkTyped } from "../schemas";
import { ReferenceDocument } from "../types";

export function wrapReference(doc: ReferenceDocument): LinkTyped {
    return {
        _type: "linkTyped",
        type: "reference",
        reference: doc
    };
}
