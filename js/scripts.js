let listaCompras = [];
let total = 0;
const menu = document.querySelector("#menu");
const hiddenMenu = document.querySelector("#hidden-menu");
menu.addEventListener("click", () => {
    hiddenMenu.classList.toggle("hidden-menu-view");
});
const nombreProductos = document.getElementsByName("nombreProducto");
const precioProductos = document.getElementsByName("precioProducto");
const btnComprar = document.getElementsByName("agregarCarrito");
const carrito = document.querySelector("#carrito");

function agregarItem(items){
    listaCompras.push(items);
    sessionStorage.setItem("resumen", JSON.stringify(listaCompras));
    total += parseFloat(items.precio);
    sessionStorage.setItem("total", total);
    alert(`¡El producto ${items.producto} fue agregado al carrito!`);
    carrito.lastChild.childNodes[1].nodeValue = "Carrito: " + JSON.parse(sessionStorage.getItem("resumen")).length;
}

for(let i = 0; i < btnComprar.length; i++){
    btnComprar[i].addEventListener("click", (e) => {
        let productos = {
            "producto": nombreProductos[i].innerText,
            "precio": precioProductos[i].innerText.slice(1, )
        }
        agregarItem(productos);
    });
}