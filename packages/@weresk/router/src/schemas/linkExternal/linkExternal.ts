import { defineType, defineField } from "@sanity/types";
import { LinkIcon } from "@sanity/icons";
import { LocaleString, localize } from "@weresk/locales";
import { RouterSchemaProps } from "../../types";

export interface LinkExternal<Caption extends LocaleString | string = string> {
    _type: "linkExternal";
    _key: string;
    caption?: Caption;
    href?: string;
}

export default function linkExternal({ localization }: RouterSchemaProps) {
    const defaultLocale = localization?.defaultLocale || "en";
    return defineType({
        name: "linkExternal",
        title: "Link",
        type: "object",
        fields: [
            defineField({
                name: "caption",
                title: "Caption",
                type: localization ? "localeString" : "string",
                options: {
                    collapsed: false
                }
            }),
            defineField({
                name: "href",
                title: "URL",
                type: "url",
                description: `URL starts with "http://" or "https://" and email with "mailto"`,
                validation: (Rule) =>
                    Rule.uri({
                        scheme: ["http", "https", "mailto"]
                    })
            })
        ],
        preview: {
            select: {
                caption: "caption",
                url: "href"
            },
            prepare({ caption, url }) {
                const localeCaption = localize(caption, defaultLocale);
                return {
                    title: localeCaption || "Link",
                    subtitle: url
                };
            }
        },
        icon: LinkIcon
    });
}
