import { CSSProperties } from "react";

export interface DefaultStyleProps {
    className?: string;
    style?: CSSProperties;
}

export interface DefaultProps extends DefaultStyleProps {
    id?: string;
}

export interface DefaultPropsWithChildren extends DefaultProps {
    children?: React.ReactNode;
}

export interface DefaultRenderProps {
    id?: string;
    classes: Record<string, string | undefined>;
    styles?: Record<string, CSSProperties | undefined>;
}

export interface DefaultPageProps {
    params: {
        slug?: string;
        path?: string[];
    };
}

export interface DefaultLayoutProps extends DefaultPageProps {
    children?: React.ReactNode;
}
