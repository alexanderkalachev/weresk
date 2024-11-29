import { defineField, defineType } from "@sanity/types";
import { capitalize } from "@weresk/core";

interface LocaleObjectsProps {
    objects: string[];
    languages: {
        id: string;
        title: string;
    }[];
}

export default function localeObjects({ objects, languages }: LocaleObjectsProps) {
    return objects.map((object) =>
        defineType({
            name: "locale" + capitalize(object),
            title: "Locale " + capitalize(object),
            type: "object",
            fields: [
                ...languages.map((lang) =>
                    defineField({
                        title: lang.title,
                        name: lang.id,
                        type: object
                    })
                )
            ],
            options: {
                collapsed: false
            }
        })
    );
}
