const menu = document.querySelector("#menu");
const hiddenMenu = document.querySelector("#hidden-menu");
menu.addEventListener("click", () => {
    hiddenMenu.classList.toggle("hidden-menu-view");
});
const compraField = document.querySelector("#resumen-compra");
compraField.innerHTML = sessionStorage.getItem("resumen");
compraField.innerHTML += "\nTOTAL: " + sessionStorage.getItem("total");