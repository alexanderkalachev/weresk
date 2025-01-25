export function getTypesWithSameRoute(docType: string | undefined, routes: Record<string, string>): string[] {
    const slug = docType && routes[docType];
    if (slug === undefined) return [];
    const selected = Object.entries(routes).filter(([t, s]) => s === slug);
    return selected.map(([t, s]) => t);
}
