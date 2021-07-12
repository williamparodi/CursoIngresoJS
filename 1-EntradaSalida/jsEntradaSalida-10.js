/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

function mostrarAumento()
{
  var importe;
  var descuento;
  var resultado;
  var mensaje;

  importe = document.getElementById("txtIdImporte").value;
  descuento = prompt("Ingrese el porcentaje de descuento");

  importe = parseFloat(importe);
  descuento = parseInt(descuento);
  
  descuento = importe * descuento / 100;
  resultado = importe - descuento;

  document.getElementById("txtIdResultado").value = resultado.toFixed(2);

  /*

  var importe;
  var descuento;
  var resultado;

  importe = document.getElementById("txtIdImporte").value;
  importe = parseFloat(importe);

  descuento = importe * 25 / 100;
  resultado = importe - descuento;

  document.getElementById("txtIdResultado").value = resultado.toFixed(2);
  */
}

//"txtIdImporte"
//"txtIdResultado"

/* Entrada 
  El importe por Id
 
 Procesos
  calculo el desc.
  aplico el desc.

 Salidas

     El precio final por Id.
Tipos de salidas
    console.log
    document.write
    alert
    Id
*/
// descuento 0.25 resto al importe.
// aumento 1.25 sumo al importe.

