/*
EJERCICIO 1
Para una veterinaria se necesita un programa que permita ingresar datos de perros con su precio de vacunación a pagar hasta que el cliente quiera. 
Por cada perro, se ingresa:
* raza: (validar "sharpei", "galgo", "pastor").
* nombre,
* edad (entre 1 y 25),
* peso (mas de 0),
* precio de consulta (desde 500 hasta 1500).

Se pide informar por alert:
a)El importe total a pagar por las vacunaciones, sin descuento.
b)El importe total a pagar con descuento (solo si corresponde)
    Si se vacunan más de 2 perros, se obtiene un 20% de descuento sobre el total a pagar.
    Si se vacunan más de 4 perros, se obtiene un 30% de descuento sobre el total a pagar.
c)La raza con más cantidad de perros
d)Nombre, raza y edad del perro más viejo ingresado

*/

function mostrar()
{
	var raza;
	var nombre;
	var edad;
	var peso;
	var precioConsulta;
	var respuesta;

	//a
	
	var importeTotal;
	var importeDesc;
	var descuento;

	//c
	var contadorSharpei;
	var contadorGalgo;
	var contadorPastor;

	//d
	var nombrePerroViejo;
	var razaPerroViejo;
	var edadMaxima;
	var banderaDelPrimerMaximo;


	respuesta = true;
	contadorPastor = 0;
	contadorGalgo = 0;
	contadorSharpei = 0;
	banderaDelPrimerMaximo = true;
	importeTotal = 0;

	while(respuesta == true)
	{

		raza = prompt("Ingrese raza :sharpei, galgo, pastor ");

		while(raza != "sharpei" && raza != "galgo" && raza != "pastor")
		{
			raza = prompt("Error;Ingrese raza :sharpei, galgo, pastor ");
		}

		nombre = prompt("ingrese nombre");

		while(!isNaN(nombre))
		{
			nombre = prompt("Error;ingrese nombre ");
		}

		edad = prompt("Ingrese edad");
		edad = parseInt(edad);

		while(isNaN(edad)|| edad < 1 || edad >25)
		{
			edad = prompt("Error;Ingrese edad");
			edad = parseInt(edad);
		}

		peso = prompt("ingrese peso ");
		peso = parseFloat(peso);

		while(isNaN(peso) || peso < 1)
		{
			peso = prompt("error;ingrese peso ");
			peso = parseFloat(peso);
		}

		precioConsulta = prompt("Ingrese precio");
		precioConsulta = parseFloat(precioConsulta);

		while(isNaN(precioConsulta)|| precioConsulta < 500 || precioConsulta >1500)
		{
			precioConsulta = prompt("Error;Ingrese precio");
			precioConsulta = parseFloat(precioConsulta);
		}

		switch(raza)
		{
			case "sharpei":
				contadorSharpei = contadorSharpei + 1;
			break;
			case "pastor":
				contadorPastor = contadorPastor + 1;
			break;
			case "galgo":
				contadorGalgo = contadorGalgo + 1;
			break;
		}

		if(edad > edadMaxima || banderaDelPrimerMaximo == true)
		{
			edadMaxima = edad;
			nombrePerroViejo = nombre;
			razaPerroViejo = raza;

			banderaDelPrimerMaximo = false;
		}

		importeTotal = importeTotal + precioConsulta;




		respuesta = confirm("Desea continuar?")
	}

	cantidadDePerros = contadorGalgo + contadorSharpei + contadorPastor;

	document.write("El importe Total  sin descuento : "+ importeTotal+ " <br>");

	if(cantidadDePerros > 2 || cantidadDePerros < 5)
	{
		descuento = 20;
	}
	else
	{
		if(cantidadDePerros > 4)
		{
			descuento = 30;
		}
		else
		{
			descuento = 0;
		}
	}
	if(descuento !=0)
	{
		descuento = (importeTotal * descuento) /100;
		importeDesc = importeTotal - descuento;
		document.write("El importe con descuento : "+importeDesc+" <br>");
	}
	if(contadorPastor > contadorGalgo && contadorPastor > contadorSharpei)
	{
		document.write("el de mas cantidad es Pastor <br>");
	}
	else
	{
		if(contadorSharpei > contadorGalgo)
		{
			document.write("El de mas cantidad es sharpei <br>");
		}
		else
		{
			document.write("El de mas cantidad es galgo <br>");
		}
	}



	document.write("El nombre del perro mas viejo : "+nombrePerroViejo+ " y raza : "+razaPerroViejo+ " edad "+edadMaxima+ " <br>");
	





	

}//FIN DE LA FUNCIÓN