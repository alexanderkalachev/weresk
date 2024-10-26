import { Block } from "../../lib/sanity";

export function previewPortableText(input: (Block | object)[] | undefined): string | undefined {
    return input?.[0] && input?.length && "_type" in input[0] && input[0]._type === "block"
        ? input[0].children[0]?.text
        : "";
}
