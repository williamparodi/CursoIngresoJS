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

  importe = document.getElementById("txtIdImporte").value;
  importe = parseFloat(importe);

  descuento = importe * 25 / 100;
  resultado = importe - descuento;

  document.getElementById("txtIdResultado").value = resultado.toFixed(2);
}
