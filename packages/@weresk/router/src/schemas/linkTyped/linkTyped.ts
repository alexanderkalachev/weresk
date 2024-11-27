import { defineType, defineField, SanityDocument } from "@sanity/types";
import { FileObject } from "@weresk/core";
import { LinkType, linkTypeList } from "./linkTyped.values";
import { ReferenceDocument, RouterSchemaProps } from "../../types";

export interface LinkTyped<Reference extends SanityDocument = ReferenceDocument> {
    _type: "linkTyped";
    _key?: string;
    type?: LinkType;
    reference?: Reference;
    href?: string;
    internal?: string;
    anchor?: string;
    file?: FileObject;
}

export default function linkTyped({ router }: RouterSchemaProps) {
    const { schemas } = router;
    return defineType({
        name: "linkTyped",
        title: "Link",
        type: "object",
        fields: [
            defineField({
                name: "type",
                title: "Type",
                type: "string",
                initialValue: "reference",
                options: {
                    list: linkTypeList,
                    layout: "radio",
                    direction: "horizontal"
                },
                validation: (Rule) => Rule.required()
            }),
            defineField({
                name: "reference",
                title: "Reference",
                type: "reference",
                description: "Reference to a page to link to",
                to: schemas.map((docType) => ({
                    type: docType
                })),
                options: {
                    disableNew: true
                },
                hidden: ({ parent }: { parent: LinkTyped | undefined }) => parent?.type !== "reference"
            }),
            defineField({
                name: "href",
                title: "URL",
                type: "url",
                description: `URL starts with "http://" or "https://" and email with "mailto"`,
                validation: (Rule) =>
                    Rule.uri({
                        scheme: ["http", "https", "mailto"]
                    }),
                hidden: ({ parent }: { parent: LinkTyped | undefined }) => parent?.type !== "external"
            }),
            defineField({
                name: "internal",
                title: "URL",
                type: "url",
                description: `Relative URL starts with "/" and can contain anchors and queries`,
                validation: (Rule) =>
                    Rule.uri({
                        allowRelative: true
                    }),
                hidden: ({ parent }: { parent: LinkTyped | undefined }) => parent?.type !== "internal"
            }),
            defineField({
                name: "anchor",
                title: "Anchor",
                type: "string",
                description: "ID of the block on the same page",
                hidden: ({ parent }: { parent: LinkTyped | undefined }) => parent?.type !== "anchor"
            }),
            defineField({
                name: "file",
                title: "File",
                type: "file",
                options: {
                    storeOriginalFilename: true
                },
                hidden: ({ parent }: { parent: LinkTyped | undefined }) => parent?.type !== "file"
            })
        ]
    });
}
