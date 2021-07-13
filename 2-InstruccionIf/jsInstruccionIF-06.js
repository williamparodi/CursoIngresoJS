function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad > 17)
	{
		alert("Usted es mayor de edad");
	}
	else 
	{
		if(edad >12 && edad <18)// También podría poner solo (edad >12)
		{
		  alert("Es adolcente")
		} 
		
		else
		{
			alert("Es menor");
		}
	}

}//FIN DE LA FUNCIÓN