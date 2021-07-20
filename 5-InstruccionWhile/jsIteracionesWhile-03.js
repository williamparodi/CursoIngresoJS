/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;

	claveIngresada = prompt("ingrese el número clave.");
	
	while(claveIngresada != "utn750")
	{
		alert("Error");
		claveIngresada = prompt("Ingrese clave nuevamente");
	}

	alert("Ingreso al sistema");
}//FIN DE LA FUNCIÓN
