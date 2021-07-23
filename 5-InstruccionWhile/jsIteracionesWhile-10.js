/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 
10-Maximo de los valores ingresados
11-Minimo de positivos*/
function mostrar()
{	
	var numeroIngresado;
	var respuesta;
	var sumaNegativos;
	var sumaPositivos;
	var cantidadNegativos;
	var cantidadPositvos;
	var	cantidadCeros;
	var cantidadPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	var numeroMaximo;
	var banderaDelPrimero;
	var minimoPositivo;

	banderaDelPrimero = false;
	respuesta = true;
	
	sumaNegativos = 0;
	sumaPositivos = 0;
	cantidadPositvos = 0;
	cantidadNegativos = 0;
	cantidadCeros = 0;
	cantidadPares = 0;
	minimoPositivo = 0;
	numeroMaximo = 0;

	while(respuesta == true)
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
		if(numeroIngresado < minimoPositivo && numeroIngresado > 0 || banderaDelPrimero ==false)
		{
			minimoPositivo = numeroIngresado;
			banderaDelPrimero = true;
		}
		if(numeroIngresado <0)
		{
			sumaNegativos = sumaNegativos + numeroIngresado;
			cantidadNegativos = cantidadNegativos + 1;
 		}
		else
		{
			if(numeroIngresado>0)
			{
				sumaPositivos = sumaPositivos + numeroIngresado;
				cantidadPositvos = cantidadPositvos + 1;
			}
			else
			{
				cantidadCeros = cantidadCeros + 1;
			}
		}
		if(numeroIngresado % 2 ==0)
		{
			cantidadPares = cantidadPares + 1;
		}

		respuesta = confirm("Desea Continuar?");
	}	
	
	diferencia = sumaPositivos - sumaNegativos;

	if(cantidadPositvos != 0)
	{
		promedioPositivos = sumaPositivos / cantidadPositvos; 
		document.write("El promedio de positivos es : " +promedioPositivos.toFixed(2)+ " <br>");
	}
	else
	{
		document.write("No se pudo calcular el promedio de Positivos <br>");
	}
	if(cantidadNegativos != 0)
	{
		promedioNegativos = sumaNegativos / cantidadNegativos;
		document.write("El promedio de negativos es de : " +promedioNegativos.toFixed(2)+ " <br>");
	}
	else
	{
		document.write("No se pudo calcular el promedio de negativos <br>");
	}
	document.write("La suma de negativos es : " +sumaNegativos+ " <br>");
	document.write("La suma de porsitivos es :" +sumaPositivos+ " <br>");
	document.write("La diferencia entre positivos y negativos es : "  +diferencia+ " <br>")
	document.write("La cantidad de Ceros es : " +cantidadCeros+ " <br>");
	document.write("La cantidad de pares es : " +cantidadPares+ " <br>");
	document.write("El numero maximo ingresado es : " +numeroMaximo+ " <br>");
	document.write("El numero minimo positivo ingresado es :" +minimoPositivo+ " <br>");

}//FIN DE LA FUNCIÓN