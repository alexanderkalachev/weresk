import { LocaleString } from "@weresk/locales";
import { LinkCaptioned, LinkTyped } from "../schemas";
import { ReferenceDocument } from "../types";

export function toLinkCaptioned<
    Caption extends LocaleString | string = string,
    Reference extends ReferenceDocument = ReferenceDocument
>(doc: Reference, caption: Caption): LinkCaptioned<Caption, LinkTyped<Reference>> {
    return {
        _type: "linkCaptioned",
        _key: doc._key || doc._id,
        caption,
        link: {
            _type: "linkTyped",
            type: "reference",
            reference: doc
        }
    };
}
