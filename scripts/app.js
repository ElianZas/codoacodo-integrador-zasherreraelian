//Evito que se refresque la página luego de que el usuario aprete el botón "resume"
let form = document.getElementById("formulario"); //Llamo a mi elemento formulario
function formControl(event) { event.preventDefault(); }  //detengo el comportamiento por defecto
form.addEventListener('submit', formControl);  //el boton es de tipo "submit" enviar.
//Entonces al hacer click en el elemento de tipo submit se ejecutará esta función.


//Selecciono/guardo el btn resumen en una variable
const btn_resumen = document.getElementById("id_resumen");
//Igual con el campo donde el usuario ingresa la cantidad (tipo numero)
let cantidad = document.getElementById("id_cantidad");


let seleccionar = document.getElementById("select_id"); //guardo, selecciono el elemento seleccionar (dropdown, que tiene 3 elementos hijos)
const valorTicket = 200; //defino el valor del ticket
function ticketElegido() {//comportamiento de la función definida
    //definos las variables necesarias dentro de mi función (local)
    let descuento; //variable descuento 
    let ticket_Precio; //variable ticketprecio
    let total_Pagar; //variable total pagar
    let opcionSeleccionada = seleccionar.value; //tomo el valor elegida del dropdown(seleccionar)
    if (opcionSeleccionada == "estudiante"){ //si la opción seleccionada es igual a estudiante entonces los valores de mis variables serán los correspondientes dentro de este if
         descuento = (valorTicket*80)/100;
         ticket_Precio = valorTicket-descuento;
    }else if (opcionSeleccionada == "trainee"){ //Lo mismo con trainee
        descuento = (valorTicket*50)/100;
        ticket_Precio = valorTicket-descuento;
    }else if(opcionSeleccionada == "junior"){ //Lo mismo con junior
        descuento = (valorTicket*15)/100;
        ticket_Precio = valorTicket-descuento;
    }
    total_Pagar = ticket_Precio * cantidad.value;//Luego de ingresar a alguno de los if, se guardará en la variable totalPagar el valor final del ticket
    //Parseint para convertir ese valor a número y que se pueda realizar la operación correspondiente
    //return `Precio con descuento: $${ticket_Precio} Cantidad de Tickets: ${cantidad.value} Precio Final: $${total_Pagar}`;
    return `${total_Pagar} Eligió el ticket ${opcionSeleccionada} cuyo descuento es de $${descuento}`;//mi función devuelve el texto que quiero mostrar y el valor de las variables correspondientes
}
/*Validar email que contenga el formato apropiado*/
function validarEmail(){
    let campo_correo  = document.getElementById("id_correo").value;
    let formatomail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; //formato de mail caracteres
    if(campo_correo.match(formatomail)) //si coincide devuelve true sino false e email invalido
    { 
        return true;
    }
    else
    {
        alert("Email INVÁLIDO");
        return false;
    }
}
//Validación de FORMULARIO// 
function validarFormulario() {
    //Creo las variables correspondientes y tomo sus valores 
    let campo_nombre = document.getElementById("id_nombre").value;
    let campo_apellido  = document.getElementById("id_apellido").value;
    let campo_correo  = document.getElementById("id_correo").value;
    if ((campo_nombre  == "" || campo_apellido == "" || campo_correo == "" || validarEmail() == false)) {
        alert("Por favor, complete todos los campos."); //Si cualquiera de estos campos está vacío entonces devuelve un alert
    } else {
        return true; //Si está completo entonces true
    }
}

let textoPagar = document.getElementById("textoPagar"); //guardo mi elemento contenedor textoPagar padre de H2
//Al hacer click en el btn resumen escuchará al evento click y entonces 
btn_resumen.addEventListener("click", ()=>{ 
    if(validarFormulario() == true){ //si se valida el formulario completo y es true, entonces aparece el precio correspondiente al ticket
        textoPagar.textContent = "Total a pagar: $"; //Lo primero que ocurre si la persona hace click en el botón resumen se reemplazará el texto actual por este, como es el mismo, no se notará la diferencia a simple vista. Lo hice para que no se acumulen los precios cada vez que la persona aprete el botón
        texto = document.createTextNode(ticketElegido()); //creo un nodo de tipo texto y guardo dentro de la variable el texto retornado por la función
        textoPagar.appendChild(texto); //se lo asigno al hijo del contenedor textoPagar, es decir a mi H2.    
    }
})

let btn_borrar = document.getElementById("id_borrar"); //guardo mi elemento boton borrar
btn_borrar.addEventListener("click", ()=>{ //cuando el usuario haga click sobre el botón borrar entonces
    textoPagar.textContent = "Total a pagar: $"; //se reeplaza el contenido actual por este nuevo
})



