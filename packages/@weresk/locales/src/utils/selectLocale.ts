export function selectLocale<T extends any>(
    input: Record<string, T> | undefined,
    lang: string | undefined,
    options?: {
        defaultLocale?: string;
        safeReplace?: boolean;
    }
): T | undefined {
    if (lang && input?.[lang]) {
        //If input and language are provided and value is not empty
        return input[lang];
    } else if (options?.safeReplace && options?.defaultLocale) {
        //If safeReplace, replace empty value with value from default locale
        return input?.[options.defaultLocale] || undefined;
    }
    return undefined;
}
