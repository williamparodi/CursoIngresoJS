/*
EJERCICIO 2
El dueño de una tienda dedicada a la compra/venta de cartas de Yu-Gi-Oh! desea ingresar en el
sistema las ventas realizadas en el dia de la fecha y conocer ciertos datos en base a las cartas
que se vendieron.
Se ingresara hasta que el usuario decida:
* Nombre de la carta.
* Tipo de carta: Validar "monstruo", "magica", "trampa".
* Rareza: Validar "rara", "super rara", "ultra rara".
* Precio: Validar que no sea 0 o negativo.
Se pide informar por document.write:
A) El nombre y rareza de la carta con mayor precio.

B) Cuantas cartas de tipo "trampa" y de rareza "rara o super rara" fueron vendidas.

C) El promedio de precio de las cartas de tipo "monstruo" de rareza "ultra rara" con un precio menor a 500.
*/


function mostrar()
{
	var nombre;
	var tipo;
	var rareza;
	var precio;
	var respuesta;

	//a
	var	nombreMayorPrecio;
	var rarezaMayorPrecio;
	var precioMaximo;
	var banderaDelPrimero;

	var contadorTrampaRaraSuper;

	//c
	var contadorMonstruoUltarara;
	var acumuladorPrecio;
	var promedioPrecio;


	respuesta = true;
	banderaDelPrimero = true;
	contadorTrampaRaraSuper = 0;
	contadorMonstruoUltarara = 0;
	acumuladorPrecio = 0;

	while(respuesta == true)
	{

		nombre = prompt("Ingrese nombre");

		tipo = prompt("Ingrese Tipo de carta :monstruo, magica, trampa");

		while(tipo != "monstruo" && tipo != "magica" && tipo != "trampa")
		{
			tipo = prompt("Error;Ingrese Tipo de carta :monstruo, magica, trampa");
		}

		rareza = prompt("ingrese rareza : rara, super rara, ultra rara");

		while(rareza != "rara"&& rareza != "super rara" && rareza != "ultra rara")
		{
			rareza = prompt("Error;ingrese rareza : rara, super rara, ultra rara");
		}
		precio = prompt("ingrese precio");
		precio = parseInt(precio);

		while(isNaN(precio)|| precio <1)
		{
			precio = prompt("Error;ingrese precio");
			precio = parseInt(precio);
		}

		if(precio > precioMaximo || banderaDelPrimero == true)
		{
			precioMaximo = precio;
			nombreMayorPrecio = nombre;
			rarezaMayorPrecio = rareza;
			banderaDelPrimero = false;
		}

		switch(tipo)
		{
			case "trampa":
				if(rareza == "rara"|| rareza =="super rara")
				{
					contadorTrampaRaraSuper = contadorTrampaRaraSuper + 1;
				}
			break;
			case "monstruo":
				if(rareza == "ultra rara" && precio<500)
				{
					contadorMonstruoUltarara = contadorMonstruoUltarara + 1;
					acumuladorPrecio = acumuladorPrecio + precio;
				}
			break;
		}

		respuesta = confirm("Desea continuar?");
	}

	document.write("El nombre de la carta mas cara es : "+nombreMayorPrecio+ "y es de rareza : "+ rarezaMayorPrecio+ " <br>");

	if(contadorTrampaRaraSuper != 0)
	{
		document.write("La cantidad de cartas trampa rara o super rara es de : "+contadorTrampaRaraSuper+ " <br>");
	}
	else
	{
		document.write("no se compraron cartas trampa con esa rareza <br>");
	}
	if(contadorMonstruoUltarara !=0)
	{
		promedioPrecio = acumuladorPrecio / contadorMonstruoUltarara;
		document.write("El precio promedio de las cartas Montruo ultra rara es : "+promedioPrecio+ " <br>");
	}
	else
	{
		document.write("no se compraron cartas de ese tipo <br>");
	}











































	/*
	var nombre;
	var tipo;
	var rareza;
	var precio;
	var respuesta;

	var nombreMayorPrecio;
	var rarezaMayorPrecio;
	var banderaDelPrimerMaximo;
	var precioMaximo;

	var contadorTrampaRaraSuper;
	var contadorMonstruoUltra;
	var precioMonstruo;
	var promedioPrecio;

	banderaDelPrimerMaximo = true;
	respuesta = true;
	contadorTrampaRaraSuper = 0;
	contadorMonstruoUltra = 0;
	precioMonstruo = 0;

	while(respuesta == true)
	{

		nombre = prompt("Ingrese nombre");

		while(!isNaN(nombre))
		{
			nombre = prompt("Error;Ingrese nombre");
		}

		tipo = prompt("ingrese tipo de carta :monstruo, magica, trampa");

		while(tipo != "monstruo" && tipo != "magica" && tipo != "trampa")
		{
			tipo = prompt("Error;ingrese tipo de carta :monstruo, magica, trampa");
		}

		rareza = prompt("Ingrese rareza : rara, super rara, ultra rara");

		while(rareza != "rara" && rareza != "super rara" && rareza != "ultra rara")
		{
			rareza = prompt("Error;Ingrese rareza : rara, super rara, ultra rara");
		}

		precio = prompt("Ingrese precio");
		precio = parseInt(precio);

		while(isNaN(precio)|| precio <1)
		{
			precio = prompt("Error;Ingrese precio");
			precio = parseInt(precio);
		}

		if(precio > precioMaximo || banderaDelPrimerMaximo == true)
		{
			precioMaximo = precio;
			nombreMayorPrecio = nombre;
			rarezaMayorPrecio = rareza;
			banderaDelPrimerMaximo = false;
		}

		switch(tipo)
		{
			case "trampa":
				if(rareza =="rara")
				{
					contadorTrampaRaraSuper = contadorTrampaRaraSuper + 1;
				}
				else
				{
					if(rareza =="super rara")
					{
						contadorTrampaRaraSuper = contadorTrampaRaraSuper + 1;
					}
				}
			break;
			case "monstruo":
				if(rareza == "ultra rara" && precio <500)
				{
					contadorMonstruoUltra = contadorMonstruoUltra + 1;
					precioMonstruo = precioMonstruo + precio;
				}
			break;
			default:
			break;

		}

		respuesta = confirm("Desea continuar??");
	}

	document.write("El nombre de la carta con mayor precio es : "+nombreMayorPrecio+" y es de rareza : "+rarezaMayorPrecio+ " <br>");
	document.write("la cantidad de cartas trampa de rareza rara o super rara es : "+contadorTrampaRaraSuper+ " <br>");
	
	if(contadorMonstruoUltra !=0)
	{
		promedioPrecio = precioMonstruo / contadorMonstruoUltra;
		document.write("El promedio de cartas monstruo con precio menor a 500 es : "+promedioPrecio+ " <br>");
	}
	else
	{
		document.write("Sin cartas solicitado");
	} */

}//FIN DE LA FUNCIÓN