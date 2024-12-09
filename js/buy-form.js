const menu = document.querySelector("#menu");
const hiddenMenu = document.querySelector("#hidden-menu");
menu.addEventListener("click", () => {
    hiddenMenu.classList.toggle("hidden-menu-view");
});
const compraField = document.querySelector("#resumen-compra");
const btns = document.querySelectorAll(".btns");
const form = document.getElementsByName("contact");
let data = JSON.parse(sessionStorage.getItem("resumen")) || [];

for(let i = 0; i < data.length; i++){
    compraField.textContent += `${i + 1}) ${data[i].producto}: $${data[i].precio}\n\n`;
}
compraField.textContent += "\n\tTOTAL: " + sessionStorage.getItem("total");

btns.forEach(event => {
    event.addEventListener("click", e => {
        if(e.target.innerHTML == "Cancelar"){
            let confirmar = confirm("¿Desea cancelar la compra?");
            if (confirmar){
                form[0].reset();
                sessionStorage.clear();
                window.location.href = "../index.html";
            }
        } else {
            form[0].submit();
            sessionStorage.clear();
            form[0].reset();
        }
    })  
});