import { defineType, defineField } from "@sanity/types";
import { LinkIcon } from "@sanity/icons";
import { LocaleString, localize } from "@weresk/locales";
import { prepareLink } from "../../utils";
import { RouterSchemaProps } from "../../types";
import { LinkTyped } from "../linkTyped";

export interface LinkCaptioned<Caption extends LocaleString | string = string, Link extends LinkTyped = LinkTyped> {
    _type: "linkCaptioned";
    _key: string;
    caption?: Caption;
    link?: Link;
}

export default function linkCaptioned({ localization, router }: RouterSchemaProps) {
    const defaultLocale = localization?.defaultLocale || "en";
    return defineType({
        name: "linkCaptioned",
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
                name: "link",
                title: "Link",
                type: "linkTyped",
                options: {
                    collapsed: false
                }
            })
        ],
        preview: {
            select: {
                caption: "caption",
                link: "link",
                referenceSlug: "link.reference.slug.current",
                referenceType: "link.reference._type",
                fileUrl: "link.file.asset.url"
            },
            prepare({ caption, link }) {
                const localeCaption = localize(caption, defaultLocale);
                const url = prepareLink(link, router);
                return {
                    title: localeCaption || "Link",
                    subtitle: url
                };
            }
        },
        icon: LinkIcon
    });
}
