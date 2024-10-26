import { CSSProperties } from "react";

export interface DefaultStyleProps {
    className?: string;
    style?: CSSProperties;
}

export interface DefaultProps<Locale extends string = string> extends DefaultStyleProps {
    id?: string;
    lang: Locale;
}

export interface DefaultPropsWithChildren<Locale extends string = string> extends DefaultProps<Locale> {
    children?: React.ReactNode;
}

export interface DefaultRenderProps {
    id?: string;
    classes: Record<string, string | undefined>;
    styles?: Record<string, CSSProperties | undefined>;
}

export interface DefaultPageProps<Locale extends string = string> {
    params: {
        lang: Locale;
        slug?: string;
    };
}

export interface DefaultLayoutProps<Locale extends string = string> extends DefaultPageProps<Locale> {
    children?: React.ReactNode;
}
