/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
   var importe;
   var descuento;
   var total;
   var resultado;

   

   descuento = prompt("ingrese descuento");
   importe = document.getElementById("txtIdImporte").value;

   importe = parseFloat(importe);
   descuento = parseInt(descuento);

   resultado = (importe * descuento) / 100;
   total = importe - resultado;



   document.getElementById("txtIdResultado").value = total;


   
   

   

}
