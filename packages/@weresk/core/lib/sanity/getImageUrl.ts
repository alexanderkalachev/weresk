import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

//Sanity project variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

//Image URL Builder
export const getImageUrlBuilder = (source: SanityImageSource): ImageUrlBuilder => {
    return createImageUrlBuilder({ projectId, dataset }).image(source);
};

//Image URL
export const getImageUrl = (source?: SanityImageSource, width?: number, height?: number): string => {
    if (!source) return "";
    let urlBuilder = createImageUrlBuilder({ projectId, dataset }).image(source).auto("format").fit("max");
    urlBuilder = width ? urlBuilder.width(width) : urlBuilder;
    urlBuilder = height ? urlBuilder.height(height) : urlBuilder;
    return urlBuilder.url();
};
