function mostrar()
{
	var precio;
	var descuento;
	var precioFinal;

	precio = prompt("Ingrese Precio");
	descuento = prompt("Ingrese el porcentaje de descuento");

	precio = parseInt(precio);
	descuento = parseInt(descuento);

	descuento = (precio*descuento) / 100;
	precioFinal = precio-descuento;

	document.getElementById("elPrecioFinal").value = precioFinal;
}
