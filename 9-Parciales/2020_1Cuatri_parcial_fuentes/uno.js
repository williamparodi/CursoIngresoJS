/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/
function mostrar()
{
	var barbijo;
	var jabón;
	var alcohol;
	var producto;
	var precio;
	var cantidad;
	var fabricante;
	var palmolive;
	var jhonson;
	var suave;
	var contador;
	var cantidadMaxima;
	var precioMinimo;
	var promedioCompra;
	var banderaPrimerMinimo;
	var banderaCantidadMaxima;

	
	contador = 0;
	cantidad = 0;
	precio =0;
	banderaPrimerMinimo = true;
	banderaCantidadMaxima = true;

	while(contador <6)
	{
		producto = prompt("Ingrese el producto deseado : b -barbijo, j -Jabón o a -alcohol");

		while(producto != "b" && producto != "j" && producto != "a")
		{
			producto = prompt("Error, vuelva a ingresar producto :b -barbijo, j -Jabón o a -alcohol");
		}

		precio = prompt("Ingrese precio deseado, tiene un rango de $100 a $300");
		precio = parseInt(precio);

		while(isNaN(precio)|| precio < 100 || precio > 300)
		{
			precio = prompt("Error,Ingrese precio deseado, tiene un rango de $100 a $300");
			precio = parseInt(precio);
		}

		cantidad = prompt("Ingrese cantidad de unidades(no puede superar las 1000 unidades)");
		cantidad = parseInt(cantidad);

		while(isNaN(cantidad)|| cantidad <0 || cantidad >1000)
		{
			cantidad = prompt("Error;Ingrese cantidad de unidades(no puede superar las 1000 unidades)");
			cantidad = parseInt(cantidad);
		}

		fabricante = prompt("Elija Marca : p - Palmolive, j -Jhonson s - Suave");

		while(fabricante != "p" && fabricante != "j" && fabricante != "s")
		{
			fabricante = prompt("Error; elija Marca : p - Palmolive, j -Jhonson s - Suave");
		}

		if(precio < precioMinimo || banderaPrimerMinimo == false)
		{
			precioMinimo = precio;
			banderaPrimerMinimo = true;
		}
		if(cantidad > cantidadMaxima || banderaCantidadMaxima == false)
		{
			cantidadMaxima = cantidad;
			banderaCantidadMaxima == true;
		}


		contador = contador + 1;
	}

	document.write("el alcochol mas barato"+precioMinimo);
}

/*switch(producto)
		{
			case "b":
				producto = barbijo;
			break;
			case "j":
				producto = jabón;
			break;
			case "a":
				producto = alcohol;
			default:
			break;
		}

		switch(fabricante)
		{
			case "p":
				producto = palmolive;
			break;
			case "j":
				producto = jhonson;
			break;
			case "s":
				producto = suave;
			break;
		}*/
		