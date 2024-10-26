import { DefaultPropsWithChildren } from "@weresk/core";
import { TypoInit, Grid } from "../../client";

interface MaketProps extends Partial<DefaultPropsWithChildren> {
    grid?: boolean;
}

export default function Maket(props: MaketProps) {
    const { lang, grid, children, ...restProps } = props;
    return (
        <html lang={lang} data-useragent="hhea" {...restProps}>
            {children}
            <TypoInit />
            {grid ? <Grid /> : null}
        </html>
    );
}
