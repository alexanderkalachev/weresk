import { Color } from "../../lib/sanity";

export function colorToRGB(color: Color): string {
  return `${color.rgb?.r || 0} ${color.rgb?.g || 0} ${color.rgb?.b || 0}`;
}
