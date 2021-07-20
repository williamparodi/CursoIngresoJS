//Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.

function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	
	numeroIngresado = prompt("Ingrese 5 numeros");

	while(contador < 5)// porque incia en 0
	{
		numeroIngresado = prompt("Ingrese 5 numeros");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;
	}

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value= acumulador/contador;
	
}//FIN DE LA FUNCIÓN