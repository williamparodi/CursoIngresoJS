/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables

	banderaDelPrimero = false;
	respuesta = true;

	while(respuesta==true)
	{
		numeroIngresado = prompt("Ingrese numeros");
		numeroIngresado = parseInt(numeroIngresado);

		while(isNaN(numeroIngresado))
		{
			numeroIngresado = prompt("Error,ingrese numeros");
			numeroIngresado = parseInt(numeroIngresado);
		}

		if(numeroIngresado > numeroMaximo || banderaDelPrimero ==false)
		{
			numeroMaximo = numeroIngresado;
		}
		if(numeroIngresado < numeroMinimo || banderaDelPrimero ==false)
		{
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = true; //Cambio la bandera
		}
		
		respuesta= confirm("Desea continuar?");
	}

	document.getElementById("txtIdMaximo").value=numeroMaximo;
	document.getElementById("txtIdMinimo").value=numeroMinimo;
}//FIN DE LA FUNCIÓN