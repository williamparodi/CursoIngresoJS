//Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste

function mostrar()
{
	var destinoIngresado;
	var mensaje;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)
	{
		case "Bariloche":
			mensaje = "Queda al oeste del País";
		break;
		case "Cataratas":
			mensaje = "Queda al norte del País";
		break;
		case "Mar del plata":
			mensaje = "Queda al este del País";
		break;
		default:
			mensaje = "Queda al sur del País";
		break;
	}
	
	alert(mensaje);

}//FIN DE LA FUNCIÓN