import { getTitleByValue } from "@weresk/core";
import { LocaleString, localize } from "@weresk/locales";
import { contactTypeList, LinkContact } from "../../schemas";
import { RouterConfig } from "../../types";
import { LinkWrapper } from "../LinkWrapper";
import ContactIcon from "./ContactLink.icon";

export interface ContactLinkProps<Caption extends LocaleString | string = string>
    extends React.HTMLAttributes<HTMLAnchorElement | HTMLDivElement> {
    link: LinkContact<Caption>;
    mode: "text" | "icon";
    config: RouterConfig;
}

export default function ContactLink<Caption extends LocaleString | string = string>(props: ContactLinkProps<Caption>) {
    const { link, mode, lang, ...restProps } = props;

    // Caption
    let caption = getTitleByValue(link.type, contactTypeList);
    if (link.type === "website") {
        caption = localize(link.caption, lang) || caption;
    } else if (link.type === "email") {
        caption = link.url?.replace("mailto:", "") || caption;
    } else if (link.type === "phone" && link.phone) {
        caption = link.phone;
    }

    return (
        <LinkWrapper href={link.url} title={caption} {...restProps}>
            {mode === "icon" ? <ContactIcon icon={link.type} /> : <span>{caption}</span>}
        </LinkWrapper>
    );
}
