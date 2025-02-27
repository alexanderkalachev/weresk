export const ISO_LOCALES = [
    "af",
    "am",
    "ar",
    "as",
    "az",
    "ba",
    "be",
    "bg",
    "bn",
    "bo",
    "br",
    "bs",
    "ca",
    "co",
    "cs",
    "cy",
    "da",
    "de",
    "ds",
    "dv",
    "el",
    "en",
    "es",
    "et",
    "eu",
    "fa",
    "fi",
    "fo",
    "fr",
    "fy",
    "ga",
    "gd",
    "gl",
    "gs",
    "gu",
    "ha",
    "he",
    "hi",
    "hr",
    "hs",
    "hu",
    "hy",
    "id",
    "ig",
    "ii",
    "in",
    "is",
    "it",
    "iu",
    "iw",
    "ja",
    "ka",
    "kk",
    "kl",
    "km",
    "kn",
    "ko",
    "ky",
    "lb",
    "lo",
    "lt",
    "lv",
    "mi",
    "mk",
    "ml",
    "mn",
    "mo",
    "mr",
    "ms",
    "mt",
    "nb",
    "ne",
    "nl",
    "nn",
    "no",
    "ns",
    "oc",
    "or",
    "pa",
    "pl",
    "pr",
    "ps",
    "pt",
    "qu",
    "rm",
    "ro",
    "ru",
    "rw",
    "sa",
    "se",
    "si",
    "sk",
    "sl",
    "sm",
    "sq",
    "sr",
    "sv",
    "sw",
    "sy",
    "ta",
    "te",
    "tg",
    "th",
    "tk",
    "tl",
    "tn",
    "tr",
    "tt",
    "tz",
    "ug",
    "uk",
    "ur",
    "uz",
    "vi",
    "wo",
    "xh",
    "yo",
    "zh",
    "zu"
] as const;

export type IsoLocale = (typeof ISO_LOCALES)[number];

export type LocaleProps<Locale extends string = IsoLocale> = { lang?: Locale };
export type LocaleString<Locale extends string = IsoLocale> = Partial<Record<Locale, string>>;
export type LocaleObject<T extends any, Locale extends string = IsoLocale> = Partial<Record<Locale, T>>;

export interface LocalizationConfig<Locale extends string = IsoLocale> {
    languages: {
        id: Locale;
        title: string;
        abbr: string;
    }[];
    defaultLocale: Locale;
    safeReplace?: boolean;
}
