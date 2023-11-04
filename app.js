

let form = document.getElementById("formulario");
function formControl(event) { event.preventDefault(); } 
form.addEventListener('submit', formControl);


//Selecciono el btn resumen en una variable
let btn_resumen = document.getElementById("id_resumen");
let cantidad = document.getElementById("id_cantidad");


let seleccionar = document.getElementById("select_id");
let valorTicket = 200;
function ticketElegido() {
    let descuento;
    let ticket_Precio;
    let total_Pagar;
    let opcionSeleccionada = seleccionar.value;
    if (opcionSeleccionada == "estudiante"){
         descuento = (valorTicket*80)/100;
         ticket_Precio = valorTicket-descuento;
    }else if (opcionSeleccionada == "trainee"){
        descuento = (valorTicket*50)/100;
        ticket_Precio = valorTicket-descuento;
    }else if(opcionSeleccionada == "junior"){
        descuento = (valorTicket*15)/100;
        ticket_Precio = valorTicket-descuento;
    }
    total_Pagar = ticket_Precio * parseInt(cantidad.value);
    //return `Precio con descuento: $${ticket_Precio} Cantidad de Tickets: ${cantidad.value} Precio Final: $${total_Pagar}`;
    return `${total_Pagar}`;
}
let textoPagar = document.getElementById("textoPagar");
//Al hacer click en el btn resumen escuchará al evento click y entonces 
btn_resumen.addEventListener("click", ()=>{
    textoPagar.textContent = "Total a pagar: $";
    texto = document.createTextNode(ticketElegido());
    textoPagar.appendChild(texto);
})

let btn_borrar = document.getElementById("id_borrar");
btn_borrar.addEventListener("click", ()=>{
    textoPagar.textContent = "Total a pagar: $";
})

