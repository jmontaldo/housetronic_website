const menu = document.getElementById("menu");
const hiddenMenu = document.getElementById("hidden-menu");
menu.addEventListener("click", () => {
    hiddenMenu.classList.toggle("hidden-menu-view");
});
const tablaResumen = document.querySelector(".tabla-compra");
const precioFinal = document.querySelectorAll(".subtitle");
const btns = document.querySelectorAll(".btns");
const listaCompras = JSON.parse(sessionStorage.getItem("resumen"));
const total = sessionStorage.getItem("total");

for(let i = 0; i < listaCompras.length; i++){
    let row = document.createElement("tr");
    let producto = document.createElement("td");
    let precio = document.createElement("td");
    producto.innerHTML = listaCompras[i].producto;
    producto.colSpan = 3;
    row.appendChild(producto);
    precio.innerHTML = listaCompras[i].precio;
    row.appendChild(precio);
    tablaResumen.appendChild(row);
}
precioFinal[1].innerHTML = "Total: " + total;
btns.forEach(event => {
    event.addEventListener("click", e => {
        if(e.target.innerHTML == "Comprar"){
            window.location.href = "buy-form.html";
        } else {
            let confirmar = confirm("¿Desea cancelar la compra?");
            if (confirmar){
                sessionStorage.clear();
                window.location.href = "../index.html";
            }
        }
    })    
});