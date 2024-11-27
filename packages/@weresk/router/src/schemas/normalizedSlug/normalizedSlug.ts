import { defineType, SanityDocument, SlugSourceContext } from "@sanity/types";
import { LocaleString, localize } from "@weresk/locales";
import { RouterSchemaProps } from "../../types";
import { isUniqueSlugFunction } from "../../utils";

export default function normalizedSlug({ localization, router }: RouterSchemaProps) {
    const defaultLocale = localization?.defaultLocale;
    return defineType({
        name: "normalizedSlug",
        title: "Slug",
        type: "slug",
        description: "Unique part of the link to the page. Max length: 60 characters.",
        options: {
            source: (doc: SanityDocument, options: SlugSourceContext) => {
                if (!Array.isArray(options.parent)) {
                    const title = options.parent.title as LocaleString | string | undefined;
                    return localize(title, defaultLocale);
                }
                return "";
            },
            maxLength: 60,
            isUnique: isUniqueSlugFunction(router),
            slugify: (input: string) =>
                input
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .toLowerCase()
                    .trim()
                    .replace(/[^a-z0-9 -]/g, "")
                    .replace(/\s+/g, "-")
        }
    });
}
