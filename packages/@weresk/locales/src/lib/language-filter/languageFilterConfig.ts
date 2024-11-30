import { LanguageFilterConfig } from "@sanity/language-filter";
import { LocalizationConfig } from "../../types";

export default function languageFilterConfig(config: LocalizationConfig, schemas: string[]): LanguageFilterConfig {
    return {
        supportedLanguages: config.languages,
        defaultLanguages: [],
        documentTypes: [...schemas, "app"],
        filterField: (enclosingType, field, selectedLanguageIds) =>
            !enclosingType.name.startsWith("locale") || selectedLanguageIds.includes(field.name)
    };
}
