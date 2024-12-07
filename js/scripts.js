const menu = document.querySelector("#menu");
const hiddenMenu = document.querySelector("#hidden-menu");
menu.addEventListener("click", () => {
    hiddenMenu.classList.toggle("hidden-menu-view");
});
const nombreProductos = document.getElementsByName("nombreProducto");
const precioProductos = document.getElementsByName("precioProducto");
const btnComprar = document.getElementsByName("agregarCarrito");
const carrito = document.querySelector("#carrito");
let productos = [];
let listaCompras = [];
let total = 0;
let count = 0;

function agregarItem(items){
    listaCompras.push(items.producto);
    listaCompras.push(items.precio);
    sessionStorage.setItem("resumen", listaCompras);
    total += parseFloat(items.precio);
    sessionStorage.setItem("total", total);
    alert(`¡El producto ${items.producto} fue agregado al carrito!`);
    count ++;
    carrito.lastChild.childNodes[1].nodeValue = "Carrito: " + count;
}

for(let i = 0; i < nombreProductos.length; i++){
    productos.push(
        {"producto": nombreProductos[i].innerText,
        "precio": precioProductos[i].innerText.slice(1, )}
    );
}

for(let i = 0; i < btnComprar.length; i++){
    btnComprar[i].addEventListener("click", (e) => {
        agregarItem(productos[i]);
    });
}