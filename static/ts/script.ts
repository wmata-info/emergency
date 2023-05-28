const dark_mode_enabled = (): boolean =>
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  (document.querySelector("link[rel*='icon']") as HTMLLinkElement).href = "/static/web/metrodark.webp";
}