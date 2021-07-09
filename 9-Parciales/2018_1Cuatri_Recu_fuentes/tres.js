function mostrar()
{
	var precio;
	var descuento;
	var precioFinal;

	precio = prompt("Ingrese el precio");
	descuento = prompt("Ingrese el porcentaje descuento");

	precio = parseFloat(precio);
	descuento = parseFloat(descuento);

	descuento = precio * descuento /100;
	precioFinal = precio - descuento;

	document.getElementById("elPrecioFinal").value = precioFinal;
}
