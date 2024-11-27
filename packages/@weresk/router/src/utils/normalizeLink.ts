export function normalizeLink(input: string): string {
    return input
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim()
        .replace(/\s+/g, "-");
}
