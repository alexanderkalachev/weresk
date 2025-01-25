**@weresk/router**
Toolkit for working with links in Next.js app

# Exports

## Types

-   **Schemas**
    -   **`linkTyped({router: RouterConfig, localization?: LocalizationConfig})`**: Link with manual selection between link types: reference, anchor, external, internal or file
    -   **`linkExternal({router: RouterConfig, localization?: LocalizationConfig})`**: Link with a caption and external URL
    -   **`linkCaptioned({router: RouterConfig, localization?: LocalizationConfig})`**: Link with a caption and typed link
    -   **`linkContact({router: RouterConfig, localization?: LocalizationConfig})`**: Typed contact link
    -   **`normalizedSlug({router: RouterConfig, localization?: LocalizationConfig})`**: Slug schema with slugify and isUnique functions set
    -   **`routerObjects({router: RouterConfig, localization?: LocalizationConfig})`**: Generates an array of schema definitions with all types listed above

## Types

-   **Props**
    -   **`ReferenceDocument`**: Base Sanity document type with title, slug and optional parent
    -   **`RouterSchemaProps`**: Props for router schemas definition
    -   **`RouterConfig<DocumentType extends ReferenceDocument = ReferenceDocument>`**: Router config object
        -   `mode: "parent" | "folder"`: Defines what strategy is used for pages structure:
            -   `parent`: Documents are nested under the parent document like `/parents-parent/parent/slug`
            -   `folder`: Documents are grouped inside the folder determined by document type, using `routes` configuration, like `/folder/slug`
        -   `schemas: string[]`: Link of document schemas that can be referenced in links
        -   `routes: Record<DocumentType["_type"], string>`: Object with document types as keys and folder names as values to use in `folder` mode
        -   `contacts?: ContactType[]`: Optional customization of contacts types for `linkContact` schema
        -   `parentDepth?: number`: Optional customization of nesting depth limit used in `parent` mode

## Contants

-   **`contactTypeList`**: List of contact types

## Utils

-   **`getDocumentPath(doc: ReferenceDocument | undefined, config: RouterConfig): string`**: Generates URL for a document
-   **`getLinkType(url: string): LinkType`**: Checks the link type for a URL
-   **`getTypesWithSameRoute(docType: string | undefined, routes: Record<string, string>): string[]`**: Finds the documents types that have the route similar to a singular document type
-   **`isUniqueSlugFunction(config: RouterConfig): (slug: string, context: SlugValidationContext) => Promise<boolean>`**: Generates isUniqueSlug function based on router config
-   **`normalizeLink(input: string): string`**: Normalizes a string to be used as a URL
-   **`prepareLink(input: LinkTyped, router: RouterConfig, lang?: IsoLocale): string`**: Generates an URL from a `LinkTyped` object
-   **`toLinkCaptioned<Reference extends ReferenceDocument = ReferenceDocument>(doc: Reference): LinkCaptioned<NonNullable<Reference["title"]>, LinkTyped<Reference>>`**: Converts a document type into `LinkCaptioned`
-   **`wrapReference(doc: ReferenceDocument): LinkTyped`**: Converts a document type into `LinkTyped`

## Components

-   **`LinkWrapper`**: A wrapper function to render a Next.js link from router schemas like typed link, reference and href
    -   **Props: `LinkWrapperProps extends LocaleProps<DefaultPropsWithChildren>`**
        -   **`href?: string`**: URL, is set used first
        -   **`reference?: ReferenceDocument`**: Refefence to a document, if set used before the `link`
        -   **`link?: LinkTyped`**: Typed link
        -   **`title?: string`**: `title` property for rendered HTML element
        -   **`config: RouterConfig`**: Router configuration
-   **`ContactLink`**: Renders contact link as a text or as an icon
    -   **Props: `ContactLinkProps extends LocaleProps<DefaultProps>`**
        -   **`link: LinkContact`**: Contact type identifier
        -   **`mode: "text" | "icon"`**: Render mode
        -   **`config: RouterConfig`**: Router configuration
