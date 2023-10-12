//!Parte ingreso-Organizacion

//? Elegir Evento// OK
//? Ingreso de protocolo// OK
//? Ingreso con entrada general// OK


//---------------------------------------------------------------------------------
function seleccion_Evento() {
var evento = true;
while (evento) {
    var evento = prompt("Escriba el evento que va a participar.").toUpperCase();
    if ( evento == "MAS MONUMENTAL")  { // preguntar porque con enter salta directo al alert("gracias....")
        console.log (" ciente")
        break;
    }
}
alert("gracias por elegir ' Mas Monumental'")

}

seleccion_Evento()
//------------------------------------------------------------------------------------

function ingreso_Pago (){
var  consulta_ingreso = prompt( "Indique su forma de ingreso correspondiente Protocolo o Entrada").toUpperCase()
while (consulta_ingreso) {
    if ( consulta_ingreso == "ENTRADA") {
        var seleccionde_Pago = prompt("indique su forma de pago : 'DEBITO/ CREDITO/ BOLETERIA'").toUpperCase();
    console.log ("ingreso dinero");
        break;
        // como convertir el texto sin tener q pedirlo en mayuscula
    } else {
    consulta_ingreso == "PROTOCOLO";
    alert("ingreso sin costo");
    console.log ("Protocolo")
    break;
    }
}

switch(seleccionde_Pago) {
case "DEBITO" : 
alert(" Con este medio tiene un 10% de descuento");
                const descuento_10 = (a,b) => { return a*b} // constante + funcion()+ retorno
                alert (" El descuento por debito es de $" + descuento_10(10000,0.10)) 
                console.log ("PAGO DEBITO")
break;
case "CREDITO" :
    alert("Tiene 3 y 6 cuotas sin interes");
            
            const divir_3 = (a,b) => { return a/b} // constante + funcion()+ retorno 
            alert( "3 cuotas sin interes de $" + divir_3 (10000,3));
            const divir_6 = (a,b) => { return a/b} // constante + funcion()+ retorno 
            alert( "6 cuotas sin interes de $" + divir_6 (10000,6));
            console.log ("PAGO CREDITO")
            break;
            case "BOLETERIA":
                alert ( "Pago prensencial en Figueroa alcorta 2190")
                console.log ("PAGO BOLETERIA")

}
}

ingreso_Pago()
//! Parte forma de pago & Financiacion
 //?Formas de pago - DEBIN/TARJ- OK
 //?Descuento por debito OK
    
//----------------------------------------------------------------------------------
//! Parte Datos del cliente
// NOMBRE APELLIDO EDAD


alert (" Responda el formulario con sus datos personales, para finalizar la carga pulse el boton de 'ENTER'")

do { // inicio el ciclo DO preguntando un DATOS y mostrandolo en la consola
 
var datosClientes= prompt("ingrese su nombre");
var datosClientes2= prompt("ingrese su apellido");
var datosClientes3= parseInt(prompt("ingrese su edad"));
var finalizar = prompt( " ¿ Desea finalizar la carga? ( Recuerde pulsar 'ENTER') ");

console.log (datosClientes3)
console.log (datosClientes2)
console.log (datosClientes)

    } while (finalizar) { // Mientras que la respuesta sea un string (true) se ejecutan los codigos del ciclo, en caso de poner ENTER = NULL = FALSE se corta el ciclo PERO ESTANDO EL DO, te va a mostrar en la consola el string primero y depsues corta esa es la gran diferencia con el WHILE 
    alert ("Gracias por sus datos") 
    }


//--------------------------------------------------------------------------------






 