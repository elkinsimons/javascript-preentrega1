// SISTEMA DE TURNOS PARA UN SERVICIO DE MASAJES.

// Se toman, validan y muestran los datos de la solicitud de consulta de un posible cliente.
// Se presupuesta un servicio y un posible descuento, según la información otorgada.
// Al final se le informa la duración y el valor (con o sin descuento según corresponda).


alert("Hola, para poder darle un turno voy a solicitar que complete unos datos.  Muchas gracias." );

function tomarDatosPersonales() {
  let nombre = prompt("Ingrese su primer nombre:");
  let apellido = prompt("Ingrese su apellido:");
  let edad = prompt("Ingrese su edad:");
  if (edad <= 17) { 
    alert("Si eres menor de edad va a ser necesario que te acompañe un mayor de edad"); 
    let nombreTutor = prompt("Ingrese nombre y apellido de su tutor o acompañante:");
    let edadTutor = prompt("Ingrese la edad de su tutor o acompañante:");
    console.log("Edad:",edad );
    console.log("Nombre del tutor:",nombreTutor );
    console.log("Edad del tutor:",edadTutor );
    } else if (edad => 65){
      let confirmarJubilacion = confirm("¿Está usted jubilado/a?");
      console.log("Jubilado/a", confirmarJubilacion)
      }
    
  //Validar edades con alerta y sugerencia de acompañamiento con otra función.
     // si edad menor/igual a 17, sugerir acompañamiento
     // si edad mayor a 65 consultar por jubilacion
  
  // Consultar duración de la sesión: 60 o 90 e informar sus valores en el alert   
     // Aplicar descuento del 20% si la persona es jubilada
  

  let zonaDeDolor = prompt("¿Qué partes de tu cuerpo te duelen?  (Ej.: Espalda, brazos, cintura, etc.)");
  console.log("Nombre:",nombre );
  console.log("Apellido:",apellido );
  
  //  console.log("Tu sesión tendrá un valor de:", descuentoJubilacion );
  
  
    // } else if (confirmarJubilacion == true){let descuentoJubilacion = 60 * 0.8;}

  console.log("Siento dolor en",zonaDeDolor );
}

// Presupuesto del servicio

tomarDatosPersonales()

alert("¡Gracias por completar sus datos!" );

// alert("Se aplicó un descuento del 20% por jubilación.");

alert("Tu (sesión de una hora/hora y media) tendrá un valor de ($$)" );
// Condiciones para generar el descuento.

// Define mensajes claros a mostrar en los cuadros de diálogo. Concatena textos con variables, y realiza saltos de línea en textos extensos. Esto facilitará su lectura 