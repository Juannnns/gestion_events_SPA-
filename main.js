import renderView from "./router.js";



document.addEventListener("DOMContentLoaded", () => {
    renderView();
});

window.addEventListener("popstate", renderView)