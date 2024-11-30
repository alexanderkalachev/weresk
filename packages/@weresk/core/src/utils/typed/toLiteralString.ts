export const toLiteralString = <LiteralType extends string>(
    values: readonly LiteralType[],
    value: string | undefined
): LiteralType | undefined => (values.includes(value as LiteralType) ? (value as LiteralType) : undefined);
