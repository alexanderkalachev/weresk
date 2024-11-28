**@weresk/core**
Common utilities and types for the rest of @weresk libraries

# Exports

## Types

-   **Props**
    -   **`DefaultStyleProps`**: Contains `className` and `style` properties
    -   **`DefaultProps`**: Extends `DefaultStyleProps` and adds `id`
    -   **`DefaultPropsWithChildren`**: Extends `DefaultProps` and adds `children`
    -   **`DefaultPageProps`**: Contains `params` with `slug` and `path` properties
    -   **`DefaultLayoutProps`**: Extends `DefaultPageProps` and adds `children`
-   **Sanity**
    -   **`Span`**
    -   **`Block`**
    -   **`ListItem`**
    -   **`Link`**
    -   **`Color`**
    -   **`FileObject`**
    -   **`ImageObject`**
    -   **`TableRow`**
    -   **`TableValue`**

## Utils

-   **Objects**
    -   **`isObject(item?: any): boolean`**: Checks if a variable is an object and not an array
    -   **`mapKeys<K extends string, T>(keys: K[], fn: (arg: K) => T): Record<K, T>`**: Creates an object from an array of keys, using map function
    -   **`mergeDeep(target: object, ...sources: object[]): object`**: Deeply merges multiple objects
    -   **`objectMap(obj: object, fn: (k: string, v: any, i: number) => any): object`**: Maps an object
    -   **`objectMap(obj: object, fn: (k: string, v: any, i: number) => any): object`**: Maps an object
    -   **`purgeEmptyStrings<T extends object>(obj: T): Partial<T>`**: Converts empty strings in the object values to `undefined`
-   **Styles**
    -   **`colorToRGB(color: Color): string`**: Converts Sanity Color object to `R G B` string
-   **Text**
    -   **`caseTransform(input: string | undefined, transform: "capitalize" | "uppercase" | "lowercase" | "title"): string`**: Transforms a string case
    -   **`capitalize(input: string | undefined): string`**: Capitalizes a string
    -   **`title(input: string | undefined): string`**: Transfrorms a string case to a title case
    -   **`formatKeywords(input: string): string`**: In a string converts line breaks into commas and cleans up multiple and trailing spaces
    -   **`longestWord(input: string): string`**: Returns a longest word in a string
    -   **`neatTextBreaks(input?: string, length?: 1 | 2 | 3): string`**: Inserts a non-breakable space after a short words in a string, replaces dashes with non-breakable hyphems
    -   **`neatChildrenBreaks(children?: React.ReactNode, length?: 1 | 2 | 3): React.ReactNode`**: Applies neatTextBreaks to all strings inside a React element
    -   **`numeric(input: number | string | undefined): number`**: Returns a number part of a string, works as well with numbers and undefined values
    -   **`transliterate(input?: string): string`**: Transliterates cyrillic glyphs in a string
-   **Typed**
    -   **`getTitleByValue(value?: string, items?: {value: string, title: string}[]): string`**: Finds a `title` value for a corresponding `value` in an array of objects with those keys
    -   **`isIn<FilterType extends string>(filter: FilterType[] | boolean | undefined, value: string | undefined)`**: Checks if a string is an array with typed string literal values
-   **Sanity**
    -   **`getImageUrlBuilder(source: SanityImageSource): ImageUrlBuilder`**: Returns a Sanity Image Url Builder object from Sanity Image Source
    -   **`getImageUrl = (source?: SanityImageSource, width?: number, height?: number): string`**: Returns an URL from Sanity Image Source
    -   **`previewPortableText(input: (Block | object)[] | undefined): string | undefined`**: Returns a first text element inside a Sanity PortableText object
