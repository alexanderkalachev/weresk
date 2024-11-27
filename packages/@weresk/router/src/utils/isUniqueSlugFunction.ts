import { SlugValidationContext } from "@sanity/types";
import { RouterConfig } from "../types";
import { getTypesWithSameRoute } from "./getTypesWithSameRoute";

// Generating isUniqueSlug function based on router config
export function isUniqueSlugFunction(
    config: RouterConfig
): (slug: string, context: SlugValidationContext) => Promise<boolean> {
    return async function isUniqueSlug(slug: string, context: SlugValidationContext): Promise<boolean> {
        const { document, getClient } = context;
        const docType = document?._type;
        // If router in 'folder' mode – find document types with the same routes, otherwise use initial document type
        const docTypes = config.mode === "folder" ? getTypesWithSameRoute(docType, config.routes) : [docType];
        // ---
        const client = getClient({ apiVersion: "2024-01-01" });
        const id = document?._id.replace(/^drafts\./, "");
        const params = {
            draft: `drafts.${id}`,
            published: id,
            slug,
            docTypes
        };
        const query = `!defined(*[!(_id in [$draft, $published]) && _type in $docTypes && slug.current == $slug][0]._id)`;
        const result = await client.fetch<boolean>(query, params);
        return result;
    };
}
