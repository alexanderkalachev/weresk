**@weresk/locales**
Toolkit for Next.js app localization

# Exports

## Schemas

-   **`localeObjects`**: Generates an array of schema definitios based on list of types and list of languages
    -   **Props**:
        -   **`objects: string[]`**: List of object types
        -   **`languages: {id: string, title: string}[]`**: List of languages
    -   **Returns**: **`ReturnType<typeof defineType>[]`**

## Types

-   **`LocaleProps<T extends object, Locale extends string | undefined = string | undefined>`**: Adds `lang` property to a props interface
-   **`LocaleString<Locale extends string = string>`**: Localized string object
-   **`LocaleObject<T extends any, Locale extends string = string>`**: Localized any type object
-   **`LocalizationConfig<Locale extends string = string>`**: Localization config definition

## Utils

-   **`localize`**: Localizes locale string object
    -   **Arguments**:
        -   **`input: string | Record<string, string> | undefined`**: Input object or string
        -   **`lang: string | undefined`**: Required language id
        -   **`options`**: Options object
            -   **`safeReplace: boolean | undefined`**: If true returns default language value
            -   **`defaultLocale: string | undefined`**: Default language id
    -   **Returns**: **`string`**
-   **`selectLocale`**: Localizes locale any object
    -   **Arguments**:
        -   **`input: Record<string, T> | undefined`**: Input object or string
        -   **`lang: string | undefined`**: Required language id
        -   **`options`**: Options object
            -   **`safeReplace: boolean | undefined`**: If true returns default language value
            -   **`defaultLocale: string | undefined`**: Default language id
    -   **Returns**: **`T`**
-   **`languageFilterConfig`**: Generates @sanity/language-filter config from Localization config and list of document types
    -   **Arguments**:
        -   **`config: LocalizationConfig`**: Localization config
        -   **`schemas: string[]`**: List of document schema types
    -   **Returns**: **`LanguageFilterConfig`**
