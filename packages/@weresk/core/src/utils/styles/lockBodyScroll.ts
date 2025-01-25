export function lockBodyScroll(lock = true) {
    const body = document.querySelector("body");
    body?.style.setProperty("overflow", lock ? "hidden" : "auto");
}
