import { DefaultPropsWithChildren } from "@weresk/core";
import { LocaleProps } from "@weresk/locales";

interface MaketProps extends DefaultPropsWithChildren, LocaleProps {}

export default function Maket(props: MaketProps) {
    const { lang, children, ...restProps } = props;
    return (
        <html lang={lang} data-useragent="hhea" {...restProps}>
            {children}
        </html>
    );
}
