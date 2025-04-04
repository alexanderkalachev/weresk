import Link from "next/link";
import { SanityDocument } from "@sanity/types";
import { LinkTyped } from "../../schemas";
import { ReferenceDocument, RouterConfig } from "../../types";
import { getLinkType, prepareLink, wrapReference } from "../../utils";
import { ISO_LOCALES } from "@weresk/locales";

export interface LinkWrapperProps<Reference extends SanityDocument = ReferenceDocument>
  extends React.HTMLAttributes<HTMLAnchorElement | HTMLDivElement> {
  link?: LinkTyped<Reference>;
  reference?: Reference;
  href?: string;
  title?: string;
  config: RouterConfig;
}

export default function LinkWrapper<Reference extends SanityDocument = ReferenceDocument>(
  props: LinkWrapperProps<Reference>
) {
  const { link, reference, href, lang, config, children, ...commonProps } = props;
  let url = props.href;
  let linkType = url ? getLinkType(url) : undefined;

  // Determine link type and build url
  if (url) {
    url = prepareLink({ _type: "linkTyped", type: "internal", href: url }, config, lang);
  } else {
    if (reference) {
      linkType = "reference";
      url = prepareLink(wrapReference(reference), config, lang);
    } else if (link) {
      linkType = link.type;
      url = prepareLink(link, config, lang);
    }
  }

  // Render appropriate link
  if (url) {
    if (linkType === "external" || linkType === "file") {
      return (
        <Link href={url} target="_blank" rel="noreferrer noopener nofollow" {...commonProps}>
          {children}
        </Link>
      );
    }
    return (
      <Link href={url} {...commonProps}>
        {children}
      </Link>
    );
  }
  return <div {...commonProps}>{children}</div>;
}
