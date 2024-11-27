import { defineType, defineField } from "@sanity/types";
import { LinkIcon } from "@sanity/icons";
import { getTitleByValue } from "@weresk/core";
import { LocaleString, localize } from "@weresk/locales";
import { RouterSchemaProps } from "../../types";
import { ContactType, contactTypeInitialValue, contactTypeList } from "./linkContact.values";

export interface LinkContact<Caption extends LocaleString | string = string> {
    _type: "linkContact";
    _key: string;
    type: ContactType;
    caption?: Caption;
    phone?: string;
    url?: string;
}

export default function linkContact({ localization }: RouterSchemaProps) {
    const defaultLocale = localization?.defaultLocale || "en";
    return defineType({
        name: "linkContact",
        title: "Contact",
        type: "object",
        fields: [
            {
                name: "type",
                title: "Type",
                type: "string",
                initialValue: contactTypeInitialValue,
                options: {
                    list: contactTypeList
                },
                validation: (Rule) => Rule.required()
            },
            defineField({
                name: "caption",
                title: "Caption",
                type: localization ? "localeString" : "string",
                hidden: ({ parent }: { parent: LinkContact | undefined }) => parent?.type !== "website"
            }),
            defineField({
                name: "phone",
                title: "Phone number",
                type: "string",
                hidden: ({ parent }: { parent: LinkContact | undefined }) => parent?.type !== "phone"
            }),
            {
                name: "url",
                title: "URL",
                type: "url",
                description: `URL starts with "http://" or "https://" and email with "mailto"`,
                validation: (Rule) =>
                    Rule.uri({
                        scheme: ["http", "https", "mailto"]
                    }),
                hidden: ({ parent }: { parent: LinkContact | undefined }) => parent?.type === "phone"
            }
        ],
        preview: {
            select: {
                contactType: "type",
                caption: "caption",
                url: "url",
                phone: "phone"
            },
            prepare({ contactType, caption, url, phone }) {
                const localeCaption = localize(caption, defaultLocale);
                return {
                    title:
                        contactType === "website" && localeCaption
                            ? localeCaption
                            : getTitleByValue(contactType, contactTypeList),
                    subtitle: contactType === "phone" ? phone : url
                };
            }
        },
        icon: LinkIcon
    });
}
