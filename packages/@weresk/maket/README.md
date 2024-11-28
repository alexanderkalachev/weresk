**@weresk/maket**
Toolkit for working with grid, typography and swatches in TailwindCSS

# Config Documentation

-   [**Grid**](#grid)
    -   [`screens`](#screens)
    -   [`grid`](#grid-1)
        -   [`scale`](#scale)
        -   [`unit`](#unit)
        -   [`columns`](#columns)
        -   [`module`](#columns)
        -   [`gutter`](#gutter)
        -   [`offset`](#offset)
        -   [`ruler`](#rulersteps)
            -   [`steps`](#rulersteps)
            -   [`modules`](#rulermodules)
        -   [`color`](#color)
-   [**Typography**](#typography)
    -   [`typography`](#typography-1)
        -   [`fonts`](#fonts)
            -   [Font Definition](#font-definition)
                -   [`Font ID`](#font-id)
                -   [`fontFamily`](#fontfamily)
                -   [`extends`](#extends)
                -   [`included`](#included)
                -   [`imports`](#imports)
                -   [`metrics`](#metrics)
        -   [`styles`](#styles)
            -   [Style Definition](#style-definition)
    -   [`outline`](#outline)
-   [**Palette**](#palette)
    -   [`swatches`](#swatches)
    -   [`palette`](#palette-1)

## Grid

### `screens`

Breakpoints definition using [Tailwind configuration](https://tailwindcss.com/docs/screens)

-   **Type**: `Record<string, '<number>px'>`
-   **Generated Variables**: `--metrics-container`
-   **Generated Classes**:
    -   [Tailwind responsive modifiers](https://tailwindcss.com/docs/screens)
    -   `grid-container`: Alternative to [Tailwind container](https://tailwindcss.com/docs/container)
-   **Classes Usage Examples**: `w-full sm:w-1/2 lg:w-1/4`

**Default**:

```
screens: {
    xs: "512px",
    sm: "796px",
    md: "984px",
    lg: "1268px"
}
```

---

### `grid`

Grid configuration object with following properties:

#### `scale`

Responsive scale behavior

-   **Type**: `boolean | {min?: Breakpoint; max?: Breakpoint }`
-   **Generated Variables**: `--metrics-scale`
-   **Behavior**: ==write later==
-   **Default**: `scale: false`

#### `unit`

Responsive minimal grid unit

-   **Type**: `Record<'DEFAULT' | Breakpoint, number | '<number>px'>`
-   **Generated Variables**: `--metrics-unit`
-   **Generated Classes**: `unit` in [Tailwind _spacing_ classes](https://tailwindcss.com/docs/customizing-spacing)
-   **Classes Usage Examples**: `w-unit pr-unit min-h-unit`

**Default**:

```
unit: {
    DEFAULT: "4px"
}
```

#### `columns`

Responsive amount of columns

-   **Type**: `Record<'DEFAULT' | Breakpoint, number>`
-   **Generated Variables**: `--metrics-columns`

**Default**:

```
columns: {
    DEFAULT: "12",
    xs: "12",
    sm: "24"
}
```

#### `module`

Responsive grid module

-   **Type**: `Record<'DEFAULT' | Breakpoint, number | '<number>px'>`
-   **Generated Variables**: `--metrics-module`
-   **Generated Classes**: `module` in [Tailwind _spacing_ classes](https://tailwindcss.com/docs/customizing-spacing)
-   **Classes Usage Examples**: `w-module pr-module min-h-module`

**Default**:

```
module: {
    DEFAULT: "32px",
    xs: "32px",
    sm: "20px",
    md: "24px",
    lg: "32px"
}
```

#### `gutter`

Responsive grid gutter

-   **Type**: `Record<'DEFAULT' | Breakpoint, number | '<number>px'>`
-   **Generated Variables**: `--metrics-gutter`
-   **Generated Classes**: `gutter` in [Tailwind _spacing_ classes](https://tailwindcss.com/docs/customizing-spacing)
-   **Classes Usage Examples**: `w-gutter gap-gutter min-h-gutter`

**Default**:

```
gutter: {
    DEFAULT: "8px",
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "20px"
}
```

#### `offset`

Responsive grid offset

-   **Type**: `Record<'DEFAULT' | Breakpoint, number | '<number>px'>`
-   **Generated Variables**: `--metrics-offset`
-   **Generated Classes**: `offset` in [Tailwind _spacing_ classes](https://tailwindcss.com/docs/customizing-spacing)
-   **Classes Usage Examples**: `w-offset mx-offset min-h-offset`

**Default**:

```
offset: {
    DEFAULT: "20px"
}
```

#### `ruler.steps`

The amount of `spacing` classes based on `unit` and `scale` values

-   **Type**: `number`
-   **Generated Classes**: `[1, 2, 3, ...((unit * step} * scale)]` in [Tailwind _spacing_ classes](https://tailwindcss.com/docs/customizing-spacing)
-   **Classes Usage Examples**: `w-40 pr-2 min-h-80`

**Default**:

```
ruler: {
    steps: 20
}
```

#### `ruler.modules`

Array of modules amounts for `spacing` classes based on `module`, `gutter` and `scale` values

-   **Type**: `number[]`
-   **Generated Classes**: `m[number of modules]: m * module + (m - 1) * gutter` in [Tailwind _spacing_ classes](https://tailwindcss.com/docs/customizing-spacing)
-   **Classes Usage Examples**: `w-m4 pr-m1 min-h-m8`

**Default**:

```
ruler: {
    modules: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 16, 20, 24]
}
```

#### `color`

Responsive color for grid preview

-   **Type**: [`Record<'DEFAULT' | Breakpoint, RGBString>`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb)
-   **Generated Variables**: `--grid-color`

**Default**:

```
color: {
    DEFAULT: "250 150 60"
}
```

## Typography

### `typography`

Typography configuration object with following properties:

#### `fonts`

Generate CSS with font imports and global variables for utility classes

-   **Type**:

```
Record<FontID<string> , {
    familyName: string;
    extends: 'sans' | 'serif' | 'mono';
    included: 'sans' | 'serif' | 'mono';
    imports: {
        style: CSS <font-style>;
        weight: CSS <font-weight>;
        src: string[];
    }[];
    metrics: {
        hhea: {
            capHeight: number;
            xHeight: number;
            bottom: number;
            inset: number;
        };
        typo: {
            capHeight: number;
            xHeight: number;
            bottom: number;
            inset: number;
        }
    }
}>
```

**Default**:

```
fonts: {
    inter: {
        familyName: "Inter",
        extends: "sans",
        included: "sans",
        imports: [
            {
                style: "normal",
                weight: 300,
                src: `url(https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2) format('woff2')`
            },
            {
                style: "normal",
                weight: 400,
                src: `url(https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZthiJ-Ek-_EeAmM.woff2) format('woff2')`
            },
            {
                style: "normal",
                weight: 500,
                src: `url(https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2) format('woff2')`
            }
        ],
        metrics: {
            hhea: {
                capHeight: 0.205,
                xHeight: 0.43,
                bottom: 0.102,
                inset: 0.08
            },
            typo: {
                capHeight: 0.2,
                xHeight: 0.425,
                bottom: 0.105,
                inset: 0.08
            }
        }
    }
}
```

##### Font Definition

###### `Font ID`

Key of the font object, used as a primary font identifier in CSS variables and Tailwind classes

-   **Generated Classes**: `font-<Font ID>` in [Tailwind _font_ classes](https://tailwindcss.com/docs/font-family)
-   **Classes Usage Examples**: `font-inter`

###### `fontFamily`

Font family name used in [CSS _font-family_ property](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)

###### `extends`

Default [Tailwind font family class](https://tailwindcss.com/docs/font-family) to be added to imported font class

-   **Behavior**: `extends: 'sans'` will create the following definition `font-family: <Font Family Name>,ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji` when `font-<Font Id>` class is used

###### `included`

Includes imported font definition to the default [Tailwind font family class](https://tailwindcss.com/docs/font-family)

-   **Generated Classes**: `font-<Defailt Tailwind Font Family>` in [Tailwind _font_ classes](https://tailwindcss.com/docs/font-family)
-   **Behavior**: `included: 'sans'` will create the following definition `font-family: <Font Family Name>,ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji` when `font-sans` class is used

###### `imports`

`@font-face` definitions to CSS. An array of objects with following properties:

-   **Properties**:
    -   **`style`**: CSS `<font-style>` property
    -   **`weight`**: CSS `<font-weight>` property
    -   **`src`**: Array of strings with with CSS `<url>` for local and external imports

###### `metrics`

Font metrics values for two major font rendering engines.

-   **Properties**:
    -   Rendering engines:
        -   **`hhea`**: Values for font rendering engine used in Chrome and Safari browsers
        -   **`typo`**: Values for font rendering engine used in rest of the browsers
    -   Metrics:
        -   **`capHeight`**: Cap Height value (relative to font size)
        -   **`xHeight`**: X Height value (relative to font size)
        -   **`bottom`**: Distance between the baseline and the bottom edge of text container (relative to font size)
        -   **`inset`**: Distance between the left edge of text container and the beginning of the string (relative to font size)
-   **Behavior**: Rendering engine is automatically detected by `<FontInit />` React component. Generated CSS variables used in `trim-*` utility classes.
-   **Generated CSS**:

```
html[data-useragent=hhea] {
    --<FONT_ID>-CH: <number>em;
    --<FONT_ID>-XH: <number>em;
    --<FONT_ID>-B: <number>em;
    --<FONT_ID>-I: <number>em
}
html[data-useragent=typo] {
    --<FONT_ID>-CH: <number>em;
    --<FONT_ID>-XH: <number>em;
    --<FONT_ID>-B: <number>em;
    --<FONT_ID>-I: <number>em
}
```

#### `styles`

Responsive typography classes definition

-   **Type**:

```
Record<StyleID<string>, {
    font: FontID<string>;
    fontSize: number | '<number>/<number>';
    [ReactCssPropertyKey]?: ReactCssPropertyValue;
    [Breakpoint]: {
        fontSize: number | '<number>' | '<number>/<number>';
        [ReactCssPropertyKey]?: ReactCssPropertyValue;
    }
}>
```

##### `Style Definition`

-   **Properties**: `typo-<Style ID>`
    -   **`Style ID`**: Key of the style object, used as a primary style identifier in Tailwind class
    -   **`font`**: Font ID of a font to be used in style
    -   **`fontSize`**: Font size value and a line height value. If only one value is provided, it would be used both for font size and for line height
    -   **`ReactCssProperty`**: Any CSS property can be added in a form of React CSS key-value pair
    -   **`[Breakpoint]`**: Responsive behavior could be added with key-value pair, where the key is Tailwind responsive modifier, and the value is a style definition object
-   **Generated Classes**: `typo-<Style ID>`
-   **Classes Usage Examples**: `typo-title-md`

### `outline`

Text outline classes definition

-   **Type**: `Record<'DEFAULT' | string, Width<number>>`
-   **Generated Classes**: `text-outline-<Width>`
-   **Classes Usage Examples**: `text-outline text-outline-2.5`

**Default**:

```
outline: {
    DEFAULT: 1
}
```

## Palette

### `swatches`

Definition of individual colors

-   **Type**: `Record<SwatchID<string>, RGBString>`
-   **Generated Variables**: `--swatch-<Swatch ID>`
-   **Generated Classes**: [Tailwind color classes](https://tailwindcss.com/docs/customizing-colors)
-   **Classes Usage Examples**: `text-orange bg-black`

**Default**:

```
swatches: {
    white: "255 255 255",
    black: "50 50 50",
    grey: "153 153 153",
    orange: "250 150 60"
}
```

### `palette`

Definition of color palette

-   **Type**: `Record<SwatchID<string>, RGBString | TailwindThemeValue>`
-   **Generated Variables**: `--palette-<Swatch ID>`
-   **Generated Classes**: [Tailwind color classes](https://tailwindcss.com/docs/customizing-colors)
-   **Classes Usage Examples**: `text-primary bg-surface`

**Default**:

```
palette: ({ theme }) => ({
    surface: theme("swatches.white"),
    "on-surface": theme("swatches.black"),
    "on-surface-light": theme("swatches.grey"),
    primary: theme("swatches.orange"),
    "on-primary": theme("swatches.white")
})
```
