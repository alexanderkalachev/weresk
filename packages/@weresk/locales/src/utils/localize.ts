export function localize(
    input: string | Record<string, string> | undefined,
    lang: string | undefined,
    options?: {
        defaultLocale?: string;
        safeReplace?: boolean;
    }
): string {
    let output = "";
    if (typeof input === "string") {
        //If input is string, return input
        output = input;
    } else if (lang && input?.[lang]) {
        //If input and language are provided and value is not empty
        output = input[lang];
    } else if (options?.safeReplace && options?.defaultLocale) {
        //If safeReplace, replace empty value with value from default locale
        output = input?.[options.defaultLocale] || "";
    }
    return output;
}
