let listaCompras = [];
let total = 0;
let control = false;
const menu = document.querySelector("#menu");
const hiddenMenu = document.querySelector("#hidden-menu");
menu.addEventListener("click", () => {
    hiddenMenu.classList.toggle("hidden-menu-view");
});
const nombreProductos = document.getElementsByName("nombreProducto");
const infoButton = document.getElementsByName("informationButton");
const cards = document.getElementsByClassName("product-container-card");
const btnComprar = document.getElementsByName("agregarCarrito");
const carrito = document.querySelector("#carrito");
const dataBase = [
    {   
        "id": 0,
        "nombre": "Heladera con freezer gris", 
        "precio": "1000000", 
        "descripcion": "Heladera sofisticada, con un freezer amplio, perfecta para un hogar familiar."
    },
    {   
        "id": 1,
        "nombre": "Heladera simple con freezer", 
        "precio": "1100000", 
        "descripcion": "Heladera sofisticada, compacta, perfecta hogares más pequeños."
    },
    {   
        "id": 2,
        "nombre": "Heladera con freezer", 
        "precio": "1200000", 
        "descripcion": "Heladera premium, con todo lo que necesita tu hogar."
    },
    {
        "id": 3,
        "nombre": 'Smart TV LED 55"', 
        "precio": "800000", 
        "descripcion": "Smart TV con perfecta calidad para ver las mejores series y peliculas."
    },
    {
        "id": 4,
        "nombre": 'Smart TV LED 60"', 
        "precio": "1000000", 
        "descripcion": "Smart TV con la mejor resolución para ver a tu equipo favorito."
    },
    {
        "id": 5,
        "nombre": 'Televisor Smart TV', 
        "precio": "800000", 
        "descripcion": "Smart TV con una gran calidad de imagen."
    },
    {
        "id": 6,
        "nombre": 'Celular black storm', 
        "precio": "600000", 
        "descripcion": "Smartphone con todas las apps para tu día a día."
    },
    {
        "id": 7,
        "nombre": 'Celular negro sofisticado', 
        "precio": "900000", 
        "descripcion": "Smartphone sofisticado y elegante, muy completo."
    },
    {
        "id": 8,
        "nombre": 'Celular negro Dark Night', 
        "precio": "950000", 
        "descripcion": "Smartphone con una excelente cámara y gran portabilidad."
    },
    {
        "id": 9,
        "nombre": 'Celular blanco moderno', 
        "precio": "700000", 
        "descripcion": "Smartphone con una interfaz muy intuitiva y excelente diseño."
    }
]

function agregarItem(items){
    listaCompras.push(items);
    sessionStorage.setItem("resumen", JSON.stringify(listaCompras));
    total += parseFloat(items.precio);
    sessionStorage.setItem("total", total);
    alert(`¡El producto ${items.producto} fue agregado al carrito!`);
    carrito.lastChild.childNodes[1].nodeValue = "Carrito: " + JSON.parse(sessionStorage.getItem("resumen")).length;
}

function verDescripcion(desc, card){
    if (control == false){
        control = true;
        let p = document.createElement("p");
        p.innerText = desc;
        p.style.border = "1px solid white";
        p.style.background = "#F97316";
        p.style.color = "white";
        p.style.padding = "3px";
        p.style.margin = "5px";
        p.style.cursor = "pointer";
        p.style.fontStyle = "italic";
        card.appendChild(p);
        p.addEventListener("click", (e) => {
            p.remove();
            control = false;
        })
    } else {
        alert("Debe cerrar la descripción de una tarjeta para abrir otra (Click en la descripción abierta para cerrar)");
    }
}

for(let i = 0; i < btnComprar.length; i++){
    btnComprar[i].addEventListener("click", (e) => {
        for(let cont = 0; cont < dataBase.length; cont ++){
            if(nombreProductos[i].innerText == dataBase[cont].nombre){
                let productos = {
                "producto": dataBase[cont].nombre,
                "precio": dataBase[cont].precio
                }
                agregarItem(productos);
            }
        }
    })
}

for(let i = 0; i < infoButton.length; i++){
    infoButton[i].addEventListener("click", (e) => {
        for(let cont = 0; cont < dataBase.length; cont ++){
            if(nombreProductos[i].innerText == dataBase[cont].nombre){
                let descripcion = dataBase[cont].descripcion;
                verDescripcion(descripcion, cards[i], control);
            }
        }
    });
}