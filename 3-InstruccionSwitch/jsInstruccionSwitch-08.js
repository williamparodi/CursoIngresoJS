function mostrar()
{
	var destinoIngresado;
	var mensaje;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Usuhaia":
			mensaje = "En este destino hace frío";
		break;
		default:
			mensaje = "En este destino hace calor";
		break;
	}
	
	alert(mensaje);

}//FIN DE LA FUNCIÓN