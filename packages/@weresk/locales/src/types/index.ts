export type LocaleProps<T extends object, Locale extends string | undefined = string | undefined> = T & {
    lang: Locale;
};

export type LocaleString<Locale extends string = string> = Partial<Record<Locale, string>>;
export type LocaleObject<T extends any, Locale extends string = string> = Partial<Record<Locale, T>>;

export interface LocalizationConfig<Locale extends string = string> {
    languages: {
        id: Locale;
        title: string;
        abbr: string;
    }[];
    default: Locale;
    safeReplace?: boolean;
}
