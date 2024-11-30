import { SanityDocument, Slug } from "@sanity/types";
import { LocaleString, LocalizationConfig } from "@weresk/locales";
import { ContactType } from "../schemas";

export interface ReferenceDocument extends SanityDocument {
    _ref?: string;
    _key?: string;
    title?: LocaleString | string;
    slug?: Slug;
    parent?: ReferenceDocument;
}

export interface RouterSchemaProps {
    router: RouterConfig;
    localization?: LocalizationConfig;
}

export type RouterMode = "parent" | "folder";

export interface RouterConfig<DocumentType extends ReferenceDocument = ReferenceDocument> {
    mode: RouterMode;
    schemas: Exclude<DocumentType["_type"], "reference">[];
    routes: Record<Exclude<DocumentType["_type"], "reference">, string>;
    contacts?: ContactType[];
    parentDepth?: number;
}
