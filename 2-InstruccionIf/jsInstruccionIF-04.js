function mostrar()
{
	var edad;
		
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad >=13 && edad <=17)
	{
		alert("Es adolcente");
	}
	else
	{
		alert("No es adolcente");
	}
}//FIN DE LA FUNCIÓN