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
	
	document.write("La suma de negativos es : " +sumaNegativos+ " <br>");
	document.write("La suma de porsitivos es :" +sumaPositivos+ " <br>");

	if(cantidadPositvos != 0)
	{
		promedioPositivos = sumaPositivos / cantidadPositvos; 
		document.write("El promedio de positivos es : " +promedioPositivos+ " <br>");
	}
	else
	{
		document.write("No se pudo calcular el promedio de Positivos");
	}
	if(cantidadNegativos != 0)
	{
		promedioNegativos = sumaNegativos / cantidadNegativos;
		document.write("El promedio de negativos es de : " +promedioNegativos+ " <br>");
	}
	else
	{
		document.write("No se pudo calcular el promedio de negativos");
	}
	document.write("La cantidad de Ceros es : " +cantidadCeros+ " <br>");
	document.write("La cantidad de pares es : " +cantidadPares+ " <br>");
	document.write("El numero maximo ingresado es : " +numeroMaximo+ " <br>");
	document.write("El numero minimo positivo ingresado es :" +minimoPositivo+ " <br>");

	/*
    var numeroIngresado;
	var respuesta;
	var numeroNegativo;
	var numeroPositivo;
	var contadorCero;
	var contadorPar;
	var sumaPositivos;
	var sumaNegativos;
	var contadorNegativo;
	var contadorPositivo;
	var promedioNegativos;
	var promedioPositivos;

	sumaNegativos = 0;
	sumaPositivos =0;
	contadorNegativo= 0;
	contadorPositivo = 0;
	contadorCero=0;
	contadorPar=0;

	respuesta=true;

	while(respuesta==true)
	{
		numeroIngresado = prompt("Ingrese numeros");
		numeroIngresado =parseInt(numeroIngresado);

		while(isNaN(numeroIngresado))
		{
			numeroIngresado = prompt("Error, ingrese numeros");
			numeroIngresado = parseInt(numeroIngresado);
		}
		if(numeroIngresado < 0)
		{
			numeroNegativo = numeroIngresado;
			sumaNegativos = sumaNegativos + numeroIngresado;
			contadorNegativo = contadorNegativo + 1;
		}
		else
		{
			if(numeroIngresado > 0)
			{
				numeroPositivo = numeroIngresado;
				sumaPositivos = sumaPositivos + numeroIngresado;
				contadorPositivo = contadorPositivo + 1;
			}
			else
			{
				contadorCero = contadorCero + 1; 
			}
		}
		if(numeroIngresado % 2 == 0)
		{
			contadorPar = contadorPar + 1;
		}
		respuesta=confirm("desea continuar?");
	}//fin del while

	
	
	diferencia = sumaPositivos - sumaNegativos;

	document.write("La suma de negativos es : " +sumaNegativos+ " <br>");
	document.write("La suma de positivos es : " +sumaPositivos+" <br>");
	document.write("La cantidad de negativos es : " +contadorNegativo+" <br>");
	document.write("La cantidad de positivos es : " +contadorPositivo+" <br>");
	document.write("La cantidad de ceros es : " +contadorCero+" <br>");
	document.write("La cantidad de numeros pares es : " +contadorPar+" <br>");
	document.write("La diferencia entre numeros positivos y negativos es : " +diferencia+" <br>");

	if(contadorNegativo != 0)
	{
		promedioNegativos = sumaNegativos / contadorNegativo;
		document.write("El promedio de numeros negativos es " +promedioNegativos+" <br>");
	}
	else
	{
		document.write("El Promedio de los negativos: no se pudo calcular <br>");
	}
	if(contadorPositivo != 0)
	{
		promedioPositivos = sumaPositivos / contadorPositivo;
		document.write("El promedio de numeros positivos es : " +promedioPositivos+" <br>");
	}
	else
	{
		document.write("Promedio de los positivos : no se pudo calcular <br>");
	}
	*/
}//FIN DE LA FUNCIÓN