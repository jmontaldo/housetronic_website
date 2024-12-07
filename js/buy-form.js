const menu = document.querySelector("#menu");
const hiddenMenu = document.querySelector("#hidden-menu");
menu.addEventListener("click", () => {
    hiddenMenu.classList.toggle("hidden-menu-view");
});
const compraField = document.querySelector("#resumen-compra");
const btns = document.querySelectorAll(".btns");
let data = JSON.parse(sessionStorage.getItem("resumen"));

for(let i = 0; i < data.length; i++){
    compraField.textContent += `${i + 1}) ${data[i].producto}: $${data[i].precio}\n\n`;
}
compraField.textContent += "\n\tTOTAL: " + sessionStorage.getItem("total");

btns.forEach(event => {
    event.addEventListener("click", e => {
        if(e.target.innerHTML == "Borrar"){
            let confirmar = confirm("¿Desea cancelar la compra?");
            if (confirmar){
                sessionStorage.clear();
                window.location.href = "../index.html";
            }
        } else {
            sessionStorage.clear();
        }
    })    
});