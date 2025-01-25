import { RouterSchemaProps } from "../types";
import { linkCaptioned } from "./linkCaptioned";
import { linkContact } from "./linkContact";
import { linkExternal } from "./linkExternal";
import { linkTyped } from "./linkTyped";
import { normalizedSlug } from "./normalizedSlug";

export default function routerObjects(props: RouterSchemaProps) {
    return [linkCaptioned, linkContact, linkExternal, linkTyped, normalizedSlug].map((schema) => schema(props));
}
