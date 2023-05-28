var dark_mode_enabled = function () {
    return window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
};
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.querySelector("link[rel*='icon']").href = "/static/web/metrodark.webp";
}
