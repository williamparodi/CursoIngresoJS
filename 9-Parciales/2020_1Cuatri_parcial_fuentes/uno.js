/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante(x)
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/

function mostrar()
{
	var tipo;
	var precio;
	var cantidad;
	var marca;
	var fabricante;
	var contador;
	var precioMinino;
	var contadorJabon;
	var contadorAlcohol;
	var contadorBarbijo;
	var contadorAlcoholBarato;
	var fabricanteAlcoholBarato;
	var cantidadComprasTipo;
	var tipoMasUnidades;
	var cantidadMaxima;
	var promedioCompra;
	var banderaPrimerCantidad;
	var banderaPrecioMinino;

	contador = 0;
	contadorJabon = 0;
	contadorAlcohol = 0;
	contadorBarbijo = 0;
	fabricanteAlcoholBarato = 0;
	contadorAlcoholBarato = 0;
	cantidadComprasTipo = 0;
	cantidadMaxima = 0;
	comprasMaximas = 0;
	precioCompra = 0;
	banderaPrimerCantidad = false;
	banderaPrecioMinino = true;
	
	while(contador <6)
	{
		tipo = prompt("Ingrese el tipo de productos : A - Alcohol J -Jabón o B - Barbijo");

		while(tipo != "a" && tipo != "j" && tipo != "b")
		{
			tipo = prompt("Error,Ingrese el tipo de productos : A - Alcohol J -Jabón o B - Barbijo");
		}

		precio = prompt("Ingrese un precio entre $100 y $300");
		precio = parseInt(precio);

		while(isNaN(precio) || precio <100 || precio > 300)
		{
			precio = prompt("Error;Ingrese un precio entre $100 y $300");
			precio = parseInt(precio);
		}

		cantidad = prompt("Ingrese la cantidad (Limite 1000 unidades)");
		cantidad = parseInt(cantidad);

		while(cantidad <0 || cantidad >1000)
		{
			cantidad = prompt("Error;ingrese la cantidad (Limite 1000 unidades)");
			cantidad = parseInt(cantidad);
		}

		marca = prompt("Ingrese Marca");
		fabricante = prompt("Ingrese fabricante");

		switch(tipo)
		{
			case "a":
				tipo = "alcohol";
				contadorAlcohol = contadorAlcohol + cantidad;
			break;
			case "b":
				tipo = "barbijo";
				contadorBarbijo = contadorBarbijo + cantidad;
			break;
			case "j":
				tipo = "jabon";
				contadorJabon = contadorJabon + cantidad;
			break;
		}		

		if(precio < precioMinino && tipo == "a" || banderaPrecioMinino ==true)
		{
			precioMinino = precio;
			fabricanteAlcoholBarato = fabricante;
			contadorAlcoholBarato = cantidad;
			banderaPrecioMinino = false;
		}
		
		if(cantidad > cantidadMaxima || banderaPrimerCantidad ==false)
		{
			cantidadMaxima = cantidad;
			tipoMasUnidades = tipo;
			precioCompra = precioCompra + precio;
			comprasMaximas = comprasMaximas +1;
			banderaPrimerCantidad = true;
		}

		contador = contador + 1;
	}

	promedioCompra = precioCompra / comprasMaximas; 

	
	document.write("Tipo con mas unidades "+tipoMasUnidades +" con un promedio por compra de "+promedioCompra+" <br>");
	document.write("El alcohol mas barato tiene una cantidad "+contadorAlcoholBarato + " y el fabricante es "+fabricanteAlcoholBarato+" <br>");
	document.write("La cantidad de jabon es de : "+contadorJabon+ " unidades <br>");
}	