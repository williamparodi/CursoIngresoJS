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
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
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

}//FIN DE LA FUNCIÓN