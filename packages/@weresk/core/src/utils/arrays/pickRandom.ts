export function pickRandom<T>(array?: T[]): T | undefined {
    if (!array?.length) return undefined;
    return array[Math.floor(Math.random() * array.length)];
}