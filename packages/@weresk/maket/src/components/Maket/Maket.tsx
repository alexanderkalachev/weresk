import { DefaultPropsWithChildren } from "@weresk/core";

interface MaketProps extends Partial<DefaultPropsWithChildren> {}

export default function Maket(props: MaketProps) {
    const { lang, children, ...restProps } = props;
    return (
        <html lang={lang} data-useragent="hhea" {...restProps}>
            {children}
        </html>
    );
}
