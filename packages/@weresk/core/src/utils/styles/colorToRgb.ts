import { Color } from "../../lib/sanity";

export function colorToRGB(color: Color): string {
    return `${color.rgb.r} ${color.rgb.g} ${color.rgb.b}`;
}
