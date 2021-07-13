function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad <13 || edad >17)
	{
		alert("No es adolecente");
	}

}//FIN DE LA FUNCIÓN