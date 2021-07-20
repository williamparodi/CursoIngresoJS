/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;

	numeroIngresado = prompt("ingrese un número entre 0 y 9.");

	while(numeroIngresado < 0 || numeroIngresado > 9)
	{
		alert("Numero erroneo");
		numeroIngresado = prompt("Ingrese nuevamente un numero entre el 0 y 9");
	}
	
	document.getElementById("txtIdNumero").value = numeroIngresado;
}//FIN DE LA FUNCIÓN