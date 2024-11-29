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

export interface DefaultPageParams {
    slug?: string;
    path?: string[];
}

export interface DefaultPageProps<Params extends object = DefaultPageParams> {
    params: Params;
}

export interface DefaultLayoutProps<Params extends object = DefaultPageParams> extends DefaultPageProps<Params> {
    children?: React.ReactNode;
}
